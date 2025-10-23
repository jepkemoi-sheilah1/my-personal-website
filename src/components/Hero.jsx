import React from 'react'; // eslint-disable-line no-unused-vars
import './Hero.css';

const Hero = () => {
  const socialLinks = [
    { name: 'GitHub', icon: 'GH', url: 'https://github.com/jepkemoi-sheilah1' },
    { name: 'LinkedIn', icon: 'LI', url: 'https://linkedin.com/in/sheilah-jepkemoi-a50454282' }
  ];

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Hi, I'm Kibet Jepkemoi Sheilah</h1>
            <h2>Software Developer</h2>
            <p>Self-driven and results-oriented Software Developer with a degree in Business Information Technology (JKUAT) focusing on building scalable and functional systems.</p>
            <div className="hero-buttons">
              <a href="#contact" className="btn btn-primary">Get In Touch</a>
              <a href="#projects" className="btn btn-secondary">View My Work</a>
            </div>
            <div className="hero-social">
              <div className="social-links">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className="social-link"
                    aria-label={social.name}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="hero-image">
            <img src="/portfolio-image.jpg" alt="Kibet Jepkemoi Sheilah" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;