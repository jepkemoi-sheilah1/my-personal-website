import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { to: '#home', label: 'Home', id: 'home' },
    { to: '#about', label: 'About', id: 'about' },
    { to: '#skills', label: 'Skills', id: 'skills' },
    { to: '#projects', label: 'Projects', id: 'projects' },
    { to: '#experience', label: 'Experience', id: 'experience' },
    { to: '#contact', label: 'Contact', id: 'contact' },
  ];

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="logo">
          <a href="#home">
            <img src="/sheilah-logo.png" alt="Sheilah Logo" />
          </a>
        </div>
        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <ul className="nav-list">
            {navLinks.map(({ to, label, id }) => (
              <li key={to}>
                
                <a>
                  href={to}
                  className={activeSection === id ? 'active' : ''}
                  onClick={() => setIsMenuOpen(false)}
                
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="header-right">
          <a href="#contact" className="header-cta">Let's Talk</a>
          <button
            className={`menu-toggle ${isMenuOpen ? 'menu-open' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;