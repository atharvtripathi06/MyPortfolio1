export default function Projects() {
  return (
    <section className="section projects-section" id="projects">
      <div className="container">
        {/* Section Header */}
        <div className="section-header reveal-item">
          <span className="section-tag">02 / FEATURED WORK</span>
          <h2 className="section-title">Built with purpose, powered by data.</h2>
          <p className="section-desc">
            A spotlight on my flagship engineering project tackling real-world sustainability and agricultural efficiency.
          </p>
        </div>

        {/* Featured Project Showcase Card */}
        <div className="reveal-item">
          <article className="project-featured-card">
            <div className="project-top">
              <div className="project-badge-wrap">
                <span className="category-badge">Smart Agriculture</span>
                <span className="featured-label">Featured Project</span>
              </div>

              <div className="project-links">
                <a
                  href="https://github.com/atharvtripathi06"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-link"
                  aria-label="View Atharv's GitHub Repository"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </a>
                <a
                  href="https://aquasense-2-0.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-link"
                  aria-label="Launch AquaSense Live Demo"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </a>
              </div>
            </div>

            <h3 className="project-title">
              <a href="https://aquasense-2-0.vercel.app/" target="_blank" rel="noopener noreferrer">
                AquaSense 2.0 — Smart Irrigation &amp; Soil Health Optimization
              </a>
            </h3>

            <p className="project-description">
              AquaSense decides if, when, and how much to irrigate using live weather inputs, soil physics, crop growth stage metrics, and a trained machine learning model.
            </p>

            {/* Core Principle Quote / Highlight Box */}
            <div className="project-principle">
              <span className="project-principle-label">Core Principle</span>
              <p>
                &ldquo;Do not irrigate simply because it is time to irrigate. AquaSense evaluates root-zone moisture, crop stage, soil retention, forecast rainfall, and application efficiency before recommending a single drop.&rdquo;
              </p>
            </div>

            {/* Tech Tags */}
            <div className="project-tags">
              <span className="mono-pill">Smart Agriculture</span>
              <span className="mono-pill">Machine Learning</span>
              <span className="mono-pill">Soil Physics</span>
              <span className="mono-pill">Live Weather API</span>
              <span className="mono-pill">Next.js</span>
              <span className="mono-pill">Vercel</span>
            </div>

            <div className="project-cta-row">
              <a
                href="https://aquasense-2-0.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-sm"
              >
                <span>Open Live Application</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
              <a
                href="https://github.com/atharvtripathi06"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-sm"
              >
                <span>GitHub Profile</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
            </div>
          </article>
        </div>

        <p className="projects-note reveal-item">
          More projects currently in active development. Stay tuned!
        </p>
      </div>
    </section>
  );
}
