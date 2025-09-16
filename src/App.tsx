import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import Projects from "./pages/Projects";
import Services from "./pages/Services";
import Sectors from "./pages/Sectors";
import Team from "./pages/Team";
import News from "./pages/News";
import Career from "./pages/Career";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Navigation />
          <main className="pt-16">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/projecten" element={<Projects />} />
              <Route path="/diensten" element={<Services />} />
              <Route path="/sectoren" element={<Sectors />} />
              <Route path="/team" element={<Team />} />
              <Route path="/nieuws" element={<News />} />
              <Route path="/carriere" element={<Career />} />
              <Route path="/contact" element={<Contact />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
