import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-info">
            <p>I&apos;m always open to discussing new opportunities and interesting projects. Feel free to reach out!</p>
            <div className="contact-details">
              <div className="contact-item">
                <strong>Email:</strong> <a href="mailto:jepkemoikibet@gmail.com">jepkemoikibet@gmail.com</a>
              </div>
              <div className="contact-item">
                <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/jepkemoi-sheilah-kibet-8b8b8b8b/" target="_blank" rel="noopener noreferrer">Jepkemoi Sheilah Kibet</a>
              </div>
              <div className="contact-item">
                <strong>GitHub:</strong> <a href="https://github.com/jepkemoi-sheilah1" target="_blank" rel="noopener noreferrer">jepkemoi-sheilah1</a>
              </div>
              <div className="contact-item">
                <strong>Phone:</strong> <a href="tel:+254712657366">+254 712 657 366</a>
              </div>
              <div className="contact-item">
                <strong>Location:</strong> Nairobi, Kenya
              </div>
              <div className="contact-item">
                <strong>CV:</strong> <a href="/cv.pdf" target="_blank" rel="noopener noreferrer">Download CV</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
