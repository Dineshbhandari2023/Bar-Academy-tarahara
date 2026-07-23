'use client';

import React, { useState } from 'react';
import { Language } from '@/lib/data';
import { Sparkles, Wine, Coffee, Flame, RefreshCw, Layers, CheckCircle, Lightbulb, AlertCircle, Bookmark } from 'lucide-react';

interface AIRecipeStudioProps {
  theme: 'dark' | 'light';
  lang: Language;
}

export default function AIRecipeStudio({ theme, lang }: AIRecipeStudioProps) {
  const [category, setCategory] = useState<string>('Cocktail');
  const [baseIngredient, setBaseIngredient] = useState<string>('Gin');
  const [flavorProfile, setFlavorProfile] = useState<string>('Citrus & Refreshing');
  const [loading, setLoading] = useState<boolean>(false);
  const [recipe, setRecipe] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const categories = [
    { id: 'Cocktail', label: { en: 'Craft Cocktail', np: 'ककटेल' } },
    { id: 'Mocktail', label: { en: 'Virgin Mocktail', np: 'मकटेल (गैर-अल्कोहलिक)' } },
    { id: 'Espresso Beverage', label: { en: 'Specialty Coffee', np: 'स्पेसालिटी कफी' } },
    { id: 'Molecular Drink', label: { en: 'Molecular Smoke/Foam', np: 'मोलिक्युलर ड्रिंक' } },
  ];

  const baseIngredients = [
    'Gin', 'Vodka', 'Dark Rum', 'Bourbon Whiskey', 'Tequila', 'Espresso Shot', 'Cold Brew', 'Fresh Fruit Juice', 'Coconut & Pineapple'
  ];

  const flavorProfiles = [
    'Citrus & Refreshing', 'Sweet & Creamy', 'Bold & Smoky', 'Spiced & Warm', 'Aromatic & Herbal', 'Berry & Tropical'
  ];

  async function handleGenerateRecipe() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('/api/gemini/recipe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          category,
          baseIngredient,
          flavorProfile,
          language: lang,
        }),
      });

      const data = await res.json();
      if (!res.ok || data.error) {
        throw new Error(data.error || 'Failed to generate recipe');
      }

      setRecipe(data.recipe);
    } catch (err: any) {
      console.error(err);
      setError(err.message || 'Something went wrong while crafting the recipe.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="ai-studio" className={`py-20 border-t transition-colors duration-300 ${
      theme === 'dark' ? 'bg-[#090909] text-white border-white/10' : 'bg-slate-100 text-slate-900 border-slate-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#D4AF37]/50 bg-[#D4AF37]/10 text-[#D4AF37] text-xs font-bold uppercase tracking-[0.2em] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{lang === 'np' ? 'जेमिनाई AI बेभरेज ल्याब' : 'Gemini AI Beverage Studio'}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-light mb-4">
            {lang === 'np' ? (
              <>
                कस्टम <span className="italic font-normal text-[#D4AF37]">रेसिपी</span> सिर्जना गर्नुहोस्
              </>
            ) : (
              <>
                Craft Custom <span className="italic font-normal text-[#D4AF37]">Bespoke Recipes</span> with AI
              </>
            )}
          </h2>
          <p className={`text-sm sm:text-base ${theme === 'dark' ? 'text-white/60' : 'text-slate-600'}`}>
            {lang === 'np'
              ? 'आफ्नो रोजाइको आधार सामाग्री र स्वाद छान्नुहोस्। जेमिनाई AI ले बार एकेडेमी तरहराको ककटेल तथा कफी ज्ञान अनुसार तुरुन्तै प्रोफेसनल रेसिपी तयार पार्नेछ।'
              : 'Select your preferred spirit, coffee, or mocktail base. Gemini AI formulates step-by-step master bartender recipes with exact measurements and garnishing tips.'}
          </p>
        </div>

        {/* Generator Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Panel (5 cols) */}
          <div className={`lg:col-span-5 p-6 sm:p-8 rounded-2xl border ${
            theme === 'dark' ? 'bg-[#121212] border-white/10' : 'bg-white border-slate-200 shadow-xl'
          }`}>
            <h3 className="text-lg font-serif font-bold text-[#D4AF37] mb-6 flex items-center gap-2">
              <Wine className="w-5 h-5" />
              <span>{lang === 'np' ? 'पेयपदार्थ छनोट गर्नुहोस्' : 'Recipe Parameters'}</span>
            </h3>

            {/* Category selection */}
            <div className="mb-6">
              <label className="text-xs font-semibold uppercase tracking-wider text-white/70 block mb-2">
                1. {lang === 'np' ? 'प्रकार (Category)' : 'Beverage Category'}
              </label>
              <div className="grid grid-cols-2 gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setCategory(cat.id)}
                    className={`p-2.5 rounded-lg border text-xs font-medium text-left transition-all ${
                      category === cat.id
                        ? 'bg-[#D4AF37] text-black border-[#D4AF37] font-bold'
                        : theme === 'dark' ? 'bg-white/5 border-white/10 text-white/80 hover:bg-white/10' : 'bg-slate-100 border-slate-200 text-slate-800'
                    }`}
                  >
                    {cat.label[lang]}
                  </button>
                ))}
              </div>
            </div>

            {/* Base Ingredient selection */}
            <div className="mb-6">
              <label className="text-xs font-semibold uppercase tracking-wider text-white/70 block mb-2">
                2. {lang === 'np' ? 'मुख्य सामाग्री (Base Spirit / Coffee)' : 'Base Spirit or Coffee'}
              </label>
              <select
                value={baseIngredient}
                onChange={(e) => setBaseIngredient(e.target.value)}
                className={`w-full p-3 rounded-lg border text-xs font-medium outline-none ${
                  theme === 'dark' ? 'bg-[#1a1a1a] border-white/20 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'
                }`}
              >
                {baseIngredients.map((item) => (
                  <option key={item} value={item}>{item}</option>
                ))}
              </select>
            </div>

            {/* Flavor selection */}
            <div className="mb-8">
              <label className="text-xs font-semibold uppercase tracking-wider text-white/70 block mb-2">
                3. {lang === 'np' ? 'स्वादको अनुभव (Flavor Notes)' : 'Flavor Notes'}
              </label>
              <select
                value={flavorProfile}
                onChange={(e) => setFlavorProfile(e.target.value)}
                className={`w-full p-3 rounded-lg border text-xs font-medium outline-none ${
                  theme === 'dark' ? 'bg-[#1a1a1a] border-white/20 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'
                }`}
              >
                {flavorProfiles.map((fp) => (
                  <option key={fp} value={fp}>{fp}</option>
                ))}
              </select>
            </div>

            {/* Submit Button */}
            <button
              onClick={handleGenerateRecipe}
              disabled={loading}
              className="w-full py-4 bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#B8860B] hover:brightness-110 text-black font-bold text-xs uppercase tracking-[0.2em] rounded-xl transition-all shadow-lg shadow-[#D4AF37]/20 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
            >
              {loading ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  <span>{lang === 'np' ? 'जेमिनाई AI ले रेसिपी बनाउँदैछ...' : 'Gemini AI Creating Recipe...'}</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4" />
                  <span>{lang === 'np' ? 'रेसिपी सिर्जना गर्नुहोस्' : 'Generate Master Recipe'}</span>
                </>
              )}
            </button>

            {error && (
              <div className="mt-4 p-3 rounded-lg bg-red-500/20 border border-red-500/40 text-red-300 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{error}</span>
              </div>
            )}
          </div>

          {/* Recipe Output Display (7 cols) */}
          <div className={`lg:col-span-7 p-6 sm:p-8 rounded-2xl border min-h-[460px] flex flex-col justify-between ${
            theme === 'dark' ? 'bg-[#121212] border-[#D4AF37]/30' : 'bg-white border-slate-200 shadow-xl'
          }`}>
            
            {recipe ? (
              <div>
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10">
                  <div className="flex items-center gap-2 text-xs text-[#D4AF37] font-bold uppercase tracking-wider">
                    <Bookmark className="w-4 h-4" />
                    <span>Bar Academy Tarahara Signature Formula</span>
                  </div>
                  <span className="text-xs px-2.5 py-1 rounded bg-[#D4AF37]/20 border border-[#D4AF37]/40 font-semibold text-[#D4AF37]">
                    {recipe.category || category}
                  </span>
                </div>

                <h3 className={`text-2xl sm:text-3xl font-serif font-bold mb-3 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                  {recipe.title || 'Bespoke Beverage'}
                </h3>

                <div className="flex flex-wrap gap-4 text-xs text-white/60 mb-6">
                  {recipe.glassware && <span><strong className="text-[#D4AF37]">Glassware:</strong> {recipe.glassware}</span>}
                  {recipe.garnish && <span><strong className="text-[#D4AF37]">Garnish:</strong> {recipe.garnish}</span>}
                  {recipe.prepTime && <span><strong className="text-[#D4AF37]">Prep Time:</strong> {recipe.prepTime}</span>}
                </div>

                {/* Ingredients List */}
                <div className="mb-6">
                  <h4 className="text-xs uppercase font-bold text-[#D4AF37] tracking-wider mb-2">
                    {lang === 'np' ? 'सामाग्री (Ingredients):' : 'Ingredients Required:'}
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    {Array.isArray(recipe.ingredients) && recipe.ingredients.map((ing: string, i: number) => (
                      <li key={i} className={`p-2 rounded border flex items-center gap-2 ${
                        theme === 'dark' ? 'bg-white/5 border-white/10 text-white/90' : 'bg-slate-50 border-slate-200 text-slate-800'
                      }`}>
                        <CheckCircle className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                        <span>{ing}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Preparation Steps */}
                <div className="mb-6">
                  <h4 className="text-xs uppercase font-bold text-[#D4AF37] tracking-wider mb-2">
                    {lang === 'np' ? 'तयारी विधि (Preparation Method):' : 'Step-by-Step Preparation:'}
                  </h4>
                  <ol className="space-y-2 text-xs">
                    {Array.isArray(recipe.steps) && recipe.steps.map((st: string, i: number) => (
                      <li key={i} className={`p-2.5 rounded border flex items-start gap-2.5 ${
                        theme === 'dark' ? 'bg-white/5 border-white/10 text-white/80' : 'bg-slate-50 border-slate-200 text-slate-700'
                      }`}>
                        <span className="w-5 h-5 rounded-full bg-[#D4AF37] text-black font-bold flex items-center justify-center shrink-0 text-[10px]">
                          {i + 1}
                        </span>
                        <span className="leading-relaxed">{st}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                {/* Instructor Pro Tip */}
                {recipe.proTip && (
                  <div className="p-4 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/40 text-xs text-[#D4AF37] flex items-start gap-3">
                    <Lightbulb className="w-5 h-5 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block font-bold uppercase tracking-wider mb-0.5">
                        {lang === 'np' ? 'मास्टर इन्स्ट्रक्टर टिप्स:' : 'Master Instructor Pro Tip:'}
                      </strong>
                      <span className="text-white/80">{recipe.proTip}</span>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="my-auto text-center py-12 px-4">
                <div className="w-16 h-16 rounded-2xl bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] mx-auto mb-4">
                  <Sparkles className="w-8 h-8" />
                </div>
                <h4 className={`text-lg font-serif font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                  {lang === 'np' ? 'रेसिपी बनाउन माथिको फारम प्रयोग गर्नुहोस्' : 'Your Custom Recipe Will Appear Here'}
                </h4>
                <p className={`text-xs max-w-md mx-auto ${theme === 'dark' ? 'text-white/50' : 'text-slate-500'}`}>
                  {lang === 'np'
                    ? 'कुनै पनि रक्सी, कफी वा ज्युस सामाग्री छान्नुहोस् र जेमिनाई AI ले बार एकेडेमी तरहराको गुणस्तर अनुसारको ककटेल वा बारिष्टा रेसिपी बनाउनेछ।'
                    : 'Select your preferred spirit, flavor notes, and click generate to test our AI beverage studio.'}
                </p>
              </div>
            )}

            <div className="pt-4 mt-6 border-t border-white/10 text-[11px] text-white/40 flex items-center justify-between">
              <span>Powered by Gemini 2.5 Flash</span>
              <span>Bar Academy Tarahara © 2025</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
