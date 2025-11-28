 import { Link } from "react-router-dom";

const Index = () => {
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

        .hero {
          padding: 100px 0;
          text-align: center;
        }

        .hero h1 {
          font-size: clamp(36px, 5vw, 64px);
          font-weight: 700;
          line-height: 1.2;
          margin-bottom: 24px;
          max-width: 900px;
          margin-left: auto;
          margin-right: auto;
        }

        .hero p {
          font-size: clamp(18px, 2.5vw, 24px);
          color: #ccc;
          margin-bottom: 48px;
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
        }

        .email-form {
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

        .cta-button {
          background: #D2B48C;
          color: #000;
          padding: 16px 32px;
          border: none;
          border-radius: 8px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
          display: inline-block;
        }

        .cta-button:hover {
          background: #C19A6B;
          transform: translateY(-2px);
        }

        .section {
          padding: 80px 0;
        }

        .section-title {
          font-size: clamp(28px, 4vw, 48px);
          font-weight: 700;
          text-align: center;
          margin-bottom: 16px;
        }

        .section-subtitle {
          font-size: clamp(16px, 2vw, 20px);
          color: #ccc;
          text-align: center;
          margin-bottom: 64px;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .grid {
          display: grid;
          gap: 32px;
        }

        .grid-4 {
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        }

        .grid-2 {
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        }

        .grid-3 {
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        }

        .card {
          background: #111;
          border: 1px solid #333;
          border-radius: 12px;
          padding: 32px;
          transition: all 0.3s ease;
        }

        .card:hover {
          border-color: #555;
          transform: translateY(-4px);
        }

        .card h3 {
          font-size: 24px;
          font-weight: 600;
          margin-bottom: 16px;
        }

        .card p {
          color: #ccc;
          margin-bottom: 24px;
          font-size: 16px;
        }

        .card-button {
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

        .card-button:hover {
          background: #D2B48C;
          color: #000;
        }

        .product-card {
          background: #111;
          border: 1px solid #333;
          border-radius: 12px;
          padding: 40px;
          text-align: center;
          transition: all 0.3s ease;
        }

        .product-card:hover {
          border-color: #555;
          transform: translateY(-4px);
        }

        .product-mockup {
          width: 100%;
          height: 200px;
          background: linear-gradient(135deg, #333 0%, #111 100%);
          border-radius: 8px;
          margin-bottom: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          color: #666;
        }

        .blog-card {
          background: #111;
          border: 1px solid #333;
          border-radius: 12px;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .blog-card:hover {
          border-color: #555;
          transform: translateY(-4px);
        }

        .blog-graphic {
          width: 100%;
          height: 180px;
          background: linear-gradient(135deg, #D2B48C 0%, #C19A6B 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 16px;
          color: #000;
          font-weight: 600;
        }

        .blog-content {
          padding: 24px;
        }

        .blog-content h3 {
          font-size: 20px;
          margin-bottom: 12px;
        }

        .blog-content p {
          color: #ccc;
          margin-bottom: 16px;
          font-size: 14px;
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

          .hero {
            padding: 60px 0;
          }

          .email-form {
            flex-direction: column;
            align-items: center;
          }

          .email-input {
            min-width: 100%;
          }

          .section {
            padding: 60px 0;
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

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1>Build, Lead, and Scale with AI-Enhanced Project Leadership</h1>
          <p>Robin Issac helps professionals transform into execution-first project managers using AI workflows, delivery excellence, and psychological mastery.</p>
          <div className="email-form">
            <input type="email" className="email-input" placeholder="Enter your email address" />
            {/* Updated CTA to direct WhatsApp link */}
            <a
              href="https://chat.whatsapp.com/BVUSqeP38TeLholBLRrkY1"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button"
            >
              Join the Free WhatsApp Session
            </a>
          </div>
        </div>
      </section>

      {/* Resource/Offer Grid */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Join the New 1%</h2>
          <p className="section-subtitle">Future-proof your career with these tools</p>
          <div className="grid grid-4">
            <div className="card">
              <h3>Elite PM Academy</h3>
              <p>Master advanced project management frameworks and AI-powered methodologies for elite performance.</p>
              <a href="#" className="card-button">Learn More</a>
            </div>
            <div className="card">
              <h3>AI Tools Bootcamp</h3>
              <p>Discover cutting-edge AI tools and workflows that multiply your productivity and decision-making power.</p>
              <a href="#" className="card-button">Learn More</a>
            </div>
            <div className="card">
              <h3>Career Clarity Masterclass</h3>
              <p>Get crystal clear on your professional path with strategic positioning and personal brand development.</p>
              <a href="#" className="card-button">Learn More</a>
            </div>
            <div className="card">
              <h3>Self-Leadership Lab</h3>
              <p>Build unshakeable mental models and psychological frameworks for sustained high performance.</p>
              <a href="#" className="card-button">Learn More</a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Featured Resources</h2>
          <div className="grid grid-2">
            <div className="product-card">
              <div className="product-mockup">📋 Resume Guide</div>
              <h3>Resume & Positioning Guide</h3>
              <p>Stand out from the crowd with a strategic resume that positions you as an elite project leader.</p>
              <button className="cta-button">Get Access</button>
            </div>
            <div className="product-card">
              <div className="product-mockup">🤖 AI Templates</div>
              <h3>AI-Powered PM Templates</h3>
              <p>Ready-to-use templates and prompts that streamline your project management workflows with AI.</p>
              <button className="cta-button">Get Access</button>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Explore Your Curiosity</h2>
          <p className="section-subtitle">Deep dives into human potential, PM leadership, and AI execution</p>
          <div className="grid grid-3">
            <div className="blog-card">
              <div className="blog-graphic">AI & Leadership</div>
              <div className="blog-content">
                <h3>The Future of Project Leadership</h3>
                <p>How AI is reshaping the role of project managers and what skills matter most in the next decade.</p>
                <a href="#" className="card-button">Read More</a>
              </div>
            </div>
            <div className="blog-card">
              <div className="blog-graphic">Psychology</div>
              <div className="blog-content">
                <h3>Mental Models for Execution</h3>
                <p>Psychological frameworks that transform how you approach complex projects and decision-making.</p>
                <a href="#" className="card-button">Read More</a>
              </div>
            </div>
            <div className="blog-card">
              <div className="blog-graphic">Strategy</div>
              <div className="blog-content">
                <h3>Building Your PM Brand</h3>
                <p>Strategic positioning techniques that elevate your professional reputation and career trajectory.</p>
                <a href="#" className="card-button">Read More</a>
              </div>
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

export default Index;
