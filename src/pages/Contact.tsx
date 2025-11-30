 <form
  name="contact"
  method="POST"
  data-netlify="true"
  netlify-honeypot="bot-field"
>
  {/* required for Netlify Forms */}
  <input type="hidden" name="form-name" value="contact" />
  {/* honeypot field, hidden from users */}
  <p style={{ display: "none" }}>
    <label>
      Do not fill this field: <input name="bot-field" />
    </label>
  </p>

  <div className="form-row">
    <label className="form-label">Full Name</label>
    <input
      name="Full Name"
      type="text"
      className="form-input"
      placeholder="Your name"
      required
    />
  </div>

  <div className="form-row">
    <label className="form-label">Email Address</label>
    <input
      name="Email"
      type="email"
      className="form-input"
      placeholder="you@example.com"
      required
    />
  </div>

  <div className="form-row">
    <label className="form-label">Subject</label>
    <input
      name="Subject"
      type="text"
      className="form-input"
      placeholder="Consulting, coaching, speaking, or other"
      required
    />
  </div>

  <div className="form-row">
    <label className="form-label">Message</label>
    <textarea
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
    After you click Send we will store your message securely in Netlify Forms and reply within 24–48 hours.
  </p>
</form>
