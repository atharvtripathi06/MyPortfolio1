'use client';

import { useState } from 'react';

export default function Contact() {
  const email = 'atharvtripathi2118@gmail.com';
  const [copyFeedback, setCopyFeedback] = useState('');
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopy = async () => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(email);
      } else {
        const temp = document.createElement('input');
        temp.value = email;
        document.body.appendChild(temp);
        temp.select();
        document.execCommand('copy');
        document.body.removeChild(temp);
      }
      setCopyFeedback('Email copied to clipboard! ✓');
      setTimeout(() => setCopyFeedback(''), 3000);
    } catch {
      setCopyFeedback(`Copy failed: ${email}`);
    }
  };

  const validate = () => {
    const errs = {};
    if (!formState.name.trim()) errs.name = 'Please provide your name.';
    if (!formState.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email.trim())) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!formState.message.trim()) {
      errs.message = 'Please enter your message.';
    } else if (formState.message.trim().length < 10) {
      errs.message = 'Your message should be at least 10 characters long.';
    }
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setLoading(true);
    // Simulate submission delay for smooth UX
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 850);
  };

  const handleReset = () => {
    setFormState({ name: '', email: '', subject: '', message: '' });
    setErrors({});
    setSubmitted(false);
  };

  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        {/* Section Header */}
        <div className="section-header reveal-item">
          <span className="section-tag">03 / CONTACT ME</span>
          <h2 className="section-title">Let&apos;s build something thoughtful together.</h2>
          <p className="section-desc">
            Have a project idea, a collaboration proposal, or just want to discuss new technology? My inbox is always open.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Column: Direct Info & Socials */}
          <div className="contact-info reveal-item">
            <div className="contact-info-card">
              <h3 className="contact-subtitle">Get in touch directly</h3>
              <p className="contact-intro">
                I am actively exploring collaborations, engineering projects, and internships. Feel free to drop a message or connect on LinkedIn.
              </p>

              {/* Clickable Email Copy Box */}
              <div className="email-copy-box">
                <span className="email-label">Direct Email</span>
                <div className="email-copy-row">
                  <span className="email-address">{email}</span>
                  <button
                    type="button"
                    className="btn-copy"
                    onClick={handleCopy}
                    aria-label="Copy email address to clipboard"
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg>
                    <span>Copy</span>
                  </button>
                </div>
                {copyFeedback && <div className="copy-feedback">{copyFeedback}</div>}
              </div>

              {/* Status Card */}
              <div className="contact-status">
                <div className="status-dot"></div>
                <div>
                  <div className="status-title">Current Status</div>
                  <div className="status-desc">
                    Undergraduate CS student open to tech collaborations, student hackathons, and software engineering opportunities.
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <span className="social-label">Connect Online</span>
                <div className="social-links">
                  {/* GitHub */}
                  <a
                    href="https://github.com/atharvtripathi06"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-btn"
                    aria-label="Atharv's GitHub Profile"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                    <span>GitHub</span>
                  </a>

                  {/* LinkedIn */}
                  <a
                    href="https://www.linkedin.com/in/atharv-tripathi-070466433?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-btn"
                    aria-label="Atharv's LinkedIn Profile"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Accessible Contact Form */}
          <div className="contact-form-wrap reveal-item">
            {!submitted ? (
              <form onSubmit={handleSubmit} noValidate>
                <h3 className="form-title">Send a message</h3>
                <p className="form-subtitle">Fill in your details and I will reply as soon as possible.</p>

                {/* Name */}
                <div className="form-group">
                  <label htmlFor="contactName" className="form-label">
                    Your Name <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    id="contactName"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                    placeholder="e.g. Ada Lovelace"
                    required
                  />
                  {errors.name && <span className="field-error">{errors.name}</span>}
                </div>

                {/* Email */}
                <div className="form-group">
                  <label htmlFor="contactEmail" className="form-label">
                    Your Email <span className="required">*</span>
                  </label>
                  <input
                    type="email"
                    id="contactEmail"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                    placeholder="e.g. ada@example.com"
                    required
                  />
                  {errors.email && <span className="field-error">{errors.email}</span>}
                </div>

                {/* Subject */}
                <div className="form-group">
                  <label htmlFor="contactSubject" className="form-label">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="contactSubject"
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="e.g. Project Collaboration / Inquiry"
                  />
                </div>

                {/* Message */}
                <div className="form-group">
                  <label htmlFor="contactMessage" className="form-label">
                    Message <span className="required">*</span>
                  </label>
                  <textarea
                    id="contactMessage"
                    name="message"
                    rows="5"
                    value={formState.message}
                    onChange={handleChange}
                    className={`form-control form-textarea ${errors.message ? 'is-invalid' : ''}`}
                    placeholder="Tell me about your idea, question, or proposal..."
                    required
                  ></textarea>
                  {errors.message && <span className="field-error">{errors.message}</span>}
                </div>

                <div className="form-actions">
                  <button
                    type="submit"
                    className={`btn btn-primary btn-submit ${loading ? 'is-loading' : ''}`}
                    disabled={loading}
                  >
                    <span className="btn-label">Send Message</span>
                    <svg
                      className="btn-icon send-icon"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="22" y1="2" x2="11" y2="13"></line>
                      <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                    </svg>
                    <span className="spinner" aria-hidden="true"></span>
                  </button>
                </div>
              </form>
            ) : (
              <div className="contact-success">
                <div className="success-icon" aria-hidden="true">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </div>
                <h4 className="success-title">Message Received!</h4>
                <p className="success-message">
                  Thank you for reaching out, {formState.name}! I have received your message and will reply to your email shortly.
                </p>
                <button type="button" className="btn btn-secondary btn-sm" onClick={handleReset}>
                  Send another message
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
