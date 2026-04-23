import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AdminAuthProvider } from "@/contexts/AdminAuthContext";

// Critical: Load Index immediately for LCP
import Index from "./pages/Index";

// Lazy load non-critical routes for code splitting
const Usluge = lazy(() => import("./pages/Usluge"));
const Galerija = lazy(() => import("./pages/Galerija"));
const ONama = lazy(() => import("./pages/ONama"));
const Kontakt = lazy(() => import("./pages/Kontakt"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Rodjendani = lazy(() => import("./pages/services/Rodjendani"));
const Djevojacke = lazy(() => import("./pages/services/Djevojacke"));
const BabyShower = lazy(() => import("./pages/services/BabyShower"));
const ItalianNight = lazy(() => import("./pages/services/ItalianNight"));
const SipPaint = lazy(() => import("./pages/services/SipPaint"));
const Sminkanje = lazy(() => import("./pages/services/Sminkanje"));
const Najam = lazy(() => import("./pages/services/Najam"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));

// Admin panel
const AdminLogin = lazy(() => import("./pages/admin/AdminLogin"));
const AdminDashboard = lazy(() => import("./pages/admin/AdminDashboard"));
const AdminBlog = lazy(() => import("./pages/admin/AdminBlog"));
const AdminBlogEditor = lazy(() => import("./pages/admin/AdminBlogEditor"));
const AdminGallery = lazy(() => import("./pages/admin/AdminGallery"));
const AdminContacts = lazy(() => import("./pages/admin/AdminContacts"));
const AdminSettings = lazy(() => import("./pages/admin/AdminSettings"));
const AdminServices = lazy(() => import("./pages/admin/AdminServices"));
const AdminServiceEditor = lazy(() => import("./pages/admin/AdminServiceEditor"));

const queryClient = new QueryClient();

const PageLoader = () => (
  <div className="min-h-screen bg-warm-white flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-gold border-t-transparent rounded-full animate-spin" />
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AdminAuthProvider>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              {/* Public routes */}
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
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />

              {/* Admin routes */}
              <Route path="/admin/login" element={<AdminLogin />} />
              <Route path="/admin" element={<AdminDashboard />} />
              <Route path="/admin/blog" element={<AdminBlog />} />
              <Route path="/admin/blog/:id" element={<AdminBlogEditor />} />
              <Route path="/admin/galerija" element={<AdminGallery />} />
              <Route path="/admin/usluge" element={<AdminServices />} />
              <Route path="/admin/usluge/:slug" element={<AdminServiceEditor />} />
              <Route path="/admin/kontakti" element={<AdminContacts />} />
              <Route path="/admin/postavke" element={<AdminSettings />} />

              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </AdminAuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
