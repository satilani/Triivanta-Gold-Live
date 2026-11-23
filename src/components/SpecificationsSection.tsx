import React from 'react';
import { FileText } from 'lucide-react';

interface SpecificationItem {
  number: string;
  title: string;
  keyMetric: string;
  description: string;
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
        'Clear demarcation and marking of all 38 residential plots with boundary reference points, plot numbering, road alignment, and identification of common areas.',
    },
    {
      number: '02',
      title: 'Perimeter Boundary Wall',
      keyMetric: '746.13 RMT · 2.1m H',
      description:
        '746.13 Running Meters perimeter boundary wall at 2.1 Meters height (1,566.87 Sq.Mt. area), complete with main entrance gate and security provisions.',
    },
    {
      number: '03',
      title: 'Road Work',
      keyMetric: '18m Main & 9m Internal',
      description:
        'Well-structured 18-meter main avenue and 9-meter internal sector roads built after proper levelling, paving, and side drainage for safe vehicular movement.',
    },
    {
      number: '04',
      title: 'Pedestrian Footpaths',
      keyMetric: 'Paver Blocks & Kerbs',
      description:
        'Dedicated pedestrian footpaths along main and internal roads as well as park frontages with interlocking paver blocks, kerb stones, and accessibility features.',
    },
    {
      number: '05',
      title: 'Water Supply & Drinking Water',
      keyMetric: '15 KL U.G.T.',
      description:
        'Complete potable water distribution system including a 15 KL Underground Tank (U.G.T.), pumping system, underground pipelines, valves, and house connections.',
    },
    {
      number: '06',
      title: 'Underground Sewer System',
      keyMetric: '250 & 450 mm RCC Pipes',
      description:
        'Underground sewerage network comprising 250 mm and 450 mm RCC Hume Pipes, external and branch manholes, and house service connections for all plots.',
    },
    {
      number: '07',
      title: 'Storm Water Drainage',
      keyMetric: '150 mm Dia DWC Lines',
      description:
        'Dedicated storm water drainage system comprising 150 mm dia DWC branch lines, desilting chambers, collection points, and planned discharge arrangements.',
    },
    {
      number: '08',
      title: 'Landscaped Parks',
      keyMetric: '2 Parks · 2,807.59 Sq.Mt.',
      description:
        'Two landscaped parks (2,716.19 Sq.Mt. central park + 91.40 Sq.Mt. pocket park) with walking pathways, seating areas, lawns, and horticultural works.',
    },
    {
      number: '09',
      title: 'Avenue Tree Planting',
      keyMetric: '1–4 m Evergreen Trees',
      description:
        'Plantation of avenue and ornamental evergreen trees (1–4 meter height) along roads, parks, and open spaces with ongoing horticultural maintenance.',
    },
    {
      number: '10',
      title: 'Electrical Supply & Street Lighting',
      keyMetric: '2 × 400 KVA Transformers',
      description:
        'HT/LT electrical distribution featuring 2 × 400 KVA transformers, feeder pillars, underground/overhead cabling, plot connections, and LED street lighting.',
    },
    {
      number: '11',
      title: 'Sewage Treatment Plant (STP)',
      keyMetric: '25 KLD STP System',
      description:
        'Dedicated 25 KLD Sewage Treatment Plant covering collection, biological treatment, recycling, and environmentally compliant disposal/reuse of treated water.',
    },
    {
      number: '12',
      title: 'Water Conservation System',
      keyMetric: '3.00 m Dia Recharge Pits',
      description:
        'Integrated Rainwater Harvesting System featuring 3.00 meter diameter recharge pits, recharge wells, collection chambers, and groundwater recharge assemblies.',
    },
  ];

  return (
    <section id="specifications" className="py-24 bg-white border-b border-[#E6E3DB]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.22em] font-semibold text-[#7A5612] mb-3">
              Engineering & Civic Scope
            </p>
            <h2 className="font-display font-medium text-3xl sm:text-5xl text-[#15271F] leading-[1.1] tracking-tight text-balance">
              12-Point Project Specifications.
            </h2>
            <p className="mt-4 text-[#2D3933] text-sm sm:text-base leading-relaxed">
              Every development commitment filed under U.P. RERA for TRIIVANTA GOLD — presented
              clearly without ambiguity.
            </p>
          </div>

          <button
            type="button"
            onClick={onOpenSpecsSheet}
            className="px-5 py-3 text-xs uppercase tracking-[0.14em] font-semibold text-[#15271F] bg-[#F5F4EF] border border-[#D8D4CA] hover:border-[#15271F] rounded-sm inline-flex items-center gap-2 transition-colors whitespace-nowrap shrink-0 cursor-pointer self-start md:self-auto"
          >
            <FileText className="w-4 h-4 text-[#7A5612]" />
            <span>View Official Specification Sheet</span>
          </button>
        </div>

        {/* Clean 2-Column Editorial Specifications Ledger */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-14 border-t border-[#E6E3DB]">
          {specifications.map((spec) => (
            <div
              key={spec.number}
              className="py-6 border-b border-[#E6E3DB] flex items-start gap-5"
            >
              <span className="font-mono text-xs font-semibold text-[#7A5612] pt-1 shrink-0 tabular-nums">
                {spec.number}
              </span>
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="font-display text-xl font-semibold text-[#15271F]">
                    {spec.title}
                  </h3>
                  <span className="font-mono text-xs font-semibold text-[#15271F] tabular-nums">
                    {spec.keyMetric}
                  </span>
                </div>
                <p className="mt-2 text-sm text-[#2D3933] leading-relaxed">{spec.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
