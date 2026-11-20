import React, { useState } from 'react';
import { ArrowUpRight, ChevronDown, ChevronUp } from 'lucide-react';
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
    index: string;
    title: string;
    rangeSqm: string;
    rangeSqft: string;
    count: number;
  }> = [
    {
      id: 'compact',
      index: '01',
      title: 'Compact Plots',
      rangeSqm: '137.40 – 183.85 Sq.Mt.',
      rangeSqft: '1,479 – 1,979 Sq.Ft.',
      count: countByCategory('compact'),
    },
    {
      id: 'standard',
      index: '02',
      title: 'Standard Plots',
      rangeSqm: '196.11 – 241.48 Sq.Mt.',
      rangeSqft: '2,111 – 2,599 Sq.Ft.',
      count: countByCategory('standard'),
    },
    {
      id: 'grand',
      index: '03',
      title: 'Grand Plots',
      rangeSqm: '297.19 – 298.38 Sq.Mt.',
      rangeSqft: '3,199 – 3,212 Sq.Ft.',
      count: countByCategory('grand'),
    },
    {
      id: 'signature',
      index: '04',
      title: 'Signature Estates',
      rangeSqm: '358.71 – 420.02 Sq.Mt.',
      rangeSqft: '3,861 – 4,521 Sq.Ft.',
      count: countByCategory('signature'),
    },
  ];

  const filterOptions: Array<{ id: CategoryFilter; label: string }> = [
    { id: 'all', label: 'All 38 Plots' },
    { id: 'compact', label: 'Compact' },
    { id: 'standard', label: 'Standard' },
    { id: 'grand', label: 'Grand' },
    { id: 'signature', label: 'Signature Estates' },
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
    <section id="collections" className="py-24 bg-white border-b border-[#E6E3DB]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header + Expand/Collapse Control */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.22em] font-semibold text-[#9A7428] mb-3">
              Sanctioned Plot Inventory · {AREA_STATEMENT.totalPlots} Exclusive Plots
            </p>
            <h2 className="font-display font-medium text-3xl sm:text-5xl text-[#15271F] leading-[1.1] tracking-tight text-balance">
              Four Thoughtful Plot Categories.
            </h2>
            <p className="mt-4 text-[#535E58] text-sm sm:text-base leading-relaxed">
              Spanning{' '}
              <span className="font-mono font-semibold text-[#18221D] tabular-nums">
                {AREA_STATEMENT.plottedAreaSqm.toLocaleString()} Sq.Mt.
              </span>{' '}
              across Plots 01–36, A-1 & A-2. Select a size band below or expand the complete
              plot-by-plot dimensions schedule.
            </p>
          </div>

          <button
            type="button"
            onClick={() => setIsExpanded((prev) => !prev)}
            aria-expanded={isExpanded}
            aria-controls="plot-schedule-panel"
            className="px-6 py-3.5 text-xs uppercase tracking-[0.14em] font-semibold text-white bg-[#15271F] hover:bg-[#1F372C] active:scale-[0.98] rounded-sm inline-flex items-center justify-center gap-2.5 transition-all whitespace-nowrap shrink-0 cursor-pointer self-start lg:self-auto"
          >
            <span>{isExpanded ? 'Hide Plot Schedule' : 'Expand All 38 Plots'}</span>
            {isExpanded ? (
              <ChevronUp className="w-4 h-4 text-[#E5C987]" />
            ) : (
              <ChevronDown className="w-4 h-4 text-[#E5C987]" />
            )}
          </button>
        </div>

        {/* Always-Visible 4 Architectural Size-Band Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {summaryBands.map((band) => {
            const isSelected = isExpanded && filter === band.id;
            return (
              <button
                type="button"
                key={band.id}
                onClick={() => handleBandCardClick(band.id)}
                className={`text-left p-6 rounded-sm border transition-all cursor-pointer flex flex-col justify-between min-h-[176px] ${
                  isSelected
                    ? 'bg-[#F5F4EF] border-[#15271F]'
                    : 'bg-white border-[#E2DFD7] hover:border-[#9A7428]'
                }`}
              >
                <div className="flex items-center justify-between text-xs">
                  <span className="font-mono text-[#9A7428] font-semibold tabular-nums">
                    {band.index}
                  </span>
                  <span className="font-mono text-[#535E58] tabular-nums">
                    {band.count} Plots
                  </span>
                </div>

                <div className="mt-6">
                  <h3 className="font-display text-2xl font-semibold text-[#15271F]">
                    {band.title}
                  </h3>
                  <div className="mt-2 font-mono text-xs font-semibold text-[#18221D] tabular-nums">
                    {band.rangeSqm}
                  </div>
                  <div className="mt-0.5 text-xs text-[#535E58] tabular-nums">
                    Approx. {band.rangeSqft}
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-[#ECEAE2] flex items-center justify-between text-xs font-medium text-[#15271F]">
                  <span>View plots</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#9A7428]" />
                </div>
              </button>
            );
          })}
        </div>

        {/* Expandable Full 38-Plot Ledger */}
        {isExpanded && (
          <div id="plot-schedule-panel" className="mt-10 pt-8 border-t border-[#E6E3DB] space-y-6">
            {/* Filter Bar + Unit Switcher */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex flex-wrap gap-1.5">
                {filterOptions.map((opt) => (
                  <button
                    type="button"
                    key={opt.id}
                    onClick={() => setFilter(opt.id)}
                    className={`px-4 py-2 rounded-sm text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap ${
                      filter === opt.id
                        ? 'bg-[#15271F] text-white'
                        : 'bg-[#F5F4EF] text-[#535E58] hover:text-[#15271F]'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>

              <div className="inline-flex items-center p-1 rounded-sm bg-[#F5F4EF] border border-[#E2DFD7] self-start md:self-auto shrink-0">
                <button
                  type="button"
                  onClick={() => setUnit('sqm')}
                  className={`px-3.5 py-1.5 text-xs font-semibold rounded-sm transition-colors cursor-pointer whitespace-nowrap ${
                    unit === 'sqm'
                      ? 'bg-[#15271F] text-white'
                      : 'text-[#535E58] hover:text-[#15271F]'
                  }`}
                >
                  Sq.Mt.
                </button>
                <button
                  type="button"
                  onClick={() => setUnit('sqft')}
                  className={`px-3.5 py-1.5 text-xs font-semibold rounded-sm transition-colors cursor-pointer whitespace-nowrap ${
                    unit === 'sqft'
                      ? 'bg-[#15271F] text-white'
                      : 'text-[#535E58] hover:text-[#15271F]'
                  }`}
                >
                  Sq.Ft.
                </button>
              </div>
            </div>

            {/* Clean Architectural Data Table */}
            <div className="border border-[#E2DFD7] rounded-sm bg-white overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-[#F5F4EF] border-b border-[#E2DFD7] text-[11px] uppercase tracking-[0.14em] text-[#535E58]">
                      <th className="py-3.5 px-5 font-semibold">Plot No.</th>
                      <th className="py-3.5 px-5 font-semibold">Category</th>
                      <th className="py-3.5 px-5 font-semibold">Dimensions (Meters)</th>
                      <th className="py-3.5 px-5 font-semibold">
                        Area ({unit === 'sqm' ? 'Sq.Mt.' : 'Approx. Sq.Ft.'})
                      </th>
                      <th className="py-3.5 px-5 font-semibold">Road Frontage</th>
                      <th className="py-3.5 px-5 font-semibold text-right">Enquiry</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#ECEAE2] text-sm">
                    {filteredPlots.map((plot) => (
                      <tr key={plot.plotNo} className="hover:bg-[#FAF9F5] transition-colors">
                        <td className="py-3.5 px-5 font-display text-base font-semibold text-[#15271F] tabular-nums whitespace-nowrap">
                          Plot {plot.plotNo}
                        </td>
                        <td className="py-3.5 px-5 text-xs text-[#535E58] whitespace-nowrap">
                          {categoryLabel(plot.category)}
                        </td>
                        <td className="py-3.5 px-5 font-mono text-xs text-[#18221D] tabular-nums whitespace-nowrap">
                          {plot.sizeMeters}
                        </td>
                        <td className="py-3.5 px-5 font-mono text-xs font-semibold text-[#9A7428] tabular-nums whitespace-nowrap">
                          {unit === 'sqm'
                            ? `${plot.areaSqm.toFixed(2)} Sq.Mt.`
                            : `${plot.areaSqft.toLocaleString()} Sq.Ft.`}
                        </td>
                        <td className="py-3.5 px-5 text-xs text-[#535E58] whitespace-nowrap">
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
                            className="inline-flex items-center gap-1 text-xs font-semibold text-[#15271F] hover:text-[#9A7428] transition-colors cursor-pointer"
                          >
                            <span>Enquire</span>
                            <ArrowUpRight className="w-3.5 h-3.5 text-[#9A7428]" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="px-5 py-3.5 bg-[#F5F4EF] border-t border-[#E2DFD7] flex flex-wrap items-center justify-between gap-3 text-xs text-[#535E58]">
                <span>
                  Showing <strong className="text-[#15271F]">{filteredPlots.length}</strong> of{' '}
                  {AREA_STATEMENT.totalPlots} residential plots
                </span>
                <button
                  type="button"
                  onClick={() => setIsExpanded(false)}
                  className="font-semibold text-[#15271F] hover:text-[#9A7428] inline-flex items-center gap-1 cursor-pointer"
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
