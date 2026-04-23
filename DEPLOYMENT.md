# The Stage — Deployment Guide

Ovo je kompletan vodič za postavljanje projekta na produkcijski server.

## Arhitektura

```
thestage.ba          → nginx → /var/www/the-stage/dist/   (statički frontend)
api.thestage.ba      → nginx → localhost:3001             (Node.js backend)
```

ili alternativno sa subpath-om:

```
thestage.ba          → nginx → /var/www/the-stage/dist/
thestage.ba/api      → nginx → localhost:3001
```

---

## 1. Preduvjeti na serveru

### Minimalni zahtjevi
- Ubuntu 22.04+ (ili Debian 12+)
- 1 GB RAM, 20 GB disk
- Root ili sudo pristup

### Instaliraj Node.js 22

> **KRITIČNO**: backend koristi `node:sqlite` koji zahtijeva Node.js **22.5 ili noviji**.

```bash
curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
sudo apt-get install -y nodejs
node --version   # mora biti v22.5+
```

### Instaliraj nginx, PM2, certbot

```bash
sudo apt update
sudo apt install -y nginx certbot python3-certbot-nginx git
sudo npm install -g pm2
```

---

## 2. Kloniranje repoa

```bash
cd /var/www
sudo git clone https://github.com/AdiZeljkovic/the-stage-design.git the-stage
sudo chown -R $USER:$USER /var/www/the-stage
cd /var/www/the-stage
```

---

## 3. Backend setup

### Instaliraj dependencies

```bash
cd /var/www/the-stage/backend
npm install
```

### Konfiguracija environment varijabli

```bash
cp .env.example .env
nano .env
```

Popuni sve vrijednosti u `.env`:

```env
PORT=3001
JWT_SECRET=<generiši random string od 64+ znaka, vidi dolje>
ADMIN_USERNAME=admin
ADMIN_PASSWORD=<jaka lozinka>
FRONTEND_URL=https://thestage.ba
```

**Generisanje JWT_SECRET:**
```bash
node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"
```

### Pokretanje sa PM2

```bash
cd /var/www/the-stage/backend
pm2 start "npx tsx src/index.ts" --name the-stage-backend
pm2 save
pm2 startup   # prati upute koje ispiše (da se PM2 autostaruje)
```

**Provjeri da radi:**
```bash
curl http://localhost:3001/api/health
# treba vratiti: {"status":"ok","timestamp":"..."}
```

---

## 4. Frontend build

Potrebno uraditi na lokalnoj mašini (ili na serveru ako ima dovoljna RAM):

```bash
cd /var/www/the-stage

# OBAVEZNO: postavi API URL za produkciju
# Ako backend ide na api.thestage.ba:
VITE_API_URL=https://api.thestage.ba/api npm run build

# Ako backend ide na istoj domeni (thestage.ba/api — vidi nginx config dolje):
npm run build
```

> Ako koristiš isti domain, podesite nginx proxy (Sekcija 5b) i ostavite `BASE_URL` u
> `src/lib/api.ts` sa `/api` relative putanjom. Alternativno, postavi `VITE_API_URL`
> env varijablu i ažuriraj `src/lib/api.ts` da je koristi.

Build output je u `dist/` folderu.

---

## 5. nginx konfiguracija

### Opcija A: Frontend na thestage.ba, API na api.thestage.ba (preporučeno)

```bash
sudo nano /etc/nginx/sites-available/thestage
```

```nginx
# Frontend
server {
    listen 80;
    server_name thestage.ba www.thestage.ba;
    root /var/www/the-stage/dist;
    index index.html;

    # SPA fallback — sve rute idu na index.html
    location / {
        try_files $uri $uri/ /index.html;
    }

    # Cache statičnih asseta
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff2?)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    gzip on;
    gzip_types text/plain text/css application/javascript application/json image/svg+xml;
}

# Backend API
server {
    listen 80;
    server_name api.thestage.ba;

    location / {
        proxy_pass http://localhost:3001;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
        client_max_body_size 20M;
    }
}
```

### Opcija B: Sve na istoj domeni (thestage.ba + thestage.ba/api/...)

```nginx
server {
    listen 80;
    server_name thestage.ba www.thestage.ba;
    root /var/www/the-stage/dist;
    index index.html;

    # API proxy
    location /api/ {
        proxy_pass http://localhost:3001/api/;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        client_max_body_size 20M;
    }

    # Uploads (slike koje korisnici uploadaju)
    location /uploads/ {
        proxy_pass http://localhost:3001/uploads/;
    }

    # SPA fallback
    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

### Aktiviraj konfiguraciju

```bash
sudo ln -s /etc/nginx/sites-available/thestage /etc/nginx/sites-enabled/
sudo nginx -t          # provjeri syntax
sudo systemctl reload nginx
```

---

## 6. SSL certifikat (Let's Encrypt)

```bash
# Opcija A (odvojena domena za API):
sudo certbot --nginx -d thestage.ba -d www.thestage.ba -d api.thestage.ba

# Opcija B (jedna domena):
sudo certbot --nginx -d thestage.ba -d www.thestage.ba
```

Certbot automatski edituje nginx config da doda HTTPS i redirect.

**Auto-renewal** je automatski podešen. Provjeri:
```bash
sudo certbot renew --dry-run
```

---

## 7. DNS postavke

Na DNS registraru (gdje je `thestage.ba` registrovan):

| Tip | Ime | Vrijednost |
|-----|-----|------------|
| A   | @   | `IP_SERVERA` |
| A   | www | `IP_SERVERA` |
| A   | api | `IP_SERVERA` ← (samo za Opciju A) |

---

## 8. Admin panel — prva prijava

1. Idi na `https://thestage.ba/admin`
2. Prijavi se sa `admin` / `<lozinka iz .env>` 
3. U Settings → promijeni lozinku

---

## 9. Backup baze podataka

Baza je SQLite fajl na: `/var/www/the-stage/backend/data/database.sqlite`

**Ručni backup:**
```bash
cp /var/www/the-stage/backend/data/database.sqlite \
   ~/backups/database-$(date +%Y-%m-%d).sqlite
```

**Automatski backup svakog dana u ponoć (cron):**
```bash
mkdir -p ~/backups
crontab -e
```

Dodaj liniju:
```
0 0 * * * cp /var/www/the-stage/backend/data/database.sqlite ~/backups/database-$(date +\%Y-\%m-\%d).sqlite
```

**Restore backup-a:**
```bash
pm2 stop the-stage-backend
cp ~/backups/database-2026-04-23.sqlite /var/www/the-stage/backend/data/database.sqlite
pm2 start the-stage-backend
```

> Backup iz gita (branch `db-backup`): `backups/database-2026-04-23.sqlite`

---

## 10. Update procedure (deploy novog koda)

```bash
cd /var/www/the-stage
git pull origin master

# Rebuild frontend
npm run build   # ili VITE_API_URL=... npm run build

# Restart backend (ako se nešto promijenilo u backend/)
cd backend && npm install  # samo ako su se promijenile dependencies
pm2 restart the-stage-backend
```

---

## 11. PM2 korisne komande

```bash
pm2 status                          # provjeri status procesa
pm2 logs the-stage-backend          # live logovi
pm2 logs the-stage-backend --lines 100  # zadnjih 100 linija
pm2 restart the-stage-backend       # restart
pm2 stop the-stage-backend          # zaustavi
```

---

## Troubleshooting

**Backend se ne pokreće:**
```bash
pm2 logs the-stage-backend
# Najčešći razlog: pogrešan Node.js version (mora biti 22.5+)
node --version
```

**Frontend ne komunicira sa backendom:**
- Provjeri CORS: `FRONTEND_URL` u `.env` mora biti tačna domena (`https://thestage.ba`)
- Provjeri API URL u `src/lib/api.ts` (localhost:3001 → produkcijska URL)
- Provjeri nginx logs: `sudo tail -f /var/log/nginx/error.log`

**Slike se ne učitavaju:**
- Provjeri da `backend/uploads/` folder postoji i da nginx ima read permisije
- Provjeri proxy config za `/uploads/` putanju
