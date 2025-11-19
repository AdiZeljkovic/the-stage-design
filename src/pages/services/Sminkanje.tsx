import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sparkles, Star, Users, Award } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Sminkanje = () => {
  return (
    <>
      <Navbar />
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
        {/* Key Info Box */}
        <div className="bg-white rounded-lg shadow-elegant p-6 sm:p-8 mb-12 border border-gold/20">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center">
              <Sparkles className="w-8 h-8 text-gold mb-2" />
              <p className="text-2xl font-serif text-gold font-bold">Po Dogovoru</p>
              <p className="text-soft-grey text-sm">Prilagođene cijene</p>
            </div>
            <div className="flex flex-col items-center">
              <Users className="w-8 h-8 text-gold mb-2" />
              <p className="text-2xl font-serif text-dark-grey font-bold">Solo ili Grupa</p>
              <p className="text-soft-grey text-sm">Sve prilike</p>
            </div>
            <div className="flex flex-col items-center">
              <Award className="w-8 h-8 text-gold mb-2" />
              <p className="text-2xl font-serif text-dark-grey font-bold">Premium</p>
              <p className="text-soft-grey text-sm">High-end proizvodi</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-soft p-8 md:p-12 mb-12">

          <div className="mb-8">
            <p className="text-soft-grey mb-8 leading-relaxed text-lg">
              Prepustite se beskrajno talentiranim rukama vrhunskih šminkerica s karijerama na TV-u, filmu i muzičkoj industriji. U The Stage-u nudimo profesionalno šminkanje za sve prilike - od vjenčanja i matura do foto sesija i specijalnih događaja.
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
              <div className="p-6 bg-cream/50 rounded-lg">
                <Sparkles className="w-6 h-6 text-gold mb-3" />
                <h5 className="font-semibold text-dark-grey mb-2">Posebne prilike</h5>
                <p className="text-soft-grey text-sm">
                  Vjenčanja, mature, diplomiranja, svečane večeri i svi drugi važni trenutci u vašem životu.
                </p>
              </div>
              <div className="p-6 bg-cream/50 rounded-lg">
                <Sparkles className="w-6 h-6 text-gold mb-3" />
                <h5 className="font-semibold text-dark-grey mb-2">Foto & video sesije</h5>
                <p className="text-soft-grey text-sm">
                  Profesionalna šminka za fotografije, video produkcije, i društvene mreže.
                </p>
              </div>
              <div className="p-6 bg-cream/50 rounded-lg">
                <Sparkles className="w-6 h-6 text-gold mb-3" />
                <h5 className="font-semibold text-dark-grey mb-2">Grupno šminkanje</h5>
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
                Personalizirani pristup:
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
            <Link to="/kontakt">Zatražite ponudu</Link>
          </Button>
        </div>
      </section>
      </div>
      <Footer />
    </>
  );
};

export default Sminkanje;
