import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, Briefcase, Heart, Truck, Calculator, Building } from "lucide-react";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import insuranceImage from "@/assets/insurance-sector.jpg";
import professionalServicesImage from "@/assets/professional-services.jpg";
import healthcareImage from "@/assets/healthcare-clinic.jpg";
import logisticsImage from "@/assets/logistics-customs.jpg";
import taxImage from "@/assets/tax-optimization.jpg";
import publicSectorImage from "@/assets/public-sector.jpg";

const Sectors = () => {
  const { t } = useLanguage();
  
  // Generate sectors array from translations
  const sectors = [
    { icon: Shield, image: insuranceImage },
    { icon: Briefcase, image: professionalServicesImage },
    { icon: Heart, image: healthcareImage },
    { icon: Truck, image: logisticsImage },
    { icon: Calculator, image: taxImage },
    { icon: Building, image: publicSectorImage }
  ].map((sector, i) => ({
    icon: sector.icon,
    title: t(`sector.${i}.title`),
    description: t(`sector.${i}.description`),
    image: sector.image,
    solutions: Array.from({ length: 4 }, (_, j) => t(`sector.${i}.solution.${j}`)),
    caseStudy: t(`sector.${i}.caseStudy`)
  }));

  return (
    <>
      <div className="min-h-screen py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 px-4">
            {t('specializations.title')} <span className="gradient-text">{t('specializations.title.highlight')}</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            {t('specializations.subtitle')}
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
                  <Card className="card-gradient shadow-intense border border-primary/20 h-full hover:shadow-glow transition-smooth backdrop-blur-sm bg-card/95">
                    <CardHeader>
                      <div className="flex items-center mb-4">
                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mr-4 shadow-glow">
                          <IconComponent className="h-7 w-7 text-primary" />
                        </div>
                        <Badge variant="secondary" className="bg-primary/15 text-primary border-primary/30 shadow-sm">
                          {t('specializations.focus')}
                        </Badge>
                      </div>
                      <CardTitle className="text-3xl font-bold mb-4 gradient-text">
                        {sector.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-muted-foreground mb-6 text-lg leading-relaxed">
                        {sector.description}
                      </CardDescription>

                      <div className="mb-6">
                        <h4 className="font-semibold mb-4 text-foreground">{t('specializations.solutions')}</h4>
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
                          <strong className="text-foreground">{t('specializations.case.study')}</strong> {sector.caseStudy}
                        </p>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-3">
                        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow hover:scale-105 transition-all">
                          {t('specializations.more.about')} {sector.title.toLowerCase()}
                        </Button>
                        <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 hover:scale-105 transition-all">
                          {t('specializations.view.projects')}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Information */}
        <div className="mt-20 text-center">
          <div className="bg-card-gradient rounded-2xl p-12 shadow-intense border border-primary/20">
            <h3 className="text-2xl font-bold mb-4">
              {t('specializations.not.listed.title')}
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              {t('specializations.not.listed.desc')}
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow hover:scale-105 transition-all">
              {t('specializations.not.listed.cta')}
            </Button>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Sectors;