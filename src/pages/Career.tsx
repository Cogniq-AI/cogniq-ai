import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Euro, Users, Coffee, Laptop, Heart, Trophy } from "lucide-react";

import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const Career = () => {
  const { t } = useLanguage();
  
  // Generate open positions array from translations
  const openPositions = Array.from({ length: 5 }, (_, i) => ({
    title: t(`career.job.${i}.title`),
    department: t(`career.job.${i}.department`),
    location: t(`career.job.${i}.location`),
    type: t(`career.job.${i}.type`),
    salary: t(`career.job.${i}.salary`),
    description: t(`career.job.${i}.description`),
    requirements: Array.from({ length: 3 }, (_, j) => t(`career.job.${i}.req.${j}`)),
    featured: i === 0
  }));

  const benefits = [
    {
      icon: Laptop,
      titleKey: "career.benefit.flexible.title",
      descKey: "career.benefit.flexible.desc"
    },
    {
      icon: Users,
      titleKey: "career.benefit.learning.title",
      descKey: "career.benefit.learning.desc"
    },
    {
      icon: Heart,
      titleKey: "career.benefit.balance.title",
      descKey: "career.benefit.balance.desc"
    },
    {
      icon: Trophy,
      titleKey: "career.benefit.package.title",
      descKey: "career.benefit.package.desc"
    },
    {
      icon: Coffee,
      titleKey: "career.benefit.culture.title",
      descKey: "career.benefit.culture.desc"
    }
  ];

  const workingAtB12 = [
    t('career.why.item1'),
    t('career.why.item2'),
    t('career.why.item3'),
    t('career.why.item4'),
    t('career.why.item5')
  ];

  return (
    <>
      <div className="min-h-screen py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              {t('career.title')} <span className="gradient-text">{t('career.title.highlight')}</span>
            </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('career.subtitle')}
          </p>
        </div>

        {/* Why Work at B12 */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
            <h2 className="text-3xl font-bold mb-6">
              {t('career.why.title')} <span className="gradient-text">{t('career.why.highlight')}</span>?
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
            <p className="text-muted-foreground font-medium">{t('career.experts')}</p>
          </div>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-foreground">12+</div>
                  <p className="text-sm text-muted-foreground">{t('career.experience')}</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">400+</div>
                  <p className="text-sm text-muted-foreground">{t('career.projects.count')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            {t('career.benefits.title')} <span className="gradient-text">{t('career.benefits.highlight')}</span>
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
                    <h3 className="font-semibold mb-2">{t(benefit.titleKey)}</h3>
                    <p className="text-sm text-muted-foreground">{t(benefit.descKey)}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Open Positions */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            {t('career.positions.title')} <span className="gradient-text">{t('career.positions.highlight')}</span>
          </h2>

          {/* Featured Position */}
          {openPositions.filter(job => job.featured).map((job, index) => (
            <Card key={index} className="card-gradient shadow-intense hover:shadow-glow transition-smooth mb-8 overflow-hidden border border-primary/20 backdrop-blur-sm bg-card/95">
              <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-4">
                <Badge className="bg-accent text-accent-foreground">{t('career.positions.featured')}</Badge>
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
                  <h4 className="font-semibold mb-3">{t('career.positions.requirements')}</h4>
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
                  {t('career.positions.apply')}
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
                  <Button variant="info" className="w-full relative z-10">
                    <span className="relative z-10">{t('career.positions.details')}</span>
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
            {t('career.process.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {[
              { step: "1", titleKey: "career.process.step1.title", descKey: "career.process.step1.desc" },
              { step: "2", titleKey: "career.process.step2.title", descKey: "career.process.step2.desc" },
              { step: "3", titleKey: "career.process.step3.title", descKey: "career.process.step3.desc" },
              { step: "4", titleKey: "career.process.step4.title", descKey: "career.process.step4.desc" }
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                  {phase.step}
                </div>
                <h3 className="font-semibold mb-2">{t(phase.titleKey)}</h3>
                <p className="text-sm text-muted-foreground">{t(phase.descKey)}</p>
              </div>
            ))
            }
          </div>
          <p className="text-muted-foreground mb-6">
            {t('career.process.open.text')}
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow hover:scale-105 transition-all">
            {t('career.process.open.cta')}
          </Button>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Career;
