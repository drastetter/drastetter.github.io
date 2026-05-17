import React from 'react';
import { FiActivity, FiBarChart2, FiExternalLink, FiMessageSquare, FiZap } from 'react-icons/fi';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Aurave Skin Ritual Website',
      description: 'Launched a customer-facing website using agentic AI workflows for content, UX, and CRM-ready customer experience planning.',
      tech: ['Agentic AI', 'Web Design', 'CRM Strategy', 'Customer Experience'],
      category: 'Website Launch',
      icon: FiZap,
      tone: 'green',
      link: 'https://auraveskinritual.com/'
    },
    {
      title: 'Automated KPI Monitoring System',
      description: 'Built a monitoring and reporting framework to track team performance, surface trends, and automate leadership reporting.',
      tech: ['Python', 'SQL', 'Excel', 'Data Visualization'],
      category: 'Operational Analytics',
      icon: FiBarChart2,
      tone: 'cyan'
    },
    {
      title: 'AI-Powered Analytics Dashboard',
      description: 'Developed analytics workflows using machine learning concepts to identify service delivery patterns and optimization opportunities.',
      tech: ['Python', 'TensorFlow', 'Power BI', 'Machine Learning'],
      category: 'AI/ML',
      icon: FiActivity,
      tone: 'blue'
    },
    {
      title: 'NLP Chatbot & Automation',
      description: 'Designed an NLP automation concept for customer inquiry handling, response quality, and reduced manual operational effort.',
      tech: ['Python', 'NLP', 'TensorFlow', 'API Integration'],
      category: 'Automation',
      icon: FiMessageSquare,
      tone: 'violet'
    }
  ];

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">
          Selected work showing the overlap of AI engineering, operational analytics, automation, and customer-facing product delivery.
        </p>

        <div className="projects-grid">
          {projects.map((project) => {
            const Icon = project.icon;
            return (
              <article key={project.title} className={`project-card ${project.tone}`}>
                <div className="project-icon"><Icon aria-hidden="true" /></div>

                <div className="project-content">
                  <div className="project-category">{project.category}</div>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>

                  <div className="project-tech">
                    {project.tech.map((tech) => (
                      <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      View Project
                      <FiExternalLink aria-hidden="true" />
                    </a>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
