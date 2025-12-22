import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import onamaHero from "@/assets/about/hero.jpg";
import onamaStudio from "@/assets/about/studio.jpg";

const ONama = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="O Nama | The Stage Sarajevo - Event Prostor"
        description="Upoznajte The Stage Sarajevo - ekskluzivni event prostor od 75m² u centru Sarajeva. Tim profesionalaca za organizaciju nezaboravnih događaja."
        canonical="/o-nama"
      />
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[60vh]">
        <img 
          src={onamaHero}
          alt="O nama - The Stage Sarajevo event prostor"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
          decoding="async"
        />
        <div className="absolute inset-0 bg-dark-grey/30" />
        <div className="relative z-10 h-full flex items-center justify-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-warm-white text-center">
            O Nama - The Stage Sarajevo
          </h1>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-12 sm:py-16 lg:py-20 bg-warm-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-dark-grey mb-4 sm:mb-6">
                Više od prostora. Mi smo doživljaj.
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

            <div className="h-64 sm:h-80 lg:h-96 rounded-lg overflow-hidden shadow-elegant order-1 lg:order-2">
              <img 
                src={onamaStudio} 
                alt="The Stage Sarajevo - unutrašnjost event prostora"
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </section>


      {/* Values Section */}
      <section className="py-20 bg-warm-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif font-bold text-center text-dark-grey mb-16">
            Naše vrijednosti
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
