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
            <h1>Hi there 👋🏽 I’m Jepkemoi Sheilah</h1>
            <h2>Software Engineer 💻</h2>
            <p>“I’m a passionate software engineer specializing in front-end development. I love building clean, functional, and visually appealing web experiences.”</p>
            <div className="hero-buttons">
            <a href="/contact" className="btn btn-primary">Hire Me</a>
              <a href="/my-personal-website/cv.pdf" className="btn btn-secondary" download>Download CV</a>
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
            <img src="/my-personal-website/portfolio-image.jpg" alt="Jepkemoi Sheilah" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;