import React from 'react';
import { t } from '../components/Translate';
import { useLanguage } from '../i18n/LanguageContext';

const Contact = () => {
  const [lang] = useLanguage();

  return (
    <section id="contact" style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.title}>{t('contact.title', lang)}</h2>
        <p>
          <strong>{t('contact.email', lang)}:</strong> nourbnbs@gmail.com
        </p>
        <p>
          <a href="https://github.com/MedNourBenSalah" target="_blank" rel="noopener noreferrer" style={styles.link}>
            {t('contact.github', lang)}
          </a>
        </p>
        <p>
          <a href="https://www.linkedin.com/in/med-nour-ben-salah-19b1a8286" target="_blank" rel="noopener noreferrer" style={styles.link}>
            {t('contact.linkedin', lang)}
          </a>
        </p>
      </div>
    </section>
  );
};

const styles = {
  section: { padding: '5rem 2rem', backgroundColor: '#121212', color: '#fff' },
  container: { maxWidth: '600px', margin: '0 auto', textAlign: 'center' },
  title: { fontSize: '2rem', marginBottom: '2rem' },
  link: { color: '#4dabf7', textDecoration: 'none' }
};

export default Contact;
