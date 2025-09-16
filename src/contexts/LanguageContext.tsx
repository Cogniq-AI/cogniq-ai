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
    
    // Partners Section
    'partners.title': 'Verenigingen en bedrijven waar we met trots mee samenwerken',
    'partners.footer': 'En vele andere innovatieve partners in AI en technologie',
    
    // Projects Page
    'projects.title': 'Onze',
    'projects.title.highlight': 'Projecten',
    'projects.subtitle': 'Ontdek hoe we complexe uitdagingen transformeren tot innovatieve AI-oplossingen voor bedrijven in verschillende sectoren.',
    'projects.read.more': 'Lees meer →',
    'projects.cta.title': 'Heeft u een project in gedachten?',
    'projects.cta.subtitle': 'Laten we samen bespreken hoe we uw uitdaging kunnen omzetten in een innovatieve oplossing.',
    'projects.cta.button': 'Start uw project',
    
    // Services Page  
    'services.page.title': 'Onze',
    'services.page.title.highlight': 'Diensten',
    'services.page.subtitle': 'Van AI-gedreven oplossingen tot volledige softwareontwikkeling - wij helpen bedrijven transformeren met cutting-edge technologie.',
    'services.ai.features.ml': 'Machine Learning',
    'services.ai.features.dl': 'Deep Learning',
    'services.ai.features.cv': 'Computer Vision',
    'services.ai.features.nlp': 'Natural Language Processing',
    'services.software.features.custom': 'Custom Development',
    'services.software.features.api': 'API Integration',
    'services.software.features.cloud': 'Cloud Solutions',
    'services.software.features.mobile': 'Mobile Apps',
    'services.data.features.arch': 'Data Architecture',
    'services.data.features.etl': 'ETL Pipelines',
    'services.data.features.warehouse': 'Data Warehousing',
    'services.data.features.analytics': 'Analytics',
    'services.innovation.features.roadmap': 'Innovation Roadmap',
    'services.innovation.features.assessment': 'Technology Assessment',
    'services.innovation.features.strategy': 'Digital Strategy',
    'services.innovation.features.consulting': 'R&D Consulting',
    'services.ux.features.research': 'User Research',
    'services.ux.features.design': 'Interface Design',
    'services.ux.features.prototype': 'Prototyping',
    'services.ux.features.testing': 'Usability Testing',
    'services.ops.features.cicd': 'CI/CD Pipelines',
    'services.ops.features.deployment': 'Model Deployment',
    'services.ops.features.infrastructure': 'Infrastructure',
    'services.ops.features.monitoring': 'Monitoring',
    'services.additional.title': 'Aanvullende',
    'services.additional.title.highlight': 'Specialisaties',
    'services.performance.title': 'Performance Optimization',
    'services.performance.desc': 'Systeemprestaties verbeteren',
    'services.security.title': 'Security Consulting',
    'services.security.desc': 'Veiligheid en compliance waarborgen',
    'services.bi.title': 'Business Intelligence',
    'services.bi.desc': 'Data-gedreven besluitvorming',
    'services.automation.title': 'Process Automation',
    'services.automation.desc': 'Bedrijfsprocessen automatiseren',
    'services.final.cta.title': 'Klaar om uw project te starten?',
    'services.final.cta.subtitle': 'Laten we bespreken hoe onze expertise uw bedrijf naar het volgende niveau kan tillen.',
    'services.final.cta.contact': 'Neem contact op',
    'services.final.cta.projects': 'Bekijk onze projecten',
    
    // Specializations/Sectors Page
    'specializations.title': 'Onze',
    'specializations.title.highlight': 'Sectoren',
    'specializations.subtitle': 'Wij brengen diepgaande sectorkennis samen met cutting-edge AI-technologie om specifieke uitdagingen in verschillende industrieën op te lossen.',
    'specializations.focus': 'Sector Focus',
    'specializations.solutions': 'Onze oplossingen:',
    'specializations.case.study': 'Case Study:',
    'specializations.more.about': 'Meer over',
    'specializations.view.projects': 'Bekijk projecten',
    'specializations.not.listed.title': 'Uw sector niet vermeld?',
    'specializations.not.listed.desc': 'Wij werken met bedrijven in diverse sectoren. Neem contact met ons op om te bespreken hoe we uw specifieke uitdagingen kunnen oplossen.',
    'specializations.not.listed.cta': 'Bespreek uw project',
    
    // Footer
    'footer.description': 'Cogniq AI transformeert bedrijven met innovatieve AI-oplossingen. Van strategie tot implementatie, wij zijn uw betrouwbare partner in de AI-revolutie.',
    'footer.company': 'Bedrijf',
    'footer.services': 'Diensten',
    'footer.sectors': 'Sectoren',
    'footer.company.about': 'Over ons',
    'footer.company.team': 'Team',
    'footer.company.career': 'Carrière',
    'footer.company.news': 'Nieuws',
    'footer.services.ai': 'AI-oplossingen',
    'footer.services.software': 'Software ontwikkeling',
    'footer.services.data': 'Data engineering',
    'footer.services.consultancy': 'Consultancy',
    'footer.sectors.healthcare': 'Gezondheidszorg',
    'footer.sectors.energy': 'Energie',
    'footer.sectors.pharma': 'Farmaceutisch',
    'footer.sectors.transport': 'Transport',
    'footer.legal.privacy': 'Privacy beleid',
    'footer.legal.terms': 'Algemene voorwaarden',
    'footer.legal.cookies': 'Cookies',
    'footer.legal.gdpr': 'GDPR',
    'footer.copyright': '© 2024 Cogniq AI. Alle rechten voorbehouden.',
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
    
    // Partners Section
    'partners.title': 'Associations and companies we proudly collaborate with',
    'partners.footer': 'And many other innovative partners in AI and technology',
    
    // Projects Page
    'projects.title': 'Our',
    'projects.title.highlight': 'Projects',
    'projects.subtitle': 'Discover how we transform complex challenges into innovative AI solutions for businesses across different sectors.',
    'projects.read.more': 'Read more →',
    'projects.cta.title': 'Do you have a project in mind?',
    'projects.cta.subtitle': 'Let us discuss together how we can turn your challenge into an innovative solution.',
    'projects.cta.button': 'Start your project',
    
    // Services Page
    'services.page.title': 'Our',
    'services.page.title.highlight': 'Services',
    'services.page.subtitle': 'From AI-driven solutions to full software development - we help businesses transform with cutting-edge technology.',
    'services.ai.features.ml': 'Machine Learning',
    'services.ai.features.dl': 'Deep Learning',
    'services.ai.features.cv': 'Computer Vision',
    'services.ai.features.nlp': 'Natural Language Processing',
    'services.software.features.custom': 'Custom Development',
    'services.software.features.api': 'API Integration',
    'services.software.features.cloud': 'Cloud Solutions',
    'services.software.features.mobile': 'Mobile Apps',
    'services.data.features.arch': 'Data Architecture',
    'services.data.features.etl': 'ETL Pipelines',
    'services.data.features.warehouse': 'Data Warehousing',
    'services.data.features.analytics': 'Analytics',
    'services.innovation.features.roadmap': 'Innovation Roadmap',
    'services.innovation.features.assessment': 'Technology Assessment',
    'services.innovation.features.strategy': 'Digital Strategy',
    'services.innovation.features.consulting': 'R&D Consulting',
    'services.ux.features.research': 'User Research',
    'services.ux.features.design': 'Interface Design',
    'services.ux.features.prototype': 'Prototyping',
    'services.ux.features.testing': 'Usability Testing',
    'services.ops.features.cicd': 'CI/CD Pipelines',
    'services.ops.features.deployment': 'Model Deployment',
    'services.ops.features.infrastructure': 'Infrastructure',
    'services.ops.features.monitoring': 'Monitoring',
    'services.additional.title': 'Additional',
    'services.additional.title.highlight': 'Specializations',
    'services.performance.title': 'Performance Optimization',
    'services.performance.desc': 'Improve system performance',
    'services.security.title': 'Security Consulting',
    'services.security.desc': 'Ensure security and compliance',
    'services.bi.title': 'Business Intelligence',
    'services.bi.desc': 'Data-driven decision making',
    'services.automation.title': 'Process Automation',
    'services.automation.desc': 'Automate business processes',
    'services.final.cta.title': 'Ready to start your project?',
    'services.final.cta.subtitle': 'Let us discuss how our expertise can take your business to the next level.',
    'services.final.cta.contact': 'Get in touch',
    'services.final.cta.projects': 'View our projects',
    
    // Specializations/Sectors Page
    'specializations.title': 'Our',
    'specializations.title.highlight': 'Sectors',
    'specializations.subtitle': 'We combine deep sector knowledge with cutting-edge AI technology to solve specific challenges in different industries.',
    'specializations.focus': 'Sector Focus',
    'specializations.solutions': 'Our solutions:',
    'specializations.case.study': 'Case Study:',
    'specializations.more.about': 'More about',
    'specializations.view.projects': 'View projects',
    'specializations.not.listed.title': 'Your sector not listed?',
    'specializations.not.listed.desc': 'We work with companies in various sectors. Contact us to discuss how we can solve your specific challenges.',
    'specializations.not.listed.cta': 'Discuss your project',
    
    // Footer
    'footer.description': 'Cogniq AI transforms businesses with innovative AI solutions. From strategy to implementation, we are your trusted partner in the AI revolution.',
    'footer.company': 'Company',
    'footer.services': 'Services',
    'footer.sectors': 'Sectors',
    'footer.company.about': 'About us',
    'footer.company.team': 'Team',
    'footer.company.career': 'Career',
    'footer.company.news': 'News',
    'footer.services.ai': 'AI solutions',
    'footer.services.software': 'Software development',
    'footer.services.data': 'Data engineering',
    'footer.services.consultancy': 'Consultancy',
    'footer.sectors.healthcare': 'Healthcare',
    'footer.sectors.energy': 'Energy',
    'footer.sectors.pharma': 'Pharmaceutical',
    'footer.sectors.transport': 'Transport',
    'footer.legal.privacy': 'Privacy policy',
    'footer.legal.terms': 'Terms and conditions',
    'footer.legal.cookies': 'Cookies',
    'footer.legal.gdpr': 'GDPR',
    'footer.copyright': '© 2024 Cogniq AI. All rights reserved.',
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