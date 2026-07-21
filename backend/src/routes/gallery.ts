import { Router, Request, Response } from 'express';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import db from '../database';
import { requireAuth } from '../middleware/auth';
import { processImage } from '../lib/imageProcessor';

const UPLOADS_DIR = path.join(__dirname, '..', '..', 'uploads');

// Buffer the upload in memory; sharp is the real validator (it re-encodes and
// rejects anything that isn't a genuine image). The MIME check is only a cheap
// early reject — it stays permissive because the client-supplied type is not
// trustworthy and some clients send a generic octet-stream for real images.
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB
  fileFilter: (_req, file, cb) => {
    const t = file.mimetype;
    if (/^image\//.test(t) || t === 'application/octet-stream' || !t) cb(null, true);
    else cb(new Error('Dozvoljen je samo upload slika'));
  },
});

const router = Router();

const GALLERY_CATEGORIES = ['ROĐENDANI', 'DJEVOJAČKE', 'EVENTI', 'PROSTOR', 'MAKEUP', 'OSTALO'];

// Public: get all images
router.get('/', (_req: Request, res: Response) => {
  const images = db.prepare('SELECT * FROM gallery_images ORDER BY created_at DESC').all();
  res.json({ images, categories: GALLERY_CATEGORIES });
});

// Protected: upload image
router.post('/upload', requireAuth, upload.single('image'), async (req: Request, res: Response) => {
  if (!req.file) return res.status(400).json({ error: 'Slika nije uploadovana' });

  let filename: string;
  try {
    filename = await processImage(req.file.buffer, UPLOADS_DIR);
  } catch {
    return res.status(400).json({ error: 'Slika nije ispravna ili je oštećena' });
  }

  const { alt, category } = req.body;
  // Store a relative URL — the frontend resolves it against the current origin,
  // so images work on any domain (dev, prod, or a future server migration).
  const url = `/uploads/${filename}`;

  const result = db.prepare(`
    INSERT INTO gallery_images (filename, alt, category, url)
    VALUES (?, ?, ?, ?)
  `).run(filename, alt || req.file.originalname, category || 'OSTALO', url);

  const image = db.prepare('SELECT * FROM gallery_images WHERE id = ?').get(Number(result.lastInsertRowid));
  res.status(201).json(image);
});

// Protected: update image metadata
router.put('/:id', requireAuth, (req: Request, res: Response) => {
  const { alt, category } = req.body;
  const id = Number(req.params.id);

  const existing = db.prepare('SELECT id FROM gallery_images WHERE id = ?').get(id);
  if (!existing) return res.status(404).json({ error: 'Slika nije pronađena' });

  db.prepare('UPDATE gallery_images SET alt = COALESCE(?, alt), category = COALESCE(?, category) WHERE id = ?')
    .run(alt ?? null, category ?? null, id);

  const updated = db.prepare('SELECT * FROM gallery_images WHERE id = ?').get(id);
  res.json(updated);
});

// Protected: delete image
router.delete('/:id', requireAuth, (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const image = db.prepare('SELECT * FROM gallery_images WHERE id = ?').get(id) as {
    filename: string;
  } | undefined;

  if (!image) return res.status(404).json({ error: 'Slika nije pronađena' });

  const filePath = path.join(UPLOADS_DIR, image.filename);
  if (fs.existsSync(filePath)) fs.unlinkSync(filePath);

  db.prepare('DELETE FROM gallery_images WHERE id = ?').run(id);
  res.json({ message: 'Slika obrisana' });
});

export default router;
