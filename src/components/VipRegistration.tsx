import React, { useState, useEffect } from 'react';
import { Shield, CheckCircle, Download, Printer, ArrowRight, UserCheck } from 'lucide-react';
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
      setErrorMsg('Please enter a valid email address for priority correspondence.');
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
        'villa-plots': 'Compact Plot (137 – 184 Sq.Mt.)',
        'bespoke-villas': 'Standard Plot (196 – 242 Sq.Mt.)',
        'sky-residences': 'Grand Plot (297 – 299 Sq.Mt.)',
        commercial: 'Signature Estate Plot (358 – 420 Sq.Mt.)',
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
    }, 450);
  };

  return (
    <section id="vip-register" className="py-20 bg-[#FAF9F6] border-b border-[#E5E0D5] relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Left Column: Privileges & Invitation Context (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#8F6714] block mb-2">
                Limited 38-Plot Release
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#111827] tracking-tight">
                Register For Priority Plot Selection
              </h2>
              <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                With only 38 residential plots registered under U.P. RERA (
                <span className="font-mono font-semibold text-[#8F6714]">
                  {RERA_DETAILS.regNumber}
                </span>
                ), early registration secures first preference on 18m main-road and park-facing
                plots.
              </p>

              {/* Privilege Checklist */}
              <div className="mt-8 space-y-3.5">
                {[
                  {
                    title: 'Choice of All 38 Exclusive Plots',
                    desc: 'Priority access to Plots 01–36, A-1 & A-2 across 137.40 to 420.02 Sq.Mt.',
                  },
                  {
                    title: '18m Main Road & Park-Facing Frontage',
                    desc: 'Reserve premier plots fronting the 18m arterial avenue or 2,716.19 Sq.Mt. central park.',
                  },
                  {
                    title: 'Transparent Statutory Documentation',
                    desc: 'Review U.P. RERA Registration Certificate (Form C) and complete project specifications before booking.',
                  },
                  {
                    title: 'Guided Site Walkthrough on Sultanpur Road',
                    desc: 'Scheduled on-site plot demarcation inspection at Nizampur, Gosainganj, Lucknow.',
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-3.5 rounded-lg bg-white border border-[#E5E0D5]"
                  >
                    <CheckCircle className="w-4 h-4 text-[#8F6714] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs sm:text-sm font-semibold text-[#111827] font-display">
                        {item.title}
                      </h4>
                      <p className="text-[11px] sm:text-xs text-slate-600 mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Promoter Trust Block */}
            <div className="p-4 rounded-lg bg-white border border-[#E5E0D5] text-xs text-slate-600 flex items-center gap-3">
              <Shield className="w-5 h-5 text-emerald-700 shrink-0" />
              <span>
                All inquiries are handled directly by{' '}
                <strong className="text-[#111827]">{RERA_DETAILS.promoterName}</strong>,{' '}
                {RERA_DETAILS.promoterOffice}.
              </span>
            </div>
          </div>

          {/* Right Column: Registration Form OR Official VIP Token Card (7 cols) */}
          <div className="lg:col-span-7">
            {passDetails ? (
              <div className="rounded-xl border-2 border-[#B58827] bg-white p-6 sm:p-8 shadow-lg text-left relative overflow-hidden">
                <div className="flex flex-wrap items-start justify-between gap-4 border-b border-[#E5E0D5] pb-4 mb-6">
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.25em] text-[#8F6714] font-bold block">
                      Official Priority Registration Pass
                    </span>
                    <h3 className="text-xl sm:text-2xl font-display font-bold text-[#111827] tracking-wider">
                      TRIIVANTA GOLD TOWNSHIP
                    </h3>
                    <span className="text-[11px] font-mono text-slate-600 block mt-0.5">
                      U.P. RERA: {RERA_DETAILS.regNumber} · {RERA_DETAILS.authorityDisplayUrl}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="text-right">
                      <span className="text-[10px] text-slate-500 uppercase tracking-widest block">
                        Token ID
                      </span>
                      <span className="font-mono text-base sm:text-lg font-bold text-[#8F6714] tracking-wider tabular-nums">
                        {passDetails.tokenId}
                      </span>
                    </div>
                    <div className="w-16 h-16 bg-white border border-[#E5E0D5] rounded p-1 shrink-0">
                      <img
                        src={RERA_DETAILS.qrImagePath}
                        alt={`U.P. RERA QR Code ${RERA_DETAILS.regNumber}`}
                        className="w-full h-full object-contain"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </div>
                </div>

                <div className="mb-6 p-4 rounded-lg bg-emerald-50 border border-emerald-200 space-y-2">
                  <div className="flex items-center gap-2 text-emerald-800 text-xs font-semibold">
                    <UserCheck className="w-4 h-4" />
                    <span>Priority Registration Recorded</span>
                  </div>
                  <p className="text-xs sm:text-sm text-emerald-950">
                    Dear <strong className="font-semibold">{passDetails.fullName}</strong>, thank
                    you for registering your interest in TRIIVANTA GOLD by{' '}
                    {RERA_DETAILS.promoterName}. Our allotment team will contact you shortly.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs mb-6">
                  <div className="p-3 rounded bg-[#FAF9F6] border border-[#E5E0D5]">
                    <span className="text-slate-500 block text-[10px] uppercase tracking-wider">
                      Allocation Tier
                    </span>
                    <span className="text-[#8F6714] font-semibold text-sm">
                      {passDetails.priorityTier}
                    </span>
                  </div>
                  <div className="p-3 rounded bg-[#FAF9F6] border border-[#E5E0D5]">
                    <span className="text-slate-500 block text-[10px] uppercase tracking-wider">
                      Preferred Plot / Size
                    </span>
                    <span className="text-[#111827] font-semibold text-sm">
                      {passDetails.configuration}
                    </span>
                  </div>
                  <div className="p-3 rounded bg-[#FAF9F6] border border-[#E5E0D5]">
                    <span className="text-slate-500 block text-[10px] uppercase tracking-wider">
                      Registered Email
                    </span>
                    <span className="text-slate-700 font-mono text-xs truncate block">
                      {passDetails.email}
                    </span>
                  </div>
                  <div className="p-3 rounded bg-[#FAF9F6] border border-[#E5E0D5]">
                    <span className="text-slate-500 block text-[10px] uppercase tracking-wider">
                      Registered Phone
                    </span>
                    <span className="text-slate-700 font-mono text-xs tabular-nums">
                      {passDetails.phone}
                    </span>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#E5E0D5] flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => window.print()}
                      className="px-4 py-2 text-xs font-medium text-slate-700 bg-[#FAF9F6] border border-[#D8D0C0] hover:border-[#8F6714] rounded flex items-center gap-1.5 cursor-pointer"
                    >
                      <Printer className="w-3.5 h-3.5" />
                      <span>Print Pass</span>
                    </button>
                    <button
                      type="button"
                      onClick={onOpenBrochureModal}
                      className="px-4 py-2 text-xs font-semibold text-white bg-[#121826] hover:bg-[#1E293B] rounded flex items-center gap-1.5 cursor-pointer"
                    >
                      <Download className="w-3.5 h-3.5 text-[#F3E5AB]" />
                      <span>Preview Project Dossier</span>
                    </button>
                  </div>
                  <button
                    type="button"
                    onClick={() => setPassDetails(null)}
                    className="text-xs text-slate-600 hover:text-[#111827] underline cursor-pointer"
                  >
                    Submit another inquiry
                  </button>
                </div>
              </div>
            ) : (
              <div className="rounded-xl border border-[#DFD8C8] bg-white p-6 sm:p-8 shadow-sm">
                <div className="mb-6 flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-display font-bold text-[#111827]">
                      Plot Allocation Expression of Interest
                    </h3>
                    <p className="text-xs text-slate-600 mt-1">
                      Register your details for priority plot selection and site tour scheduling.
                    </p>
                  </div>
                  <span className="text-[11px] font-mono font-semibold text-[#8F6714] tabular-nums">
                    {RERA_DETAILS.regNumber}
                  </span>
                </div>

                {errorMsg && (
                  <div className="mb-5 p-3 rounded bg-red-50 border border-red-200 text-red-800 text-xs">
                    {errorMsg}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wider font-semibold text-slate-700 mb-1.5">
                        Full Legal Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Rajesh Verma"
                        className="w-full px-3.5 py-2.5 rounded bg-[#FAF9F6] border border-[#D8D0C0] text-[#111827] placeholder-slate-400 text-sm focus:border-[#8F6714] focus:bg-white focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider font-semibold text-slate-700 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. rajesh@example.com"
                        className="w-full px-3.5 py-2.5 rounded bg-[#FAF9F6] border border-[#D8D0C0] text-[#111827] placeholder-slate-400 text-sm focus:border-[#8F6714] focus:bg-white focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wider font-semibold text-slate-700 mb-1.5">
                        Contact Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-3.5 py-2.5 rounded bg-[#FAF9F6] border border-[#D8D0C0] text-[#111827] placeholder-slate-400 text-sm focus:border-[#8F6714] focus:bg-white focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider font-semibold text-slate-700 mb-1.5">
                        Preferred Plot Size Band
                      </label>
                      <select
                        value={formData.preferredConfiguration}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            preferredConfiguration: e.target.value as any,
                          })
                        }
                        className="w-full px-3.5 py-2.5 rounded bg-[#FAF9F6] border border-[#D8D0C0] text-[#111827] text-sm focus:border-[#8F6714] focus:bg-white focus:outline-none transition-colors"
                      >
                        <option value="villa-plots">
                          Compact Plots (137.40 – 183.85 Sq.Mt.)
                        </option>
                        <option value="bespoke-villas">
                          Standard Plots (196.11 – 241.48 Sq.Mt.)
                        </option>
                        <option value="sky-residences">
                          Grand Plots (297.19 – 298.38 Sq.Mt.)
                        </option>
                        <option value="commercial">
                          Signature Estate Plots (358.71 – 420.02 Sq.Mt.)
                        </option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wider font-semibold text-slate-700 mb-1.5">
                        Purchase Timeline
                      </label>
                      <select
                        value={formData.investmentHorizon}
                        onChange={(e) =>
                          setFormData({ ...formData, investmentHorizon: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 rounded bg-[#FAF9F6] border border-[#D8D0C0] text-[#111827] text-sm focus:border-[#8F6714] focus:bg-white focus:outline-none transition-colors"
                      >
                        <option value="Immediate (0-3 Months)">Immediate Launch Allotment</option>
                        <option value="3-6 Months">Within 3–6 Months</option>
                        <option value="Long Term Wealth">Long-Term Investment / Family Home</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider font-semibold text-slate-700 mb-1.5">
                        Specific Plot No. / Preference (Optional)
                      </label>
                      <input
                        type="text"
                        value={formData.notes || ''}
                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                        placeholder="e.g. Plot 01, Park facing, 18m main road"
                        className="w-full px-3.5 py-2.5 rounded bg-[#FAF9F6] border border-[#D8D0C0] text-[#111827] placeholder-slate-400 text-sm focus:border-[#8F6714] focus:bg-white focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="pt-3">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 px-6 text-xs uppercase tracking-[0.16em] font-semibold text-white bg-[#121826] hover:bg-[#1E293B] active:scale-[0.98] rounded transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>Recording Priority Registration...</span>
                      ) : (
                        <>
                          <span>Generate VIP Priority Token</span>
                          <ArrowRight className="w-4 h-4 text-[#F3E5AB]" />
                        </>
                      )}
                    </button>
                    <p className="text-[11px] text-slate-500 text-center mt-2.5">
                      U.P. RERA Registration No. {RERA_DETAILS.regNumber} · Verifiable at{' '}
                      <a
                        href={RERA_DETAILS.authorityUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#8F6714] hover:underline font-medium"
                      >
                        {RERA_DETAILS.authorityDisplayUrl}
                      </a>
                    </p>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
