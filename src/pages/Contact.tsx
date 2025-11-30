 import { useState } from "react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    // allow Netlify to capture the form
    // but also show thank you state after POST
    setSubmitted(true);
  };

  return (
    <>
      {!submitted ? (
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
        >
          {/* Required hidden input */}
          <input type="hidden" name="form-name" value="contact" />

          {/* Netlify honeypot */}
          <p style={{ display: "none" }}>
            <label>
              Do not fill this: <input name="bot-field" />
            </label>
          </p>

          <div className="form-row">
            <label className="form-label">Full Name</label>
            <input
              name="fullName"
              type="text"
              className="form-input"
              placeholder="Your name"
              required
            />
          </div>

          <div className="form-row">
            <label className="form-label">Email Address</label>
            <input
              name="email"
              type="email"
              className="form-input"
              placeholder="you@example.com"
              required
            />
          </div>

          <div className="form-row">
            <label className="form-label">Subject</label>
            <input
              name="subject"
              type="text"
              className="form-input"
              placeholder="Consulting, coaching, speaking, or other"
              required
            />
          </div>

          <div className="form-row">
            <label className="form-label">Message</label>
            <textarea
              name="message"
              className="form-textarea"
              placeholder="Tell me how I can help."
              required
            />
          </div>

          <button type="submit" className="cta-button">
            Send Message
          </button>

          <p className="helper-note">
            After you click Send, your message will be delivered instantly.
          </p>
        </form>
      ) : (
        <div
          style={{
            background: "#101010",
            border: "1px solid #222",
            borderRadius: "16px",
            padding: "40px",
            marginTop: "20px",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              fontSize: "28px",
              marginBottom: "12px",
              fontWeight: "700",
            }}
          >
            Thank You for Reaching Out
          </h2>

          <p
            style={{
              color: "#ccc",
              fontSize: "16px",
              marginBottom: "20px",
              lineHeight: "1.7",
            }}
          >
            Your message has been received. You will receive a response within
            24 to 48 hours. For faster communication or workshop updates, feel
            free to join the WhatsApp group.
          </p>

          <a
            href="https://chat.whatsapp.com/BVUSqeP38TeLholBLRrkY1"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button"
          >
            Join the WhatsApp Group
          </a>
        </div>
      )}
    </>
  );
};

export default Contact;
