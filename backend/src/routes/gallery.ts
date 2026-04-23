import { Router, Request, Response } from 'express';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import db from '../database';
import { requireAuth } from '../middleware/auth';

const UPLOADS_DIR = path.join(__dirname, '..', '..', 'uploads');

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => cb(null, UPLOADS_DIR),
  filename: (_req, file, cb) => {
    const unique = `${Date.now()}-${Math.round(Math.random() * 1e6)}`;
    cb(null, `${unique}${path.extname(file.originalname)}`);
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB
  fileFilter: (_req, file, cb) => {
    const allowed = /jpeg|jpg|png|webp|gif/;
    const ok = allowed.test(path.extname(file.originalname).toLowerCase()) &&
      allowed.test(file.mimetype);
    ok ? cb(null, true) : cb(new Error('Dozvoljen je samo upload slika'));
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
router.post('/upload', requireAuth, upload.single('image'), (req: Request, res: Response) => {
  if (!req.file) return res.status(400).json({ error: 'Slika nije uploadovana' });

  const { alt, category } = req.body;
  const baseUrl = process.env.FRONTEND_URL
    ? `http://localhost:${process.env.PORT || 3001}`
    : 'http://localhost:3001';
  const url = `${baseUrl}/uploads/${req.file.filename}`;

  const result = db.prepare(`
    INSERT INTO gallery_images (filename, alt, category, url)
    VALUES (?, ?, ?, ?)
  `).run(req.file.filename, alt || req.file.originalname, category || 'OSTALO', url);

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
