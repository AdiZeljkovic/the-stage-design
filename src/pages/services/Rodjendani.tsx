import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { PartyPopper, Camera, Music, Users, DollarSign, Palette } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import ServiceSchema from "@/components/ServiceSchema";
import StickyCTA from "@/components/StickyCTA";
import heroImage from "@/assets/services/rodjendani-hero.jpg";
import makeupImage from "@/assets/services/makeup-birthday.jpg";
import sipPaintImage from "@/assets/services/sip-paint-birthday.jpg";
import gamesImage from "@/assets/services/interactive-games.jpg";

const Rodjendani = () => {
  return (
    <>
      <SEO
        title="Rođendani Sarajevo | Cijena od 350 KM | The Stage"
        description="Organizacija rođendana u Sarajevu. Make-up Birthday, Sip & Paint i Interaktivne igre. Cijena 350 KM za grupu do 10 osoba. Rezervišite termin!"
        canonical="/usluge/rodjendani"
      />
      <BreadcrumbSchema 
        items={[
          { name: "Početna", url: "/" },
          { name: "Usluge", url: "/usluge" },
          { name: "Rođendani", url: "/usluge/rodjendani" }
        ]} 
      />
      <ServiceSchema 
        name="Organizacija rođendana Sarajevo"
        description="Make-up Birthday, Sip & Paint i Interaktivne igre. Cijena 350 KM za grupu do 10 osoba."
        url="/usluge/rodjendani"
        price="350"
      />
      <Navbar />
      <StickyCTA />
      <div className="min-h-screen bg-warm-white pt-16">
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-gradient-to-br from-gold/20 to-cream overflow-hidden">
        <img 
          src={heroImage}
          alt="Rođendani u Sarajevu - The Stage event prostor"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gold/40 to-cream/60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center animate-fadeIn">
            <PartyPopper className="w-16 h-16 mx-auto mb-6 text-gold" />
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-dark-grey mb-4">
              Rođendani
            </h1>
            <p className="text-xl text-soft-grey max-w-2xl mx-auto px-4">
              Tri jedinstvena rođendanska iskustva za nezaboravan dan
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
              <p className="text-2xl font-serif text-gold font-bold">350 KM</p>
              <p className="text-soft-grey text-sm">Cijena po grupi</p>
            </div>
            <div className="flex flex-col items-center">
              <Users className="w-8 h-8 text-gold mb-2" />
              <p className="text-2xl font-serif text-dark-grey font-bold">Do 10 osoba</p>
              <p className="text-soft-grey text-sm">Moguća doplata za više</p>
            </div>
            <div className="flex flex-col items-center">
              <PartyPopper className="w-8 h-8 text-gold mb-2" />
              <p className="text-2xl font-serif text-dark-grey font-bold">3 Paketa</p>
              <p className="text-soft-grey text-sm">Odaberite svoj stil</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-soft p-8 md:p-12 mb-12">

          {/* Package 1 */}
          <div className="mb-16 pb-16 border-b border-border">
            <img 
              src={makeupImage}
              alt="Make-up Birthday - Rođendansko šminkanje Sarajevo"
              className="rounded-lg h-64 md:h-80 w-full object-cover mb-6"
              loading="lazy"
              decoding="async"
            />
            <h2 className="text-3xl font-serif font-bold text-dark-grey mb-4">
              1. Make-up Birthday
            </h2>
            <h3 className="text-xl text-gold mb-6">Ekskluzivni Kurs Šminkanja</h3>
            <p className="text-soft-grey mb-6 leading-relaxed">
              Postanite zvijezda na svoj dan! U spektakularnom okruženju, osigurali smo fantastične uslove da naučite osnove šminkanja pod vodstvom jedne od najpoznatijih makeup artistica u BiH, Nermine Nerme Ibrulj.
            </p>
            <p className="text-soft-grey mb-6 leading-relaxed">
              Naučite male trikove vrhunskih majstora, pravilno nanošenje, te odabir boja i stilova koji pristaju baš vašem licu.
            </p>
            <h4 className="font-semibold text-dark-grey mb-3">Paket uključuje:</h4>
            <ul className="space-y-2 text-soft-grey">
              <li>• Korištenje samo najboljih, high-end proizvoda</li>
              <li>• Moguć odabir tematskog šminkanja (fantasy, basic natural, oriental, full face)</li>
              <li>• Fotografiranje ispred specijalno dizajniranih "Instagrammable" pozadina</li>
              <li>• Odjeća i rekviziti za jedinstven izgled</li>
              <li>• Naš hit koktel "Pink Lemonade" s jestivim šljokicama</li>
              <li>• Snack bar (kokice, muffins, grickalice, slatkiši)</li>
              <li>• Neograničeni sokovi</li>
              <li>• Gift bag za slavljenicu</li>
            </ul>
          </div>

          {/* Package 2 */}
          <div className="mb-16 pb-16 border-b border-border">
            <img 
              src={sipPaintImage}
              alt="Sip and Paint Birthday - Kreativni rođendan Sarajevo"
              className="rounded-lg h-64 md:h-80 w-full object-cover mb-6"
              loading="lazy"
              decoding="async"
            />
            <h2 className="text-3xl font-serif font-bold text-dark-grey mb-4">
              2. Sip & Paint Birthday
            </h2>
            <h3 className="text-xl text-gold mb-6">Kreativnost, Druženje i Opuštena Zabava</h3>
            <p className="text-soft-grey mb-6 leading-relaxed">
              Sip & Paint rođendan je savršen spoj kreativnosti, druženja i opuštene zabave. Umjesto klasične proslave, slavljenica i gosti dobijaju iskustvo koje se pamti i nešto što nose kući – vlastito umjetničko djelo.
            </p>
            <p className="text-soft-grey mb-6 leading-relaxed">
              Proslava počinje uz piće po izboru, laganu muziku i pripremljen prostor sa platnima, bojama, kistovima i svim potrebnim materijalima. Kroz cijeli event vodi animator ili instruktor koji korak po korak pomaže gostima da naslikaju sliku, bez obzira na prethodno iskustvo. Nema pogrešnih poteza, samo dobra atmosfera i puno smijeha.
            </p>
            <p className="text-soft-grey mb-6 leading-relaxed">
              Sip & Paint rođendan je idealan za tinejdžere i odrasle koji žele nešto drugačije, estetski lijepo i opušteno. Prostor je privatno rezervisan za vašu grupu, bez gužve i bez stresa oko organizacije – mi se brinemo za setup, rekvizite, muziku i cjelokupan doživljaj.
            </p>
            <p className="text-soft-grey mb-6 leading-relaxed italic">
              Na kraju večeri, svaki gost odlazi kući sa svojom slikom i uspomenom koja traje duže od jedne Instagram priče.
            </p>
            <h4 className="font-semibold text-dark-grey mb-3">Paket uključuje:</h4>
            <ul className="space-y-2 text-soft-grey">
              <li>• Privatno rezervisan prostor za vašu grupu</li>
              <li>• Sav slikarski materijal (platna, boje, kistovi)</li>
              <li>• Vodstvo animatora/instruktora kroz cijeli event</li>
              <li>• Piće po izboru i lagana muzika</li>
              <li>• Snack bar</li>
              <li>• Vaše umjetničko djelo za ponijeti kući</li>
              <li>• Gift bag za slavljenicu</li>
            </ul>
          </div>

          {/* Package 3 */}
          <div className="mb-8">
            <img 
              src={gamesImage}
              alt="Interaktivne igre za rođendane Sarajevo"
              className="rounded-lg h-64 md:h-80 w-full object-cover mb-6"
              loading="lazy"
              decoding="async"
            />
            <h2 className="text-3xl font-serif font-bold text-dark-grey mb-4">
              3. Interaktivne Društvene Igre
            </h2>
            <h3 className="text-xl text-gold mb-6">Zabava, Smijeh i Takmičenje</h3>
            <p className="text-soft-grey mb-6 leading-relaxed">
              Za nezaboravan provod, osigurali smo niz takmičarskih igara pogodnih za sve uzraste. Naše osoblje vas vodi kroz svijet smijeha i zabave koji garantovano izgleda sjajno uživo i na kameri.
            </p>
            <h4 className="font-semibold text-dark-grey mb-3">Paket uključuje:</h4>
            <ul className="space-y-2 text-soft-grey">
              <li>• Igre poput Ping Pong Balls Challenge, Guess the Line, Gluhi Telefoni, Wheel of Luck</li>
              <li>• Vrijeme za ples uz hits playlistu ispod disko kugle</li>
              <li>• Snack bar</li>
              <li>• Neograničena pića (Coca-Cola, Mojito limunada, ledeni čaj)</li>
              <li>• Gift bag za slavljenika/slavljenicu</li>
            </ul>
          </div>

          <p className="text-sm text-soft-grey italic mt-8">
            *Dodatne opcije za sve rođendane: Torta uz doplatu i rezervaciju. Mogućnost doplate za profesionalnog fotografa.
          </p>
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

export default Rodjendani;
