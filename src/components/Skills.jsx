import React from 'react';
import { FiActivity, FiAward, FiBarChart2, FiBookOpen, FiCode, FiDatabase, FiGitBranch, FiTrendingUp, FiUsers, FiZap } from 'react-icons/fi';
import './Skills.css';

const Skills = () => {
  const certifications = [
    {
      title: 'PCEP Certified',
      organization: 'Python Institute',
      status: 'Completed Jun 2025',
      icon: FiAward,
      tone: 'cyan',
      description: 'Certified Entry-Level Python Programmer (PCEP-30-02)'
    },
    {
      title: 'AI/Machine Learning Certificate',
      organization: 'Fullstack Academy & UT Dallas',
      status: 'Completed Mar 2026',
      icon: FiBookOpen,
      tone: 'blue',
      description: 'Immersive AI/ML program covering TensorFlow, Keras, NLP, and model deployment workflows'
    }
  ];

  const skillGroups = [
    {
      category: 'AI & Machine Learning',
      icon: FiActivity,
      skills: ['TensorFlow', 'Keras', 'PyTorch', 'NLP & LLMs', 'Model Evaluation']
    },
    {
      category: 'Data & Automation',
      icon: FiDatabase,
      skills: ['Python', 'SQL', 'Power BI', 'Excel Automation', 'Reporting Pipelines']
    },
    {
      category: 'Operations Systems',
      icon: FiTrendingUp,
      skills: ['KPI Management', 'Forecasting', 'Root Cause Analysis', 'Process Design', 'Service Reliability']
    },
    {
      category: 'Web & Product Delivery',
      icon: FiCode,
      skills: ['React', 'JavaScript', 'HTML/CSS', 'CRM Strategy', 'Customer Experience']
    }
  ];

  const competencies = [
    { label: 'Team Leadership', icon: FiUsers },
    { label: 'Process Optimization', icon: FiZap },
    { label: 'Performance Analytics', icon: FiBarChart2 },
    { label: 'Version Control', icon: FiGitBranch }
  ];

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <h2 className="section-title">Skills & Certifications</h2>

        <div className="certifications-grid">
          {certifications.map((cert) => {
            const Icon = cert.icon;
            return (
              <article key={cert.title} className={`certification-card ${cert.tone}`}>
                <div className="cert-icon"><Icon aria-hidden="true" /></div>
                <div className="cert-content">
                  <div className="cert-status">{cert.status}</div>
                  <h3 className="cert-title">{cert.title}</h3>
                  <p className="cert-org">{cert.organization}</p>
                  <p className="cert-desc">{cert.description}</p>
                </div>
              </article>
            );
          })}
        </div>

        <div className="skills-grid">
          {skillGroups.map((group) => {
            const Icon = group.icon;
            return (
              <article key={group.category} className="skill-category">
                <div className="category-heading">
                  <Icon aria-hidden="true" />
                  <h3 className="category-title">{group.category}</h3>
                </div>
                <div className="skills-list">
                  {group.skills.map((skill) => (
                    <span key={skill} className="skill-chip">{skill}</span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>

        <div className="skills-summary">
          {competencies.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.label} className="competency-tile">
                <Icon aria-hidden="true" />
                <span>{item.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
