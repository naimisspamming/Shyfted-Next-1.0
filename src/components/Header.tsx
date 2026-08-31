import React, { useState, useEffect } from 'react';
import { ShyftedLogo } from './Logo';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';

interface HeaderProps {
  onScrollTo: (sectionId: string) => void;
  onOpenContact: () => void;
  theme?: 'dark' | 'light';
  rotatingTexts?: string[];
  accentColor?: 'gold' | 'green';
  mobileMenuItems?: { label: string; action: () => void; isLink?: boolean }[];
  logoUrl?: string;
}

const DEFAULT_ROTATING_TEXTS = ['Get Free Design', 'Get Free Edit'];

export const Header: React.FC<HeaderProps> = ({
  onScrollTo,
  onOpenContact,
  theme = 'dark',
  rotatingTexts = DEFAULT_ROTATING_TEXTS,
  accentColor = 'green',
  mobileMenuItems,
  logoUrl,
}) => {
  const [textIndex, setTextIndex] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % rotatingTexts.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [rotatingTexts]);

  const handleScrollTo = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    onScrollTo(sectionId);
  };

  const handleOpenContact = () => {
    setIsMobileMenuOpen(false);
    onOpenContact();
  };

  const isLight = theme === 'light';
  const isGold = accentColor === 'gold';
  
  // Define colors based on accent
  const borderGradient = isGold 
    ? 'bg-[conic-gradient(from_0deg,transparent_0_240deg,rgba(215,179,107,0.2)_270deg,#d7b36b_320deg,#ebcf94_350deg,#f5f3ee_360deg)]'
    : 'bg-[conic-gradient(from_0deg,transparent_0_240deg,rgba(16,185,129,0.2)_270deg,#10b981_320deg,#4ade80_350deg,#86efac_360deg)]';
  const shadowClass = isGold ? 'shadow-[0_0_15px_rgba(215,179,107,0.25)]' : 'shadow-[0_0_15px_rgba(16,185,129,0.25)]';

  return (
    <>
      <header className={`sticky top-0 z-40 w-full backdrop-blur-xl border-b ${isLight ? 'bg-white/80 border-stone-200' : 'bg-[#080210]/80 border-purple-500/15'}`}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div 
            onClick={() => handleScrollTo('hero')}
            className="cursor-pointer flex items-center"
          >
            {logoUrl ? <img src={logoUrl} alt="Logo" className="h-8" /> : <ShyftedLogo size="sm" />}
          </div>

          <nav className={`hidden md:flex items-center gap-8 text-xs font-semibold ${isLight ? 'text-stone-700' : 'text-purple-200/70'}`}>
            <button onClick={() => handleScrollTo('work')} className={`hover:${isLight ? 'text-stone-900' : 'text-white'} transition-colors`}>Work</button>
            <button onClick={() => handleScrollTo('services')} className={`hover:${isLight ? 'text-stone-900' : 'text-white'} transition-colors`}>Services & Rates</button>
            <button onClick={() => handleScrollTo('process')} className={`hover:${isLight ? 'text-stone-900' : 'text-white'} transition-colors`}>Process</button>
          </nav>

          <div className="flex items-center gap-3">
            <div className={`relative p-[2.5px] rounded-[11px] overflow-hidden group ${shadowClass}`}>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 3, ease: 'linear' }}
                className={`absolute -inset-[180%] ${borderGradient} opacity-100`}
              />
              <button
                id="header-start-project-btn"
                onClick={handleOpenContact}
                className="relative w-[126px] sm:w-[134px] h-7 sm:h-8 px-2 rounded-[8.5px] font-bold text-[11px] sm:text-xs transition-all active:scale-95 cursor-pointer flex items-center justify-center gap-1 overflow-hidden z-10 bg-black text-white hover:bg-stone-900"
              >
                <div className="relative w-20 sm:w-22 h-3.5 flex items-center justify-center overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={rotatingTexts[textIndex]}
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.02 }}
                      transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
                      className="whitespace-nowrap absolute inset-0 flex items-center justify-center text-center font-bold text-[11px] sm:text-xs tracking-tight text-white"
                    >
                      {rotatingTexts[textIndex]}
                    </motion.span>
                  </AnimatePresence>
                </div>
                <ArrowUpRight className="w-3 h-3 shrink-0 text-white" />
              </button>
            </div>
            
            <button 
              className={`md:hidden ${isLight ? 'text-stone-900' : 'text-purple-200'}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`fixed inset-0 z-30 pt-20 px-6 md:hidden ${isLight ? 'bg-white' : 'bg-[#080210]'}`}
          >
            <nav className={`flex flex-col gap-6 text-lg font-semibold ${isLight ? 'text-stone-900' : 'text-purple-100'}`}>
              {mobileMenuItems ? (
                mobileMenuItems.map((item, idx) => (
                  item.isLink ? (
                    <Link key={idx} to="/" className="py-2" onClick={item.action}>{item.label}</Link>
                  ) : (
                    <button key={idx} onClick={item.action} className="text-left py-2">{item.label}</button>
                  )
                ))
              ) : (
                <>
                  <button onClick={() => handleScrollTo('work')} className="text-left py-2">Work</button>
                  <button onClick={() => handleScrollTo('services')} className="text-left py-2">Services & Rates</button>
                  <button onClick={() => handleScrollTo('process')} className="text-left py-2">Process</button>
                  <Link to="/team" className="py-2" onClick={() => setIsMobileMenuOpen(false)}>Team</Link>
                  <Link to="/signature-identity" className="py-2" onClick={() => setIsMobileMenuOpen(false)}>Signature Identity</Link>
                </>
              )}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
