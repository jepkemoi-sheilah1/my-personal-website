import React, { useState, useEffect } from 'react'; // eslint-disable-line no-unused-vars
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img src="/my-personal-website/Untitled design.png" alt="Jepkemoi Sheilah Logo" />
          </Link>
        </div>
        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <ul className="nav-list">
            <li><Link to="/" className={location.pathname === '/' ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>Home</Link></li>
            <li><Link to="/about" className={location.pathname === '/about' ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>About</Link></li>
            <li><Link to="/skills" className={location.pathname === '/skills' ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>Skills</Link></li>
            <li><Link to="/projects" className={location.pathname === '/projects' ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>Projects</Link></li>
            <li><Link to="/experience" className={location.pathname === '/experience' ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>Experience</Link></li>
            <li><Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
          </ul>
        </nav>
        <button className="menu-toggle" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
