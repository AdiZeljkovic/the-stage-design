# The Stage Sarajevo

Full-stack web application for **The Stage** — an event venue in Sarajevo, Bosnia and Herzegovina.

The project consists of a public marketing site and a self-service admin panel, so the venue owner can manage prices, photos, blog posts and service descriptions without a developer.

🌐 **Live:** [thestage.ba](https://thestage.ba)

---

## Features

### Public site
- Responsive single-page application with server-friendly SEO (meta tags, Open Graph, JSON-LD structured data)
- Seven service pages (birthdays, bachelorette parties, baby showers, Italian Night, Sip & Paint, makeup, venue rental)
- Photo gallery with category filtering and lightbox
- Blog with Markdown content and internal cross-linking
- Contact form with server-side validation and rate limiting

### Admin panel (`/admin`)
- JWT authentication with bcrypt-hashed credentials
- **Blog** — full CRUD with Markdown editor
- **Gallery** — image upload with automatic optimization, alt text and category management
- **Services** — edit page content, packages, pricing and hero images
- **Contacts** — inbox of submitted inquiries with read/unread state
- **Settings** — site-wide contact info, social links and prices; password change

---

## Tech stack

| Layer | Technology |
|---|---|
| Frontend | React 18, TypeScript, Vite |
| Styling | Tailwind CSS, shadcn/ui (Radix primitives) |
| Routing | React Router v6 with lazy-loaded routes |
| Data fetching | TanStack Query |
| Backend | Node.js, Express 4, TypeScript |
| Database | SQLite via `node:sqlite` (built-in — no native compilation) |
| Auth | JSON Web Tokens, bcrypt |
| Images | sharp (validation, resizing, WebP conversion) |
| Security | helmet, express-rate-limit, CORS allowlist |

---

## Architecture

```
Browser
   │
   ├── /            →  static SPA build (dist/)
   ├── /api/*       →  Express API      →  SQLite (backend/data/database.sqlite)
   ├── /uploads/*   →  uploaded images  →  backend/uploads/
   └── /gallery-assets/*  →  seeded gallery images
```

In production all four paths are served from the same domain via an nginx reverse proxy. See [DEPLOYMENT.md](DEPLOYMENT.md) for the full server setup.

---

## Requirements

- **Node.js 22.5 or newer** — the backend uses the built-in `node:sqlite` module
- npm

---

## Getting started

```bash
# 1. Install dependencies
npm install
cd backend && npm install && cd ..

# 2. Configure the backend
cp backend/.env.example backend/.env
#    then edit backend/.env — at minimum set JWT_SECRET and ADMIN_PASSWORD

# 3. Run both servers (in two terminals)
cd backend && npm run dev     # API on http://localhost:3001
npm run dev                   # Site on http://localhost:8080
```

The database, tables and seed content are created automatically on first backend start. The admin user is created with the password from `ADMIN_PASSWORD`; change it from the admin panel afterwards.

Admin panel: <http://localhost:8080/admin>

---

## Environment variables

### Backend (`backend/.env`)

| Variable | Required | Description |
|---|---|---|
| `PORT` | — | API port (default `3001`) |
| `JWT_SECRET` | ✅ | Token signing secret; use 64+ random characters |
| `ADMIN_USERNAME` | — | Initial admin username (default `admin`) |
| `ADMIN_PASSWORD` | ✅ | Initial admin password — set a strong one |
| `FRONTEND_URL` | ✅ (prod) | Allowed CORS origin, e.g. `https://thestage.ba` |
| `SMTP_HOST` `SMTP_PORT` `SMTP_USER` `SMTP_PASS` | — | Optional. Enables email notifications for contact form submissions. Without them the form still works — inquiries are stored and visible in the admin panel |
| `SMTP_FROM` `SMTP_TO` | — | Optional sender/recipient override. `SMTP_TO` defaults to the email set in the admin panel |

Generate a secret:
```bash
node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"
```

### Frontend (`.env.production`)

| Variable | Description |
|---|---|
| `VITE_API_URL` | Full API base URL used by the production build, e.g. `https://thestage.ba/api`. Falls back to `http://localhost:3001/api` in development |

---

## Project structure

```
├── src/
│   ├── pages/              Route components (public + admin/)
│   ├── components/         Shared components, SEO and JSON-LD schemas
│   │   └── ui/             shadcn/ui component library
│   ├── config/
│   │   └── siteContent.ts  Centralized site copy, prices and contact info
│   ├── lib/
│   │   └── api.ts          Typed API client + asset URL resolution
│   ├── hooks/
│   └── assets/             Gallery, blog and service images
│
├── backend/
│   └── src/
│       ├── index.ts        Express app, middleware, security
│       ├── database.ts     Schema, migrations and seed data
│       ├── middleware/      JWT auth guard
│       ├── lib/            Image processing, email notifications
│       └── routes/         auth, blog, gallery, contact, settings, services
│
└── DEPLOYMENT.md           Production server setup guide
```

---

## API

| Endpoint | Method | Auth | Description |
|---|---|---|---|
| `/api/auth/login` | POST | — | Returns a JWT (valid 7 days) |
| `/api/auth/me` | GET | ✅ | Validate current token |
| `/api/auth/change-password` | POST | ✅ | Change admin password |
| `/api/blog` | GET | — | All posts |
| `/api/blog/:slug` | GET | — | Single post |
| `/api/blog` `/api/blog/:id` | POST PUT DELETE | ✅ | Manage posts |
| `/api/gallery` | GET | — | Images and categories |
| `/api/gallery/upload` | POST | ✅ | Upload image (multipart) |
| `/api/gallery/:id` | PUT DELETE | ✅ | Update metadata / delete |
| `/api/services` | GET | — | All service content |
| `/api/services/:slug` | GET | — | Single service |
| `/api/services/:slug` | PUT | ✅ | Update content |
| `/api/services/:slug/hero-image` | POST | ✅ | Upload hero image |
| `/api/contact` | POST | — | Submit inquiry (rate limited) |
| `/api/contact` | GET | ✅ | List inquiries |
| `/api/contact/:id/read` `/api/contact/:id` | PUT DELETE | ✅ | Manage inquiries |
| `/api/settings` | GET | — | Site settings |
| `/api/settings` | PUT | ✅ | Update settings |
| `/api/health` | GET | — | Health check |

---

## Content management

Static site copy lives in a single file: **`src/config/siteContent.ts`**. Page components read from this object — copy is never hardcoded in components.

Dynamic content (blog posts, gallery, service pages, prices, contact details) is stored in the database and edited through the admin panel.

**Adding a service** — create the page in `src/pages/services/`, add its content to `siteContent.services`, register the lazy route in `src/App.tsx`, then add it to the navigation dropdown and the contact form service list.

---

## Image handling

Uploaded images are validated and optimized server-side before being written to disk:

- Re-encoded through sharp, which rejects any file that is not a genuine image
- EXIF orientation applied, then metadata stripped
- Resized to a maximum of 1920px (no upscaling)
- Converted to WebP (quality 82)

Image URLs are stored as **relative paths** (`/uploads/…`) and resolved against the current origin at render time, so the same database works across development, production and server migrations.

---

## Deployment

See **[DEPLOYMENT.md](DEPLOYMENT.md)** for the complete production guide: server prerequisites, nginx configuration, SSL, PM2 process management, database backups and update procedure.

---

## Scripts

| Command | Location | Description |
|---|---|---|
| `npm run dev` | root | Vite dev server on port 8080 |
| `npm run build` | root | Production build to `dist/` |
| `npm run lint` | root | ESLint |
| `npm run preview` | root | Preview the production build |
| `npm run dev` | `backend/` | API with hot reload |
| `npm start` | `backend/` | API (production) |

---

## License

Proprietary — all rights reserved.
