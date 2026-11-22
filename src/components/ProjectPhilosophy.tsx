import React from 'react';
import { ArrowRight } from 'lucide-react';
import { AREA_STATEMENT, RERA_DETAILS, TOWNSHIP_VISION } from '../data/rera';
import villaArchitectureImg from '../assets/images/triivanta_villa_architecture_1793423808848.jpg';

interface ProjectPhilosophyProps {
  onOpenVipModal: () => void;
  onOpenCertificate: () => void;
}

export const ProjectPhilosophy: React.FC<ProjectPhilosophyProps> = ({
  onOpenVipModal,
  onOpenCertificate,
}) => {
  const pillars = [
    {
      index: '01',
      title: '45-Acre Vision · Phase 1 (5 Pristine Acres)',
      body: `While TRIIVANTA GOLD is envisioned as a landmark ${TOWNSHIP_VISION.grandVisionAcres}-acre gated township, Phase 1 opens with 38 exclusive freehold plots across ${AREA_STATEMENT.totalLandSqm.toLocaleString()} Sq.Mt. (${AREA_STATEMENT.totalAcres} Acres), with civil works already underway.`,
    },
    {
      index: '02',
      title: '50%+ Open Area & Biophilic Streetscapes',
      body: `Anchored by a ${TOWNSHIP_VISION.mainBoulevardLabel} main boulevard, ${TOWNSHIP_VISION.internalRoadLabel} internal avenues, and ${TOWNSHIP_VISION.centralParkSqftLabel} of landscaped parks with jogger walkways, children’s meadows, and avenue trees.`,
    },
    {
      index: '03',
      title: 'Transparent U.P. RERA Launch Pricing',
      body: `Registered with U.P. RERA (${RERA_DETAILS.regNumber}) with clear launch baselines starting at ₹3,100 / Sq.Ft. (Executive/Classic/Premium), ₹3,410 / Sq.Ft. (Grand/Elite/Park-Front), and ₹3,720 / Sq.Ft. (Plots A-1 & A-2).`,
    },
  ];

  return (
    <section id="philosophy" className="py-24 bg-white border-b border-[#E6E3DB]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          {/* Left Editorial Narrative (6 cols) */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] font-semibold text-[#9A7428] mb-3">
                The Vision · TRIIVANTA GOLD
              </p>
              <h2 className="font-display font-medium text-3xl sm:text-5xl text-[#15271F] leading-[1.1] tracking-tight text-balance">
                A Masterpiece of Plotting Architecture on Sultanpur Road.
              </h2>
              <p className="mt-6 text-[#535E58] text-base leading-[1.75]">
                Set along Lucknow’s Sultanpur Road Growth Corridor at {RERA_DETAILS.locality},
                TRIIVANTA GOLD dedicates{' '}
                <strong className="font-semibold text-[#18221D]">
                  {AREA_STATEMENT.roadPercent} to wide 60 Ft. (18m) & 30 Ft. (9m) roads
                </strong>{' '}
                and{' '}
                <strong className="font-semibold text-[#18221D]">
                  {AREA_STATEMENT.greenPercent} to landscaped parks
                </strong>
                . Every underground pipeline, electrical cable, transformer, and rainwater recharge
                well is planned upfront so your home rests on lasting civic infrastructure.
              </p>

              {/* Editorial Numbered Pillars */}
              <div className="mt-10 divide-y divide-[#E6E3DB] border-t border-b border-[#E6E3DB]">
                {pillars.map((pillar) => (
                  <div key={pillar.index} className="py-5 flex items-start gap-5">
                    <span className="font-mono text-xs font-semibold text-[#9A7428] pt-1 shrink-0 tabular-nums">
                      {pillar.index}
                    </span>
                    <div>
                      <h3 className="font-display text-xl font-semibold text-[#15271F]">
                        {pillar.title}
                      </h3>
                      <p className="mt-1.5 text-sm text-[#535E58] leading-relaxed">{pillar.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-6">
              <button
                type="button"
                onClick={onOpenVipModal}
                className="px-6 py-3 text-xs uppercase tracking-[0.15em] font-semibold text-white bg-[#15271F] hover:bg-[#1F372C] rounded-sm inline-flex items-center gap-2 transition-colors cursor-pointer"
              >
                <span>Request Plot Availability</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#E5C987]" />
              </button>
              <button
                type="button"
                onClick={onOpenCertificate}
                className="text-xs uppercase tracking-[0.14em] font-semibold text-[#15271F] hover:text-[#9A7428] underline underline-offset-4 transition-colors cursor-pointer"
              >
                Inspect U.P. RERA Form C
              </button>
            </div>
          </div>

          {/* Right Framed Architectural Portrait (6 cols) */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="relative flex-1 min-h-[380px] sm:min-h-[480px] bg-[#15271F] rounded-sm overflow-hidden">
              <img
                src={villaArchitectureImg}
                alt="Independent bespoke residence concept inside TRIIVANTA GOLD on Sultanpur Road, Lucknow"
                className="w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D1A14]/55 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4 text-white">
                <div>
                  <span className="text-[11px] uppercase tracking-[0.16em] text-[#E5C987] block">
                    45-Acre Township Vision · Phase 1 Now Open
                  </span>
                  <span className="font-display text-2xl font-medium">
                    Design Your Own Legacy Residence
                  </span>
                </div>
                <span className="text-[11px] text-white/75 whitespace-nowrap">
                  Artistic Impression
                </span>
              </div>
            </div>

            {/* Quiet Architectural Metadata Strip below photo */}
            <div className="pt-4 flex flex-wrap items-center justify-between gap-3 text-xs text-[#535E58]">
              <span>Promoted by {RERA_DETAILS.promoterName}</span>
              <span className="font-mono text-[#18221D] tabular-nums">
                Phase 1: {AREA_STATEMENT.totalLandSqm.toLocaleString()} Sq.Mt. ·{' '}
                {AREA_STATEMENT.totalPlots} Plots
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
