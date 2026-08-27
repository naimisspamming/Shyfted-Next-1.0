import React from 'react';

interface SectionDividerProps {
  className?: string;
}

export const SectionDivider: React.FC<SectionDividerProps> = ({ className = '' }) => {
  return (
    <div className={`w-full flex items-center justify-center py-6 sm:py-10 ${className}`} aria-hidden="true">
      <div className="relative w-full max-w-lg mx-auto flex items-center justify-center">
        {/* Subtle Outer Glow Line */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-purple-400/50 to-transparent" />
        {/* Bright Core Beam */}
        <div className="absolute w-36 sm:w-48 h-[2px] bg-gradient-to-r from-transparent via-purple-300 to-transparent blur-[0.5px]" />
        {/* Center Illuminated Diamond (Delicate & Petite) */}
        <div className="absolute w-1.5 h-1.5 rotate-45 bg-purple-200 shadow-[0_0_6px_rgba(216,180,254,0.9)]" />
      </div>
    </div>
  );
};
