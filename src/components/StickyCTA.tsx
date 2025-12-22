import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

const StickyCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 400px
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div 
      className={cn(
        "fixed bottom-0 left-0 right-0 z-50 p-4 bg-warm-white/95 backdrop-blur-sm border-t border-gold/20 shadow-elegant transition-transform duration-300 md:hidden",
        isVisible ? "translate-y-0" : "translate-y-full"
      )}
    >
      <div className="flex gap-3 max-w-lg mx-auto">
        <Button 
          asChild 
          size="lg" 
          className="flex-1 bg-gold hover:bg-gold/90 text-warm-white"
        >
          <Link to="/kontakt" className="flex items-center justify-center gap-2">
            <Calendar className="w-4 h-4" />
            Rezervišite
          </Link>
        </Button>
        <Button 
          asChild 
          size="lg" 
          variant="outline"
          className="border-gold text-gold hover:bg-gold hover:text-warm-white"
        >
          <a href="tel:+38761234567" className="flex items-center justify-center gap-2">
            <Phone className="w-4 h-4" />
            Pozovite
          </a>
        </Button>
      </div>
    </div>
  );
};

export default StickyCTA;
