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

    targets.forEach((el) => {
      el.classList.add('revealed');
      el.style.opacity = '1';
      el.style.transform = 'none';
      el.style.animation = 'none';
      el.style.transition = 'none';
    });
  }, []);

  return containerRef;
};
