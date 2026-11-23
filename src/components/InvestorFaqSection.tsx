import React from 'react';
import { ArrowRight, FileText } from 'lucide-react';
import { INVESTOR_FAQS } from '../data/faq';
import { RERA_DETAILS } from '../data/rera';

interface InvestorFaqSectionProps {
  onOpenVipModal: () => void;
  onOpenBrochureModal: () => void;
}

export const InvestorFaqSection: React.FC<InvestorFaqSectionProps> = ({
  onOpenVipModal,
  onOpenBrochureModal,
}) => {
  return (
    <section id="faq" className="py-24 bg-[#F5F4EF] border-b border-[#E6E3DB]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end mb-14">
          <div className="lg:col-span-7">
            <p className="text-xs uppercase tracking-[0.22em] font-semibold text-[#7A5612] mb-3">
              Due Diligence · Verified Project Facts
            </p>
            <h2 className="font-display font-medium text-3xl sm:text-5xl text-[#15271F] leading-[1.1] tracking-tight text-balance">
              Investor & Buyer Due-Diligence FAQ.
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="text-sm sm:text-base text-[#2D3933] leading-relaxed">
              Direct, factual answers covering U.P. RERA registration ({RERA_DETAILS.regNumber}),
              Sultanpur Road & Purvanchal Expressway connectivity, plot sizes, PLC tiers, and active
              on-site civil infrastructure.
            </p>
          </div>
        </div>

        {/* Crawlable Semantic Q&A Grid — All Answers Always Rendered in DOM */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {INVESTOR_FAQS.map((item, idx) => (
            <article
              key={item.id}
              id={item.id}
              className="bg-white border border-[#E2DFD7] rounded-sm p-6 sm:p-8 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-3 text-[11px] uppercase tracking-[0.16em] mb-3">
                  <span className="font-mono font-semibold text-[#7A5612] tabular-nums">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <span className="text-[#2D3933] font-semibold">{item.category}</span>
                </div>
                <h3 className="font-display text-2xl font-semibold text-[#15271F] leading-snug">
                  {item.question}
                </h3>
                <p className="mt-3.5 text-sm text-[#2D3933] leading-[1.75]">{item.answer}</p>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Action Strip */}
        <div className="mt-12 pt-8 border-t border-[#DCD8CE] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <p className="text-xs sm:text-sm text-[#2D3933]">
            Ready to walk the site and review plot-wise availability? Connect directly with{' '}
            <strong className="text-[#15271F]">{RERA_DETAILS.promoterName}</strong> at{' '}
            <a
              href={RERA_DETAILS.helplineHref}
              className="font-mono font-semibold text-[#15271F] hover:text-[#7A5612] tabular-nums"
            >
              {RERA_DETAILS.helplineDisplay}
            </a>
            .
          </p>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={onOpenBrochureModal}
              className="px-5 py-3 text-xs uppercase tracking-[0.14em] font-semibold text-[#15271F] bg-white border border-[#D8D4CA] hover:border-[#15271F] rounded-sm inline-flex items-center gap-2 transition-colors whitespace-nowrap cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5 text-[#7A5612]" />
              <span>Project Dossier</span>
            </button>
            <button
              type="button"
              onClick={onOpenVipModal}
              className="px-5 py-3 text-xs uppercase tracking-[0.14em] font-semibold text-white bg-[#15271F] hover:bg-[#1F372C] rounded-sm inline-flex items-center gap-2 transition-colors whitespace-nowrap cursor-pointer"
            >
              <span>Book a Guided Site Visit</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#F2D99B]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
