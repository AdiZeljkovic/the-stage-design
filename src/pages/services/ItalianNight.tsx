import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Wine, Utensils } from "lucide-react";

const ItalianNight = () => {
  return (
    <div className="min-h-screen bg-warm-white pt-16">
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-gradient-to-br from-gold/20 to-cream">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center animate-fadeIn">
            <Wine className="w-16 h-16 mx-auto mb-6 text-gold" />
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-dark-grey mb-4">
              Italian Night
            </h1>
            <p className="text-xl text-soft-grey max-w-2xl mx-auto px-4">
              Pasta & Spritz - Iskustvo talijanskog glamura
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
              Savršen 'date night' ili izlazak s prijateljima! Doživite autentično italijansko iskustvo dok pravite pastu od nule – od brašna, jaja i soli.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="p-6 bg-cream/50 rounded-lg">
                <Utensils className="w-8 h-8 text-gold mb-4" />
                <h4 className="font-semibold text-dark-grey mb-3">Pravljenje Paste</h4>
                <p className="text-soft-grey text-sm">
                  Svako dobija svoju stanicu za rad pod vodstvom edukatora. Naučite tajne savršene paste uz smijeh, slikanje i talijanske hitove.
                </p>
              </div>
              <div className="p-6 bg-cream/50 rounded-lg">
                <Wine className="w-8 h-8 text-gold mb-4" />
                <h4 className="font-semibold text-dark-grey mb-3">Talijanska Pića</h4>
                <p className="text-soft-grey text-sm">
                  Učimo praviti (i degustirati) klasična talijanska pića: Aperol Spritz, Limoncello i Fruit Prosecco.
                </p>
              </div>
            </div>

            <h4 className="font-semibold text-dark-grey mb-4 text-xl">Iskustvo uključuje:</h4>
            <ul className="space-y-2 text-soft-grey mb-8">
              <li>• Sve potrebne sastojke i alate za pravljenje paste</li>
              <li>• Vođenje kroz proces od strane iskusnog edukatora</li>
              <li>• Individualnu radnu stanicu za svakog učesnika</li>
              <li>• Degustaciju klasičnih italijanskih pića</li>
              <li>• Atmosferu uz najbolje talijanske hitove</li>
              <li>• Degustaciju vlastite hrane na kraju iskustva</li>
              <li>• Fotografiranje tokom cjelokupnog procesa</li>
            </ul>

            <div className="p-6 bg-gold/10 rounded-lg border border-gold/20">
              <p className="text-dark-grey font-semibold mb-2">
                Važna Napomena:
              </p>
              <p className="text-soft-grey">
                Potrebno je rezervirati mjesto unaprijed. Italian Night se organizuje na zahtjev za grupe, kontaktirajte nas za dostupne termine.
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

export default ItalianNight;
