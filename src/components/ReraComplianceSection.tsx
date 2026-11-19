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
    { label: 'RERA Registration Date', value: RERA_DETAILS.registrationDate, mono: true },
    { label: 'Proposed Completion Date', value: RERA_DETAILS.proposedCompletionDate, mono: true },
  ];

  return (
    <section
      id="rera-credentials"
      className="py-20 bg-[#FAF9F6] border-b border-[#E5E0D5]"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-xs tracking-[0.2em] uppercase font-semibold text-[#8F6714] mb-2">
            Statutory Approval · U.P. RERA Form C
          </p>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#111827] tracking-tight text-balance">
            U.P. RERA Registered Credentials
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            TRIIVANTA GOLD is officially registered under Section 5 of the Real Estate (Regulation
            and Development) Act with the Uttar Pradesh Real Estate Regulatory Authority.
          </p>
        </div>

        {/* Main Statutory Card */}
        <div className="rounded-xl border border-[#DFD8C8] bg-white p-6 sm:p-8 lg:p-10 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left: Official QR Code Plate (4 cols) */}
            <div className="lg:col-span-4 flex flex-col items-center text-center p-6 rounded-lg bg-[#FAF9F6] border border-[#E5E0D5]">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#8F6714] mb-4">
                <ShieldCheck className="w-4 h-4 shrink-0" />
                <span>Official U.P. RERA QR Code</span>
              </div>

              <div className="w-44 h-44 bg-white border border-[#E5E0D5] rounded-lg p-2.5 shadow-sm flex items-center justify-center">
                <img
                  src={RERA_DETAILS.qrImagePath}
                  alt={`Official U.P. RERA QR Code for ${RERA_DETAILS.projectName} (${RERA_DETAILS.regNumber})`}
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="mt-4 font-mono text-sm font-semibold text-[#111827] tabular-nums tracking-wide">
                {RERA_DETAILS.regNumber}
              </div>

              <p className="mt-1.5 text-xs text-slate-600 leading-relaxed max-w-[230px]">
                Scan to verify project registration directly on the U.P. RERA portal.
              </p>

              <a
                href={RERA_DETAILS.authorityUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-[#8F6714] hover:text-[#6F4E0C] transition-colors"
              >
                <span>{RERA_DETAILS.authorityDisplayUrl}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Right: Schedule of Registration Details (8 cols) */}
            <div className="lg:col-span-8 flex flex-col justify-between space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                {credentials.map((item) => (
                  <div
                    key={item.label}
                    className="pb-3 border-b border-[#ECE8DF]"
                  >
                    <div className="text-xs text-slate-500 mb-1">{item.label}</div>
                    <div
                      className={`text-sm font-semibold text-[#111827] leading-snug ${
                        item.mono ? 'font-mono tabular-nums text-[#7D5810]' : ''
                      }`}
                    >
                      {item.value}
                    </div>
                  </div>
                ))}
              </div>

              {/* Certificate Actions */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={onOpenCertificate}
                  className="px-6 py-3 text-xs uppercase tracking-[0.14em] font-semibold text-white bg-[#121826] hover:bg-[#1E293B] active:scale-[0.98] rounded transition-all inline-flex items-center gap-2 whitespace-nowrap cursor-pointer"
                >
                  <FileText className="w-4 h-4 text-[#F3E5AB]" />
                  <span>View Official Form C Certificate</span>
                </button>

                <a
                  href={RERA_DETAILS.certificatePdfPath}
                  download="Triivanta_Gold_RERA_Certificate.pdf"
                  className="px-5 py-3 text-xs uppercase tracking-[0.14em] font-semibold text-[#111827] border border-[#D4CBB8] hover:border-[#8F6714] hover:bg-[#FAF9F6] rounded inline-flex items-center gap-2 transition-colors whitespace-nowrap"
                >
                  <Download className="w-4 h-4 text-[#8F6714]" />
                  <span>Download Form C (PDF)</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
