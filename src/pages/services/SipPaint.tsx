import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Palette, Wine } from "lucide-react";

const SipPaint = () => {
  return (
    <div className="min-h-screen bg-warm-white pt-16">
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-gradient-to-br from-gold/20 to-cream">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center animate-fadeIn">
            <Palette className="w-16 h-16 mx-auto mb-6 text-gold" />
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-dark-grey mb-4">
              Sip and Paint
            </h1>
            <p className="text-xl text-soft-grey max-w-2xl mx-auto px-4">
              Opustite se uz kist, platno i koktel
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-lg shadow-soft p-8 md:p-12 mb-12">
          <div className="text-center mb-12">
            <p className="text-3xl font-serif text-gold mb-4">50 KM po osobi</p>
            <p className="text-soft-grey">Samo za punoljetne</p>
          </div>

          <div className="mb-8">
            <p className="text-soft-grey mb-6 leading-relaxed text-lg">
              Izvedi prijateljicu, mamu ili sestru na nezaboravno kreativno iskustvo! Svakog drugog četvrtka u mjesecu (20:00 - 22:00h) pijuckamo koktele, slušamo muziku i opuštamo se uz kist i platno.
            </p>

            <div className="p-6 bg-gold/10 rounded-lg border border-gold/20 mb-8">
              <p className="text-dark-grey font-semibold mb-2 flex items-center gap-2">
                <Palette className="w-5 h-5 text-gold" />
                Fun Fact:
              </p>
              <p className="text-soft-grey">
                Ne morate znati slikati! Naše iskustvo je dizajnirano za sve nivoe - od početnika do iskusnih umjetnika.
              </p>
            </div>

            <h4 className="font-semibold text-dark-grey mb-4 text-xl">Paket uključuje:</h4>
            <ul className="space-y-3 text-soft-grey mb-8">
              <li className="flex items-start">
                <Palette className="w-5 h-5 text-gold mr-2 flex-shrink-0 mt-0.5" />
                <span>Slikarsko platno i sve potrebne boje</span>
              </li>
              <li className="flex items-start">
                <Wine className="w-5 h-5 text-gold mr-2 flex-shrink-0 mt-0.5" />
                <span>Neograničene koktele (ili virgin koktele)</span>
              </li>
              <li className="flex items-start">
                <Palette className="w-5 h-5 text-gold mr-2 flex-shrink-0 mt-0.5" />
                <span>Slane i slatke grickalice</span>
              </li>
              <li className="flex items-start">
                <Palette className="w-5 h-5 text-gold mr-2 flex-shrink-0 mt-0.5" />
                <span>Vođenje kroz proces slikanja korak po korak</span>
              </li>
              <li className="flex items-start">
                <Wine className="w-5 h-5 text-gold mr-2 flex-shrink-0 mt-0.5" />
                <span>Opuštenu atmosferu uz dobru muziku</span>
              </li>
              <li className="flex items-start">
                <Palette className="w-5 h-5 text-gold mr-2 flex-shrink-0 mt-0.5" />
                <span>Vaša umjetnička djela koja nosite kući</span>
              </li>
            </ul>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-cream/50 rounded-lg">
                <h5 className="font-semibold text-dark-grey mb-3">Raspored</h5>
                <p className="text-soft-grey text-sm">
                  Svakog drugog četvrtka u mjesecu od 20:00 do 22:00h. Pratite nas na društvenim mrežama za tačne datume i teme.
                </p>
              </div>
              <div className="p-6 bg-cream/50 rounded-lg">
                <h5 className="font-semibold text-dark-grey mb-3">Rezervacije</h5>
                <p className="text-soft-grey text-sm">
                  Broj mjesta je ograničen. Obavezno rezervišite mjesto unaprijed kako biste osigurali svoj spot.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button asChild size="lg" className="bg-gold hover:bg-gold/90 text-warm-white">
            <Link to="/kontakt">Rezervišite Mjesto</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default SipPaint;
