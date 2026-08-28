import React, { useState, Suspense } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import { Header } from './components/Header';
import { SectionDivider } from './components/SectionDivider';
import { ShyftedLogo } from './components/Logo';
import { BlurReveal } from './components/BlurReveal';
import { HomePage } from './pages/HomePage';
import { TeamPage } from './pages/TeamPage';
import { NaimurBioPage } from './pages/NaimurBioPage';
import { ProjectModal } from './components/ProjectModal';
import { ContactDrawer } from './components/ContactDrawer';
import { PortfolioProject } from './types';

function AppContent() {
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [contactInitialService, setContactInitialService] = useState<string>('video-editing');
  const [contactInitialProjectTitle, setContactInitialProjectTitle] = useState<string | undefined>();
  
  const navigate = useNavigate();

  const handleOpenInquiry = (service: string = 'video-editing', projectTitle?: string) => {
    setContactInitialService(service);
    setContactInitialProjectTitle(projectTitle);
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
      <Header
        onScrollTo={handleScrollTo}
        onOpenContact={() => handleOpenInquiry('video-editing')}
      />

      <Routes>
        <Route path="/" element={<HomePage handleScrollTo={handleScrollTo} handleOpenInquiry={handleOpenInquiry} setSelectedProject={setSelectedProject} />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/naimur" element={<NaimurBioPage />} />
      </Routes>

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
        />
      </Suspense>
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
