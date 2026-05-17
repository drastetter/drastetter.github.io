import React from 'react';
import { FiActivity, FiBookOpen, FiCpu, FiPieChart, FiSend, FiUsers } from 'react-icons/fi';
import './About.css';

const About = () => {
  const highlights = [
    {
      icon: FiUsers,
      title: 'Operations Leadership',
      description: 'Scaled teams, defined workflows, and led performance systems across large service organizations.'
    },
    {
      icon: FiActivity,
      title: 'AI & Automation',
      description: 'Applied machine learning, NLP, and automation to improve operational speed and decision quality.'
    },
    {
      icon: FiSend,
      title: 'Product Delivery',
      description: 'Launched customer-facing digital experiences with a practical focus on usability and outcomes.'
    }
  ];

  const stats = [
    ['10+', 'Years Leading Teams'],
    ['250+', 'Team Members Managed'],
    ['275%', 'Operations Growth'],
    ['#1', 'Team Performance Rank']
  ];

  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title">About Me</h2>
            <div className="about-description">
              <p>
                I'm an operations-driven AI engineer who blends large-scale leadership with modern automation, analytics, and web delivery.
                Over the last decade, I've led transformation projects with 250+ team members while building systems that improve reliability and outcomes.
              </p>
              <p>
                My background includes contact center operations, KPI dashboards, cross-functional delivery, and technical enablement across IT,
                training, and client-facing teams. I bring a practical engineering mindset to real operational problems.
              </p>
              <p>
                I completed the Fullstack Academy + UT Dallas AI & Machine Learning program in March 2026 and continue delivering digital products,
                including the Aurave Skin Ritual website and automation workflows for high-availability operations.
              </p>
            </div>

            <div className="about-highlights">
              {highlights.map((item) => {
                const Icon = item.icon;
                return (
                  <article key={item.title} className="highlight-item">
                    <div className="highlight-icon"><Icon aria-hidden="true" /></div>
                    <div className="highlight-content">
                      <h4>{item.title}</h4>
                      <p>{item.description}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          <aside className="about-visual" aria-label="Resume summary">
            <div className="stats-card">
              <h3>Impact Snapshot</h3>
              <div className="stat-grid">
                {stats.map(([value, label]) => (
                  <div key={label} className="stat-item">
                    <div className="stat-value">{value}</div>
                    <div className="stat-label">{label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="education-card">
              <h3>Education</h3>
              <div className="education-item">
                <div className="edu-icon"><FiBookOpen aria-hidden="true" /></div>
                <div className="edu-content">
                  <h4>AI/Machine Learning Certificate</h4>
                  <p>Fullstack Academy & UT Dallas</p>
                  <span className="edu-status">Completed Mar 2026</span>
                </div>
              </div>
              <div className="education-item">
                <div className="edu-icon"><FiPieChart aria-hidden="true" /></div>
                <div className="edu-content">
                  <h4>Business Administration</h4>
                  <p>University of Nebraska-Lincoln</p>
                  <span className="edu-status">2008 - 2013</span>
                </div>
              </div>
              <div className="education-item">
                <div className="edu-icon"><FiCpu aria-hidden="true" /></div>
                <div className="edu-content">
                  <h4>Current Focus</h4>
                  <p>AI operations, automation, and analytics engineering</p>
                  <span className="edu-status">Applied Delivery</span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default About;
