import { Link } from "react-router-dom";

const WHATSAPP_LINK = "https://chat.whatsapp.com/BVUSqeP38TeLholBLRrkY1";
const CONTACT_WHATSAPP_LINK = "https://wa.me/971565879821?text=Hi%20Robin%2C%20I%20found%20you%20on%20robinissac.com";

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
          margin-bottom: 32px;
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
        }

        .hero-note {
          font-size: 14px;
          color: #aaa;
          margin-top: 12px;
        }

        .hero-cta-wrapper {
          display: flex;
          justify-content: center;
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
          text-align: left;
          transition: all 0.3s ease;
        }

        .product-card:hover {
          border-color: #555;
          transform: translateY(-4px);
        }

        .product-mockup {
          width: 52px;
          height: 52px;
          border-radius: 16px;
          background: #D2B48C22;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          margin-bottom: 20px;
        }

        .price-row {
          display: flex;
          align-items: baseline;
          gap: 8px;
          margin-top: 8px;
        }

        .price {
          font-size: 24px;
          font-weight: 700;
        }

        .price-old {
          font-size: 14px;
          color: #888;
          text-decoration: line-through;
        }

        .badge {
          display: inline-block;
          padding: 4px 10px;
          border-radius: 999px;
          background: #201910;
          color: #f5d7a1;
          font-size: 12px;
          margin-bottom: 12px;
        }

        .limited-note {
          font-size: 13px;
          color: #fbbf77;
          margin-top: 8px;
        }

        .product-list {
          list-style: none;
          padding-left: 0;
          margin: 16px 0;
          font-size: 14px;
          color: #ccc;
        }

        .product-list li {
          margin-bottom: 6px;
        }

        .consult-note {
          font-size: 13px;
          color: #ccc;
          margin-top: 8px;
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
            <Link to="/" className="logo">
              RI
            </Link>
            <nav className="nav-menu">
              <Link to="/about" className="nav-link">
                About
              </Link>
              <Link to="/services" className="nav-link">
                Services
              </Link>
              <Link to="/contact" className="nav-link">
                Contact Us
              </Link>
              <Link to="/ai-pm-letters" className="nav-link primary">
                Read the AI PM Letters
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1>Build, Lead, and Scale with AI Enhanced Project Leadership</h1>
          <p>
            Join Robin Issac in a free 80 minute WhatsApp session on AI powered project management. Learn how to
            execute projects with clarity, speed, and psychological strength.
          </p>
          <div className="hero-cta-wrapper">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="cta-button">
              Join the Free WhatsApp Session
            </a>
          </div>
          <div className="hero-cta-wrapper" style={{ marginTop: "16px" }}>
            <a href={CONTACT_WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="cta-button">
              Contact me now on WhatsApp
            </a>
          </div>
          <p className="hero-note">
            All updates, links, and offers are shared inside this single WhatsApp group so you stay in one focused place.
          </p>
        </div>
      </section>

      {/* What you will get */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">What you build with Elite PM</h2>
          <p className="section-subtitle">Four pillars that support your growth as an execution first project leader.</p>
          <div className="grid grid-4">
            <div className="card">
              <h3>Elite PM Foundations</h3>
              <p>Plan projects with confidence using PMI aligned structures that work in real IT and banking environments.</p>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="card-button">
                Learn in the WhatsApp workshop
              </a>
            </div>
            <div className="card">
              <h3>AI Workflows</h3>
              <p>Use practical AI prompts and tools to speed up planning, risk analysis, and communication without losing control.</p>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="card-button">
                Get AI workflow examples
              </a>
            </div>
            <div className="card">
              <h3>Leadership Psychology</h3>
              <p>Build mental models and communication habits that keep teams calm, clear, and accountable even in pressure.</p>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="card-button">
                Join the live Q and A
              </a>
            </div>
            <div className="card">
              <h3>Career Positioning</h3>
              <p>Position yourself as an Elite PM who can lead AI driven change programs, not just deliver tasks.</p>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="card-button">
                Ask Robin in the group
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Core programs and offers */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Programs</h2>
          <p className="section-subtitle">
            Start with the free WhatsApp session. When you are ready to go deeper, choose one of these paths. All enrollments
            and questions flow through the same WhatsApp group.
          </p>

          <div className="grid grid-2">
            {/* 9 Mission self paced */}
            <div className="product-card">
              <span className="badge">Starter program</span>
              <div className="product-mockup">🎯</div>
              <h3>Self Paced 9 Mission Video Program</h3>
              <p>
                Bite sized missions that teach you how to behave like an Elite Project Manager in real work situations.
                Designed for busy professionals who want a quick but solid start.
              </p>
              <ul className="product-list">
                <li>9 self paced video missions.</li>
                <li>Checklists and templates you can reuse.</li>
                <li>AI prompts for planning, risk, and communication.</li>
              </ul>
              <p className="limited-note">Best first step after you attend the free WhatsApp session.</p>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="cta-button">
                Get link inside WhatsApp
              </a>
            </div>

            {/* Lifetime membership */}
            <div className="product-card">
              <div className="product-mockup">🏆</div>
              <h3>Elite PM Academy Lifetime Membership</h3>
              <p>
                One time payment for lifetime access to the Elite PM community, new missions, live calls, and AI resource
                library. Ideal for serious professionals who want long term support.
              </p>
              <ul className="product-list">
                <li>Lifetime access to member only content and future updates.</li>
                <li>Monthly live calls for Q and A and hot seat reviews.</li>
                <li>Expanded AI PM toolkit with workflows and real project case studies.</li>
              </ul>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="cta-button">
                Ask about this program
              </a>
            </div>
          </div>

          <div className="grid grid-2" style={{ marginTop: "40px" }}>
            {/* Mastermind or group */}
            <div className="product-card">
              <span className="badge">Group track</span>
              <div className="product-mockup">🤝</div>
              <h3>Elite PM Mastermind</h3>
              <p>
                Small group container for ambitious project managers who want feedback, accountability, and peer learning
                while they execute real projects.
              </p>
              <ul className="product-list">
                <li>Monthly group calls with case reviews.</li>
                <li>Peer support and networking with other PMs.</li>
                <li>Focus on implementation rather than theory.</li>
              </ul>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="cta-button">
                Apply through WhatsApp
              </a>
            </div>

            {/* Consulting */}
            <div className="product-card">
              <span className="badge">For companies and founders</span>
              <div className="product-mockup">📊</div>
              <h3>Executive PM Consulting</h3>
              <p>
                Strategic consulting for organizations that want to upgrade their project management capability, align
                teams, and integrate AI into their delivery systems.
              </p>
              <ul className="product-list">
                <li>Assessment of current PM practices and gaps.</li>
                <li>Design of PM and AI PM frameworks tailored to your context.</li>
                <li>Leadership and team training sessions.</li>
              </ul>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="cta-button">
                Discuss project on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Explore Your Curiosity</h2>
          <p className="section-subtitle">
            Deep dives into human potential, PM leadership, and AI execution. Articles and lessons are announced inside the
            WhatsApp group.
          </p>
          <div className="grid grid-3">
            <div className="blog-card">
              <div className="blog-graphic">AI and Leadership</div>
              <div className="blog-content">
                <h3>The Future of Project Leadership</h3>
                <p>How AI is changing the PM role and the skills that will protect your career in the next decade.</p>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="card-button">
                  Get link inside WhatsApp
                </a>
              </div>
            </div>
            <div className="blog-card">
              <div className="blog-graphic">Psychology</div>
              <div className="blog-content">
                <h3>Mental Models for Execution</h3>
                <p>Simple psychological tools that help you stay calm, plan clearly, and move teams into action.</p>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="card-button">
                  Ask for this topic
                </a>
              </div>
            </div>
            <div className="blog-card">
              <div className="blog-graphic">Strategy</div>
              <div className="blog-content">
                <h3>Building Your PM Brand</h3>
                <p>How to position yourself as a PM who can lead AI projects, not just track tasks in a tool.</p>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="card-button">
                  Get updates in WhatsApp
                </a>
              </div>
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
              LinkedIn: robinissac
            </a>
            <a
              href="https://youtube.com/@RobinIssac007-AI-PM"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              YouTube: @RobinIssac007 AI PM
            </a>
          </div>
          <div className="hero-cta-wrapper" style={{ marginBottom: "32px" }}>
            <a href={CONTACT_WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="cta-button">
              Contact me now on WhatsApp
            </a>
          </div>
          <p className="footer-text">Built by Robin Issac. Execution is your superpower.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
