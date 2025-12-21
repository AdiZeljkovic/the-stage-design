import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { ChevronRight } from "lucide-react";

const services = [
  { name: "Rođendani", price: "350 KM", link: "/usluge/rodjendani" },
  { name: "Djevojačke večeri", price: "350 KM", link: "/usluge/djevojacke-veceri" },
  { name: "Baby Shower", price: "300 KM", link: "/usluge/baby-shower" },
  { name: "Italian Night", price: "50 KM / osoba", link: "/usluge/italian-night" },
  { name: "Sip and Paint", price: "50 KM / osoba", link: "/usluge/sip-paint" },
  { name: "Profesionalno šminkanje", price: "Po dogovoru", link: "/usluge/sminkanje" },
  { name: "Najam prostora", price: "Po dogovoru", link: "/usluge/najam-prostora" },
];

const Usluge = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Usluge i Cjenovnik | The Stage Sarajevo"
        description="Pogledajte naše usluge u Sarajevu: rođendani od 350 KM, djevojačke večeri, baby shower, Sip & Paint od 50 KM, Italian Night i profesionalno šminkanje."
        canonical="/usluge"
      />
      <Navbar />

      <div className="pt-24 pb-20 bg-cream min-h-screen">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-serif font-bold text-center text-dark-grey mb-4">
            Usluge i Cjenovnik Sarajevo
          </h1>
          <p className="text-center text-soft-grey mb-12 text-lg">
            Cjenovnik i detalji svih dostupnih paketa
          </p>

          <div className="space-y-4">
            {services.map((service) => (
              <Link
                key={service.name}
                to={service.link}
                className="flex items-center justify-between bg-warm-white rounded-lg shadow-soft px-6 py-5 hover:shadow-elegant transition-shadow group"
              >
                <span className="text-xl font-serif font-semibold text-dark-grey group-hover:text-gold transition-colors">
                  {service.name} ({service.price})
                </span>
                <ChevronRight className="w-6 h-6 text-soft-grey group-hover:text-gold transition-colors" />
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Usluge;
