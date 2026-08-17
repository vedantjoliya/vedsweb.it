import React from 'react';
import { Link } from 'react-router-dom';
import { usePortfolio } from '../context/PortfolioContext';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

export const ServicesPage = () => {
  const { t } = usePortfolio();
  const containerRef = useScrollReveal();

  const services = [
    {
      title: t('srvDesignTitle'),
      tagline: t('srvDesignTag'),
      description: t('srvDesignDesc'),
      deliverables: [
        t('srvDesignD1'),
        t('srvDesignD2'),
        t('srvDesignD3'),
        t('srvDesignD4')
      ]
    },
    {
      title: t('srvDevTitle'),
      tagline: t('srvDevTag'),
      description: t('srvDevDesc'),
      deliverables: [
        t('srvDevD1'),
        t('srvDevD2'),
        t('srvDevD3'),
        t('srvDevD4')
      ]
    },
    {
      title: t('srvSeoTitle'),
      tagline: t('srvSeoTag'),
      description: t('srvSeoDesc'),
      deliverables: [
        t('srvSeoD1'),
        t('srvSeoD2'),
        t('srvSeoD3'),
        t('srvSeoD4')
      ]
    },
    {
      title: t('srvEcomTitle'),
      tagline: t('srvEcomTag'),
      description: t('srvEcomDesc'),
      deliverables: [
        t('srvEcomD1'),
        t('srvEcomD2'),
        t('srvEcomD3'),
        t('srvEcomD4')
      ]
    },
    {
      title: t('srvHostTitle'),
      tagline: t('srvHostTag'),
      description: t('srvHostDesc'),
      deliverables: [
        t('srvHostD1'),
        t('srvHostD2'),
        t('srvHostD3'),
        t('srvHostD4')
      ]
    }
  ];

  return (
    <div ref={containerRef} className="page-transition pt-20 sm:pt-28 pb-16 sm:pb-24 bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-10">

        {/* Header */}
        <div className="mb-12 sm:mb-20 text-left">
          <div className="reveal text-[10px] sm:text-[11px] font-body font-bold text-[#8B5CF6] uppercase tracking-[0.2em] mb-4 sm:mb-6">
            {t('whatWeDo')}
          </div>
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 sm:gap-10">
            <h1 className="reveal text-4xl xs:text-5xl sm:text-7xl lg:text-[9rem] font-display font-light text-[#1A1816] leading-tight">
              {t('servicesTitle')}
            </h1>
            <p className="reveal delay-200 max-w-md text-xs sm:text-sm text-[#706B65] leading-relaxed lg:pt-8 font-light">
              {t('servicesSub')}
            </p>
          </div>
        </div>

        {/* Service Cards */}
        <div className="space-y-px">
          {services.map((srv, idx) => (
            <div
              key={idx}
              className="reveal group border-b border-[#1A1816]/10 py-8 sm:py-14 text-left"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
                
                <div className="lg:col-span-5">
                  <h3 className="text-2xl sm:text-4xl md:text-5xl font-display font-medium text-[#1A1816] group-hover:text-[#8B5CF6] transition-colors duration-300">
                    {srv.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#706B65] mt-2 font-medium">
                    {srv.tagline}
                  </p>
                </div>

                <div className="lg:col-span-7 space-y-4 sm:space-y-6">
                  <p className="text-xs sm:text-sm text-[#706B65] leading-relaxed font-normal">
                    {srv.description}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                    {srv.deliverables.map((del, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2.5 text-[11px] sm:text-xs text-[#1A1816]/80 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#8B5CF6] shrink-0 mt-0.5" />
                        <span>{del}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="reveal mt-16 sm:mt-24 text-center space-y-5 sm:space-y-6">
          <h2 className="text-3xl xs:text-4xl sm:text-6xl font-display font-light text-[#1A1816]">
            {t('needCustom')}
          </h2>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2.5 px-8 sm:px-10 py-4 sm:py-5 rounded-full bg-[#1A1816] text-white font-semibold text-xs sm:text-sm hover:bg-[#8B5CF6] transition-all duration-300 transform active:scale-95 sm:hover:scale-105 uppercase shadow-xl"
          >
            <span>{t('startProject')}</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};
