import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { usePortfolio } from '../context/PortfolioContext';
import { ArrowUpRight, Menu, X } from 'lucide-react';

export const Navbar = () => {
  const {
    t,
    recordContactClick
  } = usePortfolio();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinkClass = ({ isActive }) =>
    `hover-line transition-colors duration-300 text-[13px] font-body uppercase tracking-[0.12em] ${isActive ? 'text-[#1A1816] font-bold' : 'text-[#1A1816]/60 hover:text-[#1A1816] font-medium'}`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled
          ? 'bg-[#FDFBF7]/90 backdrop-blur-xl border-b border-[#1A1816]/10 shadow-xs'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex items-center justify-between h-20 sm:h-24">
          
          {/* Brand Logo - Bigger, No Box */}
          <Link to="/" className="inline-block group py-2">
            <img
              src="/logo-full.png"
              alt="VW STUDIO"
              className="h-12 sm:h-16 md:h-20 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
            />
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-10">
            <NavLink to="/" className={navLinkClass} end>{t('navHome')}</NavLink>
            <NavLink to="/work" className={navLinkClass}>{t('navWork')}</NavLink>
            <NavLink to="/services" className={navLinkClass}>{t('navServices')}</NavLink>
            <NavLink to="/pricing" className={navLinkClass}>{t('navPricing')}</NavLink>
            <NavLink to="/about" className={navLinkClass}>{t('navAbout')}</NavLink>
          </nav>

          {/* Right Controls - CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/contact"
              onClick={recordContactClick}
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#1A1816] text-white text-[12px] font-body font-bold uppercase tracking-[0.12em] hover:bg-[#8B5CF6] transition-all duration-300 shadow-md"
            >
              <span>{t('startProject')}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#1A1816]"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FDFBF7]/95 backdrop-blur-xl border-t border-[#1A1816]/10 px-6 py-8 space-y-6 animate-fadeIn text-left">
          <nav className="flex flex-col gap-4 text-3xl font-display font-medium">
            <NavLink to="/" onClick={() => setMobileMenuOpen(false)} className={({ isActive }) => isActive ? 'text-[#1A1816]' : 'text-[#1A1816]/50 hover:text-[#1A1816]'}>{t('navHome')}</NavLink>
            <NavLink to="/work" onClick={() => setMobileMenuOpen(false)} className={({ isActive }) => isActive ? 'text-[#1A1816]' : 'text-[#1A1816]/50 hover:text-[#1A1816]'}>{t('navWork')}</NavLink>
            <NavLink to="/services" onClick={() => setMobileMenuOpen(false)} className={({ isActive }) => isActive ? 'text-[#1A1816]' : 'text-[#1A1816]/50 hover:text-[#1A1816]'}>{t('navServices')}</NavLink>
            <NavLink to="/pricing" onClick={() => setMobileMenuOpen(false)} className={({ isActive }) => isActive ? 'text-[#1A1816]' : 'text-[#1A1816]/50 hover:text-[#1A1816]'}>{t('navPricing')}</NavLink>
            <NavLink to="/about" onClick={() => setMobileMenuOpen(false)} className={({ isActive }) => isActive ? 'text-[#1A1816]' : 'text-[#1A1816]/50 hover:text-[#1A1816]'}>{t('navAbout')}</NavLink>
          </nav>

          <div className="pt-4 border-t border-[#1A1816]/10 space-y-3 font-body">
            <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="block w-full text-center py-3.5 rounded-full bg-[#1A1816] text-white font-semibold text-sm hover:bg-[#8B5CF6] transition-all uppercase tracking-wider">
              {t('startProject')} ↗
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
