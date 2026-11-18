import Icon from './Icons';
import SectionBackdrop from './SectionBackdrop';
import { achievements, profile } from '@/data/portfolio';

export default function Achievements() {
  return (
    <section className="section achievements-section" id="achievements">
      <SectionBackdrop src="/images/contact-lake.webp" />

      <div className="container">
        <div className="section-header reveal-item">
          <span className="section-tag">04 / Achievements</span>
          <h2 className="section-title">Milestones worth building on.</h2>
          <p className="section-desc">
            Moments that shaped how I work — a shipped product, a foundation in computer science,
            and a way of building that keeps getting faster.
          </p>
        </div>

        <div className="achievements-grid">
          {achievements.map((item) => (
            <article className="achievement-card reveal-item" key={item.title}>
              <span className="achievement-icon" aria-hidden="true">
                <Icon name={item.icon} size={20} />
              </span>
              <span className="achievement-kicker">{item.kicker}</span>
              <h3 className="achievement-title">{item.title}</h3>
              <p className="achievement-text">{item.text}</p>
            </article>
          ))}
        </div>

        <div className="achievements-foot reveal-item">
          <p>
            <strong>More milestones on the way.</strong> I am currently building the next project
            and documenting the process.
          </p>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="link-arrow"
          >
            <span>Follow along on GitHub</span>
            <Icon name="arrowUpRight" size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
