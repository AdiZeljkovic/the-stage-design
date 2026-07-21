import { Router, Request, Response } from 'express';
import multer from 'multer';
import path from 'path';
import db from '../database';
import { requireAuth } from '../middleware/auth';
import { processImage } from '../lib/imageProcessor';

const UPLOADS_DIR = path.join(__dirname, '..', '..', 'uploads');

// sharp is the real validator; the MIME check is only a cheap early reject.
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 10 * 1024 * 1024 },
  fileFilter: (_req, file, cb) => {
    const t = file.mimetype;
    if (/^image\//.test(t) || t === 'application/octet-stream' || !t) cb(null, true);
    else cb(new Error('Dozvoljen je samo upload slika'));
  },
});

const router = Router();

// Public: get all services
router.get('/', (_req: Request, res: Response) => {
  const rows = db.prepare('SELECT slug, name, data, hero_image_url, updated_at FROM service_content ORDER BY sort_order').all() as {
    slug: string;
    name: string;
    data: string;
    hero_image_url: string | null;
    updated_at: string;
  }[];
  res.json(
    rows.map((r) => ({
      slug: r.slug,
      name: r.name,
      data: JSON.parse(r.data),
      hero_image_url: r.hero_image_url,
      updated_at: r.updated_at,
    }))
  );
});

// Public: get single service by slug
router.get('/:slug', (req: Request, res: Response) => {
  const row = db.prepare('SELECT slug, name, data, hero_image_url, updated_at FROM service_content WHERE slug = ?').get(req.params.slug) as {
    slug: string;
    name: string;
    data: string;
    hero_image_url: string | null;
    updated_at: string;
  } | undefined;
  if (!row) return res.status(404).json({ error: 'Usluga nije pronađena' });
  res.json({
    slug: row.slug,
    name: row.name,
    data: JSON.parse(row.data),
    hero_image_url: row.hero_image_url,
    updated_at: row.updated_at,
  });
});

// Protected: update service content
router.put('/:slug', requireAuth, (req: Request, res: Response) => {
  const { data, name } = req.body;
  const existing = db.prepare('SELECT slug FROM service_content WHERE slug = ?').get(req.params.slug);
  if (!existing) return res.status(404).json({ error: 'Usluga nije pronađena' });

  db.prepare(`
    UPDATE service_content SET
      data = COALESCE(?, data),
      name = COALESCE(?, name),
      updated_at = CURRENT_TIMESTAMP
    WHERE slug = ?
  `).run(
    data ? JSON.stringify(data) : null,
    name ?? null,
    req.params.slug
  );

  const updated = db.prepare('SELECT slug, name, data, hero_image_url, updated_at FROM service_content WHERE slug = ?').get(req.params.slug) as { slug: string; name: string; data: string; hero_image_url: string | null; updated_at: string };
  res.json({ slug: updated.slug, name: updated.name, data: JSON.parse(updated.data), hero_image_url: updated.hero_image_url, updated_at: updated.updated_at });
});

// Protected: upload hero image for a service
router.post('/:slug/hero-image', requireAuth, upload.single('image'), async (req: Request, res: Response) => {
  if (!req.file) return res.status(400).json({ error: 'Slika nije uploadovana' });

  const existing = db.prepare('SELECT slug FROM service_content WHERE slug = ?').get(req.params.slug);
  if (!existing) return res.status(404).json({ error: 'Usluga nije pronađena' });

  let filename: string;
  try {
    filename = await processImage(req.file.buffer, UPLOADS_DIR, 'hero-');
  } catch {
    return res.status(400).json({ error: 'Slika nije ispravna ili je oštećena' });
  }

  // Relative URL — resolved against the current origin on the frontend.
  const heroImageUrl = `/uploads/${filename}`;

  db.prepare('UPDATE service_content SET hero_image_url = ?, updated_at = CURRENT_TIMESTAMP WHERE slug = ?').run(heroImageUrl, req.params.slug);

  const updated = db.prepare('SELECT slug, name, data, hero_image_url, updated_at FROM service_content WHERE slug = ?').get(req.params.slug) as { slug: string; name: string; data: string; hero_image_url: string | null; updated_at: string };
  res.json({ slug: updated.slug, name: updated.name, data: JSON.parse(updated.data), hero_image_url: updated.hero_image_url, updated_at: updated.updated_at });
});

export default router;
