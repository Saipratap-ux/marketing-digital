import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { RoasCalculator } from './components/RoasCalculator';
import { InstantAuditor } from './components/InstantAuditor';
import { CaseStudiesSection } from './components/CaseStudiesSection';
import { MarketerBio } from './components/MarketerBio';
import { PricingSection } from './components/PricingSection';
import { FaqSection } from './components/FaqSection';
import { ContactModal } from './components/ContactModal';
import { Footer } from './components/Footer';

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('vance_theme');
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [modalInitialService, setModalInitialService] = useState<string | undefined>();
  const [modalInitialUrl, setModalInitialUrl] = useState<string | undefined>();
  const [calculatorData, setCalculatorData] = useState<{
    monthlySpend: number;
    projectedRevenue: number;
    extraProfit: number;
  } | null>(null);

  // Sync dark mode class on document.documentElement
  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('vance_theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('vance_theme', 'light');
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
  };

  const handleOpenBooking = (service?: string) => {
    setModalInitialService(service);
    setIsBookingOpen(true);
  };

  const handleExploreCalculator = () => {
    const element = document.getElementById('calculator');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleApplyProjections = (data: {
    monthlySpend: number;
    aov: number;
    currentRoas: number;
    loadTime: number;
    projectedRevenue: number;
    extraProfit: number;
  }) => {
    setCalculatorData({
      monthlySpend: data.monthlySpend,
      projectedRevenue: data.projectedRevenue,
      extraProfit: data.extraProfit,
    });
    setModalInitialService('Full-Funnel Growth Partner');
    setIsBookingOpen(true);
  };

  const handleBookAudit = (url: string, platform: string) => {
    setModalInitialUrl(url);
    setModalInitialService(`Store Speed & SEO Audit for ${platform}`);
    setIsBookingOpen(true);
  };

  const handleSelectTier = (tierName: string) => {
    setModalInitialService(tierName);
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 selection:bg-blue-600 selection:text-white transition-colors">
      {/* Top Bar Contract Navigation */}
      <Navbar
        darkMode={darkMode}
        onToggleTheme={toggleTheme}
        onOpenBooking={() => handleOpenBooking()}
      />

      <main>
        {/* Section 1: Hero Proposition & Dominant Visual Carrier */}
        <Hero
          onOpenBooking={() => handleOpenBooking()}
          onExploreCalculator={handleExploreCalculator}
        />

        {/* Section 2: Core Capabilities & Deliverables (Paid Social, SEO, Speed Boosting) */}
        <ServicesSection onSelectService={handleOpenBooking} />

        {/* Section 3: Interactive Growth & ROAS Engine */}
        <RoasCalculator onApplyProjections={handleApplyProjections} />

        {/* Section 4: Instant Store & Campaign Health Diagnostic */}
        <InstantAuditor onBookAudit={handleBookAudit} />

        {/* Section 5: Quantified Case Studies & Proof of Impact */}
        <CaseStudiesSection onOpenBooking={handleOpenBooking} />

        {/* Section 6: Marketer Background, Credentials & Philosophy */}
        <MarketerBio onOpenBooking={() => handleOpenBooking()} />

        {/* Section 7: Transparent Retainer Packages */}
        <PricingSection onSelectTier={handleSelectTier} />

        {/* Section 8: FAQ & Objection Handling */}
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Booking Dialog Modal */}
      <ContactModal
        isOpen={isBookingOpen}
        onClose={() => {
          setIsBookingOpen(false);
          setModalInitialService(undefined);
          setModalInitialUrl(undefined);
          setCalculatorData(null);
        }}
        initialService={modalInitialService}
        initialUrl={modalInitialUrl}
        calculatorData={calculatorData}
      />
    </div>
  );
}
