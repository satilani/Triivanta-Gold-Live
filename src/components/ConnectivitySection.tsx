import React, { useState } from 'react';
import { Compass, MapPin, ArrowUpRight } from 'lucide-react';
import { RERA_DETAILS } from '../data/rera';

interface Landmark {
  category: 'transit' | 'business' | 'education' | 'healthcare';
  name: string;
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
      name: 'Sultanpur Road Growth Corridor',
      time: '0 Min',
      detail: '100 Ft. Grand Entrance directly on proposed 24-meter Road',
    },
    {
      category: 'education',
      name: 'City Montessori School (CMS)',
      time: '10 Mins',
      detail: 'Leading K-12 campus situated along the Sultanpur Road educational belt',
    },
    {
      category: 'business',
      name: 'Ekana International Stadium & Phoenix Palassio',
      time: '15 Mins',
      detail: 'Premier sports arena, luxury retail mall, hospitality, and Gomti Nagar Extension hub',
    },
    {
      category: 'education',
      name: 'IIIT Lucknow Campus',
      time: '15 Mins',
      detail: 'National technical institute and CG City / HCL IT City institutional corridor',
    },
    {
      category: 'healthcare',
      name: 'Lulu Mall & Medanta Hospital Lucknow',
      time: '18 Mins',
      detail: 'Flagship shopping destination and 24/7 super-speciality tertiary healthcare on Shaheed Path',
    },
    {
      category: 'healthcare',
      name: 'Sanjay Gandhi Postgraduate Institute (SGPGI)',
      time: '20 Mins',
      detail: 'Premier multi-speciality medical institute accessible via Sultanpur Road & Shaheed Path',
    },
    {
      category: 'transit',
      name: 'Chaudhary Charan Singh International Airport',
      time: '30 Mins',
      detail: 'Signal-free express connectivity via Amar Shaheed Path to Lucknow International Airport',
    },
    {
      category: 'transit',
      name: 'Charbagh Railway Station',
      time: '35 Mins',
      detail: 'Direct arterial link to Lucknow’s central rail junction and metro network',
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
                Quietly insulated inside a gated enclave at Vill. - Nizampur, Gosainganj, yet
                directly connected to the Sultanpur Road Growth Corridor and the proposed 24-meter
                Road—placing schools, IT campuses, hospitals, and retail within minutes.
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
              <div className="pt-3 border-t border-[#ECEAE2] flex flex-wrap items-center justify-between gap-3 text-xs">
                <span className="text-[#535E58] inline-flex items-center gap-1.5 font-mono tabular-nums">
                  <MapPin className="w-3.5 h-3.5 text-[#9A7428]" />
                  <span>{RERA_DETAILS.coordinates}</span>
                </span>
                <a
                  href={RERA_DETAILS.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[#15271F] hover:text-[#9A7428] inline-flex items-center gap-1 underline underline-offset-4"
                >
                  <span>Get Directions</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#9A7428]" />
                </a>
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
              <span>Est. Travel Time</span>
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
                  <div className="sm:text-right shrink-0">
                    <span className="font-display text-2xl font-semibold text-[#15271F] tabular-nums whitespace-nowrap">
                      {item.time}
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
