import { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const PartnersCarousel = () => {
  const partners = [
    "AI4Belgium",
    "Agoria", 
    "Digital Wallonia",
    "Reacfin",
    "BioWin",
    "Tweed",
    "B19",
    "Cercle du Lac",
    "INFOPOLE",
    "TechStars",
    "StartupBootcamp",
    "Innovation Lab"
  ];

  const [emblaRef] = useEmblaCarousel(
    { 
      loop: true,
      align: "start",
      skipSnaps: false,
      dragFree: true
    },
    [Autoplay({ delay: 2000, stopOnInteraction: false })]
  );

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">
            Verenigingen en bedrijven waar we met trots mee samenwerken
          </h2>
        </div>

        {/* Carousel */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {partners.map((partner, index) => (
              <div 
                key={index}
                className="flex-none w-64 px-4"
              >
                <div className="flex items-center justify-center p-6 bg-card rounded-lg border border-border hover:border-primary/30 transition-smooth cursor-pointer group h-24">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg flex items-center justify-center mx-auto mb-2 group-hover:from-primary/20 group-hover:to-accent/20 transition-smooth">
                      <span className="text-sm font-bold gradient-text">
                        {partner.split(' ').map(word => word[0]).join('')}
                      </span>
                    </div>
                    <span className="text-sm text-muted-foreground font-medium">
                      {partner}
                    </span>
                  </div>
                </div>
              </div>
            ))}
            {/* Duplicate for seamless loop */}
            {partners.map((partner, index) => (
              <div 
                key={`duplicate-${index}`}
                className="flex-none w-64 px-4"
              >
                <div className="flex items-center justify-center p-6 bg-card rounded-lg border border-border hover:border-primary/30 transition-smooth cursor-pointer group h-24">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg flex items-center justify-center mx-auto mb-2 group-hover:from-primary/20 group-hover:to-accent/20 transition-smooth">
                      <span className="text-sm font-bold gradient-text">
                        {partner.split(' ').map(word => word[0]).join('')}
                      </span>
                    </div>
                    <span className="text-sm text-muted-foreground font-medium">
                      {partner}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            En vele andere innovatieve partners in AI en technologie
          </p>
        </div>
      </div>
    </section>
  );
};

export default PartnersCarousel;