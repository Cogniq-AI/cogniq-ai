import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, Code, Database, Lightbulb, Palette, Settings } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const ServicesSection = () => {
  const { t } = useLanguage();
  
  const services = [
    {
      icon: Brain,
      titleKey: "services.ai.title",
      descriptionKey: "services.ai.desc",
      link: "/diensten/ai-powered-solutions"
    },
    {
      icon: Code,
      titleKey: "services.software.title",
      descriptionKey: "services.software.desc",
      link: "/diensten/software-development"
    },
    {
      icon: Database,
      titleKey: "services.data.title",
      descriptionKey: "services.data.desc",
      link: "/diensten/data-engineering"
    },
    {
      icon: Lightbulb,
      titleKey: "services.innovation.title",
      descriptionKey: "services.innovation.desc",
      link: "/diensten/innovation-strategy"
    },
    {
      icon: Palette,
      titleKey: "services.ux.title",
      descriptionKey: "services.ux.desc",
      link: "/diensten/ux-ui-design"
    },
    {
      icon: Settings,
      titleKey: "services.ops.title",
      descriptionKey: "services.ops.desc",
      link: "/diensten/mlops-devops"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t('services.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index}
                className="card-gradient shadow-card transition-smooth hover:shadow-glow group cursor-pointer border-border/50"
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-smooth">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-semibold">
                    {t(service.titleKey)}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground mb-4 leading-relaxed">
                    {t(service.descriptionKey)}
                  </CardDescription>
                  <Button 
                    asChild 
                    variant="ghost" 
                    className="p-0 h-auto text-primary hover:text-primary/80"
                  >
                    <Link to={service.link}>
                      {t('services.more')}
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow">
            <Link to="/diensten">
              {t('services.cta')}
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;