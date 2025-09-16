import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const TestimonialsSection = () => {
  const { t } = useLanguage();
  
  const testimonials = [
    {
      quote: "De samenwerking met B12 heeft ons echt in staat gesteld om onze interne capaciteit op het gebied van machine learning en datawetenschappen uit te breiden. Ze hebben ons geholpen om deze capaciteit binnen ons team te laten groeien toen we onze traditionele business intelligence probeerden om te zetten naar een meer data-analytics-gedreven team. B12 deed het samen met ons, niet alleen voor ons, en gaf ons inzicht in hoe we dit zelf konden doen.",
      author: "Rob Roemers",
      position: "Hoofd gegevensanalyse",
      company: "MIVB"
    },
    {
      quote: "We hebben met B12 samengewerkt aan verschillende projecten die allemaal succesvol waren, grotendeels dankzij hun inzicht, technische expertise en innovatiecultuur. Ze hebben het opmerkelijke vermogen om te beginnen met een onvolledig idee dat we op tafel leggen, het uit te werken tot zijn volledige potentieel en een product af te leveren dat veel beter is dan het oorspronkelijke concept.",
      author: "Mats Selen",
      position: "Professor UIUC",
      company: "Voorheen Novapta LLC"
    },
    {
      quote: "Dankzij de begeleiding en het advies van B12 kon ons project verder gaan dan de doelstellingen die we aan het begin hadden vooropgesteld. Het B12-team is gedurende het hele project aandachtig gebleven voor onze behoeften en hun vaardigheden hebben ons in staat gesteld een tool te verkrijgen die in de voorste gelederen van de technologie staat en een aanzienlijke toegevoegde waarde heeft voor onze gebruikers.",
      author: "David Baudrez",
      position: "CEO",
      company: "Gespodo"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t('testimonials.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('testimonials.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="card-gradient shadow-card hover:shadow-glow transition-smooth relative">
              <CardContent className="pt-8 pb-6">
                <div className="absolute top-4 left-4">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <Quote className="h-4 w-4 text-primary" />
                  </div>
                </div>
                
                <blockquote className="text-muted-foreground leading-relaxed mb-6 mt-4">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="border-t border-border pt-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mr-3">
                      <span className="text-sm font-bold gradient-text">
                        {testimonial.author.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-sm">
                        {testimonial.author}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {testimonial.position}
                      </p>
                      <p className="text-xs text-primary font-medium">
                        {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;