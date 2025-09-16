import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Brain, Code, Database, Lightbulb, Palette, Settings, Zap, Shield, BarChart, Cog } from "lucide-react";

import Footer from "@/components/Footer";

const Services = () => {
  const mainServices = [
    {
      icon: Brain,
      title: "AI-gebaseerde oplossingen",
      description: "Op maat gemaakte, geavanceerde artificiële intelligentiesystemen die voldoen aan unieke behoeften van uw organisatie.",
      features: ["Machine Learning", "Deep Learning", "Computer Vision", "Natural Language Processing"],
      color: "text-blue-500"
    },
    {
      icon: Code,
      title: "Software ontwikkeling",
      description: "Softwareoplossingen op maat, aangepast aan specifieke behoeften en geïntegreerd met moderne technologieën.",
      features: ["Custom Development", "API Integration", "Cloud Solutions", "Mobile Apps"],
      color: "text-green-500"
    },
    {
      icon: Database,
      title: "Gegevensbeheer",
      description: "Gegevensarchitectuur optimaliseren voor verbeterde analyses en betere bedrijfsinzichten.",
      features: ["Data Architecture", "ETL Pipelines", "Data Warehousing", "Analytics"],
      color: "text-purple-500"
    },
    {
      icon: Lightbulb,
      title: "Innovatiestrategie",
      description: "Strategische verkenning en planning voor geavanceerde technologie voor kunstmatige intelligentie.",
      features: ["Innovation Roadmap", "Technology Assessment", "Digital Strategy", "R&D Consulting"],
      color: "text-yellow-500"
    },
    {
      icon: Palette,
      title: "UX & UI-ontwerp",
      description: "Intuïtieve, gebruiksvriendelijke interfaces maken voor naadloze systeemnavigatie en optimale gebruikerservaring.",
      features: ["User Research", "Interface Design", "Prototyping", "Usability Testing"],
      color: "text-pink-500"
    },
    {
      icon: Settings,
      title: "MLOps en DevOps",
      description: "Robuuste, efficiënte frameworks bouwen voor schaalbare, goed presterende oplossingen.",
      features: ["CI/CD Pipelines", "Model Deployment", "Infrastructure", "Monitoring"],
      color: "text-red-500"
    }
  ];

  const additionalServices = [
    { icon: Zap, title: "Performance Optimization", description: "Systeemprestaties verbeteren" },
    { icon: Shield, title: "Security Consulting", description: "Veiligheid en compliance waarborgen" },
    { icon: BarChart, title: "Business Intelligence", description: "Data-gedreven besluitvorming" },
    { icon: Cog, title: "Process Automation", description: "Bedrijfsprocessen automatiseren" }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Onze <span className="gradient-text">Diensten</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Van AI-gedreven oplossingen tot volledige softwareontwikkeling - wij helpen bedrijven transformeren met cutting-edge technologie.
          </p>
        </div>

        {/* Main Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {mainServices.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="card-gradient shadow-card hover:shadow-glow transition-smooth group">
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-smooth`}>
                    <IconComponent className={`h-6 w-6 ${service.color} group-hover:scale-110 transition-transform`} />
                  </div>
                  <CardTitle className="text-xl font-semibold">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </CardDescription>
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button variant="ghost" className="text-primary hover:text-primary/80 p-0">
                    Meer informatie →
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Services */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">
            Aanvullende <span className="gradient-text">Specialisaties</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="card-gradient shadow-card hover:shadow-glow transition-smooth group text-center">
                  <CardContent className="pt-6">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-smooth">
                      <IconComponent className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">{service.title}</h3>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-card-gradient rounded-2xl p-12 shadow-card">
          <h2 className="text-3xl font-bold mb-6">
            Klaar om uw project te starten?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Laten we bespreken hoe onze expertise uw bedrijf naar het volgende niveau kan tillen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow">
              Neem contact op
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
              Bekijk onze projecten
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Services;