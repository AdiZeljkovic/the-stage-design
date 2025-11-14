import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Mic, Camera, Users, BookOpen } from "lucide-react";

const Najam = () => {
  return (
    <div className="min-h-screen bg-warm-white pt-16">
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-gradient-to-br from-gold/20 to-cream">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center animate-fadeIn">
            <Users className="w-16 h-16 mx-auto mb-6 text-gold" />
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-dark-grey mb-4">
              Najam Prostora
            </h1>
            <p className="text-xl text-soft-grey max-w-2xl mx-auto px-4">
              Multipraktični prostor za sve vaše potrebe
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-lg shadow-soft p-8 md:p-12 mb-12">
          <div className="text-center mb-12">
            <p className="text-3xl font-serif text-gold mb-4">Cijena po dogovoru</p>
            <p className="text-soft-grey">75 kvadrata pažljivo uređenog prostora</p>
          </div>

          <div className="mb-12">
            <p className="text-soft-grey mb-8 leading-relaxed text-lg">
              Idealna i prepoznatljiva lokacija u centru grada s parking opcijama. Zahvaljujući multipraktičnosti, prostor se lako transformiše iz krajnje ozbiljnog u moderan i zabavan set-up.
            </p>
          </div>

          {/* Service Cards */}
          <div className="space-y-8 mb-12">
            {/* Podcast Studio */}
            <div className="p-8 bg-gradient-to-br from-cream/50 to-white rounded-lg border border-gold/20">
              <div className="flex items-start gap-4 mb-4">
                <Mic className="w-10 h-10 text-gold flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-serif font-bold text-dark-grey mb-3">
                    Najam za Snimanje Podcasta
                  </h3>
                  <p className="text-soft-grey leading-relaxed mb-4">
                    Profesionalno opremljen prostor za snimanje podcasta u srcu grada. Idealno za kreatore sadržaja, influencere i profesionalce.
                  </p>
                  <ul className="space-y-2 text-soft-grey text-sm">
                    <li>• Kvalitetna audio oprema</li>
                    <li>• Prepoznatljiva i prilagodljiva lokacija</li>
                    <li>• Moderna i ozbiljna ili zabavna atmosfera prema potrebi</li>
                    <li>• Parking opcije u blizini</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Presentations & Events */}
            <div className="p-8 bg-gradient-to-br from-cream/50 to-white rounded-lg border border-gold/20">
              <div className="flex items-start gap-4 mb-4">
                <Users className="w-10 h-10 text-gold flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-serif font-bold text-dark-grey mb-3">
                    Najam za Prezentacije i Evente
                  </h3>
                  <p className="text-soft-grey leading-relaxed mb-4">
                    75 kvadrata savršenog prostora za vaš idući influencerski event, lansiranje proizvoda, poslovnu prezentaciju ili edukativnu radionicu.
                  </p>
                  <ul className="space-y-2 text-soft-grey text-sm">
                    <li>• Scenske elemente i dekoraciju</li>
                    <li>• Displaye za proizvode</li>
                    <li>• Fleksibilnu konfiguraciju prostora</li>
                    <li>• Audio i vizuelnu opremu</li>
                    <li>• Profesionalnu atmosferu</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Photo Studio */}
            <div className="p-8 bg-gradient-to-br from-cream/50 to-white rounded-lg border border-gold/20">
              <div className="flex items-start gap-4 mb-4">
                <Camera className="w-10 h-10 text-gold flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-serif font-bold text-dark-grey mb-3">
                    Studio za Fotografiranje
                  </h3>
                  <p className="text-soft-grey leading-relaxed mb-4">
                    Za sve bitne datume koje želite uramiti – mature, vjenčanja, diplomiranja, rođendane ili profesionalne headshots.
                  </p>
                  <ul className="space-y-2 text-soft-grey text-sm">
                    <li>• Suradnja s vrhunskim fotografima</li>
                    <li>• Raznovrsne pozadine i set-upove</li>
                    <li>• Profesionalno osvjetljenje</li>
                    <li>• "Instagrammable" kutke</li>
                    <li>• Rekvizite prema potrebi</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Educational Workshops */}
            <div className="p-8 bg-gradient-to-br from-cream/50 to-white rounded-lg border border-gold/20">
              <div className="flex items-start gap-4 mb-4">
                <BookOpen className="w-10 h-10 text-gold flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-serif font-bold text-dark-grey mb-3">
                    Edukativne Radionice
                  </h3>
                  <p className="text-soft-grey leading-relaxed mb-4">
                    Idealan prostor za vođenje edukativnih radionica, treninga, seminara i grupnih sesija.
                  </p>
                  <ul className="space-y-2 text-soft-grey text-sm">
                    <li>• Fleksibilno sjedenje za do 30 osoba</li>
                    <li>• Prezentacijska oprema</li>
                    <li>• Inspirativno okruženje</li>
                    <li>• Prostor za praktične vježbe</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 bg-gold/10 rounded-lg border border-gold/20">
            <p className="text-dark-grey font-semibold mb-2">
              Prilagodimo se Vašim Potrebama:
            </p>
            <p className="text-soft-grey">
              Svaki event je jedinstven. Kontaktirajte nas kako bismo zajedno kreirali savršenu konfiguraciju prostora za vaš događaj ili projekt.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button asChild size="lg" className="bg-gold hover:bg-gold/90 text-warm-white">
            <Link to="/kontakt">Zatražite Ponudu</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Najam;
