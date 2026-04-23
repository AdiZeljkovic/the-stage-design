import { Router, Request, Response } from 'express';
import db from '../database';
import { requireAuth } from '../middleware/auth';

const router = Router();

function parsePost(row: Record<string, unknown>) {
  return {
    ...row,
    featured: row.featured === 1,
    tags: JSON.parse((row.tags as string) || '[]'),
  };
}

// Public: get all posts
router.get('/', (_req: Request, res: Response) => {
  const posts = db.prepare(
    'SELECT * FROM blog_posts ORDER BY published_at DESC'
  ).all() as Record<string, unknown>[];
  res.json(posts.map(parsePost));
});

// Public: get single post by slug
router.get('/:slug', (req: Request, res: Response) => {
  const post = db.prepare(
    'SELECT * FROM blog_posts WHERE slug = ?'
  ).get(req.params.slug) as Record<string, unknown> | undefined;

  if (!post) return res.status(404).json({ error: 'Post nije pronađen' });
  res.json(parsePost(post));
});

// Protected: create post
router.post('/', requireAuth, (req: Request, res: Response) => {
  const { slug, title, excerpt, content, category, author, published_at, read_time, featured, tags } = req.body;

  if (!slug || !title || !content) {
    return res.status(400).json({ error: 'slug, title i content su obavezni' });
  }

  const existing = db.prepare('SELECT id FROM blog_posts WHERE slug = ?').get(slug);
  if (existing) return res.status(409).json({ error: 'Slug već postoji' });

  const result = db.prepare(`
    INSERT INTO blog_posts (slug, title, excerpt, content, category, author, published_at, read_time, featured, tags)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `).run(
    slug,
    title,
    excerpt || '',
    content,
    category || 'Ostalo',
    author || 'The Stage Tim',
    published_at || new Date().toISOString().split('T')[0],
    read_time || 5,
    featured ? 1 : 0,
    JSON.stringify(tags || [])
  );

  const created = db.prepare('SELECT * FROM blog_posts WHERE id = ?').get(Number(result.lastInsertRowid)) as Record<string, unknown>;
  res.status(201).json(parsePost(created));
});

// Protected: update post
router.put('/:id', requireAuth, (req: Request, res: Response) => {
  const { title, excerpt, content, category, author, published_at, read_time, featured, tags, slug } = req.body;
  const id = Number(req.params.id);

  const existing = db.prepare('SELECT id FROM blog_posts WHERE id = ?').get(id);
  if (!existing) return res.status(404).json({ error: 'Post nije pronađen' });

  db.prepare(`
    UPDATE blog_posts SET
      slug = COALESCE(?, slug),
      title = COALESCE(?, title),
      excerpt = COALESCE(?, excerpt),
      content = COALESCE(?, content),
      category = COALESCE(?, category),
      author = COALESCE(?, author),
      published_at = COALESCE(?, published_at),
      read_time = COALESCE(?, read_time),
      featured = ?,
      tags = COALESCE(?, tags),
      updated_at = CURRENT_TIMESTAMP
    WHERE id = ?
  `).run(
    slug ?? null,
    title ?? null,
    excerpt ?? null,
    content ?? null,
    category ?? null,
    author ?? null,
    published_at ?? null,
    read_time ?? null,
    featured !== undefined ? (featured ? 1 : 0) : null,
    tags ? JSON.stringify(tags) : null,
    id
  );

  const updated = db.prepare('SELECT * FROM blog_posts WHERE id = ?').get(id) as Record<string, unknown>;
  res.json(parsePost(updated));
});

// Protected: delete post
router.delete('/:id', requireAuth, (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const existing = db.prepare('SELECT id FROM blog_posts WHERE id = ?').get(id);
  if (!existing) return res.status(404).json({ error: 'Post nije pronađen' });

  db.prepare('DELETE FROM blog_posts WHERE id = ?').run(id);
  res.json({ message: 'Post obrisan' });
});

export default router;
