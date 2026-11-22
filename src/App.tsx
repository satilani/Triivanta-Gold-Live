import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectPhilosophy } from './components/ProjectPhilosophy';
import { GrandEntranceSpotlight } from './components/GrandEntranceSpotlight';
import { MasterPlanExplorer } from './components/MasterPlanExplorer';
import { LivingCollections } from './components/LivingCollections';
import { AmenitiesBento } from './components/AmenitiesBento';
import { ConnectivitySection } from './components/ConnectivitySection';
import { ReraComplianceSection } from './components/ReraComplianceSection';
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
    <div className="min-h-screen bg-white text-[#18221D] flex flex-col font-sans selection:bg-[#15271F]/15 selection:text-[#15271F]">
      {/* Minimal 3-Zone Editorial Top Bar */}
      <Navbar
        onOpenVipModal={scrollToVipRegistration}
        onOpenCertificate={() => setIsCertificateOpen(true)}
      />

      <main className="flex-1">
        {/* Full-Bleed Architectural Hero + Key Facts Ribbon */}
        <Hero
          onOpenVipModal={scrollToVipRegistration}
          onOpenBrochureModal={() => setIsBrochureOpen(true)}
          onOpenCertificate={() => setIsCertificateOpen(true)}
        />

        {/* Editorial Philosophy & Low-Density Living Narrative */}
        <ProjectPhilosophy
          onOpenVipModal={scrollToVipRegistration}
          onOpenCertificate={() => setIsCertificateOpen(true)}
        />

        {/* Signature USP: 100-Foot Grand Entrance with Gothic Pillars & Palm Avenue */}
        <GrandEntranceSpotlight onOpenVipModal={scrollToVipRegistration} />

        {/* Master Planning Perspectives & Land Allocation Statement */}
        <MasterPlanExplorer onOpenSpecsSheet={() => setIsSpecsOpen(true)} />

        {/* Expandable Schedule of All 38 Exclusive Plots */}
        <LivingCollections onSelectOption={handleSelectPlot} />

        {/* Open Greens, Avenues & Underground Civic Infrastructure */}
        <AmenitiesBento />

        {/* Sultanpur Road Location Advantage & Drive-Time Ledger */}
        <ConnectivitySection />

        {/* Deep Botanical Statutory Transparency Band (U.P. RERA Form C) */}
        <ReraComplianceSection onOpenCertificate={() => setIsCertificateOpen(true)} />

        {/* Private Site Visit & Plot Enquiry Section */}
        <VipRegistration
          preselectedPlot={selectedPlot}
          onOpenBrochureModal={() => setIsBrochureOpen(true)}
        />
      </main>

      {/* Quiet Architectural Footer */}
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
