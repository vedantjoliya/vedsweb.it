import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { Check, Mail, ChevronDown, Globe, Languages } from 'lucide-react';

export const PricingSection = () => {
  const {
    pricing,
    currency,
    setCurrency,
    allCurrencies,
    language,
    setLanguage,
    allLanguages,
    t,
    getFormattedPrice,
    detectedCountry,
    detectedLanguageLabel
  } = usePortfolio();

  return (
    <section id="pricing" className="py-24 relative bg-[#FAF7FC] border-t border-purple-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-50 border border-purple-200/60 text-purple-700 text-xs font-semibold uppercase tracking-wider">
            {t('pricingBadge')}
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-display font-extrabold text-slate-900 tracking-tight">
            {t('pricingTitle')}
          </h2>
          
          <p className="text-slate-600 text-base font-normal">
            {t('pricingSub')}
          </p>

          {/* Location & Language Badges + Both Select Dropdowns */}
          <div className="pt-3 flex flex-wrap items-center justify-center gap-3">
            
            {/* IP Country Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-white border border-purple-200/80 text-xs font-semibold text-slate-800 shadow-sm">
              <Globe className="w-3.5 h-3.5 text-[#8B5CF6]" />
              <span>{t('locationDetected')} <strong className="text-slate-900 underline decoration-purple-300">{detectedCountry}</strong></span>
            </div>

            {/* Language Select Dropdown */}
            <div className="relative inline-flex items-center">
              <div className="absolute left-3 pointer-events-none text-[#FF5E7E]">
                <Languages className="w-3.5 h-3.5" />
              </div>
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="appearance-none pl-8 pr-9 py-2 rounded-2xl bg-white border border-purple-200/80 text-xs font-bold text-slate-800 shadow-sm focus:outline-none focus:border-[#FF5E7E] cursor-pointer hover:bg-rose-50/50 transition-colors"
              >
                {allLanguages.map((l) => (
                  <option key={l.code} value={l.code}>
                    {l.flag} {l.name} ({l.code.toUpperCase()})
                  </option>
                ))}
              </select>
              <ChevronDown className="w-3.5 h-3.5 text-slate-500 absolute right-3 pointer-events-none" />
            </div>

            {/* Currency Select Dropdown */}
            <div className="relative inline-flex items-center">
              <div className="absolute left-3 pointer-events-none text-[#8B5CF6]">
                <Globe className="w-3.5 h-3.5" />
              </div>
              <select
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
                className="appearance-none pl-8 pr-9 py-2 rounded-2xl bg-white border border-purple-200/80 text-xs font-bold text-slate-800 shadow-sm focus:outline-none focus:border-[#8B5CF6] cursor-pointer hover:bg-purple-50/50 transition-colors max-w-[240px]"
              >
                {allCurrencies.map((c) => (
                  <option key={c.code} value={c.code}>
                    {c.flag} {c.label}
                  </option>
                ))}
              </select>
              <ChevronDown className="w-3.5 h-3.5 text-slate-500 absolute right-3 pointer-events-none" />
            </div>

          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          
          {/* Card 1: Single Page */}
          <div className="rounded-3xl bg-white border border-purple-100 shadow-vj-md p-8 flex flex-col justify-between relative text-left">
            <div>
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-2">[ ESSENTIAL ]</div>
              <h3 className="text-2xl font-bold font-display text-slate-900">{pricing.singlePage.title}</h3>
              <p className="text-xs text-slate-500 mt-1 min-h-[36px] font-normal leading-relaxed">{pricing.singlePage.subtitle}</p>

              <div className="my-6 pt-4 border-t border-slate-100">
                <div className="text-4xl font-extrabold font-display text-slate-900">
                  {getFormattedPrice('singlePage')}
                </div>
                <div className="text-xs text-slate-400 mt-1 font-medium">One-time payment • All-inclusive</div>
              </div>

              <ul className="space-y-3 mb-8">
                {pricing.singlePage.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs text-slate-700 font-medium">
                    <Check className="w-4 h-4 text-[#8B5CF6] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href="#contact"
              className="w-full py-3.5 rounded-2xl bg-slate-100 hover:bg-slate-900 text-slate-900 hover:text-white font-semibold text-xs border border-slate-200/80 flex items-center justify-center gap-2 transition-all duration-200 shadow-sm"
            >
              <Mail className="w-4 h-4" />
              <span>{t('requestSinglePlan')}</span>
            </a>
          </div>

          {/* Card 2: 2 - 4 Pages (MOST POPULAR) */}
          <div className="rounded-3xl bg-slate-900 text-white border border-purple-500/30 shadow-vj-glow p-8 flex flex-col justify-between relative scale-105 z-20 text-left">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-[#8B5CF6] text-white font-bold text-xs shadow-md uppercase tracking-wider">
              {t('mostPopular')}
            </div>

            <div>
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#FF5E7E] mb-2">[ GROWTH & AGENCY ]</div>
              <h3 className="text-2xl font-bold font-display text-white">{pricing.multiPageStandard.title}</h3>
              <p className="text-xs text-slate-300 mt-1 min-h-[36px] font-normal leading-relaxed">{pricing.multiPageStandard.subtitle}</p>

              <div className="my-6 pt-4 border-t border-white/10">
                <div className="text-4xl font-extrabold font-display text-white">
                  {getFormattedPrice('multiPageStandard')}
                </div>
                <div className="text-xs text-slate-400 mt-1 font-medium">One-time payment • Secret admin portal included</div>
              </div>

              <ul className="space-y-3 mb-8">
                {pricing.multiPageStandard.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs text-slate-200 font-medium">
                    <Check className="w-4 h-4 text-[#8B5CF6] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href="#contact"
              className="w-full py-3.5 rounded-2xl bg-[#8B5CF6] hover:bg-white text-white hover:text-slate-900 font-bold text-xs flex items-center justify-center gap-2 shadow-lg transition-all duration-200"
            >
              <Mail className="w-4 h-4" />
              <span>{t('requestGrowthPlan')}</span>
            </a>
          </div>

          {/* Card 3: More Than 4 Pages */}
          <div className="rounded-3xl bg-white border border-purple-100 shadow-vj-md p-8 flex flex-col justify-between relative text-left">
            <div>
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-2">[ ENTERPRISE ]</div>
              <h3 className="text-2xl font-bold font-display text-slate-900">{pricing.multiPageEnterprise.title}</h3>
              <p className="text-xs text-slate-500 mt-1 min-h-[36px] font-normal leading-relaxed">{pricing.multiPageEnterprise.subtitle}</p>

              <div className="my-6 pt-4 border-t border-slate-100">
                <div className="text-4xl font-extrabold font-display text-slate-900">
                  {getFormattedPrice('multiPageEnterprise')}
                </div>
                <div className="text-xs text-slate-400 mt-1 font-medium">Tailored full-scale web application</div>
              </div>

              <ul className="space-y-3 mb-8">
                {pricing.multiPageEnterprise.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs text-slate-700 font-medium">
                    <Check className="w-4 h-4 text-[#8B5CF6] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href="#contact"
              className="w-full py-3.5 rounded-2xl bg-slate-100 hover:bg-slate-900 text-slate-900 hover:text-white font-semibold text-xs border border-slate-200/80 flex items-center justify-center gap-2 transition-all duration-200 shadow-sm"
            >
              <Mail className="w-4 h-4" />
              <span>{t('requestEnterprisePlan')}</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
