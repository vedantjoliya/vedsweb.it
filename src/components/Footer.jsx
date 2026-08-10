import React from 'react';
import { Link } from 'react-router-dom';
import { usePortfolio } from '../context/PortfolioContext';
import { Mail, Phone, MapPin, Download } from 'lucide-react';

export const Footer = () => {
  const { contactInfo, t } = usePortfolio();

  return (
    <footer className="bg-[#FDFBF7] text-[#1A1816] border-t border-[#1A1816]/10 pt-20 pb-10 font-body">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 pb-16 border-b border-[#1A1816]/10">
          
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-6 text-left">
            <Link to="/" className="inline-block group">
              <img
                src="/logo-full.png"
                alt="VW STUDIO"
                className="h-12 sm:h-16 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </Link>

            <p className="text-sm text-[#706B65] leading-relaxed max-w-sm font-light">
              {t('heroSubhead')}
            </p>

            <div className="flex items-center gap-2 text-xs text-[#706B65] font-medium tracking-wide">
              <MapPin className="w-3.5 h-3.5 text-[#FF5E7E]" />
              <span>Parma, Emilia-Romagna, Italy</span>
            </div>
          </div>

          {/* Pages */}
          <div className="md:col-span-3 text-left space-y-4">
            <div className="text-[11px] font-bold text-[#1A1816]/40 uppercase tracking-[0.2em] mb-6">
              {t('footerPages')}
            </div>
            <ul className="space-y-3 uppercase text-xs tracking-wider">
              {[
                { to: '/', label: t('navHome') },
                { to: '/work', label: t('navWork') },
                { to: '/services', label: t('navServices') },
                { to: '/pricing', label: t('navPricing') },
                { to: '/about', label: t('navAbout') },
                { to: '/contact', label: t('navContact') },
              ].map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="hover-line text-[#706B65] hover:text-[#1A1816] font-medium transition-colors duration-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Desk */}
          <div className="md:col-span-4 text-left space-y-4">
            <div className="text-[11px] font-bold text-[#1A1816]/40 uppercase tracking-[0.2em] mb-6">
              {t('footerStudioDesk')}
            </div>

            <div className="space-y-4">
              <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-3 text-xs text-[#706B65] hover:text-[#1A1816] font-medium transition-colors group">
                <Mail className="w-4 h-4 text-[#8B5CF6]" />
                <span className="hover-line">{contactInfo.email}</span>
              </a>
              <a href={`tel:${contactInfo.phone.replace(/\s+/g, '')}`} className="flex items-center gap-3 text-xs text-[#706B65] hover:text-[#1A1816] font-medium transition-colors">
                <Phone className="w-4 h-4 text-[#8B5CF6]" />
                <span className="hover-line">{contactInfo.phoneFormatted}</span>
              </a>
              <a href="/VedsWeb_Studio_Agency_Deck.pdf" download="VedsWeb_Studio_Agency_Deck.pdf" className="flex items-center gap-3 text-xs text-[#8B5CF6] hover:text-[#1A1816] font-semibold transition-colors">
                <Download className="w-4 h-4" />
                <span className="underline">Download Official Agency Deck (PDF)</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#706B65] font-medium tracking-wide">
          <span>© {new Date().getFullYear()} {t('footerRights')}</span>
          <a href="/VedsWeb_Studio_Agency_Deck.pdf" download="VedsWeb_Studio_Agency_Deck.pdf" className="text-[#8B5CF6] hover:underline font-semibold">
            Download PDF Deck (Includes QR Codes & Pricing)
          </a>
        </div>
      </div>
    </footer>
  );
};
