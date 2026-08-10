import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { ArrowUpRight } from 'lucide-react';

export const ExperienceTimeline = () => {
  const { experience } = usePortfolio();

  return (
    <section id="timeline" className="py-20 bg-[#F7F4EE] border-t-2 border-[#121212]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Container matching reference image 3 layout */}
        <div className="bg-white border-2 border-[#121212] shadow-brutalist p-8 sm:p-12 text-left">
          
          <div className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#555555] mb-10 pb-4 border-b-2 border-[#121212]">
            Professional Timeline
          </div>

          <div className="space-y-12">
            {experience.map((item, idx) => (
              <div key={idx} className="group border-l-2 border-[#121212] pl-6 sm:pl-8">
                
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                  <h3 className="font-serif-editorial text-2xl font-normal text-[#121212] group-hover:text-[#E63946] transition-colors">
                    {item.role}
                  </h3>
                  <span className="text-xs font-mono font-bold text-[#555555] uppercase tracking-wider">
                    {item.period}
                  </span>
                </div>

                <div className="mt-1">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-mono font-bold uppercase tracking-wider text-[#555555] hover:text-[#121212] transition-colors"
                  >
                    <span>{item.company}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#555555] group-hover:text-[#121212] transition-colors" />
                  </a>
                </div>

                <p className="mt-3 text-sm text-[#333333] leading-relaxed font-sans max-w-4xl font-normal">
                  {item.description}
                </p>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
