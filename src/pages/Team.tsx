import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Linkedin, Mail } from "lucide-react";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import teamImage from "@/assets/team-collaboration.jpg";

const Team = () => {
  const { t } = useLanguage();
  
  // Generate team members array from translations
  const teamMembers = Array.from({ length: 6 }, (_, i) => ({
    name: t(`team.member.${i}.name`),
    role: t(`team.member.${i}.role`),
    expertise: Array.from({ length: 3 }, (_, j) => t(`team.member.${i}.skill.${j}`)),
    description: t(`team.member.${i}.description`)
  }));

  // Generate departments array from translations
  const departments = Array.from({ length: 4 }, (_, i) => ({
    name: t(`team.dept.${i}.name`),
    count: t(`team.dept.${i}.count`),
    description: t(`team.dept.${i}.description`)
  }));

  return (
    <>
      <div className="min-h-screen py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Ons <span className="gradient-text">Team</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Meer dan 40 experts die gepassioneerd zijn over het transformeren van complexe uitdagingen in innovatieve AI-oplossingen.
          </p>
        </div>

        {/* Hero Image */}
        <div className="relative mb-20">
          <div className="relative overflow-hidden rounded-2xl shadow-card">
            <img 
              src={teamImage} 
              alt="Cogniq AI team collaboration"
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <h2 className="text-3xl font-bold text-white mb-2">
                Samen bouwen we de toekomst van AI
              </h2>
              <p className="text-white/90 text-lg">
                Ons multidisciplinaire team combineert technische expertise met branchekennis
              </p>
            </div>
          </div>
        </div>

        {/* Departments */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            {t('team.departments.title')} <span className="gradient-text">{t('team.departments.highlight')}</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {departments.map((dept, index) => (
              <Card key={index} className="card-gradient shadow-card hover:shadow-glow transition-smooth text-center">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold gradient-text">{dept.count.split(' ')[0]}</span>
                  </div>
                  <h3 className="font-semibold mb-2">{dept.name}</h3>
                  <Badge variant="secondary" className="mb-3 bg-primary/10 text-primary border-primary/20">
                    {dept.count}
                  </Badge>
                  <p className="text-sm text-muted-foreground">{dept.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Key Team Members */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            Belangrijkste <span className="gradient-text">Team Leden</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="card-gradient shadow-card hover:shadow-glow transition-smooth">
                <CardContent className="pt-6">
                  {/* Avatar placeholder */}
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold gradient-text">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-center mb-1">{member.name}</h3>
                  <p className="text-primary text-center mb-4 font-medium">{member.role}</p>
                  
                  <p className="text-sm text-muted-foreground text-center mb-4 leading-relaxed">
                    {member.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 justify-center mb-6">
                    {member.expertise.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex justify-center gap-2">
                    <Button size="sm" variant="ghost" className="text-primary hover:text-primary/80 hover:scale-105 transition-all">
                      <Linkedin className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="ghost" className="text-primary hover:text-primary/80 hover:scale-105 transition-all">
                      <Mail className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Join Our Team */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">
            {t('team.join.title')}
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            {t('team.join.desc')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow hover:scale-105 transition-all">
              {t('team.join.cta1')}
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 hover:scale-105 transition-all">
              {t('team.join.cta2')}
            </Button>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Team;