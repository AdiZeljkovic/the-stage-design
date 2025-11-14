import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sparkles, Star } from "lucide-react";

const Sminkanje = () => {
  return (
    <div className="min-h-screen bg-warm-white pt-16">
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-gradient-to-br from-gold/20 to-cream">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center animate-fadeIn">
            <Sparkles className="w-16 h-16 mx-auto mb-6 text-gold" />
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-dark-grey mb-4">
              Profesionalno Šminkanje
            </h1>
            <p className="text-xl text-soft-grey max-w-2xl mx-auto px-4">
              Vrhunska umjetnost šminkanja za sve prilike
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-lg shadow-soft p-8 md:p-12 mb-12">
          <div className="text-center mb-12">
            <p className="text-3xl font-serif text-gold mb-4">Cijena po dogovoru</p>
            <p className="text-soft-grey">Pojedinačno ili za grupe</p>
          </div>

          <div className="mb-8">
            <p className="text-soft-grey mb-8 leading-relaxed text-lg">
              Prepustite se beskrajno talentiranim rukama vrhunskih šminkerica s karijerama na TV-u, filmu i muzičkoj industriji. U The Stage-u nudimo profesionalno šminkanje za sve prilike - od vjenčanja i matura do foto sesija i specijalnih događaja.
            </p>

            <div className="p-8 bg-gradient-to-br from-gold/10 to-cream/50 rounded-lg mb-8 border border-gold/20">
              <div className="flex items-start gap-4 mb-4">
                <Star className="w-8 h-8 text-gold flex-shrink-0" />
                <div>
                  <h4 className="font-serif text-2xl text-dark-grey mb-2">Premium Proizvodi</h4>
                  <p className="text-soft-grey">
                    Koristimo isključivo high-end proizvode svjetski poznatih brendova:
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6">
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
              <div className="p-6 bg-cream/50 rounded-lg">
                <Sparkles className="w-6 h-6 text-gold mb-3" />
                <h5 className="font-semibold text-dark-grey mb-2">Posebne Prilike</h5>
                <p className="text-soft-grey text-sm">
                  Vjenčanja, mature, diplomiranja, svečane večeri i svi drugi važni trenutci u vašem životu.
                </p>
              </div>
              <div className="p-6 bg-cream/50 rounded-lg">
                <Sparkles className="w-6 h-6 text-gold mb-3" />
                <h5 className="font-semibold text-dark-grey mb-2">Foto & Video Sesije</h5>
                <p className="text-soft-grey text-sm">
                  Profesionalna šminka za fotografije, video produkcije, i društvene mreže.
                </p>
              </div>
              <div className="p-6 bg-cream/50 rounded-lg">
                <Sparkles className="w-6 h-6 text-gold mb-3" />
                <h5 className="font-semibold text-dark-grey mb-2">Grupno Šminkanje</h5>
                <p className="text-soft-grey text-sm">
                  Idealno za djevojačke večeri, rođendane i druge grupne proslave.
                </p>
              </div>
              <div className="p-6 bg-cream/50 rounded-lg">
                <Sparkles className="w-6 h-6 text-gold mb-3" />
                <h5 className="font-semibold text-dark-grey mb-2">Edukacija</h5>
                <p className="text-soft-grey text-sm">
                  Naučite tajne profesionalnog šminkanja direktno od iskusnih majstora.
                </p>
              </div>
            </div>

            <div className="p-6 bg-gold/10 rounded-lg border border-gold/20">
              <p className="text-dark-grey font-semibold mb-2">
                Personalizirani Pristup:
              </p>
              <p className="text-soft-grey">
                Svaka usluga se prilagođava vašim potrebama, tipu kože, željenom stilu i prilike. Kontaktirajte nas za konsultaciju i ponudu.
              </p>
            </div>
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

export default Sminkanje;
