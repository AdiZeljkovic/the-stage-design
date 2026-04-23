import { Router, Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import db from '../database';
import { requireAuth, AuthRequest } from '../middleware/auth';

const router = Router();

router.post('/login', (req: Request, res: Response) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ error: 'Korisničko ime i lozinka su obavezni' });
  }

  const user = db.prepare('SELECT * FROM admin_users WHERE username = ?').get(username) as {
    id: number;
    username: string;
    password_hash: string;
  } | undefined;

  if (!user || !bcrypt.compareSync(password, user.password_hash)) {
    return res.status(401).json({ error: 'Pogrešno korisničko ime ili lozinka' });
  }

  const jwtSecret = process.env.JWT_SECRET;
  if (!jwtSecret) throw new Error('JWT_SECRET nije postavljen');

  const token = jwt.sign(
    { id: user.id, username: user.username },
    jwtSecret,
    { expiresIn: '7d' }
  );

  res.json({ token, username: user.username });
});

router.get('/me', requireAuth, (req: AuthRequest, res: Response) => {
  res.json({ id: req.adminId, username: req.adminUsername });
});

router.post('/change-password', requireAuth, (req: AuthRequest, res: Response) => {
  const { currentPassword, newPassword } = req.body;
  if (!currentPassword || !newPassword || newPassword.length < 8) {
    return res.status(400).json({ error: 'Nova lozinka mora imati najmanje 8 znakova' });
  }

  const adminId = req.adminId!;
  const user = db.prepare('SELECT * FROM admin_users WHERE id = ?').get(adminId) as {
    password_hash: string;
  } | undefined;

  if (!user || !bcrypt.compareSync(currentPassword, user.password_hash)) {
    return res.status(401).json({ error: 'Pogrešna trenutna lozinka' });
  }

  const newHash = bcrypt.hashSync(newPassword, 10);
  db.prepare('UPDATE admin_users SET password_hash = ? WHERE id = ?').run(newHash, adminId);
  res.json({ message: 'Lozinka promijenjena' });
});

export default router;
