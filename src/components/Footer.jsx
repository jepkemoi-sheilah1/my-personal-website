import React from 'react'; // eslint-disable-line no-unused-vars
import './Footer.css';

const Footer = () => {
  const socialLinks = [
    { name: 'GitHub', icon: 'GH', url: 'https://github.com/jepkemoi-sheilah1' },
    { name: 'LinkedIn', icon: 'LI', url: 'https://linkedin.com/in/sheilah-jepkemoi-a50454282' }
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p>&copy; 2024 Kibet Jepkemoi Sheilah. All rights reserved.</p>
          <div className="footer-social">
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
    </footer>
  );
};

export default Footer;
