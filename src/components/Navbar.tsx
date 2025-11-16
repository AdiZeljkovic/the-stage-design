import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showServicesMenu, setShowServicesMenu] = useState(false);
  const [closeTimeout, setCloseTimeout] = useState<NodeJS.Timeout | null>(null);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 w-full bg-warm-white shadow-soft z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left: Logo */}
          <div className="flex-1">
            <Link to="/" className="text-2xl font-serif font-bold text-dark-grey hover:text-gold transition-colors">
              THE STAGE
            </Link>
          </div>

          {/* Center: Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8 flex-1 justify-center">
            <Link
              to="/"
              className={cn(
                "text-dark-grey hover:text-gold transition-colors font-medium whitespace-nowrap",
                isActive("/") && "text-gold"
              )}
            >
              Početna
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => {
                if (closeTimeout) clearTimeout(closeTimeout);
                setShowServicesMenu(true);
              }}
              onMouseLeave={() => {
                const timeout = setTimeout(() => setShowServicesMenu(false), 150);
                setCloseTimeout(timeout);
              }}
            >
              <button
                onClick={() => setShowServicesMenu(!showServicesMenu)}
                className={cn(
                  "flex items-center gap-1 text-dark-grey hover:text-gold transition-colors font-medium whitespace-nowrap",
                  (isActive("/usluge") || location.pathname.startsWith("/usluge")) && "text-gold"
                )}
              >
                Usluge <ChevronDown className="w-4 h-4" />
              </button>

              {/* Dropdown Menu */}
              {showServicesMenu && (
                <div 
                  className="absolute top-full left-1/2 -translate-x-1/2 pt-1 z-[100]"
                  onMouseEnter={() => {
                    if (closeTimeout) clearTimeout(closeTimeout);
                    setShowServicesMenu(true);
                  }}
                  onMouseLeave={() => {
                    const timeout = setTimeout(() => setShowServicesMenu(false), 150);
                    setCloseTimeout(timeout);
                  }}
                >
                  <div className="w-[280px] bg-white shadow-elegant rounded-lg py-2 animate-fade-in">
                    <Link 
                      to="/usluge/rodjendani" 
                      className="block px-4 py-2 text-soft-grey hover:text-gold hover:bg-cream/30 transition-colors text-sm"
                      onClick={() => {
                        if (closeTimeout) clearTimeout(closeTimeout);
                        setShowServicesMenu(false);
                      }}
                    >
                      Rođendani
                    </Link>
                    <Link 
                      to="/usluge/djevojacke" 
                      className="block px-4 py-2 text-soft-grey hover:text-gold hover:bg-cream/30 transition-colors text-sm"
                      onClick={() => {
                        if (closeTimeout) clearTimeout(closeTimeout);
                        setShowServicesMenu(false);
                      }}
                    >
                      Djevojačke Večeri
                    </Link>
                    <Link 
                      to="/usluge/baby-shower" 
                      className="block px-4 py-2 text-soft-grey hover:text-gold hover:bg-cream/30 transition-colors text-sm"
                      onClick={() => {
                        if (closeTimeout) clearTimeout(closeTimeout);
                        setShowServicesMenu(false);
                      }}
                    >
                      Baby Shower
                    </Link>
                    <Link 
                      to="/usluge/italian-night" 
                      className="block px-4 py-2 text-soft-grey hover:text-gold hover:bg-cream/30 transition-colors text-sm"
                      onClick={() => {
                        if (closeTimeout) clearTimeout(closeTimeout);
                        setShowServicesMenu(false);
                      }}
                    >
                      Italian Night
                    </Link>
                    <Link 
                      to="/usluge/sip-paint" 
                      className="block px-4 py-2 text-soft-grey hover:text-gold hover:bg-cream/30 transition-colors text-sm"
                      onClick={() => {
                        if (closeTimeout) clearTimeout(closeTimeout);
                        setShowServicesMenu(false);
                      }}
                    >
                      Sip and Paint
                    </Link>
                    <Link 
                      to="/usluge/sminkanje" 
                      className="block px-4 py-2 text-soft-grey hover:text-gold hover:bg-cream/30 transition-colors text-sm"
                      onClick={() => {
                        if (closeTimeout) clearTimeout(closeTimeout);
                        setShowServicesMenu(false);
                      }}
                    >
                      Profesionalno Šminkanje
                    </Link>
                    <Link 
                      to="/usluge/najam" 
                      className="block px-4 py-2 text-soft-grey hover:text-gold hover:bg-cream/30 transition-colors text-sm"
                      onClick={() => {
                        if (closeTimeout) clearTimeout(closeTimeout);
                        setShowServicesMenu(false);
                      }}
                    >
                      Najam Prostora
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/galerija"
              className={cn(
                "text-dark-grey hover:text-gold transition-colors font-medium whitespace-nowrap",
                isActive("/galerija") && "text-gold"
              )}
            >
              Galerija
            </Link>

            <Link
              to="/o-nama"
              className={cn(
                "text-dark-grey hover:text-gold transition-colors font-medium whitespace-nowrap",
                isActive("/o-nama") && "text-gold"
              )}
            >
              O nama
            </Link>

            <Link
              to="/kontakt"
              className={cn(
                "text-dark-grey hover:text-gold transition-colors font-medium whitespace-nowrap",
                isActive("/kontakt") && "text-gold"
              )}
            >
              Kontakt
            </Link>
          </div>

          {/* Right: CTA Button */}
          <div className="flex-1 flex justify-end">
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
