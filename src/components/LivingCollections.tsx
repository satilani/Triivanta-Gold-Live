import React, { useState, useMemo } from 'react';
import { ArrowUpRight, ChevronDown, ChevronUp, Search, Compass } from 'lucide-react';
import {
  SANCTIONED_PLOTS,
  AREA_STATEMENT,
  TOWNSHIP_VISION,
  SanctionedPlot,
} from '../data/rera';

interface LivingCollectionsProps {
  onSelectOption: (option: string) => void;
}

type CategoryFilter = 'all' | 'compact' | 'standard' | 'grand' | 'signature';

export const LivingCollections: React.FC<LivingCollectionsProps> = ({ onSelectOption }) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [filter, setFilter] = useState<CategoryFilter>('all');
  const [unit, setUnit] = useState<'sqft' | 'sqm'>('sqft');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedPlotNo, setSelectedPlotNo] = useState<string>('32');

  const selectedPlot = useMemo(
    () => SANCTIONED_PLOTS.find((p) => p.plotNo === selectedPlotNo) || SANCTIONED_PLOTS[0],
    [selectedPlotNo]
  );

  const filteredPlots = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return SANCTIONED_PLOTS.filter((plot) => {
      const matchesCat = filter === 'all' || plot.category === filter;
      if (!matchesCat) return false;
      if (!q) return true;
      return (
        `plot ${plot.plotNo}`.toLowerCase().includes(q) ||
        plot.plotNo.toLowerCase().includes(q) ||
        plot.plotType.toLowerCase().includes(q) ||
        plot.facing.toLowerCase().includes(q) ||
        plot.dimensionsFeet.toLowerCase().includes(q) ||
        plot.frontageRoad.toLowerCase().includes(q) ||
        String(plot.areaSqft).includes(q)
      );
    });
  }, [filter, searchQuery]);

  const countByCategory = (cat: SanctionedPlot['category']) =>
    SANCTIONED_PLOTS.filter((p) => p.category === cat).length;

  const summaryBands: Array<{
    id: SanctionedPlot['category'];
    index: string;
    title: string;
    subTypes: string;
    rangeSqft: string;
    rangeSqm: string;
    positioningNote: string;
    count: number;
  }> = [
    {
      id: 'compact',
      index: '01',
      title: 'Classic & Executive',
      subTypes: 'Compact Residential Plots',
      rangeSqft: '1,181 – 1,980 Sq.Ft.',
      rangeSqm: '137.40 – 207.35 Sq.Mt.',
      positioningNote: 'Allotment shared on site visit',
      count: countByCategory('compact'),
    },
    {
      id: 'standard',
      index: '02',
      title: 'Premium & Grand',
      subTypes: 'Mid-to-Large Family Plots',
      rangeSqft: '2,012 – 2,600 Sq.Ft.',
      rangeSqm: '183.24 – 241.48 Sq.Mt.',
      positioningNote: 'Park & avenue options · On visit',
      count: countByCategory('standard'),
    },
    {
      id: 'grand',
      index: '03',
      title: 'Elite Boulevard Plots',
      subTypes: "40' × 80' Park & Avenue Plots",
      rangeSqft: '3,200 – 3,264 Sq.Ft.',
      rangeSqm: '297.19 – 298.38 Sq.Mt.',
      positioningNote: '60 Ft. main avenue · On visit',
      count: countByCategory('grand'),
    },
    {
      id: 'signature',
      index: '04',
      title: 'Signature Estates',
      subTypes: 'Plots 01–03, A-1 & A-2',
      rangeSqft: '3,861 – 4,589 Sq.Ft.',
      rangeSqm: '358.71 – 420.02 Sq.Mt.',
      positioningNote: 'Flagship boulevard frontage · On visit',
      count: countByCategory('signature'),
    },
  ];

  const filterOptions: Array<{ id: CategoryFilter; label: string }> = [
    { id: 'all', label: 'All 38 Plots' },
    { id: 'compact', label: 'Classic & Executive' },
    { id: 'standard', label: 'Premium & Grand' },
    { id: 'grand', label: 'Elite' },
    { id: 'signature', label: 'Signature Estates' },
  ];

  const handleBandCardClick = (bandId: SanctionedPlot['category']) => {
    setFilter(bandId);
    setSearchQuery('');
    setIsExpanded(true);
  };

  const handleEnquirePlot = (plot: SanctionedPlot) => {
    onSelectOption(
      `Plot ${plot.plotNo} · ${plot.plotType} (${plot.areaSqft.toLocaleString('en-IN')} Sq.Ft. · ${plot.facing} Facing · ${plot.frontageRoad})`
    );
  };

  return (
    <section id="collections" className="py-24 bg-white border-b border-[#E6E3DB]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header + Expand/Collapse Control */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.22em] font-semibold text-[#7A5612] mb-3">
              Sanctioned Plot Inventory · {AREA_STATEMENT.totalPlots} Exclusive Plots
            </p>
            <h2 className="font-display font-medium text-3xl sm:text-5xl text-[#15271F] leading-[1.1] tracking-tight text-balance">
              Phase 1 Plot Ledger &amp; Site Visit Selector.
            </h2>
            <p className="mt-4 text-[#2D3933] text-sm sm:text-base leading-relaxed">
              Totaling{' '}
              <span className="font-mono font-semibold text-[#0E1713] tabular-nums">
                {AREA_STATEMENT.plottedAreaSqm.toLocaleString()} Sq.Mt.
              </span>{' '}
              across Plots 01–36, A-1 &amp; A-2. Shortlist your preferred plot dimensions, facing,
              and boulevard frontage below, then book a private guided site visit for direct
              promoter pricing and live on-ground inspection.
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
              <ChevronUp className="w-4 h-4 text-[#F2D99B]" />
            ) : (
              <ChevronDown className="w-4 h-4 text-[#F2D99B]" />
            )}
          </button>
        </div>

        {/* Always-Visible 4 Architectural Size-Band Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          {summaryBands.map((band) => {
            const isSelected = isExpanded && filter === band.id;
            return (
              <button
                type="button"
                key={band.id}
                onClick={() => handleBandCardClick(band.id)}
                className={`text-left p-6 rounded-sm border transition-all cursor-pointer flex flex-col justify-between min-h-[196px] ${
                  isSelected
                    ? 'bg-[#F5F4EF] border-[#15271F]'
                    : 'bg-white border-[#E2DFD7] hover:border-[#9A7428]'
                }`}
              >
                <div className="flex items-center justify-between text-xs">
                  <span className="font-mono text-[#7A5612] font-semibold tabular-nums">
                    {band.index}
                  </span>
                  <span className="font-mono text-[#2D3933] tabular-nums">
                    {band.count} Plots
                  </span>
                </div>

                <div className="mt-5">
                  <h3 className="font-display text-2xl font-semibold text-[#15271F]">
                    {band.title}
                  </h3>
                  <div className="text-xs text-[#2D3933] mt-0.5">{band.subTypes}</div>
                  <div className="mt-3 font-mono text-xs font-semibold text-[#0E1713] tabular-nums">
                    {band.rangeSqft}
                  </div>
                  <div className="mt-0.5 text-[11px] text-[#7A5612] font-medium">
                    {band.positioningNote}
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-[#ECEAE2] flex items-center justify-between text-xs font-medium text-[#15271F]">
                  <span>Inspect plots</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#7A5612]" />
                </div>
              </button>
            );
          })}
        </div>

        {/* Interactive Plot Shortlist & Site Visit Bar (Always Accessible) */}
        <div className="bg-[#F5F4EF] border border-[#E2DFD7] rounded-sm p-6 sm:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Selector & Positioning Tiers (7 cols) */}
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] font-semibold text-[#7A5612]">
                <Compass className="w-4 h-4 shrink-0" />
                <span>Interactive Plot Shortlist for Your Site Visit</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="plot-estimator-select"
                    className="block text-[11px] uppercase tracking-[0.14em] font-semibold text-[#0E1713] mb-2"
                  >
                    Select Plot Number
                  </label>
                  <select
                    id="plot-estimator-select"
                    value={selectedPlotNo}
                    onChange={(e) => setSelectedPlotNo(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-sm bg-white border border-[#D8D4CA] text-[#0E1713] text-sm font-medium focus:border-[#15271F] focus:outline-none"
                  >
                    {SANCTIONED_PLOTS.map((plot) => (
                      <option key={plot.plotNo} value={plot.plotNo}>
                        Plot {plot.plotNo} — {plot.plotType} ({plot.areaSqft.toLocaleString('en-IN')}{' '}
                        Sq.Ft. · {plot.facing})
                      </option>
                    ))}
                  </select>
                </div>

                <div className="p-3 bg-white border border-[#E2DFD7] rounded-sm flex flex-col justify-center">
                  <span className="text-[10px] uppercase tracking-[0.14em] text-[#2D3933]">
                    Plot Profile
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-[#15271F] mt-0.5">
                    {selectedPlot.plotType} · {selectedPlot.facing} Facing ·{' '}
                    <span className="font-mono">{selectedPlot.dimensionsFeet}</span>
                  </span>
                  <span className="text-[11px] text-[#2D3933] mt-0.5">
                    {selectedPlot.frontageRoad}
                  </span>
                </div>
              </div>

              {/* Plot Positioning Categories */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                {TOWNSHIP_VISION.positioningTiers.map((tier) => (
                  <div
                    key={tier.label}
                    className="px-3.5 py-2.5 bg-white border border-[#E6E3DB] rounded-sm"
                  >
                    <div className="text-xs font-semibold text-[#15271F]">{tier.label}</div>
                    <div className="text-[11px] font-medium text-[#7A5612] mt-0.5">
                      {tier.subtitle}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Selected Plot Site-Visit Card (5 cols) */}
            <div className="lg:col-span-5 bg-[#15271F] text-white rounded-sm p-6 sm:p-7 flex flex-col justify-between space-y-5">
              <div>
                <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.16em] text-[#F2D99B]">
                  <span>{`Plot ${selectedPlot.plotNo} · ${selectedPlot.plotType}`}</span>
                  <span className="font-mono tabular-nums">{selectedPlot.facing} Facing</span>
                </div>

                <div className="mt-3 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <span className="font-display text-3xl sm:text-4xl font-semibold text-white tabular-nums">
                    {`${selectedPlot.areaSqft.toLocaleString('en-IN')} Sq.Ft.`}
                  </span>
                  <span className="font-mono text-xs text-[#F2D99B] tabular-nums">
                    {`(${selectedPlot.areaSqm.toFixed(2)} Sq.Mt.)`}
                  </span>
                </div>

                <div className="mt-2 text-xs text-white/95">
                  {selectedPlot.frontageRoad} · Pricing &amp; allotment terms shared in person
                  during your guided site visit.
                </div>
              </div>

              <div className="space-y-2.5">
                <button
                  type="button"
                  onClick={() => handleEnquirePlot(selectedPlot)}
                  className="w-full py-3 px-5 text-xs uppercase tracking-[0.14em] font-semibold text-[#15271F] bg-white hover:bg-[#F5F4EF] rounded-sm inline-flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <span>{`Book Guided Visit for Plot ${selectedPlot.plotNo}`}</span>
                  <ArrowUpRight className="w-4 h-4 text-[#7A5612]" />
                </button>
                <p className="text-[11px] text-white/95 leading-relaxed">
                  Walk the actual plot boundaries, inspect road widths, and receive direct promoter
                  allotment terms on ground.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Expandable Full 38-Plot Ledger (Always Mounted in Semantic HTML for SEO & AEO Crawlers) */}
        <div
          id="plot-schedule-panel"
          className={
            isExpanded ? 'mt-10 pt-8 border-t border-[#E6E3DB] space-y-6' : 'sr-only'
          }
        >
          {/* Filter Bar + Search + Unit Switcher */}
          <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-4">
            <div className="flex flex-wrap gap-1.5">
              {filterOptions.map((opt) => (
                <button
                  type="button"
                  key={opt.id}
                  onClick={() => setFilter(opt.id)}
                  className={`px-3.5 py-2 rounded-sm text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap ${
                    filter === opt.id
                      ? 'bg-[#15271F] text-white'
                      : 'bg-[#F5F4EF] text-[#2D3933] hover:text-[#15271F]'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-3">
              {/* Live Search Input */}
              <div className="relative flex-1 sm:flex-initial min-w-[240px]">
                <Search className="w-3.5 h-3.5 text-[#2D3933] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search Plot, Facing, Type, Sq.Ft..."
                  className="w-full pl-9 pr-3 py-2 text-xs rounded-sm bg-[#F5F4EF] border border-[#E2DFD7] text-[#0E1713] placeholder-[#4D5A53] focus:bg-white focus:border-[#15271F] focus:outline-none"
                />
              </div>

              {/* Unit Switcher */}
              <div className="inline-flex items-center p-1 rounded-sm bg-[#F5F4EF] border border-[#E2DFD7] shrink-0">
                <button
                  type="button"
                  onClick={() => setUnit('sqft')}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-sm transition-colors cursor-pointer whitespace-nowrap ${
                    unit === 'sqft'
                      ? 'bg-[#15271F] text-white'
                      : 'text-[#2D3933] hover:text-[#15271F]'
                  }`}
                >
                  Sq.Ft.
                </button>
                <button
                  type="button"
                  onClick={() => setUnit('sqm')}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-sm transition-colors cursor-pointer whitespace-nowrap ${
                    unit === 'sqm'
                      ? 'bg-[#15271F] text-white'
                      : 'text-[#2D3933] hover:text-[#15271F]'
                  }`}
                >
                  Sq.Mt.
                </button>
              </div>
            </div>
          </div>

          {/* Clean Architectural Data Table */}
          <div className="border border-[#E2DFD7] rounded-sm bg-white overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#F5F4EF] border-b border-[#E2DFD7] text-[11px] uppercase tracking-[0.14em] text-[#2D3933]">
                    <th className="py-3.5 px-4 font-semibold">Plot No.</th>
                    <th className="py-3.5 px-4 font-semibold">Type</th>
                    <th className="py-3.5 px-4 font-semibold">
                      Dimensions ({unit === 'sqft' ? 'Feet' : 'Meters'})
                    </th>
                    <th className="py-3.5 px-4 font-semibold">
                      Area ({unit === 'sqft' ? 'Sq.Ft.' : 'Sq.Mt.'})
                    </th>
                    <th className="py-3.5 px-4 font-semibold">Facing</th>
                    <th className="py-3.5 px-4 font-semibold">Road Frontage</th>
                    <th className="py-3.5 px-4 font-semibold">Allotment Pricing</th>
                    <th className="py-3.5 px-4 font-semibold text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#ECEAE2] text-sm">
                  {filteredPlots.length === 0 ? (
                    <tr>
                      <td
                        colSpan={8}
                        className="py-10 px-5 text-center text-xs text-[#2D3933]"
                      >
                        No plots match “{searchQuery}”. Try searching by plot number (e.g. 32,
                        A-1), facing (East, West, North), or type (Elite, Grand, Classic).
                      </td>
                    </tr>
                  ) : (
                    filteredPlots.map((plot) => {
                      const isShortlistActive = plot.plotNo === selectedPlotNo;
                      return (
                        <tr
                          key={plot.plotNo}
                          onClick={() => setSelectedPlotNo(plot.plotNo)}
                          className={`transition-colors cursor-pointer ${
                            isShortlistActive ? 'bg-[#F5F4EF]' : 'hover:bg-[#FAF9F5]'
                          }`}
                        >
                          <td className="py-3.5 px-4 font-display text-base font-semibold text-[#15271F] tabular-nums whitespace-nowrap">
                            {`Plot ${plot.plotNo}`}
                          </td>
                          <td className="py-3.5 px-4 text-xs font-medium text-[#0E1713] whitespace-nowrap">
                            {plot.plotType}
                          </td>
                          <td className="py-3.5 px-4 font-mono text-xs text-[#2D3933] tabular-nums whitespace-nowrap">
                            {unit === 'sqft' ? plot.dimensionsFeet : plot.sizeMeters}
                          </td>
                          <td className="py-3.5 px-4 font-mono text-xs font-semibold text-[#15271F] tabular-nums whitespace-nowrap">
                            {unit === 'sqft'
                              ? `${plot.areaSqft.toLocaleString('en-IN')} Sq.Ft.`
                              : `${plot.areaSqm.toFixed(2)} Sq.Mt.`}
                          </td>
                          <td className="py-3.5 px-4 text-xs text-[#2D3933] whitespace-nowrap">
                            {plot.facing}
                          </td>
                          <td className="py-3.5 px-4 text-xs text-[#2D3933] whitespace-nowrap">
                            {plot.frontageRoad}
                          </td>
                          <td className="py-3.5 px-4 text-xs font-medium text-[#7A5612] whitespace-nowrap">
                            On Site Visit
                          </td>
                          <td className="py-3.5 px-4 text-right whitespace-nowrap">
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                setSelectedPlotNo(plot.plotNo);
                                handleEnquirePlot(plot);
                              }}
                              className="inline-flex items-center gap-1 text-xs font-semibold text-[#15271F] hover:text-[#7A5612] transition-colors cursor-pointer"
                            >
                              <span>Book Visit</span>
                              <ArrowUpRight className="w-3.5 h-3.5 text-[#7A5612]" />
                            </button>
                          </td>
                        </tr>
                      );
                    })
                  )}
                </tbody>
              </table>
            </div>

            <div className="px-5 py-3.5 bg-[#F5F4EF] border-t border-[#E2DFD7] flex flex-wrap items-center justify-between gap-3 text-xs text-[#2D3933]">
              <span>
                Showing <strong className="text-[#15271F]">{filteredPlots.length}</strong> of{' '}
                {AREA_STATEMENT.totalPlots} Phase 1 plots · Click any row to shortlist for your
                guided site visit
              </span>
              <button
                type="button"
                onClick={() => setIsExpanded(false)}
                className="font-semibold text-[#15271F] hover:text-[#7A5612] inline-flex items-center gap-1 cursor-pointer"
              >
                <span>Collapse Plot Schedule</span>
                <ChevronUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
