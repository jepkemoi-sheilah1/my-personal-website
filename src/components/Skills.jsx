import React from 'react';
import { FaReact, FaAngular, FaJs, FaPython, FaGitAlt, FaGithub } from 'react-icons/fa';
import { SiFlask, SiPostman, SiSqlite, SiJira, SiTrello, SiSpringboot, SiPostgresql } from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Business Analysis',
      icon: '📊',
      color: '#0066ff',
      skills: [
        { name: 'Requirements Gathering', icon: '📋' },
        { name: 'User Stories & BRDs', icon: '📝' },
        { name: 'Business Process Analysis', icon: '🔄' },
        { name: 'Functional Specifications', icon: '📌' },
        { name: 'Stakeholder Engagement', icon: '🤝' },
        { name: 'UAT Testing', icon: '✅' },
      ]
    },
    {
      title: 'Technical',
      icon: '💻',
      color: '#7c3aed',
      skills: [
        { name: 'JavaScript', icon: <FaJs color="#f7df1e" size={18} /> },
        { name: 'Python', icon: <FaPython color="#3776ab" size={18} /> },
        { name: 'React', icon: <FaReact color="#61dafb" size={18} /> },
        { name: 'Angular', icon: <FaAngular color="#dd0031" size={18} /> },
        { name: 'Flask', icon: <SiFlask color="#000000" size={18} /> },
        { name: 'Spring Boot', icon: <SiSpringboot color="#6db33f" size={18} /> },
        { name: 'RESTful APIs', icon: '🔗' },
      ]
    },
    {
      title: 'Tools & Data',
      icon: '🛠️',
      color: '#059669',
      skills: [
        { name: 'Jira', icon: <SiJira color="#0052cc" size={18} /> },
        { name: 'Trello', icon: <SiTrello color="#0052cc" size={18} /> },
        { name: 'Postman', icon: <SiPostman color="#ff6c37" size={18} /> },
        { name: 'Git & GitHub', icon: <FaGithub color="#181717" size={18} /> },
        { name: 'PostgreSQL', icon: <SiPostgresql color="#336791" size={18} /> },
        { name: 'SQLite', icon: <SiSqlite color="#003b57" size={18} /> },
        { name: 'SQL', icon: '🗄️' },
      ]
    },
    {
      title: 'Methodology & Soft Skills',
      icon: '⚡',
      color: '#ea580c',
      skills: [
        { name: 'Agile / Scrum', icon: '🏃' },
        { name: 'SDLC', icon: '🔁' },
        { name: 'Problem Solving', icon: '🧩' },
        { name: 'Team Leadership', icon: '👥' },
        { name: 'Process Improvement', icon: '📈' },
        { name: 'Generative AI', icon: '🤖' },
      ]
    }
  ];

  return (
    <section id="skills" className="skills section">
      <div className="container">
        <span className="section-label">WHAT I KNOW</span>
        <h2 className="section-title skills-heading">Technical Skills</h2>
        <p className="section-subtitle">
          A blend of business analysis expertise and technical development skills
        </p>

        <div className="skills-grid">
          {skillCategories.map((category) => (
            <div key={category.title} className="skill-category-card">
              <div className="skill-category-header">
                <span className="category-emoji">{category.icon}</span>
                <h3 className="category-title" style={{ color: category.color }}>
                  {category.title}
                </h3>
              </div>
              <div className="skill-items">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="skill-item">
                    <span className="skill-icon">
                      {typeof skill.icon === 'string' ? skill.icon : skill.icon}
                    </span>
                    <span className="skill-name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
