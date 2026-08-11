import { useEffect, useRef } from 'react';

/**
 * Custom hook: observes elements with `.reveal`, `.reveal-left`, `.reveal-right`,
 * `.reveal-scale`, `.reveal-fade` classes and adds `.revealed` when they
 * enter the viewport, triggering CSS animations.
 */
export const useScrollReveal = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const root = containerRef.current || document;
    const targets = root.querySelectorAll(
      '.reveal, .reveal-left, .reveal-right, .reveal-scale, .reveal-fade'
    );

    if (!targets.length) return;

    const isMobile = window.innerWidth < 768;
    if (isMobile) {
      targets.forEach((el) => {
        el.classList.add('revealed');
        el.style.opacity = '1';
        el.style.transform = 'none';
        el.style.animation = 'none';
        el.style.transition = 'none';
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    targets.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return containerRef;
};
