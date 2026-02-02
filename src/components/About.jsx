import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title" style={{ textAlign: 'left' }}>
              About Me
            </h2>
            <div className="about-description">
              <p>
                I'm a versatile professional with a unique blend of operations leadership
                and technical expertise. With over 10 years of experience leading high-performing
                teams, I'm now channeling my passion for technology into AI Engineering and
                Game Development.
              </p>
              <p>
                My journey from managing 250+ team members at Nelnet to pursuing advanced
                certifications in Python and AI/Machine Learning demonstrates my commitment
                to continuous growth and technical excellence. I bring a strategic mindset,
                proven leadership skills, and a deep enthusiasm for building intelligent systems.
              </p>
              <p>
                Currently pursuing an AI/Machine Learning Certificate from Fullstack Academy
                and the University of Texas at Dallas, I'm excited to apply my technical skills
                and operational expertise to innovative projects in AI and game development.
              </p>
            </div>

            <div className="about-highlights">
              <div className="highlight-item">
                <div className="highlight-icon">🎯</div>
                <div className="highlight-content">
                  <h4>Mission-Driven</h4>
                  <p>Passionate about creating technology that makes a difference</p>
                </div>
              </div>
              <div className="highlight-item">
                <div className="highlight-icon">🚀</div>
                <div className="highlight-content">
                  <h4>Innovation Focused</h4>
                  <p>Always exploring new technologies and methodologies</p>
                </div>
              </div>
              <div className="highlight-item">
                <div className="highlight-icon">🤝</div>
                <div className="highlight-content">
                  <h4>Team Player</h4>
                  <p>Proven track record of cross-functional collaboration</p>
                </div>
              </div>
            </div>
          </div>

          <div className="about-visual">
            <div className="stats-card">
              <h3>Quick Stats</h3>
              <div className="stat-grid">
                <div className="stat-item">
                  <div className="stat-value">10+</div>
                  <div className="stat-label">Years Leading Teams</div>
                </div>
                <div className="stat-item">
                  <div className="stat-value">250+</div>
                  <div className="stat-label">Team Members Managed</div>
                </div>
                <div className="stat-item">
                  <div className="stat-value">275%</div>
                  <div className="stat-label">Operations Growth</div>
                </div>
                <div className="stat-item">
                  <div className="stat-value">#1</div>
                  <div className="stat-label">Team Performance Rank</div>
                </div>
              </div>
            </div>

            <div className="education-card">
              <h3>Education</h3>
              <div className="education-item">
                <div className="edu-icon">🎓</div>
                <div className="edu-content">
                  <h4>AI/Machine Learning Certificate</h4>
                  <p>Fullstack Academy & UT Dallas</p>
                  <span className="edu-status">In Progress - 2026</span>
                </div>
              </div>
              <div className="education-item">
                <div className="edu-icon">📚</div>
                <div className="edu-content">
                  <h4>Business Administration</h4>
                  <p>University of Nebraska-Lincoln</p>
                  <span className="edu-status">2008 - 2013</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;