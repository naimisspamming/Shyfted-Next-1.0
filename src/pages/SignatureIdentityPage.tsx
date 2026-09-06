import React, { useState } from 'react';
import { ArrowUpRight, ShieldCheck, Search, Users, Link as LinkIcon, Star } from 'lucide-react';
import { motion } from 'motion/react';
import { Header } from '../components/Header';
import { SolarSystem } from '../components/SolarSystem';
import { BeforeAfterMockup } from '../components/BeforeAfterMockup';

export function SignatureIdentityPage() {
  React.useEffect(() => {
    document.title = "Signature Identity | Personal Branding & Google Knowledge Graph | Shyfted Next";
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', 'Signature Identity by Shyfted Next builds authoritative personal brands, digital presence, Google search setups, and executive knowledge panels for founders and creators.');

    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', 'Signature Identity, Personal Branding Agency, Executive Branding, Google Knowledge Panel, Personal SEO, Digital Presence for Founders, Shyfted Next');

    // Add JSON-LD Structured Data for Google SEO ranking
    const scriptId = 'signature-identity-schema';
    let scriptTag = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!scriptTag) {
      const newScript = document.createElement('script') as HTMLScriptElement;
      newScript.id = scriptId;
      newScript.type = 'application/ld+json';
      newScript.text = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Signature Identity & Executive Branding",
        "provider": {
          "@type": "Organization",
          "name": "Shyfted Next",
          "url": "https://shyftednext.com",
          "logo": "https://i.ibb.co.com/HL0MvWbd/20260827-231313-0000.webp"
        },
        "description": "Professional signature identity, personal branding, Google search setup, and digital presence engineering for executives, creators, and founders.",
        "areaServed": "Worldwide",
        "serviceType": "Personal Branding & Digital Identity Engineering"
      });
      document.head.appendChild(newScript);
    }

    return () => {
      document.title = "Shyfted Next";
    };
  }, []);

  const handleScrollTo = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const menuItems = [
    { label: 'Overview', action: () => handleScrollTo('overview') },
    { label: 'System', action: () => handleScrollTo('system') },
    { label: 'Packages', action: () => handleScrollTo('packages') },
    { label: 'Contact', action: () => handleScrollTo('contact') },
    { label: 'Main Site', isLink: true, to: '/' },
  ];

  return (
    <div className="min-h-screen bg-white text-stone-900 font-sans selection:bg-[#d7b36b] selection:text-white">
      <Header 
        onScrollTo={handleScrollTo} 
        onOpenContact={() => handleScrollTo('contact')} 
        theme="light" 
        rotatingTexts={['Free Consultation']}
        accentColor="gold"
        menuItems={menuItems}
        logoUrl="https://i.ibb.co.com/cK2F88HX/output-onlinepngtools.png"
      />
      {/* Hero Section */}
      <section className="relative py-20 sm:py-28 md:py-36 overflow-hidden" id="overview">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(215,179,107,0.1),transparent_70%)]" />
        <div className="relative z-10 max-w-5xl mx-auto px-6 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
             {/* Left Column: Text & CTAs */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left flex flex-col items-center lg:items-start">
              <h1 className="text-3xl min-[380px]:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-stone-900 pt-2 leading-[1.1]">
                Where Names <br className="hidden sm:inline" />
                <span className="text-[#d7b36b]">Become Brands.</span>
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-stone-600 max-w-xl leading-relaxed">
                Signature Identity builds the digital presence behind your name — so the right people can find you, understand you, and remember you.
              </p>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
                <a href="#packages" className="px-7 py-3.5 bg-[#d7b36b] text-white text-xs sm:text-sm font-bold uppercase tracking-widest hover:bg-[#b8954d] transition-all shadow-sm">
                  Plans
                </a>
                <button className="px-7 py-3.5 border border-stone-300 text-stone-900 text-xs sm:text-sm font-bold uppercase tracking-widest hover:border-[#d7b36b] hover:text-[#d7b36b] transition-all" onClick={() => handleScrollTo('system')}>
                  Compare
                </button>
              </div>
            </div>

            {/* Right Column: Moving Circles (SolarSystem) */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end overflow-visible">
              <SolarSystem />
            </div>
          </div>
        </div>
      </section>

      {/* Compare Section */}
      <section className="py-20 sm:py-32 border-t border-stone-200" id="system">
        <div className="max-w-5xl mx-auto px-6 space-y-12 sm:space-y-16">
          <div className="flex flex-col items-center text-center space-y-3">
            <h2 className="text-2xl min-[380px]:text-3xl md:text-5xl font-bold tracking-tighter text-stone-900">From Fragmented to Definitive</h2>
            <p className="text-stone-600 text-xs sm:text-sm max-w-xl mx-auto text-center">See how we transform your digital footprint from scattered mentions into an authoritative executive presence.</p>
          </div>
          <BeforeAfterMockup />
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20 sm:py-32 bg-stone-50/70 border-t border-stone-200" id="packages">
        <div className="max-w-5xl mx-auto px-6 space-y-12 sm:space-y-16">
          <div className="flex flex-col items-center text-center space-y-3">
            <h2 className="text-2xl min-[380px]:text-3xl md:text-5xl font-bold tracking-tighter text-stone-900">Choose Your Path</h2>
            <p className="text-stone-600 text-xs sm:text-sm max-w-xl mx-auto text-center">Select the tier that aligns with your authority goals and digital presence requirements.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 items-stretch">
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
              <div key={i} className="p-8 sm:p-10 border border-stone-200 bg-white flex flex-col justify-between hover:border-[#d7b36b]/60 transition-all shadow-sm rounded-xl">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 text-stone-900">{pkg.name}</h3>
                  <p className="text-stone-600 mb-8 text-xs sm:text-sm">{pkg.desc}</p>
                  <ul className="space-y-4 mb-10">
                    {pkg.features.map((feature, f) => (
                      <li key={f} className={`${feature.included ? 'text-stone-900 font-medium' : 'text-stone-400'} text-xs sm:text-sm flex items-start gap-3`}>
                        <span className={`${feature.included ? 'text-[#d7b36b] font-bold' : 'text-stone-300'} mt-0.5`}>
                          {feature.included ? '✓' : '×'}
                        </span> 
                        <span>{feature.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <a href="#contact" className="block text-center py-4 border border-[#d7b36b] text-[#d7b36b] font-bold uppercase tracking-widest text-xs hover:bg-[#d7b36b] hover:text-white transition-all rounded-lg">
                  {pkg.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO FAQ Section */}
      <section className="py-20 sm:py-32 bg-white border-t border-stone-200">
        <div className="max-w-5xl mx-auto px-6 space-y-16">
          <div className="flex flex-col items-center text-center space-y-3">
            <h2 className="text-2xl min-[380px]:text-3xl md:text-4xl font-bold tracking-tighter text-stone-900">Frequently Asked Questions</h2>
            <p className="text-stone-600 text-xs sm:text-sm max-w-lg mx-auto text-center">Everything you need to know about Signature Identity and Google ranking.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            <div className="p-8 border border-stone-200 bg-stone-50/50 flex flex-col justify-between space-y-3 rounded-xl">
              <h3 className="font-bold text-stone-900 text-base">What is Signature Identity?</h3>
              <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">Signature Identity is a specialized personal branding and digital presence engineering framework designed to position founders, executives, and creators as definitive industry authorities when searched on Google.</p>
            </div>
            <div className="p-8 border border-stone-200 bg-stone-50/50 flex flex-col justify-between space-y-3 rounded-xl">
              <h3 className="font-bold text-stone-900 text-base">How does this help me rank on Google?</h3>
              <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">We optimize your personal name search results by building authoritative structured data, verified directory listings, professional media placements, and clean personal website architecture.</p>
            </div>
            <div className="p-8 border border-stone-200 bg-stone-50/50 flex flex-col justify-between space-y-3 rounded-xl">
              <h3 className="font-bold text-stone-900 text-base">How long does the setup take?</h3>
              <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">Core digital presence and initial Google indexing are established within 5 to 7 business days, with continuous authority growth over subsequent weeks.</p>
            </div>
            <div className="p-8 border border-stone-200 bg-stone-50/50 flex flex-col justify-between space-y-3 rounded-xl">
              <h3 className="font-bold text-stone-900 text-base">Do I need existing press mentions?</h3>
              <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">No. Our Elite packages include strategic press and media syndication to help you establish the credibility required for top-tier Google rankings.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-32 bg-stone-100 text-center border-t border-stone-200 flex flex-col items-center justify-center" id="contact">
        <div className="max-w-5xl mx-auto px-6 flex flex-col items-center text-center space-y-8 w-full">
          <h2 className="text-2xl min-[380px]:text-3xl md:text-5xl font-bold tracking-tighter text-stone-900">Ready to define your signature?</h2>
          <p className="text-stone-600 text-sm sm:text-base max-w-xl mx-auto text-center leading-relaxed">Get in touch for a complimentary brand audit and digital presence roadmap consultation.</p>
          <div className="pt-2">
            <a href="mailto:hello@shyftednext.com?subject=Signature%20Identity%20Consultation" className="inline-flex items-center gap-2 px-10 py-5 bg-[#d7b36b] text-white font-bold uppercase tracking-widest text-xs sm:text-sm hover:bg-[#b8954d] transition-all rounded-lg shadow-sm">
              Free Consultation <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
