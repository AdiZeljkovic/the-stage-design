const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001/api';

// Origin that serves static assets (/uploads, /gallery-assets) — the API base
// without the trailing "/api". e.g. https://thestage.ba/api → https://thestage.ba
const ASSET_ORIGIN = BASE_URL.replace(/\/api\/?$/, '');

/**
 * Resolves an image URL stored in the DB to a full, loadable URL for the
 * current environment. Handles relative paths ("/uploads/x.webp") and rewrites
 * any legacy absolute "http://localhost:PORT/..." URLs to the current origin,
 * so old data keeps working without a manual migration.
 */
export function resolveAssetUrl(url?: string | null): string {
  if (!url) return '';
  try {
    // Resolve against ASSET_ORIGIN (handles relative paths), then always pin the
    // host to ASSET_ORIGIN so stale localhost URLs are corrected too.
    const parsed = new URL(url, ASSET_ORIGIN || window.location.origin);
    return `${ASSET_ORIGIN}${parsed.pathname}${parsed.search}`;
  } catch {
    return url;
  }
}

function getToken(): string | null {
  return localStorage.getItem('admin_token');
}

async function request<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const token = getToken();
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    ...(options.headers as Record<string, string>),
  };
  if (token) headers['Authorization'] = `Bearer ${token}`;

  const res = await fetch(`${BASE_URL}${endpoint}`, { ...options, headers });
  if (!res.ok) {
    const err = await res.json().catch(() => ({ error: 'Greška servera' }));
    throw new Error(err.error || `HTTP ${res.status}`);
  }
  return res.json();
}

// ── Auth ──────────────────────────────────────────────
export const authApi = {
  login: (username: string, password: string) =>
    request<{ token: string; username: string }>('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
    }),
  me: () => request<{ id: number; username: string }>('/auth/me'),
  changePassword: (currentPassword: string, newPassword: string) =>
    request('/auth/change-password', {
      method: 'POST',
      body: JSON.stringify({ currentPassword, newPassword }),
    }),
};

// ── Blog ──────────────────────────────────────────────
export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  published_at: string;
  read_time: number;
  featured: boolean;
  tags: string[];
  created_at: string;
  updated_at: string;
}

export const blogApi = {
  getAll: () => request<BlogPost[]>('/blog'),
  getBySlug: (slug: string) => request<BlogPost>(`/blog/${slug}`),
  create: (post: Partial<BlogPost>) =>
    request<BlogPost>('/blog', { method: 'POST', body: JSON.stringify(post) }),
  update: (id: number, post: Partial<BlogPost>) =>
    request<BlogPost>(`/blog/${id}`, { method: 'PUT', body: JSON.stringify(post) }),
  delete: (id: number) =>
    request(`/blog/${id}`, { method: 'DELETE' }),
};

// ── Gallery ───────────────────────────────────────────
export interface GalleryImage {
  id: number;
  filename: string;
  alt: string;
  category: string;
  url: string;
  created_at: string;
}

export const galleryApi = {
  getAll: () => request<{ images: GalleryImage[]; categories: string[] }>('/gallery'),
  upload: (formData: FormData) => {
    const token = getToken();
    return fetch(`${BASE_URL}/gallery/upload`, {
      method: 'POST',
      headers: token ? { Authorization: `Bearer ${token}` } : {},
      body: formData,
    }).then(async (res) => {
      if (!res.ok) {
        const err = await res.json().catch(() => ({ error: 'Upload greška' }));
        throw new Error(err.error || `HTTP ${res.status}`);
      }
      return res.json() as Promise<GalleryImage>;
    });
  },
  update: (id: number, data: { alt?: string; category?: string }) =>
    request<GalleryImage>(`/gallery/${id}`, { method: 'PUT', body: JSON.stringify(data) }),
  delete: (id: number) =>
    request(`/gallery/${id}`, { method: 'DELETE' }),
};

// ── Contact ───────────────────────────────────────────
export interface ContactSubmission {
  id: number;
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  is_read: number;
  created_at: string;
}

export const contactApi = {
  submit: (data: { name: string; email: string; phone?: string; service?: string; message: string }) =>
    request('/contact', { method: 'POST', body: JSON.stringify(data) }),
  getAll: () =>
    request<{ submissions: ContactSubmission[]; unreadCount: number }>('/contact'),
  markRead: (id: number) =>
    request(`/contact/${id}/read`, { method: 'PUT' }),
  delete: (id: number) =>
    request(`/contact/${id}`, { method: 'DELETE' }),
};

// ── Settings ──────────────────────────────────────────
export const settingsApi = {
  getAll: () => request<Record<string, string>>('/settings'),
  update: (data: Record<string, string>) =>
    request<Record<string, string>>('/settings', { method: 'PUT', body: JSON.stringify(data) }),
};

// ── Services ──────────────────────────────────────────
export interface ServicePackage {
  title: string;
  subtitle?: string;
  description: string;
  items: string[];
}

export interface ServiceData {
  heroTitle: string;
  heroTagline: string;
  seoTitle?: string;
  seoDescription?: string;
  stat1Value: string;
  stat1Label: string;
  stat2Value: string;
  stat2Label: string;
  stat3Value: string;
  stat3Label: string;
  mainDescription: string;
  ctaText: string;
  packages: ServicePackage[];
  note?: string;
}

export interface ServiceContent {
  slug: string;
  name: string;
  data: ServiceData;
  hero_image_url: string | null;
  updated_at: string;
}

export const servicesApi = {
  getAll: () => request<ServiceContent[]>('/services'),
  getBySlug: (slug: string) => request<ServiceContent>(`/services/${slug}`),
  update: (slug: string, data: ServiceData) =>
    request<ServiceContent>(`/services/${slug}`, {
      method: 'PUT',
      body: JSON.stringify({ data }),
    }),
  uploadHeroImage: (slug: string, formData: FormData) => {
    const token = getToken();
    return fetch(`${BASE_URL}/services/${slug}/hero-image`, {
      method: 'POST',
      headers: token ? { Authorization: `Bearer ${token}` } : {},
      body: formData,
    }).then(async (res) => {
      if (!res.ok) {
        const err = await res.json().catch(() => ({ error: 'Upload greška' }));
        throw new Error(err.error || `HTTP ${res.status}`);
      }
      return res.json() as Promise<ServiceContent>;
    });
  },
};
