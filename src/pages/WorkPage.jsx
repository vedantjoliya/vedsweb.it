import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { ExternalLink, Eye } from 'lucide-react';

export const WorkPage = () => {
  const { projects, setSelectedProject, t } = usePortfolio();
  const containerRef = useScrollReveal();

  return (
    <div ref={containerRef} className="page-transition pt-28 pb-24 bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">

        {/* Header */}
        <div className="mb-20 text-left">
          <div className="reveal text-[11px] font-body font-bold text-[#8B5CF6] uppercase tracking-[0.2em] mb-6">
            {t('exploreOurWork')}
          </div>
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-10">
            <h1 className="reveal text-6xl sm:text-8xl lg:text-[9rem] font-display font-light text-[#1A1816]">
              {t('ourPortfolio')} <span className="text-[#8B5CF6]">.</span>
            </h1>
            <p className="reveal delay-200 max-w-sm text-sm text-[#706B65] leading-relaxed lg:pt-8 font-light">
              {t('workPageSub')}
            </p>
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="space-y-24">
          {projects.length === 0 ? (
            <div className="reveal text-center py-20 px-6 bg-white border border-[#1A1816]/10 rounded-3xl">
              <p className="text-lg text-[#706B65] font-body">No projects added yet.</p>
            </div>
          ) : (
            projects.map((project, idx) => (
              <div
                key={project.id}
                className="reveal group text-left"
              >
                {/* Preview Container */}
                <div
                  className="relative rounded-2xl overflow-hidden bg-white border border-[#1A1816]/10 aspect-[16/10] sm:aspect-video cursor-pointer shadow-vj-md shadow-vj-hover"
                  onClick={() => setSelectedProject(project)}
                >
                  <iframe
                    src={project.demoUrl}
                    title={project.title}
                    className="w-full h-full border-0 pointer-events-none transform scale-100 group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                    loading="lazy"
                    sandbox="allow-scripts allow-same-origin allow-forms"
                  />

                  <div className="absolute inset-0 bg-[#1A1816]/0 group-hover:bg-[#1A1816]/30 transition-all duration-500 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transform translate-y-3 group-hover:translate-y-0 transition-all duration-300 flex items-center gap-3">
                      <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#1A1816] font-semibold text-xs hover:scale-105 transition-transform uppercase shadow-xl font-body tracking-wider">
                        <Eye className="w-4 h-4 text-[#8B5CF6]" />
                        <span>{t('preview')}</span>
                      </button>
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-2 px-5 py-3 rounded-full bg-[#1A1816] text-white text-xs font-medium hover:bg-[#8B5CF6] transition-colors uppercase shadow-xl font-body tracking-wider"
                      >
                        <span>{t('liveSite')}</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div className="mt-6 pb-8 border-b border-[#1A1816]/10">
                  <h3 className="text-3xl sm:text-5xl font-display font-medium text-[#1A1816]">
                    {project.title}
                  </h3>
                  <p className="text-sm text-[#706B65] mt-2 max-w-lg leading-relaxed font-normal">
                    {project.descriptionKey ? t(project.descriptionKey) : project.description}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
