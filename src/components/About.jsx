import React from 'react';
import './About.css';

const About = () => {
  const highlights = [
    { icon: '🎓', title: 'Education', desc: 'Software Engineering graduate with a strong foundation in Business Information Technology ' },
    { icon: '💼', title: 'Experience', desc: '1+ years building full-stack web applications with modern frameworks.' },
    { icon: '🌍', title: 'Location', desc: 'Based in Nairobi, Kenya ,open to remote opportunities worldwide.' },
    { icon: '🚀', title: 'Passion', desc: 'Passionate about clean code, great UX, and products that solve real problems.' },
  ];

  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Who I Am</span>
          <h2 className="section-title">About Me</h2>
        </div>

        <div className="about-content">
          <div className="about-text-side">
            <h3 className="about-greeting">
              A Software Engineer who loves building things that <span className="highlight-blue">matter</span>.
            </h3>
            <p> 
                I'm Jepkemoi Sheilah, a software engineer and data analytics enthusiast 
                based in Nairobi, Kenya. My tech journey started with curiosity and grew 
                into a passion for building clean, functional web experiences using React, 
                Python, Flask, SQLAlchemy.
          </p>
            <p>
              What sets me apart is my drive to go beyond the interface I love analyzing 
              data, identifying patterns, and translating findings into decisions that 
              actually matter. Whether I'm writing code or exploring a dataset, I'm always 
              asking: <em>how can this make things better?</em>
            </p>

            <div className="about-highlights">
              {highlights.map((h) => (
                <div key={h.title} className="highlight-item">
                  <div className="highlight-icon">{h.icon}</div>
                  <div>
                    <h4>{h.title}</h4>
                    <p>{h.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="about-actions">
              <a href="/my-personal-website/cv.pdf" download className="btn btn-primary">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="16" height="16">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>
                </svg>
                Download CV
              </a>
              <a href="/contact" className="btn btn-secondary">Get In Touch</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;