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
    <footer className="bg-[#F4F2EC] border-t border-[#E2DDD0] text-slate-600 text-xs">
      {/* Top CTA Bar */}
      <div className="border-b border-[#E2DDD0] bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#8F6714] font-semibold block mb-1">
              U.P. RERA Registered Project · {RERA_DETAILS.regNumber}
            </span>
            <h3 className="text-xl sm:text-2xl font-display font-bold text-[#111827]">
              Own One of 38 Exclusive Plots at TRIIVANTA GOLD
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm mt-1 max-w-xl">
              Register your Expression of Interest for priority selection across Plots 01–36, A-1 &
              A-2 on Sultanpur Road, Lucknow.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={onOpenVipModal}
              className="px-6 py-3 text-xs uppercase tracking-widest font-semibold text-white bg-[#121826] hover:bg-[#1E293B] active:scale-[0.98] rounded transition-all cursor-pointer whitespace-nowrap"
            >
              Register Priority Interest
            </button>
            <button
              type="button"
              onClick={onOpenSpecsSheet}
              className="px-5 py-3 text-xs uppercase tracking-widest font-semibold text-[#111827] bg-white border border-[#D4CBB8] hover:border-[#8F6714] rounded transition-all cursor-pointer whitespace-nowrap"
            >
              View Specifications
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
        {/* Brand Col (3 cols) */}
        <div className="lg:col-span-3 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded border border-[#C8B282] bg-white flex items-center justify-center">
              <span className="font-display font-bold text-[#8F6714] text-sm">TG</span>
            </div>
            <span className="font-display font-bold tracking-[0.2em] text-lg text-[#111827]">
              TRIIVANTA <span className="text-[#8F6714]">GOLD</span>
            </span>
          </div>
          <p className="text-slate-600 text-xs leading-relaxed">
            A U.P. RERA registered 38-plot residential enclave across 19,689 Sq.Mt. (4.87 Acres) on
            Sultanpur Road, Nizampur, Gosainganj, Lucknow.
          </p>
          <div className="text-[11px] text-[#8F6714] font-semibold">
            Launching Soon · Priority Registration Open
          </div>
        </div>

        {/* Navigation Col (2 cols) */}
        <div className="lg:col-span-2">
          <h4 className="text-[#111827] font-semibold uppercase tracking-wider text-xs mb-4">
            Navigation
          </h4>
          <ul className="space-y-2.5">
            <li>
              <a href="#overview" className="hover:text-[#8F6714] transition-colors">
                Township Overview
              </a>
            </li>
            <li>
              <a href="#rera-credentials" className="hover:text-[#8F6714] transition-colors">
                RERA Credentials
              </a>
            </li>
            <li>
              <a href="#masterplan" className="hover:text-[#8F6714] transition-colors">
                Master Plan & Area
              </a>
            </li>
            <li>
              <a href="#collections" className="hover:text-[#8F6714] transition-colors">
                38-Plot Schedule
              </a>
            </li>
            <li>
              <a href="#specifications" className="hover:text-[#8F6714] transition-colors">
                Specifications
              </a>
            </li>
            <li>
              <a href="#connectivity" className="hover:text-[#8F6714] transition-colors">
                Strategic Location
              </a>
            </li>
          </ul>
        </div>

        {/* Promoter & Site Address Col (3 cols) */}
        <div className="lg:col-span-3">
          <h4 className="text-[#111827] font-semibold uppercase tracking-wider text-xs mb-4">
            Promoter & Site Office
          </h4>
          <ul className="space-y-3">
            <li className="flex items-start gap-2.5">
              <Building2 className="w-4 h-4 text-[#8F6714] shrink-0 mt-0.5" />
              <div>
                <div className="text-[#111827] font-semibold">{RERA_DETAILS.promoterName}</div>
                <div className="text-slate-600 mt-0.5">
                  Reg. Office: {RERA_DETAILS.promoterOffice}
                </div>
              </div>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-[#8F6714] shrink-0 mt-0.5" />
              <span>Project Site: {RERA_DETAILS.fullProjectAddress}</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-[#8F6714] shrink-0" />
              <a
                href="mailto:info@triivantagold.com"
                className="font-mono text-[#111827] hover:text-[#8F6714] transition-colors"
              >
                info@triivantagold.com
              </a>
            </li>
          </ul>
        </div>

        {/* Official RERA Statutory Compliance Block (4 cols) */}
        <div className="lg:col-span-4">
          <h4 className="text-[#111827] font-semibold uppercase tracking-wider text-xs mb-4 flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#8F6714]" />
            <span>Statutory Disclosures</span>
          </h4>
          <div className="p-4 rounded-lg bg-white border border-[#DFD8C8] flex items-start gap-4">
            <div className="w-20 h-20 bg-white border border-[#E5E0D5] rounded p-1 shrink-0">
              <img
                src={RERA_DETAILS.qrImagePath}
                alt={`Official U.P. RERA QR Code ${RERA_DETAILS.regNumber}`}
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="space-y-1.5 min-w-0 text-[11px] leading-relaxed">
              <div className="font-mono text-xs font-semibold text-[#111827] tabular-nums break-all">
                {RERA_DETAILS.regNumber}
              </div>
              <div className="text-slate-600">
                Registered:{' '}
                <span className="text-[#111827] font-mono font-medium">
                  {RERA_DETAILS.registrationDate}
                </span>
              </div>
              <div className="text-slate-600">
                Completion:{' '}
                <span className="text-[#111827] font-mono font-medium">
                  {RERA_DETAILS.proposedCompletionDate}
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <a
                  href={RERA_DETAILS.authorityUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#8F6714] hover:text-[#6F4E0C] inline-flex items-center gap-1 font-semibold"
                >
                  <span>{RERA_DETAILS.authorityDisplayUrl}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
                <button
                  type="button"
                  onClick={onOpenCertificate}
                  className="text-[#111827] hover:text-[#8F6714] inline-flex items-center gap-1 underline underline-offset-2 font-medium cursor-pointer"
                >
                  <FileText className="w-3 h-3" />
                  <span>Form C</span>
                </button>
                <button
                  type="button"
                  onClick={onOpenSpecsSheet}
                  className="text-[#111827] hover:text-[#8F6714] inline-flex items-center gap-1 underline underline-offset-2 font-medium cursor-pointer"
                >
                  <ClipboardList className="w-3 h-3" />
                  <span>Specifications</span>
                </button>
              </div>
            </div>
          </div>
          <p className="mt-3 text-[11px] text-slate-500 leading-relaxed">
            Architectural visuals are artistic impressions. Development, plot dimensions, and civic
            works strictly adhere to U.P. RERA Registration Certificate (Form C) and official
            project specifications.
          </p>
        </div>
      </div>

      {/* Copyright Line */}
      <div className="border-t border-[#E2DDD0] py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} {RERA_DETAILS.promoterName} · TRIIVANTA GOLD. All rights
            reserved.
          </div>
          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={onOpenCertificate}
              className="hover:text-[#8F6714] transition-colors cursor-pointer"
            >
              Form C Certificate
            </button>
            <button
              type="button"
              onClick={onOpenSpecsSheet}
              className="hover:text-[#8F6714] transition-colors cursor-pointer"
            >
              Project Specifications
            </button>
            <a
              href={RERA_DETAILS.authorityUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#8F6714] transition-colors"
            >
              U.P. RERA Portal
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
