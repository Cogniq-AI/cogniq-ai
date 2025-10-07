import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const Projects = () => {
  const { t } = useLanguage();
  
  // Generate projects array from translations
  const projects = Array.from({ length: 3 }, (_, i) => ({
    title: t(`project.${i}.title`),
    description: t(`project.${i}.description`),
    client: t(`project.${i}.client`),
    category: t(`project.${i}.category`),
    tags: i === 0 ? ["AI", "Monitoring", "Transport"] : 
          i === 1 ? ["Healthcare", "Research", "Open Source"] :
          ["Machine Learning", "Energy", "Monitoring"]
  }));

  return (
    <div className="min-h-screen">
      <div className="py-20 pb-32">
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
                  <Button variant="info" className="relative z-10">
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
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow hover:scale-105 transition-all">
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