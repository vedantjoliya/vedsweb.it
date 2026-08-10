import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

export const Hero = () => {
  const { contactInfo, currency, t } = usePortfolio();

  return (
    <section className="relative pt-20 pb-28 bg-[#FAF7FC] overflow-hidden">
      
      {/* VJ Logo Color Mesh Ambient Glow */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#FF5E7E]/15 via-[#8B5CF6]/20 to-[#3B82F6]/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-10 right-10 w-[350px] h-[350px] bg-gradient-to-br from-[#8B5CF6]/15 to-[#FF5E7E]/15 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Status Pill Header */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 border border-purple-200/80 text-xs font-semibold text-slate-800 shadow-sm backdrop-blur-md">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF5E7E] animate-pulse" />
            <span>{t('heroStatus')}</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/90 border border-purple-200/80 text-xs font-semibold text-slate-600 shadow-sm backdrop-blur-md">
            <MapPin className="w-3.5 h-3.5 text-[#8B5CF6]" />
            <span>Parma, Emilia-Romagna, Italy</span>
          </div>
        </div>

        {/* Headline */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold text-slate-900 leading-[1.1] tracking-tight">
            {t('heroHeadline1')} <br className="hidden sm:block" />
            <span className="text-[#8B5CF6]">
              {t('heroHeadline2')}
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed">
            {t('heroSubhead1')} <strong className="text-slate-900 font-semibold underline decoration-purple-300">{t('heroSubhead2')}</strong>{t('heroSubhead3')}
          </p>

          {/* Solid Action CTAs */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            
            <a
              href="#contact"
              className="flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-[#0F172A] hover:bg-[#8B5CF6] text-white font-bold text-sm shadow-xl shadow-slate-900/10 transition-all duration-200 transform hover:-translate-y-0.5"
            >
              <span>{t('requestProposal')}</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${contactInfo.email}`}
              className="flex items-center gap-2 px-6 py-4 rounded-2xl bg-white hover:bg-purple-50/50 text-slate-800 font-semibold text-sm border border-purple-200/80 shadow-sm transition-all duration-200 transform hover:-translate-y-0.5"
            >
              <Mail className="w-4 h-4 text-[#8B5CF6]" />
              <span>{t('emailDirectly')}</span>
            </a>

            <a
              href={`tel:${contactInfo.phone.replace(/\s+/g, '')}`}
              className="flex items-center gap-2 px-6 py-4 rounded-2xl bg-white hover:bg-purple-50/50 text-slate-800 font-semibold text-sm border border-purple-200/80 shadow-sm transition-all duration-200 transform hover:-translate-y-0.5"
            >
              <Phone className="w-4 h-4 text-[#8B5CF6]" />
              <span>{t('callDirectly')}</span>
            </a>

          </div>

          {/* Metrics Matrix */}
          <div className="pt-14 grid grid-cols-2 md:grid-cols-4 gap-5 max-w-4xl mx-auto text-left font-sans text-xs">
            <div className="p-5 rounded-2xl bg-white/90 border border-purple-200/80 shadow-sm backdrop-blur-md">
              <div className="text-[#FF5E7E] font-bold text-2xl font-display">04</div>
              <div className="font-semibold text-slate-700 mt-1">{t('metricLiveApps')}</div>
            </div>

            <div className="p-5 rounded-2xl bg-white/90 border border-purple-200/80 shadow-sm backdrop-blur-md">
              <div className="text-[#8B5CF6] font-bold text-2xl font-display">100%</div>
              <div className="font-semibold text-slate-700 mt-1">{t('metricBespokeUi')}</div>
            </div>

            <div className="p-5 rounded-2xl bg-white/90 border border-purple-200/80 shadow-sm backdrop-blur-md">
              <div className="text-[#3B82F6] font-bold text-2xl font-display">24H</div>
              <div className="font-semibold text-slate-700 mt-1">{t('metricResponse')}</div>
            </div>

            <div className="p-5 rounded-2xl bg-white/90 border border-purple-200/80 shadow-sm backdrop-blur-md">
              <div className="text-[#8B5CF6] font-bold text-2xl font-display">{currency}</div>
              <div className="font-semibold text-slate-700 mt-1">{t('metricPricing')}</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
