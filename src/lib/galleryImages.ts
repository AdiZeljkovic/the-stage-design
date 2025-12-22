// Dynamically import all images from the gallery folder
const galleryModules = import.meta.glob<{ default: string }>(
  '/src/assets/gallery/*.{jpg,jpeg,png,webp,gif}',
  { eager: true }
);

// Extract image paths and create gallery items
export const allGalleryImages = Object.entries(galleryModules).map(([path, module]) => {
  const fileName = path.split('/').pop()?.replace(/\.[^.]+$/, '') || '';
  const formattedAlt = fileName
    .replace(/-/g, ' ')
    .replace(/^\w/, (c) => c.toUpperCase());
  
  return {
    src: module.default,
    alt: `${formattedAlt} - The Stage Sarajevo`,
  };
});

// Get random images for homepage preview
export const getRandomGalleryImages = (count: number) => {
  const shuffled = [...allGalleryImages].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(count, shuffled.length));
};
