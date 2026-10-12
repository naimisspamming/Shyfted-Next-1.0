import React, { useState, useEffect } from 'react';
import { ShyftedLogo } from './Logo';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';

export interface MenuItem {
  label: string;
  action?: () => void;
  isLink?: boolean;
  to?: string;
  badge?: string;
}

interface HeaderProps {
  onScrollTo: (sectionId: string) => void;
  onOpenContact: () => void;
  theme?: 'dark' | 'light';
  rotatingTexts?: string[];
  accentColor?: 'gold' | 'green';
  menuItems?: MenuItem[];
  mobileMenuItems?: MenuItem[];
  logoUrl?: string;
}

const DEFAULT_ROTATING_TEXTS = ['Get Free Design', 'Get Free Edit'];

export const Header: React.FC<HeaderProps> = ({
  onScrollTo,
  onOpenContact,
  theme = 'dark',
  rotatingTexts = DEFAULT_ROTATING_TEXTS,
  accentColor = 'green',
  menuItems,
  mobileMenuItems,
  logoUrl,
}) => {
  const [textIndex, setTextIndex] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

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

  // Compute navigation items
  const activeMenuItems: MenuItem[] = menuItems || mobileMenuItems || [
    { label: 'Work', action: () => handleScrollTo('work') },
    { label: 'Solutions', action: () => handleScrollTo('services') },
    { label: 'Process', action: () => handleScrollTo('process') },
    { label: 'Team', isLink: true, to: '/team' },
    { label: 'Shyfted Next', isLink: true, to: '/shyfted-next-2', badge: '2.0' },
  ];

  const renderNavElement = (item: MenuItem, isMobile = false) => {
    const isCurrent = item.to && location.pathname === item.to;
    const baseClasses = isMobile
      ? `text-left py-2 flex items-center justify-between transition-colors ${
          isCurrent
            ? isLight ? 'text-[#d7b36b] font-bold' : 'text-white font-bold'
            : isLight ? 'text-stone-800 hover:text-[#d7b36b]' : 'text-purple-200 hover:text-white'
        }`
      : `transition-all cursor-pointer flex items-center gap-1.5 py-1 ${
          isCurrent
            ? isLight ? 'text-stone-950 font-bold border-b border-[#d7b36b]' : 'text-white font-bold border-b border-purple-400'
            : isLight ? 'text-stone-600 hover:text-stone-900' : 'text-purple-200/70 hover:text-white'
        }`;

    const content = (
      <>
        <span>{item.label}</span>
        {item.badge && (
          <span className={`text-[9px] uppercase tracking-wider px-1.5 py-0.5 rounded-full font-semibold ${
            isLight ? 'bg-[#d7b36b]/15 text-[#b8954d]' : 'bg-purple-500/20 text-purple-300 border border-purple-500/30'
          }`}>
            {item.badge}
          </span>
        )}
      </>
    );

    if (item.isLink && item.to) {
      return (
        <Link
          key={item.label}
          to={item.to}
          className={baseClasses}
          onClick={() => {
            if (isMobile) setIsMobileMenuOpen(false);
            if (item.action) item.action();
          }}
        >
          {content}
        </Link>
      );
    }

    return (
      <button
        key={item.label}
        onClick={() => {
          if (isMobile) setIsMobileMenuOpen(false);
          if (item.action) item.action();
        }}
        className={baseClasses}
      >
        {content}
      </button>
    );
  };

  return (
    <>
      <header className={`sticky top-0 z-40 w-full backdrop-blur-xl border-b ${isLight ? 'bg-white/80 border-stone-200' : 'bg-[#080210]/80 border-purple-500/15'}`}>
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between gap-3">
          <div 
            onClick={() => handleScrollTo('hero')}
            className="cursor-pointer flex items-center shrink-0"
          >
            {logoUrl ? <img src={logoUrl} alt="Logo" className="h-7 sm:h-8" /> : <ShyftedLogo size="sm" />}
          </div>

          <nav className={`hidden md:flex items-center gap-5 lg:gap-7 text-xs font-semibold ${isLight ? 'text-stone-700' : 'text-purple-200/70'}`}>
            {activeMenuItems.map((item) => renderNavElement(item, false))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <div className={`relative p-[2px] sm:p-[2.5px] rounded-[11px] overflow-hidden group shrink-0 ${shadowClass}`}>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 3, ease: 'linear' }}
                className={`absolute -inset-[180%] ${borderGradient} opacity-100`}
              />
              <button
                id="header-start-project-btn"
                onClick={handleOpenContact}
                className="relative w-[138px] min-[360px]:w-[148px] sm:w-[158px] h-7 sm:h-8 px-2 sm:px-2.5 rounded-[8.5px] font-bold text-[10.5px] min-[360px]:text-[11px] sm:text-xs transition-all active:scale-95 cursor-pointer flex items-center justify-center gap-1.5 z-10 bg-white text-black hover:bg-stone-100"
              >
                <div className="relative w-[96px] min-[360px]:w-[104px] sm:w-[114px] h-3.5 flex items-center justify-center overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={rotatingTexts[textIndex]}
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.02 }}
                      transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
                      className="whitespace-nowrap absolute inset-0 flex items-center justify-center text-center font-bold text-[10.5px] min-[360px]:text-[11px] sm:text-xs tracking-tight text-black"
                    >
                      {rotatingTexts[textIndex]}
                    </motion.span>
                  </AnimatePresence>
                </div>
                <ArrowUpRight className="w-3 h-3 shrink-0 text-black" />
              </button>
            </div>
            
            <button 
              className={`md:hidden p-1 ${isLight ? 'text-stone-900' : 'text-purple-200'}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
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
            className={`fixed inset-0 z-30 pt-20 px-6 pb-10 overflow-y-auto md:hidden ${isLight ? 'bg-white' : 'bg-[#080210]'}`}
          >
            <nav className={`flex flex-col gap-4 text-lg font-semibold ${isLight ? 'text-stone-900' : 'text-purple-100'}`}>
              {activeMenuItems.map((item) => renderNavElement(item, true))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

