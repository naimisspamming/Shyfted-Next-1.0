import React, { useState, Suspense, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';
import { Header } from './components/Header';
import { SectionDivider } from './components/SectionDivider';
import { ShyftedLogo } from './components/Logo';
import { BlurReveal } from './components/BlurReveal';
import { HomePage } from './pages/HomePage';
import { TeamPage } from './pages/TeamPage';
import { NaimurBioPage } from './pages/NaimurBioPage';
import { MohaddesBioPage } from './pages/MohaddesBioPage';
import { RaiyanBioPage } from './pages/RaiyanBioPage';
import { NomanBioPage } from './pages/NomanBioPage';
import { RabbyBioPage } from './pages/RabbyBioPage';
import { ShyftedNextPage } from './pages/ShyftedNextPage';
import { ProjectModal } from './components/ProjectModal';
import { ContactDrawer } from './components/ContactDrawer';
import { FloatingWidget } from './components/FloatingWidget';
import { PortfolioProject } from './types';

function AppContent() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [location.pathname]);
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [contactInitialService, setContactInitialService] = useState<string>('video-editing');
  const [contactInitialProjectTitle, setContactInitialProjectTitle] = useState<string | undefined>();
  const [contactFlowType, setContactFlowType] = useState<'free-design' | 'basic-plan' | 'standard-plan' | 'premium-plan' | 'generic'>('generic');

  const handleOpenInquiry = (service: string = 'video-editing', projectTitle?: string, flowType: 'free-design' | 'basic-plan' | 'standard-plan' | 'premium-plan' | 'generic' = 'generic') => {
    setContactInitialService(service);
    setContactInitialProjectTitle(projectTitle);
    setContactFlowType(flowType);
    setIsContactOpen(true);
  };

  const handleScrollTo = (id: string) => {
    if (window.location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#07010e] bg-purple-ambient text-purple-50 flex flex-col selection:bg-purple-500 selection:text-white font-sans">
      <AnimatePresence>
      </AnimatePresence>
      
      <Header
        onScrollTo={handleScrollTo}
        onOpenContact={() => handleOpenInquiry('video-editing', undefined, 'free-design')}
      />

      <Routes>
        <Route path="/" element={<HomePage handleScrollTo={handleScrollTo} handleOpenInquiry={handleOpenInquiry} setSelectedProject={setSelectedProject} />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/naimur" element={<NaimurBioPage />} />
        <Route path="/mohaddes" element={<MohaddesBioPage />} />
        <Route path="/raiyan" element={<RaiyanBioPage />} />
        <Route path="/noman" element={<NomanBioPage />} />
        <Route path="/rabby" element={<RabbyBioPage />} />
        <Route path="/shyfted-next-2" element={<ShyftedNextPage />} />
      </Routes>

      <BlurReveal blurAmount={16} yOffset={20} duration={0.8}>
        <footer className="border-t border-purple-500/15 bg-[#05010a] py-8 text-xs text-purple-300/70 mt-20">
          <div className="max-w-5xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <ShyftedLogo size="xs" />
            </div>
            <div>© {new Date().getFullYear()} Shyfted Next Creative Studio.</div>
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-purple-300/70">
              <button onClick={() => handleScrollTo('work')} className="hover:text-white transition-colors">Work</button>
              <button onClick={() => handleScrollTo('services')} className="hover:text-white transition-colors">Solutions</button>
              <button onClick={() => handleScrollTo('process')} className="hover:text-white transition-colors">Process</button>
              <button onClick={() => navigate('/team')} className="hover:text-white transition-colors">Team</button>
              <button onClick={() => handleScrollTo('contact')} className="hover:text-white transition-colors">Contact</button>
            </div>
          </div>
        </footer>
      </BlurReveal>

      <Suspense fallback={null}>
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onOpenInquiry={handleOpenInquiry}
        />
      </Suspense>

      <Suspense fallback={null}>
        <ContactDrawer
          isOpen={isContactOpen}
          onClose={() => setIsContactOpen(false)}
          initialService={contactInitialService}
          initialProjectTitle={contactInitialProjectTitle}
          flowType={contactFlowType}
        />
      </Suspense>

      <FloatingWidget onOpenInquiry={handleOpenInquiry} />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
