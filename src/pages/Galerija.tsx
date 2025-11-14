import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

const categories = ["SVI", "ROĐENDANI", "DJEVOJAČKE", "EVENTI", "PROSTOR", "MAKEUP"];

const Galerija = () => {
  const [activeFilter, setActiveFilter] = useState("SVI");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);

  // Placeholder images - replace with real images
  const images = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    category: categories[Math.floor(Math.random() * (categories.length - 1)) + 1],
    src: `/placeholder-${i + 1}.jpg`,
  }));

  const filteredImages = activeFilter === "SVI" 
    ? images 
    : images.filter(img => img.category === activeFilter);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % filteredImages.length);
  };

  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + filteredImages.length) % filteredImages.length);
  };

  return (
    <div className="min-h-screen bg-warm-white">
      <Navbar />

      <div className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-serif font-bold text-center text-dark-grey mb-4">
            Galerija
          </h1>
          <p className="text-center text-soft-grey mb-12 text-lg">
            Trenuci koji pričaju priču
          </p>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setActiveFilter(category)}
                variant={activeFilter === category ? "default" : "outline"}
                className={
                  activeFilter === category
                    ? "bg-gold text-warm-white hover:bg-gold/90"
                    : "border-gold text-gold hover:bg-gold hover:text-warm-white"
                }
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Masonry Gallery */}
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4">
            {filteredImages.map((image, index) => (
              <div
                key={image.id}
                className="break-inside-avoid mb-4 cursor-pointer hover-scale"
                onClick={() => openLightbox(index)}
              >
                <div className="bg-gradient-to-br from-gold/20 to-gold/5 rounded-lg overflow-hidden aspect-[3/4]">
                  <div className="w-full h-full flex items-center justify-center text-soft-grey">
                    <span className="text-sm">{image.category}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-dark-grey/95 flex items-center justify-center">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-warm-white hover:text-gold transition-colors"
          >
            <X className="w-8 h-8" />
          </button>

          <button
            onClick={prevImage}
            className="absolute left-4 text-warm-white hover:text-gold transition-colors text-4xl"
          >
            ‹
          </button>

          <div className="max-w-4xl max-h-[80vh] bg-muted rounded-lg overflow-hidden">
            <div className="w-full h-full flex items-center justify-center p-8">
              <span className="text-soft-grey">{filteredImages[selectedImage].category}</span>
            </div>
          </div>

          <button
            onClick={nextImage}
            className="absolute right-4 text-warm-white hover:text-gold transition-colors text-4xl"
          >
            ›
          </button>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Galerija;
