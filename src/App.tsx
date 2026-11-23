import React, { useState, Suspense, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { SITE_CONFIG } from './config/siteConfig';
import { Header } from './components/Header';
import { ShyftedLogo } from './components/Logo';
import { HomePage } from './pages/HomePage';
import { SolutionsPage } from './pages/SolutionsPage';
import { SolutionDetailPage } from './pages/SolutionDetailPage';
import { CustomDevelopmentPage } from './pages/CustomDevelopmentPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { TeamPage } from './pages/TeamPage';
import { NaimurBioPage } from './pages/NaimurBioPage';
import { MohaddesBioPage } from './pages/MohaddesBioPage';
import { RaiyanBioPage } from './pages/RaiyanBioPage';
import { NomanBioPage } from './pages/NomanBioPage';
import { RabbyBioPage } from './pages/RabbyBioPage';
import { ContactDrawer } from './components/ContactDrawer';

function NotFound() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-24 text-center">
      <h1 className="text-4xl font-black text-[#111827] mb-3">404</h1>
      <p className="text-[#6B7280]">The page you are looking for does not exist.</p>
    </div>
  );
}

function AppContent() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [location.pathname]);

  const [isContactOpen, setIsContactOpen] = useState(false);
  const [contactInitialService, setContactInitialService] = useState<string>('custom-development');
  const [contactInitialProjectTitle, setContactInitialProjectTitle] = useState<string | undefined>();
  const [contactFlowType, setContactFlowType] = useState<'generic'>('generic');

  const handleOpenInquiry = (service: string = 'custom-development', projectTitle?: string) => {
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
        onOpenContact={() => handleOpenInquiry('custom-development')}
        rotatingTexts={['Get Started', 'Request a Quote']}
        menuItems={[
          { label: 'Home', isLink: true, to: '/' },
          { label: 'Solutions', isLink: true, to: '/solutions' },
          { label: 'Custom Development', isLink: true, to: '/custom-development' },
          { label: 'About Us', isLink: true, to: '/about' },
          { label: 'Contact', isLink: true, to: '/contact' },
          { label: 'Team', isLink: true, to: '/team' },
        ]}
      />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage handleScrollTo={handleScrollTo} handleOpenInquiry={handleOpenInquiry} />} />
          <Route path="/solutions" element={<SolutionsPage handleOpenInquiry={handleOpenInquiry} />} />
          <Route path="/solutions/:slug" element={<SolutionDetailPage handleOpenInquiry={handleOpenInquiry} />} />
          <Route path="/custom-development" element={<CustomDevelopmentPage handleOpenInquiry={handleOpenInquiry} />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/naimur" element={<NaimurBioPage />} />
          <Route path="/mohaddes" element={<MohaddesBioPage />} />
          <Route path="/raiyan" element={<RaiyanBioPage />} />
          <Route path="/noman" element={<NomanBioPage />} />
          <Route path="/rabby" element={<RabbyBioPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <footer className="border-t border-purple-500/15 bg-[#05010a] py-8 text-xs text-purple-300/70 mt-20">
        <div className="max-w-5xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <ShyftedLogo size="xs" />
          </div>
          <div>© {new Date().getFullYear()} Shyfted Next.</div>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-purple-300/70">
            <button onClick={() => navigate('/')} className="hover:text-white transition-colors">Home</button>
            <button onClick={() => navigate('/solutions')} className="hover:text-white transition-colors">Solutions</button>
            <button onClick={() => navigate('/custom-development')} className="hover:text-white transition-colors">Custom Development</button>
            <button onClick={() => navigate('/about')} className="hover:text-white transition-colors">About</button>
            <button onClick={() => navigate('/contact')} className="hover:text-white transition-colors">Contact</button>
            <button onClick={() => navigate('/team')} className="hover:text-white transition-colors">Team</button>
          </div>
        </div>
      </footer>

      <Suspense fallback={null}>
        <ContactDrawer
          isOpen={isContactOpen}
          onClose={() => setIsContactOpen(false)}
          initialService={contactInitialService}
          initialProjectTitle={contactInitialProjectTitle}
          flowType="generic"
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
