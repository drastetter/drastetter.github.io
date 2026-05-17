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
                I'm an operations-driven AI engineer who blends large-scale team leadership with modern AI, automation, and digital delivery.
                Over the last decade, I've led transformation projects with 250+ team members while building systems that improve reliability and outcomes.
              </p>
              <p>
                My background includes scaling contact center operations, creating KPI-driven dashboards, and leading cross-functional initiatives
                across IT, training, and client delivery. I bring a practical mindset that connects operational excellence with technical execution.
              </p>
              <p>
                I completed the Fullstack Academy + UT Dallas AI & Machine Learning program in March 2026 and continue to deliver customer-facing
                products such as the Auravé Skin Ritual website while supporting high-availability automated vehicle operations at TaskUs.
              </p>
            </div>

            <div className="about-highlights">
              <div className="highlight-item">
                <div className="highlight-icon">🎯</div>
                <div className="highlight-content">
                  <h4>Operations Leadership</h4>
                  <p>Scaling teams, defining workflows, and driving service delivery across large organizations.</p>
                </div>
              </div>
              <div className="highlight-item">
                <div className="highlight-icon">🤖</div>
                <div className="highlight-content">
                  <h4>AI & Automation</h4>
                  <p>Applying machine learning, NLP, and automation to improve performance and customer experience.</p>
                </div>
              </div>
              <div className="highlight-item">
                <div className="highlight-icon">🌿</div>
                <div className="highlight-content">
                  <h4>Product Delivery</h4>
                  <p>Launching digital products and websites with a strong focus on customer experience.</p>
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
                  <span className="edu-status">Completed Mar 2026</span>
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