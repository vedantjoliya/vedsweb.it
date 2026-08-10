import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { Layout, Code2, Sparkles, BarChart3, ArrowRight } from 'lucide-react';

export const AboutAgency = () => {
  const { t } = usePortfolio();

  const capabilities = [
    {
      icon: Layout,
      title: 'Bespoke UI/UX Systems',
      description: 'High-fidelity Figma prototypes, architectural layout grids, and interactive user journey mapping engineered for high conversion.'
    },
    {
      icon: Code2,
      title: 'Live Framer & React Web Apps',
      description: 'Production-ready web applications built on Framer & React, optimized for lightning speed, SEO, and multi-device fluidity.'
    },
    {
      icon: BarChart3,
      title: 'SaaS & E-Commerce Platforms',
      description: 'Complex dashboard interfaces, custom product showcases, data visualization tools, and high-converting checkout flows.'
    },
    {
      icon: Sparkles,
      title: 'Data-Driven UX Strategy',
      description: 'Applying data science principles and usability metrics to structure digital products that perform and scale effortlessly.'
    }
  ];

  const workflow = [
    { step: '01', title: 'Discovery & Strategy', desc: 'Understanding your brand goals, target region audiences, and technical scope.' },
    { step: '02', title: 'High-Fidelity UI/UX', desc: 'Crafting pixel-perfect interface wireframes, typography systems, and Figma prototypes.' },
    { step: '03', title: 'Interactive Web Build', desc: 'Developing the live site on Framer / React with interactive device responsiveness.' },
    { step: '04', title: 'Launch & Optimization', desc: 'Performance audits, SEO optimization, and seamless handover to your team.' }
  ];

  return (
    <section id="about" className="py-24 bg-[#FAF7FC] border-t border-purple-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Foundation Bento */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-20">
          
          <div className="lg:col-span-5 text-left rounded-3xl bg-slate-900 text-white border border-purple-500/30 p-8 sm:p-10 shadow-vj-glow flex flex-col justify-between">
            <div>
              <div className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-[#FF5E7E]/20 via-[#8B5CF6]/20 to-[#3B82F6]/20 text-purple-300 text-xs font-mono font-semibold tracking-wider mb-4 uppercase border border-purple-400/30">
                {t('aboutBadge')}
              </div>
              <h2 className="text-3xl sm:text-4xl font-display font-extrabold tracking-tight leading-tight">
                {t('aboutTitle')}
              </h2>
              <p className="text-xs text-slate-300 font-normal mt-4 leading-relaxed">
                {t('aboutDesc')}
              </p>
            </div>

            <div className="pt-8 border-t border-white/10 flex flex-wrap gap-2 text-[11px] font-mono font-medium text-slate-300">
              <span className="px-3 py-1 rounded-full bg-white/10 border border-white/10">Parma, Italy</span>
              <span className="px-3 py-1 rounded-full bg-white/10 border border-white/10">Framer & React</span>
              <span className="px-3 py-1 rounded-full bg-white/10 border border-white/10">Global Coverage</span>
            </div>
          </div>

          <div className="lg:col-span-7 text-left rounded-3xl bg-white border border-purple-100 p-8 sm:p-10 shadow-vj-md flex flex-col justify-between">
            <div className="space-y-4">
              <div className="text-xs font-mono font-bold uppercase tracking-widest text-[#8B5CF6]">
                {t('philosophyBadge')}
              </div>
              <h3 className="text-2xl font-display font-bold text-slate-900">
                {t('philosophyTitle')}
              </h3>
              <p className="text-sm text-slate-600 font-normal leading-relaxed">
                {t('philosophyDesc')}
              </p>
            </div>

            <div className="pt-6 border-t border-purple-50 flex items-center justify-between">
              <span className="text-xs font-mono font-semibold text-slate-400">
                EST. 2026 • ALL WEB SOLUTIONS
              </span>
              <a href="#contact" className="text-xs font-semibold text-[#8B5CF6] hover:text-[#FF5E7E] underline flex items-center gap-1">
                <span>Inquire Now</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Capabilities Grid */}
        <div className="mb-20">
          <div className="text-left mb-8">
            <div className="text-xs font-mono font-bold uppercase tracking-widest text-[#8B5CF6] mb-1">
              {t('deliverBadge')}
            </div>
            <h3 className="text-3xl font-display font-extrabold text-slate-900">
              {t('deliverTitle')}
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="rounded-3xl bg-white border border-purple-100 p-6 shadow-vj-sm text-left flex flex-col justify-between hover:shadow-vj-md transition-shadow duration-300"
                >
                  <div>
                    <div className="w-10 h-10 rounded-2xl bg-gradient-to-r from-rose-50 via-purple-50 to-blue-50 text-[#8B5CF6] flex items-center justify-center mb-4 border border-purple-100">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="font-display font-bold text-lg text-slate-900 mb-2">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-500 font-normal leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 4-Step Process */}
        <div className="rounded-3xl bg-white border border-purple-100 p-8 sm:p-12 shadow-vj-md text-left">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 pb-4 border-b border-purple-50">
            <div>
              <div className="text-xs font-mono font-bold uppercase tracking-widest text-[#8B5CF6] mb-1">
                {t('methodologyBadge')}
              </div>
              <h3 className="text-3xl font-display font-extrabold text-slate-900">
                {t('methodologyTitle')}
              </h3>
            </div>
            <span className="text-xs font-semibold text-slate-400">
              Structured for speed & digital excellence
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {workflow.map((w, idx) => (
              <div key={idx} className="space-y-2 border-l-2 border-[#8B5CF6] pl-4">
                <div className="text-2xl font-display font-extrabold text-[#8B5CF6]">
                  {w.step}
                </div>
                <h4 className="font-display font-bold text-base text-slate-900">
                  {w.title}
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed font-normal">
                  {w.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
