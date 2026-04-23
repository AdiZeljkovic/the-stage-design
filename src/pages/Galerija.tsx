import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { X, Image as ImageIcon } from "lucide-react";
import { galleryApi, GalleryImage } from "@/lib/api";

const CATEGORIES = ['SVE', 'ROĐENDANI', 'DJEVOJAČKE', 'EVENTI', 'PROSTOR', 'MAKEUP'];

const Galerija = () => {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [filtered, setFiltered] = useState<GalleryImage[]>([]);
  const [activeCategory, setActiveCategory] = useState('SVE');
  const [loading, setLoading] = useState(true);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);

  useEffect(() => {
    galleryApi.getAll()
      .then(({ images: imgs }) => {
        setImages(imgs);
        setFiltered(imgs);
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    if (activeCategory === 'SVE') { setFiltered(images); return; }
    setFiltered(images.filter(img => img.category === activeCategory));
  }, [activeCategory, images]);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    setLightboxOpen(true);
  };

  return (
    <div className="min-h-screen bg-warm-white">
      <SEO
        title="Galerija | The Stage Sarajevo - Foto i Video"
        description="Pogledajte galeriju The Stage Sarajevo - fotografije rođendana, djevojačkih večeri, baby shower proslava, Sip & Paint večeri i profesionalnog šminkanja."
        canonical="/galerija"
      />
      <Navbar />

      <div className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-serif font-bold text-center text-dark-grey mb-4">
            Galerija The Stage Sarajevo
          </h1>
          <p className="text-center text-soft-grey mb-8 text-lg">Trenuci koji pričaju priču</p>

          {/* Category filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === cat
                    ? 'bg-gold text-warm-white'
                    : 'bg-cream text-soft-grey hover:text-dark-grey'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {loading ? (
            <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-4">
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="break-inside-avoid mb-4">
                  <div className="rounded-lg bg-cream aspect-[3/4] animate-pulse" />
                </div>
              ))}
            </div>
          ) : filtered.length === 0 ? (
            <div className="text-center py-20">
              <ImageIcon className="w-12 h-12 text-soft-grey/30 mx-auto mb-4" />
              <p className="text-soft-grey text-lg">
                {activeCategory === 'SVE'
                  ? 'Galerija je prazna. Dodajte slike kroz Admin panel.'
                  : `Nema slika u kategoriji "${activeCategory}"`}
              </p>
            </div>
          ) : (
            <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-4">
              {filtered.map((image, index) => (
                <div
                  key={image.id}
                  className="break-inside-avoid mb-4 cursor-pointer group"
                  onClick={() => openLightbox(index)}
                >
                  <div className="rounded-lg overflow-hidden aspect-[3/4] relative">
                    <img
                      src={image.url}
                      alt={image.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-dark-grey/0 group-hover:bg-dark-grey/20 transition-colors" />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && filtered.length > 0 && (
        <div className="fixed inset-0 z-50 bg-dark-grey/95 flex items-center justify-center">
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-4 right-4 text-warm-white hover:text-gold transition-colors"
          >
            <X className="w-8 h-8" />
          </button>
          <button
            onClick={() => setSelectedImage(i => (i - 1 + filtered.length) % filtered.length)}
            className="absolute left-4 text-warm-white hover:text-gold transition-colors text-5xl font-light"
          >
            ‹
          </button>
          <div className="max-w-4xl max-h-[80vh] rounded-lg overflow-hidden mx-16">
            <img
              src={filtered[selectedImage]?.url}
              alt={filtered[selectedImage]?.alt}
              className="w-full h-full object-contain"
            />
          </div>
          <button
            onClick={() => setSelectedImage(i => (i + 1) % filtered.length)}
            className="absolute right-4 text-warm-white hover:text-gold transition-colors text-5xl font-light"
          >
            ›
          </button>
          <p className="absolute bottom-4 text-warm-white/60 text-sm">
            {selectedImage + 1} / {filtered.length}
          </p>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Galerija;
