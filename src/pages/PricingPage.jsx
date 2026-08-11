import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { usePortfolio } from '../context/PortfolioContext';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Check, MapPin } from 'lucide-react';

export const PricingPage = () => {
  const {
    pricing,
    t,
    getFormattedPrice,
    detectedCountry
  } = usePortfolio();
  const containerRef = useScrollReveal();

  const [openFaq, setOpenFaq] = useState(null);
  const faqs = [
    { q: t('faqQ1'), a: t('faqA1') },
    { q: t('faqQ2'), a: t('faqA2') },
    { q: t('faqQ3'), a: t('faqA3') },
    { q: t('faqQ4'), a: t('faqA4') },
    { q: t('faqQ5'), a: t('faqA5') },
  ];

  return (
    <div ref={containerRef} className="page-transition pt-28 pb-24 bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">

        {/* Header */}
        <div className="mb-20 text-left">
          <div className="reveal text-[11px] font-body font-bold text-[#8B5CF6] uppercase tracking-[0.2em] mb-6">
            {t('pricingBadge')}
          </div>
          <h1 className="reveal text-6xl sm:text-8xl lg:text-[8rem] font-display font-light text-[#1A1816]">
            {t('pricingTitle')}<span className="text-[#8B5CF6]"> .</span>
          </h1>


        </div>

        {/* Pricing Cards */}
        <div className="reveal grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          
          {/* Essential */}
          <div className="bg-white border border-[#1A1816]/10 rounded-3xl p-8 sm:p-10 flex flex-col justify-between text-left shadow-vj-md shadow-vj-hover">
            <div>
              <div className="text-[11px] font-body font-semibold text-[#706B65] uppercase tracking-[0.15em] mb-3">{t('essential')}</div>
              <h3 className="text-3xl font-display font-medium text-[#1A1816]">{pricing.singlePage.title}</h3>
              <p className="text-xs text-[#706B65] mt-2 min-h-[32px] font-normal leading-relaxed">{pricing.singlePage.subtitle}</p>
              <div className="my-8 pt-6 border-t border-[#1A1816]/10">
                <div className="text-5xl font-display font-light text-[#1A1816]">{getFormattedPrice('singlePage')}</div>
                <div className="text-[11px] text-[#706B65] mt-2 uppercase font-body font-semibold tracking-wider">{t('oneTimeAllInclusive')}</div>
              </div>
              <ul className="space-y-3 mb-8">
                {pricing.singlePage.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-3 text-xs text-[#1A1816]/80 font-medium">
                    <Check className="w-3.5 h-3.5 text-[#8B5CF6] shrink-0 mt-0.5" /><span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Link to="/contact" className="w-full py-3.5 rounded-full border border-[#1A1816]/20 bg-[#FDFBF7] text-center text-xs text-[#1A1816] font-body font-semibold tracking-wider hover:bg-[#1A1816] hover:text-white transition-all duration-300 uppercase shadow-xs">
              {t('requestSinglePlan')}
            </Link>
          </div>

          {/* Growth — Highlighted */}
          <div className="bg-white border-2 border-[#1A1816] rounded-3xl p-8 sm:p-10 flex flex-col justify-between text-left relative shadow-vj-glow scale-105 z-10">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#1A1816] text-white font-body font-semibold text-[10px] uppercase tracking-wider shadow-md">
              {t('mostPopular')}
            </div>
            <div>
              <div className="text-[11px] font-body font-semibold text-[#8B5CF6] uppercase tracking-[0.15em] mb-3">{t('mostPopular')}</div>
              <h3 className="text-3xl font-display font-medium text-[#1A1816]">{pricing.multiPageStandard.title}</h3>
              <p className="text-xs text-[#706B65] mt-2 min-h-[32px] font-normal leading-relaxed">{pricing.multiPageStandard.subtitle}</p>
              <div className="my-8 pt-6 border-t border-[#1A1816]/10">
                <div className="text-5xl font-display font-light text-[#1A1816]">{getFormattedPrice('multiPageStandard')}</div>
                <div className="text-[11px] text-[#706B65] mt-2 uppercase font-body font-semibold tracking-wider">{t('oneTimeCms')}</div>
              </div>
              <ul className="space-y-3 mb-8">
                {pricing.multiPageStandard.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-3 text-xs text-[#1A1816] font-semibold">
                    <Check className="w-3.5 h-3.5 text-[#8B5CF6] shrink-0 mt-0.5" /><span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Link to="/contact" className="w-full py-3.5 rounded-full bg-[#1A1816] text-white text-center text-xs font-body font-bold tracking-wider hover:bg-[#8B5CF6] transition-all duration-300 uppercase shadow-md">
              {t('requestGrowthPlan')}
            </Link>
          </div>

          {/* Enterprise */}
          <div className="bg-white border border-[#1A1816]/10 rounded-3xl p-8 sm:p-10 flex flex-col justify-between text-left shadow-vj-md shadow-vj-hover">
            <div>
              <div className="text-[11px] font-body font-semibold text-[#706B65] uppercase tracking-[0.15em] mb-3">{t('enterprise')}</div>
              <h3 className="text-3xl font-display font-medium text-[#1A1816]">{pricing.multiPageEnterprise.title}</h3>
              <p className="text-xs text-[#706B65] mt-2 min-h-[32px] font-normal leading-relaxed">{pricing.multiPageEnterprise.subtitle}</p>
              <div className="my-8 pt-6 border-t border-[#1A1816]/10">
                <div className="text-5xl font-display font-light text-[#1A1816]">{getFormattedPrice('multiPageEnterprise')}</div>
                <div className="text-[11px] text-[#706B65] mt-2 uppercase font-body font-semibold tracking-wider">{t('tailoredPlatform')}</div>
              </div>
              <ul className="space-y-3 mb-8">
                {pricing.multiPageEnterprise.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-3 text-xs text-[#1A1816]/80 font-medium">
                    <Check className="w-3.5 h-3.5 text-[#8B5CF6] shrink-0 mt-0.5" /><span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Link to="/contact" className="w-full py-3.5 rounded-full border border-[#1A1816]/20 bg-[#FDFBF7] text-center text-xs text-[#1A1816] font-body font-semibold tracking-wider hover:bg-[#1A1816] hover:text-white transition-all duration-300 uppercase shadow-xs">
              {t('requestEnterprisePlan')}
            </Link>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-32">
          <div className="reveal mb-16 text-left">
            <h2 className="text-5xl sm:text-7xl font-display font-light text-[#1A1816]">
              {t('faqTitle')}
            </h2>
          </div>

          <div className="reveal space-y-px text-left">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border-b border-[#1A1816]/10">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full py-6 sm:py-8 flex items-center justify-between text-left group"
                >
                  <span className="text-lg sm:text-2xl font-display font-medium text-[#1A1816] group-hover:text-[#8B5CF6] transition-colors pr-8">
                    {faq.q}
                  </span>
                  <span className={`text-[#1A1816]/40 text-xl shrink-0 transition-transform duration-300 ${openFaq === idx ? 'rotate-180 text-[#8B5CF6]' : ''}`}>
                    ↓
                  </span>
                </button>
                {openFaq === idx && (
                  <div className="pb-8 text-sm text-[#706B65] leading-relaxed max-w-2xl pl-0 sm:pl-4 animate-fadeIn">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
