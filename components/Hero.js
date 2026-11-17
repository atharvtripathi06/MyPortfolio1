export default function Hero() {
  return (
    <section className="section hero-section" id="hero">
      <div className="container hero-container">
        {/* Availability Badge */}
        <div className="hero-badge reveal-item">
          <span className="status-indicator pulse"></span>
          <span className="badge-text">Available for collaborations &amp; opportunities</span>
        </div>

        {/* Main Headline */}
        <h1 className="hero-headline reveal-item">
          Hi, I&apos;m <span className="text-accent">Atharv Tripathi</span>.<br />
          Passionate about New Technology.
        </h1>

        {/* Value Proposition */}
        <p className="hero-subtext reveal-item">
          Computer Science &amp; Engineering student at Bangalore Institute of Technology. Exploring the frontiers of modern software engineering, AI prompting, and data-driven solutions to solve real-world problems.
        </p>

        {/* CTA Buttons */}
        <div className="hero-actions reveal-item">
          <a href="#projects" className="btn btn-primary">
            <span>View My Work</span>
            <svg
              className="btn-icon"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </a>
          <a href="#contact" className="btn btn-secondary">
            <span>Get in Touch</span>
            <svg
              className="btn-icon"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
