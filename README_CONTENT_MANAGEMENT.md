# Content Management Guide - The Stage Website

## 📋 Overview

This website uses a **centralized content management system** that allows you to edit all website content from a single file without touching any code. All text, prices, descriptions, and contact information can be updated in one place.

---

## 🗂️ Content Configuration File

**Location:** `src/config/siteContent.ts`

This file contains ALL editable content organized by page and section.

---

## ✏️ How to Edit Content

### 1. **General Settings** (Site-wide information)

```typescript
general: {
  siteName: "THE STAGE",
  tagline: "Vaša Scena za Nezaboravne Trenutke",
  phone: "+387 XX XXX XXX",          // ← Update phone number
  email: "info@thestage.ba",         // ← Update email
  address: "Adresa u centru grada",  // ← Update address
  instagramUrl: "https://...",       // ← Update social media
  tiktokUrl: "https://...",
}
```

### 2. **Homepage Content**

```typescript
homepage: {
  hero: {
    title: "THE STAGE",
    subtitle: "Vaša Scena za Nezaboravne Trenutke",
    ctaPrimary: "Pogledajte Usluge",    // Button text
    ctaSecondary: "Istražite Galeriju",
  },
  // ... more sections
}
```

### 3. **Services (Usluge)**

Each service has its own section:

```typescript
services: {
  rodjendani: {
    name: "Rođendani",
    price: "400 KM",                    // ← Update price
    priceNote: "Za do 10 osoba...",    // ← Update note
    tagline: "Tri jedinstvena...",     // ← Update tagline
    // ... packages and descriptions
  },
  // djevojacke, babyShower, italianNight, etc.
}
```

### 4. **Gallery (Galerija)**

```typescript
gallery: {
  title: "Galerija",
  subtitle: "Pogledajte naše nezaboravne trenutke",
  filters: ["SVI", "ROĐENDANI", "DJEVOJAČKE", ...],  // Category filters
}
```

### 5. **Contact Page (Kontakt)**

```typescript
contact: {
  hero: {
    title: "Stupite na Scenu",
    description: "Kontaktirajte nas za...",
  },
  form: {
    nameLabel: "Ime i Prezime",
    emailLabel: "Email Adresa",
    submitButton: "Pošalji Upit",
    services: ["Rođendani", "Djevojačke", ...],  // Dropdown options
  },
}
```

---

## 🎨 Design System Settings

**Location:** `src/index.css` and `tailwind.config.ts`

### Colors

Edit in `src/index.css`:

```css
:root {
  --cream: 45 15% 92%;          /* Background color */
  --warm-white: 40 30% 97%;     /* Container backgrounds */
  --dark-grey: 0 0% 20%;        /* Text color */
  --gold: 38 45% 60%;           /* Accent/CTA color */
  --soft-grey: 0 0% 45%;        /* Secondary text */
}
```

### Typography

Edit in `tailwind.config.ts`:

```typescript
fontFamily: {
  serif: ['Playfair Display', 'serif'],  // Headings
  sans: ['Inter', 'sans-serif'],         // Body text
}
```

---

## 📂 File Structure

```
src/
├── config/
│   └── siteContent.ts          ← EDIT THIS FILE FOR CONTENT
├── pages/
│   ├── Index.tsx               (Homepage)
│   ├── ONama.tsx               (About page)
│   ├── Galerija.tsx            (Gallery)
│   ├── Kontakt.tsx             (Contact)
│   ├── Usluge.tsx              (Services overview)
│   └── services/
│       ├── Rodjendani.tsx
│       ├── Djevojacke.tsx
│       ├── BabyShower.tsx
│       ├── ItalianNight.tsx
│       ├── SipPaint.tsx
│       ├── Sminkanje.tsx
│       └── Najam.tsx
├── components/
│   ├── Navbar.tsx              (Header/Navigation)
│   └── Footer.tsx              (Footer)
├── index.css                   ← EDIT FOR COLORS
└── tailwind.config.ts          ← EDIT FOR FONTS/DESIGN
```

---

## 🖼️ Managing Images

### Current Images Location

- **Hero Background:** `src/assets/hero-background.jpg`
- **Gallery Images:** Replace placeholder images in `src/pages/Galerija.tsx`

### How to Add New Images

1. Place images in `src/assets/` folder
2. Import in the relevant component:
   ```typescript
   import newImage from "@/assets/new-image.jpg";
   ```
3. Use in JSX:
   ```jsx
   <img src={newImage} alt="Description" />
   ```

---

## 🚀 Making Changes Live

After editing `siteContent.ts`:

1. **Save the file**
2. **Preview changes** in the development environment
3. **Click "Update"** in the publish dialog to deploy

> **Note:** Content changes require clicking "Update" to go live. Backend/database changes deploy automatically.

---

## ⚠️ Important Notes

### What You CAN Edit Safely:
- ✅ All text in `siteContent.ts`
- ✅ Prices and descriptions
- ✅ Contact information
- ✅ Colors in `index.css`
- ✅ Images in `src/assets/`

### What You SHOULD NOT Edit (without development knowledge):
- ❌ Component files (`.tsx` files) in `src/pages/` or `src/components/`
- ❌ Configuration files like `vite.config.ts`, `package.json`
- ❌ TypeScript/React code

---

## 📞 Need Help?

If you need to make changes beyond simple content updates (e.g., adding new pages, changing layout), contact your developer or use the Lovable AI chat for assistance.

---

## 📋 Quick Reference

| What to Update | File Location | Section |
|----------------|---------------|---------|
| Phone/Email/Address | `src/config/siteContent.ts` | `general` |
| Service Prices | `src/config/siteContent.ts` | `services.{serviceName}.price` |
| Homepage Text | `src/config/siteContent.ts` | `homepage` |
| About Us Content | `src/config/siteContent.ts` | `about` |
| Contact Form | `src/config/siteContent.ts` | `contact.form` |
| Navigation Links | `src/config/siteContent.ts` | `navigation` |
| Footer | `src/config/siteContent.ts` | `footer` |
| Colors | `src/index.css` | `:root` section |
| Fonts | `tailwind.config.ts` | `fontFamily` |

---

**Last Updated:** 2025-01-15
