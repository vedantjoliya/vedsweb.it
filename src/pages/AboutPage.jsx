import React from 'react';
import { Link } from 'react-router-dom';
import { usePortfolio } from '../context/PortfolioContext';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { GraduationCap, MapPin, ArrowUpRight } from 'lucide-react';

export const AboutPage = () => {
  const { t } = usePortfolio();
  const containerRef = useScrollReveal();

  const qualifications = [
    {
      period: 'Sept 2025 — Present',
      degree: t('degreeMsc'),
      institution: t('instMsc'),
      details: t('descMsc')
    },
    {
      period: 'Aug 2022 — April 2025',
      degree: t('degreeBsc'),
      institution: t('instBsc'),
      details: t('descBsc')
    }
  ];

  const experience = [
    {
      role: t('expRole1'),
      company: t('expCompany1'),
      period: t('expPeriod1'),
      description: t('expDesc1')
    },
    {
      role: t('expRole2'),
      company: t('expCompany2'),
      period: t('expPeriod2'),
      description: t('expDesc2')
    }
  ];

  const techStack = [
    'Framer', 'React', 'Next.js', 'Figma', 'TailwindCSS',
    'Google Search Console', 'Google Analytics', 'JavaScript',
    'HTML/CSS', 'Vite', 'Git', 'Vercel'
  ];

  return (
    <div ref={containerRef} className="page-transition pt-20 sm:pt-28 pb-16 sm:pb-24 bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-10">

        {/* Header */}
        <div className="mb-12 sm:mb-20 text-left">
          <div className="reveal text-[10px] sm:text-[11px] font-body font-semibold tracking-wider text-[#8B5CF6] uppercase tracking-[0.2em] mb-4 sm:mb-6">
            {t('aboutStudio')}
          </div>
          <h1 className="reveal text-4xl xs:text-5xl sm:text-7xl lg:text-[9rem] font-display font-light text-[#1A1816] leading-tight">
            Vedant<br />
            <span className="italic text-[#8B5CF6]">Joliya</span>
          </h1>
        </div>

        {/* Founder Story */}
        <div className="reveal grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-16 mb-16 sm:mb-24 pb-12 sm:pb-16 border-b border-[#1A1816]/10 text-left">
          <div className="lg:col-span-7 space-y-4 sm:space-y-6">
            <p className="text-lg sm:text-2xl font-display font-light text-[#1A1816] leading-relaxed">
              {t('aboutBio1')}
            </p>
            <p className="text-xs sm:text-sm text-[#706B65] leading-relaxed font-normal">
              {t('aboutBio2')}
            </p>
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-2 sm:pt-4 text-xs text-[#706B65] font-body font-semibold tracking-wider">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#FF5E7E]" />
                <span>Parma, Italy</span>
              </div>
              <div className="flex items-center gap-2">
                <GraduationCap className="w-3.5 h-3.5 text-[#8B5CF6]" />
                <span>MSc Data Science</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <Link
              to="/contact"
              className="block w-full rounded-2xl bg-white border border-[#1A1816]/10 p-6 sm:p-10 space-y-4 sm:space-y-6 hover:border-[#8B5CF6] transition-colors duration-300 shadow-vj-md shadow-vj-hover active:scale-95"
            >
              <div className="text-[10px] sm:text-[11px] font-body font-semibold tracking-wider text-[#8B5CF6] uppercase tracking-[0.15em]">
                {t('workWithMe')}
              </div>
              <h3 className="text-2xl sm:text-3xl font-display font-medium text-[#1A1816]">
                {t('startProjectWithVedant')}
              </h3>
              <p className="text-xs text-[#706B65] leading-relaxed">
                {t('directCollab')}
              </p>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-[#1A1816] font-semibold uppercase">
                <span>{t('startProject')}</span>
                <ArrowUpRight className="w-4 h-4 text-[#8B5CF6]" />
              </div>
            </Link>
          </div>
        </div>

        {/* Education & Experience */}
        <div className="reveal grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 text-left mb-16 sm:mb-24">
          
          {/* Education */}
          <div className="space-y-6 sm:space-y-8">
            <h2 className="text-2xl sm:text-4xl font-display font-medium text-[#1A1816] border-b border-[#1A1816]/10 pb-4">
              {t('education')}
            </h2>
            <div className="space-y-6 sm:space-y-8">
              {qualifications.map((q, idx) => (
                <div key={idx} className="space-y-2">
                  <span className="text-[10px] sm:text-xs font-mono font-semibold text-[#8B5CF6] uppercase tracking-wider">
                    {q.period}
                  </span>
                  <h3 className="text-lg sm:text-xl font-display font-medium text-[#1A1816]">
                    {q.degree}
                  </h3>
                  <p className="text-xs text-[#706B65] font-medium">
                    {q.institution}
                  </p>
                  <p className="text-xs text-[#706B65]/80 font-normal leading-relaxed">
                    {q.details}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div className="space-y-6 sm:space-y-8">
            <h2 className="text-2xl sm:text-4xl font-display font-medium text-[#1A1816] border-b border-[#1A1816]/10 pb-4">
              {t('experience')}
            </h2>
            <div className="space-y-6 sm:space-y-8">
              {experience.map((e, idx) => (
                <div key={idx} className="space-y-2">
                  <span className="text-[10px] sm:text-xs font-mono font-semibold text-[#8B5CF6] uppercase tracking-wider">
                    {e.period}
                  </span>
                  <h3 className="text-lg sm:text-xl font-display font-medium text-[#1A1816]">
                    {e.role} — <span className="text-[#706B65] font-normal">{e.company}</span>
                  </h3>
                  <p className="text-xs text-[#706B65]/80 font-normal leading-relaxed">
                    {e.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Tech Stack */}
        <div className="reveal text-left">
          <h2 className="text-2xl sm:text-4xl font-display font-medium text-[#1A1816] mb-6 sm:mb-8 border-b border-[#1A1816]/10 pb-4">
            {t('techStack')}
          </h2>
          <div className="flex flex-wrap gap-2.5 sm:gap-3">
            {techStack.map((tech, idx) => (
              <span
                key={idx}
                className="px-3.5 sm:px-4 py-2 rounded-full bg-white border border-[#1A1816]/10 text-xs font-body font-medium text-[#1A1816]/80 shadow-xs"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
