import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, Zap, Pill } from "lucide-react";
import Footer from "@/components/Footer";
import healthcareImage from "@/assets/healthcare-ai.jpg";
import energyImage from "@/assets/energy-tech.jpg";
import pharmaImage from "@/assets/pharma-research.jpg";

const Sectors = () => {
  const sectors = [
    {
      icon: Heart,
      title: "Gezondheidszorg",
      description: "Transformatie van de gezondheidszorg door geavanceerde AI-technologieën die patiëntenzorg verbeteren en medische processen optimaliseren.",
      image: healthcareImage,
      solutions: [
        "Medische beeldanalyse met AI",
        "Predictieve diagnose systemen",
        "Patiëntgegevens beheer",
        "Behandelplan optimalisatie"
      ],
      caseStudy: "Onderzoeksinstrument voor de evaluatie van behandelplannen voor Ion Beam Applications"
    },
    {
      icon: Zap,
      title: "Energie",
      description: "Innovatieve oplossingen voor duurzame energie die efficiëntie verhogen en de overgang naar hernieuwbare energiebronnen versnellen.",
      image: energyImage,
      solutions: [
        "Smart grid technologie",
        "Energieproductie voorspelling",
        "Fotovoltaïsche monitoring",
        "Netwerk optimalisatie"
      ],
      caseStudy: "Fotovoltaïsche installaties bewaken met machine learning voor Perpetum"
    },
    {
      icon: Pill,
      title: "Farmaceutische industrie",
      description: "Versnelling van geneesmiddelenonderzoek en -ontwikkeling door AI-gedreven analyse en procesoptimalisatie.",
      image: pharmaImage,
      solutions: [
        "Drug discovery acceleration",
        "Moleculaire analyse",
        "Klinische trial optimalisatie",
        "Regulatoire compliance"
      ],
      caseStudy: "AI-gedreven medicijnonderzoek voor farmaceutische partners"
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Onze <span className="gradient-text">Sectoren</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Wij brengen diepgaande sectorkennis samen met cutting-edge AI-technologie om specifieke uitdagingen in verschillende industrieën op te lossen.
          </p>
        </div>

        {/* Sectors */}
        <div className="space-y-16">
          {sectors.map((sector, index) => {
            const IconComponent = sector.icon;
            const isEven = index % 2 === 0;
            
            return (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* Image */}
                <div className={`relative overflow-hidden rounded-2xl shadow-card ${!isEven ? 'lg:col-start-2' : ''}`}>
                  <img 
                    src={sector.image} 
                    alt={sector.title}
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                </div>

                {/* Content */}
                <div className={!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <Card className="card-gradient shadow-card border-none h-full">
                    <CardHeader>
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mr-4">
                          <IconComponent className="h-6 w-6 text-primary" />
                        </div>
                        <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                          Sector Focus
                        </Badge>
                      </div>
                      <CardTitle className="text-3xl font-bold mb-4">
                        {sector.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-muted-foreground mb-6 text-lg leading-relaxed">
                        {sector.description}
                      </CardDescription>

                      <div className="mb-6">
                        <h4 className="font-semibold mb-4 text-foreground">Onze oplossingen:</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {sector.solutions.map((solution, solutionIndex) => (
                            <div key={solutionIndex} className="flex items-center text-sm">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3 flex-shrink-0" />
                              <span className="text-muted-foreground">{solution}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="p-4 bg-primary/5 rounded-lg mb-6 border-l-4 border-primary">
                        <p className="text-sm text-muted-foreground">
                          <strong className="text-foreground">Case Study:</strong> {sector.caseStudy}
                        </p>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-3">
                        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                          Meer over {sector.title.toLowerCase()}
                        </Button>
                        <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                          Bekijk projecten
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Sectors */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold mb-8">
            Andere sectoren waar we actief zijn
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {["Transport", "Fintech", "Manufacturing", "Retail", "Education", "Government", "Telecom", "Logistics"].map((sector, index) => (
              <div key={index} className="p-4 bg-card rounded-lg border border-border hover:border-primary/50 transition-smooth cursor-pointer">
                <span className="text-sm font-medium">{sector}</span>
              </div>
            ))}
          </div>
          
          <div className="bg-card-gradient rounded-2xl p-12 shadow-card">
            <h3 className="text-2xl font-bold mb-4">
              Uw sector niet vermeld?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Wij werken met bedrijven in diverse sectoren. Neem contact met ons op om te bespreken hoe we uw specifieke uitdagingen kunnen oplossen.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow">
              Bespreek uw project
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Sectors;