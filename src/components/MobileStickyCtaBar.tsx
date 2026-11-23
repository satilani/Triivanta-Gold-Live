import React from 'react';
import { CalendarCheck, FileText } from 'lucide-react';

interface MobileStickyCtaBarProps {
  onOpenVipModal: () => void;
  onOpenBrochureModal: () => void;
}

export const MobileStickyCtaBar: React.FC<MobileStickyCtaBarProps> = ({
  onOpenVipModal,
  onOpenBrochureModal,
}) => {
  return (
    <div
      role="region"
      aria-label="Quick project actions"
      className="fixed bottom-0 inset-x-0 z-40 lg:hidden bg-white/96 backdrop-blur-md border-t border-[#DCD8CE] shadow-[0_-6px_24px_rgba(21,39,31,0.1)] px-3 py-2.5 pb-[calc(0.625rem+env(safe-area-inset-bottom))]"
    >
      <div className="max-w-xl mx-auto grid grid-cols-2 gap-2.5">
        <button
          type="button"
          onClick={onOpenBrochureModal}
          className="py-3 px-3 text-[11px] uppercase tracking-[0.1em] font-semibold text-[#15271F] bg-[#F5F4EF] hover:bg-[#ECEAE2] border border-[#D8D4CA] rounded-sm inline-flex items-center justify-center gap-1.5 whitespace-nowrap cursor-pointer"
        >
          <FileText className="w-3.5 h-3.5 text-[#7A5612] shrink-0" />
          <span>RERA Dossier</span>
        </button>

        <button
          type="button"
          onClick={onOpenVipModal}
          className="py-3 px-3 text-[11px] uppercase tracking-[0.1em] font-semibold text-white bg-[#15271F] hover:bg-[#1F372C] rounded-sm inline-flex items-center justify-center gap-1.5 whitespace-nowrap cursor-pointer"
        >
          <CalendarCheck className="w-3.5 h-3.5 text-[#F2D99B] shrink-0" />
          <span>Book Site Visit</span>
        </button>
      </div>
    </div>
  );
};
