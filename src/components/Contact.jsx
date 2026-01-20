import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="section contact-section">
      <div className="container contact-content">
        <h2 className="section-title">Get in Touch</h2>
        <div className="contact-card">
          <h3>Ready to Start?</h3>
          <p>
            성장할 준비는 끝났지만,<br />
            저의 성장은 멈추지 않습니다.<br />
            함께 나아갈 기회를 기다립니다.
          </p>
          <a href="mailto:thduszbzb12@gmail.com" className="email-link">thduszbzb12@gmail.com</a>
          <div className="social-links">
            <a href="https://github.com/soyeonnan" target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </div>
        <footer className="footer">
          <p>&copy; 2026 J.Dev Portfolio. All rights reserved.</p>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
