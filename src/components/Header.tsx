import React, { useState, useEffect } from 'react';
import { ShyftedLogo } from './Logo';
import { ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HeaderProps {
  onScrollTo: (sectionId: string) => void;
  onOpenContact: () => void;
}

const ROTATING_TEXTS = ['Get Free Design', 'Get Free Edit'];

export const Header: React.FC<HeaderProps> = ({
  onScrollTo,
  onOpenContact,
}) => {
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % ROTATING_TEXTS.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <header className="sticky top-0 z-40 w-full bg-[#080210]/80 backdrop-blur-xl border-b border-purple-500/15">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <div 
          onClick={() => onScrollTo('hero')}
          className="cursor-pointer flex items-center"
        >
          <ShyftedLogo size="sm" />
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-semibold text-purple-200/70">
          <button
            onClick={() => onScrollTo('work')}
            className="hover:text-white transition-colors"
          >
            Work
          </button>
          <button
            onClick={() => onScrollTo('services')}
            className="hover:text-white transition-colors"
          >
            Services & Rates
          </button>
          <button
            onClick={() => onScrollTo('process')}
            className="hover:text-white transition-colors"
          >
            Process
          </button>
        </nav>

        {/* Action Button with 3s Alternating Text & Thicker Green Motion Border */}
        <div className="flex items-center gap-3">
          <div className="relative p-[2.5px] rounded-[11px] overflow-hidden group shadow-[0_0_15px_rgba(16,185,129,0.25)]">
            {/* Animated Rotating Green Motion Line Border with bolder glow and wider arc */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 3, ease: 'linear' }}
              className="absolute -inset-[180%] bg-[conic-gradient(from_0deg,transparent_0_240deg,rgba(16,185,129,0.2)_270deg,#10b981_320deg,#4ade80_350deg,#86efac_360deg)] opacity-100"
            />

            <button
              id="header-start-project-btn"
              onClick={onOpenContact}
              className="relative w-[126px] sm:w-[134px] h-7 sm:h-8 px-2 rounded-[8.5px] bg-white text-purple-950 hover:bg-purple-50 font-bold text-[11px] sm:text-xs transition-all active:scale-95 cursor-pointer flex items-center justify-center gap-1 overflow-hidden z-10"
            >
              <div className="relative w-20 sm:w-22 h-3.5 flex items-center justify-center overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={ROTATING_TEXTS[textIndex]}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.02 }}
                    transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
                    className="whitespace-nowrap absolute inset-0 flex items-center justify-center text-center font-bold text-[11px] sm:text-xs text-purple-950 tracking-tight"
                  >
                    {ROTATING_TEXTS[textIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
              <ArrowUpRight className="w-3 h-3 text-purple-950 shrink-0" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
