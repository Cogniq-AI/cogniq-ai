import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Brain, Code, Database, Lightbulb, Palette, Settings, Zap, Shield, BarChart, Cog } from "lucide-react";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const Services = () => {
  const { t } = useLanguage();
  
  const mainServices = [
    {
      icon: Brain,
      titleKey: "services.ai.title",
      descriptionKey: "services.ai.desc",
      featuresKeys: ["services.ai.features.ml", "services.ai.features.dl", "services.ai.features.cv", "services.ai.features.nlp"],
      color: "text-blue-500"
    },
    {
      icon: Code,
      titleKey: "services.software.title",
      descriptionKey: "services.software.desc",
      featuresKeys: ["services.software.features.custom", "services.software.features.api", "services.software.features.cloud", "services.software.features.mobile"],
      color: "text-green-500"
    },
    {
      icon: Database,
      titleKey: "services.data.title",
      descriptionKey: "services.data.desc",
      featuresKeys: ["services.data.features.arch", "services.data.features.etl", "services.data.features.warehouse", "services.data.features.analytics"],
      color: "text-purple-500"
    },
    {
      icon: Lightbulb,
      titleKey: "services.innovation.title",
      descriptionKey: "services.innovation.desc",
      featuresKeys: ["services.innovation.features.roadmap", "services.innovation.features.assessment", "services.innovation.features.strategy", "services.innovation.features.consulting"],
      color: "text-yellow-500"
    },
    {
      icon: Palette,
      titleKey: "services.ux.title",
      descriptionKey: "services.ux.desc",
      featuresKeys: ["services.ux.features.research", "services.ux.features.design", "services.ux.features.prototype", "services.ux.features.testing"],
      color: "text-pink-500"
    },
    {
      icon: Settings,
      titleKey: "services.ops.title",
      descriptionKey: "services.ops.desc",
      featuresKeys: ["services.ops.features.cicd", "services.ops.features.deployment", "services.ops.features.infrastructure", "services.ops.features.monitoring"],
      color: "text-red-500"
    }
  ];

  const additionalServices = [
    { icon: Zap, titleKey: "services.performance.title", descriptionKey: "services.performance.desc" },
    { icon: Shield, titleKey: "services.security.title", descriptionKey: "services.security.desc" },
    { icon: BarChart, titleKey: "services.bi.title", descriptionKey: "services.bi.desc" },
    { icon: Cog, titleKey: "services.automation.title", descriptionKey: "services.automation.desc" }
  ];

  return (
    <>
      <div className="min-h-screen py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            {t('services.page.title')} <span className="gradient-text">{t('services.page.title.highlight')}</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('services.page.subtitle')}
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
                    {t(service.titleKey)}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground mb-6 leading-relaxed">
                    {t(service.descriptionKey)}
                  </CardDescription>
                  <div className="space-y-2 mb-6">
                    {service.featuresKeys.map((featureKey, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3" />
                        <span className="text-muted-foreground">{t(featureKey)}</span>
                      </div>
                    ))}
                  </div>
                  <Button variant="info" className="relative z-10">
                    {t('services.more')}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Services */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">
            {t('services.additional.title')} <span className="gradient-text">{t('services.additional.title.highlight')}</span>
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
                    <h3 className="font-semibold mb-2">{t(service.titleKey)}</h3>
                    <p className="text-sm text-muted-foreground">{t(service.descriptionKey)}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-card-gradient rounded-2xl p-12 shadow-card">
          <h2 className="text-3xl font-bold mb-6">
            {t('services.final.cta.title')}
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            {t('services.final.cta.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow hover:scale-105 transition-all">
              {t('services.final.cta.contact')}
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 hover:scale-105 transition-all">
              {t('services.final.cta.projects')}
            </Button>
          </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Services;