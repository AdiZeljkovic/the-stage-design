import { Link } from "react-router-dom";
import { Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-cream border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo & Brand */}
          <div>
            <h3 className="text-2xl font-serif font-bold text-dark-grey mb-3">The Stage</h3>
            <p className="text-soft-grey text-sm">
              Ekskluzivni prostor za vaše najposebnije trenutke
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-dark-grey mb-3">Brzi Linkovi</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-soft-grey hover:text-gold transition-colors text-sm">
                  Početna
                </Link>
              </li>
              <li>
                <Link to="/usluge" className="text-soft-grey hover:text-gold transition-colors text-sm">
                  Usluge
                </Link>
              </li>
              <li>
                <Link to="/galerija" className="text-soft-grey hover:text-gold transition-colors text-sm">
                  Galerija
                </Link>
              </li>
              <li>
                <Link to="/o-nama" className="text-soft-grey hover:text-gold transition-colors text-sm">
                  O nama
                </Link>
              </li>
              <li>
                <Link to="/kontakt" className="text-soft-grey hover:text-gold transition-colors text-sm">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-semibold text-dark-grey mb-3">Pratite Nas</h4>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gold flex items-center justify-center text-warm-white hover:bg-gold/90 transition-colors hover-scale"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gold flex items-center justify-center text-warm-white hover:bg-gold/90 transition-colors hover-scale"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border text-center">
          <p className="text-soft-grey text-sm">
            © 2025 The Stage. Sva prava zadržana.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
