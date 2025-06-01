
import { Link } from "react-router-dom";

const Services = () => {
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

        .services-section {
          padding: 60px 0 80px;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 40px;
          margin-bottom: 80px;
        }

        .service-card {
          background: #111;
          border: 1px solid #333;
          border-radius: 12px;
          padding: 40px;
          transition: all 0.3s ease;
        }

        .service-card:hover {
          border-color: #555;
          transform: translateY(-4px);
        }

        .service-icon {
          width: 60px;
          height: 60px;
          background: #D2B48C;
          border-radius: 12px;
          margin-bottom: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
        }

        .service-card h3 {
          font-size: 24px;
          font-weight: 600;
          margin-bottom: 16px;
        }

        .service-card p {
          color: #ccc;
          margin-bottom: 24px;
          line-height: 1.6;
        }

        .service-features {
          list-style: none;
          margin-bottom: 32px;
        }

        .service-features li {
          color: #ccc;
          margin-bottom: 8px;
          padding-left: 20px;
          position: relative;
        }

        .service-features li:before {
          content: "✓";
          color: #D2B48C;
          font-weight: bold;
          position: absolute;
          left: 0;
        }

        .service-price {
          font-size: 32px;
          font-weight: 700;
          color: #D2B48C;
          margin-bottom: 24px;
        }

        .service-button {
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
          text-decoration: none;
          display: inline-block;
          text-align: center;
        }

        .service-button:hover {
          background: #C19A6B;
          transform: translateY(-2px);
        }

        .cta-section {
          background: #111;
          border: 1px solid #333;
          border-radius: 12px;
          padding: 60px 40px;
          text-align: center;
          margin-bottom: 60px;
        }

        .cta-section h2 {
          font-size: 32px;
          font-weight: 700;
          margin-bottom: 16px;
        }

        .cta-section p {
          color: #ccc;
          font-size: 18px;
          margin-bottom: 32px;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
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

          .services-grid {
            grid-template-columns: 1fr;
          }

          .service-card {
            padding: 24px;
          }

          .cta-section {
            padding: 40px 24px;
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
          <h1>Elite PM Services</h1>
          <p>Transform your project management capabilities with AI-enhanced methodologies and proven execution frameworks.</p>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="container">
          <div className="services-grid">
            {/* Service 1 */}
            <div className="service-card">
              <div className="service-icon">🎯</div>
              <h3>1:1 Elite PM Coaching</h3>
              <p>Personalized coaching sessions to accelerate your project management career with AI-enhanced workflows and leadership mastery.</p>
              <ul className="service-features">
                <li>Weekly 1-hour sessions</li>
                <li>Custom AI workflow development</li>
                <li>Career positioning strategy</li>
                <li>Leadership psychology training</li>
                <li>Unlimited email support</li>
              </ul>
              <div className="service-price">$2,500/month</div>
              <a href="#" className="service-button">Get Started</a>
            </div>

            {/* Service 2 */}
            <div className="service-card">
              <div className="service-icon">🚀</div>
              <h3>AI PM Transformation</h3>
              <p>Complete transformation program integrating AI tools into your project management processes for 10x productivity gains.</p>
              <ul className="service-features">
                <li>8-week intensive program</li>
                <li>AI tools masterclass</li>
                <li>Custom automation setup</li>
                <li>Team training included</li>
                <li>6-month follow-up support</li>
              </ul>
              <div className="service-price">$7,500</div>
              <a href="#" className="service-button">Transform Now</a>
            </div>

            {/* Service 3 */}
            <div className="service-card">
              <div className="service-icon">📈</div>
              <h3>Executive PM Consulting</h3>
              <p>Strategic consulting for organizations looking to elevate their project management capabilities and build high-performance teams.</p>
              <ul className="service-features">
                <li>Organizational assessment</li>
                <li>PM framework design</li>
                <li>Team leadership training</li>
                <li>Process optimization</li>
                <li>Quarterly strategy reviews</li>
              </ul>
              <div className="service-price">$15,000+</div>
              <a href="#" className="service-button">Discuss Project</a>
            </div>

            {/* Service 4 */}
            <div className="service-card">
              <div className="service-icon">🧠</div>
              <h3>Elite PM Mastermind</h3>
              <p>Exclusive group program for ambitious project managers ready to build elite execution capabilities and network with top performers.</p>
              <ul className="service-features">
                <li>Monthly group sessions</li>
                <li>Peer networking & accountability</li>
                <li>Advanced case studies</li>
                <li>Guest expert sessions</li>
                <li>Private community access</li>
              </ul>
              <div className="service-price">$997/month</div>
              <a href="#" className="service-button">Join Mastermind</a>
            </div>
          </div>

          {/* CTA Section */}
          <div className="cta-section">
            <h2>Ready to Execute at an Elite Level?</h2>
            <p>Book a free 30-minute strategy call to discuss your goals and determine the best path forward for your PM transformation.</p>
            <Link to="/contact" className="service-button" style={{display: 'inline-block', width: 'auto'}}>Book Strategy Call</Link>
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

export default Services;
