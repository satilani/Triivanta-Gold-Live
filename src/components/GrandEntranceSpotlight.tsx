import React from 'react';
import { ArrowRight } from 'lucide-react';
import grandEntranceImg from '../assets/images/triivanta_grand_entrance_1795329881731.jpg';

interface GrandEntranceSpotlightProps {
  onOpenVipModal: () => void;
}

const ENTRANCE_PILLARS = [
  {
    index: '01',
    title: '100 Ft. Monumental Span',
    detail:
      'An unusually wide, dignified gateway off Sultanpur Road designed for effortless arrival and an unmistakable estate presence.',
  },
  {
    index: '02',
    title: 'Sculpted Gothic Pillars',
    detail:
      'Monumental stone-clad gothic columns and symmetrical guardhouses that anchor 24×7 controlled gated access.',
  },
  {
    index: '03',
    title: 'Exquisite Palm Backdrop',
    detail:
      'Soaring royal palms line the arrival court and open straight onto the 60-foot tree-shaded main boulevard.',
  },
];

export const GrandEntranceSpotlight: React.FC<GrandEntranceSpotlightProps> = ({
  onOpenVipModal,
}) => {
  return (
    <section
      id="grand-entrance"
      className="py-20 lg:py-28 bg-[#15271F] text-white border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Editorial Header Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end mb-12 lg:mb-14">
          <div className="lg:col-span-7">
            <span className="text-xs uppercase tracking-[0.2em] text-[#F2D99B] font-semibold block mb-4">
              Signature Architectural USP · The Arrival
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-white font-medium tracking-tight leading-[1.1] text-balance">
              The 100-Foot <span className="italic text-[#F2D99B]">Grand Entrance</span>.
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="text-white/95 text-sm sm:text-base leading-relaxed font-normal">
              A rare first impression on Sultanpur Road—where carved gothic pillars rise against a
              backdrop of exquisite swaying palm trees, drawing every homecoming seamlessly onto a
              60-foot tree-lined boulevard.
            </p>
          </div>
        </div>

        {/* Full-Width Panoramic Architectural Render */}
        <div className="relative overflow-hidden rounded-sm border border-white/15 bg-[#0E1B15]">
          <div className="aspect-[16/9] w-full overflow-hidden">
            <img
              src={grandEntranceImg}
              alt="TRIIVANTA GOLD 100-foot grand entrance with monumental gothic pillars, stone guardhouses, wide boulevard, and royal palm trees in the backdrop"
              className="w-full h-full object-cover object-center"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="px-5 py-3.5 bg-[#101F18] border-t border-white/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-xs text-white/95">
            <span className="tracking-wide">
              100 Ft. Proposed Grand Entrance · Gothic Pillars &amp; Palm Avenue
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#F2D99B]">
              Artistic Impression · Sultanpur Road
            </span>
          </div>
        </div>

        {/* 3-Column Architectural Specification Highlights + Quiet CTA */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 pt-10 border-t border-white/15">
          {ENTRANCE_PILLARS.map((item) => (
            <div key={item.index} className="flex flex-col">
              <span className="font-mono text-xs tracking-[0.18em] text-[#F2D99B] mb-3">
                {item.index}
              </span>
              <h3 className="font-display text-2xl text-white font-medium tracking-tight mb-2.5">
                {item.title}
              </h3>
              <p className="text-sm text-white/95 leading-relaxed font-normal">{item.detail}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 pt-8 border-t border-white/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
          <div className="flex flex-wrap items-baseline gap-x-6 gap-y-2 text-xs uppercase tracking-[0.16em] text-white/95">
            <span>
              Gateway Span: <strong className="text-white font-mono">100 FT</strong>
            </span>
            <span aria-hidden="true" className="text-white/25">
              ·
            </span>
            <span>
              Main Avenue: <strong className="text-white font-mono">60 FT (18M)</strong>
            </span>
            <span aria-hidden="true" className="text-white/25">
              ·
            </span>
            <span>
              Security: <strong className="text-white font-mono">24×7 Gated</strong>
            </span>
          </div>

          <button
            type="button"
            onClick={onOpenVipModal}
            className="self-start sm:self-auto px-6 py-3 text-xs uppercase tracking-[0.16em] font-semibold text-[#15271F] bg-white hover:bg-[#F5F4EF] active:scale-[0.98] rounded-sm transition-all duration-200 inline-flex items-center gap-2.5 whitespace-nowrap cursor-pointer"
          >
            <span>Experience It In Person</span>
            <ArrowRight className="w-4 h-4 text-[#7A5612]" />
          </button>
        </div>
      </div>
    </section>
  );
};
