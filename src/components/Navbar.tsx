import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showServicesMenu, setShowServicesMenu] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 w-full bg-warm-white shadow-soft z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="text-2xl font-serif font-bold text-dark-grey hover:text-gold transition-colors">
            The Stage
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={cn(
                "text-dark-grey hover:text-gold transition-colors font-medium",
                isActive("/") && "text-gold"
              )}
            >
              Početna
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setShowServicesMenu(true)}
              onMouseLeave={() => setShowServicesMenu(false)}
            >
              <button
                className={cn(
                  "flex items-center gap-1 text-dark-grey hover:text-gold transition-colors font-medium",
                  (isActive("/usluge") || location.pathname.startsWith("/usluge")) && "text-gold"
                )}
              >
                Usluge <ChevronDown className="w-4 h-4" />
              </button>

              {/* Mega Menu */}
              {showServicesMenu && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[600px] bg-warm-white shadow-elegant rounded-lg p-8 animate-fade-in">
                  <div className="grid grid-cols-3 gap-8">
                    <div>
                      <h3 className="font-serif text-lg font-semibold text-dark-grey mb-3">Proslave</h3>
                      <ul className="space-y-2">
                        <li>
                          <Link to="/usluge#rodjendani" className="text-soft-grey hover:text-gold transition-colors text-sm">
                            Rođendani
                          </Link>
                        </li>
                        <li>
                          <Link to="/usluge#djevojacke" className="text-soft-grey hover:text-gold transition-colors text-sm">
                            Djevojačke Večeri
                          </Link>
                        </li>
                        <li>
                          <Link to="/usluge#baby-shower" className="text-soft-grey hover:text-gold transition-colors text-sm">
                            Baby Shower
                          </Link>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-serif text-lg font-semibold text-dark-grey mb-3">Iskustva & Edukacija</h3>
                      <ul className="space-y-2">
                        <li>
                          <Link to="/usluge#italian-night" className="text-soft-grey hover:text-gold transition-colors text-sm">
                            Italian Night
                          </Link>
                        </li>
                        <li>
                          <Link to="/usluge#sip-paint" className="text-soft-grey hover:text-gold transition-colors text-sm">
                            Sip and Paint
                          </Link>
                        </li>
                        <li>
                          <Link to="/usluge#sminkanje" className="text-soft-grey hover:text-gold transition-colors text-sm">
                            Profesionalno Šminkanje
                          </Link>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-serif text-lg font-semibold text-dark-grey mb-3">Biznis & Najam</h3>
                      <ul className="space-y-2">
                        <li>
                          <Link to="/usluge#najam" className="text-soft-grey hover:text-gold transition-colors text-sm">
                            Najam Prostora
                          </Link>
                        </li>
                        <li>
                          <Link to="/usluge#podcast" className="text-soft-grey hover:text-gold transition-colors text-sm">
                            Podcast Studio
                          </Link>
                        </li>
                        <li>
                          <Link to="/usluge#foto" className="text-soft-grey hover:text-gold transition-colors text-sm">
                            Foto Studio
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/galerija"
              className={cn(
                "text-dark-grey hover:text-gold transition-colors font-medium",
                isActive("/galerija") && "text-gold"
              )}
            >
              Galerija
            </Link>

            <Link
              to="/o-nama"
              className={cn(
                "text-dark-grey hover:text-gold transition-colors font-medium",
                isActive("/o-nama") && "text-gold"
              )}
            >
              O nama
            </Link>

            <Link
              to="/kontakt"
              className={cn(
                "text-dark-grey hover:text-gold transition-colors font-medium",
                isActive("/kontakt") && "text-gold"
              )}
            >
              Kontakt
            </Link>

            <Button asChild className="bg-gold hover:bg-gold/90 text-warm-white">
              <Link to="/kontakt">Rezervišite Termin</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-dark-grey hover:text-gold transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-warm-white border-t border-border animate-fade-in">
          <div className="px-4 py-4 space-y-3">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="block text-dark-grey hover:text-gold transition-colors font-medium"
            >
              Početna
            </Link>
            <Link
              to="/usluge"
              onClick={() => setIsOpen(false)}
              className="block text-dark-grey hover:text-gold transition-colors font-medium"
            >
              Usluge
            </Link>
            <Link
              to="/galerija"
              onClick={() => setIsOpen(false)}
              className="block text-dark-grey hover:text-gold transition-colors font-medium"
            >
              Galerija
            </Link>
            <Link
              to="/o-nama"
              onClick={() => setIsOpen(false)}
              className="block text-dark-grey hover:text-gold transition-colors font-medium"
            >
              O nama
            </Link>
            <Link
              to="/kontakt"
              onClick={() => setIsOpen(false)}
              className="block text-dark-grey hover:text-gold transition-colors font-medium"
            >
              Kontakt
            </Link>
            <Button asChild className="w-full bg-gold hover:bg-gold/90 text-warm-white">
              <Link to="/kontakt" onClick={() => setIsOpen(false)}>
                Rezervišite Termin
              </Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
