import React from 'react';
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
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
      </div>

      <div className="container">
        <div className="hero-content">
          <div className="hero-text fade-in-up">
            <div className="hero-label">
              <span className="pulse-dot"></span>
              Available for hire
            </div>
            <h1 className="hero-title">
              Hi, I'm <span className="gradient-text">Donald Rastetter</span>
            </h1>
            <h2 className="hero-subtitle">
              AI Engineer & Game Developer
            </h2>
            <p className="hero-description">
              Passionate about building intelligent systems and immersive experiences.
              Specializing in Python, Machine Learning, and Game Development with a proven
              track record in operations leadership and technical innovation.
            </p>

            <div className="hero-cta">
              <button className="btn-primary" onClick={scrollToContact}>
                Let's Connect
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <a href="#projects" className="btn-secondary">
                View My Work
              </a>
            </div>

            <div className="hero-stats">
              <div className="stat">
                <h3>10+</h3>
                <p>Years Experience</p>
              </div>
              <div className="stat">
                <h3>Python</h3>
                <p>PCEP Certified</p>
              </div>
              <div className="stat">
                <h3>AI/ML</h3>
                <p>In Progress</p>
              </div>
            </div>
          </div>

          <div className="hero-visual slide-in-right">
            <div className="floating-card card-1">
              <div className="card-icon">🐍</div>
              <div className="card-text">
                <div className="card-title">Python</div>
                <div className="card-badge">PCEP Certified</div>
              </div>
            </div>
            <div className="floating-card card-2">
              <div className="card-icon">🤖</div>
              <div className="card-text">
                <div className="card-title">AI/ML</div>
                <div className="card-badge">UT Dallas</div>
              </div>
            </div>
            <div className="floating-card card-3">
              <div className="card-icon">🎮</div>
              <div className="card-text">
                <div className="card-title">Unity</div>
                <div className="card-badge">Game Dev</div>
              </div>
            </div>
            <div className="hero-image">
              <div className="image-placeholder">
                <div className="code-lines">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;