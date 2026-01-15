import React from 'react';
import { Link } from 'react-router-dom';
import { t } from '../components/Translate';
import { useLanguage } from '../i18n/LanguageContext';

const Header = () => {
  const [lang, setLang] = useLanguage();

  const toggleLang = () => {
    setLang(lang === 'fr' ? 'en' : 'fr');
  };

  return (
    <header style={styles.header}>
      <nav style={styles.nav}>
        <Link to="/" style={styles.link}>{t('nav.home', lang)}</Link>
        <Link to="/about" style={styles.link}>{t('nav.about', lang)}</Link>
        <Link to="/projects" style={styles.link}>{t('nav.projects', lang)}</Link>
        <Link to="/contact" style={styles.link}>{t('nav.contact', lang)}</Link>
      </nav>
      <button onClick={toggleLang} style={styles.langBtn}>
        {lang === 'fr' ? 'EN' : 'FR'}
      </button>
    </header>
  );
};

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
    backgroundColor: '#0f0f0f',
    color: '#fff'
  },
  nav: { display: 'flex', gap: '1.5rem' },
  link: { color: '#fff', textDecoration: 'none', fontSize: '1.1rem' },
  langBtn: {
    background: 'none',
    border: '1px solid #fff',
    color: '#fff',
    padding: '0.3rem 0.6rem',
    cursor: 'pointer'
  }
};

export default Header;