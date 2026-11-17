'use client';

import { useEffect } from 'react';

export default function ScrollReveal() {
  useEffect(() => {
    const revealItems = document.querySelectorAll('.reveal-item');
    if (!revealItems.length) return;

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-revealed');
              obs.unobserve(entry.target);
            }
          });
        },
        {
          root: null,
          threshold: 0.1,
          rootMargin: '0px 0px -40px 0px',
        }
      );

      revealItems.forEach((item) => observer.observe(item));

      return () => observer.disconnect();
    } else {
      revealItems.forEach((item) => item.classList.add('is-revealed'));
    }
  }, []);

  return null;
}
