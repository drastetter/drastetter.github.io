import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: 'Functional Manager – Contact Center',
      company: 'Nelnet',
      location: 'Lincoln, NE / Plano, TX',
      period: 'October 2019 – June 2025',
      highlights: [
        'Led project management for infrastructure improvements across IT and Training departments',
        'Launched mentor-driven leadership programs; increased team engagement and succession readiness',
        'Achieved #1 team ranking across performance metrics within 1 year',
        'Managed 12–15 supervisors and up to 250 team members during remote transformation',
        'Improved service levels through process audits, root cause analysis, and cross-functional collaboration'
      ],
      icon: '💼',
      color: 'teal'
    },
    {
      title: 'Supervisor – Inbound/Outbound',
      company: 'Nelnet',
      location: 'Lincoln, NE',
      period: 'August 2015 – October 2019',
      highlights: [
        'Scaled outbound operations with 275% growth and maintained 100% client satisfaction',
        'Designed compliance-driven training and reporting for client platforms',
        'Created team-specific dashboards using Excel and internal tools to monitor KPIs',
        'Handled forecasting, staffing, and budgeting for growing teams'
      ],
      icon: '📊',
      color: 'blue'
    },
    {
      title: 'Customer Care Representative / Team Lead',
      company: 'Nelnet',
      location: 'Lincoln, NE',
      period: 'February 2013 – August 2015',
      highlights: [
        'Provided exceptional customer service and technical support',
        'Mentored new team members and assisted with training initiatives',
        'Consistently exceeded performance targets and KPIs'
      ],
      icon: '🎯',
      color: 'purple'
    },
    {
      title: 'Student Manager / Salesperson',
      company: 'The Southwestern Company',
      location: 'Nashville, TN',
      period: 'May 2009 – February 2011',
      highlights: [
        'Recruited, trained, and motivated salespeople for direct sales',
        'Prospected and approached over 3,000 families from various socio-economic levels',
        'Achieved personal retail sales of $21,788.95',
        'Developed strong communication and leadership skills'
      ],
      icon: '📈',
      color: 'green'
    }
  ];

  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        <h2 className="section-title">Professional Experience</h2>
        <p className="section-subtitle">
          10+ years of leadership experience in operations management, team development, and strategic project execution
        </p>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className={`timeline-item ${exp.color}`}>
              <div className="timeline-marker">
                <div className="marker-icon">{exp.icon}</div>
                <div className="marker-line"></div>
              </div>

              <div className="timeline-content">
                <div className="exp-header">
                  <div>
                    <h3 className="exp-title">{exp.title}</h3>
                    <div className="exp-company">{exp.company}</div>
                  </div>
                  <div className="exp-meta">
                    <div className="exp-period">{exp.period}</div>
                    <div className="exp-location">{exp.location}</div>
                  </div>
                </div>

                <ul className="exp-highlights">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="experience-stats">
          <div className="stat-box">
            <div className="stat-number">10+</div>
            <div className="stat-label">Years Experience</div>
          </div>
          <div className="stat-box">
            <div className="stat-number">250+</div>
            <div className="stat-label">Team Members Led</div>
          </div>
          <div className="stat-box">
            <div className="stat-number">275%</div>
            <div className="stat-label">Growth Achieved</div>
          </div>
          <div className="stat-box">
            <div className="stat-number">#1</div>
            <div className="stat-label">Team Ranking</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;