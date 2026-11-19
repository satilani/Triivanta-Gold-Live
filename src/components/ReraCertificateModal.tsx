import React, { useEffect } from 'react';
import { X, Download, ShieldCheck, ExternalLink } from 'lucide-react';
import { RERA_DETAILS } from '../data/rera';

interface ReraCertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReraCertificateModal: React.FC<ReraCertificateModalProps> = ({ isOpen, onClose }) => {
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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="rera-modal-heading"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-4xl h-[90vh] bg-white border border-[#DFD8C8] rounded-xl overflow-hidden shadow-2xl flex flex-col">
        {/* Header */}
        <div className="px-5 py-4 border-b border-[#E5E0D5] bg-[#FAF9F6] flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-9 h-9 rounded border border-[#D4CBB8] bg-white flex items-center justify-center text-[#8F6714] shrink-0">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <div className="text-[11px] tracking-wider text-[#8F6714] font-semibold">
                Form C · Official Registration Certificate
              </div>
              <h3
                id="rera-modal-heading"
                className="text-base sm:text-lg font-display font-bold text-[#111827] truncate"
              >
                {RERA_DETAILS.projectName} — {RERA_DETAILS.regNumber}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2.5 shrink-0">
            <a
              href={RERA_DETAILS.authorityUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 text-xs font-medium text-[#111827] bg-white border border-[#D4CBB8] hover:border-[#8F6714] rounded inline-flex items-center gap-1.5 transition-colors whitespace-nowrap"
            >
              <span>Verify on U.P. RERA</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#8F6714]" />
            </a>
            <a
              href={RERA_DETAILS.certificatePdfPath}
              download="Triivanta_Gold_RERA_Certificate.pdf"
              className="px-3.5 py-2 text-xs font-semibold text-white bg-[#121826] hover:bg-[#1E293B] rounded inline-flex items-center gap-1.5 transition-colors whitespace-nowrap"
            >
              <Download className="w-3.5 h-3.5 text-[#F3E5AB]" />
              <span>Download PDF</span>
            </a>
            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded text-slate-500 hover:text-[#111827] hover:bg-[#EFECE4] transition-colors cursor-pointer"
              aria-label="Close certificate preview"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Embedded PDF Viewer */}
        <div className="flex-1 bg-[#EFECE4]">
          <iframe
            src={RERA_DETAILS.certificatePdfPath}
            title="TRIIVANTA GOLD U.P. RERA Registration Certificate Form C"
            className="w-full h-full border-0"
          />
        </div>
      </div>
    </div>
  );
};
