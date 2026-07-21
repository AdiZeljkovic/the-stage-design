import { Router, Request, Response } from 'express';
import db from '../database';
import { requireAuth } from '../middleware/auth';
import { sendContactNotification } from '../lib/mailer';

const router = Router();

// Public: submit contact form
router.post('/', (req: Request, res: Response) => {
  const { name, email, phone, service, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Ime, email i poruka su obavezni' });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Email adresa nije ispravna' });
  }

  db.prepare(`
    INSERT INTO contact_submissions (name, email, phone, service, message)
    VALUES (?, ?, ?, ?, ?)
  `).run(name, email, phone || '', service || '', message);

  // Fire-and-forget: the inquiry is already saved, so a mail failure must not
  // fail the request or make the visitor re-submit.
  sendContactNotification({ name, email, phone, service, message }).catch((err) =>
    console.error('Slanje email obavijesti nije uspjelo:', err?.message || err)
  );

  res.status(201).json({ message: 'Upit uspješno poslan' });
});

// Protected: list all submissions
router.get('/', requireAuth, (_req: Request, res: Response) => {
  const submissions = db.prepare(
    'SELECT * FROM contact_submissions ORDER BY created_at DESC'
  ).all();
  const unreadCount = (db.prepare(
    'SELECT COUNT(*) as count FROM contact_submissions WHERE is_read = 0'
  ).get() as { count: number }).count;

  res.json({ submissions, unreadCount });
});

// Protected: mark as read
router.put('/:id/read', requireAuth, (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const existing = db.prepare('SELECT id FROM contact_submissions WHERE id = ?').get(id);
  if (!existing) return res.status(404).json({ error: 'Upit nije pronađen' });

  db.prepare('UPDATE contact_submissions SET is_read = 1 WHERE id = ?').run(id);
  res.json({ message: 'Označeno kao pročitano' });
});

// Protected: delete submission
router.delete('/:id', requireAuth, (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const existing = db.prepare('SELECT id FROM contact_submissions WHERE id = ?').get(id);
  if (!existing) return res.status(404).json({ error: 'Upit nije pronađen' });

  db.prepare('DELETE FROM contact_submissions WHERE id = ?').run(id);
  res.json({ message: 'Upit obrisan' });
});

export default router;
