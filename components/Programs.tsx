'use client';

import React, { useState } from 'react';
import { Language, Course, COURSES_DATA } from '@/lib/data';
import { Clock, Calendar, CheckCircle2, BookOpen, ArrowRight, DollarSign, Award, ChevronDown, ChevronUp, Sparkles } from 'lucide-react';
import Image from 'next/image';

interface ProgramsProps {
  theme: 'dark' | 'light';
  lang: Language;
  onOpenEnroll: (courseId?: string) => void;
}

export default function Programs({ theme, lang, onOpenEnroll }: ProgramsProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeCourseModal, setActiveCourseModal] = useState<Course | null>(null);

  const filteredCourses = selectedCategory === 'all'
    ? COURSES_DATA
    : COURSES_DATA.filter((c) => c.category === selectedCategory);

  const categories = [
    { id: 'all', label: lang === 'np' ? 'सबै तालिमहरू' : 'All Courses' },
    { id: 'bartending', label: lang === 'np' ? 'बारटेन्डिङ र मिक्सोलोजी' : 'Bartending & Mixology' },
    { id: 'barista', label: lang === 'np' ? 'बारिष्टा तथा कफी कला' : 'Barista & Coffee' },
    { id: 'flair', label: lang === 'np' ? 'फ्लेयर बारटेन्डिङ' : 'Flair Bartending' },
    { id: 'advanced', label: lang === 'np' ? 'मोलिक्युलर र म्यानेजमेन्ट' : 'Molecular & Management' },
  ];

  return (
    <section id="programs" className={`py-20 transition-colors duration-300 ${
      theme === 'dark' ? 'bg-[#0a0a0a] text-white border-t border-white/10' : 'bg-slate-50 text-slate-900 border-t border-slate-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/10 text-[#D4AF37] text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            <Award className="w-3.5 h-3.5" />
            <span>{lang === 'np' ? 'व्यावसायिक तालिम पाठ्यक्रम' : 'Professional Training Programs'}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-light mb-4">
            {lang === 'np' ? (
              <>
                आफ्नो <span className="italic font-normal text-[#D4AF37]">भविष्य</span> रोज्नुहोस्
              </>
            ) : (
              <>
                Choose Your <span className="italic font-normal text-[#D4AF37]">Craft & Career</span> Path
              </>
            )}
          </h2>
          <p className={`text-sm sm:text-base ${theme === 'dark' ? 'text-white/60' : 'text-slate-600'}`}>
            {lang === 'np'
              ? 'बार एकेडेमी तरहराका सबै तालिम १००% प्रक्टिकल ल्याब, आधुनिक सामाग्री र नेपाल तथा वैदेशिक रोजगार सहजीकरण सहित सञ्चालन हुन्छन्।'
              : 'All programs feature hands-on station training, complete spirit & coffee supplies, and CTEVT-aligned international diplomas.'}
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-5 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-[#D4AF37] text-black font-bold shadow-lg shadow-[#D4AF37]/20 scale-105'
                  : theme === 'dark'
                    ? 'bg-white/5 border border-white/10 text-white/70 hover:bg-white/10 hover:text-white'
                    : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100 hover:text-slate-900 shadow-xs'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className={`group relative rounded-2xl border overflow-hidden flex flex-col justify-between transition-all duration-300 hover:border-[#D4AF37] hover:shadow-xl ${
                theme === 'dark'
                  ? 'bg-[#111111] border-white/10 shadow-lg'
                  : 'bg-white border-slate-200 shadow-md'
              }`}
            >
              {/* Popular Tag */}
              {course.popular && (
                <div className="absolute top-4 right-4 z-20 bg-gradient-to-r from-[#D4AF37] to-[#B8860B] text-black text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-md flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  <span>{lang === 'np' ? 'सर्वाधिक लोकप्रिय' : 'Most Popular'}</span>
                </div>
              )}

              <div>
                {/* Course Image */}
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={course.image}
                    alt={course.title[lang]}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                  
                  {/* Fee Overlay Badge */}
                  <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-md border border-[#D4AF37]/40 rounded-lg px-3 py-1.5 text-xs font-bold text-[#D4AF37] flex items-center gap-2">
                    <span>रू {course.feeNpr.toLocaleString()} NPR</span>
                    <span className="text-white/40">|</span>
                    <span className="text-white/80">${course.feeUsd} USD</span>
                  </div>
                </div>

                {/* Course Details */}
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-[#D4AF37] font-semibold mb-2 uppercase tracking-wider">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {course.duration[lang]}
                    </span>
                  </div>

                  <h3 className={`text-2xl font-serif font-bold mb-3 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                    {course.title[lang]}
                  </h3>

                  <p className={`text-xs sm:text-sm leading-relaxed mb-6 ${theme === 'dark' ? 'text-white/60' : 'text-slate-600'}`}>
                    {course.summary[lang]}
                  </p>

                  {/* Highlights Bullet points */}
                  <div className="space-y-2 mb-6">
                    <p className="text-[11px] uppercase tracking-widest font-bold text-[#D4AF37]">
                      {lang === 'np' ? 'तालिमका मुख्य विशेषताहरू:' : 'Key Course Highlights:'}
                    </p>
                    {course.highlights[lang].map((hl, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs">
                        <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                        <span className={theme === 'dark' ? 'text-white/80' : 'text-slate-700'}>{hl}</span>
                      </div>
                    ))}
                  </div>

                  <div className={`p-3 rounded-lg border text-xs mb-6 ${
                    theme === 'dark' ? 'bg-white/5 border-white/10 text-white/70' : 'bg-slate-100 border-slate-200 text-slate-700'
                  }`}>
                    <span className="font-semibold text-[#D4AF37]">{lang === 'np' ? 'ब्याच समय:' : 'Batch Times:'} </span>
                    {course.batches[lang]}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-6 pt-0 flex items-center gap-3">
                <button
                  onClick={() => setActiveCourseModal(course)}
                  className={`flex-1 py-3 rounded-xl border text-xs font-semibold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    theme === 'dark'
                      ? 'border-white/20 text-white hover:bg-white/10 hover:border-[#D4AF37]'
                      : 'border-slate-300 text-slate-800 hover:bg-slate-100 hover:border-slate-400'
                  }`}
                >
                  <BookOpen className="w-4 h-4 text-[#D4AF37]" />
                  <span>{lang === 'np' ? 'पाठ्यक्रम हेर्नुहोस्' : 'View Syllabus'}</span>
                </button>

                <button
                  onClick={() => onOpenEnroll(course.id)}
                  className="flex-1 py-3 bg-[#D4AF37] hover:bg-[#c29f2f] text-black font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>{lang === 'np' ? 'भर्ना हुनुहोस्' : 'Enroll Now'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Syllabus Modal Dialog */}
      {activeCourseModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className={`relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl border p-6 sm:p-8 shadow-2xl ${
            theme === 'dark' ? 'bg-[#121212] border-[#D4AF37]/50 text-white' : 'bg-white border-slate-300 text-slate-900'
          }`}>
            
            <button
              onClick={() => setActiveCourseModal(null)}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/10 text-white/70 hover:text-white"
            >
              ✕
            </button>

            <div className="mb-6">
              <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-bold">
                {lang === 'np' ? 'विस्तृत पाठ्यक्रम' : 'Detailed Curriculum Breakdown'}
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold mt-1">
                {activeCourseModal.title[lang]}
              </h3>
              <p className="text-xs text-white/60 mt-1">
                {activeCourseModal.duration[lang]} | Fee: रू {activeCourseModal.feeNpr.toLocaleString()} NPR (${activeCourseModal.feeUsd} USD)
              </p>
            </div>

            <div className="space-y-4 mb-8">
              {activeCourseModal.syllabus.map((s, i) => (
                <div key={i} className={`p-4 rounded-xl border ${
                  theme === 'dark' ? 'bg-white/5 border-white/10' : 'bg-slate-50 border-slate-200'
                }`}>
                  <div className="flex items-center gap-2 text-xs font-bold text-[#D4AF37] mb-1">
                    <span className="px-2 py-0.5 rounded bg-[#D4AF37]/20 border border-[#D4AF37]/40">
                      {s.week}
                    </span>
                    <h4>{s.topic[lang]}</h4>
                  </div>
                  <p className={`text-xs leading-relaxed ${theme === 'dark' ? 'text-white/70' : 'text-slate-600'}`}>
                    {s.details[lang]}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10">
              <div className="text-xs text-white/50">
                {lang === 'np' ? '* सामाग्री र प्रमाणपत्र सहित पूर्ण शुल्क' : '* All inclusive of materials & diploma certificate'}
              </div>
              <button
                onClick={() => {
                  const courseId = activeCourseModal.id;
                  setActiveCourseModal(null);
                  onOpenEnroll(courseId);
                }}
                className="px-6 py-3 bg-[#D4AF37] hover:brightness-110 text-black font-bold text-xs uppercase tracking-widest rounded-xl transition-all shadow-lg"
              >
                {lang === 'np' ? 'यस तालिममा भर्ना आवेदन दिनुहोस्' : 'Apply for this Course'}
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
