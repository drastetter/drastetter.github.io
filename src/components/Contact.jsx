import React from 'react';
import { FiGithub, FiLinkedin, FiMail, FiMapPin, FiPhone } from 'react-icons/fi';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <h2 className="section-title">Let's Connect</h2>
        <p className="section-subtitle">
          Open to AI engineering, automation, analytics, and operations technology roles.
        </p>

        <div className="contact-content">
          <a className="info-card" href="mailto:donaldrastetter@yahoo.com">
            <div className="info-icon"><FiMail aria-hidden="true" /></div>
            <h3>Email</h3>
            <span>donaldrastetter@yahoo.com</span>
          </a>

          <a className="info-card" href="tel:+14024172605">
            <div className="info-icon"><FiPhone aria-hidden="true" /></div>
            <h3>Phone</h3>
            <span>402.417.2605</span>
          </a>

          <div className="info-card">
            <div className="info-icon"><FiMapPin aria-hidden="true" /></div>
            <h3>Location</h3>
            <span>Plano, TX 75025</span>
          </div>
        </div>

        <div className="social-links">
          <a href="https://linkedin.com/in/donald-rastetter" target="_blank" rel="noopener noreferrer" className="social-icon linkedin" aria-label="LinkedIn">
            <FiLinkedin aria-hidden="true" />
          </a>
          <a href="https://github.com/drastetter" target="_blank" rel="noopener noreferrer" className="social-icon github" aria-label="GitHub">
            <FiGithub aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
