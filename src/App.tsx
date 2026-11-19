import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ReraComplianceSection } from './components/ReraComplianceSection';
import { MasterPlanExplorer } from './components/MasterPlanExplorer';
import { LivingCollections } from './components/LivingCollections';
import { SpecificationsSection } from './components/SpecificationsSection';
import { AmenitiesBento } from './components/AmenitiesBento';
import { ConnectivitySection } from './components/ConnectivitySection';
import { VipRegistration } from './components/VipRegistration';
import { BrochureModal } from './components/BrochureModal';
import { ReraCertificateModal } from './components/ReraCertificateModal';
import { SpecsSheetModal } from './components/SpecsSheetModal';
import { Footer } from './components/Footer';

export default function App() {
  const [isBrochureOpen, setIsBrochureOpen] = useState(false);
  const [isCertificateOpen, setIsCertificateOpen] = useState(false);
  const [isSpecsOpen, setIsSpecsOpen] = useState(false);
  const [selectedPlot, setSelectedPlot] = useState<string>('');

  const scrollToVipRegistration = () => {
    const el = document.getElementById('vip-register');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectPlot = (plotSummary: string) => {
    setSelectedPlot(plotSummary);
    scrollToVipRegistration();
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#111827] flex flex-col font-sans selection:bg-[#9A721C]/20 selection:text-[#111827]">
      {/* 1-Row 3-Zone Top Bar */}
      <Navbar
        onOpenVipModal={scrollToVipRegistration}
        onOpenCertificate={() => setIsCertificateOpen(true)}
      />

      <main className="flex-1">
        {/* Hero Section with Project Metrics, Countdown & U.P. RERA Dock */}
        <Hero
          onOpenVipModal={scrollToVipRegistration}
          onOpenBrochureModal={() => setIsBrochureOpen(true)}
          onOpenCertificate={() => setIsCertificateOpen(true)}
        />

        {/* Official U.P. RERA Form C Credentials */}
        <ReraComplianceSection onOpenCertificate={() => setIsCertificateOpen(true)} />

        {/* Master Plan Architecture & Official Area Statement */}
        <MasterPlanExplorer onOpenSpecsSheet={() => setIsSpecsOpen(true)} />

        {/* Expandable Filterable Schedule of All 38 Plots */}
        <LivingCollections onSelectOption={handleSelectPlot} />

        {/* 12-Point Engineering & Development Specifications */}
        <SpecificationsSection onOpenSpecsSheet={() => setIsSpecsOpen(true)} />

        {/* Planned Civic Amenities, Parks & Infrastructure Bento */}
        <AmenitiesBento />

        {/* Strategic Connectivity Matrix along Sultanpur Road */}
        <ConnectivitySection />

        {/* Priority Plot Selection Registration & VIP Token */}
        <VipRegistration
          preselectedPlot={selectedPlot}
          onOpenBrochureModal={() => setIsBrochureOpen(true)}
        />
      </main>

      {/* Footer with Full U.P. RERA Disclosures */}
      <Footer
        onOpenVipModal={scrollToVipRegistration}
        onOpenSpecsSheet={() => setIsSpecsOpen(true)}
        onOpenCertificate={() => setIsCertificateOpen(true)}
      />

      {/* Project Dossier Modal */}
      <BrochureModal
        isOpen={isBrochureOpen}
        onClose={() => setIsBrochureOpen(false)}
        onOpenVipModal={scrollToVipRegistration}
        onOpenCertificate={() => setIsCertificateOpen(true)}
        onOpenSpecsSheet={() => setIsSpecsOpen(true)}
      />

      {/* Official U.P. RERA Form C PDF Viewer */}
      <ReraCertificateModal
        isOpen={isCertificateOpen}
        onClose={() => setIsCertificateOpen(false)}
      />

      {/* Official Project Specification Sheet Modal */}
      <SpecsSheetModal isOpen={isSpecsOpen} onClose={() => setIsSpecsOpen(false)} />
    </div>
  );
}
