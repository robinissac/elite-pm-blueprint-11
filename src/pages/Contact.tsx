import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          background-color: #000;
          color: #fff;
          line-height: 1.6;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .header {
          padding: 20px 0;
          border-bottom: 1px solid #333;
        }

        .header-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          font-size: 24px;
          font-weight: 700;
          color: #fff;
          text-decoration: none;
        }

        .nav-menu {
          display: flex;
          gap: 32px;
          align-items: center;
        }

        .nav-link {
          color: #ccc;
          text-decoration: none;
          font-size: 14px;
          padding: 8px 16px;
          border-radius: 6px;
          transition: all 0.3s ease;
          border: 1px solid transparent;
        }

        .nav-link:hover {
          color: #fff;
          background: #111;
          border-color: #333;
        }

        .nav-link.primary {
          background: #D2B48C;
          color: #000;
          font-weight: 600;
        }

        .nav-link.primary:hover {
          background: #C19A6B;
          border-color: #C19A6B;
        }

        .page-hero {
          padding: 80px 0 60px;
          text-align: center;
        }

        .page-hero h1 {
          font-size: clamp(32px, 4vw, 48px);
          font-weight: 700;
          margin-bottom: 16px;
        }

        .page-hero p {
          font-size: clamp(16px, 2vw, 20px);
          color: #ccc;
          max-width: 600px;
          margin: 0 auto;
        }

        .contact-section {
          padding: 60px 0 80px;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: start;
        }

        .contact-info h2 {
          font-size: 28px;
          font-weight: 600;
          margin-bottom: 24px;
        }

        .contact-info p {
          color: #ccc;
          margin-bottom: 32px;
          font-size: 16px;
          line-height: 1.6;
        }

        .contact-item {
          display: flex;
          align-items: center;
          margin-bottom: 20px;
        }

        .contact-item-icon {
          width: 20px;
          height: 20px;
          background: #D2B48C;
          border-radius: 50%;
          margin-right: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          color: #000;
          font-weight: 600;
        }

        .contact-item span {
          color: #fff;
          font-size: 16px;
        }

        .contact-form {
          background: #111;
          border: 1px solid #333;
          border-radius: 12px;
          padding: 40px;
        }

        .contact-form h2 {
          font-size: 24px;
          font-weight: 600;
          margin-bottom: 24px;
        }

        .form-group {
          margin-bottom: 24px;
        }

        .form-group label {
          display: block;
          color: #ccc;
          font-size: 14px;
          margin-bottom: 8px;
          font-weight: 500;
        }

        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 16px 20px;
          background: #000;
          border: 1px solid #333;
          border-radius: 8px;
          color: #fff;
          font-size: 16px;
          font-family: inherit;
          transition: border-color 0.3s ease;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: #D2B48C;
        }

        .form-group input::placeholder,
        .form-group textarea::placeholder {
          color: #666;
        }

        .form-group textarea {
          resize: vertical;
          min-height: 120px;
        }

        .submit-button {
          background: #D2B48C;
          color: #000;
          padding: 16px 32px;
          border: none;
          border-radius: 8px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          width: 100%;
        }

        .submit-button:hover {
          background: #C19A6B;
          transform: translateY(-2px);
        }

        .footer {
          padding: 60px 0 40px;
          border-top: 1px solid #333;
          text-align: center;
        }

        .social-links {
          display: flex;
          justify-content: center;
          gap: 32px;
          margin-bottom: 32px;
        }

        .social-link {
          color: #ccc;
          text-decoration: none;
          font-size: 16px;
          transition: color 0.3s ease;
        }

        .social-link:hover {
          color: #D2B48C;
        }

        .footer-text {
          color: #666;
          font-size: 14px;
        }

        @media (max-width: 768px) {
          .header-content {
            flex-direction: column;
            gap: 16px;
          }

          .nav-menu {
            gap: 20px;
          }

          .contact-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .contact-form {
            padding: 24px;
          }

          .social-links {
            flex-direction: column;
            gap: 16px;
          }
        }
      `}</style>

      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="header-content">
            <Link to="/" className="logo">RI</Link>
            <nav className="nav-menu">
              <Link to="/about" className="nav-link">About</Link>
              <Link to="/services" className="nav-link">Services</Link>
              <Link to="/contact" className="nav-link">Contact Us</Link>
              <Link to="#" className="nav-link primary">Read the AI PM Letters</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <h1>Contact Us</h1>
          <p>Ready to transform your project management approach? Let's start the conversation about your path to elite execution.</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Info */}
            <div className="contact-info">
              <h2>Get in Touch</h2>
              <p>Whether you're looking to accelerate your PM career, integrate AI into your workflows, or build unshakeable leadership skills, I'm here to help you execute at an elite level.</p>
              
              <div className="contact-item">
                <div className="contact-item-icon">@</div>
                <span>robin@elitepmacademy.com</span>
              </div>
              
              <div className="contact-item">
                <div className="contact-item-icon">📍</div>
                <span>Available for virtual consultations worldwide</span>
              </div>
              
              <div className="contact-item">
                <div className="contact-item-icon">⏰</div>
                <span>Response time: 24-48 hours</span>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form">
              <h2>Send a Message</h2>
              <form>
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input type="text" id="name" name="name" placeholder="Enter your full name" required />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" name="email" placeholder="Enter your email address" required />
                </div>
                
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input type="text" id="subject" name="subject" placeholder="What's this about?" required />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" placeholder="Tell me about your current challenges and goals..." required></textarea>
                </div>
                
                <button type="submit" className="submit-button">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="social-links">
            <a href="#" className="social-link">LinkedIn: robinissac</a>
            <a href="#" className="social-link">YouTube: @RobinIssac007-AI-PM</a>
          </div>
          <p className="footer-text">Built by Robin Issac. Execution is your superpower.</p>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
