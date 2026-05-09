import React, { useState, useEffect } from 'react';
import { GitBranch, Download, ArrowRight, MapPin } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const roles = ['Software Engineer', 'Frontend Developer', 'Angular Developer', 'React Developer'];

  useEffect(() => {
    let charIndex = 0;
    let roleIndex = 0;
    let isDeleting = false;

    const type = () => {
      const current = roles[roleIndex];
      if (!isDeleting) {
        setDisplayText(current.slice(0, charIndex + 1));
        charIndex++;
        if (charIndex === current.length) {
          isDeleting = true;
          setTimeout(type, 1500);
          return;
        }
      } else {
        setDisplayText(current.slice(0, charIndex - 1));
        charIndex--;
        if (charIndex === 0) {
          isDeleting = false;
          roleIndex = (roleIndex + 1) % roles.length;
        }
      }
      setTimeout(type, isDeleting ? 50 : 80);
    };

    const timeout = setTimeout(type, 500);
    return () => clearTimeout(timeout);
  }, []);

  const floatingSkills = [
    { label: 'Angular', emoji: 'A', position: 'top-right' },
    { label: 'React', emoji: 'R', position: 'middle-right' },
    { label: 'Python', emoji: 'Py', position: 'bottom-right' },
    { label: 'TypeScript', emoji: 'TS', position: 'top-left' },
    { label: 'Tailwind', emoji: 'TW', position: 'bottom-left' },
  ];

  const stats = [
    { value: '3+', label: 'Projects Built' },
    { value: '2+', label: 'Years Experience' },
    { value: '5+', label: 'Technologies' },
  ];

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-text">
          <div className="available-badge">
            <span className="badge-dot" />
            Available for opportunities
          </div>
          <h1 className="hero-name">
            Hi, I am <span className="hero-name-highlight">Jepkemoi</span>
            <br />
            <span className="hero-name-highlight">Sheilah</span>
          </h1>
          <div className="hero-role">
            <span>{displayText}</span>
            <span className="cursor">|</span>
          </div>
          <p className="hero-bio">
            A passionate software engineer specializing in front-end development.
            I love building clean, functional, and visually appealing web experiences.
            I thrive so well in collaborative environments and am always eager to learn new technologies and improve my skills.
          </p>
          <div className="hero-location">
            <MapPin size={14} />
            <span>Nairobi, Kenya</span>
          </div>
          <div className="hero-buttons">
            <a href="mailto:jepkemoishyllah@gmail.com" className="btn btn-primary">
              See My Work <ArrowRight size={16} />
            </a>
            <a href="/my-personal-website/cv.pdf" className="btn btn-secondary" download>
              Download CV
            </a>
          </div>
          <div className="hero-socials">
            <a href="https://github.com/Jepkemoi_Sheilah1" target="_blank" rel="noopener noreferrer" className="social-link">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/sheilah-jepkemoi-a50454282/" target="_blank" rel="noopener noreferrer" className="social-link">
              LinkedIn
            </a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="avatar-wrapper">
            {floatingSkills.map((skill) => (
              <div key={skill.label} className={"floating-skill skill-" + skill.position}>
                <span>{skill.emoji}</span>
                <span>{skill.label}</span>
              </div>
            ))}
            <div className="avatar-ring">
              <div className="avatar-circle">
                <img src="/my-personal-website/portfolio-image.jpg" alt="Jepkemoi Sheilah" />
              </div>
            </div>
            <div className="exp-badge">2+ yrs exp</div>
          </div>
        </div>
      </div>
      <div className="hero-stats">
        {stats.map((stat) => (
          <div key={stat.label} className="stat-card">
            <span className="stat-value">{stat.value}</span>
            <span className="stat-label">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
