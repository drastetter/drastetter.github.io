import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="logo-text">DR</span>
              <span className="logo-dot">.</span>
            </div>
            <p className="footer-tagline">
              Operations-driven AI engineering and digital product delivery
            </p>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h4>Navigation</h4>
              <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#projects">Projects</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Contact</h4>
              <ul>
                <li><a href="mailto:donaldrastetter@yahoo.com">Email</a></li>
                <li><a href="tel:+14024172605">Phone</a></li>
                <li><a href="#contact">Get in Touch</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Certifications</h4>
              <ul>
                <li>Python PCEP Certified</li>
                <li>AI/ML Certificate Completed Mar 2026</li>
                <li>Fullstack Academy + UT Dallas</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-social">
          <a href="https://linkedin.com/in/donald-rastetter" target="_blank" rel="noopener noreferrer" className="social-link">
            LinkedIn
          </a>
          <a href="https://github.com/drastetter" target="_blank" rel="noopener noreferrer" className="social-link">
            GitHub
          </a>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Donald Rastetter. All rights reserved.</p>
          <p className="footer-credit">
            Built with React, Vite, and modern web standards
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;