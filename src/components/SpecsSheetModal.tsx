import React, { useEffect } from 'react';
import { X, Download, FileText } from 'lucide-react';
import { RERA_DETAILS } from '../data/rera';

interface SpecsSheetModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SpecsSheetModal: React.FC<SpecsSheetModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0D1A14]/65 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="specs-modal-heading"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-white border border-[#E2DFD7] rounded-sm overflow-hidden shadow-2xl flex flex-col">
        {/* Header */}
        <div className="px-5 py-4 border-b border-[#E6E3DB] bg-[#F5F4EF] flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-9 h-9 rounded-sm border border-[#D8D4CA] bg-white flex items-center justify-center text-[#7A5612] shrink-0">
              <FileText className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <div className="text-[11px] tracking-[0.14em] uppercase text-[#7A5612] font-semibold">
                U.P. RERA: {RERA_DETAILS.regNumber}
              </div>
              <h3
                id="specs-modal-heading"
                className="text-lg font-display font-semibold text-[#15271F] truncate"
              >
                {RERA_DETAILS.projectName} — Project Specifications Sheet
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2.5 shrink-0">
            <a
              href={RERA_DETAILS.specificationsImagePath}
              download="Triivanta_Gold_Specifications.png"
              className="px-3.5 py-2 text-xs font-semibold text-white bg-[#15271F] hover:bg-[#1F372C] rounded-sm inline-flex items-center gap-1.5 transition-colors whitespace-nowrap"
            >
              <Download className="w-3.5 h-3.5 text-[#F2D99B]" />
              <span>Download</span>
            </a>

            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-sm text-[#2D3933] hover:text-[#15271F] hover:bg-[#E8E5DC] transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Viewer Body */}
        <div className="flex-1 bg-[#ECEAE2] overflow-auto p-6 flex items-center justify-center">
          <img
            src={RERA_DETAILS.specificationsImagePath}
            alt="Project Specification of TRIIVANTA GOLD"
            className="max-w-full h-auto rounded-sm border border-[#E2DFD7] bg-white shadow-md"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </div>
  );
};
