import './Contact.css';

const Contact = () => {
  const contactItems = [
    {
      type: 'email',
      label: 'Email',
      value: 'jepkemoikibet@gmail.com',
      href: 'mailto:jepkemoikibet@gmail.com',
      icon: '📧'
    },
    {
      type: 'linkedin',
      label: 'LinkedIn',
      value: 'Jepkemoi Sheilah Kibet',
      href: 'https://www.linkedin.com/in/jepkemoi-sheilah-kibet-8b8b8b8b/',
      icon: '💼'
    },
    {
      type: 'github',
      label: 'GitHub',
      value: 'jepkemoi-sheilah1',
      href: 'https://github.com/jepkemoi-sheilah1',
      icon: '💻'
    },
    {
      type: 'phone',
      label: 'Phone',
      value: '+254 712 657 366',
      href: 'tel:+254712657366',
      icon: '📱'
    },
    {
      type: 'location',
      label: 'Location',
      value: 'Nairobi, Kenya',
      href: null,
      icon: '📍'
    },
    {
      type: 'cv',
      label: 'CV',
      value: 'Download CV',
      href: '/cv.pdf',
      icon: '📄'
    }
  ];

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-info">
            <p>I&apos;m always open to discussing new opportunities and interesting projects. Feel free to reach out!</p>
            <div className="contact-grid">
              {contactItems.map((item, index) => (
                <div key={index} className="contact-card">
                  <div className="contact-icon">{item.icon}</div>
                  <div className="contact-text">
                    <strong>{item.label}:</strong>
                    {item.href ? (
                      <a href={item.href} target={item.href.startsWith('http') ? '_blank' : '_self'} rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}>
                        {item.value}
                      </a>
                    ) : (
                      <span>{item.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
