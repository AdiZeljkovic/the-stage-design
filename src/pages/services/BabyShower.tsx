import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Baby, Camera, DollarSign, Heart } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import ServiceSchema from "@/components/ServiceSchema";
import StickyCTA from "@/components/StickyCTA";
import heroImage from "@/assets/services/baby-shower-hero.jpg";

const BabyShower = () => {
  return (
    <>
      <SEO
        title="Baby Shower Sarajevo | 300 KM | The Stage"
        description="Organizacija baby shower proslava u Sarajevu. Fotogeničan prostor, snack bar i dekoracija. Cijena 300 KM. Rezervišite termin!"
        canonical="/usluge/baby-shower"
      />
      <BreadcrumbSchema 
        items={[
          { name: "Početna", url: "/" },
          { name: "Usluge", url: "/usluge" },
          { name: "Baby Shower", url: "/usluge/baby-shower" }
        ]} 
      />
      <ServiceSchema 
        name="Baby Shower Sarajevo"
        description="Fotogeničan prostor, snack bar i dekoracija. Cijena 300 KM."
        url="/usluge/baby-shower"
        price="300"
      />
      <Navbar />
      <StickyCTA />
      <div className="min-h-screen bg-warm-white pt-16">
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-gradient-to-br from-gold/20 to-cream overflow-hidden">
        <img 
          src={heroImage}
          alt="Baby Shower proslava u Sarajevu - The Stage"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gold/40 to-cream/60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center animate-fadeIn">
            <Baby className="w-16 h-16 mx-auto mb-6 text-gold" />
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-dark-grey mb-4">
              Baby Shower
            </h1>
            <p className="text-xl text-soft-grey max-w-2xl mx-auto px-4">
              Savršeno okruženje da buduću mamu iznenadite poklonima
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Key Info Box */}
        <div className="bg-white rounded-lg shadow-elegant p-6 sm:p-8 mb-12 border border-gold/20">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center">
              <DollarSign className="w-8 h-8 text-gold mb-2" />
              <p className="text-2xl font-serif text-gold font-bold">300 KM</p>
              <p className="text-soft-grey text-sm">Kompletna proslava</p>
            </div>
            <div className="flex flex-col items-center">
              <Camera className="w-8 h-8 text-gold mb-2" />
              <p className="text-2xl font-serif text-dark-grey font-bold">Fotogenično</p>
              <p className="text-soft-grey text-sm">Savršeno za uspomene</p>
            </div>
            <div className="flex flex-col items-center">
              <Heart className="w-8 h-8 text-gold mb-2" />
              <p className="text-2xl font-serif text-dark-grey font-bold">Snack Bar</p>
              <p className="text-soft-grey text-sm">Neograničeni sokovi</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-soft p-8 md:p-12 mb-12">

          <div className="mb-8">
            <p className="text-soft-grey mb-6 leading-relaxed text-lg">
              The Stage nudi savršeno okruženje za proslavu baby shower-a. U fotogeničnom i prikladno uređenom prostoru, stvorite nezaboravne trenutke sa budućom mamom i najbližima.
            </p>

            <h4 className="font-semibold text-dark-grey mb-4 text-xl">Paket uključuje:</h4>
            <ul className="space-y-3 text-soft-grey">
              <li className="flex items-start">
                <Camera className="w-5 h-5 text-gold mr-2 flex-shrink-0 mt-0.5" />
                <span>Savršeno uređen prostor i pozadine za slikanje</span>
              </li>
              <li className="flex items-start">
                <Camera className="w-5 h-5 text-gold mr-2 flex-shrink-0 mt-0.5" />
                <span>Mjesto za sjedenje, ples i druženje</span>
              </li>
              <li className="flex items-start">
                <Camera className="w-5 h-5 text-gold mr-2 flex-shrink-0 mt-0.5" />
                <span>Neograničen snack and soda bar</span>
              </li>
              <li className="flex items-start">
                <Camera className="w-5 h-5 text-gold mr-2 flex-shrink-0 mt-0.5" />
                <span>Opremu za snimanje i slikanje kako bi trenuci ostali zabilježeni</span>
              </li>
            </ul>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div className="p-6 bg-cream/50 rounded-lg">
              <h5 className="font-semibold text-dark-grey mb-3">Personalizacija</h5>
              <p className="text-soft-grey text-sm">
                Uz konsultaciju s našim timom, možete prilagoditi dekoraciju i temu prema vašim željama i potrebama.
              </p>
            </div>
            <div className="p-6 bg-cream/50 rounded-lg">
              <h5 className="font-semibold text-dark-grey mb-3">Dodatne opcije</h5>
              <p className="text-soft-grey text-sm">
                Možete dodati tortu, profesionalnog fotografa, ili bilo koju drugu uslugu koja će učiniti ovaj dan još posebnijim.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button asChild size="lg" className="bg-gold hover:bg-gold/90 text-warm-white">
            <Link to="/kontakt">Rezervišite termin</Link>
          </Button>
        </div>
      </section>
      </div>
      <Footer />
    </>
  );
};

export default BabyShower;
