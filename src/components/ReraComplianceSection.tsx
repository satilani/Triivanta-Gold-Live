import React from 'react';
import { ShieldCheck, FileText, Download, ExternalLink } from 'lucide-react';
import { RERA_DETAILS, AREA_STATEMENT } from '../data/rera';

interface ReraComplianceSectionProps {
  onOpenCertificate: () => void;
}

export const ReraComplianceSection: React.FC<ReraComplianceSectionProps> = ({
  onOpenCertificate,
}) => {
  const credentials = [
    { label: 'Project Name', value: RERA_DETAILS.projectName },
    { label: 'U.P. RERA Registration No.', value: RERA_DETAILS.regNumber, mono: true },
    { label: 'Promoter Name', value: RERA_DETAILS.promoterName },
    { label: 'Promoter Registered Office', value: RERA_DETAILS.promoterOffice },
    {
      label: 'Total Project Land Area',
      value: `${AREA_STATEMENT.totalLandSqm.toLocaleString()} Sq.Mt. (${AREA_STATEMENT.totalLandHectares} Ha · ${AREA_STATEMENT.totalAcres} Acres)`,
      mono: true,
    },
    {
      label: 'Project Location',
      value: RERA_DETAILS.fullProjectAddress,
    },
    { label: 'Registration Date', value: RERA_DETAILS.registrationDate, mono: true },
    { label: 'Approved From', value: 'Zila Panchayat Lucknow & UPRERA' },
  ];

  return (
    <section id="rera-credentials" className="py-24 bg-[#15271F] text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <div className="max-w-3xl mb-14">
          <p className="text-xs tracking-[0.22em] uppercase font-semibold text-[#F2D99B] mb-3">
            Regulatory Transparency · U.P. RERA Form C
          </p>
          <h2 className="font-display font-medium text-3xl sm:text-5xl text-white leading-[1.1] tracking-tight text-balance">
            Built on Clear Title & Statutory Assurance.
          </h2>
          <p className="mt-4 text-white/92 text-sm sm:text-base leading-relaxed">
            TRIIVANTA GOLD is officially registered under Section 5 of the Real Estate (Regulation
            and Development) Act with the Uttar Pradesh Real Estate Regulatory Authority.
          </p>
        </div>

        {/* Main Statutory Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left: Official QR Code Plate (4 cols) */}
          <div className="lg:col-span-4 bg-white text-[#0E1713] rounded-sm p-7 flex flex-col items-center text-center">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.14em] font-semibold text-[#15271F] mb-5">
              <ShieldCheck className="w-4 h-4 text-[#7A5612] shrink-0" />
              <span>Official U.P. RERA QR</span>
            </div>

            <div className="w-44 h-44 bg-white border border-[#E6E3DB] p-2 flex items-center justify-center">
              <img
                src={RERA_DETAILS.qrImagePath}
                alt={`Official U.P. RERA QR Code for ${RERA_DETAILS.projectName} (${RERA_DETAILS.regNumber})`}
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="mt-5 font-mono text-sm font-semibold text-[#15271F] tabular-nums tracking-wide">
              {RERA_DETAILS.regNumber}
            </div>

            <p className="mt-2 text-xs text-[#2D3933] leading-relaxed max-w-[230px]">
              Scan with your camera to verify registration details directly on the U.P. RERA
              portal.
            </p>

            <a
              href={RERA_DETAILS.authorityUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-[#7A5612] hover:text-[#5C3F0B] transition-colors"
            >
              <span>{RERA_DETAILS.authorityDisplayUrl}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Right: Registration Ledger (8 cols) */}
          <div className="lg:col-span-8 flex flex-col justify-between space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-5">
              {credentials.map((item) => (
                <div key={item.label} className="pb-4 border-b border-white/15">
                  <div className="text-xs text-white/95 mb-1.5">{item.label}</div>
                  <div
                    className={`text-sm font-medium leading-snug ${
                      item.mono ? 'font-mono tabular-nums text-[#F2D99B]' : 'text-white'
                    }`}
                  >
                    {item.value}
                  </div>
                </div>
              ))}
            </div>

            {/* Certificate Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                type="button"
                onClick={onOpenCertificate}
                className="px-6 py-3.5 text-xs uppercase tracking-[0.15em] font-semibold text-[#15271F] bg-white hover:bg-[#F5F4EF] active:scale-[0.98] rounded-sm transition-all inline-flex items-center gap-2 whitespace-nowrap cursor-pointer"
              >
                <FileText className="w-4 h-4 text-[#7A5612]" />
                <span>View Official Form C Certificate</span>
              </button>

              <a
                href={RERA_DETAILS.certificatePdfPath}
                download="Triivanta_Gold_RERA_Certificate.pdf"
                className="px-6 py-3.5 text-xs uppercase tracking-[0.15em] font-medium text-white border border-white/30 hover:border-[#F2D99B] hover:bg-white/5 rounded-sm inline-flex items-center gap-2 transition-colors whitespace-nowrap"
              >
                <Download className="w-4 h-4 text-[#F2D99B]" />
                <span>Download Form C (PDF)</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
