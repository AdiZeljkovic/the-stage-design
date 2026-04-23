import { Router, Request, Response } from 'express';
import db from '../database';
import { requireAuth } from '../middleware/auth';

const router = Router();

// Public: get all settings as key-value object
router.get('/', (_req: Request, res: Response) => {
  const rows = db.prepare('SELECT key, value FROM site_settings').all() as {
    key: string;
    value: string;
  }[];
  const settings: Record<string, string> = {};
  for (const row of rows) settings[row.key] = row.value;
  res.json(settings);
});

// Protected: update settings (partial update supported)
router.put('/', requireAuth, (req: Request, res: Response) => {
  const updates = req.body as Record<string, string>;
  if (typeof updates !== 'object' || Array.isArray(updates)) {
    return res.status(400).json({ error: 'Body mora biti objekat ključ-vrijednost' });
  }

  const upsert = db.prepare(`
    INSERT INTO site_settings (key, value, updated_at)
    VALUES (?, ?, CURRENT_TIMESTAMP)
    ON CONFLICT(key) DO UPDATE SET value = excluded.value, updated_at = CURRENT_TIMESTAMP
  `);

  db.exec('BEGIN');
  for (const [key, value] of Object.entries(updates)) {
    if (typeof value === 'string') upsert.run(key, value);
  }
  db.exec('COMMIT');

  const rows = db.prepare('SELECT key, value FROM site_settings').all() as {
    key: string;
    value: string;
  }[];
  const settings: Record<string, string> = {};
  for (const row of rows) settings[row.key] = row.value;
  res.json(settings);
});

export default router;
