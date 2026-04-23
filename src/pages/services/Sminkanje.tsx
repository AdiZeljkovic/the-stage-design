import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sparkles, Star, Users, Award } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import ServiceSchema from "@/components/ServiceSchema";
import StickyCTA from "@/components/StickyCTA";
import { useServiceContent } from "@/hooks/useServiceContent";
import heroImage from "@/assets/services/sminkanje-hero.jpg";

const Sminkanje = () => {
  const svc = useServiceContent('sminkanje');
  const d = svc?.data;

  return (
    <>
      <SEO
        title={d?.seoTitle || "Profesionalno Šminkanje Sarajevo | The Stage"}
        description={d?.seoDescription || "Profesionalno šminkanje u Sarajevu za vjenčanja, mature, foto sesije. High-end proizvodi: Dior, YSL, MAC. Zatražite ponudu!"}
        canonical="/usluge/sminkanje"
      />
      <BreadcrumbSchema 
        items={[
          { name: "Početna", url: "/" },
          { name: "Usluge", url: "/usluge" },
          { name: "Profesionalno Šminkanje", url: "/usluge/sminkanje" }
        ]} 
      />
      <ServiceSchema 
        name="Profesionalno šminkanje Sarajevo"
        description="Šminkanje za vjenčanja, mature, foto sesije. High-end proizvodi: Dior, YSL, MAC."
        url="/usluge/sminkanje"
        price="70"
      />
      <Navbar />
      <StickyCTA />
      <div className="min-h-screen bg-warm-white pt-16">
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-gradient-to-br from-gold/20 to-cream overflow-hidden">
        <img
          src={svc?.hero_image_url || heroImage}
          alt="Profesionalno šminkanje u Sarajevu - The Stage"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gold/40 to-cream/60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center animate-fadeIn">
            <Sparkles className="w-16 h-16 mx-auto mb-6 text-gold" />
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-dark-grey mb-4">
              {d?.heroTitle || "Profesionalno Šminkanje Sarajevo"}
            </h1>
            <p className="text-xl text-soft-grey max-w-2xl mx-auto px-4">
              {d?.heroTagline || "Vrhunska umjetnost šminkanja za sve prilike"}
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
              <Sparkles className="w-8 h-8 text-gold mb-2" />
              <p className="text-2xl font-serif text-gold font-bold">{d?.stat1Value || "Po Dogovoru"}</p>
              <p className="text-soft-grey text-sm">{d?.stat1Label || "Prilagođene cijene"}</p>
            </div>
            <div className="flex flex-col items-center">
              <Users className="w-8 h-8 text-gold mb-2" />
              <p className="text-2xl font-serif text-dark-grey font-bold">{d?.stat2Value || "Solo ili Grupa"}</p>
              <p className="text-soft-grey text-sm">{d?.stat2Label || "Sve prilike"}</p>
            </div>
            <div className="flex flex-col items-center">
              <Award className="w-8 h-8 text-gold mb-2" />
              <p className="text-2xl font-serif text-dark-grey font-bold">{d?.stat3Value || "Premium"}</p>
              <p className="text-soft-grey text-sm">{d?.stat3Label || "High-end proizvodi"}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-soft p-8 md:p-12 mb-12">

          <div className="mb-8">
            <p className="text-soft-grey mb-8 leading-relaxed text-lg">
              {d?.mainDescription || "Tražite profesionalno šminkanje u Sarajevu? Prepustite se beskrajno talentiranim rukama vrhunskih šminkerica s karijerama na TV-u, filmu i muzičkoj industriji. U The Stage-u nudimo profesionalno šminkanje za sve prilike - od vjenčanja i matura do foto sesija i specijalnih događaja."}
            </p>

            <div className="p-8 bg-gradient-to-br from-gold/10 to-cream/50 rounded-lg mb-8 border border-gold/20">
              <div className="flex items-start gap-4 mb-4">
                <Star className="w-8 h-8 text-gold flex-shrink-0" />
                <div>
                  <h4 className="font-serif text-2xl text-dark-grey mb-2">Premium proizvodi</h4>
                  <p className="text-soft-grey">
                    Koristimo isključivo high-end proizvode svjetski poznatih brendova:
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6">
                <div className="text-center p-3 bg-white rounded-lg">
                  <p className="font-semibold text-dark-grey text-sm">Dior</p>
                </div>
                <div className="text-center p-3 bg-white rounded-lg">
                  <p className="font-semibold text-dark-grey text-sm">YSL</p>
                </div>
                <div className="text-center p-3 bg-white rounded-lg">
                  <p className="font-semibold text-dark-grey text-sm">Haus Labs</p>
                </div>
                <div className="text-center p-3 bg-white rounded-lg">
                  <p className="font-semibold text-dark-grey text-sm">Estee Lauder</p>
                </div>
                <div className="text-center p-3 bg-white rounded-lg">
                  <p className="font-semibold text-dark-grey text-sm">Huda Beauty</p>
                </div>
                <div className="text-center p-3 bg-white rounded-lg">
                  <p className="font-semibold text-dark-grey text-sm">Too Faced</p>
                </div>
                <div className="text-center p-3 bg-white rounded-lg">
                  <p className="font-semibold text-dark-grey text-sm">Kryolan</p>
                </div>
                <div className="text-center p-3 bg-white rounded-lg">
                  <p className="font-semibold text-dark-grey text-sm">MAC</p>
                </div>
              </div>
            </div>

            <h4 className="font-semibold text-dark-grey mb-4 text-xl">Usluge šminkanja:</h4>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {(d?.packages?.length ? d.packages : [
                { title: 'Posebne prilike', subtitle: 'Vjenčanja, mature, svečane večeri', description: 'Vjenčanja, mature, diplomiranja, svečane večeri i svi drugi važni trenutci u vašem životu.' },
                { title: 'Foto & video sesije', subtitle: 'Profesionalna šminka za fotografije', description: 'Profesionalna šminka za fotografije, video produkcije, i društvene mreže.' },
                { title: 'Grupno šminkanje', subtitle: 'Djevojačke večeri i proslave', description: 'Idealno za djevojačke večeri, rođendane i druge grupne proslave.' },
                { title: 'Edukacija', subtitle: 'Naučite tajne šminkanja', description: 'Naučite tajne profesionalnog šminkanja direktno od iskusnih majstora.' },
              ]).map((pkg, i) => (
                <div key={i} className="p-6 bg-cream/50 rounded-lg">
                  <Sparkles className="w-6 h-6 text-gold mb-3" />
                  <h5 className="font-semibold text-dark-grey mb-2">{pkg.title}</h5>
                  <p className="text-soft-grey text-sm">{pkg.description}</p>
                  <div className="mt-4 p-3 bg-cream/70 rounded border border-gold/10">
                    <p className="text-soft-grey text-center text-xs">Ova usluga je u potpunosti prilagodljiva vašim željama i potrebama.</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button asChild size="lg" className="bg-gold hover:bg-gold/90 text-warm-white">
            <Link to="/kontakt">{d?.ctaText || "Zatražite ponudu"}</Link>
          </Button>
        </div>
      </section>
      </div>
      <Footer />
    </>
  );
};

export default Sminkanje;
