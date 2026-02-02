import React from 'react';
import './Skills.css';

const Skills = () => {
  const certifications = [
    {
      title: 'Python PCEP',
      organization: 'Python Institute',
      status: 'Certified',
      icon: '🏆',
      color: 'teal',
      description: 'Certified Entry-Level Python Programmer'
    },
    {
      title: 'AI/Machine Learning',
      organization: 'Fullstack Academy & UT Dallas',
      status: 'In Progress',
      icon: '🎓',
      color: 'blue',
      description: 'Advanced AI/ML Certificate Program'
    }
  ];

  const technicalSkills = [
    {
      category: 'Programming Languages',
      skills: [
        { name: 'Python', level: 90, icon: '🐍' },
        { name: 'JavaScript', level: 85, icon: '⚡' },
        { name: 'SQL', level: 80, icon: '🗄️' },
        { name: 'C#', level: 60, icon: '⚙️' }
      ]
    },
    {
      category: 'AI & Machine Learning',
      skills: [
        { name: 'Machine Learning', level: 75, icon: '🤖' },
        { name: 'Data Analysis', level: 85, icon: '📊' },
        { name: 'Neural Networks', level: 70, icon: '🧠' },
        { name: 'NLP', level: 65, icon: '💬' }
      ]
    },
    {
      category: 'Game Development',
      skills: [
        { name: 'Unity', level: 65, icon: '🎮' },
        { name: 'Game Design', level: 70, icon: '🎨' },
        { name: '3D Modeling', level: 55, icon: '🔷' },
        { name: 'Physics Systems', level: 60, icon: '⚛️' }
      ]
    },
    {
      category: 'Tools & Platforms',
      skills: [
        { name: 'Salesforce', level: 85, icon: '☁️' },
        { name: 'Power BI', level: 80, icon: '📈' },
        { name: 'Git', level: 85, icon: '🔧' },
        { name: 'Workday', level: 75, icon: '💼' }
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