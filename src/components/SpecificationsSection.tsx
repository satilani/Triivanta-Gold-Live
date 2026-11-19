import React from 'react';
import {
  MapPin,
  Shield,
  Route,
  Footprints,
  Droplets,
  Pipette,
  CloudRain,
  Trees,
  Sprout,
  Zap,
  Recycle,
  Waves,
  FileText,
} from 'lucide-react';

interface SpecificationItem {
  number: string;
  title: string;
  keyMetric: string;
  description: string;
  icon: React.ReactNode;
}

interface SpecificationsSectionProps {
  onOpenSpecsSheet: () => void;
}

export const SpecificationsSection: React.FC<SpecificationsSectionProps> = ({
  onOpenSpecsSheet,
}) => {
  const specifications: SpecificationItem[] = [
    {
      number: '01',
      title: 'Demarcation of Plots',
      keyMetric: '38 Residential Plots',
      description:
        'Clear demarcation and marking of all 38 residential plots with boundary reference points, plot numbering, road alignment, and identification of common areas as per the sanctioned layout map.',
      icon: <MapPin className="w-4 h-4" />,
    },
    {
      number: '02',
      title: 'Perimeter Boundary Wall',
      keyMetric: '746.13 RMT · 2.1m Height',
      description:
        'Construction of 746.13 Running Meters long perimeter boundary wall at 2.1 Meters height (1,566.87 Sq.Mt. wall area), complete with a secured entrance gate and security provisions.',
      icon: <Shield className="w-4 h-4" />,
    },
    {
      number: '03',
      title: 'Road Network',
      keyMetric: '18m Main & 9m Internal Roads',
      description:
        'Well-structured 18-meter wide main arterial avenue and 9-meter wide internal sector roads engineered with proper levelling, paving, and side drainage for safe vehicular movement.',
      icon: <Route className="w-4 h-4" />,
    },
    {
      number: '04',
      title: 'Pedestrian Footpaths',
      keyMetric: 'Paver Blocks & Kerb Stones',
      description:
        'Dedicated pedestrian footpaths along main and internal roads as well as park frontages, finished with interlocking paver blocks, kerb stones, and accessibility features.',
      icon: <Footprints className="w-4 h-4" />,
    },
    {
      number: '05',
      title: 'Water Supply & Drinking Water',
      keyMetric: '15 KL Underground Tank (U.G.T.)',
      description:
        'Complete potable water distribution system comprising a 15 KL Underground Tank (U.G.T.), dedicated pumping system, 100 mm dia underground supply pipelines, valves, and house connections.',
      icon: <Droplets className="w-4 h-4" />,
    },
    {
      number: '06',
      title: 'Underground Sewer System',
      keyMetric: '250 mm & 450 mm RCC Hume Pipes',
      description:
        'Underground sewerage network built with 250 mm and 450 mm RCC Hume Pipes, external and branch sewer manholes, inspection chambers, and individual house service connections for all plots.',
      icon: <Pipette className="w-4 h-4" />,
    },
    {
      number: '07',
      title: 'Storm Water Drainage',
      keyMetric: '150 mm Dia DWC Lines',
      description:
        'Dedicated storm water drainage network comprising 150 mm dia DWC branch lines, desilting chambers, collection points, and planned discharge arrangements for effective monsoon management.',
      icon: <CloudRain className="w-4 h-4" />,
    },
    {
      number: '08',
      title: 'Landscaped Parks & Open Greens',
      keyMetric: '2 Parks · 2,807.59 Sq.Mt. (15%)',
      description:
        'Development of 2 landscaped parks spanning 2,807.59 Sq.Mt. (2,716.19 Sq.Mt. central park + 91.40 Sq.Mt. pocket park) with walking pathways, seating alcoves, lawns, and horticultural works.',
      icon: <Trees className="w-4 h-4" />,
    },
    {
      number: '09',
      title: 'Avenue Tree Plantation',
      keyMetric: '1–4 m Evergreen Trees',
      description:
        'Plantation of avenue and ornamental evergreen trees (1–4 meter height) along all 18m and 9m roads, park boundaries, and common open spaces with ongoing horticultural maintenance.',
      icon: <Sprout className="w-4 h-4" />,
    },
    {
      number: '10',
      title: 'Electrical Supply & Street Lighting',
      keyMetric: '2 × 400 KVA Transformers',
      description:
        'HT/LT electrical distribution infrastructure featuring 2 × 400 KVA transformers, feeder pillars, underground/overhead cabling, individual plot service connections, and full LED street lighting.',
      icon: <Zap className="w-4 h-4" />,
    },
    {
      number: '11',
      title: 'Sewage Treatment Plant (STP)',
      keyMetric: '25 KLD STP System',
      description:
        'Dedicated 25 KLD Sewage Treatment Plant covering waste-water collection, biological treatment, recycling, and environmental norm-compliant disposal/reuse for park irrigation.',
      icon: <Recycle className="w-4 h-4" />,
    },
    {
      number: '12',
      title: 'Rainwater Harvesting System',
      keyMetric: '3.00 m Dia Recharge Pits',
      description:
        'Integrated ground-water conservation infrastructure with 3.00 meter diameter recharge pits (6.0m deep recharge bore wells), desilting collection chambers, and perforated recharge assemblies.',
      icon: <Waves className="w-4 h-4" />,
    },
  ];

  return (
    <section id="specifications" className="py-20 bg-white border-b border-[#E5E0D5]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#8F6714] block mb-2">
              Sanctioned Development Works
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#111827] tracking-tight text-balance">
              Engineering & Infrastructure Specifications
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              Complete development scope filed with U.P. RERA for TRIIVANTA GOLD, covering roads,
              underground utilities, parks, electrical distribution, and water conservation.
            </p>
          </div>

          <button
            type="button"
            onClick={onOpenSpecsSheet}
            className="px-5 py-2.5 text-xs uppercase tracking-[0.14em] font-semibold text-[#111827] bg-[#FAF9F6] border border-[#D4CBB8] hover:border-[#8F6714] rounded inline-flex items-center gap-2 transition-colors whitespace-nowrap shrink-0 cursor-pointer self-start md:self-auto"
          >
            <FileText className="w-4 h-4 text-[#8F6714]" />
            <span>View Official Specification Sheet</span>
          </button>
        </div>

        {/* 12-Item Structured Engineering Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {specifications.map((spec) => (
            <div
              key={spec.number}
              className="p-6 rounded-xl border border-[#E5E0D5] bg-[#FAF9F6] hover:border-[#B58827]/60 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded bg-white border border-[#E5E0D5] flex items-center justify-center text-[#8F6714] shrink-0">
                      {spec.icon}
                    </div>
                    <span className="font-mono text-xs text-slate-400 font-semibold tabular-nums">
                      {spec.number}
                    </span>
                  </div>
                  <span className="text-xs font-semibold text-[#8F6714] text-right font-mono tabular-nums">
                    {spec.keyMetric}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-display font-bold text-[#111827] mb-2">
                  {spec.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {spec.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
