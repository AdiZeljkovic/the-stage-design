import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Instagram } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const ONama = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative h-[60vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-dark-grey/30" />
        <div className="relative z-10 h-full flex items-center justify-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-warm-white text-center">
            O Nama
          </h1>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-12 sm:py-16 lg:py-20 bg-warm-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-dark-grey mb-4 sm:mb-6">
                Više od Prostora. Mi smo Doživljaj.
              </h2>
              <div className="space-y-4 text-soft-grey leading-relaxed">
                <p>
                  The Stage je rođen iz želje da se stvori jedinstvena platforma u Sarajevu – mjesto gdje se profesionalizam 
                  susreće sa zabavom, a luksuz postaje dostupan svima koji žele da svoje posebne trenutke učine nezaboravnim.
                </p>
                <p>
                  Naš prostor od 75 kvadrata pažljivo je dizajniran da bude višenamjenski – od intimnih rođendanskih proslava 
                  do profesionalnih podcast snimanja, od edukativnih radionica do glamuroznih lansiranja proizvoda. 
                  Svaki kutak The Stage-a je kreiran s pažnjom prema detaljima, nudeći savršenu pozadinu za fotografije i uspomene.
                </p>
                <p>
                  Naš tim čine kreativci, organizatori i umjetnici koji dijele istu strast: stvaranje nezaboravnih iskustava. 
                  Vjerujemo da svaki događaj zaslužuje da bude poseban, i tu smo da vašu viziju pretvorimo u stvarnost.
                </p>
              </div>
            </div>

            <div className="h-64 sm:h-80 lg:h-96 bg-muted rounded-lg overflow-hidden shadow-elegant order-1 lg:order-2">
              <div className="w-full h-full bg-gradient-to-br from-gold/20 to-gold/5 flex items-center justify-center">
                <span className="text-soft-grey">Detalj prostora</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-center text-dark-grey mb-4">
            Upoznajte Tim
          </h2>
          <p className="text-center text-soft-grey mb-16">
            Ljudi koji stvaraju magiju
          </p>

          <div className="max-w-4xl mx-auto">
            <div className="bg-warm-white rounded-lg shadow-elegant overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 p-6 sm:p-8">
                <div className="aspect-square bg-muted rounded-lg overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-gold/30 to-gold/10 flex items-center justify-center">
                    <span className="text-soft-grey">Nermina Ibrulj</span>
                  </div>
                </div>

                <div className="flex flex-col justify-center">
                  <h3 className="text-3xl font-serif font-bold text-dark-grey mb-2">
                    Nermina Nerma Ibrulj
                  </h3>
                  <p className="text-gold font-medium mb-6">
                    Glavna Makeup Artistica & Kreativna Direktorica
                  </p>
                  <div className="space-y-4 text-soft-grey leading-relaxed mb-6">
                    <p>
                      Sa godinama iskustva na televiziji, filmu i u muzičkoj industriji, Nerma donosi dašak svjetskog glamura u 'The Stage'. 
                      Njena strast prema ljepoti i umjetnosti šminkanja pretvara svaki makeup appointment u jedinstveno iskustvo.
                    </p>
                    <p>
                      Kao edukatorica, Nerma dijeli svoje znanje i inspirira nove generacije makeup artista, koristeći isključivo najkvalitetnije 
                      high-end proizvode i tehnike koje je savladala radeći s najvećim imenima regiona.
                    </p>
                  </div>

                  <div className="flex gap-4">
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gold hover:text-gold/80 transition-colors"
                    >
                      <Instagram className="w-5 h-5" />
                      <span className="text-sm font-medium">@nermaibrulj</span>
                    </a>
                    <a
                      href="https://tiktok.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gold hover:text-gold/80 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                      </svg>
                      <span className="text-sm font-medium">@nermaibrulj</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-warm-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif font-bold text-center text-dark-grey mb-16">
            Naše Vrijednosti
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">✨</span>
              </div>
              <h3 className="text-xl font-serif font-semibold text-dark-grey mb-3">Kvalitet</h3>
              <p className="text-soft-grey">
                Koristimo samo najkvalitetnije proizvode i materijale, jer vaši trenuci zaslužuju savršenstvo.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">💫</span>
              </div>
              <h3 className="text-xl font-serif font-semibold text-dark-grey mb-3">Kreativnost</h3>
              <p className="text-soft-grey">
                Svaki događaj je jedinstven. Slušamo vaše ideje i pretvaramo ih u stvarnost s kreativnim pristupom.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🤝</span>
              </div>
              <h3 className="text-xl font-serif font-semibold text-dark-grey mb-3">Posvećenost</h3>
              <p className="text-soft-grey">
                Vaše zadovoljstvo je naš prioritet. Od prvog kontakta do posljednjeg detalja, tu smo za vas.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ONama;
