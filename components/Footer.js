'use client';

export default function Footer() {
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <span className="brand-mark-sm">AT</span>
          <span className="footer-copy">
            &copy; {new Date().getFullYear()} Atharv Tripathi. Built with intention &amp; care.
          </span>
        </div>

        <div className="footer-note">
          Crafted with Next.js &amp; React
        </div>

        <div>
          <a href="#hero" className="back-to-top" onClick={scrollToTop} aria-label="Scroll back to top">
            <span>Back to top</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="18 15 12 9 6 15"></polyline>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
