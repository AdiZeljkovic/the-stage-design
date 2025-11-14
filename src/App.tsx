import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Usluge from "./pages/Usluge";
import Galerija from "./pages/Galerija";
import ONama from "./pages/ONama";
import Kontakt from "./pages/Kontakt";
import NotFound from "./pages/NotFound";
import Rodjendani from "./pages/services/Rodjendani";
import Djevojacke from "./pages/services/Djevojacke";
import BabyShower from "./pages/services/BabyShower";
import ItalianNight from "./pages/services/ItalianNight";
import SipPaint from "./pages/services/SipPaint";
import Sminkanje from "./pages/services/Sminkanje";
import Najam from "./pages/services/Najam";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/usluge" element={<Usluge />} />
          <Route path="/usluge/rodjendani" element={<Rodjendani />} />
          <Route path="/usluge/djevojacke" element={<Djevojacke />} />
          <Route path="/usluge/baby-shower" element={<BabyShower />} />
          <Route path="/usluge/italian-night" element={<ItalianNight />} />
          <Route path="/usluge/sip-paint" element={<SipPaint />} />
          <Route path="/usluge/sminkanje" element={<Sminkanje />} />
          <Route path="/usluge/najam" element={<Najam />} />
          <Route path="/galerija" element={<Galerija />} />
          <Route path="/o-nama" element={<ONama />} />
          <Route path="/kontakt" element={<Kontakt />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
