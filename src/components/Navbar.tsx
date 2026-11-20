import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenVipModal: () => void;
  onOpenCertificate: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenVipModal, onOpenCertificate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { href: '#philosophy', label: 'Overview' },
    { href: '#masterplan', label: 'Master Plan' },
    { href: '#collections', label: '38 Plots' },
    { href: '#amenities', label: 'Amenities' },
    { href: '#connectivity', label: 'Location' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-white/94 border-b border-[#E6E3DB]">
      <div className="max-w-7xl mx-auto px-6 h-[76px] flex items-center justify-between gap-8">
        {/* Zone 1: Single-line Brand Wordmark */}
        <a
          href="#overview"
          className="font-display font-semibold tracking-[0.2em] text-xl sm:text-2xl text-[#15271F] whitespace-nowrap shrink-0"
        >
          TRIIVANTA <span className="text-[#9A7428]">GOLD</span>
        </a>

        {/* Zone 2: 5 clean single-line navigation links */}
        <nav className="hidden lg:flex items-center gap-8 text-[13px] font-medium text-[#535E58]">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hover:text-[#15271F] transition-colors whitespace-nowrap shrink-0"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Single Primary Action */}
        <div className="hidden sm:flex items-center shrink-0">
          <button
            type="button"
            onClick={onOpenVipModal}
            className="px-6 py-2.5 text-xs tracking-[0.14em] uppercase font-semibold text-white bg-[#15271F] hover:bg-[#1F372C] active:scale-[0.98] rounded-sm transition-all duration-200 whitespace-nowrap shrink-0 cursor-pointer"
          >
            Enquire Now
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden flex items-center">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#15271F] hover:bg-[#F5F4EF] rounded-sm border border-[#E2DFD7] cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-[#E2DFD7] bg-white px-6 py-6 space-y-5">
          <nav className="flex flex-col gap-3.5 text-sm font-medium text-[#18221D]">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-[#9A7428] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="pt-3 border-t border-[#E6E3DB] flex flex-col gap-2.5">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenVipModal();
              }}
              className="w-full py-3 text-xs uppercase tracking-[0.14em] font-semibold text-white bg-[#15271F] rounded-sm text-center cursor-pointer"
            >
              Enquire Now
            </button>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCertificate();
              }}
              className="w-full py-2.5 text-xs uppercase tracking-[0.14em] font-medium text-[#18221D] border border-[#D8D4CA] hover:border-[#9A7428] rounded-sm text-center cursor-pointer"
            >
              View RERA Certificate
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
