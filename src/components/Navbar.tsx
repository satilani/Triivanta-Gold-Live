import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenVipModal: () => void;
  onOpenCertificate: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenVipModal, onOpenCertificate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-white/94 border-b border-[#E5E0D5]">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Single-line Brand Wordmark */}
        <a
          href="#overview"
          className="font-display font-bold tracking-[0.2em] text-lg sm:text-xl text-[#111827] whitespace-nowrap shrink-0"
        >
          TRIIVANTA <span className="text-[#8F6714]">GOLD</span>
        </a>

        {/* Zone 2: 5 clean single-line navigation links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-600">
          <a
            href="#rera-credentials"
            className="hover:text-[#8F6714] transition-colors whitespace-nowrap shrink-0"
          >
            RERA Approvals
          </a>
          <a
            href="#masterplan"
            className="hover:text-[#8F6714] transition-colors whitespace-nowrap shrink-0"
          >
            Master Plan
          </a>
          <a
            href="#collections"
            className="hover:text-[#8F6714] transition-colors whitespace-nowrap shrink-0"
          >
            38 Plots
          </a>
          <a
            href="#specifications"
            className="hover:text-[#8F6714] transition-colors whitespace-nowrap shrink-0"
          >
            Specifications
          </a>
          <a
            href="#connectivity"
            className="hover:text-[#8F6714] transition-colors whitespace-nowrap shrink-0"
          >
            Location
          </a>
        </nav>

        {/* Zone 3: Single Primary Action */}
        <div className="hidden sm:flex items-center shrink-0">
          <button
            type="button"
            onClick={onOpenVipModal}
            className="px-5 py-2.5 text-xs uppercase tracking-[0.14em] font-semibold text-white bg-[#121826] hover:bg-[#1E293B] active:scale-[0.98] rounded transition-all duration-200 whitespace-nowrap shrink-0 cursor-pointer"
          >
            VIP Priority Access
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden flex items-center">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-700 hover:text-[#111827] rounded border border-[#E5E0D5] cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-[#E5E0D5] bg-white px-6 py-5 space-y-4">
          <nav className="flex flex-col gap-3 text-sm font-medium text-slate-700">
            <a
              href="#rera-credentials"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#8F6714] transition-colors"
            >
              RERA Approvals
            </a>
            <a
              href="#masterplan"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#8F6714] transition-colors"
            >
              Master Plan
            </a>
            <a
              href="#collections"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#8F6714] transition-colors"
            >
              38 Sanctioned Plots
            </a>
            <a
              href="#specifications"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#8F6714] transition-colors"
            >
              Specifications
            </a>
            <a
              href="#connectivity"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#8F6714] transition-colors"
            >
              Location
            </a>
          </nav>
          <div className="pt-2 flex flex-col gap-2">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenVipModal();
              }}
              className="w-full py-3 text-xs uppercase tracking-widest font-semibold text-white bg-[#121826] rounded text-center cursor-pointer"
            >
              VIP Priority Access
            </button>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCertificate();
              }}
              className="w-full py-2.5 text-xs uppercase tracking-widest font-medium text-slate-700 border border-[#D8D0C0] hover:border-[#8F6714] rounded text-center cursor-pointer"
            >
              View RERA Certificate
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
