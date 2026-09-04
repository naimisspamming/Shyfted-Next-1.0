import React, { useState, useMemo, Suspense } from 'react';
import { PORTFOLIO_PROJECTS, AGENCY_STATS, CLIENT_LOGOS } from '../data/portfolioData';
import { PortfolioProject, ServiceType } from '../types';
import { VideoPlayerCard } from '../components/VideoPlayerCard';
import { CategoryTabs } from '../components/CategoryTabs';
import { SectionDivider } from '../components/SectionDivider';
import { ClientMarquee } from '../components/ClientMarquee';
import { BlurReveal } from '../components/BlurReveal';
import { motion, AnimatePresence } from 'motion/react';
import { Send, ChevronDown, Lightbulb, Briefcase } from 'lucide-react';

const WebsiteCard = React.lazy(() => import('../components/WebsiteCard').then(m => ({ default: m.WebsiteCard })));
const ServicesSection = React.lazy(() => import('../components/ServicesSection').then(m => ({ default: m.ServicesSection })));
const ProcessSection = React.lazy(() => import('../components/ProcessSection').then(m => ({ default: m.ProcessSection })));

export function HomePage({ handleScrollTo, handleOpenInquiry, setSelectedProject }) {
  const [serviceFilter, setServiceFilter] = useState<ServiceType>('video-editing');
  
  const filteredProjects = useMemo(() => {
    return PORTFOLIO_PROJECTS.filter((p) => p.service === serviceFilter);
  }, [serviceFilter]);

  const projectCounts = useMemo<Record<ServiceType, number>>(() => {
    return {
      'video-editing': PORTFOLIO_PROJECTS.filter((p) => p.service === 'video-editing').length,
      'website-redesign': PORTFOLIO_PROJECTS.filter((p) => p.service === 'website-redesign').length,
    };
  }, []);

  return (
    <>
      {/* HERO SECTION - Dedicated Full Screen Viewport */}
      <div className="relative w-full overflow-hidden border-b border-purple-500/10">
        <section
          id="hero"
          className="min-h-[calc(100dvh-4rem)] w-full flex flex-col justify-between items-center text-center px-4 sm:px-6 py-6 sm:py-10 max-w-5xl mx-auto relative z-20"
        >
        <div className="w-full flex-1 flex flex-col justify-center items-center max-w-3xl mx-auto">
          {/* Group 1: Intro Content */}
          <div className="flex flex-col items-center space-y-5 sm:space-y-6">
            <BlurReveal delay={0.08} blurAmount={20} yOffset={20} duration={0.8}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/70 border border-purple-500/30 text-[11px] sm:text-xs font-semibold text-purple-200 backdrop-blur-md shadow-[0_0_20px_rgba(168,85,247,0.15)] max-w-full">
                <span className="inline-block w-4 h-2.5 rounded-[2px] overflow-hidden shrink-0 shadow-sm border border-white/20 leading-none">
                  <svg viewBox="0 0 20 12" className="w-full h-full block" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="20" height="12" fill="#006a4e" />
                    <circle cx="9" cy="6" r="4.2" fill="#f42a41" />
                  </svg>
                </span>
                <span className="whitespace-nowrap">Based In Dhaka, Serving Globally</span>
              </div>
            </BlurReveal>

            <BlurReveal delay={0.18} duration={0.9} blurAmount={24} yOffset={28}>
              <h1 className="text-2xl min-[360px]:text-[26px] min-[400px]:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.2] sm:leading-[1.12] max-w-3xl mx-auto break-words [text-wrap:balance]">
                <span className="inline sm:block">Crafting High-Retention Videos </span>
                <span className="inline sm:block mt-1 sm:mt-1.5 text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-white to-purple-300">
                  &amp; High-Converting Websites.
                </span>
              </h1>
            </BlurReveal>

            <BlurReveal delay={0.28} duration={0.85} blurAmount={20} yOffset={24}>
              <p className="text-xs min-[360px]:text-[13px] sm:text-base text-purple-200/80 max-w-sm sm:max-w-xl mx-auto leading-relaxed font-normal px-2 sm:px-0 [text-wrap:balance]">
                Shyfted Next provides professional video editing and modern website redesign services, helping businesses and brands build a stronger digital presence.
              </p>
            </BlurReveal>

            <BlurReveal delay={0.38} duration={0.8} blurAmount={18} yOffset={20}>
              <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 pt-2 w-full max-w-full mx-auto px-2">
                <button onClick={() => handleScrollTo('services')} className="whitespace-nowrap px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-white text-purple-950 hover:bg-purple-50 font-bold text-xs transition-all shadow-lg shadow-purple-950/40 active:scale-95 cursor-pointer flex items-center gap-1.5">
                  <Lightbulb className="w-3.5 h-3.5" />
                  Solutions
                </button>
                <button onClick={() => handleScrollTo('work')} className="whitespace-nowrap px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/25 text-purple-200 hover:text-white font-semibold text-xs transition-all cursor-pointer flex items-center gap-1.5">
                  <Briefcase className="w-3.5 h-3.5" />
                  Selected Work
                </button>
              </div>
            </BlurReveal>
          </div>

          {/* Trusted By - Slider Only */}
          <BlurReveal delay={0.48} duration={0.8} blurAmount={16} yOffset={16}>
            <div className="pt-12 sm:pt-16 w-full pb-8 opacity-80">
              <p className="text-[10px] sm:text-[11px] font-semibold tracking-widest uppercase text-purple-300/60 mb-0.5 sm:mb-1 text-center">
                Trusted by
              </p>
              <ClientMarquee />
            </div>
          </BlurReveal>
        </div>

        <div className="pt-2 pb-2">
          <button
            onClick={() => handleScrollTo('work')}
            aria-label="Scroll to Selected Work"
            className="flex flex-col items-center gap-1 text-[10px] text-purple-300/50 hover:text-purple-200 transition-colors group cursor-pointer"
          >
            <span className="tracking-widest uppercase text-[9px] font-medium">Explore Work</span>
            <ChevronDown className="w-4 h-4 animate-bounce text-purple-400 group-hover:text-white transition-colors" />
          </button>
        </div>
      </section>
    </div>

      {/* Main Content */}
      <main className="flex-1 max-w-5xl w-full mx-auto px-4 sm:px-6 py-12 md:py-16 flex flex-col gap-12 sm:gap-16">

        {/* WORK SECTION */}
        <section id="work" className="space-y-8 scroll-mt-24">
          <BlurReveal blurAmount={20} yOffset={24} duration={0.8}>
            <div className="text-center space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Selected Work</h2>
              <div className="flex justify-center">
                <CategoryTabs
                  activeCategory={serviceFilter}
                  onChange={setServiceFilter}
                  variant="deliverables"
                  counts={projectCounts}
                  idPrefix="work-filter"
                />
              </div>
            </div>
          </BlurReveal>

          <AnimatePresence mode="wait">
            <motion.div
              key={serviceFilter}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 transform-gpu"
            >
               {filteredProjects.map((project, index) => (
                <BlurReveal
                  key={project.id}
                  delay={index * 0.12}
                  duration={0.8}
                  blurAmount={22}
                  yOffset={28}
                  amount={0.1}
                >
                  <Suspense fallback={<div className="aspect-video rounded-2xl bg-purple-950/20 animate-pulse" />}>
                    {project.service === 'video-editing' ? (
                      <VideoPlayerCard
                        project={project}
                        onSelectProject={setSelectedProject}
                        onOpenInquiry={handleOpenInquiry}
                      />
                    ) : (
                      <WebsiteCard
                        project={project}
                        onSelectProject={setSelectedProject}
                        onOpenInquiry={handleOpenInquiry}
                      />
                    )}
                  </Suspense>
                </BlurReveal>
              ))}
            </motion.div>
          </AnimatePresence>
        </section>

        <SectionDivider />

        {/* SERVICES SECTION */}
        <section id="services" className="space-y-8 scroll-mt-24">
          <Suspense fallback={<div className="h-[400px] w-full rounded-2xl bg-purple-950/20 animate-pulse" />}>
            <ServicesSection onOpenInquiry={handleOpenInquiry} />
          </Suspense>
        </section>

        <SectionDivider />

        {/* PROCESS SECTION (Category-Specific) */}
        <Suspense fallback={<div className="h-[400px] w-full rounded-2xl bg-purple-950/20 animate-pulse" />}>
          <ProcessSection initialCategory={serviceFilter} />
        </Suspense>

        <SectionDivider />

        {/* INQUIRY SECTION */}
        <section id="contact" className="space-y-8 max-w-xl mx-auto scroll-mt-24">
          <BlurReveal blurAmount={20} yOffset={24} duration={0.8}>
            <div className="text-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Reserve a Production Window</h2>
            </div>
          </BlurReveal>

          <BlurReveal blurAmount={24} yOffset={28} duration={0.85} delay={0.1}>
            <div className="p-6 rounded-2xl bg-[#0f041e]/90 border border-purple-500/15 space-y-4 shadow-xl shadow-purple-950/30">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase tracking-wider font-semibold text-purple-300/70">Name</label>
                  <input type="text" placeholder="Jane Doe" className="w-full px-4 py-3 rounded-xl bg-purple-950/20 border border-purple-500/20 text-white placeholder:text-purple-300/30 text-sm focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase tracking-wider font-semibold text-purple-300/70">Work Email</label>
                  <input type="email" placeholder="jane@company.com" className="w-full px-4 py-3 rounded-xl bg-purple-950/20 border border-purple-500/20 text-white placeholder:text-purple-300/30 text-sm focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all" />
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="service-select" className="text-[10px] uppercase tracking-wider font-semibold text-purple-300/70">Service Required</label>
                <select id="service-select" className="w-full px-4 py-3 rounded-xl bg-purple-950/20 border border-purple-500/20 text-white text-sm focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all">
                  <option value="video-editing">Video Editing Sprint</option>
                  <option value="website-redesign">Website Redesign</option>
                  <option value="all-inclusive">All-in-One Growth Bundle</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] uppercase tracking-wider font-semibold text-purple-300/70">Project Details or Links</label>
                <textarea rows={4} placeholder="Share your raw footage links, current website, or reference designs..." className="w-full px-4 py-3 rounded-xl bg-purple-950/20 border border-purple-500/20 text-white placeholder:text-purple-300/30 text-sm focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all resize-none" />
              </div>

              <button onClick={() => handleOpenInquiry('video-editing')} className="w-full py-4 px-4 rounded-xl bg-white text-purple-950 hover:bg-purple-50 font-bold text-sm transition-all flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] active:scale-[0.98] shadow-md">
                <Send className="w-4 h-4 text-purple-950" />
                <span>Request Availability & Proposal</span>
              </button>

              <div className="pt-2 border-t border-purple-500/15 flex items-center justify-between text-[11px] text-purple-300/60">
                <span>Direct: hello@shyftednext.com</span>
                <span>Response: &lt; 4 hours</span>
              </div>
            </div>
          </BlurReveal>
        </section>

      </main>
    </>
  );
}
