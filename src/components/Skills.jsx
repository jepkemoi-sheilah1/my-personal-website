import React from 'react'; // eslint-disable-line no-unused-vars
import './Skills.css';

const Skills = () => {
  const skills = {
    'Frontend': ['React.js', 'Angular', 'JavaScript', 'HTML5', 'CSS3', 'Responsive Design'],
    'Backend': ['Python', 'Flask', 'RESTful APIs', 'SQLAlchemy', 'Authentication'],
    'Tools': ['Git', 'GitHub', 'VS Code', 'Postman', 'Linux', 'JSON Server', 'SQLite'],
    'Soft Skills': [
      'Self-Management: Able to stay organized, focused, and adaptable in dynamic environments.',
      'Personal Productivity: Proficient in setting goals, managing priorities, and following through on tasks.',
      'Communicating for Impact: Skilled in clear, respectful, and effective communication to enhance collaboration.'
    ]
  };

  return (
    <section id="skills" className="skills section">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-grid">
          {Object.entries(skills).map(([category, skillList]) => (
            <div key={category} className="skill-category">
              <h3>{category}</h3>
              <div className="skill-items">
                {skillList.map(skill => (
                  <div key={skill} className="skill-item">
                    {skill}
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