import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Briefcase, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const SectorsPreview = () => {
  const { t } = useLanguage();
  
  const sectors = [
    {
      icon: Shield,
      titleKey: "sectors.insurance.title",
      descriptionKey: "sectors.insurance.desc",
      color: "text-blue-500"
    },
    {
      icon: Briefcase,
      titleKey: "sectors.professional.title",
      descriptionKey: "sectors.professional.desc",
      color: "text-green-500"
    },
    {
      icon: Heart,
      titleKey: "sectors.healthcare.title",
      descriptionKey: "sectors.healthcare.desc",
      color: "text-red-500"
    }
  ];

  return (
    <section className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t('sectors.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('sectors.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sectors.map((sector, index) => {
            const IconComponent = sector.icon;
            return (
              <Card key={index} className="card-gradient shadow-card hover:shadow-glow transition-smooth group text-center">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-smooth">
                    <IconComponent className={`h-8 w-8 ${sector.color} group-hover:scale-110 transition-transform`} />
                  </div>
                  <CardTitle className="text-2xl font-bold">
                    {t(sector.titleKey)}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {t(sector.descriptionKey)}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow">
            <Link to="/sectoren">
              {t('sectors.cta')}
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SectorsPreview;