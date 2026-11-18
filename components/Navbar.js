'use client';

import { useEffect, useRef, useState } from 'react';
import Icon from './Icons';

const links = [
  { href: '#about', id: 'about', label: 'About' },
  { href: '#skills', id: 'skills', label: 'Skills' },
  { href: '#projects', id: 'projects', label: 'Projects' },
  { href: '#achievements', id: 'achievements', label: 'Achievements' },
  { href: '#contact', id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const drawerRef = useRef(null);
  const frame = useRef(0);
  const sections = useRef([]);

  useEffect(() => {
    const collect = () => {
      sections.current = ['hero', ...links.map((link) => link.id)]
        .map((id) => document.getElementById(id))
        .filter(Boolean);
    };

    const handleScroll = () => {
      // Cancel any pending frame and schedule a fresh one — never leave a stale
      // frame id behind, otherwise a re-mount would block scrolling forever.
      if (frame.current) cancelAnimationFrame(frame.current);
      frame.current = requestAnimationFrame(() => {
        frame.current = 0;
        setScrolled(window.scrollY > 16);

        const probe = window.scrollY + window.innerHeight * 0.3;
        let current = 'hero';
        for (const section of sections.current) {
          if (probe >= section.offsetTop) current = section.id;
        }
        setActiveSection(current);
      });
    };

    collect();
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', collect);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', collect);
      if (frame.current) {
        cancelAnimationFrame(frame.current);
        frame.current = 0;
      }
    };
  }, []);

  useEffect(() => {
    if (!drawerOpen) return;

    const drawer = drawerRef.current;
    const previousFocus = document.activeElement;
    const getFocusable = () =>
      drawer ? Array.from(drawer.querySelectorAll('a[href], button:not([disabled])')) : [];

    getFocusable()[0]?.focus();
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setDrawerOpen(false);
        return;
      }
      if (event.key !== 'Tab') return;

      const focusable = getFocusable();
      if (!focusable.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
      if (previousFocus && typeof previousFocus.focus === 'function') {
        previousFocus.focus();
      }
    };
  }, [drawerOpen]);

  const closeDrawer = () => setDrawerOpen(false);

  return (
    <>
      <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
        <div className="container nav-container">
          <a href="#hero" className="brand-logo">
            <span className="brand-mark" aria-hidden="true">
              AT
            </span>
            <span className="brand-name">Atharv Tripathi</span>
          </a>

          <nav className="nav-menu" aria-label="Primary navigation">
            <ul className="nav-list">
              {links.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
                    aria-current={activeSection === link.id ? 'page' : undefined}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="nav-actions">
            <a href="#contact" className="btn btn-secondary btn-sm nav-cta">
              Let&apos;s talk
            </a>

            <button
              type="button"
              className="menu-toggle"
              aria-label="Open navigation menu"
              aria-expanded={drawerOpen}
              aria-controls="mobile-nav"
              onClick={() => setDrawerOpen(true)}
            >
              <Icon name="menu" size={20} />
            </button>
          </div>
        </div>
      </header>

      <div className={`mobile-drawer ${drawerOpen ? 'open' : ''}`} aria-hidden={!drawerOpen}>
        <div className="mobile-drawer-backdrop" onClick={closeDrawer} />
        <div
          className="mobile-drawer-content"
          id="mobile-nav"
          ref={drawerRef}
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
        >
          <div className="mobile-drawer-header">
            <div className="brand-logo">
              <span className="brand-mark" aria-hidden="true">
                AT
              </span>
              <span className="brand-name">Atharv Tripathi</span>
            </div>
            <button
              type="button"
              className="mobile-drawer-close"
              aria-label="Close navigation menu"
              onClick={closeDrawer}
            >
              <Icon name="close" size={20} />
            </button>
          </div>

          <nav className="mobile-nav" aria-label="Mobile navigation">
            <ul className="mobile-nav-list">
              {links.map((link) => (
                <li key={link.id}>
                  <a href={link.href} className="mobile-nav-link" onClick={closeDrawer}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mobile-drawer-footer">
            <a href="#contact" className="btn btn-primary btn-block" onClick={closeDrawer}>
              Get in touch
            </a>
            <div className="mobile-status">
              <span className="status-indicator" aria-hidden="true" />
              <span>Available for collaborations</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
