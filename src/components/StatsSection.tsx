import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const StatsSection = () => {
  const { t } = useLanguage();
  
  const stats = [
    {
      number: "95%",
      labelKey: "stats.satisfaction",
      descriptionKey: "stats.satisfaction.desc"
    },
    {
      number: "≤ 6",
      labelKey: "stats.weeks", 
      descriptionKey: "stats.weeks.desc"
    },
    {
      number: "30 - 40%",
      labelKey: "stats.productivity",
      descriptionKey: "stats.productivity.desc"
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-card">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Titel / Intro */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 px-4">
            {t('stats.title')}
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto px-4 text-sm sm:text-base">
            {t('stats.subtitle')}
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group animate-scale-in" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-full w-32 h-32 mx-auto mb-6 flex items-center justify-center shadow-glow transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 relative overflow-hidden">
                {/* Animated ring */}
                <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-ping" />
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 animate-glow" />
                <span className="text-4xl font-black gradient-text select-none relative z-10">
                  {stat.number}
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground capitalize group-hover:text-primary transition-colors">
                {t(stat.labelKey)}
              </h3>
              <p className="text-muted-foreground">
                {t(stat.descriptionKey)}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow hover:scale-105 transition-all">
            <Link to="/cases">
              {t('stats.cta')}
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
