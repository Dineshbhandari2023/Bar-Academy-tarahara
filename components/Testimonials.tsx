'use client';

import React from 'react';
import { Language, TESTIMONIALS_DATA } from '@/lib/data';
import { Star, Quote, MapPin, Award } from 'lucide-react';
import Image from 'next/image';

interface TestimonialsProps {
  theme: 'dark' | 'light';
  lang: Language;
}

export default function Testimonials({ theme, lang }: TestimonialsProps) {
  return (
    <section className={`py-20 border-t transition-colors duration-300 ${
      theme === 'dark' ? 'bg-[#050505] text-white border-white/10' : 'bg-white text-slate-900 border-slate-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#D4AF37]/50 bg-[#D4AF37]/10 text-[#D4AF37] text-xs font-bold uppercase tracking-[0.2em] mb-4">
            <Award className="w-3.5 h-3.5" />
            <span>{lang === 'np' ? 'सफल ग्राजुएटहरू' : 'Graduate Success Stories'}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-light mb-4">
            {lang === 'np' ? (
              <>
                हाम्रा <span className="italic font-normal text-[#D4AF37]">सफलताका</span> कथाहरू
              </>
            ) : (
              <>
                From Tarahara Labs to <span className="italic font-normal text-[#D4AF37]">Global Bars</span>
              </>
            )}
          </h2>
          <p className={`text-sm sm:text-base ${theme === 'dark' ? 'text-white/60' : 'text-slate-600'}`}>
            {lang === 'np'
              ? 'दुबई, कतार, युरोपियन क्रुज सिप तथा नेपालका चर्चित होटल र क्याफेहरूमा कार्यरत हाम्रा ग्राजुएट विद्यार्थीहरूको अनुभव।'
              : 'Our alumni work at top luxury resorts in Dubai, Qatar, European cruise lines, and thrive as successful café owners in Nepal.'}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS_DATA.map((t) => (
            <div
              key={t.id}
              className={`p-6 sm:p-8 rounded-2xl border relative flex flex-col justify-between transition-all duration-300 hover:border-[#D4AF37] hover:shadow-xl ${
                theme === 'dark' ? 'bg-[#111111] border-white/10' : 'bg-slate-50 border-slate-200 shadow-md'
              }`}
            >
              <Quote className="w-10 h-10 text-[#D4AF37]/20 absolute top-6 right-6" />

              <div>
                <div className="flex items-center gap-1 text-[#D4AF37] mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#D4AF37]" />
                  ))}
                </div>

                <p className={`text-sm sm:text-base leading-relaxed italic mb-6 relative z-10 ${
                  theme === 'dark' ? 'text-white/90' : 'text-slate-800'
                }`}>
                  &ldquo;{t.quote[lang]}&rdquo;
                </p>
              </div>

              <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border border-[#D4AF37]">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div>
                  <h4 className={`text-base font-serif font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                    {t.name}
                  </h4>
                  <p className="text-xs text-[#D4AF37] font-semibold">{t.role[lang]}</p>
                  <p className="text-[10px] text-white/50 flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3 h-3 text-[#D4AF37]" />
                    <span>{t.location[lang]}</span> | <span>{t.year}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
