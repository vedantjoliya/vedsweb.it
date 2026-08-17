import React, { useState } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';

export const ContactPage = () => {
  const { contactInfo, currency, t, addInquiry, recordContactClick } = usePortfolio();
  const containerRef = useScrollReveal();

  const [formData, setFormData] = useState({
    name: '', email: '', projectType: t('scopeMulti'),
    budget: 'Standard Tier', message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    addInquiry({
      name: formData.name,
      email: formData.email,
      projectType: formData.projectType,
      budget: formData.budget,
      message: formData.message
    });
    recordContactClick();

    const subject = encodeURIComponent(`VedsWeb Project Inquiry: ${formData.projectType} from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nProject: ${formData.projectType}\nBudget: ${formData.budget}\nCurrency: ${currency}\n\nBrief:\n${formData.message}`);
    window.location.href = `mailto:contact@vedsweb.it?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <div ref={containerRef} className="page-transition pt-20 sm:pt-28 pb-16 sm:pb-24 bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-10">

        {/* Header */}
        <div className="mb-12 sm:mb-20 text-left">
          <div className="reveal text-[10px] sm:text-[11px] font-body font-semibold tracking-wider text-[#8B5CF6] uppercase tracking-[0.2em] mb-4 sm:mb-6">
            {t('startProjectBtn')}
          </div>
          <h1 className="reveal text-4xl xs:text-5xl sm:text-7xl lg:text-[8rem] font-display font-light text-[#1A1816] leading-tight">
            {t('requestProposalTitle')}
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-16 items-start">
          
          {/* Left — Contact Info */}
          <div className="reveal lg:col-span-4 space-y-6 sm:space-y-8 text-left">
            <p className="text-xs sm:text-sm text-[#706B65] leading-relaxed font-normal">
              {t('requestProposalSub')}
            </p>

            <div className="space-y-4 pt-6 border-t border-[#1A1816]/10">
              <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-3 text-xs sm:text-sm text-[#1A1816]/80 hover:text-[#8B5CF6] transition-colors group">
                <Mail className="w-4 h-4 text-[#8B5CF6] shrink-0" />
                <span className="hover-line font-body font-semibold tracking-wider text-xs break-all">{contactInfo.email}</span>
              </a>
              <a href={`tel:${contactInfo.phone.replace(/\s+/g, '')}`} className="flex items-center gap-3 text-xs sm:text-sm text-[#1A1816]/80 hover:text-[#8B5CF6] transition-colors">
                <Phone className="w-4 h-4 text-[#8B5CF6] shrink-0" />
                <span className="hover-line font-body font-semibold tracking-wider text-xs">{contactInfo.phoneFormatted}</span>
              </a>
              <div className="flex items-center gap-3 text-xs sm:text-sm text-[#706B65]">
                <MapPin className="w-4 h-4 text-[#FF5E7E] shrink-0" />
                <span className="font-body font-semibold tracking-wider text-xs">{contactInfo.location}</span>
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div className="reveal delay-200 lg:col-span-8 rounded-2xl sm:rounded-3xl bg-white border border-[#1A1816]/10 p-6 sm:p-10 md:p-12 text-left shadow-vj-md">
            
            {submitted ? (
              <div className="text-center space-y-6 py-8 sm:py-12">
                <CheckCircle2 className="w-10 h-10 sm:w-12 sm:h-12 text-[#8B5CF6] mx-auto" />
                <h3 className="text-2xl sm:text-3xl font-display font-medium text-[#1A1816]">{t('inquirySent')}</h3>
                <p className="text-xs text-[#706B65] max-w-sm mx-auto">
                  {t('inquiryBriefInfo')} <strong className="text-[#1A1816]">{contactInfo.email}</strong>.
                </p>
                <button onClick={() => setSubmitted(false)}
                  className="px-6 py-3 rounded-full border border-[#1A1816]/20 text-xs text-[#1A1816] font-medium hover:bg-[#1A1816] hover:text-white transition-all uppercase active:scale-95">
                  {t('submitAnother')}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div>
                    <label className="block text-[10px] sm:text-[11px] font-body font-semibold tracking-wider text-[#1A1816]/60 uppercase mb-2">{t('formFullName')}</label>
                    <input type="text" required placeholder="Alexander Wright"
                      value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 sm:px-5 py-3 sm:py-3.5 rounded-xl bg-[#FDFBF7] border border-[#1A1816]/15 text-[#1A1816] font-medium placeholder:text-[#706B65]/50 focus:outline-none focus:border-[#8B5CF6] focus:bg-white transition-colors" />
                  </div>
                  <div>
                    <label className="block text-[10px] sm:text-[11px] font-body font-semibold tracking-wider text-[#1A1816]/60 uppercase mb-2">{t('formEmail')}</label>
                    <input type="email" required placeholder="alexander@company.com"
                      value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 sm:px-5 py-3 sm:py-3.5 rounded-xl bg-[#FDFBF7] border border-[#1A1816]/15 text-[#1A1816] font-medium placeholder:text-[#706B65]/50 focus:outline-none focus:border-[#8B5CF6] focus:bg-white transition-colors" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div>
                    <label className="block text-[10px] sm:text-[11px] font-body font-semibold tracking-wider text-[#1A1816]/60 uppercase mb-2">{t('formScope')}</label>
                    <select value={formData.projectType} onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-4 sm:px-5 py-3 sm:py-3.5 rounded-xl bg-[#FDFBF7] border border-[#1A1816]/15 text-[#1A1816] font-medium focus:outline-none focus:border-[#8B5CF6] focus:bg-white transition-colors">
                      <option value={t('scopeSingle')}>{t('scopeSingle')}</option>
                      <option value={t('scopeMulti')}>{t('scopeMulti')}</option>
                      <option value={t('scopePlatform')}>{t('scopePlatform')}</option>
                      <option value={t('scopeRedesign')}>{t('scopeRedesign')}</option>
                      <option value={t('scopeSeo')}>{t('scopeSeo')}</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[10px] sm:text-[11px] font-body font-semibold tracking-wider text-[#1A1816]/60 uppercase mb-2">{t('formBudget')}</label>
                    <select value={formData.budget} onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 sm:px-5 py-3 sm:py-3.5 rounded-xl bg-[#FDFBF7] border border-[#1A1816]/15 text-[#1A1816] font-medium focus:outline-none focus:border-[#8B5CF6] focus:bg-white transition-colors">
                      <option value="Essential Tier (€399+)">Essential Tier (€399+)</option>
                      <option value="Standard Tier (€899+)">Standard Tier (€899+)</option>
                      <option value="Enterprise Platform (€1499+)">Enterprise Platform (€1499+)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] sm:text-[11px] font-body font-semibold tracking-wider text-[#1A1816]/60 uppercase mb-2">{t('formBrief')}</label>
                  <textarea rows={4} placeholder="Describe your brand goals, scope & target audience..."
                    value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 sm:px-5 py-3 sm:py-3.5 rounded-xl bg-[#FDFBF7] border border-[#1A1816]/15 text-[#1A1816] font-medium placeholder:text-[#706B65]/50 focus:outline-none focus:border-[#8B5CF6] focus:bg-white transition-colors resize-none" />
                </div>

                <button type="submit"
                  className="w-full py-4 rounded-full bg-[#1A1816] text-white font-semibold text-xs hover:bg-[#8B5CF6] transition-all duration-300 uppercase tracking-wider flex items-center justify-center gap-2 shadow-md active:scale-95">
                  <Send className="w-4 h-4" />
                  <span>{t('formSubmit')}</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </div>
  );
};
