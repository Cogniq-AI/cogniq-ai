import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import aiNetworkImage from "@/assets/ai-network-hero.jpg";

const CTASection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl shadow-card">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src={aiNetworkImage}
              alt="AI network visualization"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 hero-gradient opacity-90" />
          </div>

          {/* Content */}
          <div className="relative z-10 px-8 py-16 md:px-16 md:py-24 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Wil je een project starten?
            </h2>
            <h3 className="text-2xl md:text-3xl font-semibold mb-8 gradient-text">
              Let's talk
            </h3>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
              Klaar om uw bedrijf te transformeren met AI? Laten we bespreken hoe we uw uitdagingen kunnen omzetten in innovatieve oplossingen.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button 
                asChild
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow group text-lg px-8 py-4"
              >
                <Link to="/contact">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Neem contact met ons op
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              
              <Button 
                asChild
                size="lg" 
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm text-lg px-8 py-4"
              >
                <Link to="/projecten">
                  Bekijk onze projecten
                </Link>
              </Button>
            </div>

            {/* Contact info */}
            <div className="mt-12 pt-8 border-t border-white/20">
              <p className="text-white/80 mb-2">
                Of bel ons direct:
              </p>
              <p className="text-white font-semibold text-lg">
                +32 2 123 45 67
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;