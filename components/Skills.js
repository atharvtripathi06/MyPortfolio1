import Icon from './Icons';
import SectionBackdrop from './SectionBackdrop';
import { skillGroups, exploring } from '@/data/portfolio';

export default function Skills() {
  return (
    <section className="section skills-section" id="skills">
      <SectionBackdrop src="/images/skills-canopy.webp" />

      <div className="container">
        <div className="section-header reveal-item">
          <span className="section-tag">02 / Skills</span>
          <h2 className="section-title">A toolkit that grows with every build.</h2>
          <p className="section-desc">
            The languages, tools and ideas I reach for — from first principles in C to shipping on
            the web.
          </p>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <article className="skill-card reveal-item" key={group.title}>
              <div className="card-head">
                <span className="card-icon" aria-hidden="true">
                  <Icon name={group.icon} />
                </span>
                <h3 className="card-title">{group.title}</h3>
              </div>
              <p className="card-copy">{group.copy}</p>
              <div className="card-tags">
                {group.tags.map((tag) => (
                  <span className="mono-pill" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="learning-strip reveal-item">
          <div className="learning-head">
            <span className="card-icon" aria-hidden="true">
              <Icon name="sparkles" />
            </span>
            <div>
              <h3 className="card-title">Currently exploring</h3>
              <p className="card-copy">
                What I am reading, breaking and rebuilding right now.
              </p>
            </div>
          </div>

          <div className="learning-tags">
            {exploring.map((item) => (
              <span className="mono-pill pill-subtle" key={item}>
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
