import React from 'react';
import { ShyftedLogo } from './Logo';
import { ArrowUpRight } from 'lucide-react';

interface HeaderProps {
  onScrollTo: (sectionId: string) => void;
  onOpenContact: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onScrollTo,
  onOpenContact,
}) => {
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

        {/* Action Button */}
        <div className="flex items-center gap-3">
          <button
            id="header-start-project-btn"
            onClick={onOpenContact}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white text-purple-950 hover:bg-purple-50 font-bold text-xs transition-all shadow-md active:scale-95"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>Check Availability</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-purple-950" />
          </button>
        </div>
      </div>
    </header>
  );
};
