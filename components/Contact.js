'use client';

import { useState } from 'react';
import Icon from './Icons';
import SectionBackdrop from './SectionBackdrop';
import { profile, openTo, replyNote } from '@/data/portfolio';

export default function Contact() {
  const email = profile.email;
  const [copyFeedback, setCopyFeedback] = useState('');

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
      setCopyFeedback('Email copied to clipboard!');
      setTimeout(() => setCopyFeedback(''), 3000);
    } catch {
      setCopyFeedback(`Copy failed: ${email}`);
    }
  };

  return (
    <section className="section contact-section" id="contact">
      <SectionBackdrop src="/images/hero-forest.webp" />

      <div className="container">
        <div className="section-header reveal-item">
          <span className="section-tag">05 / Contact me</span>
          <h2 className="section-title">Let&apos;s build something thoughtful together.</h2>
          <p className="section-desc">
            Have a project idea, a collaboration proposal, or just want to discuss new technology?
            My inbox is always open — no forms, just a direct line to me.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-info reveal-item">
            <div className="contact-info-card">
              <div className="card-head">
                <span className="card-icon" aria-hidden="true">
                  <Icon name="mail" />
                </span>
                <h3 className="card-title">Get in touch directly</h3>
              </div>

              <p className="contact-intro">
                I am actively exploring collaborations, engineering projects, and internships.
                Drop a message, or connect with me on LinkedIn.
              </p>

              <div className="email-copy-box">
                <span className="email-label">Direct email</span>
                <div className="email-copy-row">
                  <a className="email-address" href={`mailto:${email}`}>
                    {email}
                  </a>
                  <button
                    type="button"
                    className="btn-copy"
                    onClick={handleCopy}
                    aria-label="Copy email address to clipboard"
                  >
                    <Icon name={copyFeedback ? 'check' : 'copy'} size={15} />
                    <span>{copyFeedback ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
                <div className="copy-feedback" role="status" aria-live="polite">
                  {copyFeedback}
                </div>
              </div>

              <div className="contact-status">
                <span className="status-dot" aria-hidden="true" />
                <div>
                  <div className="status-title">Current status</div>
                  <div className="status-desc">
                    Undergraduate CS student open to tech collaborations, student hackathons, and
                    software engineering opportunities.
                  </div>
                </div>
              </div>

              <div className="contact-facts">
                <div className="contact-fact">
                  <Icon name="mapPin" size={16} />
                  <span>Bangalore, India · IST</span>
                </div>
                <div className="contact-fact">
                  <Icon name="graduation" size={16} />
                  <span>B.E. CSE · Bangalore Institute of Technology</span>
                </div>
              </div>

              <div className="social-block">
                <span className="social-label">Connect online</span>
                <div className="social-links">
                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-btn"
                    aria-label="Atharv's GitHub profile"
                  >
                    <Icon name="github" size={18} />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-btn"
                    aria-label="Atharv's LinkedIn profile"
                  >
                    <Icon name="linkedin" size={18} />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-invite reveal-item">
            <div className="contact-invite-card">
              <div className="card-head">
                <span className="card-icon" aria-hidden="true">
                  <Icon name="users" />
                </span>
                <h3 className="card-title">What I&apos;m open to</h3>
              </div>

              <ul className="open-to-list">
                {openTo.map((item) => (
                  <li className="open-to-row" key={item.title}>
                    <span className="open-to-icon" aria-hidden="true">
                      <Icon name={item.icon} size={16} />
                    </span>
                    <div className="open-to-body">
                      <strong className="open-to-title">{item.title}</strong>
                      <p className="open-to-text">{item.text}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="contact-reply">
                <span className="reply-icon" aria-hidden="true">
                  <Icon name={replyNote.icon} size={16} />
                </span>
                <div>
                  <div className="reply-title">{replyNote.title}</div>
                  <div className="reply-text">{replyNote.text}</div>
                </div>
              </div>

              <div className="contact-invite-cta">
                <a href={`mailto:${email}`} className="btn btn-primary btn-block">
                  <span>Write an email</span>
                  <Icon name="send" size={17} className="btn-icon" />
                </a>
                <a href="#projects" className="link-arrow invite-link">
                  <span>Or explore my work first</span>
                  <Icon name="arrowRight" size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
