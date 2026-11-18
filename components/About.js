import Icon from './Icons';
import SectionBackdrop from './SectionBackdrop';

const meta = [
  { icon: 'mapPin', label: 'Location', value: 'Bangalore, India' },
  { icon: 'graduation', label: 'College', value: 'Bangalore Institute of Technology' },
  { icon: 'target', label: 'Focus', value: 'Computer Science, AI & emerging tech' },
];

const highlights = [
  {
    icon: 'droplet',
    title: 'Creator of AquaSense',
    text: 'Engineered a data-driven irrigation and soil health system for smart agriculture.',
  },
  {
    icon: 'sparkles',
    title: 'AI-powered developer',
    text: 'Uses AI prompting and rapid prototyping to move from concept to working software.',
  },
];

export default function About() {
  return (
    <section className="section about-section" id="about">
      <SectionBackdrop src="/images/about-sunlight.webp" />

      <div className="container">
        <div className="section-header reveal-item">
          <span className="section-tag">01 / ABOUT ME</span>
          <h2 className="section-title">OS CODE SUBCORE MEMBER</h2>
          <p className="section-desc">
            Passionate about learning new technologies, developing intelligent applications, and
            solving foundational real-world problems.
          </p>
        </div>

        <div className="about-grid">
          <article className="bio-card reveal-item">
            <header className="bio-head">
              <span className="bio-monogram" aria-hidden="true">AT</span>
              <div>
                <h3 className="bio-name">Atharv Tripathi</h3>
                <p className="bio-role">Computer Science &amp; Engineering Student</p>
              </div>
            </header>

            <div className="bio-prose">
              <p>
                I am a Computer Science and Engineering student at Bangalore Institute of
                Technology, driven by a fascination with how technology evolves and reshapes our
                world.
              </p>
              <p>
                I love diving into new paradigms — whether it&apos;s exploring core computing
                languages like C and Java, embracing AI-assisted development, or building
                meaningful solutions like smart irrigation platforms that tackle critical
                ecological challenges.
              </p>
              <p>
                My goal is to keep expanding my technical horizons, iterate quickly on ideas, and
                craft software grounded in sound logic and practical impact.
              </p>
            </div>

            <ul className="bio-meta">
              {meta.map((row) => (
                <li className="meta-row" key={row.label}>
                  <span className="meta-icon" aria-hidden="true">
                    <Icon name={row.icon} size={16} />
                  </span>
                  <span className="meta-label">{row.label}</span>
                  <span className="meta-value">{row.value}</span>
                </li>
              ))}
            </ul>

            <div className="bio-cta">
              <a href="#contact" className="link-arrow">
                <span>Let&apos;s connect &amp; collaborate</span>
                <Icon name="arrowRight" size={16} />
              </a>
            </div>
          </article>

          <div className="about-side">
            <article className="info-card reveal-item">
              <div className="card-head">
                <span className="card-icon" aria-hidden="true">
                  <Icon name="graduation" />
                </span>
                <h3 className="card-title">Education</h3>
              </div>
              <div className="edu-item">
                <span className="edu-degree">B.E. in Computer Science and Engineering</span>
                <span className="edu-school">Bangalore Institute of Technology (BIT)</span>
                <span className="edu-note">Bangalore, Karnataka</span>
              </div>
              <div className="card-tags">
                <span className="mono-pill pill-subtle">Undergraduate</span>
                <span className="mono-pill pill-subtle">CSE</span>
              </div>
            </article>

            <article className="info-card reveal-item">
              <div className="card-head">
                <span className="card-icon" aria-hidden="true">
                  <Icon name="trophy" />
                </span>
                <h3 className="card-title">Key highlights</h3>
              </div>
              <div className="highlights-list">
                {highlights.map((item) => (
                  <div className="highlight-row" key={item.title}>
                    <span className="highlight-icon" aria-hidden="true">
                      <Icon name={item.icon} size={16} />
                    </span>
                    <div className="highlight-text">
                      <strong>{item.title}.</strong> {item.text}
                    </div>
                  </div>
                ))}
              </div>
            </article>

            <article className="info-card reveal-item">
              <div className="card-head">
                <span className="card-icon" aria-hidden="true">
                  <Icon name="target" />
                </span>
                <h3 className="card-title">How I work</h3>
              </div>
              <div className="card-tags">
                <span className="mono-pill">First principles</span>
                <span className="mono-pill">Rapid iteration</span>
                <span className="mono-pill">AI-assisted dev</span>
                <span className="mono-pill">Practical impact</span>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
