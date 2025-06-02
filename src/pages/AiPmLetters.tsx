
import { Link } from "react-router-dom";

const AiPmLetters = () => {
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
          margin: 0 auto 32px;
        }

        .subscribe-form {
          display: flex;
          gap: 16px;
          max-width: 500px;
          margin: 0 auto;
          flex-wrap: wrap;
        }

        .email-input {
          flex: 1;
          min-width: 250px;
          padding: 16px 20px;
          background: #111;
          border: 1px solid #333;
          border-radius: 8px;
          color: #fff;
          font-size: 16px;
        }

        .email-input::placeholder {
          color: #666;
        }

        .subscribe-button {
          background: #D2B48C;
          color: #000;
          padding: 16px 32px;
          border: none;
          border-radius: 8px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .subscribe-button:hover {
          background: #C19A6B;
          transform: translateY(-2px);
        }

        .letters-section {
          padding: 60px 0 80px;
        }

        .letters-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 32px;
          margin-top: 40px;
        }

        .letter-card {
          background: #111;
          border: 1px solid #333;
          border-radius: 12px;
          padding: 32px;
          transition: all 0.3s ease;
        }

        .letter-card:hover {
          border-color: #555;
          transform: translateY(-4px);
        }

        .letter-date {
          color: #D2B48C;
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 12px;
        }

        .letter-card h3 {
          font-size: 20px;
          font-weight: 600;
          margin-bottom: 16px;
        }

        .letter-card p {
          color: #ccc;
          margin-bottom: 24px;
          font-size: 16px;
        }

        .read-button {
          background: transparent;
          color: #D2B48C;
          border: 1px solid #D2B48C;
          padding: 12px 24px;
          border-radius: 6px;
          text-decoration: none;
          font-size: 14px;
          font-weight: 500;
          transition: all 0.3s ease;
          display: inline-block;
        }

        .read-button:hover {
          background: #D2B48C;
          color: #000;
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

          .subscribe-form {
            flex-direction: column;
            align-items: center;
          }

          .email-input {
            min-width: 100%;
          }

          .letters-grid {
            grid-template-columns: 1fr;
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

      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <h1>AI PM Letters</h1>
          <p>Weekly insights on AI-enhanced project management, leadership psychology, and execution excellence delivered to your inbox.</p>
          <div className="subscribe-form">
            <input type="email" className="email-input" placeholder="Enter your email address" />
            <button className="subscribe-button">Subscribe</button>
          </div>
        </div>
      </section>

      {/* Letters Section */}
      <section className="letters-section">
        <div className="container">
          <h2 style={{fontSize: '32px', fontWeight: '600', textAlign: 'center', marginBottom: '16px'}}>Latest Letters</h2>
          <p style={{textAlign: 'center', color: '#ccc', marginBottom: '40px'}}>Dive into the archive of transformative insights</p>
          
          <div className="letters-grid">
            <div className="letter-card">
              <div className="letter-date">Week 1 - January 2025</div>
              <h3>The AI PM Revolution: Your Competitive Edge in 2025</h3>
              <p>How AI is transforming project management and why traditional PMs who don't adapt will be left behind. Discover the 3 core AI skills every project manager needs now.</p>
              <a href="#" className="read-button">Read Letter</a>
            </div>

            <div className="letter-card">
              <div className="letter-date">Week 2 - January 2025</div>
              <h3>Mental Models for Elite Execution</h3>
              <p>The psychological frameworks that separate high performers from everyone else. Learn the 5 mental models that elite project managers use to make better decisions faster.</p>
              <a href="#" className="read-button">Read Letter</a>
            </div>

            <div className="letter-card">
              <div className="letter-date">Week 3 - January 2025</div>
              <h3>Building Your PM Brand in the AI Era</h3>
              <p>Strategic positioning techniques that elevate your professional reputation and career trajectory. Why your technical skills aren't enough anymore.</p>
              <a href="#" className="read-button">Read Letter</a>
            </div>

            <div className="letter-card">
              <div className="letter-date">Week 4 - January 2025</div>
              <h3>The Psychology of Influence: Leading Without Authority</h3>
              <p>How to influence stakeholders, motivate teams, and drive results when you don't have formal power. The 4 influence patterns of elite leaders.</p>
              <a href="#" className="read-button">Read Letter</a>
            </div>

            <div className="letter-card">
              <div className="letter-date">Week 5 - January 2025</div>
              <h3>AI Workflow Automation for PMs</h3>
              <p>Step-by-step guide to automating your most time-consuming PM tasks using AI. Templates and prompts that save 10+ hours per week.</p>
              <a href="#" className="read-button">Read Letter</a>
            </div>

            <div className="letter-card">
              <div className="letter-date">Week 6 - January 2025</div>
              <h3>The Future of Work: PM Skills That Will Never Be Automated</h3>
              <p>While AI handles routine tasks, these human skills become more valuable than ever. How to future-proof your PM career.</p>
              <a href="#" className="read-button">Read Letter</a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="social-links">
            <a href="https://linkedin.com/in/robinissac" target="_blank" rel="noopener noreferrer" className="social-link">LinkedIn: robinissac</a>
            <a href="https://youtube.com/@RobinIssac007-AI-PM" target="_blank" rel="noopener noreferrer" className="social-link">YouTube: @RobinIssac007-AI-PM</a>
          </div>
          <p className="footer-text">Built by Robin Issac. Execution is your superpower.</p>
        </div>
      </footer>
    </div>
  );
};

export default AiPmLetters;
