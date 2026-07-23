'use client';

import React, { useState } from 'react';
import { Language, ACADEMY_INFO } from '@/lib/data';
import { Sun, Moon, Globe, Wine, Menu, X, GraduationCap, ChevronRight } from 'lucide-react';

interface NavbarProps {
  theme: 'dark' | 'light';
  setTheme: (t: 'dark' | 'light') => void;
  lang: Language;
  setLang: (l: Language) => void;
  onOpenEnroll: (courseId?: string) => void;
}

export default function Navbar({ theme, setTheme, lang, setLang, onOpenEnroll }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '#programs', label: lang === 'np' ? 'कार्यक्रमहरू' : 'Programs' },
    { href: '#labs', label: lang === 'np' ? 'प्रयोगशालाहरू' : 'Our Labs' },
    { href: '#ai-studio', label: lang === 'np' ? 'AI रेसिपी स्टुडियो' : 'AI Recipe Studio' },
    { href: '#career-advisor', label: lang === 'np' ? 'करियर काउन्सिलर' : 'Career Advisor' },
    { href: '#verify', label: lang === 'np' ? 'प्रमाणपत्र जाँच' : 'Verify Certificate' },
    { href: '#contact', label: lang === 'np' ? 'सम्पर्क' : 'Contact' },
  ];

  return (
    <header className={`sticky top-0 z-50 transition-colors duration-300 border-b ${
      theme === 'dark' 
        ? 'bg-[#050505]/90 border-white/10 text-white backdrop-blur-md' 
        : 'bg-white/90 border-slate-200 text-slate-900 backdrop-blur-md shadow-xs'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Brand */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-11 h-11 bg-gradient-to-br from-[#D4AF37] to-[#B8860B] rounded-xl flex items-center justify-center shadow-lg shadow-[#D4AF37]/20 group-hover:scale-105 transition-transform duration-300">
              <Wine className="w-6 h-6 text-black" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-serif font-bold tracking-wider uppercase leading-none">
                BAR ACADEMY <span className="text-[#D4AF37]">TARAHARA</span>
              </span>
              <span className={`text-[10px] tracking-[0.25em] font-medium uppercase mt-1 ${
                theme === 'dark' ? 'text-white/50' : 'text-slate-500'
              }`}>
                {lang === 'np' ? 'इटहरी, नेपाल' : 'Itahari, Sunsari, Nepal'}
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-7 text-xs font-semibold uppercase tracking-[0.15em]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`transition-colors relative py-1 hover:text-[#D4AF37] ${
                  theme === 'dark' ? 'text-white/70' : 'text-slate-600'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Controls: Language Toggle, Theme Toggle & Enroll Button */}
          <div className="hidden sm:flex items-center gap-4">
            
            {/* Language Switcher */}
            <div className={`flex items-center rounded-lg p-1 border text-xs font-semibold ${
              theme === 'dark' ? 'bg-white/5 border-white/10' : 'bg-slate-100 border-slate-200'
            }`}>
              <button
                onClick={() => setLang('en')}
                className={`px-2.5 py-1 rounded-md transition-all flex items-center gap-1 ${
                  lang === 'en'
                    ? 'bg-[#D4AF37] text-black font-bold shadow-xs'
                    : theme === 'dark' ? 'text-white/60 hover:text-white' : 'text-slate-600 hover:text-black'
                }`}
                title="Switch to English"
              >
                <span>EN</span>
              </button>
              <button
                onClick={() => setLang('np')}
                className={`px-2.5 py-1 rounded-md transition-all flex items-center gap-1 ${
                  lang === 'np'
                    ? 'bg-[#D4AF37] text-black font-bold shadow-xs'
                    : theme === 'dark' ? 'text-white/60 hover:text-white' : 'text-slate-600 hover:text-black'
                }`}
                title="नेपालीमा फेर्नुहोस्"
              >
                <span>नेपाली</span>
              </button>
            </div>

            {/* Theme Toggle Switcher */}
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className={`p-2.5 rounded-lg border transition-all ${
                theme === 'dark'
                  ? 'bg-white/5 border-white/10 text-[#D4AF37] hover:bg-white/10'
                  : 'bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200'
              }`}
              title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Elegant Dark Mode'}
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* CTA Button */}
            <button
              onClick={() => onOpenEnroll()}
              className="px-5 py-2.5 bg-gradient-to-r from-[#D4AF37] via-[#E5C158] to-[#B8860B] hover:brightness-110 text-black text-xs font-bold uppercase tracking-widest rounded-lg shadow-md shadow-[#D4AF37]/20 transition-all flex items-center gap-2 group cursor-pointer"
            >
              <GraduationCap className="w-4 h-4" />
              <span>{lang === 'np' ? 'भर्ना हुनुहोस्' : 'Enroll Now'}</span>
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex lg:hidden items-center gap-3">
            <button
              onClick={() => setLang(lang === 'en' ? 'np' : 'en')}
              className={`px-2 py-1 rounded border text-xs font-bold ${
                theme === 'dark' ? 'border-white/20 text-[#D4AF37]' : 'border-slate-300 text-slate-800'
              }`}
            >
              {lang === 'en' ? 'NP' : 'EN'}
            </button>
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className={`p-2 rounded border ${
                theme === 'dark' ? 'border-white/20 text-[#D4AF37]' : 'border-slate-300 text-slate-800'
              }`}
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg ${
                theme === 'dark' ? 'text-white' : 'text-slate-900'
              }`}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className={`lg:hidden border-b px-6 py-6 transition-all ${
          theme === 'dark' ? 'bg-[#0a0a0a] border-white/10 text-white' : 'bg-white border-slate-200 text-slate-900'
        }`}>
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-semibold uppercase tracking-wider hover:text-[#D4AF37] py-2 border-b border-white/5 flex items-center justify-between"
              >
                <span>{link.label}</span>
                <ChevronRight className="w-4 h-4 opacity-40" />
              </a>
            ))}
            <div className="pt-2 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEnroll();
                }}
                className="w-full py-3 bg-[#D4AF37] text-black font-bold uppercase tracking-widest text-xs rounded-lg flex items-center justify-center gap-2"
              >
                <GraduationCap className="w-4 h-4" />
                <span>{lang === 'np' ? 'अनलाइन भर्ना आवेदन' : 'Online Admission Form'}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
