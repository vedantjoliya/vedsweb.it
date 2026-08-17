import React from 'react';
import { Link } from 'react-router-dom';
import { usePortfolio } from '../context/PortfolioContext';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { ArrowUpRight, ArrowRight, Eye, ExternalLink, Search } from 'lucide-react';
import { ProjectPreviewFrame } from '../components/ProjectPreviewFrame';

export const HomePage = () => {
  const { projects, setSelectedProject, t } = usePortfolio();
  const containerRef = useScrollReveal();

  return (
    <div ref={containerRef} className="page-transition">

      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] sm:min-h-screen flex flex-col justify-center overflow-hidden pt-16 sm:pt-20 bg-[#FDFBF7]">
        {/* Hardware-accelerated subtle ambient glow orbs */}
        <div className="absolute top-1/3 left-1/4 w-[280px] h-[280px] sm:w-[500px] sm:h-[500px] bg-[#8B5CF6]/5 rounded-full blur-[80px] sm:blur-[140px] pointer-events-none gpu-accelerated" />
        <div className="absolute bottom-1/4 right-1/4 w-[220px] h-[220px] sm:w-[400px] sm:h-[400px] bg-[#FF7E5F]/5 rounded-full blur-[70px] sm:blur-[120px] pointer-events-none gpu-accelerated" />

        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-10 relative z-10 py-12 sm:py-20">
          
          <div className="reveal mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-2 sm:gap-2.5 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full border border-[#1A1816]/10 bg-white/80 text-[11px] sm:text-xs text-[#1A1816]/80 font-medium shadow-xs backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#8B5CF6] animate-pulse" />
              <span className="leading-snug">{t('heroStatus')}</span>
            </div>
          </div>

          {/* Editorial Display Serif Headlines — fluid mobile size scaling */}
          <div className="space-y-1 sm:space-y-2">
            <h1 className="reveal text-4xl xs:text-5xl sm:text-7xl md:text-8xl lg:text-[9.5rem] font-display font-light leading-[0.9] sm:leading-[0.85] tracking-tight text-[#1A1816] break-words">
              {t('heroCrafting')}
            </h1>
            <h1 className="reveal delay-100 text-4xl xs:text-5xl sm:text-7xl md:text-8xl lg:text-[9.5rem] font-display font-light italic leading-[0.9] sm:leading-[0.85] tracking-tight text-[#1A1816]/30 break-words">
              {t('heroDigital')}
            </h1>
            <h1 className="reveal delay-200 text-4xl xs:text-5xl sm:text-7xl md:text-8xl lg:text-[9.5rem] font-display font-normal leading-[0.9] sm:leading-[0.85] tracking-tight break-words">
              <span className="text-[#1A1816]">{t('heroExperiences')}</span> <span className="text-[#8B5CF6]">.</span>
            </h1>
          </div>

          <div className="mt-10 sm:mt-16 flex flex-col lg:flex-row lg:items-end justify-between gap-8 sm:gap-12">
            <p className="reveal delay-300 max-w-lg text-sm sm:text-base md:text-lg text-[#706B65] leading-relaxed font-light">
              {t('heroSubhead')}
            </p>

            <div className="reveal delay-400 flex flex-col xs:flex-row items-stretch xs:items-center gap-3 sm:gap-4">
              <Link
                to="/contact"
                className="flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-[#1A1816] text-white font-semibold text-xs sm:text-sm hover:bg-[#8B5CF6] transition-all duration-300 transform active:scale-95 sm:hover:scale-105 uppercase tracking-wider shadow-md text-center"
              >
                <span>{t('startProject')}</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>

              <Link
                to="/work"
                className="flex items-center justify-center gap-2 px-5 sm:px-6 py-3.5 sm:py-4 rounded-full bg-white border border-[#1A1816]/15 text-[#1A1816] text-xs sm:text-sm font-medium hover:border-[#1A1816]/40 transition-all duration-300 uppercase shadow-xs text-center"
              >
                <span>{t('viewWork')}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* GOOGLE SEO HIGHLIGHT */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-8 lg:px-10">
        <div className="reveal rounded-2xl sm:rounded-3xl bg-white border border-[#1A1816]/10 p-6 sm:p-12 md:p-16 relative overflow-hidden shadow-vj-md">
          <div className="absolute top-0 right-0 w-[200px] sm:w-[300px] h-[200px] sm:h-[300px] bg-gradient-to-bl from-[#8B5CF6]/8 to-transparent rounded-full blur-[60px] sm:blur-[80px] pointer-events-none gpu-accelerated" />
          
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 sm:gap-10 relative z-10">
            <div className="space-y-4 sm:space-y-6 max-w-2xl text-left">
              <div className="flex items-center gap-2 text-[10px] sm:text-[11px] font-body font-bold text-[#8B5CF6] uppercase tracking-[0.2em]">
                <Search className="w-3.5 h-3.5" />
                <span>{t('googleBadge')}</span>
              </div>

              <h2 className="text-3xl xs:text-4xl sm:text-6xl font-display font-medium leading-[1.1] sm:leading-[1.05] text-[#1A1816]">
                {t('googleTitle')}
              </h2>

              <p className="text-xs sm:text-sm text-[#706B65] leading-relaxed">
                {t('googleSub')}
              </p>
            </div>

            <Link
              to="/services"
              className="shrink-0 flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-[#1A1816] text-white text-xs sm:text-sm font-medium hover:bg-[#8B5CF6] transition-all duration-300 uppercase shadow-md text-center"
            >
              <span>{t('exploreServices')}</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURED WORK — responsive 2-column grid */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-8 lg:px-10">

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 sm:gap-6 mb-12 sm:mb-16">
          <div className="reveal-left text-left">
            <div className="text-[10px] sm:text-[11px] font-body font-bold text-[#8B5CF6] uppercase tracking-[0.2em] mb-2 sm:mb-3">
              {t('selectedWork')}
            </div>
            <h2 className="text-4xl xs:text-5xl sm:text-7xl lg:text-8xl font-display font-light text-[#1A1816]">
              {t('ourPortfolio')} <span className="text-[#8B5CF6]">.</span>
            </h2>
          </div>

          <Link to="/work" className="reveal-right flex items-center gap-2 text-xs sm:text-sm text-[#706B65] hover:text-[#1A1816] font-medium transition-colors hover-line uppercase">
            <span>{t('viewAll')} ({projects.length})</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {projects.length === 0 ? (
          <div className="reveal text-center py-16 px-6 bg-white border border-[#1A1816]/10 rounded-3xl">
            <p className="text-base sm:text-lg text-[#706B65] font-body">No projects added yet.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-10 gap-x-8 lg:gap-x-12 lg:gap-y-16">
            {projects.slice(0, 4).map((project, idx) => (
              <div
                key={project.id}
                className={`reveal ${idx > 0 ? `delay-${Math.min(idx, 5)}00` : ''} group text-left flex flex-col`}
              >
                {/* Thumbnail — click opens preview popup */}
                <div
                  className="relative rounded-xl sm:rounded-2xl overflow-hidden bg-white border border-[#1A1816]/10 aspect-[16/10] cursor-pointer shadow-vj-md shadow-vj-hover"
                  onClick={() => setSelectedProject(project)}
                >
                  <ProjectPreviewFrame imageUrl={project.imageUrl} title={project.title} />
                  {/* Subtle eye-hint overlay on hover */}
                  <div className="absolute inset-0 bg-[#1A1816]/0 hover:bg-[#1A1816]/20 transition-all duration-300 flex items-center justify-center pointer-events-none">
                    <div className="opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      <Eye className="w-7 h-7 sm:w-9 sm:h-9 text-white drop-shadow-xl" />
                    </div>
                  </div>
                </div>

                {/* Title + always-visible action buttons */}
                <div className="mt-4 sm:mt-5 flex items-start justify-between gap-3 flex-wrap sm:flex-nowrap">
                  <div className="min-w-0 flex-1">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-display font-medium text-[#1A1816] leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-[#706B65] mt-1 font-medium">{project.category || 'Framer Web Application'}</p>
                  </div>

                  {/* Preview + Live Site buttons — touch target optimized */}
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
      </section>

      {/* CTA BANNER */}
      <section className="py-20 sm:py-32 max-w-7xl mx-auto px-4 sm:px-8 lg:px-10">
        <div className="reveal text-center space-y-6 sm:space-y-8">
          <h2 className="text-4xl xs:text-5xl sm:text-7xl lg:text-9xl font-display font-light text-[#1A1816] leading-tight">
            {t('readyToBuild')}
          </h2>
          <p className="text-[#706B65] text-xs sm:text-sm max-w-md mx-auto font-light leading-relaxed">
            {t('customQuoteSub')}
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2.5 px-8 sm:px-10 py-4 sm:py-5 rounded-full bg-[#1A1816] text-white font-semibold text-xs sm:text-sm hover:bg-[#8B5CF6] transition-all duration-300 transform active:scale-95 sm:hover:scale-105 uppercase shadow-xl"
          >
            <span>{t('startProjectBtn')}</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </div>
  );
};
