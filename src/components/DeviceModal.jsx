import React, { useState } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { X, ExternalLink, ZoomIn, ZoomOut } from 'lucide-react';

export const DeviceModal = () => {
  const { selectedProject, setSelectedProject } = usePortfolio();
  const [zoomLevel, setZoomLevel] = useState(1);

  if (!selectedProject) return null;

  const handleClose = () => {
    setSelectedProject(null);
    setZoomLevel(1);
  };

  const cycleZoom = () => {
    if (zoomLevel === 1) setZoomLevel(1.3);
    else if (zoomLevel === 1.3) setZoomLevel(0.8);
    else setZoomLevel(1);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-6 bg-[#1E1B18]/60 backdrop-blur-md" style={{ animation: 'fadeIn 0.3s ease forwards' }}>
      <div className="relative w-full max-w-5xl bg-[#FAF8F5] rounded-3xl border border-[#1E1B18]/15 shadow-2xl overflow-hidden flex flex-col h-[85vh] sm:h-[80vh]">
        
        {/* Header */}
        <div className="flex items-center justify-between gap-2 px-4 sm:px-6 py-3 border-b border-[#1E1B18]/10 bg-white shrink-0">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#8B5CF6]" />
            {selectedProject.demoUrl ? (
              <a
                href={selectedProject.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-[11px] font-mono-brutal font-semibold text-[#1E1B18]/60 hover:text-[#8B5CF6] transition-colors uppercase tracking-wider"
              >
                <span>{selectedProject.title}</span>
                <ExternalLink className="w-3 h-3 text-[#8B5CF6]" />
              </a>
            ) : (
              <span className="text-[11px] font-mono-brutal font-medium text-[#1E1B18]/60 uppercase tracking-wider">
                {selectedProject.title}
              </span>
            )}
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2">
            <button onClick={cycleZoom} className="flex items-center gap-1 px-3 py-1.5 rounded-lg border border-[#1E1B18]/15 bg-[#FAF8F5] text-xs text-[#1E1B18] font-medium hover:border-[#1E1B18]/40 transition-colors">
              {zoomLevel < 1.3 ? <ZoomIn className="w-3.5 h-3.5" /> : <ZoomOut className="w-3.5 h-3.5" />}
              <span className="text-[11px] font-mono-brutal">{Math.round(zoomLevel * 100)}%</span>
            </button>

            <button onClick={handleClose} className="p-1.5 sm:p-2 rounded-lg bg-[#1E1B18]/10 text-[#1E1B18] hover:bg-[#FF5E7E] hover:text-white transition-colors ml-1">
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>

        {/* Viewport Image Lightbox */}
        <div className="flex-1 w-full relative overflow-auto bg-[#F4F4F5] flex items-center justify-center p-4">
          <div className="transition-all duration-300 max-w-full max-h-full flex items-center justify-center"
            style={{
              transform: `scale(${zoomLevel})`,
              transformOrigin: 'center center'
            }}>
            <img
              src={selectedProject.imageUrl || 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80'}
              alt={selectedProject.title}
              className="max-w-[90vw] max-h-[60vh] object-contain rounded-2xl border border-[#1E1B18]/10 shadow-lg bg-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
