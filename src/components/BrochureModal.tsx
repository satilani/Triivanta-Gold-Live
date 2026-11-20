import React from 'react';
import { X, Download, FileText, ShieldCheck, Printer, ClipboardList } from 'lucide-react';
import { RERA_DETAILS, AREA_STATEMENT } from '../data/rera';

interface BrochureModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenVipModal: () => void;
  onOpenCertificate: () => void;
  onOpenSpecsSheet: () => void;
}

export const BrochureModal: React.FC<BrochureModalProps> = ({
  isOpen,
  onClose,
  onOpenVipModal,
  onOpenCertificate,
  onOpenSpecsSheet,
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0D1A14]/65 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="brochure-modal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-3xl max-h-[90vh] bg-white border border-[#E2DFD7] rounded-sm overflow-hidden shadow-2xl flex flex-col">
        {/* Modal Header */}
        <div className="p-5 sm:p-6 border-b border-[#E6E3DB] flex items-center justify-between bg-[#F5F4EF]">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-sm border border-[#D8D4CA] bg-white flex items-center justify-center text-[#9A7428]">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-[0.18em] text-[#9A7428] font-semibold block">
                Official Project Dossier · {RERA_DETAILS.regNumber}
              </span>
              <h3
                id="brochure-modal-title"
                className="font-display text-xl sm:text-2xl font-semibold text-[#15271F]"
              >
                TRIIVANTA GOLD — Executive Summary
              </h3>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-sm text-[#535E58] hover:text-[#15271F] hover:bg-[#E8E5DC] transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-[#535E58] text-sm">
          {/* Executive Summary + RERA QR */}
          <div className="p-5 rounded-sm bg-[#F5F4EF] border border-[#E2DFD7] flex flex-col sm:flex-row gap-5 items-center">
            <div className="flex-1 space-y-2">
              <span className="text-[11px] uppercase tracking-[0.16em] text-[#9A7428] font-semibold block">
                Township Overview
              </span>
              <p className="text-xs sm:text-sm leading-relaxed text-[#18221D]">
                Developed by <strong className="text-[#15271F]">{RERA_DETAILS.promoterName}</strong>{' '}
                on Sultanpur Road at {RERA_DETAILS.locality}, Tehsil {RERA_DETAILS.tehsil},{' '}
                {RERA_DETAILS.districtState}. Comprising{' '}
                <strong className="text-[#15271F]">38 demarcated residential plots</strong> over
                19,689 Sq.Mt. (4.87 Acres), registered under U.P. RERA{' '}
                <span className="font-mono font-semibold text-[#9A7428]">
                  {RERA_DETAILS.regNumber}
                </span>
                .
              </p>
            </div>
            <div className="w-24 h-24 bg-white border border-[#E2DFD7] p-1.5 shrink-0 flex items-center justify-center">
              <img
                src={RERA_DETAILS.qrImagePath}
                alt={`U.P. RERA QR Code ${RERA_DETAILS.regNumber}`}
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Verified Project Benchmarks */}
          <div>
            <h4 className="text-[11px] uppercase tracking-[0.18em] text-[#535E58] font-semibold mb-3">
              Verified Project Benchmarks
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
              <div className="p-3.5 rounded-sm bg-[#F5F4EF] border border-[#E2DFD7]">
                <span className="text-[#535E58] block text-[10px] uppercase">Total Project Area</span>
                <span className="text-[#15271F] font-semibold font-mono text-sm tabular-nums mt-0.5 block">
                  {AREA_STATEMENT.totalLandSqm.toLocaleString()} Sq.Mt.
                </span>
              </div>
              <div className="p-3.5 rounded-sm bg-[#F5F4EF] border border-[#E2DFD7]">
                <span className="text-[#535E58] block text-[10px] uppercase">Residential Plots</span>
                <span className="text-[#15271F] font-semibold font-display text-base mt-0.5 block">
                  38 Plots (47.25%)
                </span>
              </div>
              <div className="p-3.5 rounded-sm bg-[#F5F4EF] border border-[#E2DFD7]">
                <span className="text-[#535E58] block text-[10px] uppercase">Landscaped Parks</span>
                <span className="text-[#2E5D43] font-semibold font-mono text-sm tabular-nums mt-0.5 block">
                  2,807.59 Sq.Mt. (15%)
                </span>
              </div>
              <div className="p-3.5 rounded-sm bg-[#F5F4EF] border border-[#E2DFD7]">
                <span className="text-[#535E58] block text-[10px] uppercase">Road Network</span>
                <span className="text-[#9A7428] font-semibold font-display text-base mt-0.5 block">
                  18m Main & 9m Internal
                </span>
              </div>
              <div className="p-3.5 rounded-sm bg-[#F5F4EF] border border-[#E2DFD7]">
                <span className="text-[#535E58] block text-[10px] uppercase">Utilities & Power</span>
                <span className="text-[#15271F] font-semibold font-mono text-xs tabular-nums mt-0.5 block">
                  15 KL UGT · 25 KLD STP · 2×400 KVA
                </span>
              </div>
              <div className="p-3.5 rounded-sm bg-[#F5F4EF] border border-[#E2DFD7]">
                <span className="text-[#535E58] block text-[10px] uppercase">Boundary Wall</span>
                <span className="text-[#15271F] font-semibold font-mono text-sm tabular-nums mt-0.5 block">
                  746.13m × 2.1m H
                </span>
              </div>
            </div>
          </div>

          {/* Statutory Dates */}
          <div>
            <h4 className="text-[11px] uppercase tracking-[0.18em] text-[#535E58] font-semibold mb-3">
              Statutory & Completion Timeline
            </h4>
            <div className="divide-y divide-[#E6E3DB] border-t border-b border-[#E6E3DB] text-xs">
              <div className="flex items-center justify-between py-3">
                <span className="font-medium text-[#18221D]">
                  U.P. RERA Form C Registration Granted
                </span>
                <span className="text-[#2E5D43] font-mono font-semibold tabular-nums">
                  {RERA_DETAILS.registrationDate}
                </span>
              </div>
              <div className="flex items-center justify-between py-3">
                <span className="font-medium text-[#18221D]">
                  Proposed Completion Date (as per U.P. RERA)
                </span>
                <span className="text-[#9A7428] font-mono font-semibold tabular-nums">
                  {RERA_DETAILS.proposedCompletionDate}
                </span>
              </div>
            </div>
          </div>

          {/* Compliance notice */}
          <div className="flex items-start gap-2.5 text-[11px] text-[#535E58] pt-1">
            <ShieldCheck className="w-4 h-4 text-[#15271F] shrink-0 mt-0.5" />
            <span>
              Registered with {RERA_DETAILS.authorityName} ({RERA_DETAILS.authorityDisplayUrl})
              under Registration No. {RERA_DETAILS.regNumber}. Project Address:{' '}
              {RERA_DETAILS.fullProjectAddress}. Promoter: {RERA_DETAILS.promoterName},{' '}
              {RERA_DETAILS.promoterOffice}.
            </span>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-5 border-t border-[#E6E3DB] bg-[#F5F4EF] flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => window.print()}
              className="px-3.5 py-2 text-xs font-medium text-[#18221D] bg-white border border-[#D8D4CA] hover:border-[#15271F] rounded-sm inline-flex items-center gap-1.5 cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print</span>
            </button>
            <button
              type="button"
              onClick={() => {
                onClose();
                onOpenSpecsSheet();
              }}
              className="px-3.5 py-2 text-xs font-medium text-[#18221D] bg-white border border-[#D8D4CA] hover:border-[#15271F] rounded-sm inline-flex items-center gap-1.5 cursor-pointer"
            >
              <ClipboardList className="w-3.5 h-3.5 text-[#9A7428]" />
              <span>View Specifications</span>
            </button>
            <button
              type="button"
              onClick={() => {
                onClose();
                onOpenCertificate();
              }}
              className="px-3.5 py-2 text-xs font-medium text-[#15271F] bg-white border border-[#D8D4CA] hover:border-[#15271F] rounded-sm inline-flex items-center gap-1.5 cursor-pointer"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-[#9A7428]" />
              <span>View Form C</span>
            </button>
            <a
              href={RERA_DETAILS.certificatePdfPath}
              download="Triivanta_Gold_UP_RERA_Certificate.pdf"
              className="px-3.5 py-2 text-xs font-semibold text-white bg-[#15271F] hover:bg-[#1F372C] rounded-sm inline-flex items-center gap-1.5"
            >
              <Download className="w-3.5 h-3.5 text-[#E5C987]" />
              <span>Download Form C PDF</span>
            </a>
          </div>

          <button
            type="button"
            onClick={() => {
              onClose();
              onOpenVipModal();
            }}
            className="text-xs uppercase tracking-[0.14em] font-semibold text-[#15271F] hover:text-[#9A7428] underline underline-offset-4 cursor-pointer"
          >
            Schedule Visit →
          </button>
        </div>
      </div>
    </div>
  );
};
