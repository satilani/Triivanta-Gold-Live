import React from 'react';
import { ArrowRight } from 'lucide-react';
import { AREA_STATEMENT, RERA_DETAILS } from '../data/rera';
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
      title: 'A Sanctuary for Just 38 Families',
      body: 'Conceived as a calm, low-density alternative to crowded high-rise clusters, TRIIVANTA GOLD limits its footprint to 38 demarcated residential plots across 4.87 acres.',
    },
    {
      index: '02',
      title: 'Freedom to Craft Your Own Home',
      body: 'From 137.40 Sq.Mt. contemporary residences to 420.02 Sq.Mt. signature estates, every freehold plot lets you design around natural light, courtyards, and multigenerational living.',
    },
    {
      index: '03',
      title: 'Transparent U.P. RERA Governance',
      body: `Registered with Uttar Pradesh RERA (${RERA_DETAILS.regNumber}) with a clear completion horizon through ${RERA_DETAILS.proposedCompletionDate}, backed by complete civic engineering specifications.`,
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
                The Philosophy · TRIIVANTA GOLD
              </p>
              <h2 className="font-display font-medium text-3xl sm:text-5xl text-[#15271F] leading-[1.1] tracking-tight text-balance">
                Space to Breathe, Grounded in Lasting Value.
              </h2>
              <p className="mt-6 text-[#535E58] text-base leading-[1.75]">
                Set directly along Lucknow’s flourishing Sultanpur Road corridor at{' '}
                {RERA_DETAILS.locality}, TRIIVANTA GOLD dedicates{' '}
                <strong className="font-semibold text-[#18221D]">
                  {AREA_STATEMENT.roadPercent} to wide 18m & 9m avenues
                </strong>{' '}
                and{' '}
                <strong className="font-semibold text-[#18221D]">
                  {AREA_STATEMENT.greenPercent} to two landscaped parks
                </strong>
                . Every underground pipeline, electrical transformer, and rainwater recharge pit is
                planned upfront so your home begins on solid civic foundations.
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
                    Independent Plotted Living
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
                {AREA_STATEMENT.totalLandSqm.toLocaleString()} Sq.Mt. · {AREA_STATEMENT.totalPlots}{' '}
                Plots
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
