import React, { useState } from 'react';
import { Compass, Layers, Trees, MapPin, FileText } from 'lucide-react';
import { AREA_STATEMENT } from '../data/rera';

interface MasterPlanExplorerProps {
  onOpenSpecsSheet: () => void;
}

export const MasterPlanExplorer: React.FC<MasterPlanExplorerProps> = ({
  onOpenSpecsSheet,
}) => {
  const [activeLayer, setActiveLayer] = useState<'layout' | 'electric' | 'water'>('layout');

  const planLayers = [
    {
      id: 'layout' as const,
      title: 'Layout Architecture',
      icon: <MapPin className="w-4 h-4" />,
      summary:
        'Planned placement of all 38 residential plots (Plots 01–36, A-1 & A-2), an 18m wide primary entrance spine directly connecting to Sultanpur Road, 9m internal sector roads, a 934.86 Sq.Mt. Commercial/Amenities pocket (CP), and 2 dedicated parks.',
    },
    {
      id: 'electric' as const,
      title: 'Landscape & Electric',
      icon: <Layers className="w-4 h-4" />,
      summary:
        'Complete HT/LT power layout powered by 2 × 400 KVA transformers, LED street lighting poles along 18m & 9m avenues, avenue evergreen tree plantation (1–4m height), and landscaped seating walkways across 2,807.59 Sq.Mt. of parks.',
    },
    {
      id: 'water' as const,
      title: 'Water & Rainwater Harvesting',
      icon: <Compass className="w-4 h-4" />,
      summary:
        '15 KL Underground Tank (U.G.T.) with 100 mm dia supply mains, 250 mm & 450 mm RCC Hume Pipe sewerage connected to a 25 KLD STP, 150 mm DWC storm drains, and 3.00m diameter (6.0m deep) rainwater harvesting recharge wells.',
    },
  ];

  const areaRows = [
    {
      label: 'Total Plotted Area (38 Plots)',
      area: `${AREA_STATEMENT.plottedAreaSqm.toLocaleString()} Sq.Mt.`,
      percent: AREA_STATEMENT.plottedPercent,
      width: '47.25%',
      barClass: 'bg-[#121826]',
    },
    {
      label: 'Road Network (18m Main + 9m Internal)',
      area: `${AREA_STATEMENT.roadAreaSqm.toLocaleString()} Sq.Mt.`,
      percent: AREA_STATEMENT.roadPercent,
      width: '32.75%',
      barClass: 'bg-[#8F6714]',
    },
    {
      label: 'Green Area (2 Parks: 2,716.19 + 91.40 Sq.Mt.)',
      area: `${AREA_STATEMENT.greenAreaSqm.toLocaleString()} Sq.Mt.`,
      percent: AREA_STATEMENT.greenPercent,
      width: '15.00%',
      barClass: 'bg-emerald-700',
    },
    {
      label: 'Amenities / Commercial Area (CP)',
      area: `${AREA_STATEMENT.amenitiesAreaSqm.toLocaleString()} Sq.Mt.`,
      percent: AREA_STATEMENT.amenitiesPercent,
      width: '4.99%',
      barClass: 'bg-slate-500',
    },
  ];

  const currentLayer = planLayers.find((l) => l.id === activeLayer) || planLayers[0];

  return (
    <section id="masterplan" className="py-20 bg-white border-b border-[#E5E0D5]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#8F6714] block mb-2">
            Master-Planned Low-Density Layout
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#111827] tracking-tight text-balance">
            Master Plan Highlights & Area Statement
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            Thoughtfully proportioned across 19,689 Sq.Mt. (4.87 Acres) directly off Sultanpur
            Road. Over 52% of the net layout is dedicated to wide roads, landscaped parks, and
            shared civic amenities.
          </p>
        </div>

        {/* Main 2-Column Split: Architectural Impression + Area Statement */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: Architectural Render + Engineering Layer Explorer (7 cols) */}
          <div className="lg:col-span-7 flex flex-col rounded-xl border border-[#DFD8C8] bg-[#FAF9F6] overflow-hidden shadow-sm">
            <div className="relative flex-1 min-h-[300px] sm:min-h-[380px] bg-[#121826] overflow-hidden border-b border-[#E5E0D5]">
              <img
                src="/src/assets/images/triivanta_villa_architecture_1793423808848.jpg"
                alt="Architectural lifestyle impression of TRIIVANTA GOLD plotted enclave"
                className="w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 px-4 py-3 rounded bg-white/94 backdrop-blur-sm border border-[#E5E0D5] flex flex-wrap items-center justify-between gap-2 text-xs">
                <span className="font-semibold text-[#111827]">
                  38 Demarcated Freehold Plots · Sultanpur Road, Lucknow
                </span>
                <span className="text-[#8F6714] font-medium">Artistic Impression</span>
              </div>
            </div>

            {/* Interactive Engineering Layer Tabs */}
            <div className="p-5 sm:p-6 bg-[#FAF9F6] space-y-4">
              <div className="flex flex-wrap gap-1.5">
                {planLayers.map((layer) => (
                  <button
                    type="button"
                    key={layer.id}
                    onClick={() => setActiveLayer(layer.id)}
                    className={`px-3.5 py-2 rounded text-xs font-semibold transition-colors inline-flex items-center gap-1.5 cursor-pointer whitespace-nowrap ${
                      activeLayer === layer.id
                        ? 'bg-[#121826] text-white'
                        : 'bg-white border border-[#E2DDD0] text-slate-600 hover:text-[#111827]'
                    }`}
                  >
                    {layer.icon}
                    <span>{layer.title}</span>
                  </button>
                ))}
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                <strong className="text-[#111827]">{currentLayer.title}:</strong>{' '}
                {currentLayer.summary}
              </p>
            </div>
          </div>

          {/* Right: Area Statement Card (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between rounded-xl border border-[#DFD8C8] bg-[#FAF9F6] p-6 sm:p-8 shadow-sm">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#E5E0D5] mb-6">
                <div>
                  <span className="text-[11px] uppercase tracking-widest text-[#8F6714] font-semibold block">
                    Planned Land Allocation
                  </span>
                  <h3 className="text-xl font-display font-bold text-[#111827] mt-0.5">
                    Project Area Statement
                  </h3>
                </div>
                <span className="font-mono text-xs font-semibold text-slate-600 tabular-nums">
                  {AREA_STATEMENT.totalLandHectares} Ha
                </span>
              </div>

              {/* High-level Totals */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="p-3.5 rounded-lg bg-white border border-[#E5E0D5]">
                  <span className="text-[11px] text-slate-500 block">Total Land Area</span>
                  <span className="font-mono text-base font-bold text-[#111827] tabular-nums">
                    {AREA_STATEMENT.totalLandSqm.toLocaleString()} Sq.Mt.
                  </span>
                </div>
                <div className="p-3.5 rounded-lg bg-white border border-[#E5E0D5]">
                  <span className="text-[11px] text-slate-500 block">Net Layout Area</span>
                  <span className="font-mono text-base font-bold text-[#111827] tabular-nums">
                    {AREA_STATEMENT.netLandAreaSqm.toLocaleString()} Sq.Mt.
                  </span>
                </div>
                <div className="p-3.5 rounded-lg bg-white border border-[#E5E0D5]">
                  <span className="text-[11px] text-slate-500 block">Road Widening Reserve</span>
                  <span className="font-mono text-sm font-semibold text-slate-700 tabular-nums">
                    {AREA_STATEMENT.roadWideningSqm} Sq.Mt.
                  </span>
                </div>
                <div className="p-3.5 rounded-lg bg-white border border-[#E5E0D5]">
                  <span className="text-[11px] text-slate-500 block">Boundary Wall (2.1m H)</span>
                  <span className="font-mono text-sm font-semibold text-slate-700 tabular-nums">
                    {AREA_STATEMENT.boundaryWallLengthM} RMT
                  </span>
                </div>
              </div>

              {/* Percentage Breakdown Bars */}
              <div className="space-y-4">
                {areaRows.map((row) => (
                  <div key={row.label}>
                    <div className="flex items-baseline justify-between text-xs mb-1.5 gap-2">
                      <span className="font-medium text-[#111827]">{row.label}</span>
                      <span className="font-mono text-slate-700 font-semibold tabular-nums shrink-0">
                        {row.area} ({row.percent})
                      </span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-[#E6E1D5] overflow-hidden">
                      <div
                        className={`h-full rounded-full ${row.barClass}`}
                        style={{ width: row.width }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer Action */}
            <div className="mt-8 pt-5 border-t border-[#E5E0D5] flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={onOpenSpecsSheet}
                className="w-full px-4 py-3 text-xs uppercase tracking-wider font-semibold text-white bg-[#121826] hover:bg-[#1E293B] rounded inline-flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer transition-colors"
              >
                <FileText className="w-3.5 h-3.5 text-[#F3E5AB]" />
                <span>View Official Specification Sheet</span>
              </button>
              <div className="w-full flex items-center justify-center gap-2 text-[11px] text-slate-500">
                <Trees className="w-3.5 h-3.5 text-[#8F6714]" />
                <span>52.75% dedicated to roads, parks & shared civic infrastructure</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
