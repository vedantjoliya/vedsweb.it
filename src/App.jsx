import React, { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { PortfolioProvider } from './context/PortfolioContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { DeviceModal } from './components/DeviceModal';
import { AdminModal } from './components/AdminModal';

// Lazy-load each page so only the current page's JS is fetched on first visit.
// All other pages load on-demand when the user navigates to them.
const HomePage     = lazy(() => import('./pages/HomePage').then(m => ({ default: m.HomePage })));
const WorkPage     = lazy(() => import('./pages/WorkPage').then(m => ({ default: m.WorkPage })));
const ServicesPage = lazy(() => import('./pages/ServicesPage').then(m => ({ default: m.ServicesPage })));
const PricingPage  = lazy(() => import('./pages/PricingPage').then(m => ({ default: m.PricingPage })));
const AboutPage    = lazy(() => import('./pages/AboutPage').then(m => ({ default: m.AboutPage })));
const ContactPage  = lazy(() => import('./pages/ContactPage').then(m => ({ default: m.ContactPage })));

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
};

// Minimal page-transition fallback shown while a lazy chunk loads
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-[#FDFBF7]">
    <div className="w-8 h-8 rounded-full border-2 border-[#1A1816]/10 border-t-[#8B5CF6] animate-spin" />
  </div>
);

export const App = () => {
  return (
    <PortfolioProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col bg-[#FDFBF7] text-[#1A1816] font-body antialiased">
          <Navbar />
          <main className="flex-1">
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/"        element={<HomePage />} />
                <Route path="/admin"   element={<HomePage />} />
                <Route path="/work"    element={<WorkPage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/pricing" element={<PricingPage />} />
                <Route path="/about"   element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="*"        element={<HomePage />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
          <DeviceModal />
          <AdminModal />
        </div>
      </BrowserRouter>
    </PortfolioProvider>
  );
};

export default App;

