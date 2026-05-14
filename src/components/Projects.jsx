import React, { useState } from 'react';
import './Projects.css';

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const projects = [
    {
      title: 'Budget-Smart Application',
      description: 'A personal finance app that enables users to create budgets, categorize expenses, and track spending trends over time. Features user authentication, real-time data storage, and interactive charts for budget management.',
      technologies: ['React', 'Flask', 'PostgreSQL'],
      githubLink: 'https://github.com/jepkemoi-sheilah1/budget-smart',
      demoLink: 'https://budget-smart-three.vercel.app/',
      emoji: '💰',
      color: '#667eea',
    },
    { 
      title:'Smart Laundry',
      description: 'A laundry management app that streamlines order tracking, customer management, and service workflows. Built with a clean interface for both customers and staff to manage laundry orders efficiently.',
      technologies: ['Angular', 'Springboot', 'PostgreSQL'],
      githubLink: 'https://github.com/jepkemoi-sheilah1',
      demoLink: 'https://smartlaundryclient.onrender.com',
      emoji: '👕',
      color: '#43e97b',

      },
    {
      title: 'SyncBoard',
      description: 'A collaborative project management tool with workspaces, boards, lists, and cards. Features real-time task management, team collaboration, and user authentication with JWT.',
      technologies: ['Angular', 'Spring Boot', 'PostgreSQL'],
      githubLink: 'https://github.com/jepkemoi-sheilah1/syncboard-frontend',
      demoLink: 'https://syncboard-frontend-814g.onrender.com',
      emoji: '📋',
      color: '#f093fb',
    },
  ];

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">My Work</span>
          <h2 className="section-title">Technical Projects</h2>
          <p className="section-subtitle">
            A selection of projects I've built .Each one a new challenge and learning experience.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`project-card ${hoveredIndex === index ? 'hovered' : ''}`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{ '--card-color': project.color }}
            >
              <div className="project-card-top">
                <div className="project-emoji">{project.emoji}</div>
                <div className="project-links">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-icon-link"
                    title="View on GitHub"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                  </a>
                  {project.demoLink && (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-icon-link"
                      title="Live Demo"
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/>
                      </svg>
                    </a>
                  )}
                </div>
              </div>

              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>

              <div className="project-technologies">
                {project.technologies.map(tech => (
                  <span key={tech} className="tech-tag">{tech}</span>
                ))}
              </div>

              <div className="project-card-footer">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-cta"
                >
                  View Project
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </a>
                {project.demoLink && (
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-cta project-cta-demo"
                  >
                    Live Demo
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/>
                    </svg>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="projects-footer">
          <a
            href="https://github.com/jepkemoi-sheilah1"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            See All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;