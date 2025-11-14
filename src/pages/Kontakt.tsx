import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Kontakt = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Poruka poslana!",
      description: "Kontaktirat ćemo vas u najkraćem mogućem roku.",
    });
    setFormData({ name: "", email: "", phone: "", service: "", message: "" });
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 min-h-[80vh] bg-warm-white rounded-lg shadow-elegant overflow-hidden">
            {/* Left Side - Form */}
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <h1 className="text-4xl font-serif font-bold text-dark-grey mb-4">
                Stupite na Scenu
              </h1>
              <p className="text-soft-grey mb-8">
                Kontaktirajte nas za rezervacije, upite ili da zajedno isplaniramo vaš savršeni događaj.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    type="text"
                    placeholder="Ime i Prezime"
                    value={formData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    required
                    className="border-b-2 border-t-0 border-x-0 rounded-none focus-visible:ring-0 focus-visible:border-gold transition-colors px-0"
                  />
                </div>

                <div>
                  <Input
                    type="email"
                    placeholder="Email Adresa"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    required
                    className="border-b-2 border-t-0 border-x-0 rounded-none focus-visible:ring-0 focus-visible:border-gold transition-colors px-0"
                  />
                </div>

                <div>
                  <Input
                    type="tel"
                    placeholder="Broj Telefona"
                    value={formData.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    required
                    className="border-b-2 border-t-0 border-x-0 rounded-none focus-visible:ring-0 focus-visible:border-gold transition-colors px-0"
                  />
                </div>

                <div>
                  <Select value={formData.service} onValueChange={(value) => handleChange("service", value)}>
                    <SelectTrigger className="border-b-2 border-t-0 border-x-0 rounded-none focus:ring-0 focus:border-gold transition-colors px-0">
                      <SelectValue placeholder="Odaberite Uslugu" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="rodjendani">Rođendani</SelectItem>
                      <SelectItem value="djevojacke">Djevojačke Večeri</SelectItem>
                      <SelectItem value="baby-shower">Baby Shower</SelectItem>
                      <SelectItem value="italian-night">Italian Night</SelectItem>
                      <SelectItem value="sip-paint">Sip and Paint</SelectItem>
                      <SelectItem value="sminkanje">Profesionalno Šminkanje</SelectItem>
                      <SelectItem value="najam">Najam Prostora</SelectItem>
                      <SelectItem value="ostalo">Ostalo</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Textarea
                    placeholder="Vaša Poruka"
                    value={formData.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    required
                    rows={4}
                    className="border-b-2 border-t-0 border-x-0 rounded-none focus-visible:ring-0 focus-visible:border-gold transition-colors px-0 resize-none"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full bg-gold hover:bg-gold/90 text-warm-white">
                  Pošalji Upit
                </Button>
              </form>

              {/* Contact Info */}
              <div className="mt-12 space-y-4">
                <div className="flex items-center gap-3 text-soft-grey">
                  <div className="w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-gold" />
                  </div>
                  <span>Adresa u centru grada, Sarajevo</span>
                </div>

                <div className="flex items-center gap-3 text-soft-grey">
                  <div className="w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-gold" />
                  </div>
                  <span>+387 XX XXX XXX</span>
                </div>

                <div className="flex items-center gap-3 text-soft-grey">
                  <div className="w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-gold" />
                  </div>
                  <span>info@thestage.ba</span>
                </div>
              </div>
            </div>

            {/* Right Side - Map */}
            <div className="relative min-h-[400px] lg:min-h-full bg-muted">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2876.4753388997635!2d18.413076315555877!3d43.856429879114334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4758c8e8c36e0741%3A0x71f6f4f8c1f8e8c8!2sSarajevo!5e0!3m2!1sen!2sba!4v1234567890123!5m2!1sen!2sba"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(0.3) contrast(1.1)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Kontakt;
