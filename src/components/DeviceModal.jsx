import React, { useState, useEffect } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { X, ExternalLink, RefreshCw, Loader } from 'lucide-react';

export const DeviceModal = () => {
  const { selectedProject, setSelectedProject } = usePortfolio();
  const [isLoading, setIsLoading] = useState(true);
  const [iframeKey, setIframeKey] = useState(0);

  // Reset loading state whenever a new project is selected
  useEffect(() => {
    if (selectedProject) {
      setIsLoading(true);
      setIframeKey(k => k + 1);
    }
  }, [selectedProject?.id]);

  if (!selectedProject) return null;

  const handleClose = () => setSelectedProject(null);

  const handleRefresh = () => {
    setIsLoading(true);
    setIframeKey(k => k + 1);
  };

  // Truncate URL for display in address bar
  const displayUrl = selectedProject.demoUrl
    ? selectedProject.demoUrl.replace(/^https?:\/\//, '').replace(/\/$/, '')
    : '';

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-1.5 xs:p-3 sm:p-6 gpu-accelerated"
      style={{ background: 'rgba(20,18,16,0.7)', backdropFilter: 'blur(16px)', animation: 'fadeIn 0.2s ease forwards' }}
      onClick={handleClose}
    >
      {/* Modal window — stop propagation so clicks inside don't close */}
      <div
        className="relative w-full max-w-5xl flex flex-col rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl border border-white/10"
        style={{ height: 'min(92vh, 800px)' }}
        onClick={e => e.stopPropagation()}
      >

        {/* ── Browser chrome bar ── */}
        <div className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2.5 sm:py-3 bg-[#1A1816] shrink-0 select-none">

          {/* Traffic light dots */}
          <div className="flex items-center gap-1.5">
            <button
              onClick={handleClose}
              className="w-3.5 h-3.5 sm:w-3 sm:h-3 rounded-full bg-[#FF5E57] hover:bg-[#FF3B2F] active:scale-95 transition-colors group relative flex items-center justify-center"
              aria-label="Close preview"
              title="Close"
            >
              <span className="opacity-0 group-hover:opacity-100 text-[#7A1A10] text-[8px] font-bold leading-none">✕</span>
            </button>
            <div className="w-3 h-3 rounded-full bg-[#FEBC2E] hidden xs:block" />
            <div className="w-3 h-3 rounded-full bg-[#28C840] hidden xs:block" />
          </div>

          {/* Address bar */}
          <div className="flex-1 flex items-center gap-1.5 sm:gap-2 bg-[#2C2A27] rounded-lg px-2.5 sm:px-3 py-1 sm:py-1.5 min-w-0">
            {/* Lock icon */}
            <svg className="w-3 h-3 text-[#8B5CF6] shrink-0" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 1C9.24 1 7 3.24 7 6v2H5a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2h-2V6c0-2.76-2.24-5-5-5zm0 2c1.65 0 3 1.35 3 3v2H9V6c0-1.65 1.35-3 3-3zm0 9a2 2 0 1 1 0 4 2 2 0 0 1 0-4z"/>
            </svg>
            <span className="text-[10px] sm:text-[12px] font-mono-brutal text-[#FDFBF7]/70 truncate flex-1">{displayUrl}</span>
          </div>

          {/* Refresh + Open in new tab */}
          <div className="flex items-center gap-1 sm:gap-1.5 shrink-0">
            <button
              onClick={handleRefresh}
              className="p-1.5 sm:p-2 rounded-md text-[#FDFBF7]/60 hover:text-[#FDFBF7] hover:bg-white/10 active:scale-95 transition-colors"
              title="Refresh"
              aria-label="Refresh preview"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isLoading ? 'animate-spin' : ''}`} />
            </button>
            {selectedProject.demoUrl && (
              <a
                href={selectedProject.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-md bg-[#8B5CF6] hover:bg-[#7C3AED] text-white text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider transition-colors active:scale-95"
                title="Open live website in new tab"
              >
                <ExternalLink className="w-3 h-3" />
                <span className="hidden xs:inline">Live Site</span>
              </a>
            )}
            <button
              onClick={handleClose}
              className="p-1.5 sm:p-2 rounded-md text-[#FDFBF7]/60 hover:text-white hover:bg-[#FF5E57]/80 active:scale-95 transition-colors"
              title="Close"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* ── Live iframe viewport ── */}
        <div className="relative flex-1 bg-white overflow-hidden">

          {/* Loading spinner overlay */}
          {isLoading && (
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-[#FDFBF7] gap-3">
              <Loader className="w-7 h-7 text-[#8B5CF6] animate-spin" />
              <p className="text-xs text-[#706B65] font-body font-medium">Loading live preview…</p>
            </div>
          )}

          {selectedProject.demoUrl ? (
            <iframe
              key={iframeKey}
              src={selectedProject.demoUrl}
              title={`Live preview — ${selectedProject.title}`}
              className="w-full h-full border-0"
              onLoad={() => setIsLoading(false)}
              onError={() => setIsLoading(false)}
              sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
              loading="eager"
              referrerPolicy="no-referrer"
            />
          ) : (
            /* Fallback: show project image if no URL */
            <div className="w-full h-full flex items-center justify-center bg-[#F4F4F5] p-4 sm:p-6">
              <img
                src={selectedProject.imageUrl}
                alt={selectedProject.title}
                className="max-w-full max-h-full object-contain rounded-xl shadow-lg"
              />
            </div>
          )}
        </div>

        {/* ── Bottom status bar ── */}
        <div className="flex items-center justify-between px-3 sm:px-4 py-1.5 bg-[#1A1816] border-t border-white/5 shrink-0">
          <span className="text-[9px] sm:text-[10px] font-mono-brutal text-[#FDFBF7]/40 uppercase tracking-widest truncate max-w-[60%]">
            {selectedProject.title}
          </span>
          <span className="text-[9px] sm:text-[10px] font-mono-brutal text-[#8B5CF6]/70 uppercase tracking-widest shrink-0">
            VedsWeb Preview
          </span>
        </div>
      </div>
    </div>
  );
};
