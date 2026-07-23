'use client';

import React, { useState } from 'react';
import { Language, VERIFIED_CERTIFICATES } from '@/lib/data';
import { ShieldCheck, Search, Award, CheckCircle2, AlertTriangle } from 'lucide-react';

interface CertificateVerifierProps {
  theme: 'dark' | 'light';
  lang: Language;
}

export default function CertificateVerifier({ theme, lang }: CertificateVerifierProps) {
  const [code, setCode] = useState<string>('BAT-2025-1082');
  const [result, setResult] = useState<any>(null);
  const [searched, setSearched] = useState<boolean>(false);

  function handleVerify(e: React.FormEvent) {
    e.preventDefault();
    setSearched(true);
    const cleanCode = code.trim().toUpperCase();
    const found = VERIFIED_CERTIFICATES.find((c) => c.code === cleanCode);
    setResult(found || null);
  }

  return (
    <section id="verify" className={`py-20 border-t transition-colors duration-300 ${
      theme === 'dark' ? 'bg-[#0a0a0a] text-white border-white/10' : 'bg-slate-50 text-slate-900 border-slate-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#D4AF37]/50 bg-[#D4AF37]/10 text-[#D4AF37] text-xs font-bold uppercase tracking-[0.2em] mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>{lang === 'np' ? 'प्रमाणपत्र अनलाइन जाँच' : 'Diploma Verification Portal'}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-light mb-4">
            {lang === 'np' ? (
              <>
                अन्तर्राष्ट्रिय <span className="italic font-normal text-[#D4AF37]">प्रमाणपत्र</span> भेरिफिकेसन
              </>
            ) : (
              <>
                Verify Graduate <span className="italic font-normal text-[#D4AF37]">Certificates</span>
              </>
            )}
          </h2>
          <p className={`text-sm sm:text-base ${theme === 'dark' ? 'text-white/60' : 'text-slate-600'}`}>
            {lang === 'np'
              ? 'अन्तर्राष्ट्रिय रोजगारदाता तथा होटलहरूका लागि अनलाइन प्रमाणपत्र भेरिफिकेसन। प्रमाणपत्रमा रहेको कोड राखेर जाँच गर्नुहोस्।'
              : 'Global employers and hotel recruiters can instantly verify student credentials issued by Bar Academy Tarahara.'}
          </p>
        </div>

        {/* Verification Form Card */}
        <div className="max-w-2xl mx-auto">
          <div className={`p-6 sm:p-8 rounded-2xl border mb-8 ${
            theme === 'dark' ? 'bg-[#111111] border-white/10' : 'bg-white border-slate-200 shadow-xl'
          }`}>
            <form onSubmit={handleVerify} className="space-y-4">
              <label className="text-xs font-semibold uppercase tracking-wider text-[#D4AF37] block">
                {lang === 'np' ? 'प्रमाणपत्र कोड राख्नुहोस् (Enter Certificate ID):' : 'Enter Certificate Reference Code:'}
              </label>

              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="text"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  placeholder="e.g. BAT-2025-1082"
                  className={`flex-1 p-3.5 rounded-xl border text-sm font-mono tracking-widest outline-none uppercase ${
                    theme === 'dark' ? 'bg-[#1a1a1a] border-white/20 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'
                  }`}
                />
                <button
                  type="submit"
                  className="px-8 py-3.5 bg-[#D4AF37] hover:brightness-110 text-black font-bold text-xs uppercase tracking-widest rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Search className="w-4 h-4" />
                  <span>{lang === 'np' ? 'जाँच गर्नुहोस्' : 'Verify Certificate'}</span>
                </button>
              </div>

              <div className="text-[11px] text-white/50 flex flex-wrap gap-2 pt-2">
                <span>Sample Codes:</span>
                <button type="button" onClick={() => setCode('BAT-2025-1082')} className="text-[#D4AF37] underline">BAT-2025-1082</button>
                <button type="button" onClick={() => setCode('BAT-2025-4091')} className="text-[#D4AF37] underline">BAT-2025-4091</button>
                <button type="button" onClick={() => setCode('BAT-2024-8820')} className="text-[#D4AF37] underline">BAT-2024-8820</button>
              </div>
            </form>
          </div>

          {/* Verification Results Display */}
          {searched && (
            result ? (
              <div className="p-6 sm:p-8 rounded-2xl border border-emerald-500/40 bg-emerald-500/10 text-white animate-fade-in relative overflow-hidden">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/20 border border-emerald-500 flex items-center justify-center text-emerald-400">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">
                      OFFICIALLY VERIFIED CREDENTIAL
                    </span>
                    <h4 className="text-xl font-serif font-bold text-white">
                      {result.studentName}
                    </h4>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs pt-4 border-t border-emerald-500/30">
                  <div>
                    <span className="text-white/60 block">Course Completed:</span>
                    <strong className="text-emerald-300">{result.courseName[lang]}</strong>
                  </div>
                  <div>
                    <span className="text-white/60 block">Certificate Code:</span>
                    <strong className="font-mono text-emerald-300">{result.code}</strong>
                  </div>
                  <div>
                    <span className="text-white/60 block">Completion Date:</span>
                    <span>{result.completionDate}</span>
                  </div>
                  <div>
                    <span className="text-white/60 block">Grade Distinction:</span>
                    <span className="font-bold text-emerald-400">{result.grade}</span>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-emerald-500/20 text-[10px] text-white/60 flex items-center justify-between">
                  <span>Issued by: Bar Academy Tarahara, Sunsari, Nepal</span>
                  <span>CTEVT Aligned Standard</span>
                </div>
              </div>
            ) : (
              <div className="p-6 rounded-2xl border border-amber-500/40 bg-amber-500/10 text-white text-center">
                <AlertTriangle className="w-8 h-8 text-amber-400 mx-auto mb-2" />
                <h4 className="text-base font-bold text-amber-300 mb-1">
                  {lang === 'np' ? 'प्रमाणपत्र भेटिएन' : 'No Credential Found'}
                </h4>
                <p className="text-xs text-white/70">
                  {lang === 'np'
                    ? 'कृपया राखिएको प्रमाणपत्र कोड पुनः जाँच गर्नुहोस्। थप जानकारीका लागि एकेडेमीमा सम्पर्क गर्नुहोस्।'
                    : 'Please double-check the certificate ID or contact Bar Academy Tarahara administration.'}
                </p>
              </div>
            )
          )}
        </div>

      </div>
    </section>
  );
}
