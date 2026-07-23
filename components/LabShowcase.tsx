'use client';

import React, { useState } from 'react';
import { Language } from '@/lib/data';
import { Sparkles, Shield, Flame, Coffee, Wine, Check } from 'lucide-react';
import Image from 'next/image';

interface LabShowcaseProps {
  theme: 'dark' | 'light';
  lang: Language;
}

export default function LabShowcase({ theme, lang }: LabShowcaseProps) {
  const [activeTab, setActiveTab] = useState<number>(0);

  const labs = [
    {
      title: { en: 'Mixology & Cocktail Station', np: 'मिक्सोलोजी तथा ककटेल ल्याब' },
      image: '/images/hero_bar_academy_1784797795228.jpg',
      icon: Wine,
      desc: {
        en: 'Equipped with 10 individual student workstations, speed pouring rails, ice bins, crystal glassware, and over 50 real liquor & juice practice bottles.',
        np: '१० वटा छुट्टाछुट्टै विद्यार्थी वर्कस्टेशन, स्पीड पोरिङ रेल, आइस बिन, किस्टल्स गिलासो र ५०+ रक्सी/ज्युस सामाग्रीसहितको ल्याब।',
      },
      features: {
        en: ['Individual Student Workstations', '50+ Spirits & Mixers Provided', 'Commercial Ice Crusher & Blenders', 'Speed Pouring Calibration Systems'],
        np: ['व्यक्तिगत वर्कस्टेशन', '५०+ रक्सी तथा मिक्सर सामाग्री', 'कमर्सियल आइस क्रसर र ब्लेन्डर', 'स्पीड पोरिङ मापन प्रणाली']
      }
    },
    {
      title: { en: 'Commercial Espresso & Barista Studio', np: 'कमर्सियल एस्प्रेसो र बारिष्टा स्टुडियो' },
      image: '/images/barista_coffee_art_1784797823366.jpg',
      icon: Coffee,
      desc: {
        en: 'Dual-group commercial espresso machines, precision burr grinders, fresh specialty coffee beans, and fresh dairy milk for unlimited latte art practice.',
        np: 'डुअल-ग्रुप कमर्सियल एस्प्रेसो मेसिन, बर् ग्राइन्डर, ताजा कफी बीन्स र असीमित लाते आर्ट अभ्यासका लागि ताजा दूध।',
      },
      features: {
        en: ['Dual-Group Espresso Machine', 'On-Demand Precision Burr Grinders', 'Unlimited Fresh Milk for Latte Art', 'V60, Chemex & Aeropress Brewing Tools'],
        np: ['डुअल-ग्रुप एस्प्रेसो मेसिन', 'अन-डिमान्ड बर् ग्राइन्डर', 'असीमित दूध अभ्यास', 'V60 र एरोप्रेस म्यानुअल ड्रिप']
      }
    },
    {
      title: { en: 'Exhibition Flair Bartending Arena', np: 'एक्जिभिसन फ्लेयर बारटेन्डिङ एरेना' },
      image: '/images/flair_bartending_class_1784797809525.jpg',
      icon: Flame,
      desc: {
        en: 'Shock-absorbing rubber safety floor matting, unbreakable practice bottles, high-ceiling studio, and mirror wall for posture correction.',
        np: 'रबर सेफ्टी म्याट, नफुट्ने प्राक्टिस बोतल, अग्लो सिलिङ र ऐना भएको फ्लेयर एरेना।',
      },
      features: {
        en: ['High Impact Safety Matting', 'Weighted Flair Practice Bottles', 'Full Height Practice Mirrors', 'Stage Lighting & Choreography Music System'],
        np: ['रबर सेफ्टी भुइँ', 'वेटेड फ्लेयर प्राक्टिस बोटल्स', 'ऐना भएको प्रक्टिस पर्खाल', 'स्टेज लाइटिङ र म्युजिक सिस्टम']
      }
    },
    {
      title: { en: 'Molecular Cocktail Lab', np: 'मोलिक्युलर ककटेल प्रयोगशाला' },
      image: '/images/cocktail_mixology_craft_1784797837528.jpg',
      icon: Sparkles,
      desc: {
        en: 'Wood-smoke guns, spherification sodium baths, food dehydrators, and clarify centrifuges for high-end craft cocktail innovation.',
        np: 'वुड-स्मोक गन, स्फेरिफिकेसन बाथ, फुड डिहाइड्रेटर र क्लेरिफिकेसन प्रविधिसहितको आधुनिक ल्याब।',
      },
      features: {
        en: ['Aromatic Smoke Infusion Guns', 'Caviar Pearl Spherification Kits', 'Dehydrated Fruit Garnishing Units', 'Milk Punch Clarification Equipment'],
        np: ['एरोम्याटिक स्मोक गन', 'क्याभियर पर्ल स्फेरिफिकेसन किट', 'सुख्खा फलफूल गार्निसिङ', 'मिल्क पञ्च क्लेरिफिकेसन सामाग्री']
      }
    }
  ];

  const currentLab = labs[activeTab];

  return (
    <section id="labs" className={`py-20 border-t transition-colors duration-300 ${
      theme === 'dark' ? 'bg-[#050505] text-white border-white/10' : 'bg-white text-slate-900 border-slate-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/10 text-[#D4AF37] text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            <Shield className="w-3.5 h-3.5" />
            <span>{lang === 'np' ? 'अत्याधुनिक प्रयोगशाला' : 'State-of-the-Art Practical Labs'}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-light mb-4">
            {lang === 'np' ? (
              <>
                १००% <span className="italic font-normal text-[#D4AF37]">प्रक्टिकल</span> ल्याब सिकाइ
              </>
            ) : (
              <>
                Train in World-Class <span className="italic font-normal text-[#D4AF37]">Simulated Bars</span>
              </>
            )}
          </h2>
          <p className={`text-sm sm:text-base ${theme === 'dark' ? 'text-white/60' : 'text-slate-600'}`}>
            {lang === 'np'
              ? 'हामी सिद्धान्तमा मात्र सीमित रहँदैनौँ। तरहरा एकेडेमीमा प्रत्येक विद्यार्थीले छुट्टाछुट्टै वर्कस्टेशनमा काम गर्ने अवसर पाउँछन्।'
              : 'We believe true mastery comes from hands-on repetition. Every student gets dedicated station time with authentic tools and ingredients.'}
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
          {labs.map((lab, idx) => {
            const Icon = lab.icon;
            return (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`p-4 rounded-xl border text-left transition-all flex flex-col justify-between gap-3 cursor-pointer ${
                  activeTab === idx
                    ? 'bg-[#D4AF37] text-black border-[#D4AF37] shadow-lg font-bold scale-[1.02]'
                    : theme === 'dark'
                      ? 'bg-[#111111] border-white/10 text-white/70 hover:bg-white/10'
                      : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                }`}
              >
                <Icon className={`w-6 h-6 ${activeTab === idx ? 'text-black' : 'text-[#D4AF37]'}`} />
                <span className="text-xs font-semibold uppercase tracking-wider">{lab.title[lang]}</span>
              </button>
            );
          })}
        </div>

        {/* Lab Content Spotlight */}
        <div className={`rounded-2xl border overflow-hidden p-6 sm:p-10 ${
          theme === 'dark' ? 'bg-[#111111] border-white/10' : 'bg-slate-50 border-slate-200 shadow-lg'
        }`}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7">
              <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#D4AF37] mb-2 block">
                {lang === 'np' ? 'ल्याब विशेषताहरू' : 'Lab Specifications'}
              </span>
              <h3 className={`text-2xl sm:text-4xl font-serif font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                {currentLab.title[lang]}
              </h3>
              <p className={`text-sm sm:text-base leading-relaxed mb-6 ${theme === 'dark' ? 'text-white/70' : 'text-slate-600'}`}>
                {currentLab.desc[lang]}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {currentLab.features[lang].map((f, i) => (
                  <div key={i} className={`p-3 rounded-lg border text-xs flex items-center gap-2 ${
                    theme === 'dark' ? 'bg-white/5 border-white/10 text-white/90' : 'bg-white border-slate-200 text-slate-800'
                  }`}>
                    <Check className="w-4 h-4 text-[#D4AF37] shrink-0" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 relative h-[320px] sm:h-[380px] rounded-xl overflow-hidden border border-[#D4AF37]/30 shadow-xl">
              <Image
                src={currentLab.image}
                alt={currentLab.title[lang]}
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-xs text-white/80 font-serif italic">
                {lang === 'np' ? 'बार एकेडेमी तरहरा - प्रक्टिकल ल्याब' : 'Bar Academy Tarahara - Real Lab Facility'}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
