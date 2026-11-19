import React, { useState } from 'react';
import { Compass, Car, MapPin } from 'lucide-react';
import { RERA_DETAILS } from '../data/rera';

interface Landmark {
  category: 'transit' | 'business' | 'education' | 'healthcare';
  name: string;
  distance: string;
  time: string;
  detail: string;
}

export const ConnectivitySection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<
    'all' | 'transit' | 'business' | 'education' | 'healthcare'
  >('all');

  const landmarks: Landmark[] = [
    {
      category: 'transit',
      name: 'Sultanpur Road Highway Corridor',
      distance: 'Direct Front',
      time: '0 Minutes',
      detail: 'Direct 18m layout entry off Sultanpur Road with dedicated road widening frontage',
    },
    {
      category: 'transit',
      name: 'Gosainganj / Gulamipur Road Junction',
      distance: '3.2 km',
      time: '5 Minutes',
      detail: 'Immediate town-center and daily commercial access along Sultanpur Road',
    },
    {
      category: 'transit',
      name: 'Purvanchal Expressway Access',
      distance: '~3.8 km',
      time: '6 Minutes',
      detail: 'Swift entry to Uttar Pradesh’s premier 6-lane expressway corridor',
    },
    {
      category: 'transit',
      name: 'Amar Shaheed Path / Ahimamau',
      distance: '12.3 km',
      time: '15 Minutes',
      detail: 'Fast signal-free access connecting to Lucknow airport and Gomti Nagar',
    },
    {
      category: 'business',
      name: 'HCL IT City & Chak Ganjaria (CG City)',
      distance: '~12.5 km',
      time: '16 Minutes',
      detail: 'Major IT campuses, institutional district, and administrative headquarters',
    },
    {
      category: 'business',
      name: 'Ekana International Stadium & Phoenix Palassio',
      distance: '~14.5 km',
      time: '18 Minutes',
      detail: 'Premier retail, sports, hospitality, and Gomti Nagar Extension hub',
    },
    {
      category: 'education',
      name: 'IIIT Lucknow & Institutional Corridor',
      distance: '~12.5 km',
      time: '16 Minutes',
      detail: 'National technical institute and leading K-12 schools along Sultanpur Road',
    },
    {
      category: 'healthcare',
      name: 'Medanta & Kalyan Singh Cancer Institute',
      distance: '12 – 15 km',
      time: '16–20 Min',
      detail: '24/7 super-speciality tertiary hospitals along Sultanpur Road & Shaheed Path',
    },
  ];

  const filtered =
    activeTab === 'all' ? landmarks : landmarks.filter((item) => item.category === activeTab);

  return (
    <section id="connectivity" className="py-20 bg-white border-b border-[#E5E0D5]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#8F6714] block mb-2">
            Strategic Location · {RERA_DETAILS.shortLocation}
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#111827] tracking-tight text-balance">
            Direct Approach on Sultanpur Road
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            Situated at {RERA_DETAILS.fullProjectAddress} — just 3.2 km from Gosainganj junction
            and 12.3 km from Ahimamau / Amar Shaheed Path along Lucknow’s premier Sultanpur Road
            corridor.
          </p>

          {/* Functional Filter Tabs */}
          <div className="mt-8 inline-flex flex-wrap justify-center gap-1.5 p-1.5 rounded-lg bg-[#EFECE4] border border-[#E2DDD0]">
            {[
              { id: 'all', label: 'All Landmarks' },
              { id: 'transit', label: 'Transit & Highway' },
              { id: 'business', label: 'IT & Commercial' },
              { id: 'education', label: 'Education' },
              { id: 'healthcare', label: 'Healthcare' },
            ].map((tab) => (
              <button
                type="button"
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-[#121826] text-white shadow-sm'
                    : 'text-slate-600 hover:text-[#111827]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Connectivity Matrix Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {filtered.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-lg bg-[#FAF9F6] border border-[#E5E0D5] hover:border-[#B58827]/60 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
                  <span className="capitalize font-medium">{item.category}</span>
                  <span className="font-mono text-[#8F6714] font-semibold tabular-nums">
                    {item.distance}
                  </span>
                </div>
                <h4 className="text-base font-semibold text-[#111827] font-display mb-1.5">
                  {item.name}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">{item.detail}</p>
              </div>

              <div className="mt-5 pt-3 border-t border-[#E5E0D5] flex items-center justify-between text-xs">
                <span className="text-slate-500 flex items-center gap-1.5">
                  <Car className="w-3.5 h-3.5 text-slate-400" />
                  Est. Drive
                </span>
                <span className="font-display font-bold text-[#111827] text-sm tabular-nums">
                  {item.time}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Verified GPS & Site Location Bar */}
        <div className="mt-8 p-4 rounded-lg bg-[#FAF9F6] border border-[#DFD8C8] flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-slate-700">
          <div className="flex items-start sm:items-center gap-3">
            <Compass className="w-5 h-5 text-[#8F6714] shrink-0 mt-0.5 sm:mt-0" />
            <span>
              <strong className="text-[#111827]">Project Location:</strong>{' '}
              {RERA_DETAILS.fullProjectAddress}
            </span>
          </div>
          <div className="flex items-center gap-2 font-mono text-[#8F6714] font-semibold shrink-0 tabular-nums">
            <MapPin className="w-3.5 h-3.5 shrink-0" />
            <span>{RERA_DETAILS.coordinates}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
