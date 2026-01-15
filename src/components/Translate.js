import translations from '../i18n/translations';

const Translate = (key, lang) => {
  return translations[lang]?.[key] || key;
};

// Helper pour les clés imbriquées : ex: "hero.title"
const t = (key, lang) => {
  return key.split('.').reduce((obj, i) => obj?.[i], translations[lang]) || key;
};

export { t, Translate };