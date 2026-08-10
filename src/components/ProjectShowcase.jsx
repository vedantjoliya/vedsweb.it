import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { ExternalLink, Eye, ArrowUpRight } from 'lucide-react';

export const ProjectShowcase = () => {
  const { projects, setSelectedProject, t } = usePortfolio();

  return (
    <section id="work" className="py-24 relative bg-[#FAF7FC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-6 border-b border-purple-100">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-50 border border-purple-200/60 text-purple-700 text-xs font-semibold tracking-wider mb-3 uppercase">
              {t('workBadge')}
            </div>
            <h2 className="text-4xl sm:text-5xl font-display font-extrabold text-slate-900 tracking-tight">
              {t('workTitle')}
            </h2>
          </div>
          <div className="text-xs font-semibold text-slate-500">
            4 Live Framer Applications
          </div>
        </div>

        {/* Uncluttered Showcase Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project) => (
            <div
              key={project.id}
              className="rounded-3xl bg-white border border-purple-100 shadow-vj-md shadow-vj-hover flex flex-col justify-between overflow-hidden group"
            >
              {/* Preview Window - Hidden Scrollbars, Full Scroll Support */}
              <div className="relative h-72 sm:h-84 w-full overflow-hidden bg-slate-50 border-b border-purple-50">
                
                {/* 100%+32px wrapper clips scrollbar track out of view */}
                <div className="w-[calc(100%+32px)] h-full overflow-hidden">
                  <iframe
                    src={project.demoUrl}
                    title={project.title}
                    className="w-full h-full border-0 pointer-events-none sm:pointer-events-auto"
                    loading="lazy"
                    sandbox="allow-scripts allow-same-origin"
                  />
                </div>

                {/* Hover Trigger for Full Device Modal */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-slate-950/35 backdrop-blur-xs pointer-events-auto">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#0F172A] hover:bg-[#8B5CF6] text-white font-bold text-xs shadow-xl hover:scale-105 transition-all duration-200"
                  >
                    <Eye className="w-4 h-4" />
                    <span>{t('launchPopup')}</span>
                  </button>
                </div>
              </div>

              {/* Card Bottom Actions */}
              <div className="p-5 bg-white flex items-center justify-between">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="flex items-center gap-2 text-xs font-semibold text-slate-900 hover:text-[#8B5CF6] transition-colors"
                >
                  <span>{t('devicePreview')}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>

                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-900 underline"
                >
                  <span>{t('liveLink')}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
