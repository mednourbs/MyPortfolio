// src/pages/ProjectDetail.js
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { t } from '../components/Translate';
import { useLanguage } from '../i18n/LanguageContext';

const ProjectDetail = ({ projects }) => {
  const { id } = useParams();
  const [lang] = useLanguage();
  const navigate = useNavigate();

  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <section style={styles.section}>
        <div style={styles.container}>
          <h2>{t('projects.notFound', lang)}</h2>
          <button onClick={() => navigate('/projects')} style={styles.backBtn}>
            {t('projects.backToProjects', lang)}
          </button>
        </div>
      </section>
    );
  }

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <button onClick={() => navigate(-1)} style={styles.backBtn}>
          {t('projects.back', lang)}
        </button>
        <h1>{project.title[lang]}</h1>
        <p style={styles.longDesc}>{project.longDesc[lang]}</p>

        <div style={styles.videoContainer}>
          <video
            src={project.videoUrl}
            title={project.title[lang]}
            controls
            style={styles.video}
          >
            {t('projects.videoNotSupported', lang)}
          </video>
        </div>

        <p><strong>{t('projects.tech', lang)} :</strong> {project.tech.join(', ')}</p>
        
      </div>
    </section>
  );
};

const styles = {
  section: { padding: '3rem 1.5rem', backgroundColor: '#0f0f0f', color: '#fff' },
  container: { maxWidth: '900px', margin: '0 auto' },
  backBtn: {
    background: 'none',
    border: 'none',
    color: '#ff6b81',
    cursor: 'pointer',
    fontSize: '1rem',
    marginBottom: '2rem'
  },
  longDesc: { fontSize: '1.1rem', lineHeight: 1.7, margin: '1.5rem 0' },
  videoContainer: {
    position: 'relative',
    paddingBottom: '56.25%', // 16:9
    height: 0,
    overflow: 'hidden',
    marginBottom: '2rem'
  },
  video: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%'
  },
  link: {
    display: 'inline-block',
    marginTop: '1rem',
    color: '#4dabf7',
    textDecoration: 'none'
  }
};

export default ProjectDetail;