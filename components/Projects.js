import Icon from './Icons';
import SectionBackdrop from './SectionBackdrop';
import { profile, project, projectNotes } from '@/data/portfolio';

export default function Projects() {
  return (
    <section className="section projects-section" id="projects">
      <SectionBackdrop src="/images/projects-river.webp" />

      <div className="container">
        <div className="section-header reveal-item">
          <span className="section-tag">03 / Featured work</span>
          <h2 className="section-title">Built with purpose, powered by data.</h2>
          <p className="section-desc">
            A spotlight on my flagship engineering project tackling real-world sustainability and
            agricultural efficiency.
          </p>
        </div>

        <article className="project-featured-card reveal-item">
          <div className="project-top">
            <div className="project-badge-wrap">
              <span className="category-badge">{project.category}</span>
              <span className="featured-label">Featured project</span>
            </div>

            <div className="project-links">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="icon-link"
                aria-label="Atharv's GitHub profile"
              >
                <Icon name="github" size={18} />
              </a>
              <a
                href={profile.aquasense}
                target="_blank"
                rel="noopener noreferrer"
                className="icon-link"
                aria-label="Launch the AquaSense live application"
              >
                <Icon name="external" size={18} />
              </a>
            </div>
          </div>

          <div className="project-layout">
            <div className="project-main">
              <h3 className="project-title">
                <a href={profile.aquasense} target="_blank" rel="noopener noreferrer">
                  {project.name} — {project.tagline}
                </a>
              </h3>

              <p className="project-description">{project.description}</p>

              <div className="project-flow">
                {project.flow.map((step) => (
                  <div className="flow-step" key={step.title}>
                    <span className="flow-icon" aria-hidden="true">
                      <Icon name={step.icon} size={18} />
                    </span>
                    <span className="flow-label">{step.label}</span>
                    <strong className="flow-title">{step.title}</strong>
                    <p className="flow-text">{step.text}</p>
                  </div>
                ))}
              </div>

              <div className="project-principle">
                <span className="principle-label">Core principle</span>
                <p>&ldquo;{project.principle}&rdquo;</p>
              </div>

              <div className="project-tags">
                {project.stack.map((tag) => (
                  <span className="mono-pill" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>

              <div className="project-cta-row">
                <a
                  href={profile.aquasense}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-sm"
                >
                  <span>Open live application</span>
                  <Icon name="external" size={16} className="btn-icon" />
                </a>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary btn-sm"
                >
                  <span>GitHub profile</span>
                  <Icon name="github" size={16} className="btn-icon" />
                </a>
              </div>
            </div>

            <aside className="project-aside">
              <div className="preview-card">
                <div className="preview-head">
                  <span className="preview-mark" aria-hidden="true">
                    <Icon name="droplet" size={20} />
                  </span>
                  <div className="preview-identity">
                    <p className="preview-name">{project.name}</p>
                    <p className="preview-sub">Irrigation decision engine</p>
                  </div>
                  <span className="preview-live">
                    <span className="status-indicator" aria-hidden="true" />
                    Live
                  </span>
                </div>

                <ul className="preview-list">
                  <li>
                    <span className="preview-ico" aria-hidden="true">
                      <Icon name="cloudRain" size={16} />
                    </span>
                    <span className="preview-item">Weather inputs</span>
                    <em>Live data</em>
                  </li>
                  <li>
                    <span className="preview-ico" aria-hidden="true">
                      <Icon name="gauge" size={16} />
                    </span>
                    <span className="preview-item">Soil &amp; crop model</span>
                    <em>ML</em>
                  </li>
                  <li>
                    <span className="preview-ico" aria-hidden="true">
                      <Icon name="droplet" size={16} />
                    </span>
                    <span className="preview-item">Irrigation advice</span>
                    <em>Decision</em>
                  </li>
                </ul>

                <dl className="preview-meta">
                  {project.meta.map((row) => (
                    <div key={row.label}>
                      <dt>{row.label}</dt>
                      <dd>{row.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </aside>
          </div>
        </article>

        <div className="project-extras">
          {projectNotes.map((note) => (
            <article className="note-card reveal-item" key={note.title}>
              <span className="card-icon" aria-hidden="true">
                <Icon name={note.icon} />
              </span>
              <h3 className="note-title">{note.title}</h3>
              <p className="note-text">{note.text}</p>
              {note.link && (
                <a href={note.link.href} className="link-arrow">
                  <span>{note.link.label}</span>
                  <Icon name="arrowRight" size={16} />
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
