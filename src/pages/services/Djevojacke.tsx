import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, Sparkles, DollarSign, Music } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import ServiceSchema from "@/components/ServiceSchema";
import StickyCTA from "@/components/StickyCTA";
import { useServiceContent } from "@/hooks/useServiceContent";
import heroImage from "@/assets/services/djevojacke-hero.jpg";

const Djevojacke = () => {
  const svc = useServiceContent('djevojacke');
  const d = svc?.data;

  return (
    <>
      <SEO
        title={d?.seoTitle || "Djevojačke Večeri Sarajevo | 350 KM | The Stage"}
        description={d?.seoDescription || "Organizacija djevojačkih večeri u Sarajevu. Bride to be proslava sa dekoracijom, igrama i muzikom. Cijena 350 KM. Rezervišite termin!"}
        canonical="/usluge/djevojacke-veceri"
      />
      <BreadcrumbSchema 
        items={[
          { name: "Početna", url: "/" },
          { name: "Usluge", url: "/usluge" },
          { name: "Djevojačke Večeri", url: "/usluge/djevojacke-veceri" }
        ]} 
      />
      <ServiceSchema 
        name="Djevojačke večeri Sarajevo"
        description="Bride to be proslava sa dekoracijom, igrama i muzikom. Cijena 350 KM."
        url="/usluge/djevojacke-veceri"
        price="350"
      />
      <Navbar />
      <StickyCTA />
      <div className="min-h-screen bg-warm-white pt-16">
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-gradient-to-br from-gold/20 to-cream overflow-hidden">
        <img
          src={svc?.hero_image_url || heroImage}
          alt="Djevojačke večeri u Sarajevu - The Stage"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gold/40 to-cream/60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center animate-fadeIn">
            <Heart className="w-16 h-16 mx-auto mb-6 text-gold" />
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-dark-grey mb-4">
              {d?.heroTitle || "Djevojačke Večeri Sarajevo"}
            </h1>
            <p className="text-xl text-soft-grey max-w-2xl mx-auto px-4">
              {d?.heroTagline || "Proslavite posljednje dane slobode sa stilom"}
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
              <p className="text-2xl font-serif text-gold font-bold">{d?.stat1Value || "350 KM"}</p>
              <p className="text-soft-grey text-sm">{d?.stat1Label || "Kompletna proslava"}</p>
            </div>
            <div className="flex flex-col items-center">
              <Heart className="w-8 h-8 text-gold mb-2" />
              <p className="text-2xl font-serif text-dark-grey font-bold">{d?.stat2Value || "Bride to Be"}</p>
              <p className="text-soft-grey text-sm">{d?.stat2Label || "Potpuna personalizacija"}</p>
            </div>
            <div className="flex flex-col items-center">
              <Music className="w-8 h-8 text-gold mb-2" />
              <p className="text-2xl font-serif text-dark-grey font-bold">{d?.stat3Value || "Sve Uključeno"}</p>
              <p className="text-soft-grey text-sm">{d?.stat3Label || "Dekoracija, igre, muzika"}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-soft p-8 md:p-12 mb-12">

          <div className="mb-8">
            <p className="text-soft-grey mb-6 leading-relaxed text-lg">
              {d?.mainDescription || 'Tražite savršeno mjesto za djevojačku veče u Sarajevu? Kreiramo savršenu "Bride to be" atmosferu uz potpunu personalizaciju. Prepustite se zabavi i stvarajte uspomene koje će trajati zauvijek.'}
            </p>

            <h4 className="font-semibold text-dark-grey mb-4 text-xl">Paket uključuje:</h4>
            <ul className="space-y-3 text-soft-grey">
              {(d?.packages?.[0]?.items?.length ? d.packages[0].items : [
                'Prilagođenu scenografiju uz LED znak "Bride to be"',
                'Tematski mobilijar (posuđe, odjeća, lente, veo, naočale, lepeze...)',
                'Mnogobrojne rekvizite za nezaboravno fotografiranje',
                'Tehničku opremu za snimanje',
                'Interaktivne i zabavne igre za cijelo društvo',
                'Snack bar',
                'Ozvukom i personaliziranu muzičku listu',
                'Moguć dogovor o dodatnoj personalizaciji i organizaciji',
              ]).map((item, i) => (
                <li key={i} className="flex items-start">
                  <Sparkles className="w-5 h-5 text-gold mr-2 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 p-4 bg-cream/50 rounded-lg border border-gold/10">
            <p className="text-soft-grey text-center text-sm">
              Ovaj paket je u potpunosti prilagodljiv vašim željama i potrebama.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button asChild size="lg" className="bg-gold hover:bg-gold/90 text-warm-white">
            <Link to="/kontakt">{d?.ctaText || "Rezervišite termin"}</Link>
          </Button>
        </div>
      </section>
      </div>
      <Footer />
    </>
  );
};

export default Djevojacke;
