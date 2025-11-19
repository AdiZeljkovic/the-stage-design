import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, Sparkles, DollarSign, Music } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Djevojacke = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-warm-white pt-16">
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-gradient-to-br from-gold/20 to-cream">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center animate-fadeIn">
            <Heart className="w-16 h-16 mx-auto mb-6 text-gold" />
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-dark-grey mb-4">
              Djevojačke Večeri
            </h1>
            <p className="text-xl text-soft-grey max-w-2xl mx-auto px-4">
              Proslavite posljednje dane slobode sa stilom
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
              <p className="text-soft-grey text-sm">Kompletna proslava</p>
            </div>
            <div className="flex flex-col items-center">
              <Heart className="w-8 h-8 text-gold mb-2" />
              <p className="text-2xl font-serif text-dark-grey font-bold">Bride to Be</p>
              <p className="text-soft-grey text-sm">Potpuna personalizacija</p>
            </div>
            <div className="flex flex-col items-center">
              <Music className="w-8 h-8 text-gold mb-2" />
              <p className="text-2xl font-serif text-dark-grey font-bold">Sve Uključeno</p>
              <p className="text-soft-grey text-sm">Dekoracija, igre, muzika</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-soft p-8 md:p-12 mb-12">

          <div className="mb-8">
            <p className="text-soft-grey mb-6 leading-relaxed text-lg">
              Kreiramo savršenu "Bride to be" atmosferu uz potpunu personalizaciju. Prepustite se zabavi i stvarajte uspomene koje će trajati zauvijek.
            </p>

            <h4 className="font-semibold text-dark-grey mb-4 text-xl">Paket uključuje:</h4>
            <ul className="space-y-3 text-soft-grey">
              <li className="flex items-start">
                <Sparkles className="w-5 h-5 text-gold mr-2 flex-shrink-0 mt-0.5" />
                <span>Prilagođenu scenografiju uz LED znak "Bride to be"</span>
              </li>
              <li className="flex items-start">
                <Sparkles className="w-5 h-5 text-gold mr-2 flex-shrink-0 mt-0.5" />
                <span>Tematski mobilijar (posuđe, odjeća, lente, veo, naočale, lepeze...)</span>
              </li>
              <li className="flex items-start">
                <Sparkles className="w-5 h-5 text-gold mr-2 flex-shrink-0 mt-0.5" />
                <span>Mnogobrojne rekvizite za nezaboravno fotografiranje</span>
              </li>
              <li className="flex items-start">
                <Sparkles className="w-5 h-5 text-gold mr-2 flex-shrink-0 mt-0.5" />
                <span>Tehničku opremu za snimanje</span>
              </li>
              <li className="flex items-start">
                <Sparkles className="w-5 h-5 text-gold mr-2 flex-shrink-0 mt-0.5" />
                <span>Interaktivne i zabavne igre za cijelo društvo</span>
              </li>
              <li className="flex items-start">
                <Sparkles className="w-5 h-5 text-gold mr-2 flex-shrink-0 mt-0.5" />
                <span>Snack bar</span>
              </li>
              <li className="flex items-start">
                <Sparkles className="w-5 h-5 text-gold mr-2 flex-shrink-0 mt-0.5" />
                <span>Ozvukom i presonaliziranu muzičku listu</span>
              </li>
              <li className="flex items-start">
                <Sparkles className="w-5 h-5 text-gold mr-2 flex-shrink-0 mt-0.5" />
                <span>Moguć dogovor o dodatnoj personalizaciji i organizaciji</span>
              </li>
            </ul>
          </div>

          <div className="mt-12 p-6 bg-cream/50 rounded-lg">
            <p className="text-soft-grey text-center italic">
              Svaka djevojačka večer je jedinstvena priča. Kontaktirajte nas kako bismo zajedno kreirali savršenu atmosferu za vas i vaše prijateljice.
            </p>
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

export default Djevojacke;
