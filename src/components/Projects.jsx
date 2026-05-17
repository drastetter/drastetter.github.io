import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Auravé Skin Ritual Website',
      description: 'Launched the Auravé Skin Ritual website using Agentic AI workflows to create content, UX, and customer experience for a luxury facial boutique.',
      tech: ['Agentic AI', 'Web Design', 'CRM Strategy', 'Customer Experience'],
      category: 'Website Launch',
      icon: '🌿',
      color: 'green',
      link: 'https://auraveskinritual.com/'
    },
    {
      title: 'Automated KPI Monitoring System',
      description: 'Built a custom monitoring and reporting platform to track performance across 250+ team members and automate reporting for leadership.',
      tech: ['Python', 'SQL', 'Excel', 'Data Visualization'],
      category: 'Operational Analytics',
      icon: '📊',
      color: 'teal'
    },
    {
      title: 'AI-Powered Analytics Dashboard',
      description: 'Developed an analytics platform using machine learning models to surface trends and optimize service delivery for operations teams.',
      tech: ['Python', 'TensorFlow', 'Power BI', 'Machine Learning'],
      category: 'AI/ML',
      icon: '🤖',
      color: 'blue'
    },
    {
      title: 'NLP Chatbot & Automation',
      description: 'Deployed an intelligent NLP solution to automate customer inquiry handling and improve response quality while reducing manual effort.',
      tech: ['Python', 'NLP', 'TensorFlow', 'API Integration'],
      category: 'Automation',
      icon: '💬',
      color: 'purple'
    }
  ];

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">
          A showcase of technical projects demonstrating expertise in AI, game development, and data-driven solutions
        </p>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className={`project-card ${project.color}`}>
              <div className="project-icon">{project.icon}</div>

              <div className="project-content">
                <div className="project-category">{project.category}</div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-tech">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
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
                  </a>
                )}
              </div>

              <div className="project-overlay"></div>
            </div>
          ))}
        </div>

        <div className="projects-cta">
          <h3>Interested in collaboration?</h3>
          <p>I'm always open to discussing new projects and opportunities</p>
          <a href="#contact" className="cta-button">
            Get in Touch
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;