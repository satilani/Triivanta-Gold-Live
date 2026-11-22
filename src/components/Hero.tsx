import React from 'react';
import { ArrowRight, FileText, ShieldCheck } from 'lucide-react';
import { RERA_DETAILS, AREA_STATEMENT, TOWNSHIP_VISION } from '../data/rera';
import heroAerialImg from '../assets/images/triivanta_hero_aerial_1793423807000.jpg';

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
  const heroImageSrc = heroAerialImg;

  const highlights = [
    {
      value: `${TOWNSHIP_VISION.grandVisionAcres} Acres`,
      sub: `Township Vision · Phase 1 (${AREA_STATEMENT.totalAcres} Acres)`,
    },
    {
      value: `${AREA_STATEMENT.totalPlots} Plots`,
      sub: 'Phase 1 · 1,181 – 4,589 Sq.Ft.',
    },
    {
      value: `₹${TOWNSHIP_VISION.startingRatePerSqft.toLocaleString('en-IN')} / Sq.Ft.`,
      sub: 'Official Launch Baseline (Current Year)',
    },
    {
      value: `${TOWNSHIP_VISION.centralParkSqftLabel}`,
      sub: 'Central Park · 60 Ft. Main Boulevard',
    },
  ];

  return (
    <section id="overview" className="relative flex flex-col bg-[#15271F]">
      {/* Full-Bleed Architectural Hero Frame */}
      <div className="relative min-h-[78vh] lg:min-h-[82vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImageSrc}
            alt="Architectural aerial view of TRIIVANTA GOLD residential plotted township on Sultanpur Road, Lucknow"
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
            onError={(e) => {
              (e.target as HTMLElement).style.display = 'none';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D1A14]/92 via-[#0D1A14]/45 to-[#0D1A14]/25" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D1A14]/78 via-[#0D1A14]/28 to-transparent" />
        </div>

        {/* Lower-Left Editorial Composition + Quiet RERA Reference */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-14 sm:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-8">
              {/* Unboxed Metadata Line */}
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs tracking-[0.14em] uppercase text-[#E5C987] font-medium mb-5">
                <span>45-Acre Township Vision · Phase 1 Launch</span>
                <span aria-hidden="true" className="text-white/35">
                  ·
                </span>
                <span className="text-white/90">{RERA_DETAILS.shortLocation}</span>
              </div>

              {/* Bold Hero Brand Title & Editorial Tagline */}
              <h1 className="font-display font-bold text-4xl sm:text-6xl lg:text-[68px] text-white tracking-[0.1em] leading-[1.04] text-balance max-w-3xl">
                TRIIVANTA <span className="text-[#E5C987]">GOLD</span>
                <span className="block mt-2 font-medium text-2xl sm:text-4xl lg:text-[42px] tracking-tight text-white/95 leading-[1.12]">
                  Where <span className="italic text-[#E5C987]">Luxury</span> Meets Land.
                </span>
              </h1>

              <p className="mt-5 text-white/88 text-base sm:text-lg max-w-xl leading-relaxed font-light">
                A 45-acre gated township vision on Sultanpur Road, opening Phase 1 with{' '}
                <span className="text-white font-medium">38 private freehold plots</span>—welcoming
                you through a landmark{' '}
                <span className="text-[#E5C987] font-medium">100-foot grand entrance</span> into
                wide avenues and timeless serenity.
              </p>

              {/* Refined Primary & Secondary Actions */}
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={onOpenVipModal}
                  className="px-7 py-3.5 text-xs uppercase tracking-[0.16em] font-semibold text-[#15271F] bg-white hover:bg-[#F5F4EF] active:scale-[0.98] rounded-sm transition-all duration-200 inline-flex items-center gap-2.5 whitespace-nowrap cursor-pointer"
                >
                  <span>Book Site Visit</span>
                  <ArrowRight className="w-4 h-4 text-[#9A7428]" />
                </button>

                <button
                  type="button"
                  onClick={onOpenBrochureModal}
                  className="px-7 py-3.5 text-xs uppercase tracking-[0.16em] font-medium text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/35 rounded-sm transition-all duration-200 inline-flex items-center gap-2 whitespace-nowrap cursor-pointer"
                >
                  <FileText className="w-4 h-4 text-[#E5C987]" />
                  <span>Project Dossier</span>
                </button>
              </div>
            </div>

            {/* Right Quiet U.P. RERA Verification Plate */}
            <div className="lg:col-span-4 lg:justify-self-end w-full max-w-sm">
              <div className="bg-white/95 backdrop-blur-md border border-[#E2DFD7] rounded-sm p-4 flex items-center gap-4 shadow-xl">
                <div className="w-20 h-20 bg-white border border-[#E6E3DB] p-1 shrink-0 flex items-center justify-center">
                  <img
                    src={RERA_DETAILS.qrImagePath}
                    alt={`Official U.P. RERA QR Code ${RERA_DETAILS.regNumber}`}
                    className="w-full h-full object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1.5 text-[11px] uppercase tracking-[0.12em] font-semibold text-[#15271F]">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#9A7428] shrink-0" />
                    <span>U.P. RERA Registered</span>
                  </div>
                  <div className="mt-1 font-mono text-xs font-semibold text-[#18221D] tabular-nums truncate">
                    {RERA_DETAILS.regNumber}
                  </div>
                  <div className="mt-1.5 flex items-center gap-3 text-[11px]">
                    <button
                      type="button"
                      onClick={onOpenCertificate}
                      className="font-semibold text-[#9A7428] hover:text-[#785717] underline underline-offset-4 cursor-pointer"
                    >
                      View Form C
                    </button>
                    <span className="text-[#C7C3B8]" aria-hidden="true">
                      |
                    </span>
                    <a
                      href={RERA_DETAILS.authorityUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#535E58] hover:text-[#15271F]"
                    >
                      {RERA_DETAILS.authorityDisplayUrl}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Full-Width Serene Architectural Key Metrics Ribbon */}
      <div className="w-full bg-white border-b border-[#E6E3DB]">
        <div className="max-w-7xl mx-auto px-6 py-7 grid grid-cols-2 lg:grid-cols-4 gap-y-6 gap-x-8 divide-y-0 lg:divide-x lg:divide-[#E6E3DB]">
          {highlights.map((item, idx) => (
            <div key={item.value} className={`flex flex-col ${idx > 0 ? 'lg:pl-8' : ''}`}>
              <span className="font-display text-2xl sm:text-3xl font-semibold text-[#15271F] tabular-nums leading-tight">
                {item.value}
              </span>
              <span className="text-xs text-[#535E58] mt-1 tracking-wide">{item.sub}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
