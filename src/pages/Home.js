import React from 'react';
import { t } from '../components/Translate';
import { useLanguage } from '../i18n/LanguageContext';

const Home = () => {
  const [lang] = useLanguage();

  return (
    <section id="home" style={styles.section}>
      <div style={styles.container}>
        <h1 style={styles.title}>{t('hero.title', lang)}</h1>
        <p style={styles.subtitle}>{t('hero.subtitle', lang)}</p>
        <a href="/projects" style={styles.cta}>
          {t('hero.cta', lang)}
        </a>
      </div>
    </section>
  );
};

const styles = {
  section: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#121212',
    color: '#fff'
  },
  container: { textAlign: 'center', maxWidth: '800px', padding: '0 1.5rem' },
  title: { fontSize: '2.5rem', marginBottom: '1rem' },
  subtitle: { fontSize: '1.2rem', opacity: 0.8, marginBottom: '2rem' },
  cta: {
    display: 'inline-block',
    padding: '0.8rem 2rem',
    backgroundColor: '#ff4757',
    color: '#fff',
    textDecoration: 'none',
    borderRadius: '4px',
    fontWeight: 'bold'
  }
};

export default Home;