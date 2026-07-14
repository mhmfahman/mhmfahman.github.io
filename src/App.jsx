import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Briefcase, 
  GraduationCap, 
  Award, 
  Cpu, 
  ExternalLink, 
  FileText,
  Code,
  Terminal,
  Server,
  Database,
  Cloud,
  Settings,
  Layers
} from 'lucide-react';

// Custom SVG components for brand icons since brand icons are absent in this lucide-react build
const Github = ({ size = 20, className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Linkedin = ({ size = 20, className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" rx="1" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

// Data imports
import personalData from './data/personal.json';
import educationData from './data/education.json';
import experienceData from './data/experience.json';
import projectsData from './data/projects.json';
import skillsData from './data/skills.json';
import certificatesData from './data/certificates.json';

import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('about');

  // Helper to map skill categories to icons
  const getSkillIcon = (category) => {
    switch (category) {
      case 'Programming Languages':
        return <Code className="text-sky-500" size={20} />;
      case 'Frontend Technologies':
        return <Terminal className="text-sky-500" size={20} />;
      case 'Backend Technologies':
        return <Server className="text-sky-500" size={20} />;
      case 'Databases':
        return <Database className="text-sky-500" size={20} />;
      case 'Cloud Platforms':
        return <Cloud className="text-sky-500" size={20} />;
      case 'DevOps & CI/CD':
        return <Settings className="text-sky-500" size={20} />;
      default:
        return <Layers className="text-sky-500" size={20} />;
    }
  };

  return (
    <>
      {/* Navigation */}
      <header className="header">
        <div className="nav-container">
          <a href="#about" className="logo">
            {personalData.name}
          </a>
          <nav>
            <ul className="nav-links">
              <li>
                <a 
                  href="#about" 
                  className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
                  onClick={() => setActiveSection('about')}
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  href="#experience" 
                  className={`nav-link ${activeSection === 'experience' ? 'active' : ''}`}
                  onClick={() => setActiveSection('experience')}
                >
                  Experience
                </a>
              </li>
              <li>
                <a 
                  href="#projects" 
                  className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}
                  onClick={() => setActiveSection('projects')}
                >
                  Projects
                </a>
              </li>
              <li>
                <a 
                  href="#skills" 
                  className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`}
                  onClick={() => setActiveSection('skills')}
                >
                  Skills
                </a>
              </li>
              <li>
                <a 
                  href="#certificates" 
                  className={`nav-link ${activeSection === 'certificates' ? 'active' : ''}`}
                  onClick={() => setActiveSection('certificates')}
                >
                  Certificates
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="about" className="hero-section">
        <span className="hero-subtitle">Hi, my name is</span>
        <h1 className="hero-title">{personalData.name}</h1>
        <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', color: 'var(--primary)', fontWeight: '600' }}>
          {personalData.title}
        </h2>
        <p className="hero-description">
          {personalData.profileSummary}
        </p>

        {/* Contact details list */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', margin: '1rem 0', color: 'var(--text-secondary)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <MapPin size={18} className="text-sky-500" />
            <span>{personalData.location}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Mail size={18} className="text-sky-500" />
            <a href={`mailto:${personalData.email}`} style={{ color: 'inherit', textDecoration: 'none' }}>
              {personalData.email}
            </a>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Phone size={18} className="text-sky-500" />
            <a href={`tel:${personalData.phone}`} style={{ color: 'inherit', textDecoration: 'none' }}>
              {personalData.phone}
            </a>
          </div>
        </div>

        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">
            View Projects
          </a>
          <a href={`mailto:${personalData.email}`} className="btn btn-secondary">
            Get In Touch
          </a>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section">
        <h2 className="section-title">Work Experience</h2>
        <div className="timeline">
          {experienceData.map((exp, idx) => (
            <div key={idx} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="glass-card">
                <div className="timeline-header">
                  <div>
                    <h3 className="timeline-role">{exp.role}</h3>
                    <span className="timeline-company">{exp.company}</span>
                  </div>
                  <span className="timeline-period">{exp.period}</span>
                </div>
                <div className="timeline-body">
                  <ul>
                    {exp.contributions.map((bullet, bIdx) => (
                      <li key={bIdx}>{bullet}</li>
                    ))}
                  </ul>
                </div>
                <div className="tech-tags">
                  {exp.technologies.map((tech, tIdx) => (
                    <span key={tIdx} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="section">
        <h2 className="section-title">Education</h2>
        <div className="grid-2">
          {educationData.map((edu, idx) => (
            <div key={idx} className="glass-card" style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
              <div style={{ padding: '0.75rem', borderRadius: '12px', background: 'rgba(14, 165, 233, 0.1)', color: 'var(--primary)' }}>
                <GraduationCap size={28} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.25rem' }}>{edu.institution}</h3>
                <p style={{ color: 'var(--primary)', fontWeight: '500', fontSize: '0.95rem', marginBottom: '0.5rem' }}>
                  {edu.degree}
                </p>
                <span style={{ fontFamily: 'var(--mono)', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  {edu.period}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <h2 className="section-title">Featured Projects</h2>
        <div className="grid-2">
          {projectsData.map((project, idx) => (
            <div key={idx} className="glass-card project-card">
              <div className="project-header">
                <h3 className="project-title">{project.title}</h3>
                <div className="project-links">
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="project-link"
                      aria-label="GitHub Repository"
                    >
                      <Github size={20} />
                    </a>
                  )}
                </div>
              </div>
              <p className="project-desc">{project.description}</p>
              {project.contributions && project.contributions.length > 0 && (
                <ul style={{ listStyle: 'none', paddingLeft: 0, marginBottom: '1.5rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                  {project.contributions.map((c, cIdx) => (
                    <li key={cIdx} style={{ position: 'relative', paddingLeft: '1.25rem', marginBottom: '0.4rem' }}>
                      <span style={{ color: 'var(--primary)', position: 'absolute', left: 0 }}>•</span>
                      {c}
                    </li>
                  ))}
                </ul>
              )}
              <div className="tech-tags" style={{ marginTop: 'auto' }}>
                {project.technologies.map((tech, tIdx) => (
                  <span key={tIdx} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section">
        <h2 className="section-title">Skills &amp; Expertise</h2>
        <div className="skills-container">
          {Object.entries(skillsData).map(([category, items], idx) => (
            <div key={idx} className="glass-card" style={{ padding: '1.5rem' }}>
              <h3 className="skill-category-title">
                {getSkillIcon(category)}
                {category}
              </h3>
              <div className="skills-list">
                {items.map((skill, sIdx) => (
                  <span key={sIdx} className="skill-item">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="section">
        <h2 className="section-title">Certifications</h2>
        <div className="grid-3">
          {certificatesData.map((cert, idx) => (
            <div key={idx} className="glass-card cert-card">
              <div className="cert-info">
                <h3>{cert.title}</h3>
                <p>{cert.issuer}</p>
              </div>
              <a 
                href={cert.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="project-link"
                style={{ color: 'var(--primary)' }}
                aria-label={`View Certificate for ${cert.title}`}
              >
                <ExternalLink size={18} />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Footer / Social Links */}
      <footer className="footer">
        <div className="footer-socials">
          <a 
            href={personalData.github} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="footer-social-link"
            aria-label="GitHub"
          >
            <Github size={22} />
          </a>
          <a 
            href={personalData.linkedin} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="footer-social-link"
            aria-label="LinkedIn"
          >
            <Linkedin size={22} />
          </a>
          <a 
            href={`mailto:${personalData.email}`} 
            className="footer-social-link"
            aria-label="Email"
          >
            <Mail size={22} />
          </a>
        </div>
        <p className="footer-text">
          &copy; {new Date().getFullYear()} {personalData.name}. All rights reserved.
        </p>
      </footer>
    </>
  );
}

export default App;
