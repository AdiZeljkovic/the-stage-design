import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { PartyPopper, Camera, Music, Users, DollarSign } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Rodjendani = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-warm-white pt-16">
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-gradient-to-br from-gold/20 to-cream">
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
              <p className="text-2xl font-serif text-gold font-bold">400 KM</p>
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
            <h2 className="text-3xl font-serif font-bold text-dark-grey mb-4">
              2. TikTok Izazov
            </h2>
            <h3 className="text-xl text-gold mb-6">Zaplešite do Zvijezda</h3>
            <p className="text-soft-grey mb-6 leading-relaxed">
              Zabavite se uz najnovije plesne izazove! Naš tim vas vodi kroz 10 trending TikTok izazova, savladavanje koreografije, snimanje i ocjenjivanje.
            </p>
            <h4 className="font-semibold text-dark-grey mb-3">Paket uključuje:</h4>
            <ul className="space-y-2 text-soft-grey">
              <li>• Pojedinačne i grupne aktivnosti</li>
              <li>• Tehnička oprema i pomoć pri snimanju videa za društvene mreže</li>
              <li>• Slikanje ispred posebno dizajniranih zidova (backdrop)</li>
              <li>• "TikTok Most Viral" music playlista</li>
              <li>• Snack bar</li>
              <li>• Neograničena pića (Coca-Cola, Mojito limunada, ledeni čaj)</li>
              <li>• Gift bag za slavljenika/slavljenicu</li>
            </ul>
          </div>

          {/* Package 3 */}
          <div className="mb-8">
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
