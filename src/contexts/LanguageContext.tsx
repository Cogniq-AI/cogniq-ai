import React, { createContext, useContext, useState } from 'react';

type Language = 'nl' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  nl: {
    // Navigation
    'nav.home': 'Home',
    'nav.projects': 'Projecten',
    'nav.services': 'Diensten',
    'nav.sectors': 'Sectoren',
    'nav.team': 'Team',
    'nav.news': 'Nieuws',
    'nav.career': 'Carrière',
    'nav.contact': 'Neem contact op',
    
    // Hero Section
    'hero.title.ai': 'AI',
    'hero.title.transformation': 'TRANSFORMATIE',
    'hero.title.now': 'NU.',
    'hero.subtitle': 'Start uw AI-reis met een betrouwbare partner',
    'hero.cta1': 'Ontdek onze expertise',
    'hero.cta2': 'Bekijk projecten',
    
    // Stats Section
    'stats.title': 'Snel resultaat, hoge tevredenheid, meetbare impact',
    'stats.subtitle': 'We richten ons op wat ertoe doet: blije klanten, korte doorlooptijd en tastbare waarde.',
    'stats.satisfaction': 'klanttevredenheid',
    'stats.satisfaction.desc': 'Consistente waardering voor impact en samenwerking',
    'stats.weeks': 'weken tot prototype',
    'stats.weeks.desc': 'Van idee naar eerste werkende AI-oplossing in weken',
    'stats.productivity': 'productiviteitsverbetering',
    'stats.productivity.desc': 'Aantoonbare efficiency-winst bij implementaties',
    'stats.cta': 'Bekijk resultaten & cases',
    
    // Services Section
    'services.title': 'Onze diensten',
    'services.subtitle': 'Van AI-gedreven oplossingen tot volledige softwareontwikkeling - wij helpen bedrijven transformeren met cutting-edge technologie.',
    'services.ai.title': 'AI-gebaseerde oplossingen',
    'services.ai.desc': 'Op maat gemaakte, geavanceerde artificiële intelligentiesystemen die voldoen aan unieke behoeften',
    'services.software.title': 'Software ontwikkeling',
    'services.software.desc': 'Softwareoplossingen op maat, aangepast aan specifieke behoeften',
    'services.data.title': 'Gegevensbeheer',
    'services.data.desc': 'Gegevensarchitectuur optimaliseren voor verbeterde analyses',
    'services.innovation.title': 'Innovatiestrategie',
    'services.innovation.desc': 'Strategische verkenning en planning voor geavanceerde technologie voor kunstmatige intelligentie',
    'services.ux.title': 'UX & UI-ontwerp',
    'services.ux.desc': 'Intuïtieve, gebruiksvriendelijke interfaces maken voor naadloze systeemnavigatie',
    'services.ops.title': 'MLOps en DevOps',
    'services.ops.desc': 'Robuuste, efficiënte frameworks bouwen voor schaalbare, goed presterende oplossingen',
    'services.more': 'Meer informatie →',
    'services.cta': 'Bekijk alle diensten',
    
    // Case Studies Section
    'cases.title': 'Succesverhalen',
    'cases.subtitle': 'Ontdek hoe we complexe uitdagingen transformeren tot innovatieve oplossingen die echte impact hebben.',
    'cases.result': 'Resultaat:',
    'cases.view': 'Bekijk case study',
    'cases.cta': 'Bekijk alle projecten',
    
    // Testimonials Section
    'testimonials.title': 'Wat onze klanten zeggen',
    'testimonials.subtitle': 'Onze partnerships spreken voor zich. Hier zijn ervaringen van bedrijven die we hebben geholpen transformeren.',
    
    // Sectors Preview Section
    'sectors.title': 'Onze sectoren',
    'sectors.subtitle': 'Wij brengen diepgaande sectorkennis samen met cutting-edge AI-technologie.',
    'sectors.insurance.title': 'Middelgrote verzekeraars',
    'sectors.insurance.desc': 'AI-oplossingen voor risicobeoordeling, fraude detectie en klantservice optimalisatie in de verzekeringsbranche.',
    'sectors.professional.title': 'Professionele dienstverlening',
    'sectors.professional.desc': 'Automatisering en AI-ondersteuning voor advocatuur, consultancy en boekhouding om efficiëntie te verhogen.',
    'sectors.healthcare.title': 'Zorgsector',
    'sectors.healthcare.desc': 'AI-gedreven oplossingen voor klinieken, zorggroepen en kleinere zorginstelling voor betere patiëntenzorg.',
    'sectors.cta': 'Meer ontdekken',
    
    // CTA Section
    'cta.title': 'Wil je een project starten?',
    'cta.subtitle': "Let's talk",
    'cta.description': 'Klaar om uw bedrijf te transformeren met AI? Laten we bespreken hoe we uw uitdagingen kunnen omzetten in innovatieve oplossingen.',
    'cta.contact': 'Neem contact met ons op',
    'cta.projects': 'Bekijk onze projecten',
    'cta.call': 'Of bel ons direct:',
    'cta.phone': '+32 2 123 45 67',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.projects': 'Projects',
    'nav.services': 'Services',
    'nav.sectors': 'Sectors',
    'nav.team': 'Team',
    'nav.news': 'News',
    'nav.career': 'Career',
    'nav.contact': 'Get in touch',
    
    // Hero Section
    'hero.title.ai': 'AI',
    'hero.title.transformation': 'TRANSFORMATION',
    'hero.title.now': 'NOW.',
    'hero.subtitle': 'Start your AI journey with a trusted partner',
    'hero.cta1': 'Discover our expertise',
    'hero.cta2': 'View projects',
    
    // Stats Section
    'stats.title': 'Fast results, high satisfaction, measurable impact',
    'stats.subtitle': 'We focus on what matters: happy clients, short delivery times and tangible value.',
    'stats.satisfaction': 'customer satisfaction',
    'stats.satisfaction.desc': 'Consistent rating for impact and collaboration',
    'stats.weeks': 'weeks to prototype',
    'stats.weeks.desc': 'From idea to first working AI solution in weeks',
    'stats.productivity': 'productivity improvement',
    'stats.productivity.desc': 'Demonstrable efficiency gains in implementations',
    'stats.cta': 'View results & cases',
    
    // Services Section
    'services.title': 'Our services',
    'services.subtitle': 'From AI-driven solutions to full software development - we help businesses transform with cutting-edge technology.',
    'services.ai.title': 'AI-powered solutions',
    'services.ai.desc': 'Custom-built, advanced artificial intelligence systems that meet unique needs',
    'services.software.title': 'Software development',
    'services.software.desc': 'Custom software solutions, tailored to specific needs',
    'services.data.title': 'Data management',
    'services.data.desc': 'Optimize data architecture for improved analytics',
    'services.innovation.title': 'Innovation strategy',
    'services.innovation.desc': 'Strategic exploration and planning for advanced artificial intelligence technology',
    'services.ux.title': 'UX & UI design',
    'services.ux.desc': 'Create intuitive, user-friendly interfaces for seamless system navigation',
    'services.ops.title': 'MLOps and DevOps',
    'services.ops.desc': 'Build robust, efficient frameworks for scalable, high-performing solutions',
    'services.more': 'More information →',
    'services.cta': 'View all services',
    
    // Case Studies Section
    'cases.title': 'Success stories',
    'cases.subtitle': 'Discover how we transform complex challenges into innovative solutions that have real impact.',
    'cases.result': 'Result:',
    'cases.view': 'View case study',
    'cases.cta': 'View all projects',
    
    // Testimonials Section
    'testimonials.title': 'What our clients say',
    'testimonials.subtitle': 'Our partnerships speak for themselves. Here are experiences from companies we have helped transform.',
    
    // Sectors Preview Section
    'sectors.title': 'Our sectors',
    'sectors.subtitle': 'We combine deep sector knowledge with cutting-edge AI technology.',
    'sectors.insurance.title': 'Mid-size insurers',
    'sectors.insurance.desc': 'AI solutions for risk assessment, fraud detection and customer service optimization in the insurance industry.',
    'sectors.professional.title': 'Professional services',
    'sectors.professional.desc': 'Automation and AI support for legal, consultancy and accounting to increase efficiency.',
    'sectors.healthcare.title': 'Healthcare sector',
    'sectors.healthcare.desc': 'AI-driven solutions for clinics, care groups and smaller healthcare institutions for better patient care.',
    'sectors.cta': 'Discover more',
    
    // CTA Section
    'cta.title': 'Want to start a project?',
    'cta.subtitle': "Let's talk",
    'cta.description': 'Ready to transform your business with AI? Let us discuss how we can turn your challenges into innovative solutions.',
    'cta.contact': 'Get in touch with us',
    'cta.projects': 'View our projects',
    'cta.call': 'Or call us directly:',
    'cta.phone': '+32 2 123 45 67',
  },
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('nl');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['nl']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};