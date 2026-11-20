import React from 'react';
import { AREA_STATEMENT } from '../data/rera';
import clubhouseExteriorImg from '../assets/images/triivanta_clubhouse_exterior_1793423808189.jpg';
import grandBoulevardImg from '../assets/images/triivanta_grand_boulevard_1793423808958.jpg';

export const AmenitiesBento: React.FC = () => {
  const utilityPillars = [
    {
      index: '01',
      kicker: '15 KL U.G.T. · 25 KLD STP',
      title: 'Water Supply & Conservation',
      body: 'Dedicated 15 KL Underground Tank with 100 mm water supply lines, 250 mm & 450 mm RCC Hume Pipe sewerage into a 25 KLD STP, 150 mm DWC storm drains, and 3.00m diameter rainwater harvesting recharge pits.',
    },
    {
      index: '02',
      kicker: 'HT / LT Grid · 2 × 400 KVA',
      title: 'Electrical Grid & LED Streetlights',
      body: 'Engineered HT/LT electrical distribution powered by dual 400 KVA transformers, feeder pillars, individual plot service connections, and energy-efficient LED streetlights along every avenue.',
    },
    {
      index: '03',
      kicker: `${AREA_STATEMENT.boundaryWallLengthM} RMT · ${AREA_STATEMENT.boundaryWallHeightM}m Height`,
      title: 'Secured Gated Perimeter',
      body: 'A continuous 746.13 running-meter boundary wall rising 2.1 meters high encircles all 38 demarcated plots, anchored by a controlled main entrance gate directly off Sultanpur Road.',
    },
  ];

  return (
    <section id="amenities" className="py-24 bg-[#F5F4EF] border-b border-[#E6E3DB]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <p className="text-xs uppercase tracking-[0.22em] font-semibold text-[#9A7428] mb-3">
            Open Greens & Civic Infrastructure
          </p>
          <h2 className="font-display font-medium text-3xl sm:text-5xl text-[#15271F] leading-[1.1] tracking-tight text-balance">
            Tranquil Landscapes, Engineered Beneath.
          </h2>
          <p className="mt-4 text-[#535E58] text-sm sm:text-base leading-relaxed">
            Serene tree-lined avenues and dedicated neighbourhood parks meet complete municipal-grade
            underground infrastructure designed for effortless day-one construction.
          </p>
        </div>

        {/* Asymmetric Visual Showcase Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12">
          {/* Primary Landscape Feature (7 cols) */}
          <div className="lg:col-span-7 relative rounded-sm overflow-hidden bg-[#15271F] min-h-[360px] sm:min-h-[430px] flex flex-col justify-end group">
            <img
              src={clubhouseExteriorImg}
              alt="Landscaped central park and amenities zone concept for TRIIVANTA GOLD"
              className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D1A14]/90 via-[#0D1A14]/35 to-transparent" />
            <div className="relative z-10 p-7 sm:p-9">
              <div className="flex flex-wrap items-center gap-2 text-[11px] uppercase tracking-[0.16em] text-[#E5C987] font-semibold mb-2">
                <span>2 Landscaped Parks</span>
                <span aria-hidden="true">·</span>
                <span>{AREA_STATEMENT.greenAreaSqm.toLocaleString()} Sq.Mt. (15%)</span>
                <span aria-hidden="true">·</span>
                <span>{AREA_STATEMENT.amenitiesAreaSqm} Sq.Mt. Amenities Zone</span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-medium text-white">
                Central Park, Pocket Greens & Community Precinct
              </h3>
              <p className="mt-2 text-white/80 text-sm max-w-xl leading-relaxed">
                A {AREA_STATEMENT.parkOneSqm.toLocaleString()} Sq.Mt. central park and{' '}
                {AREA_STATEMENT.parkTwoSqm} Sq.Mt. secondary green with paved walkways, seating
                alcoves, 1–4m evergreen trees, and a dedicated {AREA_STATEMENT.amenitiesAreaSqm}{' '}
                Sq.Mt. amenities parcel.
              </p>
            </div>
          </div>

          {/* Secondary Avenue Feature (5 cols) */}
          <div className="lg:col-span-5 relative rounded-sm overflow-hidden bg-[#15271F] min-h-[360px] sm:min-h-[430px] flex flex-col justify-end group">
            <img
              src={grandBoulevardImg}
              alt="18-meter main avenue and 9-meter internal roads with paver footpaths"
              className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D1A14]/90 via-[#0D1A14]/35 to-transparent" />
            <div className="relative z-10 p-7 sm:p-9">
              <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.16em] text-[#E5C987] font-semibold mb-2">
                <span>{AREA_STATEMENT.roadAreaSqm.toLocaleString()} Sq.Mt.</span>
                <span aria-hidden="true">·</span>
                <span>32.75% Layout Share</span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-medium text-white">
                18m Main & 9m Internal Avenues
              </h3>
              <p className="mt-2 text-white/80 text-sm leading-relaxed">
                Direct entry off Sultanpur Road with levelled carriageways, interlocking paver
                pedestrian footpaths, kerb stones, and storm drains.
              </p>
            </div>
          </div>
        </div>

        {/* Clean 3-Column Editorial Infrastructure Strip (No Boxy Icon Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-[#DCD8CE]">
          {utilityPillars.map((item) => (
            <div key={item.index} className="space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="font-mono font-semibold text-[#9A7428] tabular-nums">
                  {item.index}
                </span>
                <span className="font-mono text-[11px] text-[#535E58] tabular-nums">
                  {item.kicker}
                </span>
              </div>
              <h3 className="font-display text-2xl font-semibold text-[#15271F]">{item.title}</h3>
              <p className="text-sm text-[#535E58] leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
