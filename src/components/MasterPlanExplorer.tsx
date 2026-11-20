import React, { useState } from 'react';
import { FileText } from 'lucide-react';
import { AREA_STATEMENT } from '../data/rera';
import grandBoulevardImg from '../assets/images/triivanta_grand_boulevard_1793423808958.jpg';
import clubhouseExteriorImg from '../assets/images/triivanta_clubhouse_exterior_1793423808189.jpg';
import heroAerialImg from '../assets/images/triivanta_hero_aerial_1793423807000.jpg';

interface MasterPlanExplorerProps {
  onOpenSpecsSheet: () => void;
}

export const MasterPlanExplorer: React.FC<MasterPlanExplorerProps> = ({ onOpenSpecsSheet }) => {
  const [activeLayer, setActiveLayer] = useState<'layout' | 'greens' | 'utilities'>('layout');

  const planLayers = [
    {
      id: 'layout' as const,
      index: '01',
      title: 'Layout & Road Spine',
      image: grandBoulevardImg,
      alt: '18-meter main avenue and 9-meter internal paved roads inside TRIIVANTA GOLD',
      summary:
        'Structured placement of all 38 residential plots (Plots 01–36, A-1 & A-2) along an 18m main entrance spine directly off Sultanpur Road, 9m internal sector roads, and a 934.86 Sq.Mt. amenities pocket (CP).',
    },
    {
      id: 'greens' as const,
      index: '02',
      title: 'Parks & Open Greens',
      image: clubhouseExteriorImg,
      alt: 'Landscaped central park and open greens at TRIIVANTA GOLD',
      summary:
        '15.00% of the net layout (2,807.59 Sq.Mt.) dedicated to two landscaped parks—a 2,716.19 Sq.Mt. central park and a 91.40 Sq.Mt. pocket park—framed by 1–4m evergreen avenue trees and seating walkways.',
    },
    {
      id: 'utilities' as const,
      index: '03',
      title: 'Underground Utilities',
      image: heroAerialImg,
      alt: 'Aerial master infrastructure layout of TRIIVANTA GOLD',
      summary:
        '15 KL Underground Tank (U.G.T.) with 100 mm water mains, 250 mm & 450 mm RCC Hume Pipe sewerage into a 25 KLD STP, 150 mm DWC storm drains, 2 × 400 KVA transformers, and 3.00m dia rainwater harvesting pits.',
    },
  ];

  const areaRows = [
    {
      label: 'Plotted Residential Area (38 Plots)',
      area: `${AREA_STATEMENT.plottedAreaSqm.toLocaleString()} Sq.Mt.`,
      percent: AREA_STATEMENT.plottedPercent,
      width: '47.25%',
      barClass: 'bg-[#15271F]',
    },
    {
      label: 'Road Network (18m Main & 9m Internal)',
      area: `${AREA_STATEMENT.roadAreaSqm.toLocaleString()} Sq.Mt.`,
      percent: AREA_STATEMENT.roadPercent,
      width: '32.75%',
      barClass: 'bg-[#9A7428]',
    },
    {
      label: 'Landscaped Parks (2,716.19 + 91.40 Sq.Mt.)',
      area: `${AREA_STATEMENT.greenAreaSqm.toLocaleString()} Sq.Mt.`,
      percent: AREA_STATEMENT.greenPercent,
      width: '15.00%',
      barClass: 'bg-[#3C6E52]',
    },
    {
      label: 'Amenities / Commercial Pocket (CP)',
      area: `${AREA_STATEMENT.amenitiesAreaSqm.toLocaleString()} Sq.Mt.`,
      percent: AREA_STATEMENT.amenitiesPercent,
      width: '4.99%',
      barClass: 'bg-[#7A847E]',
    },
  ];

  const currentLayer = planLayers.find((l) => l.id === activeLayer) || planLayers[0];

  return (
    <section id="masterplan" className="py-24 bg-[#F5F4EF] border-b border-[#E6E3DB]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.22em] font-semibold text-[#9A7428] mb-3">
              Master Planning & Proportions
            </p>
            <h2 className="font-display font-medium text-3xl sm:text-5xl text-[#15271F] leading-[1.1] tracking-tight text-balance">
              Balanced Land Use Built for Openness.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#535E58] max-w-md leading-relaxed">
            Across 19,689 Sq.Mt. (4.87 Acres) directly off Sultanpur Road, over half the net
            enclave is reserved for wide roads, parks, and shared civic amenities.
          </p>
        </div>

        {/* 2-Column Editorial Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: Interactive Perspective Gallery (7 cols) */}
          <div className="lg:col-span-7 flex flex-col bg-white border border-[#E2DFD7] rounded-sm overflow-hidden">
            <div className="relative flex-1 min-h-[320px] sm:min-h-[400px] bg-[#15271F] overflow-hidden">
              <img
                src={currentLayer.image}
                alt={currentLayer.alt}
                className="w-full h-full object-cover object-center transition-opacity duration-300"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D1A14]/70 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-xs text-white/90">
                <span className="font-medium tracking-wide">
                  {currentLayer.index}. {currentLayer.title}
                </span>
                <span className="text-white/70">Artistic Impression</span>
              </div>
            </div>

            {/* Clean Perspective Switcher Tabs */}
            <div className="p-6 sm:p-7 space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 border-b border-[#E6E3DB] pb-5">
                {planLayers.map((layer) => {
                  const active = activeLayer === layer.id;
                  return (
                    <button
                      type="button"
                      key={layer.id}
                      onClick={() => setActiveLayer(layer.id)}
                      className={`text-left px-4 py-2.5 rounded-sm text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap ${
                        active
                          ? 'bg-[#15271F] text-white'
                          : 'bg-[#F5F4EF] text-[#535E58] hover:text-[#15271F]'
                      }`}
                    >
                      <span
                        className={`font-mono mr-2 ${
                          active ? 'text-[#E5C987]' : 'text-[#9A7428]'
                        }`}
                      >
                        {layer.index}
                      </span>
                      <span>{layer.title}</span>
                    </button>
                  );
                })}
              </div>

              <p className="text-sm text-[#535E58] leading-relaxed">{currentLayer.summary}</p>
            </div>
          </div>

          {/* Right: Official Area Statement Ledger (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-white border border-[#E2DFD7] rounded-sm p-7 sm:p-8">
            <div>
              <div className="flex items-baseline justify-between pb-5 border-b border-[#E6E3DB] mb-6">
                <div>
                  <span className="text-[11px] uppercase tracking-[0.18em] text-[#9A7428] font-semibold block">
                    Area Statement
                  </span>
                  <h3 className="font-display text-2xl font-semibold text-[#15271F] mt-1">
                    Land Allocation Breakdown
                  </h3>
                </div>
                <span className="font-mono text-xs text-[#535E58] tabular-nums">
                  {AREA_STATEMENT.totalLandHectares} Ha
                </span>
              </div>

              {/* Clean Key Totals Grid */}
              <div className="grid grid-cols-2 gap-x-6 gap-y-4 pb-6 mb-6 border-b border-[#E6E3DB]">
                <div>
                  <span className="text-xs text-[#535E58] block">Total Project Land</span>
                  <span className="font-mono text-base font-semibold text-[#15271F] tabular-nums mt-0.5 block">
                    {AREA_STATEMENT.totalLandSqm.toLocaleString()} Sq.Mt.
                  </span>
                </div>
                <div>
                  <span className="text-xs text-[#535E58] block">Net Layout Area</span>
                  <span className="font-mono text-base font-semibold text-[#15271F] tabular-nums mt-0.5 block">
                    {AREA_STATEMENT.netLandAreaSqm.toLocaleString()} Sq.Mt.
                  </span>
                </div>
                <div>
                  <span className="text-xs text-[#535E58] block">Road Widening Reserve</span>
                  <span className="font-mono text-sm font-medium text-[#18221D] tabular-nums mt-0.5 block">
                    {AREA_STATEMENT.roadWideningSqm} Sq.Mt.
                  </span>
                </div>
                <div>
                  <span className="text-xs text-[#535E58] block">Boundary Wall (2.1m H)</span>
                  <span className="font-mono text-sm font-medium text-[#18221D] tabular-nums mt-0.5 block">
                    {AREA_STATEMENT.boundaryWallLengthM} RMT
                  </span>
                </div>
              </div>

              {/* Proportional Bars */}
              <div className="space-y-5">
                {areaRows.map((row) => (
                  <div key={row.label}>
                    <div className="flex items-baseline justify-between text-xs mb-2 gap-3">
                      <span className="font-medium text-[#18221D]">{row.label}</span>
                      <span className="font-mono text-[#15271F] font-semibold tabular-nums shrink-0">
                        {row.area} ({row.percent})
                      </span>
                    </div>
                    <div className="w-full h-1.5 bg-[#ECEAE2] overflow-hidden">
                      <div className={`h-full ${row.barClass}`} style={{ width: row.width }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#E6E3DB] space-y-3">
              <button
                type="button"
                onClick={onOpenSpecsSheet}
                className="w-full px-5 py-3 text-xs uppercase tracking-[0.14em] font-semibold text-white bg-[#15271F] hover:bg-[#1F372C] rounded-sm inline-flex items-center justify-center gap-2 transition-colors whitespace-nowrap cursor-pointer"
              >
                <FileText className="w-3.5 h-3.5 text-[#E5C987]" />
                <span>View Official Specification Sheet</span>
              </button>
              <p className="text-[11px] text-[#535E58] text-center">
                52.75% of net area reserved for wide roads, parks & shared amenities
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
