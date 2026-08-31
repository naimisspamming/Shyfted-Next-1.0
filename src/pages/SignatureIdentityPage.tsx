import React, { useState } from 'react';
import { ArrowUpRight, ShieldCheck, Search, Users, Link as LinkIcon, Star } from 'lucide-react';
import { motion } from 'motion/react';
import { Header } from '../components/Header';
import { SolarSystem } from '../components/SolarSystem';
import { BeforeAfterMockup } from '../components/BeforeAfterMockup';

export function SignatureIdentityPage() {
  const handleScrollTo = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const mobileMenuItems = [
    { label: 'Overview', action: () => handleScrollTo('overview') },
    { label: 'System', action: () => handleScrollTo('system') },
    { label: 'Packages', action: () => handleScrollTo('packages') },
    { label: 'Contact', action: () => handleScrollTo('contact') },
    { label: 'Back to main site', action: () => {}, isLink: true },
  ];

  return (
    <div className="min-h-screen bg-white text-stone-900 font-sans selection:bg-[#d7b36b] selection:text-white">
      <Header 
        onScrollTo={handleScrollTo} 
        onOpenContact={() => handleScrollTo('contact')} 
        theme="light" 
        rotatingTexts={['Free Consultation']}
        accentColor="gold"
        mobileMenuItems={mobileMenuItems}
        logoUrl="https://i.ibb.co.com/cK2F88HX/output-onlinepngtools.png"
      />
      {/* Hero Section */}
      <section className="relative px-6 py-20 md:py-28 flex flex-col items-center text-center overflow-hidden" id="overview">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(215,179,107,0.1),transparent_70%)]" />
        <div className="relative z-10 max-w-4xl space-y-6">
          <div className="flex justify-center">
            <SolarSystem />
          </div>
          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter text-stone-900 pt-4 mb-4">
            Where Names <br />
            <span className="text-[#d7b36b]">Become Brands.</span>
          </h1>
          <p className="text-lg md:text-xl text-stone-600 max-w-2xl mx-auto leading-relaxed">
            Signature Identity builds the digital presence behind your name — so the right people can find you, understand you, and remember you.
          </p>
          <div className="flex flex-row items-center justify-center gap-4 pt-4">
            <a href="#packages" className="px-8 py-4 bg-[#d7b36b] text-white text-sm font-bold uppercase tracking-widest hover:bg-[#b8954d] transition-all">
              Plans
            </a>
            <button className="px-8 py-4 border border-stone-200 text-stone-900 text-sm font-bold uppercase tracking-widest hover:border-[#d7b36b] hover:text-[#d7b36b] transition-all" onClick={() => handleScrollTo('system')}>
              Compare
            </button>
          </div>
        </div>
      </section>

      {/* Compare Section */}
      <section className="px-6 py-24 border-t border-stone-200" id="system">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-16 text-center">From Fragmented to Definitive</h2>
          <BeforeAfterMockup />
        </div>
      </section>

      {/* Packages Section */}
      <section className="px-6 py-24 bg-stone-50 border-t border-stone-200" id="packages">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-16 text-center">Choose Your Path</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "CORE",
                desc: "Get online.",
                features: [
                  { text: "Personal Website", included: true },
                  { text: "Basic SEO", included: true },
                  { text: "Google Search Setup", included: true },
                  { text: "Professional Listings", included: false },
                  { text: "Press & Media", included: false },
                  { text: "Ongoing Presence", included: false },
                ],
                cta: "Get Started"
              },
              {
                name: "PRO",
                desc: "Get established.",
                features: [
                  { text: "Personal Website", included: true },
                  { text: "Basic SEO", included: true },
                  { text: "Google Search Setup", included: true },
                  { text: "Professional Listings", included: true },
                  { text: "Advanced SEO", included: true },
                  { text: "Press & Media", included: false },
                  { text: "Ongoing Presence", included: false },
                ],
                cta: "Get Started"
              },
              {
                name: "ELITE",
                desc: "Get recognized.",
                features: [
                  { text: "Personal Website", included: true },
                  { text: "Advanced SEO", included: true },
                  { text: "Google Search Setup", included: true },
                  { text: "Professional Listings", included: true },
                  { text: "Press & Media", included: true },
                  { text: "Ongoing Presence", included: true },
                ],
                cta: "Get Started"
              }
            ].map((pkg, i) => (
              <div key={i} className="p-8 border border-stone-200 bg-white flex flex-col hover:border-[#d7b36b]/50 transition-colors">
                <h3 className="text-2xl font-bold mb-2 text-stone-900">{pkg.name}</h3>
                <p className="text-stone-600 mb-6 text-sm">{pkg.desc}</p>
                <ul className="space-y-4 mb-8 flex-grow">
                  {pkg.features.map((feature, f) => (
                    <li key={f} className={`${feature.included ? 'text-stone-900' : 'text-stone-400'} text-sm flex items-start gap-2`}>
                      <span className={`${feature.included ? 'text-[#d7b36b]' : 'text-stone-300'} mt-0.5`}>
                        {feature.included ? '✓' : '×'}
                      </span> {feature.text}
                    </li>
                  ))}
                </ul>
                <a href="#contact" className="block text-center py-3 border border-[#d7b36b] text-[#d7b36b] font-bold uppercase tracking-widest text-xs hover:bg-[#d7b36b] hover:text-white transition-all">
                  {pkg.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-24 bg-stone-100 text-center border-t border-stone-200" id="contact">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-8 text-stone-900">Ready to define your signature?</h2>
        <a href="mailto:hello@shyftednext.com?subject=Signature%20Identity%20Consultation" className="inline-flex items-center gap-2 px-8 py-4 bg-[#d7b36b] text-white font-bold uppercase tracking-widest text-sm hover:bg-[#b8954d] transition-all">
          Free Consultation <ArrowUpRight size={18} />
        </a>
      </section>
    </div>
  );
}
