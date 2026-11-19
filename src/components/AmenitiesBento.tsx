import React from 'react';
import { ShieldCheck, Zap, Droplets } from 'lucide-react';
import { AREA_STATEMENT } from '../data/rera';

export const AmenitiesBento: React.FC = () => {
  return (
    <section id="amenities" className="py-20 bg-[#FAF9F6] border-b border-[#E5E0D5]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#8F6714] block mb-2">
            Civic Infrastructure & Open Spaces
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#111827] tracking-tight text-balance">
            Planned Open Greens & Modern Utilities
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            Every civic utility and open-space zone at TRIIVANTA GOLD is engineered to municipal
            norms—pairing wide 18m and 9m avenues with 2,807.59 Sq.Mt. of parks and sustainable
            water conservation.
          </p>
        </div>

        {/* Asymmetric Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Bento Item 1: Landscaped Parks & Civic Amenities (Spans 2 cols) */}
          <div className="lg:col-span-2 rounded-xl overflow-hidden border border-[#DFD8C8] bg-[#121826] group relative flex flex-col justify-end min-h-[360px] sm:min-h-[420px]">
            <img
              src="/src/assets/images/triivanta_clubhouse_exterior_1793423808189.jpg"
              alt="Civic amenities and landscaped park concept for TRIIVANTA GOLD"
              className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent" />

            <div className="relative z-10 p-6 sm:p-8">
              <div className="flex flex-wrap items-center gap-2 text-xs text-[#F3E5AB] font-semibold tracking-wider uppercase mb-2">
                <span>2 Landscaped Parks</span>
                <span aria-hidden="true">·</span>
                <span>{AREA_STATEMENT.greenAreaSqm.toLocaleString()} Sq.Mt. (15%)</span>
                <span aria-hidden="true">·</span>
                <span>{AREA_STATEMENT.amenitiesAreaSqm} Sq.Mt. Amenities Zone</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-2">
                Central Park, Pocket Greens & Amenities Precinct
              </h3>
              <p className="text-slate-200 text-xs sm:text-sm max-w-xl leading-relaxed">
                Anchor central park ({AREA_STATEMENT.parkOneSqm.toLocaleString()} Sq.Mt.) and
                secondary green pocket ({AREA_STATEMENT.parkTwoSqm} Sq.Mt.) with paved walkways,
                seating lawns, evergreen trees (1–4m height), and a dedicated{' '}
                {AREA_STATEMENT.amenitiesAreaSqm} Sq.Mt. commercial/amenities parcel (CP).
              </p>
            </div>
          </div>

          {/* Bento Item 2: 18m Main & 9m Internal Roads */}
          <div className="rounded-xl overflow-hidden border border-[#DFD8C8] bg-[#121826] group relative flex flex-col justify-end min-h-[360px] sm:min-h-[420px]">
            <img
              src="/src/assets/images/triivanta_grand_boulevard_1793423808958.jpg"
              alt="18-meter main avenue and 9-meter internal paved roads with avenue trees"
              className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent" />

            <div className="relative z-10 p-6 sm:p-8">
              <div className="flex items-center gap-2 text-xs text-[#F3E5AB] font-semibold tracking-wider uppercase mb-2">
                <span>{AREA_STATEMENT.roadAreaSqm.toLocaleString()} Sq.Mt.</span>
                <span aria-hidden="true">·</span>
                <span>32.75% Layout Share</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-2">
                18m Main & 9m Internal Roads
              </h3>
              <p className="text-slate-200 text-xs sm:text-sm leading-relaxed">
                Directly approached off Sultanpur Road with levelled carriageways, interlocking
                paver footpaths, kerb stones, and storm drains.
              </p>
            </div>
          </div>

          {/* Bento Item 3: Water Supply, STP & Rainwater Harvesting */}
          <div className="rounded-xl border border-[#E5E0D5] bg-white p-6 sm:p-8 flex flex-col justify-between hover:border-[#B58827]/60 transition-colors">
            <div>
              <div className="w-10 h-10 rounded-lg bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-700 mb-5">
                <Droplets className="w-5 h-5" />
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-500 font-medium mb-1">
                <span>15 KL U.G.T.</span>
                <span aria-hidden="true">·</span>
                <span>25 KLD STP</span>
              </div>
              <h3 className="text-xl font-display font-bold text-[#111827] mb-3">
                Water Supply & Conservation
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                15 KL Underground Tank with 100 mm supply lines, 250 mm & 450 mm RCC Hume Pipe
                sewerage into a 25 KLD STP, and 3.00m diameter rainwater harvesting recharge wells.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#ECE8DF] text-xs text-[#8F6714] font-semibold">
              150 mm DWC storm drainage included
            </div>
          </div>

          {/* Bento Item 4: Electrical Infrastructure */}
          <div className="rounded-xl border border-[#E5E0D5] bg-white p-6 sm:p-8 flex flex-col justify-between hover:border-[#B58827]/60 transition-colors">
            <div>
              <div className="w-10 h-10 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center text-[#8F6714] mb-5">
                <Zap className="w-5 h-5" />
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-500 font-medium mb-1">
                <span>HT / LT Grid</span>
                <span aria-hidden="true">·</span>
                <span>2 × 400 KVA</span>
              </div>
              <h3 className="text-xl font-display font-bold text-[#111827] mb-3">
                Power Grid & LED Streetlights
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Dedicated electrical distribution featuring dual 400 KVA transformers, feeder pillars,
                individual plot service provisions, and energy-efficient LED streetlights across
                every road.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#ECE8DF] text-xs text-[#8F6714] font-semibold">
              Compliant with UPERC multi-point norms
            </div>
          </div>

          {/* Bento Item 5: Gated Boundary Wall & Security */}
          <div className="rounded-xl border border-[#E5E0D5] bg-white p-6 sm:p-8 flex flex-col justify-between hover:border-[#B58827]/60 transition-colors">
            <div>
              <div className="w-10 h-10 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 mb-5">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-500 font-medium mb-1">
                <span>{AREA_STATEMENT.boundaryWallLengthM} RMT</span>
                <span aria-hidden="true">·</span>
                <span>{AREA_STATEMENT.boundaryWallHeightM}m Wall Height</span>
              </div>
              <h3 className="text-xl font-display font-bold text-[#111827] mb-3">
                Secured Gated Perimeter
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Complete 746.13 Running Meters compound boundary wall standing 2.1 meters high
                around all 38 demarcated plots, anchored by a manned primary entry gate.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#ECE8DF] text-xs text-[#8F6714] font-semibold">
              Low-density 38-family gated community
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
