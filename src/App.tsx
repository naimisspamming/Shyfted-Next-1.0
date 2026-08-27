import React, { useState, useMemo } from 'react';
import { PORTFOLIO_PROJECTS, AGENCY_STATS, CLIENT_LOGOS } from './data/portfolioData';
import { PortfolioProject, ServiceType } from './types';
import { Header } from './components/Header';
import { VideoPlayerCard } from './components/VideoPlayerCard';
import { BeforeAfterSlider } from './components/BeforeAfterSlider';
import { ServicesSection } from './components/ServicesSection';
import { ProcessSection } from './components/ProcessSection';
import { CategoryTabs } from './components/CategoryTabs';
import { SectionDivider } from './components/SectionDivider';
import { ProjectModal } from './components/ProjectModal';
import { ContactDrawer } from './components/ContactDrawer';
import { ClientMarquee } from './components/ClientMarquee';
import { ShyftedLogo } from './components/Logo';
import { BlurReveal } from './components/BlurReveal';
import { motion, AnimatePresence } from 'motion/react';
import { Send, ChevronDown } from 'lucide-react';

export default function App() {
  const [serviceFilter, setServiceFilter] = useState<ServiceType>('video-editing');
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);
  
  // Contact Drawer State
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [contactInitialService, setContactInitialService] = useState<string>('video-editing');
  const [contactInitialProjectTitle, setContactInitialProjectTitle] = useState<string | undefined>();

  // Filtered projects
  const filteredProjects = useMemo(() => {
    return PORTFOLIO_PROJECTS.filter((p) => p.service === serviceFilter);
  }, [serviceFilter]);

  // Counts per category
  const projectCounts = useMemo<Record<ServiceType, number>>(() => {
    return {
      'video-editing': PORTFOLIO_PROJECTS.filter((p) => p.service === 'video-editing').length,
      'website-redesign': PORTFOLIO_PROJECTS.filter((p) => p.service === 'website-redesign').length,
    };
  }, []);

  const handleOpenInquiry = (service: string = 'video-editing', projectTitle?: string) => {
    setContactInitialService(service);
    setContactInitialProjectTitle(projectTitle);
    setIsContactOpen(true);
  };

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#07010e] bg-purple-ambient text-purple-50 flex flex-col selection:bg-purple-500 selection:text-white font-sans">
      {/* Header */}
      <Header
        onScrollTo={handleScrollTo}
        onOpenContact={() => handleOpenInquiry('video-editing')}
      />

      {/* HERO SECTION - Dedicated Full Screen Viewport */}
      <div className="relative w-full overflow-hidden border-b border-purple-500/10">
        {/* Background YouTube Video with smooth vertical feathering (higher at top, fading down to 10% at bottom) */}
        <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden select-none z-0">
          <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
            <iframe
              src="https://www.youtube-nocookie.com/embed/fbSaIHpeP-c?autoplay=1&mute=1&loop=1&playlist=fbSaIHpeP-c&controls=0&showinfo=0&rel=0&iv_load_policy=3&disablekb=1&modestbranding=1&playsinline=1&enablejsapi=1&fs=0&autohide=1"
              title="Hero Background Video"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300vw] h-[200vw] min-w-[200vh] min-h-[120vh] max-w-none max-h-none pointer-events-none opacity-60 border-0 outline-none select-none scale-125 transition-opacity duration-1000 grayscale contrast-125 saturate-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              tabIndex={-1}
            />
            {/* Transparent overlay to completely block interaction with the iframe */}
            <div className="absolute inset-0 w-full h-full z-10" />
          </div>
          {/* Smooth feather overlay: clear at top, smoothly transitioning down to 90% solid background (leaving ~10% effective video visibility at bottom) */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'linear-gradient(to bottom, rgba(7,1,14,0.05) 0%, rgba(7,1,14,0.2) 35%, rgba(7,1,14,0.65) 70%, rgba(7,1,14,0.90) 100%)'
            }}
          />
        </div>

        <section
          id="hero"
          className="min-h-[calc(100dvh-4rem)] w-full flex flex-col justify-between items-center text-center px-4 sm:px-6 py-6 sm:py-10 max-w-5xl mx-auto relative z-20"
        >
        <div className="w-full flex-1 flex flex-col justify-center items-center max-w-3xl mx-auto space-y-5 sm:space-y-6">
          <BlurReveal delay={0.08} blurAmount={20} yOffset={20} duration={0.8}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/70 border border-purple-500/30 text-[11px] sm:text-xs font-semibold text-purple-200 backdrop-blur-md shadow-[0_0_20px_rgba(168,85,247,0.15)] max-w-full">
              <span className="inline-block w-4 h-2.5 rounded-[2px] overflow-hidden shrink-0 shadow-sm border border-white/20 leading-none">
                <svg
                  viewBox="0 0 20 12"
                  className="w-full h-full block"
                  preserveAspectRatio="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="20" height="12" fill="#006a4e" />
                  <circle cx="9" cy="6" r="4.2" fill="#f42a41" />
                </svg>
              </span>
              <span className="whitespace-nowrap">Based In Dhaka, Serving Globally</span>
            </div>
          </BlurReveal>

          <BlurReveal delay={0.18} duration={0.9} blurAmount={24} yOffset={28}>
            <h1 className="text-[19px] min-[360px]:text-[21px] min-[400px]:text-[24px] min-[480px]:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.25] sm:leading-[1.12] max-w-none mx-auto">
              <span className="block whitespace-nowrap">Crafting High-Retention Videos</span>
              <span className="block whitespace-nowrap mt-1 sm:mt-1.5 text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-white to-purple-300">
                &amp; High-Converting Websites.
              </span>
            </h1>
          </BlurReveal>

          <BlurReveal delay={0.28} duration={0.85} blurAmount={20} yOffset={24}>
            <p className="text-[13px] sm:text-base text-purple-200/80 max-w-sm sm:max-w-xl mx-auto leading-relaxed font-normal px-1 sm:px-0 [text-wrap:balance]">
              We help ambitious creators, founders, and modern brands turn fleeting attention into devoted audiences and revenue through world-class visual storytelling.
            </p>
          </BlurReveal>

          <BlurReveal delay={0.38} duration={0.8} blurAmount={18} yOffset={20}>
            <div className="flex flex-row items-center justify-center gap-2 sm:gap-3 pt-2 w-full max-w-full mx-auto px-2">
              <button
                onClick={() => handleScrollTo('work')}
                className="whitespace-nowrap px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-white text-purple-950 hover:bg-purple-50 font-bold text-xs transition-all shadow-lg shadow-purple-950/40 active:scale-95 cursor-pointer"
              >
                Selected Work
              </button>
              <button
                onClick={() => handleOpenInquiry('all-inclusive')}
                className="whitespace-nowrap px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/25 text-purple-200 hover:text-white font-semibold text-xs transition-all cursor-pointer"
              >
                Apply for Next Sprint
              </button>
            </div>
          </BlurReveal>

          {/* Auto Loop Client Logos Slider */}
          <BlurReveal delay={0.48} duration={0.8} blurAmount={16} yOffset={16}>
            <div className="pt-2 sm:pt-4 w-full">
              <p className="text-[10px] sm:text-[11px] font-semibold tracking-widest uppercase text-purple-300/60 mb-2 sm:mb-2.5 text-center">
                Trusted by
              </p>
              <ClientMarquee />
            </div>
          </BlurReveal>
        </div>

        {/* Scroll Indicator */}
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

              {/* 2 Category Tabs - Centered Inline */}
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

          {/* Portfolio Grid with Step-by-Step Blur Reveal */}
          <AnimatePresence mode="wait">
            <motion.div
              key={serviceFilter}
              initial={{ opacity: 0, filter: 'blur(20px)', y: 24 }}
              animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
              exit={{ opacity: 0, filter: 'blur(20px)', y: -24 }}
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
                  {project.service === 'video-editing' ? (
                    <VideoPlayerCard
                      project={project}
                      onSelectProject={setSelectedProject}
                      onOpenInquiry={handleOpenInquiry}
                    />
                  ) : (
                    <BeforeAfterSlider
                      project={project}
                      onSelectProject={setSelectedProject}
                      onOpenInquiry={handleOpenInquiry}
                    />
                  )}
                </BlurReveal>
              ))}
            </motion.div>
          </AnimatePresence>
        </section>

        {/* SECTION DIVIDER */}
        <SectionDivider />

        {/* SERVICES SECTION */}
        <section id="services" className="space-y-8 scroll-mt-24">
          <ServicesSection onOpenInquiry={handleOpenInquiry} />
        </section>

        {/* SECTION DIVIDER */}
        <SectionDivider />

        {/* PROCESS SECTION (Category-Specific) */}
        <ProcessSection initialCategory={serviceFilter} />

        {/* SECTION DIVIDER */}
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
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-xs font-medium text-purple-200">Name</label>
                  <input
                    type="text"
                    placeholder="Jane Doe"
                    className="w-full px-3 py-2 rounded-xl bg-purple-950/40 border border-purple-500/20 text-white placeholder:text-purple-300/30 text-xs focus:outline-none focus:border-purple-400"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-medium text-purple-200">Work Email</label>
                  <input
                    type="email"
                    placeholder="jane@company.com"
                    className="w-full px-3 py-2 rounded-xl bg-purple-950/40 border border-purple-500/20 text-white placeholder:text-purple-300/30 text-xs focus:outline-none focus:border-purple-400"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-medium text-purple-200">Service Required</label>
                <select className="w-full px-3 py-2 rounded-xl bg-[#140628] border border-purple-500/20 text-white text-xs focus:outline-none focus:border-purple-400">
                  <option value="video-editing">Video Editing Sprint</option>
                  <option value="website-redesign">Website Redesign</option>
                  <option value="all-inclusive">All-in-One Growth Bundle</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-medium text-purple-200">Project Details or Links</label>
                <textarea
                  rows={3}
                  placeholder="Share your raw footage links, current website, or reference designs..."
                  className="w-full px-3 py-2 rounded-xl bg-purple-950/40 border border-purple-500/20 text-white placeholder:text-purple-300/30 text-xs focus:outline-none focus:border-purple-400 resize-none"
                />
              </div>

              <button
                onClick={() => handleOpenInquiry('video-editing')}
                className="w-full py-3 px-4 rounded-xl bg-white text-purple-950 hover:bg-purple-50 font-bold text-xs transition-all flex items-center justify-center gap-2 active:scale-95 shadow-md"
              >
                <Send className="w-3.5 h-3.5 text-purple-950" />
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

      {/* Clean Footer */}
      <BlurReveal blurAmount={16} yOffset={20} duration={0.8}>
        <footer className="border-t border-purple-500/15 bg-[#05010a] py-8 text-xs text-purple-300/70 mt-20">
          <div className="max-w-5xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <ShyftedLogo size="xs" />
            </div>
            <div>© {new Date().getFullYear()} Shyfted Next Creative Studio.</div>
            <div className="flex items-center gap-6 text-purple-300/70">
              <button onClick={() => handleScrollTo('work')} className="hover:text-white transition-colors">Work</button>
              <button onClick={() => handleScrollTo('services')} className="hover:text-white transition-colors">Services</button>
              <button onClick={() => handleScrollTo('contact')} className="hover:text-white transition-colors">Contact</button>
            </div>
          </div>
        </footer>
      </BlurReveal>

      {/* Project Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenInquiry={handleOpenInquiry}
      />

      {/* Quick Inquiry Drawer */}
      <ContactDrawer
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        initialService={contactInitialService}
        initialProjectTitle={contactInitialProjectTitle}
      />
    </div>
  );
}

