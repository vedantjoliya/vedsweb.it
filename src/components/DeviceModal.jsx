import React, { useState } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { X, ExternalLink, RefreshCw, ZoomIn, ZoomOut } from 'lucide-react';

export const DeviceModal = () => {
  const { selectedProject, setSelectedProject } = usePortfolio();
  const [iframeKey, setIframeKey] = useState(0);
  const [zoomLevel, setZoomLevel] = useState(1);

  if (!selectedProject) return null;

  const handleClose = () => setSelectedProject(null);
  const cycleZoom = () => {
    if (zoomLevel === 1) setZoomLevel(0.85);
    else if (zoomLevel === 0.85) setZoomLevel(0.75);
    else setZoomLevel(1);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-6 bg-[#1E1B18]/60 backdrop-blur-md" style={{ animation: 'fadeIn 0.3s ease forwards' }}>
      <div className="relative w-full max-w-7xl bg-[#FAF8F5] rounded-3xl border border-[#1E1B18]/15 shadow-2xl overflow-hidden flex flex-col h-[94vh] sm:h-[88vh]">
        
        {/* Header */}
        <div className="flex items-center justify-between gap-2 px-4 sm:px-6 py-3 border-b border-[#1E1B18]/10 bg-white shrink-0">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#8B5CF6] animate-pulse" />
            <span className="text-[11px] font-mono-brutal font-medium text-[#1E1B18]/60 uppercase tracking-wider hidden sm:inline-block">
              live preview
            </span>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2">
            <button onClick={cycleZoom} className="flex items-center gap-1 px-3 py-1.5 rounded-lg border border-[#1E1B18]/15 bg-[#FAF8F5] text-xs text-[#1E1B18] font-medium hover:border-[#1E1B18]/40 transition-colors">
              {zoomLevel < 1 ? <ZoomIn className="w-3.5 h-3.5" /> : <ZoomOut className="w-3.5 h-3.5" />}
              <span className="text-[11px] font-mono-brutal">{Math.round(zoomLevel * 100)}%</span>
            </button>

            <button onClick={() => setIframeKey(prev => prev + 1)} className="p-1.5 sm:p-2 rounded-lg border border-[#1E1B18]/15 bg-[#FAF8F5] text-[#1E1B18]/70 hover:text-[#1E1B18] transition-colors">
              <RefreshCw className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </button>

            {selectedProject.demoUrl && (
              <a href={selectedProject.demoUrl} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-1 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg bg-[#1E1B18] text-white font-mono-brutal font-semibold text-xs hover:bg-[#8B5CF6] transition-colors">
                <span className="text-[11px] sm:text-xs">live site</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            )}

            <button onClick={handleClose} className="p-1.5 sm:p-2 rounded-lg bg-[#1E1B18]/10 text-[#1E1B18] hover:bg-[#FF5E7E] hover:text-white transition-colors ml-1">
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>

        {/* Viewport */}
        <div className="flex-1 w-full relative overflow-hidden bg-white flex items-center justify-center">
          <div className="w-[calc(100%+32px)] h-full overflow-hidden transition-all duration-300"
            style={{
              transform: zoomLevel < 1 ? `scale(${zoomLevel})` : 'none',
              transformOrigin: 'top center',
              width: zoomLevel < 1 ? `calc(${100 / zoomLevel}% + 32px)` : 'calc(100% + 32px)',
              height: zoomLevel < 1 ? `${100 / zoomLevel}%` : '100%'
            }}>
            <iframe key={iframeKey} src={selectedProject.demoUrl} title="Preview"
              className="w-full h-full border-0 bg-white overflow-hidden"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              sandbox="allow-scripts allow-same-origin allow-forms allow-popups" />
          </div>
        </div>
      </div>
    </div>
  );
};
