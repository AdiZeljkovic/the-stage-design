import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Mic, Camera, Users, BookOpen, MapPin, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import ServiceSchema from "@/components/ServiceSchema";
import StickyCTA from "@/components/StickyCTA";
import { useServiceContent } from "@/hooks/useServiceContent";
import heroImage from "@/assets/services/najam-hero.jpg";
import podcastImage from "@/assets/services/podcast-studio.jpg";
import eventsImage from "@/assets/services/presentations-events.jpg";
import photoImage from "@/assets/services/photo-studio.jpg";
import workshopsImage from "@/assets/services/workshops.jpg";

const Najam = () => {
  const svc = useServiceContent('najam');
  const d = svc?.data;

  return (
    <>
      <SEO
        title={d?.seoTitle || "Najam Prostora Sarajevo | Podcast Studio | The Stage"}
        description={d?.seoDescription || "Najam event prostora u Sarajevu - 75m² u centru grada. Podcast studio, foto sesije, prezentacije i radionice. Zatražite ponudu!"}
        canonical="/usluge/najam-prostora"
      />
      <BreadcrumbSchema 
        items={[
          { name: "Početna", url: "/" },
          { name: "Usluge", url: "/usluge" },
          { name: "Najam Prostora", url: "/usluge/najam-prostora" }
        ]} 
      />
      <ServiceSchema 
        name="Najam prostora Sarajevo"
        description="Event prostor 75m² u centru Sarajeva. Podcast studio, foto sesije, prezentacije i radionice."
        url="/usluge/najam-prostora"
        price="50"
      />
      <Navbar />
      <StickyCTA />
      <div className="min-h-screen bg-warm-white pt-16">
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-gradient-to-br from-gold/20 to-cream overflow-hidden">
        <img
          src={svc?.hero_image_url || heroImage}
          alt="Najam prostora u Sarajevu - The Stage"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gold/40 to-cream/60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center animate-fadeIn">
            <Users className="w-16 h-16 mx-auto mb-6 text-gold" />
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-dark-grey mb-4">
              {d?.heroTitle || "Najam Prostora Sarajevo"}
            </h1>
            <p className="text-xl text-soft-grey max-w-2xl mx-auto px-4">
              {d?.heroTagline || "Multipraktični prostor za sve vaše potrebe"}
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
              <p className="text-2xl font-serif text-dark-grey font-bold">{d?.stat2Value || "75 m²"}</p>
              <p className="text-soft-grey text-sm">{d?.stat2Label || "Multifunkcionalan prostor"}</p>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="w-8 h-8 text-gold mb-2" />
              <p className="text-2xl font-serif text-dark-grey font-bold">{d?.stat3Value || "Centar Grada"}</p>
              <p className="text-soft-grey text-sm">{d?.stat3Label || "Parking dostupan"}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-soft p-8 md:p-12 mb-12">

          <div className="mb-12">
            <p className="text-soft-grey mb-8 leading-relaxed text-lg">
              {d?.mainDescription || "Tražite prostor za najam u Sarajevu? The Stage nudi idealnu i prepoznatljivu lokaciju u centru grada s parking opcijama. Zahvaljujući multipraktičnosti, prostor se lako transformiše iz krajnje ozbiljnog u moderan i zabavan set-up."}
            </p>
          </div>

          {/* Service Cards */}
          <div className="space-y-8 mb-12">
            {/* Podcast Studio */}
            <div className="p-8 bg-gradient-to-br from-cream/50 to-white rounded-lg border border-gold/20 overflow-hidden">
              <div className="grid md:grid-cols-2 gap-6 mb-4">
                <img 
                  src={podcastImage}
                  alt="Podcast studio za snimanje u Sarajevu"
                  className="rounded-lg h-64 w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div className="flex items-start gap-4">
                <Mic className="w-10 h-10 text-gold flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-serif font-bold text-dark-grey mb-3">
                    {d?.packages?.[0]?.title || "Najam za snimanje podcasta"}
                  </h3>
                  <p className="text-soft-grey leading-relaxed mb-4">
                    {d?.packages?.[0]?.description || "Profesionalno opremljen prostor za snimanje podcasta u srcu grada. Idealno za kreatore sadržaja, influencere i profesionalce."}
                  </p>
                  <ul className="space-y-2 text-soft-grey text-sm">
                    {(d?.packages?.[0]?.items?.length ? d.packages[0].items : [
                      'Kvalitetna audio oprema',
                      'Prepoznatljiva i prilagodljiva lokacija',
                      'Moderna i ozbiljna ili zabavna atmosfera prema potrebi',
                      'Parking opcije u blizini',
                    ]).map((item, i) => <li key={i}>• {item}</li>)}
                  </ul>
                  <div className="mt-4 p-3 bg-cream/70 rounded border border-gold/10">
                    <p className="text-soft-grey text-center text-xs">
                      Ova usluga je u potpunosti prilagodljiva vašim željama i potrebama.
                    </p>
                  </div>
                </div>
                </div>
              </div>
            </div>

            {/* Presentations & Events */}
            <div className="p-8 bg-gradient-to-br from-cream/50 to-white rounded-lg border border-gold/20 overflow-hidden">
              <div className="grid md:grid-cols-2 gap-6 mb-4">
                <img 
                  src={eventsImage}
                  alt="Prostor za prezentacije i evente Sarajevo"
                  className="rounded-lg h-64 w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div className="flex items-start gap-4">
                <Users className="w-10 h-10 text-gold flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-serif font-bold text-dark-grey mb-3">
                    {d?.packages?.[1]?.title || "Najam za prezentacije i evente"}
                  </h3>
                  <p className="text-soft-grey leading-relaxed mb-4">
                    {d?.packages?.[1]?.description || "75 kvadrata savršenog prostora za vaš idući influencerski event, lansiranje proizvoda, poslovnu prezentaciju ili edukativnu radionicu."}
                  </p>
                  <ul className="space-y-2 text-soft-grey text-sm">
                    {(d?.packages?.[1]?.items?.length ? d.packages[1].items : [
                      'Scenske elemente i dekoraciju',
                      'Displaye za proizvode',
                      'Fleksibilnu konfiguraciju prostora',
                      'Audio i vizuelnu opremu',
                      'Profesionalnu atmosferu',
                    ]).map((item, i) => <li key={i}>• {item}</li>)}
                  </ul>
                  <div className="mt-4 p-3 bg-cream/70 rounded border border-gold/10">
                    <p className="text-soft-grey text-center text-xs">
                      Ova usluga je u potpunosti prilagodljiva vašim željama i potrebama.
                    </p>
                  </div>
                </div>
                </div>
              </div>
            </div>

            {/* Photo Studio */}
            <div className="p-8 bg-gradient-to-br from-cream/50 to-white rounded-lg border border-gold/20 overflow-hidden">
              <div className="grid md:grid-cols-2 gap-6 mb-4">
                <img 
                  src={photoImage}
                  alt="Studio za fotografiranje Sarajevo"
                  className="rounded-lg h-64 w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div className="flex items-start gap-4">
                <Camera className="w-10 h-10 text-gold flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-serif font-bold text-dark-grey mb-3">
                    {d?.packages?.[2]?.title || "Studio za fotografiranje"}
                  </h3>
                  <p className="text-soft-grey leading-relaxed mb-4">
                    {d?.packages?.[2]?.description || "Za sve bitne datume koje želite uramiti – mature, vjenčanja, diplomiranja, rođendane ili profesionalne headshots."}
                  </p>
                  <ul className="space-y-2 text-soft-grey text-sm">
                    {(d?.packages?.[2]?.items?.length ? d.packages[2].items : [
                      'Suradnja s vrhunskim fotografima',
                      'Raznovrsne pozadine i set-upove',
                      'Profesionalno osvjetljenje',
                      '"Instagrammable" kutke',
                      'Rekvizite prema potrebi',
                    ]).map((item, i) => <li key={i}>• {item}</li>)}
                  </ul>
                  <div className="mt-4 p-3 bg-cream/70 rounded border border-gold/10">
                    <p className="text-soft-grey text-center text-xs">
                      Ova usluga je u potpunosti prilagodljiva vašim željama i potrebama.
                    </p>
                  </div>
                </div>
                </div>
              </div>
            </div>
          </div>

            {/* Educational Workshops */}
            <div className="p-8 bg-gradient-to-br from-cream/50 to-white rounded-lg border border-gold/20 overflow-hidden">
              <div className="grid md:grid-cols-2 gap-6 mb-4">
                <div 
                  className="rounded-lg h-64 bg-cover bg-center"
                  style={{ backgroundImage: `url(${workshopsImage})` }}
                />
                <div className="flex items-start gap-4">
                <BookOpen className="w-10 h-10 text-gold flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-serif font-bold text-dark-grey mb-3">
                    {d?.packages?.[3]?.title || "Edukativne radionice"}
                  </h3>
                  <p className="text-soft-grey leading-relaxed mb-4">
                    {d?.packages?.[3]?.description || "Idealan prostor za vođenje edukativnih radionica, treninga, seminara i grupnih sesija."}
                  </p>
                  <ul className="space-y-2 text-soft-grey text-sm">
                    {(d?.packages?.[3]?.items?.length ? d.packages[3].items : [
                      'Fleksibilno sjedenje za do 30 osoba',
                      'Prezentacijska oprema',
                      'Inspirativno okruženje',
                      'Prostor za praktične vježbe',
                    ]).map((item, i) => <li key={i}>• {item}</li>)}
                  </ul>
                  <div className="mt-4 p-3 bg-cream/70 rounded border border-gold/10">
                    <p className="text-soft-grey text-center text-xs">
                      Ova usluga je u potpunosti prilagodljiva vašim željama i potrebama.
                    </p>
                  </div>
                </div>
              </div>
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

export default Najam;
