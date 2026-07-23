'use client';

import React, { useState } from 'react';
import { Language, ACADEMY_INFO } from '@/lib/data';
import { MapPin, Phone, Mail, Clock, Send, Facebook, Instagram, ExternalLink, CheckCircle2 } from 'lucide-react';

interface ContactLocationProps {
  theme: 'dark' | 'light';
  lang: Language;
}

export default function ContactLocation({ theme, lang }: ContactLocationProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  function handleSendInquiry(e: React.FormEvent) {
    e.preventDefault();
    if (!name || !phone) return;
    setSent(true);
  }

  return (
    <section id="contact" className={`py-20 border-t transition-colors duration-300 ${
      theme === 'dark' ? 'bg-[#050505] text-white border-white/10' : 'bg-white text-slate-900 border-slate-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#D4AF37]/50 bg-[#D4AF37]/10 text-[#D4AF37] text-xs font-bold uppercase tracking-[0.2em] mb-4">
            <MapPin className="w-3.5 h-3.5" />
            <span>{lang === 'np' ? 'स्थान र सम्पर्क' : 'Location & Direct Contact'}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-light mb-4">
            {lang === 'np' ? (
              <>
                एकेडेमीमा <span className="italic font-normal text-[#D4AF37]">भिजिट</span> गर्नुहोस्
              </>
            ) : (
              <>
                Visit <span className="italic font-normal text-[#D4AF37]">Bar Academy Tarahara</span>
              </>
            )}
          </h2>
          <p className={`text-sm sm:text-base ${theme === 'dark' ? 'text-white/60' : 'text-slate-600'}`}>
            {lang === 'np'
              ? 'हामी इटहरी-२, तरहरा चोक (धरान-इटहरी राजमार्ग) मा अवस्थित छौँ। प्रत्यक्ष ल्याब अवलोकनका लागि जुनसुकै समयमा आउन सक्नुहुन्छ।'
              : 'Located on the Dharan-Itahari Highway at Tarahara Chowk, Sunsari. Walk in anytime during business hours for a live lab tour.'}
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Info & Map (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Contact Details Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              
              <div className={`p-5 rounded-2xl border flex items-start gap-4 ${
                theme === 'dark' ? 'bg-[#111111] border-white/10' : 'bg-slate-50 border-slate-200 shadow-sm'
              }`}>
                <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/20 border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold uppercase tracking-wider text-[#D4AF37] mb-1">
                    {lang === 'np' ? 'ठेगाना (Address):' : 'Location:'}
                  </h4>
                  <p className={theme === 'dark' ? 'text-white/80' : 'text-slate-700'}>
                    {ACADEMY_INFO.address[lang]}
                  </p>
                </div>
              </div>

              <div className={`p-5 rounded-2xl border flex items-start gap-4 ${
                theme === 'dark' ? 'bg-[#111111] border-white/10' : 'bg-slate-50 border-slate-200 shadow-sm'
              }`}>
                <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/20 border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold uppercase tracking-wider text-[#D4AF37] mb-1">
                    {lang === 'np' ? 'फोन नम्बर (Phone):' : 'Phone / WhatsApp:'}
                  </h4>
                  <p className={`font-mono ${theme === 'dark' ? 'text-white/80' : 'text-slate-700'}`}>
                    {ACADEMY_INFO.phone1} <br />
                    {ACADEMY_INFO.phone2}
                  </p>
                </div>
              </div>

            </div>

            {/* Social Links */}
            <div className={`p-5 rounded-2xl border flex flex-wrap items-center justify-between gap-4 text-xs ${
              theme === 'dark' ? 'bg-[#111111] border-white/10' : 'bg-slate-50 border-slate-200'
            }`}>
              <div className="flex items-center gap-2">
                <span className="font-bold text-[#D4AF37] uppercase tracking-wider">
                  {lang === 'np' ? 'सामाजिक सञ्जालहरू:' : 'Connect on Socials:'}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={ACADEMY_INFO.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 bg-[#1877F2]/20 border border-[#1877F2]/40 text-[#1877F2] font-semibold rounded-lg flex items-center gap-2 hover:bg-[#1877F2] hover:text-white transition-all"
                >
                  <Facebook className="w-4 h-4" />
                  <span>Facebook Profile</span>
                </a>

                <a
                  href={ACADEMY_INFO.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 bg-[#E4405F]/20 border border-[#E4405F]/40 text-[#E4405F] font-semibold rounded-lg flex items-center gap-2 hover:bg-[#E4405F] hover:text-white transition-all"
                >
                  <Instagram className="w-4 h-4" />
                  <span>@bar_academy_</span>
                </a>
              </div>
            </div>

            {/* Google Map Embed */}
            <div className="rounded-2xl border border-[#D4AF37]/30 overflow-hidden h-[300px] sm:h-[350px] relative shadow-lg">
              <iframe
                title="Bar Academy Tarahara Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3568.123!2d87.2694582!3d26.7087126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ef6b004819645d%3A0xbed5a7368680fa9e!2sBar%20Academy%20Tarahara!5e0!3m2!1sen!2snp!4v1700000000000!5m2!1sen!2snp"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <a
                href={ACADEMY_INFO.googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="absolute top-3 right-3 bg-black/80 backdrop-blur-md text-[#D4AF37] border border-[#D4AF37]/50 px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 hover:bg-black"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

          {/* Quick Inquiry Form (5 cols) */}
          <div className={`lg:col-span-5 p-6 sm:p-8 rounded-2xl border ${
            theme === 'dark' ? 'bg-[#111111] border-white/10' : 'bg-slate-50 border-slate-200 shadow-xl'
          }`}>
            <h3 className="text-xl font-serif font-bold text-[#D4AF37] mb-2">
              {lang === 'np' ? 'तुरुन्त सोधपुछ फारम' : 'Quick Inquiry Form'}
            </h3>
            <p className={`text-xs mb-6 ${theme === 'dark' ? 'text-white/60' : 'text-slate-600'}`}>
              {lang === 'np'
                ? 'तपाईंका जिज्ञासा वा भर्ना सम्बन्धी सोधपुछ पठाउनुहोस्। एकेडेमीले छिट्टै सम्पर्क गर्नेछ।'
                : 'Send us a direct message regarding course fees, batch availability, or lab tour appointments.'}
            </p>

            {!sent ? (
              <form onSubmit={handleSendInquiry} className="space-y-4 text-xs">
                <div>
                  <label className="font-semibold uppercase tracking-wider text-white/70 block mb-1">
                    {lang === 'np' ? 'तपाईंको नाम (Your Name):' : 'Your Name:'} *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Anish Thapa"
                    className={`w-full p-3 rounded-xl border outline-none ${
                      theme === 'dark' ? 'bg-[#1a1a1a] border-white/20 text-white' : 'bg-white border-slate-300 text-slate-900'
                    }`}
                  />
                </div>

                <div>
                  <label className="font-semibold uppercase tracking-wider text-white/70 block mb-1">
                    {lang === 'np' ? 'फोन नम्बर (Phone Number):' : 'Phone / Mobile:'} *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="9801234567"
                    className={`w-full p-3 rounded-xl border outline-none ${
                      theme === 'dark' ? 'bg-[#1a1a1a] border-white/20 text-white' : 'bg-white border-slate-300 text-slate-900'
                    }`}
                  />
                </div>

                <div>
                  <label className="font-semibold uppercase tracking-wider text-white/70 block mb-1">
                    {lang === 'np' ? 'सन्देश/जिज्ञासा (Message):' : 'Message / Questions:'}
                  </label>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={lang === 'np' ? 'म बारटेन्डिङ कोर्स सम्बन्धी जानकारी लिन चाहन्छु...' : 'I want to ask about morning batch timings...'}
                    className={`w-full p-3 rounded-xl border outline-none ${
                      theme === 'dark' ? 'bg-[#1a1a1a] border-white/20 text-white' : 'bg-white border-slate-300 text-slate-900'
                    }`}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#D4AF37] hover:brightness-110 text-black font-bold uppercase tracking-widest rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>{lang === 'np' ? 'सोधपुछ पठाउनुहोस्' : 'Send Message'}</span>
                </button>
              </form>
            ) : (
              <div className="py-8 text-center">
                <CheckCircle2 className="w-12 h-12 text-[#D4AF37] mx-auto mb-3" />
                <h4 className="text-lg font-bold mb-1">
                  {lang === 'np' ? 'सोधपुछ सन्देश प्राप्त भयो' : 'Inquiry Received!'}
                </h4>
                <p className="text-xs text-white/70 mb-4">
                  {lang === 'np'
                    ? 'धन्यवाद! बार एकेडेमी तरहराको टोलीले तपाईंलाई फोनमा सम्पर्क गर्नेछ।'
                    : 'Thank you for reaching out. Our admissions counselor will call you shortly.'}
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="text-xs text-[#D4AF37] underline"
                >
                  Send another message
                </button>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
