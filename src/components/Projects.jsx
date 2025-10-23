import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Budget-Smart Application',
      description: 'Designed and built a personal finance app that enables users to create budgets, categorize expenses, and track spending trends over time. Implemented user authentication, data storage, and interactive UI for real-time budget management.',
      technologies: ['React', 'Flask', 'SQLite'],
      githubLink: 'https://github.com/jepkemoi-sheilah1/budget-smart',
      demoLink: null // if you have a demo, add the link
    },
    {
      title: 'Weather Application',
      description: 'Created a weather application using JavaScript, HTML, and CSS, integrating Open Weather API and JSON to simulate backend functionality.',
      technologies: ['JavaScript', 'HTML', 'CSS', 'OpenWeather API'],
      githubLink: 'https://github.com/jepkemoi-sheilah1/Weather-App',
      demoLink: null
    }
  ];

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <h2 className="section-title">Technical Projects</h2>
        <div className="projects-grid">
          {projects.map(project => (
            <div key={project.title} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-technologies">
                {project.technologies.map(tech => (
                  <span key={tech} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>
                {project.demoLink && <a href={project.demoLink} target="_blank" rel="noopener noreferrer">Live Demo</a>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;