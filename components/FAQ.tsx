'use client';

import React, { useState } from 'react';
import { Language, FAQS_DATA } from '@/lib/data';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

interface FAQProps {
  theme: 'dark' | 'light';
  lang: Language;
}

export default function FAQ({ theme, lang }: FAQProps) {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className={`py-20 border-t transition-colors duration-300 ${
      theme === 'dark' ? 'bg-[#090909] text-white border-white/10' : 'bg-slate-100 text-slate-900 border-slate-200'
    }`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#D4AF37]/50 bg-[#D4AF37]/10 text-[#D4AF37] text-xs font-bold uppercase tracking-[0.2em] mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>{lang === 'np' ? 'जिज्ञासा तथा उत्तर' : 'Frequently Asked Questions'}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-light mb-4">
            {lang === 'np' ? (
              <>
                साधारण <span className="italic font-normal text-[#D4AF37]">प्रश्नहरू</span>
              </>
            ) : (
              <>
                Everything You Need to <span className="italic font-normal text-[#D4AF37]">Know</span>
              </>
            )}
          </h2>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQS_DATA.map((faq, i) => {
            const isOpen = openIdx === i;
            return (
              <div
                key={i}
                className={`rounded-2xl border transition-all overflow-hidden ${
                  theme === 'dark' ? 'bg-[#121212] border-white/10' : 'bg-white border-slate-200 shadow-sm'
                }`}
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : i)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className={`text-sm sm:text-base font-serif font-bold ${
                    isOpen ? 'text-[#D4AF37]' : theme === 'dark' ? 'text-white' : 'text-slate-900'
                  }`}>
                    {faq.q[lang]}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border ${
                    isOpen
                      ? 'bg-[#D4AF37] text-black border-[#D4AF37]'
                      : theme === 'dark' ? 'bg-white/5 border-white/10 text-white/70' : 'bg-slate-100 border-slate-200 text-slate-700'
                  }`}>
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className={`px-5 sm:px-6 pb-6 pt-0 text-xs sm:text-sm leading-relaxed border-t pt-4 ${
                    theme === 'dark' ? 'border-white/5 text-white/70' : 'border-slate-100 text-slate-600'
                  }`}>
                    <p>{faq.a[lang]}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
