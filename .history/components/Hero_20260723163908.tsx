"use client";

import React from "react";
import { Language, ACADEMY_INFO } from "@/lib/data";
import {
  Sparkles,
  ArrowRight,
  Award,
  ShieldCheck,
  MapPin,
  Phone,
  Users,
  Flame,
} from "lucide-react";
import Image from "next/image";

interface HeroProps {
  theme: "dark" | "light";
  lang: Language;
  onOpenEnroll: (courseId?: string) => void;
}

export default function Hero({ theme, lang, onOpenEnroll }: HeroProps) {
  return (
    <section
      className={`relative overflow-hidden pt-8 pb-16 lg:pt-16 lg:pb-24 transition-colors duration-300 ${
        theme === "dark" ? "bg-[#050505] text-white" : "bg-slate-900 text-white"
      }`}
    >
      {/* Background Gradient & Light Glow */}
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:24px_24px]" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#D4AF37]/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Eyebrow Badge */}
        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/10 text-[#D4AF37] mb-8 text-xs font-semibold uppercase tracking-[0.25em]">
          <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
          <span>
            {lang === "np"
              ? "कोशी प्रदेश, नेपालको नम्बर १ एकेडेमी"
              : "Premier Academy in Koshi Province, Nepal"}
          </span>
          <span className="opacity-40">|</span>
          <span className="text-white/80 font-normal">Tarahara, Itahari</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Hero Copy (7 cols) */}
          <div className="lg:col-span-7">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-light leading-[1.1] mb-6 tracking-tight">
              {lang === "np" ? (
                <>
                  नेपालको उत्कृष्ट <br />
                  <span className="italic font-normal text-[#D4AF37] underline decoration-[#D4AF37]/30 decoration-wavy">
                    बारटेन्डिङ र बारिष्टा
                  </span>{" "}
                  अकादमी
                </>
              ) : (
                <>
                  Master the Art of <br />
                  <span className="italic font-normal text-[#D4AF37]">
                    Mixology
                  </span>{" "}
                  & Professional Barista
                </>
              )}
            </h1>

            <p className="text-white/70 text-base sm:text-lg leading-relaxed max-w-2xl mb-8 font-sans">
              {lang === "np"
                ? "तरह्रारा, इटहरीमा अवस्थित नेपालको प्रतिष्ठित बार तथा क्याफे तालिम केन्द्र। ५० भन्दा बढी ककटेल रेसिपी, कमर्सियल एस्प्रेसो मेसिन, र फ्लेयर बारटेन्डिङको १००% प्रक्टिकल सिकाइद्वारा स्वदेश तथा वैदेशिक रोजगारीका लागि दक्ष बन्नुहोस्।"
                : "Transforming beverage passion into high-performance careers. Practical training on commercial espresso machines, 50+ classic cocktails, and exhibition flair bartending for global hospitality in Nepal, Dubai, Qatar & Europe."}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-12">
              <button
                onClick={() => onOpenEnroll()}
                className="px-8 py-4 bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#B8860B] hover:brightness-110 text-black font-bold text-xs uppercase tracking-[0.2em] rounded-lg shadow-lg shadow-[#D4AF37]/25 transition-all flex items-center gap-3 cursor-pointer group"
              >
                <span>
                  {lang === "np" ? "भर्ना आवेदन फारम" : "Apply for Next Batch"}
                </span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#ai-studio"
                className="px-6 py-4 bg-white/5 border border-white/20 hover:border-[#D4AF37] hover:bg-white/10 text-white font-semibold text-xs uppercase tracking-[0.15em] rounded-lg transition-all flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                <span>
                  {lang === "np"
                    ? "AI रेसिपी स्टुडियो प्रयोग गर्नुहोस्"
                    : "Try AI Recipe Studio"}
                </span>
              </a>
            </div>

            {/* Live Stats Bar */}
            <div className="pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-6">
              {ACADEMY_INFO.stats.map((st, i) => (
                <div key={i} className="border-l-2 border-[#D4AF37] pl-4">
                  <p className="text-2xl sm:text-3xl font-serif font-bold text-[#D4AF37]">
                    {st.number}
                  </p>
                  <p className="text-[10px] uppercase tracking-wider text-white/60 mt-1">
                    {st.label[lang]}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Featured Card & Visual Stage (5 cols) */}
          <div className="lg:col-span-5 relative">
            {/* Main Image Frame */}
            <div className="relative rounded-2xl overflow-hidden border border-[#D4AF37]/30 shadow-2xl bg-[#111] group">
              <div className="relative h-[420px] sm:h-[480px] w-full">
                <Image
                  src="public\images\hero_bar_academy_1784797795228.jpg"
                  alt="Bar Academy Tarahara Bartending Training Station"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                  priority
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              </div>

              {/* Floating Highlight Tag */}
              <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-md border border-[#D4AF37]/50 rounded-xl p-3 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37]">
                  <Flame className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white">
                    {lang === "np" ? "शीतकालीन भर्ना खुला" : "Admissions Open"}
                  </p>
                  <p className="text-[10px] text-white/60">
                    {lang === "np"
                      ? "सीमित सिटहरू उपलब्ध"
                      : "Limited Batch Seats"}
                  </p>
                </div>
              </div>

              {/* Bottom Card Overlay Info */}
              <div className="absolute bottom-0 inset-x-0 p-6 bg-black/80 backdrop-blur-md border-t border-white/10">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#D4AF37] font-semibold">
                    {lang === "np"
                      ? "प्रमाणित तालिम केन्द्र"
                      : "Certified Training Lab"}
                  </span>
                  <span className="text-xs text-white/60 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                    Tarahara Chowk, Itahari
                  </span>
                </div>
                <h3 className="text-lg font-serif font-bold text-white mb-1">
                  {lang === "np"
                    ? "नेपालको उत्कृष्ट बार एकेडेमी"
                    : "Bar Academy Tarahara Practical Labs"}
                </h3>
                <p className="text-xs text-white/60 line-clamp-2">
                  {lang === "np"
                    ? "अन्तर्राष्ट्रिय मापदण्ड अनुसारको बार काउन्टर, ककटेल सेकर र कमर्सियल कफी मेसिनसहितको ल्याब।"
                    : "Equipped with 10+ student stations, commercial espresso machines, and professional flair bottles."}
                </p>
              </div>
            </div>

            {/* Accent Floating Badge */}
            <div className="hidden sm:flex absolute -bottom-6 -left-6 bg-[#0a0a0a] border border-[#D4AF37] p-4 rounded-xl shadow-xl items-center gap-3">
              <ShieldCheck className="w-8 h-8 text-[#D4AF37]" />
              <div>
                <p className="text-xs font-bold text-white">
                  {lang === "np"
                    ? "१००% रोजगारी सहजीकरण"
                    : "100% Job Placement Assistance"}
                </p>
                <p className="text-[10px] text-white/50">
                  {lang === "np"
                    ? "नेपाल, युएई, कतार र युरोप"
                    : "Nepal, Dubai, Qatar, Maldives & Europe"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
