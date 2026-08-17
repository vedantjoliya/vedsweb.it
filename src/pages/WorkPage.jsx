import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { ExternalLink, Eye } from 'lucide-react';
import { ProjectPreviewFrame } from '../components/ProjectPreviewFrame';

export const WorkPage = () => {
  const { projects, setSelectedProject, t } = usePortfolio();
  const containerRef = useScrollReveal();

  return (
    <div ref={containerRef} className="page-transition pt-20 sm:pt-28 pb-16 sm:pb-24 bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-10">

        {/* Header */}
        <div className="mb-12 sm:mb-20 text-left">
          <div className="reveal text-[10px] sm:text-[11px] font-body font-bold text-[#8B5CF6] uppercase tracking-[0.2em] mb-4 sm:mb-6">
            {t('exploreOurWork')}
          </div>
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 sm:gap-10">
            <h1 className="reveal text-4xl xs:text-5xl sm:text-7xl lg:text-[9rem] font-display font-light text-[#1A1816] leading-tight">
              {t('ourPortfolio')} <span className="text-[#8B5CF6]">.</span>
            </h1>
            <p className="reveal delay-200 max-w-sm text-xs sm:text-sm text-[#706B65] leading-relaxed lg:pt-8 font-light">
              {t('workPageSub')}
            </p>
          </div>
        </div>

        {/* Portfolio Grid — 2 per row on desktop, 1 on mobile */}
        {projects.length === 0 ? (
          <div className="reveal text-center py-16 px-6 bg-white border border-[#1A1816]/10 rounded-3xl">
            <p className="text-base sm:text-lg text-[#706B65] font-body">No projects added yet.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-10 lg:gap-y-16">
            {projects.map((project) => (
              <div
                key={project.id}
                className="reveal group text-left flex flex-col"
              >
                {/* Thumbnail — clicking opens preview popup */}
                <div
                  className="relative rounded-xl sm:rounded-2xl overflow-hidden bg-white border border-[#1A1816]/10 aspect-[16/10] cursor-pointer shadow-vj-md shadow-vj-hover"
                  onClick={() => setSelectedProject(project)}
                >
                  <ProjectPreviewFrame imageUrl={project.imageUrl} title={project.title} />
                  {/* Eye-hint overlay on hover */}
                  <div className="absolute inset-0 bg-[#1A1816]/0 hover:bg-[#1A1816]/20 transition-all duration-300 flex items-center justify-center pointer-events-none">
                    <div className="opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      <Eye className="w-7 h-7 sm:w-9 sm:h-9 text-white drop-shadow-xl" />
                    </div>
                  </div>
                </div>

                {/* Title + always-visible Preview/Live Site buttons */}
                <div className="mt-4 sm:mt-5 flex items-start justify-between gap-3 flex-wrap sm:flex-nowrap">
                  <div className="min-w-0 flex-1">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-display font-medium text-[#1A1816] leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-[#706B65] mt-1.5 max-w-sm leading-relaxed font-normal line-clamp-2">
                      {project.descriptionKey ? t(project.descriptionKey) : project.description}
                    </p>
                  </div>

                  {/* Action buttons — touch target optimized */}
                  <div className="flex items-center gap-2 shrink-0 pt-0.5">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="flex items-center gap-1.5 px-3 sm:px-4 py-2 sm:py-2.5 rounded-full bg-white border border-[#1A1816]/15 text-[#1A1816] font-semibold text-[10px] sm:text-[11px] hover:border-[#8B5CF6] hover:text-[#8B5CF6] transition-all duration-200 uppercase tracking-wider shadow-xs whitespace-nowrap active:scale-95"
                    >
                      <Eye className="w-3.5 h-3.5 text-[#8B5CF6]" />
                      <span>{t('preview')}</span>
                    </button>
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-3 sm:px-4 py-2 sm:py-2.5 rounded-full bg-[#1A1816] text-white text-[10px] sm:text-[11px] font-semibold hover:bg-[#8B5CF6] transition-all duration-200 uppercase tracking-wider shadow-xs whitespace-nowrap active:scale-95"
                    >
                      <span>{t('liveSite')}</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
};
