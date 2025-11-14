import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Baby, Camera } from "lucide-react";

const BabyShower = () => {
  return (
    <div className="min-h-screen bg-warm-white pt-16">
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-gradient-to-br from-gold/20 to-cream">
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
        <div className="bg-white rounded-lg shadow-soft p-8 md:p-12 mb-12">
          <div className="text-center mb-12">
            <p className="text-3xl font-serif text-gold mb-4">300 KM</p>
            <p className="text-soft-grey">Stvorite uspomene za cijeli život</p>
          </div>

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

          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <div className="p-6 bg-cream/50 rounded-lg">
              <h5 className="font-semibold text-dark-grey mb-3">Personalizacija</h5>
              <p className="text-soft-grey text-sm">
                Uz konsultaciju s našim timom, možete prilagoditi dekoraciju i temu prema vašim željama i potrebama.
              </p>
            </div>
            <div className="p-6 bg-cream/50 rounded-lg">
              <h5 className="font-semibold text-dark-grey mb-3">Dodatne Opcije</h5>
              <p className="text-soft-grey text-sm">
                Možete dodati tortu, profesionalnog fotografa, ili bilo koju drugu uslugu koja će učiniti ovaj dan još posebnijim.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button asChild size="lg" className="bg-gold hover:bg-gold/90 text-warm-white">
            <Link to="/kontakt">Rezervišite Termin</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default BabyShower;
