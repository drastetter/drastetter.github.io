import React from 'react';
import { FiBarChart2, FiBriefcase, FiGitMerge } from 'react-icons/fi';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: 'Operational Manager',
      company: 'TaskUs',
      location: 'Dallas, TX',
      period: 'Oct 2025 - Present',
      highlights: [
        'Scaled an operations team from 8 to 40+ members while defining workflows, performance standards, and team structure.',
        'Used KPI tracking and real-time monitoring to exceed month-over-month targets and improve issue resolution for automated vehicle systems.',
        'Led high-availability support operations, minimizing downtime and accelerating recovery through structured escalation paths.',
        'Mentored frontline leaders and partnered with technical stakeholders to align operations with evolving system needs.'
      ],
      icon: FiGitMerge,
      tone: 'cyan'
    },
    {
      title: 'Functional Manager',
      company: 'Nelnet',
      location: 'Plano, TX',
      period: 'Oct 2019 - Jun 2025',
      highlights: [
        'Led operations for up to 250 employees and 12-15 supervisors during a large remote transformation.',
        'Drove cross-functional projects with IT and Training, improving service levels through data analysis and KPI tracking.',
        'Achieved the #1 team ranking across performance metrics within one year.',
        'Created leadership training and mentorship programs to boost engagement and internal promotion readiness.'
      ],
      icon: FiBriefcase,
      tone: 'blue'
    },
    {
      title: 'Supervisor - Inbound/Outbound Operations',
      company: 'Nelnet',
      location: 'Plano, TX',
      period: 'Aug 2015 - Oct 2019',
      highlights: [
        'Scaled outbound operations by 275% while maintaining 100% client satisfaction.',
        'Built KPI dashboards in Excel and managed forecasting, staffing, and budgeting for operational efficiency.',
        'Designed compliance-driven reporting, training programs, and performance monitoring tools.',
        'Led day-to-day team execution with strong emphasis on quality, speed, and client outcomes.'
      ],
      icon: FiBarChart2,
      tone: 'green'
    }
  ];

  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        <h2 className="section-title">Professional Experience</h2>
        <p className="section-subtitle">
          A track record of large-scale operations leadership, technical enablement, and measurable performance improvement.
        </p>

        <div className="timeline">
          {experiences.map((exp) => {
            const Icon = exp.icon;
            return (
              <article key={`${exp.company}-${exp.title}`} className={`timeline-item ${exp.tone}`}>
                <div className="timeline-marker">
                  <div className="marker-icon"><Icon aria-hidden="true" /></div>
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
                    {exp.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
