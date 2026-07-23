'use client';

import React, { useState } from 'react';
import { Language } from '@/lib/data';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Programs from '@/components/Programs';
import LabShowcase from '@/components/LabShowcase';
import AIRecipeStudio from '@/components/AIRecipeStudio';
import AICareerAdvisor from '@/components/AICareerAdvisor';
import CertificateVerifier from '@/components/CertificateVerifier';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import ContactLocation from '@/components/ContactLocation';
import Footer from '@/components/Footer';
import EnrollmentModal from '@/components/EnrollmentModal';

export default function Home() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [lang, setLang] = useState<Language>('en');
  const [enrollModalOpen, setEnrollModalOpen] = useState<boolean>(false);
  const [selectedCourseForEnroll, setSelectedCourseForEnroll] = useState<string | undefined>(undefined);

  function handleOpenEnroll(courseId?: string) {
    setSelectedCourseForEnroll(courseId);
    setEnrollModalOpen(true);
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 font-sans ${
      theme === 'dark' ? 'bg-[#050505] text-white' : 'bg-slate-50 text-slate-900'
    }`}>
      {/* Sticky Top Navigation */}
      <Navbar
        theme={theme}
        setTheme={setTheme}
        lang={lang}
        setLang={setLang}
        onOpenEnroll={handleOpenEnroll}
      />

      {/* Main Hero Section */}
      <Hero
        theme={theme}
        lang={lang}
        onOpenEnroll={handleOpenEnroll}
      />

      {/* Courses & Programs Catalog */}
      <Programs
        theme={theme}
        lang={lang}
        onOpenEnroll={handleOpenEnroll}
      />

      {/* Practical Lab Showcase */}
      <LabShowcase
        theme={theme}
        lang={lang}
      />

      {/* Gemini AI Beverage Recipe Studio */}
      <AIRecipeStudio
        theme={theme}
        lang={lang}
      />

      {/* Gemini AI Career Advisor */}
      <AICareerAdvisor
        theme={theme}
        lang={lang}
        onOpenEnroll={handleOpenEnroll}
      />

      {/* Certificate Verification Portal */}
      <CertificateVerifier
        theme={theme}
        lang={lang}
      />

      {/* Alumni Testimonials */}
      <Testimonials
        theme={theme}
        lang={lang}
      />

      {/* FAQ Accordion */}
      <FAQ
        theme={theme}
        lang={lang}
      />

      {/* Contact, Socials & Map */}
      <ContactLocation
        theme={theme}
        lang={lang}
      />

      {/* Footer */}
      <Footer
        theme={theme}
        lang={lang}
        onOpenEnroll={handleOpenEnroll}
      />

      {/* Enrollment Admission Modal */}
      {enrollModalOpen && (
        <EnrollmentModal
          theme={theme}
          lang={lang}
          preselectedCourseId={selectedCourseForEnroll}
          onClose={() => setEnrollModalOpen(false)}
        />
      )}
    </div>
  );
}
