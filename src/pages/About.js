import React from 'react';
import { t } from '../components/Translate';
import { useLanguage } from '../i18n/LanguageContext';

const About = () => {
  const [lang] = useLanguage();

  return (
    <section id="about" style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.title}>{t('about.title', lang)}</h2>
        <p style={styles.text}>{t('about.bio', lang)}</p>

        <h3 style={styles.subtitle}>{t('about.skills', lang)}</h3>
        <ul style={styles.skillsList}>
          <li>Développement de jeux (Unity, Unreal)</li>
          <li>Réalité augmentée & virtuelle (ARKit, ARCore, WebXR)</li>
          <li>Développement web (React, Three.js, WebGL)</li>
          <li>Applications mobiles & desktop</li>
        </ul>

        <div style={styles.cvSection}>
          <h3 style={styles.subtitle}>{t('about.cvTitle', lang)}</h3>
          <img 
            src={lang === 'en' ? '/media/CV-En.jpg' : '/media/CV-Fr.jpg'} 
            alt={lang === 'en' ? 'CV Mohamed Nour Ben Salah' : 'CV Mohamed Nour Ben Salah'} 
            style={styles.cvImage}
          />
          <a 
            href={lang === 'en' ? '/media/CV-En.pdf' : '/media/CV-Fr.pdf'} 
            download 
            style={styles.downloadButton}
          >
            {t('about.downloadCV', lang)}
          </a>
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: { padding: '5rem 2rem', backgroundColor: '#1e1e1e', color: '#fff' },
  container: { maxWidth: '800px', margin: '0 auto' },
  title: { fontSize: '2rem', marginBottom: '1.5rem' },
  text: { fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '2rem' },
  subtitle: { fontSize: '1.4rem', margin: '2rem 0 1rem' },
  skillsList: { listStyle: 'none', padding: 0, fontSize: '1.1rem' },
  cvSection: { marginTop: '3rem', textAlign: 'center' },
  cvImage: { 
    maxWidth: '100%', 
    height: 'auto', 
    border: '2px solid #ff4757', 
    borderRadius: '8px',
    marginBottom: '1.5rem',
    boxShadow: '0 4px 6px rgba(0,0,0,0.3)'
  },
  downloadButton: {
    display: 'inline-block',
    padding: '0.8rem 2rem',
    backgroundColor: '#ff4757',
    color: '#fff',
    textDecoration: 'none',
    borderRadius: '4px',
    fontWeight: 'bold',
    marginTop: '1rem'
  }
};

export default About;