import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import AnimatedGrid from "./AnimatedGrid";
import ParticleField from "./ParticleField";

const HeroSection = () => {
  const { t } = useLanguage();
  
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Animated Elements */}
      <AnimatedGrid />
      <ParticleField />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="mb-6 animate-slide-up">
            <span className="block text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-black tracking-tighter hero-text mb-4">
              {t('hero.title.ai')}
            </span>
            <span className="block text-5xl sm:text-6xl md:text-8xl lg:text-10xl font-black tracking-tight gradient-text animate-glow leading-none my-6">
              {t('hero.title.transformation')}
            </span>
            <span className="block text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-light tracking-widest hero-text opacity-90 mt-4">
              {t('hero.title.now')}
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl mb-8 max-w-2xl mx-auto leading-relaxed text-neutral-50 animate-slide-up px-4" style={{ animationDelay: '0.2s' }}>
            {t('hero.subtitle')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow group hover:scale-105 transition-all">
              {t('hero.cta1')}
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            
            <Button size="lg" variant="outline" className="border-foreground/20 text-foreground hover:bg-foreground/10 hover:scale-105 transition-all">
              {t('hero.cta2')}
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator - moved outside content container */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-foreground/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>;
};
export default HeroSection;