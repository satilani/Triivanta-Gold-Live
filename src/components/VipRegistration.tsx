import React, { useState, useEffect } from 'react';
import { Shield, Download, Printer, ArrowRight, UserCheck } from 'lucide-react';
import { VipPassDetails, VipRegistrationData } from '../types';
import { RERA_DETAILS } from '../data/rera';

interface VipRegistrationProps {
  preselectedPlot?: string;
  onOpenBrochureModal: () => void;
}

export const VipRegistration: React.FC<VipRegistrationProps> = ({
  preselectedPlot,
  onOpenBrochureModal,
}) => {
  const [formData, setFormData] = useState<VipRegistrationData>({
    fullName: '',
    email: '',
    phone: '',
    preferredConfiguration: 'villa-plots',
    investmentHorizon: 'Immediate (0-3 Months)',
    source: 'Direct Invitation',
    notes: preselectedPlot || '',
  });

  useEffect(() => {
    if (preselectedPlot) {
      setFormData((prev) => ({
        ...prev,
        notes: preselectedPlot,
      }));
    }
  }, [preselectedPlot]);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [passDetails, setPassDetails] = useState<VipPassDetails | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (!formData.fullName.trim() || formData.fullName.length < 3) {
      setErrorMsg('Please enter your full legal name.');
      return;
    }
    if (!formData.email.includes('@') || !formData.email.includes('.')) {
      setErrorMsg('Please enter a valid email address for correspondence.');
      return;
    }
    if (!formData.phone.trim() || formData.phone.length < 8) {
      setErrorMsg('Please enter a valid contact phone number.');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      const generatedId = `TG-VIP-${Math.floor(1000 + Math.random() * 9000)}`;
      const configLabels: Record<VipRegistrationData['preferredConfiguration'], string> = {
        'villa-plots': 'Classic & Executive (1,181 – 1,980 Sq.Ft.)',
        'bespoke-villas': 'Premium & Grand (2,012 – 2,600 Sq.Ft.)',
        'sky-residences': 'Elite Boulevard (3,200 – 3,264 Sq.Ft.)',
        commercial: 'Signature Estate (3,861 – 4,589 Sq.Ft.)',
      };

      const newPass: VipPassDetails = {
        tokenId: generatedId,
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        configuration: formData.notes?.trim()
          ? formData.notes.trim()
          : configLabels[formData.preferredConfiguration],
        timestamp: new Date().toLocaleDateString('en-IN', {
          month: 'long',
          day: 'numeric',
          year: 'numeric',
        }),
        priorityTier: 'Founding Member - Tier 1',
      };

      setPassDetails(newPass);
      setIsSubmitting(false);
    }, 350);
  };

  return (
    <section id="vip-register" className="py-24 bg-white border-b border-[#E6E3DB]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-10 gap-x-12 lg:gap-x-16 items-start">
          {/* Left Column: Editorial Invitation Context (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] font-semibold text-[#9A7428] mb-3">
                Private Consultation · 38 Exclusive Plots
              </p>
              <h2 className="font-display font-medium text-3xl sm:text-5xl text-[#15271F] leading-[1.1] tracking-tight text-balance">
                Schedule a Private Site Visit.
              </h2>
              <p className="mt-5 text-[#535E58] text-sm sm:text-base leading-relaxed">
                With just 38 residential plots registered under U.P. RERA (
                <span className="font-mono font-semibold text-[#15271F]">
                  {RERA_DETAILS.regNumber}
                </span>
                ), registering early gives you first preference on 18m main-road and park-facing
                plots.
              </p>

              {/* Editorial Steps */}
              <div className="mt-8 divide-y divide-[#E6E3DB] border-t border-b border-[#E6E3DB]">
                {[
                  {
                    index: '01',
                    title: 'Choice Across All 38 Phase 1 Plots',
                    desc: 'Classic, Executive, Premium, Grand, Elite & Signature plots from 1,181 to 4,589 Sq.Ft.',
                  },
                  {
                    index: '02',
                    title: '60 Ft. Boulevard & Central Park Frontage',
                    desc: 'Prioritize East, West, or North-facing plots along the 60 Ft. avenue or 30,000 Sq.Ft. park.',
                  },
                  {
                    index: '03',
                    title: 'Official Current-Year Launch Pricing',
                    desc: 'Transparent rates from ₹3,100 / Sq.Ft. backed by U.P. RERA Form C registration.',
                  },
                  {
                    index: '04',
                    title: 'Guided On-Site Walkthrough',
                    desc: 'Private visit along Sultanpur Road at Vill. - Nizampur, Gosainganj, Lucknow.',
                  },
                ].map((item) => (
                  <div key={item.index} className="py-4 flex items-start gap-4">
                    <span className="font-mono text-xs font-semibold text-[#9A7428] pt-0.5 tabular-nums">
                      {item.index}
                    </span>
                    <div>
                      <h4 className="font-display text-lg font-semibold text-[#15271F]">
                        {item.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-[#535E58] mt-0.5 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Serene Enquiry Form or Confirmation Pass (7 cols) */}
          <div className="lg:col-span-7">
            {passDetails ? (
              <div className="rounded-sm border border-[#15271F] bg-[#F5F4EF] p-7 sm:p-9 text-left">
                <div className="flex flex-wrap items-start justify-between gap-4 border-b border-[#DCD8CE] pb-5 mb-6">
                  <div>
                    <span className="text-[11px] uppercase tracking-[0.2em] text-[#9A7428] font-semibold block">
                      Priority Registration Confirmation
                    </span>
                    <h3 className="font-display text-2xl sm:text-3xl font-semibold text-[#15271F] mt-1">
                      TRIIVANTA GOLD
                    </h3>
                    <span className="text-[11px] font-mono text-[#535E58] block mt-1">
                      U.P. RERA: {RERA_DETAILS.regNumber} · {RERA_DETAILS.authorityDisplayUrl}
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <span className="text-[10px] text-[#535E58] uppercase tracking-widest block">
                        Reference ID
                      </span>
                      <span className="font-mono text-base font-semibold text-[#15271F] tabular-nums">
                        {passDetails.tokenId}
                      </span>
                    </div>
                    <div className="w-16 h-16 bg-white border border-[#E2DFD7] p-1 shrink-0">
                      <img
                        src={RERA_DETAILS.qrImagePath}
                        alt={`U.P. RERA QR Code ${RERA_DETAILS.regNumber}`}
                        className="w-full h-full object-contain"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </div>
                </div>

                <div className="mb-6 p-4 rounded-sm bg-white border border-[#E2DFD7] space-y-1.5">
                  <div className="flex items-center gap-2 text-[#15271F] text-xs font-semibold">
                    <UserCheck className="w-4 h-4 text-[#9A7428]" />
                    <span>Enquiry Recorded Successfully</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#535E58]">
                    Thank you, <strong className="text-[#15271F]">{passDetails.fullName}</strong>.
                    Our allotment team at {RERA_DETAILS.promoterName} will reach out shortly to
                    coordinate your site visit.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs mb-6">
                  <div className="p-3.5 bg-white border border-[#E2DFD7] rounded-sm">
                    <span className="text-[#535E58] block text-[10px] uppercase tracking-wider">
                      Priority Status
                    </span>
                    <span className="text-[#9A7428] font-semibold text-sm mt-0.5 block">
                      {passDetails.priorityTier}
                    </span>
                  </div>
                  <div className="p-3.5 bg-white border border-[#E2DFD7] rounded-sm">
                    <span className="text-[#535E58] block text-[10px] uppercase tracking-wider">
                      Preferred Plot / Size
                    </span>
                    <span className="text-[#15271F] font-semibold text-sm mt-0.5 block">
                      {passDetails.configuration}
                    </span>
                  </div>
                  <div className="p-3.5 bg-white border border-[#E2DFD7] rounded-sm">
                    <span className="text-[#535E58] block text-[10px] uppercase tracking-wider">
                      Email Address
                    </span>
                    <span className="text-[#18221D] font-mono text-xs truncate block mt-0.5">
                      {passDetails.email}
                    </span>
                  </div>
                  <div className="p-3.5 bg-white border border-[#E2DFD7] rounded-sm">
                    <span className="text-[#535E58] block text-[10px] uppercase tracking-wider">
                      Contact Number
                    </span>
                    <span className="text-[#18221D] font-mono text-xs tabular-nums mt-0.5 block">
                      {passDetails.phone}
                    </span>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#DCD8CE] flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <button
                      type="button"
                      onClick={() => window.print()}
                      className="px-4 py-2.5 text-xs font-medium text-[#15271F] bg-white border border-[#D8D4CA] hover:border-[#15271F] rounded-sm inline-flex items-center gap-1.5 cursor-pointer"
                    >
                      <Printer className="w-3.5 h-3.5" />
                      <span>Print Confirmation</span>
                    </button>
                    <button
                      type="button"
                      onClick={onOpenBrochureModal}
                      className="px-4 py-2.5 text-xs font-semibold text-white bg-[#15271F] hover:bg-[#1F372C] rounded-sm inline-flex items-center gap-1.5 cursor-pointer"
                    >
                      <Download className="w-3.5 h-3.5 text-[#E5C987]" />
                      <span>Open Project Dossier</span>
                    </button>
                  </div>
                  <button
                    type="button"
                    onClick={() => setPassDetails(null)}
                    className="text-xs text-[#535E58] hover:text-[#15271F] underline cursor-pointer"
                  >
                    Submit another enquiry
                  </button>
                </div>
              </div>
            ) : (
              <div className="rounded-sm border border-[#E2DFD7] bg-[#F5F4EF] p-7 sm:p-9">
                <div className="mb-7 pb-5 border-b border-[#E2DFD7] flex flex-wrap items-baseline justify-between gap-2">
                  <div>
                    <h3 className="font-display text-2xl sm:text-3xl font-semibold text-[#15271F]">
                      Expression of Interest
                    </h3>
                    <p className="text-xs sm:text-sm text-[#535E58] mt-1">
                      Share your details for priority plot selection and guided site visits.
                    </p>
                  </div>
                  <span className="text-[11px] font-mono font-semibold text-[#9A7428] tabular-nums">
                    {RERA_DETAILS.regNumber}
                  </span>
                </div>

                {errorMsg && (
                  <div className="mb-5 p-3.5 rounded-sm bg-red-50 border border-red-200 text-red-800 text-xs">
                    {errorMsg}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[11px] uppercase tracking-[0.14em] font-semibold text-[#18221D] mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Rajesh Verma"
                        className="w-full px-3.5 py-3 rounded-sm bg-white border border-[#D8D4CA] text-[#18221D] placeholder-[#8E9691] text-sm focus:border-[#15271F] focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] uppercase tracking-[0.14em] font-semibold text-[#18221D] mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. rajesh@example.com"
                        className="w-full px-3.5 py-3 rounded-sm bg-white border border-[#D8D4CA] text-[#18221D] placeholder-[#8E9691] text-sm focus:border-[#15271F] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[11px] uppercase tracking-[0.14em] font-semibold text-[#18221D] mb-2">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-3.5 py-3 rounded-sm bg-white border border-[#D8D4CA] text-[#18221D] placeholder-[#8E9691] text-sm focus:border-[#15271F] focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] uppercase tracking-[0.14em] font-semibold text-[#18221D] mb-2">
                        Preferred Plot Size
                      </label>
                      <select
                        value={formData.preferredConfiguration}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            preferredConfiguration: e.target.value as any,
                          })
                        }
                        className="w-full px-3.5 py-3 rounded-sm bg-white border border-[#D8D4CA] text-[#18221D] text-sm focus:border-[#15271F] focus:outline-none transition-colors"
                      >
                        <option value="villa-plots">
                          Classic & Executive (1,181 – 1,980 Sq.Ft. · From ₹3,100/SF)
                        </option>
                        <option value="bespoke-villas">
                          Premium & Grand (2,012 – 2,600 Sq.Ft. · ₹3,100–₹3,410/SF)
                        </option>
                        <option value="sky-residences">
                          Elite Boulevard (3,200 – 3,264 Sq.Ft. · ₹3,100–₹3,410/SF)
                        </option>
                        <option value="commercial">
                          Signature Estate (3,861 – 4,589 Sq.Ft. · ₹3,410–₹3,720/SF)
                        </option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[11px] uppercase tracking-[0.14em] font-semibold text-[#18221D] mb-2">
                        Purchase Timeline
                      </label>
                      <select
                        value={formData.investmentHorizon}
                        onChange={(e) =>
                          setFormData({ ...formData, investmentHorizon: e.target.value })
                        }
                        className="w-full px-3.5 py-3 rounded-sm bg-white border border-[#D8D4CA] text-[#18221D] text-sm focus:border-[#15271F] focus:outline-none transition-colors"
                      >
                        <option value="Immediate (0-3 Months)">Immediate Allotment</option>
                        <option value="3-6 Months">Within 3–6 Months</option>
                        <option value="Long Term Wealth">Long-Term Family Residence</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] uppercase tracking-[0.14em] font-semibold text-[#18221D] mb-2">
                        Specific Plot No. (Optional)
                      </label>
                      <input
                        type="text"
                        value={formData.notes || ''}
                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                        placeholder="e.g. Plot 01, 18m main road, park facing"
                        className="w-full px-3.5 py-3 rounded-sm bg-white border border-[#D8D4CA] text-[#18221D] placeholder-[#8E9691] text-sm focus:border-[#15271F] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 px-6 text-xs uppercase tracking-[0.16em] font-semibold text-white bg-[#15271F] hover:bg-[#1F372C] active:scale-[0.98] rounded-sm transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>Submitting Registration...</span>
                      ) : (
                        <>
                          <span>Request Priority Consultation</span>
                          <ArrowRight className="w-4 h-4 text-[#E5C987]" />
                        </>
                      )}
                    </button>
                    <p className="text-[11px] text-[#535E58] text-center mt-3">
                      U.P. RERA Registration No. {RERA_DETAILS.regNumber} · Verifiable at{' '}
                      <a
                        href={RERA_DETAILS.authorityUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#15271F] hover:text-[#9A7428] underline underline-offset-2 font-medium"
                      >
                        {RERA_DETAILS.authorityDisplayUrl}
                      </a>
                    </p>
                  </div>
                </form>
              </div>
            )}
          </div>

          {/* Full-Width Direct Investor Desk & Promoter Trust Bar */}
          <div className="lg:col-span-12 w-full p-5 sm:p-6 bg-[#F5F4EF] border border-[#E2DFD7] rounded-sm text-xs text-[#535E58] flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-start sm:items-center gap-3">
              <Shield className="w-4 h-4 text-[#15271F] shrink-0 mt-0.5 sm:mt-0" />
              <span className="leading-relaxed">
                <strong className="uppercase tracking-[0.14em] font-semibold text-[#9A7428] text-[11px] mr-2">
                  Direct Investor Desk
                </strong>
                Managed directly by{' '}
                <strong className="text-[#15271F]">{RERA_DETAILS.promoterName}</strong>,{' '}
                {RERA_DETAILS.promoterOffice} ·{' '}
                <a
                  href={`mailto:${RERA_DETAILS.email}`}
                  className="font-mono text-[#15271F] hover:text-[#9A7428]"
                >
                  {RERA_DETAILS.email}
                </a>
              </span>
            </div>
            <div className="flex items-center gap-3 md:pl-6 md:border-l md:border-[#DCD8CE] shrink-0">
              <span className="uppercase tracking-[0.14em] font-semibold text-[#535E58] text-[11px]">
                Helpline
              </span>
              <a
                href={RERA_DETAILS.helplineHref}
                className="font-mono text-sm sm:text-base font-semibold text-[#15271F] hover:text-[#9A7428] tabular-nums whitespace-nowrap"
              >
                {RERA_DETAILS.helplineDisplay}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
