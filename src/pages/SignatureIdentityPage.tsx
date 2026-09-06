import React, { useState } from 'react';
import { ArrowUpRight, Sparkles, Globe, ShieldCheck, TrendingUp, ChevronRight, Check } from 'lucide-react';
import { motion } from 'motion/react';
import { Header } from '../components/Header';
import { SolarSystem } from '../components/SolarSystem';

export function SignatureIdentityPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  React.useEffect(() => {
    document.title = "Signature Identity | Executive Personal Branding & Google Knowledge Graph | Shyfted Next";
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', 'Signature Identity by Shyfted Next engineers authoritative executive personal brands, verified Google knowledge panels, and premier digital prominence for founders and creators.');

    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', 'Signature Identity, Executive Personal Branding, Google Knowledge Panel, Personal SEO, Founder Authority, Shyfted Next');

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
        "description": "Professional signature identity, executive personal branding, Google search setup, and digital presence engineering for founders and creators.",
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
    { label: 'Process', action: () => handleScrollTo('process') },
    { label: 'Packages', action: () => handleScrollTo('packages') },
    { label: 'FAQ', action: () => handleScrollTo('faq') },
    { label: 'Main Site', isLink: true, to: '/' },
  ];

  const faqs = [
    {
      q: "What is Signature Identity?",
      a: "Signature Identity is a specialized personal branding and digital presence engineering framework designed to position founders, executives, and creators as definitive industry authorities when searched on Google."
    },
    {
      q: "How does this help me rank on Google?",
      a: "We optimize your personal name search results by building authoritative structured data (Schema.org), verified directory listings, professional media placements, and clean personal website architecture that commands Google's top results."
    },
    {
      q: "How long does the setup take?",
      a: "Core digital presence and initial Google indexing are established within 5 to 7 business days, with continuous authority growth and search prominence over subsequent weeks."
    },
    {
      q: "Do I need existing press mentions?",
      a: "No. Our Elite packages include strategic press and media syndication to help you establish the credibility required for top-tier Google rankings and knowledge panel recognition."
    }
  ];

  return (
    <div className="min-h-screen bg-[#faf8f5] text-[#111827] font-sans selection:bg-[#d7b36b] selection:text-white">
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
      <section className="relative py-20 sm:py-24 md:py-32 overflow-hidden bg-gradient-to-b from-[#fffcf9] via-[#faf8f5] to-[#f4efe6]" id="overview">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(215,179,107,0.15),transparent_70%)] pointer-events-none" />
        <div className="relative z-10 max-w-5xl mx-auto px-6 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-8 lg:gap-8 items-center">
            
            {/* Left Column: Text & CTAs */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 order-2 lg:order-1 space-y-6 text-left flex flex-col items-start"
            >
              <h1 className="text-3xl min-[380px]:text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-black tracking-tight text-[#111827] leading-[1.08]">
                Where Names <br className="inline" />
                <span className="text-[#d7b36b] font-serif italic font-normal">Become Brands.</span>
              </h1>
              
              <p className="text-sm sm:text-base md:text-lg text-[#374151] max-w-xl leading-relaxed">
                Signature Identity builds the definitive digital footprint behind your name — ensuring investors, clients, and partners find an authoritative executive presence when they search for you.
              </p>
              
              <div className="flex flex-row items-center justify-start gap-3 sm:gap-4 pt-2 w-full">
                <a href="#packages" className="px-5 py-3.5 sm:px-8 sm:py-4 bg-[#d7b36b] text-white text-[11px] sm:text-xs sm:text-sm font-bold uppercase tracking-widest hover:bg-[#b8954d] transition-all shadow-md rounded-2xl flex items-center gap-2 group whitespace-nowrap">
                  View Packages <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
                <button 
                  onClick={() => handleScrollTo('process')} 
                  className="px-5 py-3.5 sm:px-8 sm:py-4 border border-[#e5dec9] text-[#111827] text-[11px] sm:text-xs sm:text-sm font-bold uppercase tracking-widest hover:border-[#d7b36b] hover:text-[#d7b36b] transition-all rounded-2xl bg-white shadow-sm whitespace-nowrap"
                >
                  Explore Process
                </button>
              </div>
            </motion.div>

            {/* Right Column: Moving Circles (SolarSystem) */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end overflow-visible"
            >
              <SolarSystem />
            </motion.div>

          </div>
        </div>
      </section>

      {/* Trust / Value Pillars Section */}
      <section className="py-20 sm:py-24 bg-[#f4efe6] border-t border-[#e5dec9]">
        <div className="max-w-5xl mx-auto px-6 space-y-10 sm:space-y-12">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-2xl min-[380px]:text-3xl md:text-4xl font-bold tracking-tighter text-[#111827]">Engineered For Executive Dominance</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-gradient-to-br from-white via-white to-[#fbf8f2] p-8 rounded-[28px] border border-[#e5dec9] shadow-[0_15px_35px_rgba(215,179,107,0.12)] space-y-5 hover:-translate-y-1.5 hover:shadow-[0_25px_50px_rgba(215,179,107,0.2)] hover:border-[#d7b36b] transition-all duration-300 group">
              <div className="w-14 h-14 rounded-2xl bg-[#d7b36b]/10 border border-[#d7b36b]/30 flex items-center justify-center text-[#9e7d36] group-hover:bg-[#d7b36b] group-hover:text-white transition-all duration-300 shadow-inner">
                <Globe size={24} />
              </div>
              <div className="space-y-2">
                <h3 className="font-bold text-[#111827] text-xl tracking-tight">Own Your SERP</h3>
                <p className="text-xs sm:text-sm text-[#374151] leading-relaxed">
                  When someone searches your name, control the narrative with a pristine, verified first-page search result.
                </p>
              </div>
              <div className="pt-2 flex items-center gap-1.5 text-xs font-bold text-[#9e7d36] group-hover:text-[#d7b36b] transition-colors">
                <span>Explore SERP Control</span> <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            <div className="bg-gradient-to-br from-white via-white to-[#fbf8f2] p-8 rounded-[28px] border border-[#e5dec9] shadow-[0_15px_35px_rgba(215,179,107,0.12)] space-y-5 hover:-translate-y-1.5 hover:shadow-[0_25px_50px_rgba(215,179,107,0.2)] hover:border-[#d7b36b] transition-all duration-300 group">
              <div className="w-14 h-14 rounded-2xl bg-[#d7b36b]/10 border border-[#d7b36b]/30 flex items-center justify-center text-[#9e7d36] group-hover:bg-[#d7b36b] group-hover:text-white transition-all duration-300 shadow-inner">
                <ShieldCheck size={24} />
              </div>
              <div className="space-y-2">
                <h3 className="font-bold text-[#111827] text-xl tracking-tight">Executive Trust</h3>
                <p className="text-xs sm:text-sm text-[#374151] leading-relaxed">
                  Instantly build credibility with enterprise clients, tier-1 investors, and top press outlets.
                </p>
              </div>
              <div className="pt-2 flex items-center gap-1.5 text-xs font-bold text-[#9e7d36] group-hover:text-[#d7b36b] transition-colors">
                <span>Discover Trust Protocol</span> <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            <div className="bg-gradient-to-br from-white via-white to-[#fbf8f2] p-8 rounded-[28px] border border-[#e5dec9] shadow-[0_15px_35px_rgba(215,179,107,0.12)] space-y-5 hover:-translate-y-1.5 hover:shadow-[0_25px_50px_rgba(215,179,107,0.2)] hover:border-[#d7b36b] transition-all duration-300 group">
              <div className="w-14 h-14 rounded-2xl bg-[#d7b36b]/10 border border-[#d7b36b]/30 flex items-center justify-center text-[#9e7d36] group-hover:bg-[#d7b36b] group-hover:text-white transition-all duration-300 shadow-inner">
                <TrendingUp size={24} />
              </div>
              <div className="space-y-2">
                <h3 className="font-bold text-[#111827] text-xl tracking-tight">Compounding Value</h3>
                <p className="text-xs sm:text-sm text-[#374151] leading-relaxed">
                  Your digital reputation is your greatest equity. We engineer it to grow stronger and more authoritative every month.
                </p>
              </div>
              <div className="pt-2 flex items-center gap-1.5 text-xs font-bold text-[#9e7d36] group-hover:text-[#d7b36b] transition-colors">
                <span>View Growth Metrics</span> <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process / Roadmap Section */}
      <section className="py-20 sm:py-24 bg-[#faf8f5] border-t border-[#e5dec9]" id="process">
        <div className="max-w-5xl mx-auto px-6 space-y-10 sm:space-y-12">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-2xl min-[380px]:text-3xl md:text-5xl font-bold tracking-tighter text-[#111827]">How We Build Your Signature</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Audit & Map", desc: "Comprehensive analysis of your current search footprint, missing schema, and authority gaps." },
              { step: "02", title: "Core Hub", desc: "Building your canonical personal website with high-performance architecture and pristine typography." },
              { step: "03", title: "Schema & SEO", desc: "Deploying advanced Google Knowledge Graph structured data and verifying professional profiles." },
              { step: "04", title: "Press & Scale", desc: "Securing authoritative media placements and ongoing authority monitoring to lock in top ranks." },
            ].map((p, idx) => (
              <div key={idx} className="bg-gradient-to-br from-white via-white to-[#fbf8f2] p-8 rounded-[28px] border border-[#e5dec9] shadow-[0_12px_35px_rgba(215,179,107,0.1)] relative flex flex-col justify-between space-y-6 hover:-translate-y-1 hover:border-[#d7b36b] hover:shadow-2xl transition-all duration-300 group">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold tracking-widest px-3 py-1 bg-[#f4efe6] rounded-full text-[#9e7d36] group-hover:bg-[#d7b36b] group-hover:text-white transition-colors">PHASE {p.step}</span>
                  <Sparkles size={16} className="text-[#d7b36b]/60 group-hover:text-[#d7b36b] transition-colors" />
                </div>
                <div className="space-y-3">
                  <h3 className="font-bold text-[#111827] text-xl">{p.title}</h3>
                  <p className="text-xs sm:text-sm text-[#374151] leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20 sm:py-24 bg-[#f4efe6] border-t border-[#e5dec9]" id="packages">
        <div className="max-w-5xl mx-auto px-6 space-y-10 sm:space-y-12">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-2xl min-[380px]:text-3xl md:text-5xl font-bold tracking-tighter text-[#111827]">Choose Your Path</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {[
              {
                name: "CORE",
                desc: "Get online with a pristine personal hub.",
                popular: false,
                features: [
                  { text: "Personal Website & Domain", included: true },
                  { text: "Basic Personal SEO", included: true },
                  { text: "Google Search Setup", included: true },
                  { text: "Professional Directory Listings", included: false },
                  { text: "Press & Media Placement", included: false },
                  { text: "Ongoing Authority Management", included: false },
                ],
                cta: "Select Core"
              },
              {
                name: "PRO",
                desc: "Get established as a recognized industry voice.",
                popular: true,
                features: [
                  { text: "Personal Website & Domain", included: true },
                  { text: "Advanced Personal SEO", included: true },
                  { text: "Google Search Setup & Schema", included: true },
                  { text: "Professional Directory Listings", included: true },
                  { text: "Advanced SERP Optimization", included: true },
                  { text: "Press & Media Placement", included: false },
                  { text: "Ongoing Authority Management", included: false },
                ],
                cta: "Select Pro"
              },
              {
                name: "ELITE",
                desc: "Get top-tier recognition & knowledge panel.",
                popular: false,
                features: [
                  { text: "Personal Website & Domain", included: true },
                  { text: "Advanced Personal SEO & Schema", included: true },
                  { text: "Google Knowledge Panel Optimization", included: true },
                  { text: "Professional Directory Listings", included: true },
                  { text: "Press & Tier-1 Media Placement", included: true },
                  { text: "Ongoing Authority Management", included: true },
                ],
                cta: "Select Elite"
              }
            ].map((pkg, i) => (
              <div 
                key={i} 
                className={`relative p-8 sm:p-10 border bg-white flex flex-col justify-between transition-all duration-300 rounded-[32px] ${
                  pkg.popular 
                    ? 'border-[#d7b36b] shadow-2xl ring-2 ring-[#d7b36b]/30 scale-[1.03] z-10 bg-gradient-to-b from-white via-[#fffcf9] to-white' 
                    : 'border-[#e5dec9] shadow-xl hover:border-[#d7b36b]/70 hover:-translate-y-1 hover:shadow-2xl'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-1.5 bg-[#d7b36b] text-white text-[11px] font-extrabold uppercase tracking-widest rounded-full shadow-lg">
                    Most Popular
                  </div>
                )}
                <div>
                  <h3 className="text-2xl font-black mb-2 text-[#111827]">{pkg.name}</h3>
                  <p className="text-[#374151] mb-8 text-xs sm:text-sm min-h-[40px] leading-relaxed">{pkg.desc}</p>
                  
                  <ul className="space-y-4 mb-10 border-t border-[#e5dec9]/70 pt-6">
                    {pkg.features.map((feature, f) => (
                      <li key={f} className={`${feature.included ? 'text-[#111827] font-semibold' : 'text-[#9ca3af]' } text-xs sm:text-sm flex items-start gap-3`}>
                        <span className={`${feature.included ? 'text-[#d7b36b] font-bold bg-[#d7b36b]/10 p-0.5 rounded-full' : 'text-[#d1d5db]'} mt-0.5 shrink-0`}>
                          {feature.included ? <Check size={14} /> : '×'}
                        </span> 
                        <span>{feature.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <a 
                  href="#contact" 
                  className={`block text-center py-4 font-extrabold uppercase tracking-widest text-xs transition-all rounded-2xl ${
                    pkg.popular
                      ? 'bg-[#d7b36b] text-white hover:bg-[#b8954d] shadow-xl shadow-[#d7b36b]/30 hover:scale-[1.02]'
                      : 'border border-[#e5dec9] text-[#111827] hover:border-[#d7b36b] hover:text-[#d7b36b] bg-[#f4efe6]/50'
                  }`}
                >
                  {pkg.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive FAQ Section */}
      <section className="py-20 sm:py-24 bg-[#faf8f5] border-t border-[#e5dec9]" id="faq">
        <div className="max-w-4xl mx-auto px-6 space-y-10 sm:space-y-12">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-2xl min-[380px]:text-3xl md:text-4xl font-bold tracking-tighter text-[#111827]">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div 
                  key={idx}
                  className="bg-white border border-[#e5dec9] rounded-2xl overflow-hidden transition-all shadow-md hover:border-[#d7b36b]"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full px-6 py-5 text-left font-bold text-[#111827] text-sm sm:text-base flex items-center justify-between gap-4 hover:text-[#9e7d36] transition-colors"
                  >
                    <span>{faq.q}</span>
                    <span className={`transform transition-transform duration-200 text-[#9e7d36] font-bold text-lg ${isOpen ? 'rotate-45' : ''}`}>
                      +
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 text-xs sm:text-sm text-[#374151] leading-relaxed border-t border-[#e5dec9] pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-24 bg-[#111827] text-white text-center border-t border-[#1f2937] flex flex-col items-center justify-center relative overflow-hidden" id="contact">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(215,179,107,0.2),transparent_75%)] pointer-events-none" />
        <div className="relative z-10 max-w-5xl mx-auto px-6 flex flex-col items-center text-center space-y-6 sm:space-y-8 w-full">
          <h2 className="text-3xl min-[380px]:text-4xl md:text-6xl font-black tracking-tight text-white">
            Ready to define your signature?
          </h2>
          <p className="text-[#d1d5db] text-sm sm:text-base max-w-xl mx-auto text-center leading-relaxed">
            Get in touch for a complimentary brand audit and executive digital presence roadmap consultation with our founders.
          </p>
          <div className="pt-2">
            <a 
              href="mailto:hello@shyftednext.com?subject=Signature%20Identity%20Consultation" 
              className="inline-flex items-center gap-2.5 px-10 py-5 bg-[#d7b36b] text-white font-bold uppercase tracking-widest text-xs sm:text-sm hover:bg-[#b8954d] transition-all rounded-2xl shadow-2xl hover:scale-105 transform duration-200"
            >
              Claim Free Consultation <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
