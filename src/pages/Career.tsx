import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Euro, Users, Coffee, Laptop, Heart, Trophy } from "lucide-react";

import Footer from "@/components/Footer";

const Career = () => {
  const openPositions = [
    {
      title: "Senior AI Engineer",
      department: "AI Research & Development",
      location: "Brussels, Hybrid",
      type: "Full-time",
      salary: "€70.000 - €90.000",
      description: "We zoeken een ervaren AI Engineer om innovatieve machine learning oplossingen te ontwikkelen voor onze klanten.",
      requirements: ["5+ jaar ervaring met Python/TensorFlow", "PhD in AI/ML of gerelateerd veld", "Ervaring met cloud platforms"],
      featured: true
    },
    {
      title: "Full-Stack Developer",
      department: "Software Engineering",
      location: "Antwerp, On-site",
      type: "Full-time",
      salary: "€55.000 - €75.000",
      description: "Ontwikkel moderne webapplicaties en integreer AI-functionaliteiten in bestaande systemen.",
      requirements: ["React/Node.js expertise", "3+ jaar ervaring", "API integration ervaring"],
      featured: false
    },
    {
      title: "Data Scientist",
      department: "Data Science & Analytics",
      location: "Brussels, Remote",
      type: "Full-time",
      salary: "€60.000 - €80.000",
      description: "Analyseer complexe datasets en ontwikkel predictieve modellen voor diverse sectoren.",
      requirements: ["Python/R expertise", "Statistiek achtergrond", "Business intelligence ervaring"],
      featured: false
    },
    {
      title: "UX/UI Designer",
      department: "Design",
      location: "Brussels, Hybrid",
      type: "Full-time",
      salary: "€50.000 - €65.000",
      description: "Ontwerp intuïtieve interfaces voor AI-gedreven applicaties en complexe data visualisaties.",
      requirements: ["Figma/Sketch expertise", "User research ervaring", "Portfolio met B2B projecten"],
      featured: false
    },
    {
      title: "DevOps Engineer",
      department: "Infrastructure",
      location: "Remote",
      type: "Contract",
      salary: "€400 - €600/dag",
      description: "Beheer cloud infrastructuur en implementeer CI/CD pipelines voor ML-modellen.",
      requirements: ["Kubernetes/Docker", "AWS/Azure expertise", "Infrastructure as Code"],
      featured: false
    }
  ];

  const benefits = [
    {
      icon: Laptop,
      title: "Flexibel werken",
      description: "Hybride werkmodel met moderne apparatuur en flexibele werkuren"
    },
    {
      icon: Users,
      title: "Leren & ontwikkeling",
      description: "Conferenties, trainingen en tijd voor persoonlijke projecten"
    },
    {
      icon: Heart,
      title: "Werk-leven balans",
      description: "Ruime vakantieregeling en mentale gezondheidsondersteuning"
    },
    {
      icon: Trophy,
      title: "Competitief pakket",
      description: "Marktconform salaris, bonussen en aandelen opties"
    },
    {
      icon: Coffee,
      title: "Geweldige cultuur",
      description: "Team events, gratis lunch en gezellige kantooromgeving"
    }
  ];

  const workingAtB12 = [
    "Werken aan cutting-edge AI projecten voor toonaangevende bedrijven",
    "Samenwerken met een multidisciplinair team van experts",
    "Bijdragen aan open-source projecten en onderzoekspublicaties",
    "Persoonlijke groei in een dynamische en innovatieve omgeving",
    "Impact maken op de toekomst van AI in verschillende sectoren"
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Carrière bij <span className="gradient-text">Cogniq AI</span>
            </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Word deel van een team dat de toekomst van AI vormgeeft. Bij Cogniq AI combineren we technische excellentie met een geweldige werkcultuur.
          </p>
        </div>

        {/* Why Work at B12 */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
            <h2 className="text-3xl font-bold mb-6">
              Waarom werken bij <span className="gradient-text">Cogniq AI</span>?
            </h2>
              <div className="space-y-4">
                {workingAtB12.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mr-4 mt-0.5 flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-card-gradient rounded-2xl p-8 shadow-intense border border-primary/20 backdrop-blur-sm bg-card/95">
          <div className="text-center mb-6">
            <div className="text-6xl font-bold gradient-text mb-2 drop-shadow-glow">40+</div>
            <p className="text-muted-foreground font-medium">Experts in ons team</p>
          </div>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-foreground">12+</div>
                  <p className="text-sm text-muted-foreground">Jaar ervaring</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">400+</div>
                  <p className="text-sm text-muted-foreground">Projecten</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            Onze <span className="gradient-text">Voordelen</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <Card key={index} className="card-gradient shadow-card hover:shadow-glow transition-smooth text-center border border-primary/10 backdrop-blur-sm bg-card/95">
                  <CardContent className="pt-6">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mx-auto mb-4 shadow-glow">
                      <IconComponent className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Open Positions */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            Open <span className="gradient-text">Posities</span>
          </h2>

          {/* Featured Position */}
          {openPositions.filter(job => job.featured).map((job, index) => (
            <Card key={index} className="card-gradient shadow-intense hover:shadow-glow transition-smooth mb-8 overflow-hidden border border-primary/20 backdrop-blur-sm bg-card/95">
              <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-4">
                <Badge className="bg-accent text-accent-foreground">Featured</Badge>
              </div>
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <CardTitle className="text-2xl font-bold mb-2">{job.title}</CardTitle>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {job.location}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {job.type}
                      </div>
                      <div className="flex items-center">
                        <Euro className="h-4 w-4 mr-1" />
                        {job.salary}
                      </div>
                    </div>
                  </div>
                  <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 mt-4 md:mt-0">
                    {job.department}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground mb-6 text-lg leading-relaxed">
                  {job.description}
                </CardDescription>
                <div className="mb-6">
                  <h4 className="font-semibold mb-3">Vereisten:</h4>
                  <div className="flex flex-wrap gap-2">
                    {job.requirements.map((req, reqIndex) => (
                      <Badge key={reqIndex} variant="outline" className="text-sm">
                        {req}
                      </Badge>
                    ))
                    }
                  </div>
                </div>
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow hover:scale-105 transition-all">
                  Solliciteer nu
                </Button>
              </CardContent>
            </Card>
          ))
          }

          {/* Other Positions */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {openPositions.filter(job => !job.featured).map((job, index) => (
              <Card key={index} className="card-gradient shadow-card hover:shadow-glow transition-smooth border border-primary/10 backdrop-blur-sm bg-card/95">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                      {job.department}
                    </Badge>
                    <Badge variant="outline" className={job.type === "Contract" ? "border-accent text-accent" : ""}>
                      {job.type}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-semibold">{job.title}</CardTitle>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      {job.location}
                    </div>
                    <div className="flex items-center">
                      <Euro className="h-4 w-4 mr-1" />
                      {job.salary}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground mb-4 leading-relaxed">
                    {job.description}
                  </CardDescription>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {job.requirements.slice(0, 2).map((req, reqIndex) => (
                      <Badge key={reqIndex} variant="outline" className="text-xs">
                        {req}
                      </Badge>
                    ))
                    }
                    {job.requirements.length > 2 && (
                      <Badge variant="outline" className="text-xs">
                        +{job.requirements.length - 2} meer
                      </Badge>
                    )}
                  </div>
                  <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary/10 hover:scale-105 transition-all">
                    Meer details
                  </Button>
                </CardContent>
              </Card>
            ))
            }
          </div>
        </div>

        {/* Application Process */}
        <div className="text-center bg-card-gradient rounded-2xl p-12 shadow-intense border border-primary/20 backdrop-blur-sm bg-card/95">
          <h2 className="text-3xl font-bold mb-6">
            Sollicitatieproces
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {[
              { step: "1", title: "Sollicitatie", description: "Verstuur je CV en motivatiebrief" },
              { step: "2", title: "Screening", description: "Eerste gesprek met HR" },
              { step: "3", title: "Technisch interview", description: "Gesprek met het team" },
              { step: "4", title: "Aanbod", description: "Welkom bij B12!" }
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                  {phase.step}
                </div>
                <h3 className="font-semibold mb-2">{phase.title}</h3>
                <p className="text-sm text-muted-foreground">{phase.description}</p>
              </div>
            ))
            }
          </div>
          <p className="text-muted-foreground mb-6">
            Zie je geen passende functie? Stuur ons een open sollicitatie - we horen graag van getalenteerde professionals!
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow hover:scale-105 transition-all">
            Open sollicitatie
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Career;
