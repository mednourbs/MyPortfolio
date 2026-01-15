import React from 'react';
import { t } from '../components/Translate';
import { useLanguage } from '../i18n/LanguageContext';

const Footer = () => {
  const [lang] = useLanguage();

  return (
    <footer style={styles.footer}>
      <p>{t('footer.copyright', lang)}</p>
    </footer>
  );
};

const styles = {
  footer: {
    textAlign: 'center',
    padding: '1.5rem',
    backgroundColor: '#000',
    color: '#888',
    fontSize: '0.9rem'
  }
};

export default Footer;