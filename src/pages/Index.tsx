import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Calendar, Palette, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import indexHero from "@/assets/index/hero.jpg";
import indexAbout from "@/assets/index/about.jpg";
import indexGallery1 from "@/assets/index/gallery-1.jpg";
import indexGallery2 from "@/assets/index/gallery-2.jpg";
import indexGallery3 from "@/assets/index/gallery-3.jpg";
import indexGallery4 from "@/assets/index/gallery-4.jpg";
import indexGallery5 from "@/assets/index/gallery-5.jpg";
import indexGallery6 from "@/assets/index/gallery-6.jpg";
import indexGallery7 from "@/assets/index/gallery-7.jpg";
import indexGallery8 from "@/assets/index/gallery-8.jpg";

const galleryImages = [
  { src: indexGallery1, alt: "Rođendanska proslava u The Stage Sarajevo" },
  { src: indexGallery2, alt: "Djevojačka večer u event prostoru Sarajevo" },
  { src: indexGallery3, alt: "Sip and Paint večer u Sarajevu" },
  { src: indexGallery4, alt: "Baby shower dekoracija The Stage" },
  { src: indexGallery5, alt: "Italian Night pravljenje paste Sarajevo" },
  { src: indexGallery6, alt: "Profesionalno šminkanje Sarajevo" },
  { src: indexGallery7, alt: "Podcast studio najam Sarajevo" },
  { src: indexGallery8, alt: "Event prostor za proslave Sarajevo" },
];

const Index = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="The Stage Sarajevo | Najbolji Event Prostor za Proslave"
        description="The Stage Sarajevo - Ekskluzivni event prostor za rođendane, djevojačke večeri, baby shower, Sip & Paint i profesionalno šminkanje. Cijena od 50 KM. Rezervišite odmah!"
        canonical="/"
      />
      <LocalBusinessSchema />
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen w-full min-h-[600px]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url(${indexHero})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center'
          }}
        />
        <div className="absolute inset-0 bg-dark-grey/20" />
        <div className="relative h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fadeIn max-w-3xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-warm-white mb-4 sm:mb-6 drop-shadow-lg">
              THE STAGE SARAJEVO
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-warm-white mb-8 sm:mb-10 drop-shadow-md font-light px-4">
              Najbolji Event Prostor za Nezaboravne Trenutke
            </p>
            <div className="flex flex-col gap-4 justify-center px-4">
              <Button asChild size="lg" className="bg-gold hover:bg-gold/90 text-warm-white shadow-lg w-full sm:w-auto">
                <Link to="/usluge">Pogledajte usluge</Link>
              </Button>
              <Button asChild size="lg" className="bg-warm-white/90 hover:bg-warm-white text-dark-grey shadow-lg w-full sm:w-auto">
                <Link to="/galerija">Istražite galeriju</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif font-bold text-center text-dark-grey mb-12 animate-fade-in">
            Naša ponuda
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <Card className="bg-warm-white shadow-elegant hover-scale cursor-pointer">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mb-4">
                  <Sparkles className="w-6 h-6 text-gold" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-dark-grey mb-2">Proslave</h3>
                <p className="text-soft-grey text-sm">
                  Rođendani, djevojačke večeri i baby shower u luksunom okruženju
                </p>
              </CardContent>
            </Card>

            {/* Card 2 */}
            <Card className="bg-warm-white shadow-elegant hover-scale cursor-pointer">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mb-4">
                  <Calendar className="w-6 h-6 text-gold" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-dark-grey mb-2">Tematske Večeri</h3>
                <p className="text-soft-grey text-sm">
                  Italian Night, Sip & Paint i druge jedinstvene večeri
                </p>
              </CardContent>
            </Card>

            {/* Card 3 */}
            <Card className="bg-warm-white shadow-elegant hover-scale cursor-pointer">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mb-4">
                  <Palette className="w-6 h-6 text-gold" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-dark-grey mb-2">Profesionalne Usluge</h3>
                <p className="text-soft-grey text-sm">
                  Šminkanje, edukacije i kreativne radionice
                </p>
              </CardContent>
            </Card>

            {/* Card 4 */}
            <Card className="bg-warm-white shadow-elegant hover-scale cursor-pointer">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-gold" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-dark-grey mb-2">Najam Prostora</h3>
                <p className="text-soft-grey text-sm">
                  Podcast studio, eventi, foto sesije i poslovni skupovi
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-warm-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="h-96 bg-muted rounded-lg overflow-hidden">
              <img
                src={indexAbout}
                alt="The Stage Sarajevo - ekskluzivni event prostor za proslave i događaje"
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <h2 className="text-4xl font-serif font-bold text-dark-grey mb-6">
                Mjesto u Sarajevu gdje se stvaraju uspomene
              </h2>
              <p className="text-soft-grey mb-6 leading-relaxed">
                Dobrodošli u The Stage Sarajevo, ekskluzivni prostor u srcu grada dizajniran za vaše najposebnije trenutke. 
                Od luksuznih rođendanskih proslava do profesionalnih evenata, naš tim pretvara svaku viziju u stvarnost.
              </p>
              <div className="bg-gold/10 border-l-4 border-gold p-4 mb-6">
                <p className="text-dark-grey font-medium">
                  <strong>Napomena:</strong> Sve iz naše ponude moguće je platiti kartično i na rate.
                </p>
              </div>
              <Button asChild size="lg" className="bg-gold hover:bg-gold/90 text-warm-white">
                <Link to="/o-nama">Saznajte više</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif font-bold text-center text-dark-grey mb-4">
            Trenuci uhvaćeni na sceni
          </h2>
          <p className="text-center text-soft-grey mb-12">
            Pogledajte kako pretvaramo vizije u stvarnost
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {galleryImages.map((img, i) => (
              <div key={i} className="aspect-square rounded-lg overflow-hidden hover-scale">
                <img 
                  src={img.src} 
                  alt={img.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button asChild size="lg" className="bg-gold hover:bg-gold/90 text-warm-white">
              <Link to="/galerija">Pogledajte cijelu galeriju</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
