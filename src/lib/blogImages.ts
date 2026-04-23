// Blog Featured Images Library
// =============================
// Dynamically imports all images from the blog folder
// 
// KAKO DODATI NOVU SLIKU:
// 1. Stavite sliku u folder: src/assets/blog/
// 2. Naziv slike treba odgovarati slug-u članka
//    Primjer: Za članak sa slug-om "djevojacka-vecer-sarajevo-kompletni-vodic"
//    slika treba biti: djevojacka-vecer-sarajevo-kompletni-vodic.jpg
// 3. Podržani formati: .jpg, .jpeg, .png, .webp
//
// Ako slika ne postoji, koristit će se fallback slika iz services foldera

// Dynamically import all images from the blog folder
const blogImageModules = import.meta.glob<{ default: string }>(
  '/src/assets/blog/*.{jpg,jpeg,png,webp}',
  { eager: true }
);

// Fallback images from services folder
const fallbackImageModules = import.meta.glob<{ default: string }>(
  '/src/assets/services/*.{jpg,jpeg,png,webp}',
  { eager: true }
);

// Create a map of slug -> image path for blog images
const blogImageMap: Record<string, string> = {};
Object.entries(blogImageModules).forEach(([path, module]) => {
  const fileName = path.split('/').pop()?.replace(/\.[^.]+$/, '') || '';
  blogImageMap[fileName] = module.default;
});

// Create a map of filename -> image path for fallback images
const fallbackImageMap: Record<string, string> = {};
Object.entries(fallbackImageModules).forEach(([path, module]) => {
  const fileName = path.split('/').pop()?.replace(/\.[^.]+$/, '') || '';
  fallbackImageMap[fileName] = module.default;
});

// Default fallback mappings based on category
const categoryFallbacks: Record<string, string> = {
  'djevojačke večeri': 'djevojacke-hero',
  'rođendani': 'rodjendani-hero',
  'baby shower': 'baby-shower-hero',
  'aktivnosti': 'sip-paint-hero',
  'makeup': 'sminkanje-hero',
  'prostor': 'najam-hero',
};

/**
 * Get blog image by slug
 * First checks for custom image in blog folder, then falls back to category-based image
 */
export const getBlogImage = (slug: string, category?: string): string => {
  // First, check if there's a custom image for this slug
  if (blogImageMap[slug]) {
    return blogImageMap[slug];
  }
  
  // If no custom image, use category-based fallback
  if (category) {
    const categoryKey = category.toLowerCase();
    const fallbackKey = categoryFallbacks[categoryKey];
    if (fallbackKey && fallbackImageMap[fallbackKey]) {
      return fallbackImageMap[fallbackKey];
    }
  }
  
  // Ultimate fallback
  return fallbackImageMap['djevojacke-hero'] || '/placeholder.svg';
};

/**
 * Check if a custom blog image exists for a slug
 */
export const hasBlogImage = (slug: string): boolean => {
  return !!blogImageMap[slug];
};

/**
 * Get all available blog images
 */
export const getAllBlogImages = (): Record<string, string> => {
  return { ...blogImageMap };
};
