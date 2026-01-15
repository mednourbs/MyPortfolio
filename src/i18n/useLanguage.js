import { useState, useEffect } from 'react';

const useLanguage = () => {
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

  return [lang, setLang];
};

export default useLanguage;