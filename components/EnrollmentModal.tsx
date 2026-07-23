'use client';

import React, { useState } from 'react';
import { Language, COURSES_DATA, ACADEMY_INFO } from '@/lib/data';
import { X, GraduationCap, CheckCircle2, Clock, Phone, Send, Sparkles, Download, Copy, Share2 } from 'lucide-react';

interface EnrollmentModalProps {
  theme: 'dark' | 'light';
  lang: Language;
  preselectedCourseId?: string;
  onClose: () => void;
}

export default function EnrollmentModal({ theme, lang, preselectedCourseId, onClose }: EnrollmentModalProps) {
  const [courseId, setCourseId] = useState<string>(preselectedCourseId || 'pro-bartending');
  const [batch, setBatch] = useState<string>('Morning (7:00 AM - 9:00 AM)');
  const [fullName, setFullName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [city, setCity] = useState<string>('Itahari / Dharan');
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [appId, setAppId] = useState<string>('');

  const selectedCourse = COURSES_DATA.find((c) => c.id === courseId) || COURSES_DATA[0];

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!fullName || !phone) return;
    const generatedId = `BAT-APP-${Math.floor(1000 + Math.random() * 9000)}`;
    setAppId(generatedId);
    setSubmitted(true);
  }

  function getWhatsAppUrl() {
    const text = `Hello Bar Academy Tarahara! I have submitted an online admission application.
Ref ID: ${appId}
Name: ${fullName}
Course: ${selectedCourse.title.en}
Batch: ${batch}
Phone: ${phone}
City: ${city}

Please confirm my seat registration. Thank you!`;
    return `https://wa.me/${ACADEMY_INFO.whatsapp}?text=${encodeURIComponent(text)}`;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className={`relative w-full max-w-2xl my-8 rounded-2xl border p-6 sm:p-8 shadow-2xl transition-all ${
        theme === 'dark' ? 'bg-[#121212] border-[#D4AF37]/50 text-white' : 'bg-white border-slate-300 text-slate-900'
      }`}>
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/10 text-white/70 hover:text-white"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-[#D4AF37] uppercase tracking-widest mb-1">
              <GraduationCap className="w-4 h-4" />
              <span>{lang === 'np' ? 'अनलाइन भर्ना आवेदन फारम' : 'Online Admission Application'}</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold mb-2">
              {lang === 'np' ? 'बार एकेडेमी तरहरामा भर्ना हुनुहोस्' : 'Enroll at Bar Academy Tarahara'}
            </h3>
            <p className={`text-xs mb-6 ${theme === 'dark' ? 'text-white/60' : 'text-slate-600'}`}>
              {lang === 'np'
                ? 'सिफारिस गरिएको ब्याच र आफ्नो विवरण भर्नुहोस्। हाम्रो टोलीले सिट सुरक्षित गर्न तुरुन्त सम्पर्क गर्नेछ।'
                : 'Fill out your application details below. We will confirm your seat allocation for the upcoming intake.'}
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              
              {/* Course Selection */}
              <div>
                <label className="font-semibold uppercase tracking-wider text-[#D4AF37] block mb-1">
                  {lang === 'np' ? 'तालिम छान्नुहोस् (Select Course):' : 'Select Training Program:'}
                </label>
                <select
                  value={courseId}
                  onChange={(e) => setCourseId(e.target.value)}
                  className={`w-full p-3 rounded-xl border font-medium outline-none ${
                    theme === 'dark' ? 'bg-[#1a1a1a] border-white/20 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'
                  }`}
                >
                  {COURSES_DATA.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.title[lang]} — रू {c.feeNpr.toLocaleString()} NPR
                    </option>
                  ))}
                </select>
              </div>

              {/* Batch Timing */}
              <div>
                <label className="font-semibold uppercase tracking-wider text-[#D4AF37] block mb-1">
                  {lang === 'np' ? 'ब्याच समय (Preferred Batch):' : 'Preferred Batch Timing:'}
                </label>
                <select
                  value={batch}
                  onChange={(e) => setBatch(e.target.value)}
                  className={`w-full p-3 rounded-xl border font-medium outline-none ${
                    theme === 'dark' ? 'bg-[#1a1a1a] border-white/20 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'
                  }`}
                >
                  <option value="Morning (7:00 AM - 9:00 AM)">Morning Batch (7:00 AM - 9:00 AM)</option>
                  <option value="Afternoon (1:00 PM - 3:00 PM)">Afternoon Batch (1:00 PM - 3:00 PM)</option>
                  <option value="Evening (4:00 PM - 6:00 PM)">Evening Batch (4:00 PM - 6:00 PM)</option>
                  <option value="Weekend Special (Sat/Sun)">Weekend Special (Sat & Sun)</option>
                </select>
              </div>

              {/* Personal Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-semibold uppercase tracking-wider text-[#D4AF37] block mb-1">
                    {lang === 'np' ? 'पूरा नाम (Full Name):' : 'Full Name:'} *
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Sujan Shrestha"
                    className={`w-full p-3 rounded-xl border outline-none ${
                      theme === 'dark' ? 'bg-[#1a1a1a] border-white/20 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'
                    }`}
                  />
                </div>

                <div>
                  <label className="font-semibold uppercase tracking-wider text-[#D4AF37] block mb-1">
                    {lang === 'np' ? 'मोबाइल नम्बर (Phone Number):' : 'Mobile / WhatsApp Number:'} *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. 9801234567"
                    className={`w-full p-3 rounded-xl border outline-none ${
                      theme === 'dark' ? 'bg-[#1a1a1a] border-white/20 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'
                    }`}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-semibold uppercase tracking-wider text-[#D4AF37] block mb-1">
                    {lang === 'np' ? 'इमेल (Email):' : 'Email Address (Optional):'}
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="student@gmail.com"
                    className={`w-full p-3 rounded-xl border outline-none ${
                      theme === 'dark' ? 'bg-[#1a1a1a] border-white/20 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'
                    }`}
                  />
                </div>

                <div>
                  <label className="font-semibold uppercase tracking-wider text-[#D4AF37] block mb-1">
                    {lang === 'np' ? 'ठेगाना/शहर (Current City):' : 'Current City / District:'}
                  </label>
                  <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="e.g. Tarahara / Itahari / Dharan / Biratnagar"
                    className={`w-full p-3 rounded-xl border outline-none ${
                      theme === 'dark' ? 'bg-[#1a1a1a] border-white/20 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'
                    }`}
                  />
                </div>
              </div>

              {/* Fee Summary */}
              <div className="p-4 rounded-xl border border-[#D4AF37]/30 bg-[#D4AF37]/10 flex items-center justify-between">
                <div>
                  <p className="text-[11px] uppercase tracking-wider text-white/70">
                    {lang === 'np' ? 'कुल तालिम शुल्क (Total Tuition Fee):' : 'Total Program Fee:'}
                  </p>
                  <p className="text-xl font-serif font-bold text-[#D4AF37]">
                    रू {selectedCourse.feeNpr.toLocaleString()} NPR <span className="text-xs text-white/60">(${selectedCourse.feeUsd} USD)</span>
                  </p>
                </div>
                <div className="text-right text-[10px] text-white/60">
                  <p>✓ Materials Included</p>
                  <p>✓ Diploma Included</p>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#B8860B] text-black font-bold text-xs uppercase tracking-[0.2em] rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer"
              >
                <GraduationCap className="w-4 h-4" />
                <span>{lang === 'np' ? 'भर्ना आवेदन बुझाउनुहोस्' : 'Submit Admission Application'}</span>
              </button>
            </form>
          </div>
        ) : (
          /* Confirmation Receipt Card */
          <div className="text-center py-4">
            <div className="w-16 h-16 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37] flex items-center justify-center text-[#D4AF37] mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#D4AF37]">
              {lang === 'np' ? 'आवेदन सफलतापूर्वक दर्ता भयो' : 'Application Registered Successfully!'}
            </span>
            <h3 className="text-2xl font-serif font-bold my-2">
              {lang === 'np' ? 'बधाई छ, ' + fullName : 'Congratulations, ' + fullName}
            </h3>

            {/* Receipt Box */}
            <div className={`my-6 p-6 rounded-2xl border text-left space-y-3 text-xs ${
              theme === 'dark' ? 'bg-white/5 border-white/10' : 'bg-slate-50 border-slate-200'
            }`}>
              <div className="flex justify-between border-b pb-2 border-white/10">
                <span className="text-white/60">Application Ref ID:</span>
                <span className="font-mono font-bold text-[#D4AF37]">{appId}</span>
              </div>
              <div className="flex justify-between border-b pb-2 border-white/10">
                <span className="text-white/60">Course Selected:</span>
                <span className="font-bold">{selectedCourse.title.en}</span>
              </div>
              <div className="flex justify-between border-b pb-2 border-white/10">
                <span className="text-white/60">Batch Time:</span>
                <span>{batch}</span>
              </div>
              <div className="flex justify-between border-b pb-2 border-white/10">
                <span className="text-white/60">Applicant Phone:</span>
                <span>{phone}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/60">Tuition Fee:</span>
                <span className="font-bold text-[#D4AF37]">रू {selectedCourse.feeNpr.toLocaleString()} NPR</span>
              </div>
            </div>

            <p className="text-xs text-white/70 mb-6">
              {lang === 'np'
                ? 'कृपया आफ्नो आवेदन पुष्टि गर्न तलको ह्वाट्सएप बटन थिचेर एकेडेमीलाई मेसेज पठाउनुहोस्।'
                : 'Click below to send your provisional receipt directly to Bar Academy Tarahara via WhatsApp.'}
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-lg flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>{lang === 'np' ? 'व्हाट्सएपमा मेसेज पठाउनुहोस्' : 'Send via WhatsApp'}</span>
              </a>

              <button
                onClick={onClose}
                className="px-6 py-3.5 border border-white/20 text-xs font-semibold uppercase tracking-wider rounded-xl hover:bg-white/10"
              >
                {lang === 'np' ? 'बन्द गर्नुहोस्' : 'Close'}
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
