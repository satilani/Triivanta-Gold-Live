import React, { useState } from 'react';
import { Compass, MapPin } from 'lucide-react';
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
      time: '0 Min',
      detail: 'Direct 18m layout entry off Sultanpur Road with dedicated road widening frontage',
    },
    {
      category: 'transit',
      name: 'Gosainganj / Gulamipur Road Junction',
      distance: '3.2 km',
      time: '5 Min',
      detail: 'Immediate town-center and daily commercial conveniences along Sultanpur Road',
    },
    {
      category: 'transit',
      name: 'Purvanchal Expressway Access',
      distance: '~3.8 km',
      time: '6 Min',
      detail: 'Swift entry to Uttar Pradesh’s premier 6-lane expressway corridor',
    },
    {
      category: 'transit',
      name: 'Amar Shaheed Path / Ahimamau',
      distance: '12.3 km',
      time: '15 Min',
      detail: 'Signal-free arterial link to Lucknow Airport, Gomti Nagar & Sushant Golf City',
    },
    {
      category: 'business',
      name: 'HCL IT City & Chak Ganjaria (CG City)',
      distance: '~12.5 km',
      time: '16 Min',
      detail: 'Major IT campuses, institutional district, and administrative headquarters',
    },
    {
      category: 'education',
      name: 'IIIT Lucknow & Institutional Corridor',
      distance: '~12.5 km',
      time: '16 Min',
      detail: 'National technical institute and leading K-12 schools along Sultanpur Road',
    },
    {
      category: 'business',
      name: 'Ekana Stadium & Phoenix Palassio',
      distance: '~14.5 km',
      time: '18 Min',
      detail: 'Premier retail, sports, hospitality, and Gomti Nagar Extension hub',
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
    <section id="connectivity" className="py-24 bg-[#F5F4EF] border-b border-[#E6E3DB]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Location Narrative, Address & Filter Controls (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] font-semibold text-[#9A7428] mb-3">
                Location Advantage · {RERA_DETAILS.shortLocation}
              </p>
              <h2 className="font-display font-medium text-3xl sm:text-5xl text-[#15271F] leading-[1.1] tracking-tight text-balance">
                Directly Positioned on Sultanpur Road.
              </h2>
              <p className="mt-5 text-sm sm:text-base text-[#535E58] leading-relaxed">
                Quietly insulated inside a gated 38-plot enclave, yet effortlessly linked to
                Lucknow’s fastest-growing institutional, IT, and healthcare corridor along
                Sultanpur Road and Amar Shaheed Path.
              </p>
            </div>

            {/* Clean Site Address & Coordinates Block */}
            <div className="p-6 bg-white border border-[#E2DFD7] rounded-sm space-y-4">
              <div className="flex items-start gap-3">
                <Compass className="w-4 h-4 text-[#9A7428] shrink-0 mt-1" />
                <div>
                  <span className="text-[11px] uppercase tracking-[0.14em] text-[#535E58] font-semibold block">
                    Project Site Address
                  </span>
                  <p className="mt-1 text-sm font-medium text-[#18221D] leading-relaxed">
                    {RERA_DETAILS.fullProjectAddress}
                  </p>
                </div>
              </div>
              <div className="pt-3 border-t border-[#ECEAE2] flex items-center justify-between text-xs">
                <span className="text-[#535E58] inline-flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#9A7428]" />
                  <span>GPS Coordinates</span>
                </span>
                <span className="font-mono font-semibold text-[#15271F] tabular-nums">
                  {RERA_DETAILS.coordinates}
                </span>
              </div>
            </div>

            {/* Category Filter Controls */}
            <div>
              <span className="text-[11px] uppercase tracking-[0.16em] text-[#535E58] font-semibold block mb-3">
                Filter Nearby Landmarks
              </span>
              <div className="flex flex-wrap gap-1.5">
                {[
                  { id: 'all', label: 'All Landmarks' },
                  { id: 'transit', label: 'Transit' },
                  { id: 'business', label: 'IT & Retail' },
                  { id: 'education', label: 'Education' },
                  { id: 'healthcare', label: 'Healthcare' },
                ].map((tab) => (
                  <button
                    type="button"
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`px-3.5 py-2 text-xs font-semibold rounded-sm transition-colors whitespace-nowrap cursor-pointer ${
                      activeTab === tab.id
                        ? 'bg-[#15271F] text-white'
                        : 'bg-white border border-[#E2DFD7] text-[#535E58] hover:text-[#15271F]'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Clean Chronological Drive-Time Ledger (7 cols) */}
          <div className="lg:col-span-7 bg-white border border-[#E2DFD7] rounded-sm p-6 sm:p-8">
            <div className="flex items-center justify-between pb-4 border-b border-[#E6E3DB] text-[11px] uppercase tracking-[0.16em] text-[#535E58] font-semibold">
              <span>Landmark along Sultanpur Road Corridor</span>
              <span>Distance · Est. Drive</span>
            </div>

            <div className="divide-y divide-[#ECEAE2]">
              {filtered.map((item) => (
                <div
                  key={item.name}
                  className="py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                >
                  <div className="min-w-0">
                    <h3 className="font-display text-xl font-semibold text-[#15271F]">
                      {item.name}
                    </h3>
                    <p className="mt-1 text-xs sm:text-sm text-[#535E58] leading-relaxed">
                      {item.detail}
                    </p>
                  </div>
                  <div className="sm:text-right shrink-0 flex sm:flex-col items-baseline sm:items-end gap-3 sm:gap-0.5">
                    <span className="font-display text-2xl font-semibold text-[#15271F] tabular-nums">
                      {item.time}
                    </span>
                    <span className="font-mono text-xs text-[#9A7428] font-medium tabular-nums">
                      {item.distance}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
