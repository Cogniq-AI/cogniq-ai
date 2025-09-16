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
    'nav.home': 'Home',
    'nav.projects': 'Projecten',
    'nav.services': 'Diensten',
    'nav.sectors': 'Sectoren',
    'nav.team': 'Team',
    'nav.news': 'Nieuws',
    'nav.career': 'Carrière',
    'nav.contact': 'Neem contact op',
  },
  en: {
    'nav.home': 'Home',
    'nav.projects': 'Projects',
    'nav.services': 'Services',
    'nav.sectors': 'Sectors',
    'nav.team': 'Team',
    'nav.news': 'News',
    'nav.career': 'Career',
    'nav.contact': 'Get in touch',
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