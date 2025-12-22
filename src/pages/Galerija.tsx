import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { X } from "lucide-react";
import birthday1 from "@/assets/gallery/birthday-1.jpg";
import birthday2 from "@/assets/gallery/birthday-2.jpg";
import bachelorette1 from "@/assets/gallery/bachelorette-1.jpg";
import bachelorette2 from "@/assets/gallery/bachelorette-2.jpg";
import event1 from "@/assets/gallery/event-1.jpg";
import event2 from "@/assets/gallery/event-2.jpg";
import space1 from "@/assets/gallery/space-1.jpg";
import space2 from "@/assets/gallery/space-2.jpg";
import space3 from "@/assets/gallery/space-3.jpg";
import makeup1 from "@/assets/gallery/makeup-1.jpg";
import makeup2 from "@/assets/gallery/makeup-2.jpg";
import makeup3 from "@/assets/gallery/makeup-3.jpg";

const Galerija = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);

  const images = [
    { id: 1, src: birthday1, alt: "Rođendanska proslava u The Stage Sarajevo" },
    { id: 2, src: birthday2, alt: "Dekoracija za rođendan Sarajevo" },
    { id: 3, src: bachelorette1, alt: "Djevojačka večer u Sarajevu" },
    { id: 4, src: bachelorette2, alt: "Bride to be proslava Sarajevo" },
    { id: 5, src: event1, alt: "Privatni event u The Stage Sarajevo" },
    { id: 6, src: event2, alt: "Korporativni događaj Sarajevo" },
    { id: 7, src: space1, alt: "Event prostor za najam Sarajevo" },
    { id: 8, src: space2, alt: "The Stage Sarajevo unutrašnjost" },
    { id: 9, src: space3, alt: "Podcast studio Sarajevo" },
    { id: 10, src: makeup1, alt: "Profesionalno šminkanje Sarajevo" },
    { id: 11, src: makeup2, alt: "Makeup artist Sarajevo" },
    { id: 12, src: makeup3, alt: "Šminkanje za posebne prilike Sarajevo" },
  ];

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + images.length) % images.length);
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
          <p className="text-center text-soft-grey mb-12 text-lg">
            Trenuci koji pričaju priču
          </p>

          {/* Masonry Gallery */}
          <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-4">
            {images.map((image, index) => (
              <div
                key={image.id}
                className="break-inside-avoid mb-4 cursor-pointer hover-scale"
                onClick={() => openLightbox(index)}
              >
                <div className="rounded-lg overflow-hidden aspect-[3/4]">
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
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

          <div className="max-w-4xl max-h-[80vh] rounded-lg overflow-hidden">
            <img 
              src={images[selectedImage].src} 
              alt={images[selectedImage].alt}
              className="w-full h-full object-contain"
            />
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
