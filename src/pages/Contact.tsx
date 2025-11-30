 import { Link } from "react-router-dom";

const Contact = () => {
  const WHATSAPP_LINK = "https://chat.whatsapp.com/BVUSqeP38TeLholBLRrkY1";

  return (
    <div className="min-h-screen">
      <style>{`
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

        .page-section {
          padding: 80px 0;
        }

        .page-title {
          text-align: center;
          font-size: clamp(28px, 4vw, 40px);
          font-weight: 700;
          margin-bottom: 8px;
        }

        .page-subtitle {
          text-align: center;
          color: #ccc;
          font-size: 16px;
          margin-bottom: 48px;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(0, 1.1fr);
          gap: 40px;
          align-items: flex-start;
        }

        .contact-panel {
          background: #050505;
          padding: 32px;
          border-radius: 16px;
          border: 1px solid #222;
        }

        .contact-panel h3 {
          font-size: 22px;
          margin-bottom: 12px;
        }

        .contact-panel p {
          color: #ccc;
          font-size: 14px;
          margin-bottom: 16px;
        }

        .contact-list {
          list-style: none;
          padding-left: 0;
          margin-top: 8px;
          color: #ccc;
          font-size: 14px;
        }

        .contact-list li {
          margin-bottom: 8px;
        }

        .contact-tag {
          display: inline-block;
          padding: 4px 10px;
          border-radius: 999px;
          background: #201910;
          color: #f5d7a1;
          font-size: 12px;
          margin-top: 8px;
        }

        .form-card {
          background: #101010;
          padding: 32px;
          border-radius: 16px;
          border: 1px solid #222;
        }

        .form-row {
          display: flex;
          flex-direction: column;
          gap: 6px;
          margin-bottom: 16px;
        }

        .form-label {
          font-size: 14px;
          color: #ddd;
        }

        .form-input,
        .form-textarea {
          width: 100%;
          padding: 12px 14px;
          border-radius: 8px;
          border: 1px solid #333;
          background: #050505;
          color: #fff;
          font-size: 14px;
        }

        .form-input::placeholder,
        .form-textarea::placeholder {
          color: #666;
        }

        .form-textarea {
          min-height: 140px;
          resize: vertical;
        }

        .cta-button {
          background: #D2B48C;
          color: #000;
          padding: 14px 28px;
          border: none;
          border-radius: 8px;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
          display: inline-block;
          text-align: center;
        }

        .cta-button:hover {
          background: #C19A6B;
          transform: translateY(-1px);
        }

        .helper-note {
          font-size: 12px;
          color: #888;
          margin-top: 8px;
        }

        .footer {
          padding: 60px 0 40px;
          border-top: 1px solid #333;
          text-align: center;
          margin-top: 40px;
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

        @media (max-width: 900px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }

          .page-section {
            padding: 60px 0;
          }
        }

        @media (max-width: 768px) {
          .header-content {
            flex-direction: column;
            gap: 16px;
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
              <Link to="/ai-pm-letters" className="nav-link primary">Read the AI PM Letters</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Contact content */}
      <section className="page-section">
        <div className="container">
          <h1 className="page-title">Contact Us</h1>
          <p className="page-subtitle">
            Ready to transform your project management approach. Share the basics here and we will take the next step
            together.
          </p>

          <div className="contact-grid">
            {/* Left info panel */}
            <div className="contact-panel">
              <h3>Get in touch with Robin</h3>
              <p>
                Use this form for consulting, speaking, or partnership enquiries. For program questions or quick help
                you can also join the WhatsApp group.
              </p>
              <ul className="contact-list">
                <li>📧 Email. robin@robinissac.com</li>
                <li>🌍 Virtual consultations for UAE and global clients.</li>
                <li>⏱ Response time. usually within 24 to 48 hours.</li>
              </ul>
              <p className="contact-tag">
                Faster response. DM inside the WhatsApp group.
              </p>
              <br />
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="cta-button">
                Open WhatsApp Group
              </a>
              <p className="helper-note">
                All offers, links, and workshop updates are coordinated through this group.
              </p>
            </div>

            {/* Right form card */}
            <div className="form-card">
              <h3 style={{ marginBottom: "16px" }}>Send a message</h3>
              <p style={{ color: "#ccc", fontSize: "13px", marginBottom: "20px" }}>
                This form uses FormSubmit to email your message to Robin directly. You will see a confirmation page
                after you click Send.
              </p>

              {/* FormSubmit powered form */}
              <form
                action="https://formsubmit.co/robin@robinissac.com"
                method="POST"
              >
                {/* Required hidden fields for FormSubmit */}
                <input type="hidden" name="_subject" value="New enquiry from robinissac.com contact page" />
                <input type="hidden" name="_captcha" value="false" />

                <div className="form-row">
                  <label className="form-label" htmlFor="fullName">
                    Full name
                  </label>
                  <input
                    id="fullName"
                    name="Full Name"
                    type="text"
                    className="form-input"
                    placeholder="Your name"
                    required
                  />
                </div>

                <div className="form-row">
                  <label className="form-label" htmlFor="email">
                    Email address
                  </label>
                  <input
                    id="email"
                    name="Email"
                    type="email"
                    className="form-input"
                    placeholder="you@example.com"
                    required
                  />
                </div>

                <div className="form-row">
                  <label className="form-label" htmlFor="subject">
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="Subject"
                    type="text"
                    className="form-input"
                    placeholder="Consulting, coaching, speaking, or other"
                    required
                  />
                </div>

                <div className="form-row">
                  <label className="form-label" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="Message"
                    className="form-textarea"
                    placeholder="Share a short summary of your project, challenge, or question."
                    required
                  />
                </div>

                <button type="submit" className="cta-button">
                  Send message
                </button>

                <p className="helper-note">
                  After you click Send you will see a confirmation screen from FormSubmit. Then you can expect a reply in
                  your inbox from Robin.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="social-links">
            <a
              href="https://linkedin.com/in/robinissac"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              LinkedIn. robinissac
            </a>
            <a
              href="https://youtube.com/@RobinIssac007-AI-PM"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              YouTube. @RobinIssac007 AI PM
            </a>
          </div>
          <p className="footer-text">Built by Robin Issac. Execution is your superpower.</p>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
