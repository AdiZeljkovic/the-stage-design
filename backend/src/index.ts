import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import path from 'path';
import './database'; // Initialize DB on startup

import authRouter from './routes/auth';
import blogRouter from './routes/blog';
import galleryRouter from './routes/gallery';
import contactRouter from './routes/contact';
import settingsRouter from './routes/settings';
import servicesRouter from './routes/services';

const app = express();
const PORT = Number(process.env.PORT) || 3001;

const allowedOrigins = [
  'http://localhost:8080',
  'http://localhost:8081',
  'http://localhost:5173',
  'http://127.0.0.1:8080',
  'http://127.0.0.1:8081',
];
if (process.env.FRONTEND_URL) allowedOrigins.push(process.env.FRONTEND_URL);

app.use(cors({
  origin: allowedOrigins,
  credentials: true,
}));

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// Rate limiting
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10,
  message: { error: 'Previše pokušaja prijave. Pokušajte ponovo za 15 minuta.' },
  standardHeaders: true,
  legacyHeaders: false,
});

const contactLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 5,
  message: { error: 'Previše poruka. Pokušajte ponovo za sat vremena.' },
  standardHeaders: true,
  legacyHeaders: false,
});

// Serve uploaded files
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));

// Serve static gallery images from frontend assets
app.use('/gallery-assets', express.static(path.join(__dirname, '..', '..', 'src', 'assets', 'gallery')));

// API routes
app.use('/api/auth', authLimiter, authRouter);
app.use('/api/blog', blogRouter);
app.use('/api/gallery', galleryRouter);
app.use('/api/contact', contactLimiter, contactRouter);
app.use('/api/settings', settingsRouter);
app.use('/api/services', servicesRouter);

// Health check
app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`\n🎭 The Stage Backend pokrenut na http://localhost:${PORT}`);
  console.log(`   API dostupan na http://localhost:${PORT}/api\n`);
});
