import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const Projects = () => {
  const { t } = useLanguage();
  
  const projects = [
    {
      title: "Controlesysteem voor de bovenleidingen van Brusselse trams",
      description: "De MIVB, de Brusselse openbaarvervoersmaatschappij, heeft een AI-gestuurd bewakingssysteem geïmplementeerd dat problemen met elektrische leidingen in realtime detecteert, waardoor de betrouwbaarheid en operationele efficiëntie van het tramnetwerk worden verbeterd.",
      client: "MIVB",
      category: "Transport & Mobiliteit",
      tags: ["AI", "Monitoring", "Transport"]
    },
    {
      title: "Onderzoeksinstrument voor de evaluatie van behandelplannen",
      description: "Ion Beam Applications (IBA) werkte samen met B12 Consulting en de Rijksuniversiteit Groningen aan de ontwikkeling van een open-source platform voor onderzoekers in protontherapie, waardoor behandelplannen efficiënter kunnen worden opgesteld en geëvalueerd.",
      client: "IBA & RUG",
      category: "Gezondheidszorg",
      tags: ["Healthcare", "Research", "Open Source"]
    },
    {
      title: "Fotovoltaïsche installaties bewaken met machine learning",
      description: "Perpetum, een leider in de energiesector, verbeterde de monitoring van PV-centrales met een datagestuurde oplossing, waardoor de uitvaltijd werd verminderd door detectie van anomalieën en de financiële prestaties werden verbeterd door nauwkeurige voorspellingen van de energieproductie.",
      client: "Perpetum",
      category: "Energie",
      tags: ["Machine Learning", "Energy", "Monitoring"]
    }
  ];

  return (
    <div className="min-h-screen">
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              {t('projects.title')} <span className="gradient-text">{t('projects.title.highlight')}</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('projects.subtitle')}
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {projects.map((project, index) => (
              <Card key={index} className="card-gradient shadow-card hover:shadow-glow transition-smooth">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                      {project.category}
                    </Badge>
                    <span className="text-sm text-muted-foreground">{project.client}</span>
                  </div>
                  <CardTitle className="text-2xl font-bold mb-4">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </CardDescription>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button variant="ghost" className="text-primary hover:text-primary/80 p-0">
                    {t('projects.read.more')}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">
              {t('projects.cta.title')}
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              {t('projects.cta.subtitle')}
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow">
              {t('projects.cta.button')}
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Projects;