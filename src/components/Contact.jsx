import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaDownload } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('jepkemoishyllah@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const contactLinks = [
    { icon: 'email', label: 'Email', value: 'jepkemoishyllah@gmail.com', href: 'mailto:jepkemoishyllah@gmail.com', color: '#0066ff', action: 'Send Email' },
    { icon: 'linkedin', label: 'LinkedIn', value: 'sheilah-jepkemoi', href: 'https://www.linkedin.com/in/sheilah-jepkemoi-a50454282/', color: '#0077b5', action: 'Connect' },
    { icon: 'github', label: 'GitHub', value: 'jepkemoi-sheilah1', href: 'https://github.com/jepkemoi-sheilah1', color: '#181717', action: 'Follow' },
    { icon: 'phone', label: 'Phone', value: '+254 712 657 366', href: 'tel:+254712657366', color: '#059669', action: 'Call' },
  ];

  const getIcon = (type) => {
    if (type === 'email') return <FaEnvelope size={20} />;
    if (type === 'linkedin') return <FaLinkedin size={20} />;
    if (type === 'github') return <FaGithub size={20} />;
    if (type === 'phone') return <FaPhone size={20} />;
    return null;
  };

  return (
    <section id='contact' className='contact section'>
      <div className='container'>
        <span className='section-label'>GET IN TOUCH</span>
        <h2 className='section-title contact-heading'>Let us Work Together</h2>
        <p className='section-subtitle'>
          I am always open to discussing new opportunities, interesting projects,
          or just having a conversation about tech and business.
        </p>

        <div className='contact-layout'>

          <div className='contact-info'>
            <div className='contact-availability'>
              <span className='availability-dot' />
              <span>Available for opportunities</span>
            </div>
            <h3 className='contact-info-title'>Have a project in mind?</h3>
            <p className='contact-info-text'>
              Whether you need a Business Systems Analyst, a Frontend Developer,
              or someone who can bridge both worlds, I would love to hear from you.
            </p>
            <div className='contact-detail-list'>
              <div className='contact-detail'>
                <FaMapMarkerAlt color='#0066ff' size={16} />
                <span>Nairobi, Kenya</span>
              </div>
              <div className='contact-detail'>
                <FaEnvelope color='#0066ff' size={16} />
                <span>jepkemoishyllah@gmail.com</span>
              </div>
            </div>
            <div className='contact-actions'>
              <button onClick={handleCopyEmail} className='btn btn-primary'>
                {copied ? 'Copied!' : 'Copy Email'}
              </button>
              <a href='/my-personal-website/cv.pdf' download className='btn btn-secondary'>
                <FaDownload size={14} /> Download CV
              </a>
            </div>
          </div>

          <div className='contact-links'>
            {contactLinks.map((item) => {
              const isExternal = item.href.startsWith('http');
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={isExternal ? '_blank' : '_self'}
                  rel={isExternal ? 'noopener noreferrer' : undefined}
                  className='contact-link-card'
                >
                  <div className='contact-link-icon' style={{ background: item.color + '15', color: item.color }}>
                    {getIcon(item.icon)}
                  </div>
                  <div className='contact-link-text'>
                    <span className='contact-link-label'>{item.label}</span>
                    <span className='contact-link-value'>{item.value}</span>
                  </div>
                  <span className='contact-link-action' style={{ color: item.color }}>
                    {item.action} &rarr;
                  </span>
                </a>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;