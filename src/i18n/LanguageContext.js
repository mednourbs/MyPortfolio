import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const getSavedLang = () => {
    const saved = localStorage.getItem('lang');
    if (saved && (saved === 'fr' || saved === 'en')) return saved;
    const browserLang = navigator.language.startsWith('fr') ? 'fr' : 'en';
    return browserLang;
  };

  const [lang, setLang] = useState(getSavedLang());

  useEffect(() => {
    localStorage.setItem('lang', lang);
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return [context.lang, context.setLang];
};
