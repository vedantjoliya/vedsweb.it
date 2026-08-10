import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { ArrowUpRight } from 'lucide-react';

export const AcademicQualifications = () => {
  const { qualifications } = usePortfolio();

  return (
    <section id="qualifications" className="py-20 bg-[#F7F4EE] border-t-2 border-[#121212]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Card Container matching user reference image 2 layout */}
        <div className="bg-white border-2 border-[#121212] shadow-brutalist p-8 sm:p-12">
          
          <div className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#555555] mb-10 pb-4 border-b-2 border-[#121212]">
            Academic Qualifications
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 text-left">
            {qualifications.map((item, idx) => (
              <div key={idx} className="group border-l-2 border-[#121212] pl-6">
                
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-serif-editorial text-2xl font-normal text-[#121212] group-hover:text-[#E63946] transition-colors leading-tight">
                    {item.degree}
                  </h3>
                  <span className="text-xs font-mono font-bold text-[#555555] whitespace-nowrap pt-1">
                    {item.period}
                  </span>
                </div>

                <div className="mt-2 flex items-center justify-between">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-[#555555] hover:text-[#121212] font-semibold transition-colors"
                  >
                    <span>{item.institution}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#555555] group-hover:text-[#121212] transition-colors" />
                  </a>
                </div>

                {item.details && (
                  <div className="mt-2 text-xs font-mono font-bold text-[#121212] uppercase">
                    {item.details}
                  </div>
                )}

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
