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
    <div ref={containerRef} className="page-transition pt-28 pb-24 bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">

        {/* Header */}
        <div className="mb-20 text-left">
          <div className="reveal text-[11px] font-body font-semibold tracking-wider text-[#8B5CF6] uppercase tracking-[0.2em] mb-6">
            {t('aboutStudio')}
          </div>
          <h1 className="reveal text-6xl sm:text-8xl lg:text-[9rem] font-display font-light text-[#1A1816]">
            Vedant<br />
            <span className="italic text-[#8B5CF6]">Joliya</span>
          </h1>
        </div>

        {/* Founder Story */}
        <div className="reveal grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24 pb-16 border-b border-[#1A1816]/10 text-left">
          <div className="lg:col-span-7 space-y-6">
            <p className="text-xl sm:text-2xl font-display font-light text-[#1A1816] leading-relaxed">
              {t('aboutBio1')}
            </p>
            <p className="text-sm text-[#706B65] leading-relaxed font-normal">
              {t('aboutBio2')}
            </p>
            <div className="flex items-center gap-6 pt-4 text-xs text-[#706B65] font-body font-semibold tracking-wider">
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
              className="block w-full rounded-2xl bg-white border border-[#1A1816]/10 p-8 sm:p-10 space-y-6 hover:border-[#8B5CF6] transition-colors duration-500 shadow-vj-md shadow-vj-hover"
            >
              <div className="text-[11px] font-body font-semibold tracking-wider text-[#8B5CF6] uppercase tracking-[0.15em]">
                {t('workWithMe')}
              </div>
              <h3 className="text-3xl font-display font-medium text-[#1A1816]">
                {t('startProjectWithVedant')}
              </h3>
              <p className="text-xs text-[#706B65] leading-relaxed">
                {t('directCollab')}
              </p>
              <div className="flex items-center gap-2 text-sm text-[#1A1816] font-semibold uppercase">
                <span>{t('startProject')}</span>
                <ArrowUpRight className="w-4 h-4 text-[#8B5CF6]" />
              </div>
            </Link>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="reveal mb-24 text-left">
          <div className="text-[11px] font-body font-semibold tracking-wider text-[#8B5CF6] uppercase tracking-[0.2em] mb-8">
            {t('techStack')}
          </div>
          <div className="flex flex-wrap gap-3">
            {techStack.map((tech, idx) => (
              <span
                key={idx}
                className="px-5 py-2.5 rounded-full bg-white border border-[#1A1816]/10 text-xs text-[#1A1816] font-medium shadow-xs hover:border-[#8B5CF6] transition-all duration-300 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="reveal mb-24 pb-16 border-b border-[#1A1816]/10 text-left">
          <div className="text-[11px] font-body font-semibold tracking-wider text-[#8B5CF6] uppercase tracking-[0.2em] mb-8">
            {t('education')}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {qualifications.map((q, idx) => (
              <div key={idx} className="p-8 rounded-2xl bg-white border border-[#1A1816]/10 space-y-3 shadow-vj-sm">
                <div className="flex items-center gap-2 text-[11px] font-body font-semibold tracking-wider text-[#8B5CF6] uppercase tracking-wider">
                  <GraduationCap className="w-3.5 h-3.5" />
                  <span>{q.period}</span>
                </div>
                <h3 className="text-2xl font-display font-medium text-[#1A1816]">{q.degree}</h3>
                <p className="text-xs text-[#706B65] font-semibold">{q.institution}</p>
                <p className="text-xs text-[#706B65]/80">{q.details}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div className="reveal text-left">
          <div className="text-[11px] font-body font-semibold tracking-wider text-[#8B5CF6] uppercase tracking-[0.2em] mb-8">
            {t('experience')}
          </div>
          <div className="space-y-6">
            {experience.map((exp, idx) => (
              <div key={idx} className="py-8 border-b border-[#1A1816]/10 grid grid-cols-1 lg:grid-cols-12 gap-6">
                <div className="lg:col-span-4">
                  <h3 className="text-2xl font-display font-medium text-[#1A1816]">{exp.role}</h3>
                  <div className="text-xs text-[#8B5CF6] font-semibold mt-1">{exp.company}</div>
                  <div className="text-[11px] text-[#706B65] font-body font-semibold tracking-wider mt-1">{exp.period}</div>
                </div>
                <div className="lg:col-span-8">
                  <p className="text-sm text-[#706B65] leading-relaxed font-normal">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
