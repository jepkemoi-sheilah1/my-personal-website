import React, { useState } from 'react';
import './Experience.css';

const Experience = () => {
  const [activeTab, setActiveTab] = useState('experience');

  const experiences = [
    {
      title: 'Junior Software Developer',
      subtitle: 'Systems & Business Analysis Support',
      company: 'Eclectics International',
      location: 'Nairobi, Kenya',
      period: 'Feb 2026 – Present',
      type: 'Full Time',
      color: '#0066ff',
      responsibilities: [
        'Collaborate with stakeholders to gather, analyze, and document business requirements into functional system features',
        'Support the Software Development Life Cycle (SDLC) including requirements analysis, development, testing, and deployment',
        'Conduct system documentation including workflows, functional specifications, and process descriptions',
        'Analyze and optimize business processes by identifying automation and efficiency opportunities within fintech systems',
      ]
    },
    {
      title: 'Software Developer Intern',
      subtitle: 'Systems Analysis & Requirements Support',
      company: 'Eclectics International',
      location: 'Nairobi, Kenya',
      period: 'Jul 2025 – Jan 2026',
      type: 'Internship',
      color: '#7c3aed',
      responsibilities: [
        'Identified business problems and gathered requirements through stakeholder engagement and research',
        'Translated requirements into user stories, functional specifications, and system features',
        'Participated in business process design and system modeling to support application development',
        'Contributed to SDLC activities including API testing, system design support, and documentation',
      ]
    },
    {
      title: 'Software Engineering Trainee',
      subtitle: 'Scrum Master / Team Lead',
      company: 'Moringa School',
      location: 'Nairobi, Kenya',
      period: 'Feb 2025 – Jul 2025',
      type: 'Training',
      color: '#059669',
      responsibilities: [
        'Led a development team using Agile (Scrum), managing sprint planning, task allocation, and delivery timelines',
        'Gathered and translated user requirements into user stories and functional specifications',
        'Designed and tested RESTful APIs, ensuring seamless integration between frontend and backend systems',
        'Used Jira and Trello for backlog management, workflow tracking, and team collaboration',
      ]
    },
    {
      title: 'IT Attachee',
      subtitle: 'Healthcare Information Systems',
      company: 'Social Health Authority (SHA)',
      location: 'Kenya',
      period: 'Aug 2022 – Nov 2022',
      type: 'Attachment',
      color: '#ea580c',
      responsibilities: [
        'Supported healthcare information systems and assisted users in resolving system issues',
        'Participated in system testing, maintenance, and troubleshooting',
        'Improved data accessibility and supported digital process enhancements',
      ]
    },
  ];

  const certifications = [
    {
      title: 'Google Business Data Analytics',
      issuer: 'Coursera',
      period: 'Ongoing',
      color: '#0066ff',
      description: 'Building expertise in data analytics lifecycle including data collection, cleaning, analysis, and interpretation. Applying analytical thinking to identify trends and support business decision-making.',
    },
    {
      title: 'Generative AI & Prompt Engineering',
      issuer: 'Moringa Virtual Training',
      period: 'Feb 2026',
      color: '#7c3aed',
      description: 'Applied AI tools to optimize daily workflows, reduce time on repetitive tasks, and accelerate development processes through AI-assisted debugging and problem-solving.',
    },
    {
      title: 'ALX Professional Foundations Program',
      issuer: 'ALX Africa',
      period: 'Feb 2026 – Apr 2026',
      color: '#059669',
      description: 'Developed professional communication and stakeholder engagement skills. Applied structured problem-solving, critical thinking, and strengthened teamwork and leadership.',
    },
  ];

  return (
    <section id="experience" className="experience section">
      <div className="container">
        <span className="section-label">MY JOURNEY</span>
        <h2 className="section-title experience-heading">Experience & Certifications</h2>
        <p className="section-subtitle">
          My professional journey building systems and solving business problems
        </p>

        {/* Tabs */}
        <div className="exp-tabs">
          <button
            className={"exp-tab " + (activeTab === 'experience' ? 'active' : '')}
            onClick={() => setActiveTab('experience')}
          >
            💼 Work Experience
          </button>
          <button
            className={"exp-tab " + (activeTab === 'certifications' ? 'active' : '')}
            onClick={() => setActiveTab('certifications')}
          >
            🏆 Certifications
          </button>
        </div>

        {/* Experience Timeline */}
        {activeTab === 'experience' && (
          <div className="timeline">
            {experiences.map((exp, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-dot" style={{ background: exp.color }} />
                <div className="timeline-card">
                  <div className="timeline-card-header">
                    <div className="timeline-card-left">
                      <span className="exp-type-badge" style={{ color: exp.color, background: exp.color + '15' }}>
                        {exp.type}
                      </span>
                      <h3 className="exp-title">{exp.title}</h3>
                      <p className="exp-subtitle">{exp.subtitle}</p>
                      <div className="exp-meta">
                        <span className="exp-company">🏢 {exp.company}</span>
                        <span className="exp-location">📍 {exp.location}</span>
                      </div>
                    </div>
                    <div className="timeline-card-right">
                      <span className="exp-period">{exp.period}</span>
                    </div>
                  </div>
                  <ul className="exp-responsibilities">
                    {exp.responsibilities.map((item, idx) => (
                      <li key={idx}>
                        <span className="exp-bullet" style={{ color: exp.color }}>▹</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Certifications */}
        {activeTab === 'certifications' && (
          <div className="certs-grid">
            {certifications.map((cert, index) => (
              <div key={index} className="cert-card" style={{ borderTop: '3px solid ' + cert.color }}>
                <div className="cert-header">
                  <div>
                    <h3 className="cert-title" style={{ color: cert.color }}>{cert.title}</h3>
                    <p className="cert-issuer">{cert.issuer}</p>
                  </div>
                  <span className="cert-period">{cert.period}</span>
                </div>
                <p className="cert-description">{cert.description}</p>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};

export default Experience;
