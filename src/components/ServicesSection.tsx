import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, Code, Database, Lightbulb, Palette, Settings } from "lucide-react";
import { Link } from "react-router-dom";

const ServicesSection = () => {
  const services = [
    {
      icon: Brain,
      title: "AI-gebaseerde oplossingen",
      description: "Op maat gemaakte, geavanceerde artificiële intelligentiesystemen die voldoen aan unieke behoeften",
      link: "/diensten/ai-powered-solutions"
    },
    {
      icon: Code,
      title: "Software ontwikkeling",
      description: "Softwareoplossingen op maat, aangepast aan specifieke behoeften",
      link: "/diensten/software-development"
    },
    {
      icon: Database,
      title: "Gegevensbeheer",
      description: "Gegevensarchitectuur optimaliseren voor verbeterde analyses",
      link: "/diensten/data-engineering"
    },
    {
      icon: Lightbulb,
      title: "Innovatiestrategie",
      description: "Strategische verkenning en planning voor geavanceerde technologie voor kunstmatige intelligentie",
      link: "/diensten/innovation-strategy"
    },
    {
      icon: Palette,
      title: "UX & UI-ontwerp",
      description: "Intuïtieve, gebruiksvriendelijke interfaces maken voor naadloze systeemnavigatie",
      link: "/diensten/ux-ui-design"
    },
    {
      icon: Settings,
      title: "MLOps en DevOps",
      description: "Robuuste, efficiënte frameworks bouwen voor schaalbare, goed presterende oplossingen",
      link: "/diensten/mlops-devops"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Onze diensten
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Van AI-gedreven oplossingen tot volledige softwareontwikkeling - wij helpen bedrijven transformeren met cutting-edge technologie.
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
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground mb-4 leading-relaxed">
                    {service.description}
                  </CardDescription>
                  <Button 
                    asChild 
                    variant="ghost" 
                    className="p-0 h-auto text-primary hover:text-primary/80"
                  >
                    <Link to={service.link}>
                      Meer informatie →
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
              Bekijk alle diensten
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;