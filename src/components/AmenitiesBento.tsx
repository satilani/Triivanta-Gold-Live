import React from 'react';
import { AREA_STATEMENT, TOWNSHIP_VISION } from '../data/rera';
import clubhouseExteriorImg from '../assets/images/triivanta_clubhouse_exterior_1793423808189.jpg';
import grandBoulevardImg from '../assets/images/triivanta_grand_boulevard_1793423808958.jpg';

export const AmenitiesBento: React.FC = () => {
  const utilityPillars = [
    {
      index: '01',
      kicker: '15 KL U.G.T. · 25 KLD STP',
      title: 'Underground Water & Conservation',
      body: '15 KL Underground Tank with 100 mm water mains, 250 mm & 450 mm RCC Hume Pipe sewerage into a 25 KLD STP, 150 mm DWC underground storm drains, and 3.00m diameter rainwater harvesting recharge pits.',
    },
    {
      index: '02',
      kicker: '2 × 400 KVA · LED Streetlights',
      title: 'Clean Power Grid & Lighting',
      body: 'Engineered HT/LT electrical distribution with dual 400 KVA transformers, feeder pillars, underground cabling provisions for clean streetscapes, and energy-efficient LED avenue lighting.',
    },
    {
      index: '03',
      kicker: `${AREA_STATEMENT.boundaryWallLengthM} RMT Wall · 24/7 CCTV`,
      title: 'Gated Security & Convenience Zone',
      body: 'A 2.1m-high perimeter boundary wall spanning 746.13 running meters, grand gated entrance with 24/7 CCTV surveillance, and a dedicated 934.86 Sq.Mt. daily-convenience shopping parcel.',
    },
  ];

  return (
    <section id="amenities" className="py-24 bg-[#F5F4EF] border-b border-[#E6E3DB]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <p className="text-xs uppercase tracking-[0.22em] font-semibold text-[#7A5612] mb-3">
            Botanical Greens & Civic Infrastructure
          </p>
          <h2 className="font-display font-medium text-3xl sm:text-5xl text-[#15271F] leading-[1.1] tracking-tight text-balance">
            Designed for Living, Planned for Lasting Value.
          </h2>
          <p className="mt-4 text-[#2D3933] text-sm sm:text-base leading-relaxed">
            Over 50% open area pairing a {TOWNSHIP_VISION.centralParkSqftLabel} central park and{' '}
            {TOWNSHIP_VISION.mainBoulevardLabel} avenues with complete underground civic
            infrastructure.
          </p>
        </div>

        {/* Asymmetric Visual Showcase Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12">
          {/* Primary Landscape Feature (7 cols) */}
          <div className="lg:col-span-7 relative rounded-sm overflow-hidden bg-[#15271F] min-h-[360px] sm:min-h-[430px] flex flex-col justify-end group">
            <img
              src={clubhouseExteriorImg}
              alt="30,000 Sq.Ft. central green park and jogging walkways at TRIIVANTA GOLD"
              className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D1A14]/90 via-[#0D1A14]/35 to-transparent" />
            <div className="relative z-10 p-7 sm:p-9">
              <div className="flex flex-wrap items-center gap-2 text-[11px] uppercase tracking-[0.16em] text-[#F2D99B] font-semibold mb-2">
                <span>{TOWNSHIP_VISION.centralParkSqftLabel} Park Zone</span>
                <span aria-hidden="true">·</span>
                <span>{AREA_STATEMENT.greenAreaSqm.toLocaleString()} Sq.Mt. (15%)</span>
                <span aria-hidden="true">·</span>
                <span>Phase 1 Botanical Oasis</span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-medium text-white">
                Central Green Park, Jogger’s Track & Play Meadows
              </h3>
              <p className="mt-2 text-white/95 text-sm max-w-xl leading-relaxed">
                Dedicated to Phase 1 residents with manicured walking paths, jogger’s park, flower
                avenues, wellness sit-outs, children’s play meadows, and a{' '}
                {AREA_STATEMENT.amenitiesAreaSqm} Sq.Mt. daily-convenience shopping precinct.
              </p>
            </div>
          </div>

          {/* Secondary Avenue Feature (5 cols) */}
          <div className="lg:col-span-5 relative rounded-sm overflow-hidden bg-[#15271F] min-h-[360px] sm:min-h-[430px] flex flex-col justify-end group">
            <img
              src={grandBoulevardImg}
              alt="60 Ft. main boulevard and 30 Ft. internal paved avenues with tree linings"
              className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D1A14]/90 via-[#0D1A14]/35 to-transparent" />
            <div className="relative z-10 p-7 sm:p-9">
              <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.16em] text-[#F2D99B] font-semibold mb-2">
                <span>{AREA_STATEMENT.roadAreaSqm.toLocaleString()} Sq.Mt.</span>
                <span aria-hidden="true">·</span>
                <span>32.75% Layout Share</span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-medium text-white">
                60 Ft. Main Boulevard & 30 Ft. Internal Roads
              </h3>
              <p className="mt-2 text-white/95 text-sm leading-relaxed">
                Approached directly off Sultanpur Road with wide paved carriageways, interlocking
                paver footpaths, kerb stones, and 1–4m evergreen avenue trees.
              </p>
            </div>
          </div>
        </div>

        {/* Clean 3-Column Editorial Infrastructure Strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-[#DCD8CE]">
          {utilityPillars.map((item) => (
            <div key={item.index} className="space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="font-mono font-semibold text-[#7A5612] tabular-nums">
                  {item.index}
                </span>
                <span className="font-mono text-[11px] text-[#2D3933] tabular-nums">
                  {item.kicker}
                </span>
              </div>
              <h3 className="font-display text-2xl font-semibold text-[#15271F]">{item.title}</h3>
              <p className="text-sm text-[#2D3933] leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
