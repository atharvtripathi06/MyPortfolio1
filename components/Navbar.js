'use client';

import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['hero', 'about', 'projects', 'contact'];
      const scrollPos = window.scrollY + 120;

      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && drawerOpen) {
        setDrawerOpen(false);
      }
    };

    if (drawerOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [drawerOpen]);

  const closeDrawer = () => setDrawerOpen(false);

  return (
    <>
      <header className={`site-header ${scrolled ? 'scrolled' : ''}`} id="header">
        <div className="container nav-container">
          <a href="#hero" className="brand-logo" aria-label="Atharv Tripathi - Home">
            <span className="brand-mark">AT</span>
            <span className="brand-name">Atharv Tripathi</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="nav-menu" aria-label="Primary Navigation">
            <ul className="nav-list">
              <li>
                <a
                  href="#about"
                  className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          <div className="nav-actions">
            <a href="#contact" className="btn btn-secondary btn-sm nav-cta">
              Let&apos;s Talk
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              className="menu-toggle"
              aria-label="Toggle navigation menu"
              aria-expanded={drawerOpen}
              onClick={() => setDrawerOpen(!drawerOpen)}
            >
              <span className="hamburger-bar"></span>
              <span className="hamburger-bar"></span>
              <span className="hamburger-bar"></span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${drawerOpen ? 'open' : ''}`} aria-hidden={!drawerOpen}>
        <div className="mobile-drawer-backdrop" onClick={closeDrawer} />
        <div className="mobile-drawer-content">
          <div className="mobile-drawer-header">
            <div className="brand-logo">
              <span className="brand-mark">AT</span>
              <span className="brand-name">Atharv Tripathi</span>
            </div>
            <button
              className="mobile-drawer-close"
              aria-label="Close navigation menu"
              onClick={closeDrawer}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>

          <nav className="mobile-nav" aria-label="Mobile Navigation">
            <ul className="mobile-nav-list">
              <li>
                <a href="#about" className="mobile-nav-link" onClick={closeDrawer}>
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="mobile-nav-link" onClick={closeDrawer}>
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="mobile-nav-link" onClick={closeDrawer}>
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          <div className="mobile-drawer-footer">
            <a href="#contact" className="btn btn-primary btn-block" onClick={closeDrawer}>
              Get in Touch
            </a>
            <div className="mobile-status">
              <span className="status-indicator"></span>
              <span>Available for collaborations</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
