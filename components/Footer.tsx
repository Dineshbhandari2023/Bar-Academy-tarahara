'use client';

import React from 'react';
import { Language, ACADEMY_INFO } from '@/lib/data';
import { Wine, Facebook, Instagram, Phone, MapPin, Heart, ExternalLink } from 'lucide-react';

interface FooterProps {
  theme: 'dark' | 'light';
  lang: Language;
  onOpenEnroll: (courseId?: string) => void;
}

export default function Footer({ theme, lang, onOpenEnroll }: FooterProps) {
  return (
    <footer className={`border-t transition-colors duration-300 ${
      theme === 'dark' ? 'bg-[#050505] text-white border-white/10' : 'bg-slate-900 text-white border-slate-800'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Col 1: Brand Info (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#D4AF37] rounded-xl flex items-center justify-center text-black font-bold">
                <Wine className="w-6 h-6" />
              </div>
              <span className="text-xl font-serif font-bold tracking-wider uppercase">
                BAR ACADEMY <span className="text-[#D4AF37]">TARAHARA</span>
              </span>
            </div>

            <p className="text-xs text-white/60 leading-relaxed max-w-md">
              {lang === 'np'
                ? 'नेपालको उत्कृष्ट बारटेन्डिङ, बारिष्टा तथा मोलिक्युलर मिक्सोलोजी तालिम केन्द्र। तरहरा, इटहरी, सुनसरी, कोशी प्रदेश।'
                : 'Premier institute for professional bartending, barista coffee craft, exhibition flair, and molecular mixology in Tarahara, Itahari, Nepal.'}
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={ACADEMY_INFO.facebook}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 hover:border-[#D4AF37] hover:text-[#D4AF37] flex items-center justify-center transition-all"
                title="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>

              <a
                href={ACADEMY_INFO.instagram}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 hover:border-[#D4AF37] hover:text-[#D4AF37] flex items-center justify-center transition-all"
                title="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href={ACADEMY_INFO.googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 hover:border-[#D4AF37] hover:text-[#D4AF37] flex items-center justify-center transition-all"
                title="Google Maps"
              >
                <MapPin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Shortcuts (3 cols) */}
          <div className="lg:col-span-3 text-xs space-y-3">
            <h4 className="font-bold uppercase tracking-widest text-[#D4AF37] mb-4">
              {lang === 'np' ? 'मुख्य लिङ्कहरू' : 'Quick Navigation'}
            </h4>
            <ul className="space-y-2.5 text-white/70">
              <li><a href="#programs" className="hover:text-[#D4AF37] transition-colors">{lang === 'np' ? 'तालिम पाठ्यक्रम' : 'Training Programs'}</a></li>
              <li><a href="#labs" className="hover:text-[#D4AF37] transition-colors">{lang === 'np' ? 'प्रयोगशाला अवलोकन' : 'Practical Labs'}</a></li>
              <li><a href="#ai-studio" className="hover:text-[#D4AF37] transition-colors">{lang === 'np' ? 'AI ककटेल स्टुडियो' : 'AI Beverage Studio'}</a></li>
              <li><a href="#career-advisor" className="hover:text-[#D4AF37] transition-colors">{lang === 'np' ? 'करियर काउन्सिलर' : 'Career Counselor'}</a></li>
              <li><a href="#verify" className="hover:text-[#D4AF37] transition-colors">{lang === 'np' ? 'प्रमाणपत्र जाँच' : 'Verify Certificate'}</a></li>
              <li><a href="#contact" className="hover:text-[#D4AF37] transition-colors">{lang === 'np' ? 'सम्पर्क तथा नक्सा' : 'Contact & Location'}</a></li>
            </ul>
          </div>

          {/* Col 3: Accreditation & Admissions (4 cols) */}
          <div className="lg:col-span-4 text-xs space-y-3">
            <h4 className="font-bold uppercase tracking-widest text-[#D4AF37] mb-4">
              {lang === 'np' ? 'भर्ना तथा सम्पर्क' : 'Admissions & Hours'}
            </h4>
            <div className="space-y-2 text-white/70">
              <p><strong className="text-white">Opening Hours:</strong> Mon - Sun (6:30 AM - 6:30 PM)</p>
              <p><strong className="text-white">Location:</strong> Tarahara Chowk, Itahari-2, Sunsari</p>
              <p><strong className="text-white">Phone:</strong> {ACADEMY_INFO.phone1}</p>
              <p><strong className="text-white">Email:</strong> {ACADEMY_INFO.email}</p>
            </div>

            <button
              onClick={() => onOpenEnroll()}
              className="mt-4 w-full py-3 bg-[#D4AF37] text-black font-bold uppercase tracking-widest rounded-xl hover:brightness-110 transition-all text-xs"
            >
              {lang === 'np' ? 'अनलाइन भर्ना फारम' : 'Apply Online Today'}
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-white/40">
          <p>© {new Date().getFullYear()} Bar Academy Tarahara. All Rights Reserved.</p>
          <p className="flex items-center gap-1">
            <span>Crafted for Professional Hospitality in Nepal</span>
            <Heart className="w-3 h-3 text-[#D4AF37] fill-[#D4AF37]" />
          </p>
        </div>

      </div>
    </footer>
  );
}
