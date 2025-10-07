import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import SectorsPreview from "@/components/SectorsPreview";
import PartnersCarousel from "@/components/PartnersCarousel";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <TestimonialsSection />
      <SectorsPreview />
      <PartnersCarousel />
      <CTASection />
      <Footer />
      <ChatBot />
    </div>
  );
};

export default Index;
