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

          {/* Right: CTA and Mobile Toggle */}
          <div className="flex items-center gap-4 flex-1 justify-end">
            <Button asChild size="lg" className="hidden md:block bg-gold hover:bg-gold/90 text-warm-white">
              <Link to="/kontakt">Rezervišite Termin</Link>
            </Button>
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-dark-grey hover:text-gold transition-colors z-[60]"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation - Fullscreen Overlay */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 top-16 bg-warm-white z-[55] animate-fade-in">
          <div className="h-full flex flex-col">
            {/* Navigation Links */}
            <nav className="flex-1 px-6 py-8 space-y-2 overflow-y-auto">
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className={cn(
                  "block py-4 text-xl text-dark-grey hover:text-gold transition-colors font-medium border-b border-gold/10",
                  isActive("/") && "text-gold"
                )}
              >
                Početna
              </Link>
              
              {/* Mobile Services Submenu */}
              <div className="border-b border-gold/10">
                <div className="py-4 text-xl text-dark-grey font-medium">Usluge</div>
                <div className="pl-4 pb-2 space-y-1">
                  <Link
                    to="/usluge/rodjendani"
                    onClick={() => setIsOpen(false)}
                    className="block py-2 text-base text-soft-grey hover:text-gold transition-colors"
                  >
                    Rođendani
                  </Link>
                  <Link
                    to="/usluge/djevojacke"
                    onClick={() => setIsOpen(false)}
                    className="block py-2 text-base text-soft-grey hover:text-gold transition-colors"
                  >
                    Djevojačke Večeri
                  </Link>
                  <Link
                    to="/usluge/baby-shower"
                    onClick={() => setIsOpen(false)}
                    className="block py-2 text-base text-soft-grey hover:text-gold transition-colors"
                  >
                    Baby Shower
                  </Link>
                  <Link
                    to="/usluge/italian-night"
                    onClick={() => setIsOpen(false)}
                    className="block py-2 text-base text-soft-grey hover:text-gold transition-colors"
                  >
                    Italian Night
                  </Link>
                  <Link
                    to="/usluge/sip-paint"
                    onClick={() => setIsOpen(false)}
                    className="block py-2 text-base text-soft-grey hover:text-gold transition-colors"
                  >
                    Sip and Paint
                  </Link>
                  <Link
                    to="/usluge/sminkanje"
                    onClick={() => setIsOpen(false)}
                    className="block py-2 text-base text-soft-grey hover:text-gold transition-colors"
                  >
                    Profesionalno Šminkanje
                  </Link>
                  <Link
                    to="/usluge/najam"
                    onClick={() => setIsOpen(false)}
                    className="block py-2 text-base text-soft-grey hover:text-gold transition-colors"
                  >
                    Najam Prostora
                  </Link>
                </div>
              </div>

              <Link
                to="/galerija"
                onClick={() => setIsOpen(false)}
                className={cn(
                  "block py-4 text-xl text-dark-grey hover:text-gold transition-colors font-medium border-b border-gold/10",
                  isActive("/galerija") && "text-gold"
                )}
              >
                Galerija
              </Link>
              <Link
                to="/o-nama"
                onClick={() => setIsOpen(false)}
                className={cn(
                  "block py-4 text-xl text-dark-grey hover:text-gold transition-colors font-medium border-b border-gold/10",
                  isActive("/o-nama") && "text-gold"
                )}
              >
                O Nama
              </Link>
              <Link
                to="/kontakt"
                onClick={() => setIsOpen(false)}
                className={cn(
                  "block py-4 text-xl text-dark-grey hover:text-gold transition-colors font-medium border-b border-gold/10",
                  isActive("/kontakt") && "text-gold"
                )}
              >
                Kontakt
              </Link>
            </nav>

            {/* CTA Button at Bottom */}
            <div className="p-6 border-t border-gold/20 bg-cream/30">
              <Button 
                asChild 
                size="lg" 
                className="w-full bg-gold hover:bg-gold/90 text-warm-white text-lg py-6"
                onClick={() => setIsOpen(false)}
              >
                <Link to="/kontakt">Rezervišite Termin</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
