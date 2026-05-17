import React from 'react';
import './Skills.css';

const Skills = () => {
  const certifications = [
    {
      title: 'PCEP™ Certified',
      organization: 'Python Institute',
      status: 'Completed Jun 2025',
      icon: '🏆',
      color: 'teal',
      description: 'Certified Entry-Level Python Programmer (PCEP-30-02)'
    },
    {
      title: 'AI/Machine Learning Certificate',
      organization: 'Fullstack Academy & UT Dallas',
      status: 'Completed Mar 2026',
      icon: '🎓',
      color: 'blue',
      description: 'Immersive AI/ML program with TensorFlow, Keras, and NLP coursework'
    }
  ];

  const technicalSkills = [
    {
      category: 'Operations & Leadership',
      skills: [
        { name: 'Team Leadership', level: 90, icon: '👥' },
        { name: 'KPI Management', level: 90, icon: '📈' },
        { name: 'Forecasting', level: 85, icon: '🧮' },
        { name: 'Process Optimization', level: 88, icon: '⚙️' }
      ]
    },
    {
      category: 'AI & Machine Learning',
      skills: [
        { name: 'TensorFlow', level: 80, icon: '🧠' },
        { name: 'Keras', level: 80, icon: '🔧' },
        { name: 'PyTorch', level: 75, icon: '🔥' },
        { name: 'NLP & LLMs', level: 75, icon: '💬' }
      ]
    },
    {
      category: 'Data & Automation',
      skills: [
        { name: 'Python', level: 92, icon: '🐍' },
        { name: 'SQL', level: 85, icon: '🗄️' },
        { name: 'Power BI', level: 80, icon: '📊' },
        { name: 'Git', level: 88, icon: '🔧' }
      ]
    },
    {
      category: 'Web & Product',
      skills: [
        { name: 'HTML/CSS', level: 80, icon: '🌐' },
        { name: 'JavaScript', level: 80, icon: '⚡' },
        { name: 'Agentic AI', level: 75, icon: '🤖' },
        { name: 'CRM Integration', level: 78, icon: '🔗' }
      ]
    }
  ];

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <h2 className="section-title">Skills & Certifications</h2>

        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <div key={index} className={`certification-card ${cert.color}`}>
              <div className="cert-icon">{cert.icon}</div>
              <div className="cert-content">
                <div className="cert-status">{cert.status}</div>
                <h3 className="cert-title">{cert.title}</h3>
                <p className="cert-org">{cert.organization}</p>
                <p className="cert-desc">{cert.description}</p>
              </div>
              <div className="cert-glow"></div>
            </div>
          ))}
        </div>

        <div className="skills-grid">
          {technicalSkills.map((category, index) => (
            <div key={index} className="skill-category">
              <h3 className="category-title">{category.category}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-header">
                      <div className="skill-name">
                        <span className="skill-icon">{skill.icon}</span>
                        {skill.name}
                      </div>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className="skill-progress"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="skills-summary">
          <div className="summary-card">
            <h3>Core Competencies</h3>
            <div className="competency-tags">
              <span>Strategic Operations</span>
              <span>AI Engineering</span>
              <span>Game Development</span>
              <span>Data Analytics</span>
              <span>Team Leadership</span>
              <span>Process Optimization</span>
              <span>Cross-functional Collaboration</span>
              <span>Project Management</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;