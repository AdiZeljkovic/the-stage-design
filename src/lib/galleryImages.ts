// Dynamically import all images from the gallery folder
const galleryModules = import.meta.glob<{ default: string }>(
  '/src/assets/gallery/*.{jpg,jpeg,png,webp,gif}',
  { eager: true }
);

// Descriptive alt tags mapping for better SEO
const altTagsMap: Record<string, string> = {
  'bachelorette-1': 'Djevojačka večer proslava sa prijateljicama u The Stage Sarajevo',
  'bachelorette-2': 'Hen party dekoracija i zabava u event prostoru Sarajevo',
  'birthday-1': 'Rođendanska proslava sa balonima i dekoracijom u The Stage',
  'birthday-2': 'Dječiji rođendan organizacija u Sarajevu - The Stage',
  'event-1': 'Korporativni event i prezentacija u The Stage Sarajevo',
  'event-2': 'Poslovni događaj i networking u ekskluzivnom prostoru Sarajevo',
  'makeup-1': 'Profesionalno šminkanje za posebne prilike - The Stage Sarajevo',
  'makeup-2': 'Makeup radionica i edukacija sa Nermina Ibrulj',
  'makeup-3': 'Šminkanje za fotografiranje u foto studiju The Stage',
  'space-1': 'Podcast studio najam u Sarajevu - The Stage',
  'space-2': 'Foto studio i kreativni prostor za iznajmljivanje Sarajevo',
  'space-3': 'Event prostor sa modernom opremom - The Stage Sarajevo',
};

// Extract image paths and create gallery items
export const allGalleryImages = Object.entries(galleryModules).map(([path, module]) => {
  const fileName = path.split('/').pop()?.replace(/\.[^.]+$/, '') || '';
  
  // Use descriptive alt tag if available, otherwise generate from filename
  const alt = altTagsMap[fileName] || 
    `${fileName.replace(/-/g, ' ').replace(/^\w/, (c) => c.toUpperCase())} - The Stage Sarajevo event prostor`;
  
  return {
    src: module.default,
    alt,
  };
});

// Get random images for homepage preview
export const getRandomGalleryImages = (count: number) => {
  const shuffled = [...allGalleryImages].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(count, shuffled.length));
};
