import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import aiNetworkImage from "@/assets/ai-network-hero.jpg";
import { useLanguage } from "@/contexts/LanguageContext";
import AnimatedGrid from "./AnimatedGrid";

const CTASection = () => {
  const { t } = useLanguage();
  
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-card hover:shadow-glow transition-all duration-500">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-accent/5">
            <AnimatedGrid />
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-10" 
              style={{ backgroundImage: `url(${aiNetworkImage})` }}
            />
          </div>
          
          {/* Content */}
          <div className="relative z-10 px-6 py-12 sm:px-8 sm:py-16 md:px-16 md:py-24 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-white animate-slide-up px-4">
              {t('cta.title')}
            </h2>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 sm:mb-8 gradient-text animate-glow px-4" style={{ animationDelay: '0.1s' }}>
              {t('cta.subtitle')}
            </h3>
            <p className="text-base sm:text-lg md:text-xl text-white/90 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed animate-slide-up px-4" style={{ animationDelay: '0.2s' }}>
              {t('cta.description')}
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <Button 
                asChild
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow group text-lg px-8 py-4 hover:scale-105 transition-all"
              >
                <Link to="/contact">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  {t('cta.contact')}
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              
              <Button 
                asChild
                size="lg" 
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 hover:text-white backdrop-blur-sm text-lg px-8 py-4 hover:scale-105 transition-all"
              >
                <Link to="/projecten">
                  {t('cta.projects')}
                </Link>
              </Button>
            </div>

            {/* Contact info */}
            <div className="mt-12 pt-8 border-t border-white/20 animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <p className="text-white/80 mb-2">
                {t('cta.call')}
              </p>
              <p className="text-white font-semibold text-lg">
                {t('cta.phone')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;