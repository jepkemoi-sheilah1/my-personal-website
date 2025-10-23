import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: 'Frontend Developer - R&D',
      company: 'Eclectics International',
      location: 'Nairobi',
      period: 'Jul 2025 - Oct 2025',
      responsibilities: [
        'Developed enterprise Angular applications using modern architectural patterns',
        'Integrated Spring Boot APIs for real-time features including GPS tracking',
        'Prototyped innovative web features supporting R&D initiatives'
      ]
    },
    {
      title: 'IT Attachée',
      company: 'NHIF, Elgeyo Marakwet County',
      location: '',
      period: 'Aug 2022 - Nov 2022',
      responsibilities: [
        'Supported development of internal healthcare software applications',
        'Collaborated on feature implementation and system optimization',
        'Assisted in troubleshooting technical issues and user support'
      ]
    }
  ];

  return (
    <section id="experience" className="experience section">
      <div className="container">
        <h2 className="section-title">Professional Experience</h2>
        <div className="experience-list">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-item">
              <div className="experience-header">
                <h3>{exp.title}</h3>
                <span className="experience-period">{exp.period}</span>
              </div>
              <div className="experience-company">
                <span className="company-name">{exp.company}</span>
                {exp.location && <span className="company-location">, {exp.location}</span>}
              </div>
              <ul className="experience-responsibilities">
                {exp.responsibilities.map((responsibility, idx) => (
                  <li key={idx}>{responsibility}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;