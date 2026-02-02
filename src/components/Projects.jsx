import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'AI-Powered Analytics Dashboard',
      description: 'Developed a comprehensive analytics platform using Python and machine learning algorithms to predict customer behavior and optimize service delivery. Integrated with Salesforce for real-time data visualization.',
      tech: ['Python', 'Machine Learning', 'Salesforce', 'Power BI'],
      category: 'AI/ML',
      icon: '🤖',
      color: 'teal'
    },
    {
      title: 'Unity 3D Game Prototype',
      description: 'Created an immersive 3D game experience using Unity and C#. Implemented physics-based gameplay mechanics, AI behavior systems, and procedural level generation.',
      tech: ['Unity', 'C#', '3D Modeling', 'Game Design'],
      category: 'Game Development',
      icon: '🎮',
      color: 'purple'
    },
    {
      title: 'Automated KPI Monitoring System',
      description: 'Built a custom monitoring and reporting system to track team performance metrics across 250+ team members. Reduced manual reporting time by 80% through automation.',
      tech: ['Python', 'SQL', 'Excel VBA', 'Data Visualization'],
      category: 'Automation',
      icon: '📊',
      color: 'blue'
    },
    {
      title: 'Natural Language Processing Chatbot',
      description: 'Developed an intelligent chatbot using NLP techniques to handle customer inquiries. Achieved 85% accuracy in intent classification and reduced response time by 60%.',
      tech: ['Python', 'NLP', 'TensorFlow', 'API Integration'],
      category: 'AI/ML',
      icon: '💬',
      color: 'green'
    },
    {
      title: 'Process Optimization Toolkit',
      description: 'Created a suite of tools for workflow automation and process improvement. Streamlined cross-functional operations and improved efficiency by 45%.',
      tech: ['Python', 'JavaScript', 'APIs', 'Database Design'],
      category: 'Development',
      icon: '⚙️',
      color: 'orange'
    },
    {
      title: 'Data-Driven Leadership Dashboard',
      description: 'Designed and implemented an executive dashboard for real-time team performance tracking, predictive analytics, and resource allocation optimization.',
      tech: ['Power BI', 'SQL', 'Python', 'Excel'],
      category: 'Data Analytics',
      icon: '📈',
      color: 'red'
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