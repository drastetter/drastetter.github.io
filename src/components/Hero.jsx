import React from 'react';
import { FiCpu, FiCode, FiDatabase, FiExternalLink, FiFileText, FiZap } from 'react-icons/fi';
import './Hero.css';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-background">
        <div className="grid-pattern"></div>
      </div>

      <div className="container">
        <div className="hero-content">
          <div className="hero-text fade-in-up">
            <div className="hero-label">
              <span className="pulse-dot"></span>
              Available for AI, Automation, and Operations roles
            </div>
            <h1 className="hero-title">
              Donald Rastetter builds <span className="gradient-text">AI-enabled operations</span>.
            </h1>
            <h2 className="hero-subtitle">AI Engineer & Operations Leader</h2>
            <p className="hero-description">
              I build practical AI, automation, and analytics systems from a decade of high-scale operations leadership.
              My work connects technical delivery with measurable improvements in reliability, performance, and customer experience.
            </p>

            <div className="hero-cta">
              <button className="btn-primary" onClick={scrollToContact}>
                Let's Connect
                <FiExternalLink aria-hidden="true" />
              </button>
              <a href="/resume.pdf" className="btn-secondary" target="_blank" rel="noopener noreferrer">
                <FiFileText aria-hidden="true" />
                View Resume
              </a>
            </div>

            <div className="hero-stats" aria-label="Career highlights">
              <div className="stat">
                <h3>10+</h3>
                <p>Years Experience</p>
              </div>
              <div className="stat">
                <h3>250+</h3>
                <p>Team Members Led</p>
              </div>
              <div className="stat">
                <h3>PCEP</h3>
                <p>Python Certified</p>
              </div>
            </div>
          </div>

          <div className="hero-visual slide-in-right" aria-label="Technical capability visual">
            <div className="visual-stack">
              <div className="system-panel">
                <div className="panel-header">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <div className="panel-grid">
                  <div className="panel-node node-primary">
                    <FiCpu aria-hidden="true" />
                    <span>AI/ML</span>
                  </div>
                  <div className="panel-node">
                    <FiCode aria-hidden="true" />
                    <span>Python</span>
                  </div>
                  <div className="panel-node">
                    <FiDatabase aria-hidden="true" />
                    <span>Analytics</span>
                  </div>
                  <div className="panel-node">
                    <FiZap aria-hidden="true" />
                    <span>Automation</span>
                  </div>
                </div>
                <div className="signal-map">
                  <div className="signal-line"></div>
                  <div className="signal-line short"></div>
                  <div className="signal-line mid"></div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      <div className="scroll-indicator" aria-hidden="true">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
