import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CaseStudiesSection = () => {
  const caseStudies = [
    {
      title: "Controlesysteem voor de bovenleidingen van Brusselse trams",
      description: "De MIVB heeft een AI-gestuurd bewakingssysteem geïmplementeerd dat problemen met elektrische leidingen in realtime detecteert, waardoor de betrouwbaarheid van het tramnetwerk wordt verbeterd.",
      client: "MIVB",
      sector: "Transport",
      impact: "30% minder uitvaltijd",
      tags: ["AI Monitoring", "Real-time Detection", "Infrastructure"]
    },
    {
      title: "Onderzoeksinstrument voor de evaluatie van behandelplannen",
      description: "Ion Beam Applications werkte samen met B12 en de RUG aan de ontwikkeling van een open-source platform voor protontherapie onderzoek.",
      client: "IBA & RUG",
      sector: "Healthcare",
      impact: "50% snellere evaluatie",
      tags: ["Healthcare AI", "Research Platform", "Open Source"]
    },
    {
      title: "Fotovoltaïsche installaties bewaken met machine learning",
      description: "Perpetum verbeterde de monitoring van PV-centrales met een datagestuurde oplossing, waardoor uitvaltijd werd verminderd en prestaties werden geoptimaliseerd.",
      client: "Perpetum",
      sector: "Energie",
      impact: "25% meer efficiëntie",
      tags: ["Machine Learning", "Energy Monitoring", "Predictive Analytics"]
    }
  ];

  return (
    <section className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Succesverhalen
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ontdek hoe we complexe uitdagingen transformeren tot innovatieve oplossingen die echte impact hebben.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <Card key={index} className="card-gradient shadow-card hover:shadow-glow transition-smooth group">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                    {study.sector}
                  </Badge>
                  <span className="text-sm text-muted-foreground">{study.client}</span>
                </div>
                <CardTitle className="text-xl font-bold mb-3 group-hover:text-primary transition-smooth">
                  {study.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground mb-6 leading-relaxed">
                  {study.description}
                </CardDescription>
                
                <div className="mb-6">
                  <div className="bg-primary/5 rounded-lg p-4 border-l-4 border-primary">
                    <p className="text-sm font-semibold text-foreground">
                      Resultaat: <span className="text-primary">{study.impact}</span>
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {study.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <Button variant="ghost" className="text-primary hover:text-primary/80 p-0 group">
                  Bekijk case study
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow">
            <Link to="/projecten">
              Bekijk alle projecten
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;