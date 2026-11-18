import Image from 'next/image';
import Icon from './Icons';
import { profile, heroFacts } from '@/data/portfolio';

export default function Hero() {
  return (
    <section className="section hero-section" id="hero">
      <div className="hero-bg" aria-hidden="true">
        <Image
          src="/images/hero-forest.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          quality={72}
          className="section-bg-img"
        />
        <span className="hero-bg-veil" />
      </div>

      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="hero-badge">
            <span className="status-indicator pulse" aria-hidden="true" />
            <span className="badge-text">Available for collaborations &amp; opportunities</span>
          </p>

          <h1 className="hero-headline">
            Hi, I&apos;m <span className="text-accent">Atharv Tripathi</span>.
            <span className="hero-tagline">Always Curious. Always Building.</span>
          </h1>

          <p className="hero-subtext">
            Computer Science &amp; Engineering student at Bangalore Institute of Technology —
            exploring AI-assisted development, smart systems, and interfaces that make complex
            data feel simple.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              <span>View my work</span>
              <Icon name="arrowUpRight" className="btn-icon" />
            </a>
            <a href="#contact" className="btn btn-secondary">
              <span>Get in touch</span>
              <Icon name="mail" className="btn-icon" />
            </a>
          </div>
        </div>

        <aside className="hero-panel">
          <div className="panel-identity">
            <span className="panel-monogram" aria-hidden="true">AT</span>
            <div>
              <p className="panel-name">{profile.name}</p>
              <p className="panel-role">{profile.shortRole}</p>
            </div>
          </div>

          <ul className="panel-facts">
            {heroFacts.map((fact) => (
              <li className="fact-row" key={fact.text}>
                <span className="fact-icon" aria-hidden="true">
                  <Icon name={fact.icon} size={16} />
                </span>
                <span className="fact-text">{fact.text}</span>
              </li>
            ))}
          </ul>

          <div className="panel-foot">
            <span className="panel-label">Find me online</span>
            <div className="panel-socials">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="panel-social"
                aria-label="Atharv's GitHub profile"
              >
                <Icon name="github" size={18} />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="panel-social"
                aria-label="Atharv's LinkedIn profile"
              >
                <Icon name="linkedin" size={18} />
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="panel-social"
                aria-label={`Email ${profile.email}`}
              >
                <Icon name="mail" size={18} />
              </a>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
