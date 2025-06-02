
import { Link } from "react-router-dom";

const About = () => {
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

        .about-section {
          padding: 60px 0 80px;
        }

        .about-content {
          max-width: 800px;
          margin: 0 auto;
        }

        .about-content h2 {
          font-size: 32px;
          font-weight: 600;
          margin-bottom: 24px;
          color: #D2B48C;
        }

        .about-content p {
          font-size: 18px;
          color: #ccc;
          margin-bottom: 24px;
          line-height: 1.7;
        }

        .experience-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 40px;
          margin: 60px 0;
        }

        .experience-card {
          background: #111;
          border: 1px solid #333;
          border-radius: 12px;
          padding: 32px;
        }

        .experience-card h3 {
          font-size: 24px;
          font-weight: 600;
          margin-bottom: 16px;
          color: #D2B48C;
        }

        .experience-card p {
          color: #ccc;
          font-size: 16px;
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

          .experience-grid {
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
          <h1>About Robin Issac</h1>
          <p>Transforming professionals into execution-first leaders through AI-enhanced project management and psychological mastery.</p>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="container">
          <div className="about-content">
            <h2>My Mission</h2>
            <p>
              I believe that execution is the ultimate superpower in today's fast-paced world. My mission is to help ambitious professionals transform into elite project managers who don't just manage—they lead, inspire, and deliver extraordinary results.
            </p>
            <p>
              Through AI-enhanced methodologies, psychological frameworks, and proven execution strategies, I guide professionals to build unshakeable leadership capabilities that set them apart in their careers.
            </p>

            <h2>My Approach</h2>
            <p>
              My methodology combines three core pillars: AI-powered efficiency, psychological mastery, and execution excellence. I believe that the future belongs to those who can seamlessly integrate cutting-edge technology with deep human understanding.
            </p>
            <p>
              Every program, coaching session, and resource I create is designed to help you build the mental models, technical skills, and leadership presence needed to thrive in an AI-enhanced world.
            </p>

            <div className="experience-grid">
              <div className="experience-card">
                <h3>AI Integration Expertise</h3>
                <p>Deep expertise in integrating AI tools and workflows into project management processes, helping teams achieve 10x productivity gains through intelligent automation and decision-making frameworks.</p>
              </div>
              <div className="experience-card">
                <h3>Leadership Psychology</h3>
                <p>Advanced understanding of psychological principles that drive high-performance teams, including influence, motivation, and the mental models that separate elite leaders from the rest.</p>
              </div>
              <div className="experience-card">
                <h3>Execution Excellence</h3>
                <p>Proven methodologies for turning vision into reality, with a track record of helping professionals build systematic approaches to consistent, exceptional delivery.</p>
              </div>
            </div>

            <h2>Why I Do This Work</h2>
            <p>
              I've seen too many talented professionals struggle with execution despite having brilliant ideas and strong technical skills. The gap between intention and impact is where careers stagnate and potential goes unrealized.
            </p>
            <p>
              My work bridges that gap. I help you build the systems, mindsets, and capabilities that transform you from someone who tries to someone who consistently delivers at an elite level.
            </p>
            <p>
              Because when you master execution, everything else becomes possible.
            </p>
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

export default About;
