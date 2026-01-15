// src/pages/ProjectsList.js
import React from 'react';
import { Link } from 'react-router-dom';
import { t } from '../components/Translate';
import { useLanguage } from '../i18n/LanguageContext';
import { projectsData } from '../data/projects';

const ProjectsList = () => {
  const [lang] = useLanguage();

  return (
    <section id="projects" style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.title}>{t('projects.title', lang)}</h2>
        {projectsData.map((project) => (
          <div key={project.id} style={styles.projectCard}>
            <div style={styles.projectHeader}>
              <h3 style={styles.projectTitle}>{project.title[lang]}</h3>
              <span style={styles.projectType}>{project.type[lang]}</span>
            </div>
            <p style={styles.projectDesc}>{project.shortDesc[lang]}</p>
            <p style={styles.techList}>
              <strong>{t('projects.tech', lang)}:</strong> {project.tech.join(', ')}
            </p>
            <Link to={`/projects/${project.id}`} style={styles.link}>
              {t('projects.viewProject', lang)} →
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};


const styles = {
  section: { padding: '5rem 2rem', backgroundColor: '#0f0f0f', color: '#fff', minHeight: '100vh' },
  container: { maxWidth: '900px', margin: '0 auto' },
  title: { fontSize: '2.5rem', textAlign: 'center', marginBottom: '3rem' },
  projectCard: {
    backgroundColor: '#1a1a1a',
    padding: '2rem',
    marginBottom: '2rem',
    borderRadius: '8px',
    borderLeft: '4px solid #ff4757',
    transition: 'transform 0.2s',
    cursor: 'pointer'
  },
  projectHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '1rem'
  },
  projectTitle: {
    fontSize: '1.5rem',
    margin: 0
  },
  projectType: {
    backgroundColor: '#ff4757',
    color: '#fff',
    padding: '0.3rem 0.8rem',
    borderRadius: '20px',
    fontSize: '0.85rem',
    fontWeight: 'bold'
  },
  projectDesc: {
    fontSize: '1rem',
    lineHeight: 1.6,
    marginBottom: '1rem',
    color: '#ccc'
  },
  techList: {
    fontSize: '0.9rem',
    color: '#999',
    marginBottom: '1rem'
  },
  link: { 
    color: '#ff6b81', 
    textDecoration: 'none',
    fontSize: '1rem',
    fontWeight: 'bold',
    display: 'inline-block',
    marginTop: '0.5rem'
  }
};

export default ProjectsList;