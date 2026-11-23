import React from 'react';
import { ArrowRight, Calendar, Camera, CheckCircle2, HardHat } from 'lucide-react';
import { AREA_STATEMENT } from '../data/rera';

interface SiteProgressSectionProps {
  onOpenVipModal: () => void;
  onOpenBrochureModal: () => void;
}

interface ProgressMilestone {
  id: string;
  slotCode: string;
  dateStamp: string;
  stage: string;
  title: string;
  specHighlight: string;
  description: string;
  completionPercent: number;
}

const SITE_MILESTONES: ProgressMilestone[] = [
  {
    id: 'road-laying-gsb-wmm',
    slotCode: 'SITE PHOTO 01 · ROADWORKS',
    dateStamp: 'Updated · Nov 2026',
    stage: 'GSB / WMM Layering Active',
    title: '60 Ft. Main Boulevard & 30 Ft. Internal Road Laying',
    specHighlight: '18m & 9m Carriageways · 6,129.30 Sq.Mt. Road Network',
    description:
      'Earthwork levelling, sub-grade compaction, Granular Sub-Base (GSB), and Wet Mix Macadam (WMM) preparation underway across the primary 18-meter spine and 9-meter sector roads prior to final paving and kerbstone placement.',
    completionPercent: 55,
  },
  {
    id: 'perimeter-boundary-wall',
    slotCode: 'SITE PHOTO 02 · PERIMETER',
    dateStamp: 'Updated · Nov 2026',
    stage: 'Masonry & Demarcation',
    title: 'Perimeter Boundary Wall & Plot Demarcation',
    specHighlight: `${AREA_STATEMENT.boundaryWallLengthM} RMT Length · ${AREA_STATEMENT.boundaryWallHeightM}m High Gated Enclosure`,
    description:
      'Continuous 2.1-meter high boundary wall erection securing the 4.87-acre Phase 1 envelope, alongside clear physical demarcation pegs and numbering alignment for all 38 residential plots.',
    completionPercent: 70,
  },
  {
    id: 'grand-entrance-gate',
    slotCode: 'SITE PHOTO 03 · GATEWAY',
    dateStamp: 'Updated · Oct–Nov 2026',
    stage: 'Foundation & Plinth Works',
    title: '100-Foot Grand Entrance & Gothic Pillar Gate',
    specHighlight: '100 Ft. Span · Directly on Proposed 24-Meter Road',
    description:
      'Structural foundation and plinth works for the signature 100-foot gothic-pillar entrance arch, dual symmetrical security guardhouses, and palm-lined arrival apron off the proposed 24-meter Road.',
    completionPercent: 45,
  },
  {
    id: 'drainage-sewerage-lines',
    slotCode: 'SITE PHOTO 04 · UTILITIES',
    dateStamp: 'Updated · Oct 2026',
    stage: 'Trenching & Pipe Laying',
    title: 'Stormwater Drainage, Sewerage & Recharge Pits',
    specHighlight: '150 mm DWC Drains · 250/450 mm RCC Hume Pipes · 25 KLD STP',
    description:
      'Underground trenching and alignment for 150 mm DWC stormwater branch drains, 250 mm & 450 mm RCC sewerage manholes leading to the 25 KLD STP zone, and 3.00m diameter rainwater harvesting pits.',
    completionPercent: 40,
  },
];

export const SiteProgressSection: React.FC<SiteProgressSectionProps> = ({
  onOpenVipModal,
  onOpenBrochureModal,
}) => {
  return (
    <section id="site-progress" className="py-24 bg-white border-b border-[#E6E3DB]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.22em] font-semibold text-[#7A5612] mb-3">
              Ground Reality · Active Civil Execution
            </p>
            <h2 className="font-display font-medium text-3xl sm:text-5xl text-[#15271F] leading-[1.1] tracking-tight text-balance">
              Live Site Development Updates.
            </h2>
            <p className="mt-4 text-[#2D3933] text-sm sm:text-base leading-relaxed">
              Verified physical infrastructure progress on ground at Vill. - Nizampur, Gosainganj
              (Sultanpur Road, Lucknow). Inspect active road laying, boundary wall construction,
              entrance gate plinths, and underground drainage works in person.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={onOpenVipModal}
              className="px-6 py-3.5 text-xs uppercase tracking-[0.15em] font-semibold text-white bg-[#15271F] hover:bg-[#1F372C] active:scale-[0.98] rounded-sm inline-flex items-center gap-2 transition-all whitespace-nowrap cursor-pointer"
            >
              <span>Book a Guided Site Visit</span>
              <ArrowRight className="w-4 h-4 text-[#F2D99B]" />
            </button>
          </div>
        </div>

        {/* 4 Date-Stamped Civil Execution Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {SITE_MILESTONES.map((milestone) => (
            <article
              key={milestone.id}
              className="bg-[#F5F4EF] border border-[#E2DFD7] rounded-sm overflow-hidden flex flex-col justify-between"
            >
              {/* Date-Stamped Site Photo Frame Placeholder */}
              <div className="relative aspect-[16/10] bg-[#ECEAE2] border-b border-[#E2DFD7] flex flex-col justify-between p-5 overflow-hidden">
                {/* Subtle Architectural Drafting Grid Pattern */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 opacity-35"
                  style={{
                    backgroundImage:
                      'linear-gradient(to right, #C9C4B6 1px, transparent 1px), linear-gradient(to bottom, #C9C4B6 1px, transparent 1px)',
                    backgroundSize: '32px 32px',
                  }}
                />

                {/* Top Meta Row */}
                <div className="relative z-10 flex items-center justify-between gap-2 text-[11px] font-mono">
                  <span className="px-2.5 py-1 bg-[#15271F] text-[#F2D99B] rounded-sm tracking-[0.12em] font-semibold">
                    {milestone.slotCode}
                  </span>
                  <span className="px-2.5 py-1 bg-white/95 border border-[#D8D4CA] text-[#15271F] rounded-sm inline-flex items-center gap-1.5 font-medium">
                    <Calendar className="w-3 h-3 text-[#7A5612]" />
                    <span>{milestone.dateStamp}</span>
                  </span>
                </div>

                {/* Center Documentary Frame Placeholder */}
                <div className="relative z-10 my-auto py-4 flex flex-col items-center text-center">
                  <div className="w-11 h-11 rounded-sm bg-white border border-[#D8D4CA] flex items-center justify-center text-[#15271F] mb-2.5">
                    <Camera className="w-5 h-5 text-[#7A5612]" />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[#15271F]">
                    On-Site Ground Capture Slot
                  </span>
                  <span className="mt-1 text-[11px] text-[#2D3933] max-w-xs">
                    {milestone.stage} · Live photography updated bi-weekly from Sultanpur Road site
                  </span>
                </div>

                {/* Bottom Engineering Spec Strip */}
                <div className="relative z-10 pt-3 border-t border-[#D8D4CA]/80 flex items-center justify-between gap-3 text-[11px] text-[#0E1713]">
                  <span className="inline-flex items-center gap-1.5 font-medium truncate">
                    <HardHat className="w-3.5 h-3.5 text-[#7A5612] shrink-0" />
                    <span className="truncate">{milestone.specHighlight}</span>
                  </span>
                  <span className="font-mono font-semibold text-[#15271F] tabular-nums shrink-0">
                    {milestone.completionPercent}%
                  </span>
                </div>
              </div>

              {/* Editorial Progress Details */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between bg-white">
                <div>
                  <div className="flex items-center justify-between gap-2 text-[11px] uppercase tracking-[0.14em] text-[#7A5612] font-semibold mb-2">
                    <span className="inline-flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#2E5D43]" />
                      <span>{milestone.stage}</span>
                    </span>
                    <span className="font-mono text-[#2D3933]">{milestone.dateStamp}</span>
                  </div>

                  <h3 className="font-display text-2xl font-semibold text-[#15271F] leading-snug">
                    {milestone.title}
                  </h3>
                  <p className="mt-2.5 text-sm text-[#2D3933] leading-relaxed">
                    {milestone.description}
                  </p>
                </div>

                {/* Clean Civil Progress Bar */}
                <div className="mt-5 pt-4 border-t border-[#ECEAE2]">
                  <div className="flex items-center justify-between text-[11px] text-[#2D3933] mb-1.5">
                    <span>Phase 1 Execution Milestone</span>
                    <span className="font-mono font-semibold text-[#15271F] tabular-nums">
                      {milestone.completionPercent}% Complete
                    </span>
                  </div>
                  <div className="w-full h-1.5 bg-[#ECEAE2] overflow-hidden">
                    <div
                      className="h-full bg-[#15271F]"
                      style={{ width: `${milestone.completionPercent}%` }}
                    />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Verification Strip */}
        <div className="mt-10 p-5 sm:p-6 bg-[#F5F4EF] border border-[#E2DFD7] rounded-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="text-xs sm:text-sm text-[#2D3933]">
            <strong className="text-[#15271F]">Want to inspect the on-ground work live?</strong>{' '}
            Visit our site office on Sultanpur Road or review the sanctioned development
            specifications.
          </div>
          <button
            type="button"
            onClick={onOpenBrochureModal}
            className="self-start sm:self-auto text-xs uppercase tracking-[0.14em] font-semibold text-[#15271F] hover:text-[#7A5612] underline underline-offset-4 whitespace-nowrap cursor-pointer"
          >
            Download RERA-Approved Project Dossier →
          </button>
        </div>
      </div>
    </section>
  );
};
