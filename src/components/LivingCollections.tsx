import React, { useState } from 'react';
import { ArrowUpRight, Ruler, ChevronDown, ChevronUp } from 'lucide-react';
import { SANCTIONED_PLOTS, AREA_STATEMENT, SanctionedPlot } from '../data/rera';

interface LivingCollectionsProps {
  onSelectOption: (option: string) => void;
}

type CategoryFilter = 'all' | 'compact' | 'standard' | 'grand' | 'signature';

export const LivingCollections: React.FC<LivingCollectionsProps> = ({ onSelectOption }) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [filter, setFilter] = useState<CategoryFilter>('all');
  const [unit, setUnit] = useState<'sqm' | 'sqft'>('sqm');

  const filteredPlots =
    filter === 'all'
      ? SANCTIONED_PLOTS
      : SANCTIONED_PLOTS.filter((plot) => plot.category === filter);

  const countByCategory = (cat: SanctionedPlot['category']) =>
    SANCTIONED_PLOTS.filter((p) => p.category === cat).length;

  const summaryBands: Array<{
    id: SanctionedPlot['category'];
    title: string;
    rangeSqm: string;
    rangeSqft: string;
    count: number;
  }> = [
    {
      id: 'compact',
      title: 'Compact Plots',
      rangeSqm: '137.40 – 183.85 Sq.Mt.',
      rangeSqft: '1,479 – 1,979 Sq.Ft.',
      count: countByCategory('compact'),
    },
    {
      id: 'standard',
      title: 'Standard Plots',
      rangeSqm: '196.11 – 241.48 Sq.Mt.',
      rangeSqft: '2,111 – 2,599 Sq.Ft.',
      count: countByCategory('standard'),
    },
    {
      id: 'grand',
      title: 'Grand Plots',
      rangeSqm: '297.19 – 298.38 Sq.Mt.',
      rangeSqft: '3,199 – 3,212 Sq.Ft.',
      count: countByCategory('grand'),
    },
    {
      id: 'signature',
      title: 'Signature Estates',
      rangeSqm: '358.71 – 420.02 Sq.Mt.',
      rangeSqft: '3,861 – 4,521 Sq.Ft.',
      count: countByCategory('signature'),
    },
  ];

  const filterOptions: Array<{ id: CategoryFilter; label: string; range: string }> = [
    { id: 'all', label: 'All 38 Plots', range: '137 – 420 Sq.Mt.' },
    { id: 'compact', label: 'Compact', range: '137 – 184 Sq.Mt.' },
    { id: 'standard', label: 'Standard', range: '196 – 242 Sq.Mt.' },
    { id: 'grand', label: 'Grand', range: '297 – 299 Sq.Mt.' },
    { id: 'signature', label: 'Signature Estates', range: '358 – 420 Sq.Mt.' },
  ];

  const categoryLabel = (cat: SanctionedPlot['category']) => {
    switch (cat) {
      case 'compact':
        return 'Compact Plot';
      case 'standard':
        return 'Standard Plot';
      case 'grand':
        return 'Grand Plot';
      case 'signature':
        return 'Signature Estate';
    }
  };

  const handleBandCardClick = (bandId: SanctionedPlot['category']) => {
    setFilter(bandId);
    setIsExpanded(true);
  };

  return (
    <section id="collections" className="py-20 bg-[#FAF9F6] border-b border-[#E5E0D5]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header + Expand Toggle */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#8F6714] block mb-2">
              Sanctioned Plot Inventory · {AREA_STATEMENT.totalPlots} Exclusive Plots
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#111827] tracking-tight text-balance">
              Plotted Area Schedule (Plots 01–36, A-1 & A-2)
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              Totaling{' '}
              <span className="font-mono font-semibold text-[#111827] tabular-nums">
                {AREA_STATEMENT.plottedAreaSqm.toLocaleString()} Sq.Mt.
              </span>{' '}
              of demarcated freehold residential plots ranging from 137.40 Sq.Mt. to 420.02 Sq.Mt.
              Select a size band below or expand the complete plot-by-plot schedule.
            </p>
          </div>

          <button
            type="button"
            onClick={() => setIsExpanded((prev) => !prev)}
            aria-expanded={isExpanded}
            aria-controls="plot-schedule-panel"
            className="px-6 py-3 text-xs uppercase tracking-[0.14em] font-semibold text-white bg-[#121826] hover:bg-[#1E293B] active:scale-[0.98] rounded inline-flex items-center justify-center gap-2.5 transition-all whitespace-nowrap shrink-0 cursor-pointer self-start lg:self-auto"
          >
            <span>{isExpanded ? 'Hide Plot Schedule' : 'Expand All 38 Plots'}</span>
            {isExpanded ? (
              <ChevronUp className="w-4 h-4 text-[#F3E5AB]" />
            ) : (
              <ChevronDown className="w-4 h-4 text-[#F3E5AB]" />
            )}
          </button>
        </div>

        {/* Always-visible 4 Size-Band Summary Cards (Click any card to expand & filter) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {summaryBands.map((band) => {
            const isSelected = isExpanded && filter === band.id;
            return (
              <button
                type="button"
                key={band.id}
                onClick={() => handleBandCardClick(band.id)}
                className={`text-left p-5 rounded-xl border transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#FAF6EC] border-[#8F6714] shadow-sm'
                    : 'bg-white border-[#E5E0D5] hover:border-[#B58827]'
                }`}
              >
                <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                  <span className="font-mono font-semibold text-[#8F6714] tabular-nums">
                    {band.count} Plots
                  </span>
                  <span className="text-[11px] font-medium text-slate-400">View list →</span>
                </div>
                <h3 className="text-lg font-display font-bold text-[#111827] mb-1">{band.title}</h3>
                <div className="font-mono text-xs font-semibold text-slate-700 tabular-nums">
                  {band.rangeSqm}
                </div>
                <div className="font-mono text-[11px] text-slate-500 tabular-nums mt-0.5">
                  Approx. {band.rangeSqft}
                </div>
              </button>
            );
          })}
        </div>

        {/* Expandable Complete 38-Plot Schedule */}
        {isExpanded && (
          <div id="plot-schedule-panel" className="pt-4 space-y-5">
            {/* Filter Tabs + Unit Switcher Bar */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              <div className="flex flex-wrap gap-2">
                {filterOptions.map((opt) => (
                  <button
                    type="button"
                    key={opt.id}
                    onClick={() => setFilter(opt.id)}
                    className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer border whitespace-nowrap ${
                      filter === opt.id
                        ? 'bg-[#121826] text-white border-[#121826] shadow-sm'
                        : 'bg-white text-slate-700 border-[#DFD8C8] hover:border-[#8F6714]'
                    }`}
                  >
                    <span>{opt.label}</span>
                    <span
                      className={`ml-2 font-mono text-[11px] ${
                        filter === opt.id ? 'text-[#F3E5AB]' : 'text-slate-400'
                      }`}
                    >
                      {opt.range}
                    </span>
                  </button>
                ))}
              </div>

              {/* Unit Switcher */}
              <div className="flex items-center gap-3 self-start lg:self-auto shrink-0">
                <span className="text-xs text-slate-500 font-medium inline-flex items-center gap-1.5">
                  <Ruler className="w-3.5 h-3.5 text-[#8F6714]" />
                  Unit:
                </span>
                <div className="inline-flex p-1 rounded-md bg-[#EFECE4] border border-[#E2DDD0]">
                  <button
                    type="button"
                    onClick={() => setUnit('sqm')}
                    className={`px-3 py-1.5 text-xs font-semibold rounded transition-colors cursor-pointer whitespace-nowrap ${
                      unit === 'sqm'
                        ? 'bg-[#121826] text-white'
                        : 'text-slate-600 hover:text-[#111827]'
                    }`}
                  >
                    Sq.Mt.
                  </button>
                  <button
                    type="button"
                    onClick={() => setUnit('sqft')}
                    className={`px-3 py-1.5 text-xs font-semibold rounded transition-colors cursor-pointer whitespace-nowrap ${
                      unit === 'sqft'
                        ? 'bg-[#121826] text-white'
                        : 'text-slate-600 hover:text-[#111827]'
                    }`}
                  >
                    Sq.Ft.
                  </button>
                </div>
              </div>
            </div>

            {/* Clean Tabular Plot Schedule */}
            <div className="rounded-xl border border-[#DFD8C8] bg-white overflow-hidden shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-[#FAF9F6] border-b border-[#E5E0D5] text-[11px] uppercase tracking-wider text-slate-500">
                      <th className="py-3.5 px-5 font-semibold">Plot No.</th>
                      <th className="py-3.5 px-5 font-semibold">Category</th>
                      <th className="py-3.5 px-5 font-semibold">Dimensions (Meters)</th>
                      <th className="py-3.5 px-5 font-semibold">
                        Plot Area ({unit === 'sqm' ? 'Sq.Mt.' : 'Approx. Sq.Ft.'})
                      </th>
                      <th className="py-3.5 px-5 font-semibold">Road Access</th>
                      <th className="py-3.5 px-5 font-semibold text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#EFECE4] text-sm">
                    {filteredPlots.map((plot) => (
                      <tr key={plot.plotNo} className="hover:bg-[#FAF8F2] transition-colors">
                        <td className="py-3.5 px-5 font-display font-bold text-[#111827] tabular-nums whitespace-nowrap">
                          Plot {plot.plotNo}
                        </td>
                        <td className="py-3.5 px-5 text-xs font-medium text-slate-600 whitespace-nowrap">
                          {categoryLabel(plot.category)}
                        </td>
                        <td className="py-3.5 px-5 font-mono text-xs text-slate-700 tabular-nums whitespace-nowrap">
                          {plot.sizeMeters}
                        </td>
                        <td className="py-3.5 px-5 font-mono text-sm font-semibold text-[#8F6714] tabular-nums whitespace-nowrap">
                          {unit === 'sqm'
                            ? `${plot.areaSqm.toFixed(2)} Sq.Mt.`
                            : `${plot.areaSqft.toLocaleString()} Sq.Ft.`}
                        </td>
                        <td className="py-3.5 px-5 text-xs text-slate-600 whitespace-nowrap">
                          {plot.frontageRoad}
                        </td>
                        <td className="py-3.5 px-5 text-right whitespace-nowrap">
                          <button
                            type="button"
                            onClick={() =>
                              onSelectOption(
                                `Plot ${plot.plotNo} (${plot.sizeMeters} · ${plot.areaSqm.toFixed(2)} Sq.Mt.)`
                              )
                            }
                            className="inline-flex items-center gap-1 text-xs font-semibold text-[#111827] hover:text-[#8F6714] transition-colors cursor-pointer"
                          >
                            <span>Enquire</span>
                            <ArrowUpRight className="w-3.5 h-3.5 text-[#8F6714]" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="px-5 py-3.5 bg-[#FAF9F6] border-t border-[#E5E0D5] flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500">
                <span>
                  Showing <strong className="text-[#111827]">{filteredPlots.length}</strong> of{' '}
                  {AREA_STATEMENT.totalPlots} residential plots
                </span>
                <button
                  type="button"
                  onClick={() => setIsExpanded(false)}
                  className="font-semibold text-[#8F6714] hover:text-[#6F4E0C] inline-flex items-center gap-1 cursor-pointer"
                >
                  <span>Collapse Plot Schedule</span>
                  <ChevronUp className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
