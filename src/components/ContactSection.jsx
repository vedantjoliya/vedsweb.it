import React, { useState } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';

export const ContactSection = () => {
  const { contactInfo, currency, t } = usePortfolio();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '2 - 4 Pages Website',
    budget: 'Standard Tier',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    const subject = encodeURIComponent(`VedsWeb Project Inquiry: ${formData.projectType} from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nProject Type: ${formData.projectType}\nBudget Tier: ${formData.budget}\nCurrency: ${currency}\n\nProject Brief:\n${formData.message}`
    );
    
    window.location.href = `mailto:contactsvedant@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 relative bg-[#FAF7FC] border-t border-purple-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Studio Desk */}
          <div className="lg:col-span-5 space-y-8 text-left">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-50 border border-purple-200/60 text-purple-700 text-xs font-semibold uppercase tracking-wider mb-3">
                {t('contactBadge')}
              </div>
              <h2 className="text-4xl sm:text-5xl font-display font-extrabold text-slate-900 tracking-tight leading-tight">
                {t('contactTitle')}
              </h2>
              <p className="text-slate-600 text-base mt-4 font-normal leading-relaxed">
                {t('contactSub')}
              </p>
            </div>

            {/* Studio Desk Box */}
            <div className="p-8 rounded-3xl bg-white border border-purple-100 shadow-vj-md space-y-6">
              <div className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider border-b border-purple-50 pb-2">
                Direct Studio Desk
              </div>

              {/* Email */}
              <div className="flex items-center gap-4 p-3 rounded-2xl border border-purple-100/60 bg-purple-50/30">
                <div className="p-3 rounded-xl bg-purple-100 text-[#8B5CF6] shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono font-bold text-slate-400 uppercase">Official Email</div>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="text-base font-semibold text-slate-900 hover:text-[#8B5CF6] transition-colors break-all"
                  >
                    {contactInfo.email}
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4 p-3 rounded-2xl border border-purple-100/60 bg-purple-50/30">
                <div className="p-3 rounded-xl bg-purple-100 text-[#8B5CF6] shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono font-bold text-slate-400 uppercase">Direct Phone</div>
                  <a
                    href={`tel:${contactInfo.phone.replace(/\s+/g, '')}`}
                    className="text-base font-semibold text-slate-900 hover:text-[#8B5CF6] transition-colors"
                  >
                    {contactInfo.phoneFormatted}
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4 p-3 rounded-2xl border border-purple-100/60 bg-purple-50/30">
                <div className="p-3 rounded-xl bg-purple-100 text-[#8B5CF6] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono font-bold text-slate-400 uppercase">Studio Location</div>
                  <div className="text-sm font-semibold text-slate-900">
                    {contactInfo.location}
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* Right Proposal Form */}
          <div className="lg:col-span-7 rounded-3xl bg-white border border-purple-100 shadow-vj-md p-8 sm:p-10 text-left">
            
            <div className="mb-6 pb-4 border-b border-purple-50 flex items-center justify-between">
              <h3 className="font-display font-bold text-2xl text-slate-900">
                {t('formTitle')}
              </h3>
              <span className="text-xs font-mono font-bold text-[#8B5CF6]">
                [ 24h Response Time ]
              </span>
            </div>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-purple-50/50 border border-purple-100 text-center space-y-4">
                <CheckCircle2 className="w-12 h-12 text-[#8B5CF6] mx-auto" />
                <h4 className="font-display font-bold text-xl text-slate-900">
                  Inquiry Transmitted
                </h4>
                <p className="text-xs font-mono text-slate-600 leading-relaxed max-w-md mx-auto">
                  Thank you {formData.name}. Your email application has been launched with your project brief directed to <strong>{contactInfo.email}</strong>.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-xl bg-[#0F172A] hover:bg-[#8B5CF6] text-white font-bold text-xs shadow-md transition-colors"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 text-xs">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1.5 uppercase">{t('formFullName')}</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alexander Wright"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-purple-50/30 border border-purple-100 text-slate-900 font-medium focus:outline-none focus:border-[#8B5CF6] focus:bg-white transition-all"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1.5 uppercase">{t('formEmail')}</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. alexander@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-purple-50/30 border border-purple-100 text-slate-900 font-medium focus:outline-none focus:border-[#8B5CF6] focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1.5 uppercase">{t('formScope')}</label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-purple-50/30 border border-purple-100 text-slate-900 font-medium focus:outline-none focus:border-[#8B5CF6] focus:bg-white transition-all"
                    >
                      <option value="Single Page Website">Single Page Website</option>
                      <option value="2 - 4 Pages Website">2 - 4 Pages Website</option>
                      <option value="More Than 4 Pages / Custom Platform">More Than 4 Pages / Custom Platform</option>
                      <option value="UI/UX Redesign & Strategy">UI/UX Redesign & Strategy</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1.5 uppercase">{t('formBudget')} ({currency})</label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-purple-50/30 border border-purple-100 text-slate-900 font-medium focus:outline-none focus:border-[#8B5CF6] focus:bg-white transition-all"
                    >
                      <option value="Standard Tier">Standard Package Tier</option>
                      <option value="Growth Tier">Growth & Agency Tier</option>
                      <option value="Enterprise Tier">Enterprise / Custom Platform</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1.5 uppercase">{t('formBrief')}</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Describe your project goals, timelines, and technical requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-purple-50/30 border border-purple-100 text-slate-900 font-medium resize-none focus:outline-none focus:border-[#8B5CF6] focus:bg-white transition-all"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-2xl bg-[#0F172A] hover:bg-[#8B5CF6] text-white font-bold text-xs shadow-lg shadow-slate-900/10 transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>{t('formSubmit')}</span>
                </button>

                <div className="text-[11px] text-slate-400 text-center pt-2">
                  Directs email transmission to <strong>{contactInfo.email}</strong>.
                </div>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
