'use client';

import React, { useState } from 'react';
import { Language } from '@/lib/data';
import { Compass, GraduationCap, Globe2, Briefcase, Sparkles, RefreshCw, CheckCircle2, ArrowRight } from 'lucide-react';

interface AICareerAdvisorProps {
  theme: 'dark' | 'light';
  lang: Language;
  onOpenEnroll: (courseId?: string) => void;
}

export default function AICareerAdvisor({ theme, lang, onOpenEnroll }: AICareerAdvisorProps) {
  const [goal, setGoal] = useState<string>('Job in Dubai / Gulf 5-Star Hotel');
  const [background, setBackground] = useState<string>('SEE / +2 Passed (Beginner with zero experience)');
  const [timeCommitment, setTimeCommitment] = useState<string>('6 Weeks (Full Time)');
  const [targetCountry, setTargetCountry] = useState<string>('UAE / Dubai / Qatar');
  const [loading, setLoading] = useState<boolean>(false);
  const [recommendation, setRecommendation] = useState<any>(null);

  const goalsList = [
    'Job in Dubai / Gulf 5-Star Hotel',
    'Cruise Ship Bartending / European Hospitality',
    'Opening my own Coffee Shop / Café in Nepal',
    'Fast-Track Career abroad (Australia / Europe)',
    'Mastering Flair Bartending & Competition Showmanship'
  ];

  const backgroundsList = [
    'SEE / +2 Passed (Beginner with zero experience)',
    'Hotel Management Student (BHM / DHM)',
    'Currently working in local restaurant / cafe',
    'Planning for abroad study / working visa'
  ];

  const countriesList = [
    'UAE / Dubai / Qatar',
    'European Union / Cruise Ship',
    'Nepal (Kathmandu / Pokhara / Itahari)',
    'Australia / Canada / UK'
  ];

  async function handleGetAdvice() {
    setLoading(true);
    try {
      const res = await fetch('/api/gemini/advisor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          goal,
          background,
          timeCommitment,
          targetCountry,
          language: lang,
        }),
      });

      const data = await res.json();
      if (data.success && data.recommendation) {
        setRecommendation(data.recommendation);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="career-advisor" className={`py-20 transition-colors duration-300 ${
      theme === 'dark' ? 'bg-[#050505] text-white border-t border-white/10' : 'bg-white text-slate-900 border-t border-slate-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#D4AF37]/50 bg-[#D4AF37]/10 text-[#D4AF37] text-xs font-bold uppercase tracking-[0.2em] mb-4">
            <Compass className="w-3.5 h-3.5" />
            <span>{lang === 'np' ? 'AI करियर काउन्सिलर' : 'AI Career Counselor'}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-light mb-4">
            {lang === 'np' ? (
              <>
                आफ्नो <span className="italic font-normal text-[#D4AF37]">लक्ष्य</span> अनुसारको कोर्स पत्ता लगाउनुहोस्
              </>
            ) : (
              <>
                Find Your Ideal <span className="italic font-normal text-[#D4AF37]">Career Pathway</span>
              </>
            )}
          </h2>
          <p className={`text-sm sm:text-base ${theme === 'dark' ? 'text-white/60' : 'text-slate-600'}`}>
            {lang === 'np'
              ? 'आफ्नो शैक्षिक पृष्ठभूमि, समय र वैदेशिक वा स्वदेशी रोजगार लक्ष्य छान्नुहोस्। AI ले तपाईंका लागि सही कोर्स सिफारिस गर्नेछ।'
              : 'Select your career aspiration and timeline. Gemini AI analyzes your background and provides personalized course recommendations and job trajectories.'}
          </p>
        </div>

        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Form (5 cols) */}
          <div className={`lg:col-span-5 p-6 sm:p-8 rounded-2xl border flex flex-col justify-between ${
            theme === 'dark' ? 'bg-[#111111] border-white/10' : 'bg-slate-50 border-slate-200 shadow-md'
          }`}>
            <div className="space-y-5">
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-[#D4AF37] block mb-2">
                  1. {lang === 'np' ? 'मुख्य लक्ष्य (Career Goal):' : 'Career Goal:'}
                </label>
                <select
                  value={goal}
                  onChange={(e) => setGoal(e.target.value)}
                  className={`w-full p-3 rounded-xl border text-xs font-medium outline-none ${
                    theme === 'dark' ? 'bg-[#1a1a1a] border-white/20 text-white' : 'bg-white border-slate-300 text-slate-900'
                  }`}
                >
                  {goalsList.map((g, i) => (
                    <option key={i} value={g}>{g}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-[#D4AF37] block mb-2">
                  2. {lang === 'np' ? 'शैक्षिक अनुभव (Background):' : 'Current Background:'}
                </label>
                <select
                  value={background}
                  onChange={(e) => setBackground(e.target.value)}
                  className={`w-full p-3 rounded-xl border text-xs font-medium outline-none ${
                    theme === 'dark' ? 'bg-[#1a1a1a] border-white/20 text-white' : 'bg-white border-slate-300 text-slate-900'
                  }`}
                >
                  {backgroundsList.map((b, i) => (
                    <option key={i} value={b}>{b}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-[#D4AF37] block mb-2">
                  3. {lang === 'np' ? 'लक्षित देश/स्थान (Target Location):' : 'Target Location:'}
                </label>
                <select
                  value={targetCountry}
                  onChange={(e) => setTargetCountry(e.target.value)}
                  className={`w-full p-3 rounded-xl border text-xs font-medium outline-none ${
                    theme === 'dark' ? 'bg-[#1a1a1a] border-white/20 text-white' : 'bg-white border-slate-300 text-slate-900'
                  }`}
                >
                  {countriesList.map((c, i) => (
                    <option key={i} value={c}>{c}</option>
                  ))}
                </select>
              </div>
            </div>

            <button
              onClick={handleGetAdvice}
              disabled={loading}
              className="mt-6 w-full py-4 bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#B8860B] hover:brightness-110 text-black font-bold text-xs uppercase tracking-[0.2em] rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
            >
              {loading ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  <span>{lang === 'np' ? 'सिफारिस विश्लेषण गर्दैछ...' : 'Analyzing Career Fit...'}</span>
                </>
              ) : (
                <>
                  <Compass className="w-4 h-4" />
                  <span>{lang === 'np' ? 'करियर रोडम्याप हेर्नुहोस्' : 'Get Career Recommendation'}</span>
                </>
              )}
            </button>
          </div>

          {/* Right Recommendation Output (7 cols) */}
          <div className={`lg:col-span-7 p-6 sm:p-8 rounded-2xl border flex flex-col justify-between ${
            theme === 'dark' ? 'bg-[#111111] border-[#D4AF37]/30' : 'bg-white border-slate-200 shadow-xl'
          }`}>
            {recommendation ? (
              <div>
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#D4AF37] uppercase tracking-wider">
                    <GraduationCap className="w-4 h-4" />
                    <span>Bar Academy Tarahara Counselor Analysis</span>
                  </div>
                  <span className="text-xs px-3 py-1 rounded-full bg-[#D4AF37] text-black font-bold">
                    Fit Score: {recommendation.fitScore || '96%'}
                  </span>
                </div>

                <h3 className={`text-2xl sm:text-3xl font-serif font-bold mb-3 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                  {recommendation.recommendedCourse || 'Professional Bartending & Mixology'}
                </h3>

                <p className={`text-xs sm:text-sm leading-relaxed mb-6 ${theme === 'dark' ? 'text-white/80' : 'text-slate-700'}`}>
                  {recommendation.summary}
                </p>

                <div className="mb-6">
                  <h4 className="text-xs uppercase font-bold text-[#D4AF37] tracking-wider mb-2">
                    {lang === 'np' ? 'सिक्नुपर्ने मुख्य सीपहरू:' : 'Key Skills You Will Master:'}
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    {Array.isArray(recommendation.keySkillsToFocus) && recommendation.keySkillsToFocus.map((sk: string, i: number) => (
                      <div key={i} className={`p-2.5 rounded border flex items-center gap-2 ${
                        theme === 'dark' ? 'bg-white/5 border-white/10 text-white' : 'bg-slate-50 border-slate-200 text-slate-800'
                      }`}>
                        <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                        <span>{sk}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {recommendation.careerPath && (
                  <div className={`p-4 rounded-xl border text-xs mb-6 ${
                    theme === 'dark' ? 'bg-white/5 border-white/10 text-white/90' : 'bg-slate-100 border-slate-200 text-slate-800'
                  }`}>
                    <span className="font-bold text-[#D4AF37] block mb-1 uppercase tracking-wider">
                      {lang === 'np' ? 'संभावित करियर यात्रा:' : 'Expected Career Trajectory:'}
                    </span>
                    <p>{recommendation.careerPath}</p>
                  </div>
                )}

                <button
                  onClick={() => onOpenEnroll()}
                  className="w-full py-3.5 bg-[#D4AF37] hover:brightness-110 text-black font-bold text-xs uppercase tracking-widest rounded-xl transition-all shadow-lg flex items-center justify-center gap-2"
                >
                  <span>{lang === 'np' ? 'यस मार्गमा भर्ना हुनुहोस्' : 'Enroll in Recommended Pathway'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <div className="my-auto text-center py-12">
                <Compass className="w-12 h-12 text-[#D4AF37] mx-auto mb-3 opacity-60" />
                <h4 className={`text-lg font-serif font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                  {lang === 'np' ? 'आफ्नो रोजाइ भरेर काउन्सिलर सल्लाह लिनुहोस्' : 'Get Custom Academic Counseling'}
                </h4>
                <p className={`text-xs max-w-sm mx-auto ${theme === 'dark' ? 'text-white/50' : 'text-slate-500'}`}>
                  {lang === 'np'
                    ? 'बायाँतर्फका विकल्पहरू छान्नुहोस् र जेमिनाई AI ले तपाईंका लागि उपयुक्त तालिम मार्ग निर्धारण गर्नेछ।'
                    : 'Select your goals on the left and our AI counselor will match you with the highest ROI training program.'}
                </p>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
