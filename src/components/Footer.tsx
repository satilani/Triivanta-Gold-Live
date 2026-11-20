import React from 'react';
import { Mail, Building2, MapPin, ShieldCheck, ExternalLink, FileText, ClipboardList } from 'lucide-react';
import { RERA_DETAILS } from '../data/rera';

interface FooterProps {
  onOpenVipModal: () => void;
  onOpenSpecsSheet: () => void;
  onOpenCertificate: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenVipModal,
  onOpenSpecsSheet,
  onOpenCertificate,
}) => {
  return (
    <footer className="bg-[#F5F4EF] text-[#535E58] text-xs">
      {/* Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
        {/* Brand Col (3 cols) */}
        <div className="lg:col-span-3 space-y-4">
          <a
            href="#overview"
            className="font-display font-semibold tracking-[0.2em] text-xl text-[#15271F] inline-block"
          >
            TRIIVANTA <span className="text-[#9A7428]">GOLD</span>
          </a>
          <p className="text-xs leading-relaxed">
            A U.P. RERA registered 38-plot residential enclave spanning 19,689 Sq.Mt. (4.87 Acres)
            on Sultanpur Road, Nizampur, Gosainganj, Lucknow.
          </p>
          <button
            type="button"
            onClick={onOpenVipModal}
            className="inline-block pt-1 text-xs uppercase tracking-[0.14em] font-semibold text-[#15271F] hover:text-[#9A7428] underline underline-offset-4 cursor-pointer"
          >
            Schedule Site Visit →
          </button>
        </div>

        {/* Navigation Col (2 cols) */}
        <div className="lg:col-span-2">
          <h4 className="text-[#15271F] font-semibold uppercase tracking-[0.14em] text-[11px] mb-4">
            Explore
          </h4>
          <ul className="space-y-2.5">
            <li>
              <a href="#philosophy" className="hover:text-[#15271F] transition-colors">
                Project Philosophy
              </a>
            </li>
            <li>
              <a href="#masterplan" className="hover:text-[#15271F] transition-colors">
                Master Plan & Area
              </a>
            </li>
            <li>
              <a href="#collections" className="hover:text-[#15271F] transition-colors">
                38-Plot Schedule
              </a>
            </li>
            <li>
              <a href="#amenities" className="hover:text-[#15271F] transition-colors">
                Parks & Infrastructure
              </a>
            </li>
            <li>
              <a href="#specifications" className="hover:text-[#15271F] transition-colors">
                Specifications
              </a>
            </li>
            <li>
              <a href="#connectivity" className="hover:text-[#15271F] transition-colors">
                Sultanpur Road Location
              </a>
            </li>
          </ul>
        </div>

        {/* Promoter & Site Address Col (3 cols) */}
        <div className="lg:col-span-3">
          <h4 className="text-[#15271F] font-semibold uppercase tracking-[0.14em] text-[11px] mb-4">
            Promoter & Site Office
          </h4>
          <ul className="space-y-3">
            <li className="flex items-start gap-2.5">
              <Building2 className="w-4 h-4 text-[#9A7428] shrink-0 mt-0.5" />
              <div>
                <div className="text-[#18221D] font-semibold">{RERA_DETAILS.promoterName}</div>
                <div className="mt-0.5">Reg. Office: {RERA_DETAILS.promoterOffice}</div>
              </div>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-[#9A7428] shrink-0 mt-0.5" />
              <span>Project Site: {RERA_DETAILS.fullProjectAddress}</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-[#9A7428] shrink-0" />
              <a
                href="mailto:info@triivantagold.com"
                className="font-mono text-[#18221D] hover:text-[#9A7428] transition-colors"
              >
                info@triivantagold.com
              </a>
            </li>
          </ul>
        </div>

        {/* Statutory RERA Compliance Col (4 cols) */}
        <div className="lg:col-span-4">
          <h4 className="text-[#15271F] font-semibold uppercase tracking-[0.14em] text-[11px] mb-4 flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#9A7428]" />
            <span>U.P. RERA Disclosures</span>
          </h4>
          <div className="p-4 rounded-sm bg-white border border-[#E2DFD7] flex items-start gap-4">
            <div className="w-20 h-20 bg-white border border-[#E6E3DB] p-1 shrink-0">
              <img
                src={RERA_DETAILS.qrImagePath}
                alt={`Official U.P. RERA QR Code ${RERA_DETAILS.regNumber}`}
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="space-y-1.5 min-w-0 text-[11px] leading-relaxed">
              <div className="font-mono text-xs font-semibold text-[#15271F] tabular-nums break-all">
                {RERA_DETAILS.regNumber}
              </div>
              <div>
                Registered:{' '}
                <span className="text-[#18221D] font-mono font-medium">
                  {RERA_DETAILS.registrationDate}
                </span>
              </div>
              <div>
                Completion:{' '}
                <span className="text-[#18221D] font-mono font-medium">
                  {RERA_DETAILS.proposedCompletionDate}
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <a
                  href={RERA_DETAILS.authorityUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#9A7428] hover:text-[#785717] inline-flex items-center gap-1 font-semibold"
                >
                  <span>{RERA_DETAILS.authorityDisplayUrl}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
                <button
                  type="button"
                  onClick={onOpenCertificate}
                  className="text-[#15271F] hover:text-[#9A7428] inline-flex items-center gap-1 underline underline-offset-2 font-medium cursor-pointer"
                >
                  <FileText className="w-3 h-3" />
                  <span>Form C</span>
                </button>
                <button
                  type="button"
                  onClick={onOpenSpecsSheet}
                  className="text-[#15271F] hover:text-[#9A7428] inline-flex items-center gap-1 underline underline-offset-2 font-medium cursor-pointer"
                >
                  <ClipboardList className="w-3 h-3" />
                  <span>Specs</span>
                </button>
              </div>
            </div>
          </div>
          <p className="mt-3 text-[11px] text-[#6B7570] leading-relaxed">
            Architectural visuals are artistic impressions. Development, plot dimensions, and civic
            works strictly adhere to U.P. RERA Form C and official project specifications.
          </p>
        </div>
      </div>

      {/* Quiet Bottom Copyright Bar */}
      <div className="border-t border-[#E2DFD7] py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#6B7570]">
          <div>
            © {new Date().getFullYear()} {RERA_DETAILS.promoterName} · TRIIVANTA GOLD. All rights
            reserved.
          </div>
          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={onOpenCertificate}
              className="hover:text-[#15271F] transition-colors cursor-pointer"
            >
              Form C Certificate
            </button>
            <button
              type="button"
              onClick={onOpenSpecsSheet}
              className="hover:text-[#15271F] transition-colors cursor-pointer"
            >
              Project Specifications
            </button>
            <a
              href={RERA_DETAILS.authorityUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#15271F] transition-colors"
            >
              U.P. RERA Portal
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
