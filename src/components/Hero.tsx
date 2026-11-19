import React from 'react';
import { ArrowRight, FileText, ShieldCheck } from 'lucide-react';
import { CountdownTimer } from './CountdownTimer';
import { RERA_DETAILS, AREA_STATEMENT } from '../data/rera';

interface HeroProps {
  onOpenVipModal: () => void;
  onOpenBrochureModal: () => void;
  onOpenCertificate: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenVipModal,
  onOpenBrochureModal,
  onOpenCertificate,
}) => {
  const heroImageSrc = '/src/assets/images/triivanta_hero_aerial_1793423807000.jpg';

  return (
    <section
      id="overview"
      className="relative min-h-[90vh] flex flex-col justify-between overflow-hidden bg-[#121826]"
    >
      {/* Background Image with Measured Contrast Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImageSrc}
          alt="Architectural impression of TRIIVANTA GOLD plotted township on Sultanpur Road, Lucknow"
          className="w-full h-full object-cover object-center scale-105"
          referrerPolicy="no-referrer"
          onError={(e) => {
            (e.target as HTMLElement).style.display = 'none';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0E1524]/82 via-[#0E1524]/68 to-[#0E1524]/88" />
      </div>

      {/* Center Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-14 sm:pt-16 w-full text-center">
        {/* Clean Unboxed Metadata Kicker */}
        <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs tracking-[0.14em] text-[#F3E5AB] font-medium mb-6">
          <span>U.P. RERA Registered</span>
          <span aria-hidden="true" className="text-[#F3E5AB]/45">·</span>
          <span className="font-mono tabular-nums text-white">{RERA_DETAILS.regNumber}</span>
          <span aria-hidden="true" className="text-[#F3E5AB]/45">·</span>
          <span>{RERA_DETAILS.shortLocation}</span>
        </div>

        {/* Hero Headline */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-bold tracking-tight text-white max-w-4xl mx-auto leading-[1.15] text-balance">
          Sanctioned Plotted Living on Sultanpur Road.{' '}
          <span className="gold-gradient-text-hero block mt-1">TRIIVANTA GOLD</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-5 text-slate-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-light">
          An exclusive gated enclave of{' '}
          <strong className="text-white font-medium">38 residential plots</strong> spanning{' '}
          <strong className="text-white font-medium">19,689 Sq.Mt. (4.87 Acres)</strong> on
          Sultanpur Road at Nizampur, Gosainganj, Lucknow by{' '}
          <span className="text-white font-medium">{RERA_DETAILS.promoterName}</span> — with 18m &
          9m roads, 2 landscaped parks, and full underground utilities.
        </p>

        {/* Primary & Secondary Actions */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            type="button"
            onClick={onOpenVipModal}
            className="w-full sm:w-auto px-8 py-3.5 text-xs uppercase tracking-[0.16em] font-bold text-[#111827] bg-white hover:bg-[#FAF6EC] active:scale-[0.98] rounded transition-all duration-200 shadow-lg flex items-center justify-center gap-2.5 whitespace-nowrap cursor-pointer"
          >
            <span>Reserve Plot Allocation</span>
            <ArrowRight className="w-4 h-4 text-[#8F6714]" />
          </button>

          <button
            type="button"
            onClick={onOpenBrochureModal}
            className="w-full sm:w-auto px-7 py-3.5 text-xs uppercase tracking-[0.16em] font-medium text-white bg-white/12 hover:bg-white/20 backdrop-blur-sm border border-white/35 rounded transition-all duration-200 flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer"
          >
            <FileText className="w-4 h-4 text-[#F3E5AB]" />
            <span>Digital Preview Kit</span>
          </button>
        </div>

        {/* Countdown + Official RERA Verification Porcelain Dock */}
        <div className="mt-10 max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
          <div className="lg:col-span-7 flex">
            <CountdownTimer />
          </div>

          {/* Official RERA Strip with Scannable QR */}
          <div className="lg:col-span-5 bg-white/95 backdrop-blur-md border border-[#E5E0D5] rounded-lg p-4 sm:p-5 flex items-center gap-4 text-left shadow-lg">
            <div className="w-24 h-24 bg-white border border-[#E5E0D5] rounded p-1.5 shrink-0 flex items-center justify-center">
              <img
                src={RERA_DETAILS.qrImagePath}
                alt={`U.P. RERA QR Code ${RERA_DETAILS.regNumber}`}
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="min-w-0 flex-1 space-y-1.5">
              <div className="flex items-center gap-1.5 text-[11px] uppercase tracking-wider font-semibold text-[#8F6714]">
                <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
                <span>U.P. RERA Approved</span>
              </div>
              <div className="font-mono text-xs sm:text-sm font-semibold text-[#111827] tabular-nums truncate">
                {RERA_DETAILS.regNumber}
              </div>
              <div className="text-[11px] text-slate-600">
                Website:{' '}
                <a
                  href={RERA_DETAILS.authorityUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#111827] hover:text-[#8F6714] underline underline-offset-2 font-medium"
                >
                  {RERA_DETAILS.authorityDisplayUrl}
                </a>
              </div>
              <button
                type="button"
                onClick={onOpenCertificate}
                className="pt-1 text-xs font-semibold text-[#8F6714] hover:text-[#6F4E0C] underline underline-offset-4 cursor-pointer"
              >
                Inspect Form C Certificate
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Verified Benchmark Strip */}
      <div className="relative z-10 w-full mt-12 border-t border-[#E5E0D5] bg-white">
        <div className="max-w-7xl mx-auto px-6 py-5 grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          <div className="flex flex-col items-center">
            <span className="font-display text-2xl sm:text-3xl font-bold text-[#111827] tabular-nums">
              {AREA_STATEMENT.totalLandSqm.toLocaleString()}{' '}
              <span className="text-[#8F6714] text-base font-normal">Sq.Mt.</span>
            </span>
            <span className="text-[11px] sm:text-xs uppercase tracking-wider text-slate-500 mt-1">
              Total Project Area (4.87 Acres)
            </span>
          </div>

          <div className="flex flex-col items-center">
            <span className="font-display text-2xl sm:text-3xl font-bold text-[#111827] tabular-nums">
              {AREA_STATEMENT.totalPlots}{' '}
              <span className="text-[#8F6714] text-base font-normal">Plots</span>
            </span>
            <span className="text-[11px] sm:text-xs uppercase tracking-wider text-slate-500 mt-1">
              137.40 to 420.02 Sq.Mt.
            </span>
          </div>

          <div className="flex flex-col items-center">
            <span className="font-display text-2xl sm:text-3xl font-bold text-[#111827] tabular-nums">
              18m & 9m <span className="text-[#8F6714] text-base font-normal">Roads</span>
            </span>
            <span className="text-[11px] sm:text-xs uppercase tracking-wider text-slate-500 mt-1">
              32.75% Wide Road Network
            </span>
          </div>

          <div className="flex flex-col items-center">
            <span className="font-display text-2xl sm:text-3xl font-bold text-[#111827] tabular-nums">
              2,807.59 <span className="text-[#8F6714] text-base font-normal">Sq.Mt.</span>
            </span>
            <span className="text-[11px] sm:text-xs uppercase tracking-wider text-slate-500 mt-1">
              2 Landscaped Parks (15% Greens)
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
