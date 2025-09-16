import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import ServicesSection from "@/components/ServicesSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import SectorsPreview from "@/components/SectorsPreview";
import PartnersCarousel from "@/components/PartnersCarousel";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <CaseStudiesSection />
      <TestimonialsSection />
      <SectorsPreview />
      <PartnersCarousel />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
