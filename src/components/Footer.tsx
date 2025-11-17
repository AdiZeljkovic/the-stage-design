import { Link } from "react-router-dom";
import { Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-cream border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="flex flex-col items-center gap-6 sm:gap-8">
          {/* Logo */}
          <div className="text-center">
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-dark-grey">THE STAGE</h3>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm">
            <Link to="/" className="text-soft-grey hover:text-gold transition-colors">Početna</Link>
            <Link to="/usluge" className="text-soft-grey hover:text-gold transition-colors">Usluge</Link>
            <Link to="/galerija" className="text-soft-grey hover:text-gold transition-colors">Galerija</Link>
            <Link to="/kontakt" className="text-soft-grey hover:text-gold transition-colors">Kontakt</Link>
          </div>

          {/* Social Media */}
          <div className="flex gap-3">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-gold flex items-center justify-center text-warm-white hover:bg-gold/90 transition-colors"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-gold flex items-center justify-center text-warm-white hover:bg-gold/90 transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 pt-6 border-t border-border text-center">
          <p className="text-soft-grey text-xs">© 2025 The Stage. Sva prava zadržana.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
