import React, { useState, useEffect, useRef } from 'react';

export const ProjectPreviewFrame = ({ url, title }) => {
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.05, rootMargin: '150px' }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="w-full h-full bg-[#FAF8F5] relative overflow-hidden">
      {isInView ? (
        <iframe
          src={url}
          title={title}
          className="w-full h-full border-0 pointer-events-none transform scale-100 group-hover:scale-[1.03] transition-transform duration-700 ease-out"
          loading="lazy"
          sandbox="allow-scripts allow-same-origin allow-forms"
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-tr from-[#FAF8F5] to-[#F1EDE4]">
          <div className="flex flex-col items-center gap-2">
            <span className="w-3.5 h-3.5 rounded-full border border-purple-200 border-t-purple-600 animate-spin" />
            <span className="text-[9px] font-mono text-[#706B65]/60 tracking-wider">LOADING SYSTEM...</span>
          </div>
        </div>
      )}
    </div>
  );
};
