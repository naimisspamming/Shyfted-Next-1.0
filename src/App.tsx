import React, { useState, useMemo } from 'react';
import { PORTFOLIO_PROJECTS, AGENCY_STATS, CLIENT_LOGOS } from './data/portfolioData';
import { PortfolioProject, ServiceType } from './types';
import { Header } from './components/Header';
import { VideoPlayerCard } from './components/VideoPlayerCard';
import { BeforeAfterSlider } from './components/BeforeAfterSlider';
import { GoogleVisibilityCard } from './components/GoogleVisibilityCard';
import { ServicesSection } from './components/ServicesSection';
import { ProcessSection } from './components/ProcessSection';
import { CategoryTabs } from './components/CategoryTabs';
import { ProjectModal } from './components/ProjectModal';
import { ContactDrawer } from './components/ContactDrawer';
import { ShyftedLogo } from './components/Logo';
import { BlurReveal } from './components/BlurReveal';
import { motion, AnimatePresence } from 'motion/react';
import { Send } from 'lucide-react';

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
      'google-visibility': PORTFOLIO_PROJECTS.filter((p) => p.service === 'google-visibility').length,
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

      {/* Main Content */}
      <main className="flex-1 max-w-5xl w-full mx-auto px-4 sm:px-6 py-12 md:py-20 space-y-28">
        
        {/* HERO SECTION */}
        <section id="hero" className="text-center max-w-3xl mx-auto space-y-6 pt-4">
          <BlurReveal delay={0.04} blurAmount={8} yOffset={10} duration={0.4}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/60 border border-purple-500/30 text-xs font-semibold text-purple-300 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Limited Intake: 1 Production Slot Remaining</span>
            </div>
          </BlurReveal>

          <BlurReveal delay={0.08} duration={0.45} blurAmount={8} yOffset={12}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-[1.12]">
              Viral Video Edits. Sleek Websites.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-white to-purple-300">
                #1 Google Ranks.
              </span>
            </h1>
          </BlurReveal>

          <BlurReveal delay={0.12} duration={0.42} blurAmount={6} yOffset={10}>
            <p className="text-sm sm:text-base text-purple-200/80 max-w-xl mx-auto leading-relaxed font-normal">
              Turn raw attention into revenue. We engineer high-retention video edits, conversion-first web redesigns, and guaranteed top-ranking Google SEO.
            </p>
          </BlurReveal>

          <BlurReveal delay={0.15} duration={0.4} blurAmount={6} yOffset={10}>
            <div className="flex items-center justify-center gap-3 pt-2">
              <button
                onClick={() => handleScrollTo('work')}
                className="px-6 py-3 rounded-xl bg-white text-purple-950 hover:bg-purple-50 font-bold text-xs transition-all shadow-lg shadow-purple-950/40 active:scale-95"
              >
                Selected Work
              </button>
              <button
                onClick={() => handleOpenInquiry('all-inclusive')}
                className="px-6 py-3 rounded-xl bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/25 text-purple-200 hover:text-white font-semibold text-xs transition-all"
              >
                Apply for Next Sprint
              </button>
            </div>
          </BlurReveal>

          {/* Social Proof Strip */}
          <BlurReveal delay={0.18} duration={0.45} blurAmount={8} yOffset={12}>
            <div className="grid grid-cols-3 gap-4 pt-12 border-t border-purple-500/15 max-w-md mx-auto">
              {AGENCY_STATS.map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-2xl font-black text-white tracking-tight">{stat.value}</div>
                  <div className="text-[11px] text-purple-300/70 mt-0.5 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </BlurReveal>

          {/* Clean Client Names */}
          <BlurReveal delay={0.2} duration={0.4} blurAmount={6} yOffset={8}>
            <div className="pt-2 flex flex-wrap items-center justify-center gap-6 opacity-40">
              {CLIENT_LOGOS.map((client, i) => (
                <span key={i} className="text-[11px] font-bold tracking-wider uppercase text-purple-300">
                  {client}
                </span>
              ))}
            </div>
          </BlurReveal>
        </section>

        {/* WORK SECTION */}
        <section id="work" className="space-y-8 scroll-mt-24">
          <BlurReveal blurAmount={8} yOffset={12} duration={0.4}>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-purple-500/15 pb-4">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Selected Work</h2>
                <p className="text-xs text-purple-300/70 mt-0.5">Measurable reach, retention, and search ranking results</p>
              </div>

              {/* 3 Category Tabs - Single Inline */}
              <CategoryTabs
                activeCategory={serviceFilter}
                onChange={setServiceFilter}
                counts={projectCounts}
                idPrefix="work-filter"
                className="self-start sm:self-auto"
              />
            </div>
          </BlurReveal>

          {/* Portfolio Grid with Step-by-Step Blur Reveal */}
          <AnimatePresence mode="wait">
            <motion.div
              key={serviceFilter}
              initial={{ opacity: 0, filter: 'blur(8px)', y: 12 }}
              animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
              exit={{ opacity: 0, filter: 'blur(8px)', y: -12 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 transform-gpu"
            >
              {filteredProjects.map((project, index) => (
                <BlurReveal
                  key={project.id}
                  delay={index * 0.05}
                  duration={0.4}
                  blurAmount={8}
                  yOffset={12}
                  amount={0.05}
                >
                  {project.service === 'video-editing' ? (
                    <VideoPlayerCard
                      project={project}
                      onSelectProject={setSelectedProject}
                      onOpenInquiry={handleOpenInquiry}
                    />
                  ) : project.service === 'website-redesign' ? (
                    <BeforeAfterSlider
                      project={project}
                      onSelectProject={setSelectedProject}
                      onOpenInquiry={handleOpenInquiry}
                    />
                  ) : (
                    <GoogleVisibilityCard
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

        {/* SERVICES SECTION */}
        <section id="services" className="space-y-8 scroll-mt-24">
          <BlurReveal blurAmount={8} yOffset={12} duration={0.4}>
            <div className="text-center space-y-1">
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Services & Transparent Rates</h2>
              <p className="text-xs text-purple-300/70">Fixed pricing with guaranteed sprint delivery times</p>
            </div>
          </BlurReveal>

          <ServicesSection onOpenInquiry={handleOpenInquiry} />
        </section>

        {/* PROCESS SECTION (Category-Specific) */}
        <ProcessSection initialCategory={serviceFilter} />

        {/* INQUIRY SECTION */}
        <section id="contact" className="space-y-6 max-w-xl mx-auto scroll-mt-24">
          <BlurReveal blurAmount={8} yOffset={12} duration={0.4}>
            <div className="text-center space-y-1">
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Reserve a Production Window</h2>
              <p className="text-xs text-purple-300/70">Tell us about your project. We reply with a proposal in &lt; 4 hours.</p>
            </div>
          </BlurReveal>

          <BlurReveal blurAmount={8} yOffset={12} duration={0.45} delay={0.05}>
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
                  <option value="google-visibility">Google Visibility & Search Dominance</option>
                  <option value="all-inclusive">All-in-One Growth Bundle</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-medium text-purple-200">Project Details or Links</label>
                <textarea
                  rows={3}
                  placeholder="Share your raw footage links, current website, or target keywords..."
                  className="w-full px-3 py-2 rounded-xl bg-purple-950/40 border border-purple-500/20 text-white placeholder:text-purple-300/30 text-xs focus:outline-none focus:border-purple-400 resize-none"
                />
              </div>

              <button
                onClick={() => handleOpenInquiry('google-visibility')}
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
      <BlurReveal blurAmount={6} yOffset={10} duration={0.4}>
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

