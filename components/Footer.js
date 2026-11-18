'use client';

import Icon from './Icons';

export default function Footer() {
  const scrollToTop = (event) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <span className="brand-mark-sm" aria-hidden="true">
            AT
          </span>
          <span className="footer-copy">
            &copy; {new Date().getFullYear()} Atharv Tripathi. Built with intention &amp; care.
          </span>
        </div>

        <div className="footer-note">Crafted with Next.js &amp; React</div>

        <div>
          <a href="#hero" className="back-to-top" onClick={scrollToTop}>
            <span>Back to top</span>
            <Icon name="chevronUp" size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
