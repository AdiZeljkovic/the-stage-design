# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Frontend (root dir)
```bash
npm run dev        # Start dev server on port 8080
npm run build      # Production build
npm run lint       # Run ESLint
npm run preview    # Preview production build
```

### Backend (`backend/`)
```bash
npm run dev    # Start backend server on port 3001 (with hot reload)
npm start      # Start backend server (production)
```

Run both together (two terminals):
```bash
# Terminal 1:
cd backend && npm run dev

# Terminal 2:
npm run dev
```

No test suite is configured in this project.

### Admin panel
Accessible at `http://localhost:8080/admin` — default credentials: `admin` / `admin123` (change via admin panel Settings).

## Backend Architecture

Express + TypeScript server in `backend/` using `node:sqlite` (built-in Node.js 22.5+ module — no native compilation needed).

- **Database**: SQLite file at `backend/data/database.sqlite`
- **Uploads**: Image files stored at `backend/uploads/`, served at `http://localhost:3001/uploads/`
- **Auth**: JWT tokens, 7-day expiry, stored in `localStorage` on admin side
- **CORS**: Configured for `localhost:8080` (frontend)

Routes:
| Endpoint | Public | Description |
|---|---|---|
| `POST /api/auth/login` | ✓ | Returns JWT |
| `GET /api/auth/me` | — | Validate token |
| `GET /api/blog` | ✓ | All blog posts |
| `GET /api/blog/:slug` | ✓ | Single post by slug |
| `POST/PUT/DELETE /api/blog` | — | CRUD (auth required) |
| `GET /api/gallery` | ✓ | All gallery images + categories |
| `POST /api/gallery/upload` | — | Upload image (multipart) |
| `DELETE /api/gallery/:id` | — | Delete image (also removes file) |
| `POST /api/contact` | ✓ | Submit contact form |
| `GET /api/contact` | — | View submissions |
| `GET /api/settings` | ✓ | All site settings as key-value |
| `PUT /api/settings` | — | Update settings |

## Frontend Architecture (Public)

This is a React + TypeScript + Vite single-page application for **The Stage** — an event venue in Sarajevo, Bosnia. Built via [Lovable](https://lovable.dev/projects/6f164ce2-633b-4850-a816-e76b121eaf6a) (AI-powered app builder).

### Routing

All routes are defined in `src/App.tsx`. The homepage (`/`) is eagerly loaded for LCP performance; all other pages use `React.lazy` + `Suspense`. Route structure:

- `/` — Homepage
- `/usluge` — Services overview; individual services under `/usluge/{slug}`
- `/galerija` — Photo gallery
- `/o-nama` — About page
- `/kontakt` — Contact form
- `/blog` and `/blog/:slug` — Blog listing and individual posts

### Centralized Content System

**All site text, prices, and contact information live in one file: `src/config/siteContent.ts`.**

This exports a single `siteContent` object with top-level keys: `general`, `navigation`, `footer`, `homepage`, `about`, `gallery`, `contact`, `services`. Page components consume this object directly — never hardcode copy in component files; always source it from `siteContent`.

### Content Data

- **Blog posts**: `src/data/blogPosts.ts` — static array of `BlogPost` objects with Markdown content. Helper functions: `getPostBySlug`, `getFeaturedPosts`, `getPostsByCategory`, `getAllCategories`.
- **Gallery images**: `src/lib/galleryImages.ts` — uses Vite's `import.meta.glob` to dynamically import all images from `src/assets/gallery/`. Alt text is mapped via `altTagsMap` keyed by filename (without extension).
- **Blog images**: `src/lib/blogImages.ts` — same glob pattern for `src/assets/blog/`. Falls back to `src/assets/services/` images keyed by category if no slug-matched image exists.

### Image Conventions

- Gallery images → `src/assets/gallery/`
- Blog images → `src/assets/blog/` named exactly after the post's `slug` (e.g., `djevojacka-vecer-sarajevo-kompletni-vodic.jpg`)
- Service hero images → `src/assets/services/` named `{service}-hero.{ext}`
- Blog fallback mapping by category is defined in `categoryFallbacks` in `src/lib/blogImages.ts`

### SEO & Structured Data

- `src/components/SEO.tsx` — wraps `react-helmet-async` for meta tags, OG/Twitter cards. Site URL is hardcoded as `https://thestage.ba`.
- Schema components in `src/components/`: `BreadcrumbSchema`, `FAQSchema`, `LocalBusinessSchema`, `ServiceSchema` — these inject JSON-LD structured data.

### Design System

Custom Tailwind tokens defined in `src/index.css` (CSS variables) and extended in `tailwind.config.ts`:

| Token | Purpose |
|-------|---------|
| `cream` | Page background |
| `warm-white` | Card/container backgrounds |
| `dark-grey` | Primary text |
| `gold` | Accent color, CTAs |
| `soft-grey` | Secondary text |

Typography: `font-serif` → Playfair Display (headings), `font-sans` → Inter (body).

Custom animations: `fade-in`, `slide-up` (both 0.6s ease-out).

### UI Components

`src/components/ui/` — full shadcn/ui component library (Radix UI primitives). Import from `@/components/ui/{name}`. The `@` alias resolves to `src/`.

### Adding a New Service

1. Create `src/pages/services/NewService.tsx`
2. Add the service content object to `siteContent.services` in `src/config/siteContent.ts`
3. Add the route in `src/App.tsx` (as a lazy import)
4. Add to `navigation.servicesDropdown` in `siteContent`
5. Add to the contact form `services` array in `siteContent.contact.form`

### Adding a Blog Post

Add a new object to the `blogPosts` array in `src/data/blogPosts.ts`. The `slug` must be unique — it doubles as the URL path and the image filename lookup key. Content supports Markdown with internal links using relative paths (e.g., `[Sip & Paint](/usluge/sip-paint)`).
