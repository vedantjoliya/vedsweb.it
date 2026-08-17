import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { usePortfolio } from '../context/PortfolioContext';
import { ArrowUpRight, Menu, X, Download } from 'lucide-react';

export const Navbar = () => {
  const {
    t,
    recordContactClick
  } = usePortfolio();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 15);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinkClass = ({ isActive }) =>
    `hover-line transition-colors duration-300 text-[13px] font-body uppercase tracking-[0.12em] ${isActive ? 'text-[#1A1816] font-bold' : 'text-[#1A1816]/60 hover:text-[#1A1816] font-medium'}`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#FDFBF7]/90 backdrop-blur-xl border-b border-[#1A1816]/10 shadow-xs'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-10">
        <div className="flex items-center justify-between h-16 sm:h-20 md:h-24">
          
          {/* Brand Logo - Responsive scaling for smaller displays */}
          <Link to="/" className="inline-block group py-1.5 focus:outline-hidden">
            <img
              src="/logo-full.png"
              alt="VedsWeb Studio — Bespoke Web Agency"
              width="180"
              height="48"
              className="h-10 sm:h-14 md:h-18 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
              loading="eager"
              decoding="async"
            />
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-10">
            <NavLink to="/work" className={navLinkClass}>{t('navWork')}</NavLink>
            <NavLink to="/services" className={navLinkClass}>{t('navServices')}</NavLink>
            <NavLink to="/pricing" className={navLinkClass}>{t('navPricing')}</NavLink>
            <NavLink to="/about" className={navLinkClass}>{t('navAbout')}</NavLink>
          </nav>

          {/* Right Controls - CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="/VedsWeb_Studio_Agency_Deck.pdf"
              download="VedsWeb_Studio_Agency_Deck.pdf"
              className="hidden lg:flex items-center gap-2 px-5 py-3 rounded-full bg-white text-[#1A1816] border border-[#1A1816]/20 text-[12px] font-body font-bold uppercase tracking-[0.12em] hover:bg-[#8B5CF6] hover:text-white hover:border-[#8B5CF6] transition-all duration-300 shadow-sm"
              title="Download VedsWeb Studio Official Agency Deck (PDF)"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Deck (PDF)</span>
            </a>
            <Link
              to="/contact"
              onClick={recordContactClick}
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#1A1816] text-white text-[12px] font-body font-bold uppercase tracking-[0.12em] hover:bg-[#8B5CF6] transition-all duration-300 shadow-md"
            >
              <span>{t('startProject')}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Toggle Button with 44px+ tap target */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-11 h-11 flex items-center justify-center rounded-xl bg-white/60 border border-[#1A1816]/10 text-[#1A1816] active:scale-95 transition-transform"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer menu with hardware acceleration & smooth mobile scrolling */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FDFBF7]/98 backdrop-blur-2xl border-t border-[#1A1816]/10 px-6 py-7 space-y-6 animate-fadeIn text-left max-h-[calc(100vh-4.5rem)] overflow-y-auto shadow-xl gpu-accelerated">
          <nav className="flex flex-col gap-4 text-2xl xs:text-3xl font-display font-medium">
            <NavLink to="/work" onClick={() => setMobileMenuOpen(false)} className={({ isActive }) => isActive ? 'text-[#1A1816] font-bold' : 'text-[#1A1816]/60 hover:text-[#1A1816]'}>{t('navWork')}</NavLink>
            <NavLink to="/services" onClick={() => setMobileMenuOpen(false)} className={({ isActive }) => isActive ? 'text-[#1A1816] font-bold' : 'text-[#1A1816]/60 hover:text-[#1A1816]'}>{t('navServices')}</NavLink>
            <NavLink to="/pricing" onClick={() => setMobileMenuOpen(false)} className={({ isActive }) => isActive ? 'text-[#1A1816] font-bold' : 'text-[#1A1816]/60 hover:text-[#1A1816]'}>{t('navPricing')}</NavLink>
            <NavLink to="/about" onClick={() => setMobileMenuOpen(false)} className={({ isActive }) => isActive ? 'text-[#1A1816] font-bold' : 'text-[#1A1816]/60 hover:text-[#1A1816]'}>{t('navAbout')}</NavLink>
          </nav>

          <div className="pt-4 border-t border-[#1A1816]/10 space-y-3 font-body">
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full text-center py-3.5 rounded-full bg-[#1A1816] text-white font-semibold text-xs xs:text-sm hover:bg-[#8B5CF6] transition-all uppercase tracking-wider shadow-md"
            >
              <span>{t('startProject')}</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>

            <a
              href="/VedsWeb_Studio_Agency_Deck.pdf"
              download="VedsWeb_Studio_Agency_Deck.pdf"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full text-center py-3 rounded-full bg-white border border-[#1A1816]/20 text-[#1A1816] font-bold text-xs uppercase tracking-wider shadow-xs"
            >
              <Download className="w-3.5 h-3.5 text-[#8B5CF6]" />
              <span>Agency Deck (PDF)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
