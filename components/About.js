export default function About() {
  return (
    <section className="section about-section" id="about">
      <div className="container">
        {/* Section Header */}
        <div className="section-header reveal-item">
          <span className="section-tag">01 / ABOUT ME</span>
          <h2 className="section-title">Curiosity-driven engineering with an eye on the future.</h2>
          <p className="section-desc">
            Passionate about learning new technologies, developing intelligent applications, and solving foundational real-world problems.
          </p>
        </div>

        {/* Two-Column Grid */}
        <div className="about-grid">
          {/* Left Column: Authentic Bio */}
          <div className="about-bio reveal-item">
            <div className="bio-card">
              <div className="bio-headline" style={{ marginBottom: '18px' }}>
                <h3>Atharv Tripathi</h3>
                <p className="bio-role">Computer Science &amp; Engineering Student</p>
              </div>

              <div className="bio-prose">
                <p>
                  I am a Computer Science and Engineering student at Bangalore Institute of Technology, driven by an unyielding fascination with how technology evolves and reshapes our world.
                </p>
                <p>
                  I love diving into new paradigms—whether it&apos;s exploring core computing languages like C and Java, embracing AI-assisted development and vibe coding, or building meaningful solutions like smart irrigation platforms that solve critical ecological challenges.
                </p>
                <p>
                  My goal is to continuously expand my technical horizons, iterate rapidly on ideas, and craft software that is grounded in sound logic and practical impact.
                </p>
              </div>

              {/* Quick Meta */}
              <div className="bio-meta">
                <div className="meta-row">
                  <span className="meta-label">Location:</span>
                  <span className="meta-value">Bangalore, India</span>
                </div>
                <div className="meta-row">
                  <span className="meta-label">College:</span>
                  <span className="meta-value">Bangalore Institute of Technology</span>
                </div>
                <div className="meta-row">
                  <span className="meta-label">Focus:</span>
                  <span className="meta-value">Computer Science, AI &amp; Emerging Tech</span>
                </div>
              </div>

              <div className="bio-cta">
                <a href="#contact" className="link-arrow">
                  <span>Let&apos;s connect &amp; collaborate</span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Bento Cards */}
          <div className="about-bento">
            {/* Bento Card 1: Core Skills */}
            <div className="bento-card reveal-item">
              <div className="bento-header">
                <div className="bento-icon" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="16 18 22 12 16 6"></polyline>
                    <polyline points="8 6 2 12 8 18"></polyline>
                  </svg>
                </div>
                <h3 className="bento-title">Skills &amp; Technologies</h3>
              </div>

              <div className="skills-groups">
                <div className="skill-group">
                  <span className="skill-group-name">Core Languages</span>
                  <div className="skill-tags">
                    <span className="mono-pill">C</span>
                    <span className="mono-pill">Java</span>
                    <span className="mono-pill">HTML (Beginner)</span>
                  </div>
                </div>

                <div className="skill-group">
                  <span className="skill-group-name">Modern Workflows &amp; AI</span>
                  <div className="skill-tags">
                    <span className="mono-pill">AI Prompting</span>
                    <span className="mono-pill">Vibe Coding</span>
                    <span className="mono-pill">Rapid Prototyping</span>
                  </div>
                </div>

                <div className="skill-group">
                  <span className="skill-group-name">Domains &amp; Interests</span>
                  <div className="skill-tags">
                    <span className="mono-pill">Smart Agriculture</span>
                    <span className="mono-pill">Soil Physics &amp; Sensor Data</span>
                    <span className="mono-pill">Machine Learning Concepts</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bento Card 2: Education */}
            <div className="bento-card reveal-item">
              <div className="bento-header">
                <div className="bento-icon" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                    <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                  </svg>
                </div>
                <h3 className="bento-title">Education</h3>
              </div>
              <div className="edu-item">
                <div className="edu-top">
                  <span className="edu-degree">B.E. in Computer Science and Engineering</span>
                </div>
                <span className="edu-school">Bangalore Institute of Technology (BIT)</span>
                <span className="edu-note">Bangalore, Karnataka</span>
              </div>
            </div>

            {/* Bento Card 3: Key Highlights */}
            <div className="bento-card reveal-item">
              <div className="bento-header">
                <div className="bento-icon" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                </div>
                <h3 className="bento-title">Key Highlights</h3>
              </div>
              <div className="highlights-list">
                <div className="highlight-row">
                  <span className="highlight-dot">•</span>
                  <div className="highlight-text">
                    <strong>Creator of AquaSense:</strong> Engineered an intelligent, data-driven irrigation and soil health optimization system for smart agriculture.
                  </div>
                </div>
                <div className="highlight-row">
                  <span className="highlight-dot">•</span>
                  <div className="highlight-text">
                    <strong>AI-Powered Developer:</strong> Leveraging AI prompting and vibe coding to accelerate concept ideation into working web software.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
