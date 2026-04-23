import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export interface AuthRequest extends Request {
  adminId?: number;
  adminUsername?: string;
}

export function requireAuth(req: AuthRequest, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;
  if (!authHeader?.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Nije autorizovano' });
  }

  const token = authHeader.slice(7);
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET || '') as {
      id: number;
      username: string;
    };
    req.adminId = payload.id;
    req.adminUsername = payload.username;
    next();
  } catch {
    return res.status(401).json({ error: 'Token je nevažeći ili istekao' });
  }
}
