import React from 'react';

interface LogoProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'hero';
  showBackground?: boolean;
  className?: string;
  withTagline?: boolean;
}

export const ShyftedLogo: React.FC<LogoProps> = ({
  size = 'md',
  showBackground = false,
  className = '',
  withTagline = false,
}) => {
  const sizeMap = {
    xs: { width: 95, height: 32, viewBox: '0 0 260 90' },
    sm: { width: 130, height: 44, viewBox: '0 0 260 90' },
    md: { width: 165, height: 56, viewBox: '0 0 260 90' },
    lg: { width: 220, height: 75, viewBox: '0 0 260 90' },
    xl: { width: 280, height: 95, viewBox: '0 0 260 90' },
    hero: { width: 340, height: 115, viewBox: '0 0 260 90' },
  };

  const currentSize = sizeMap[size];

  const svgContent = (
    <svg
      width={currentSize.width}
      height={currentSize.height}
      viewBox={currentSize.viewBox}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="select-none filter drop-shadow-[0_2px_14px_rgba(168,85,247,0.3)]"
    >
      {/* 3 Slanted Grey Tally Marks above the y/f - Exactly like the reference image */}
      <g transform="skewX(-14) translate(14, 0)">
        <rect x="88" y="6" width="6.5" height="13" rx="1.5" fill="#8E8E93" />
        <rect x="99" y="6" width="6.5" height="13" rx="1.5" fill="#8E8E93" />
        <rect x="110" y="6" width="6.5" height="13" rx="1.5" fill="#8E8E93" />
      </g>

      {/* "Shyfted" in bold italicized typography */}
      <text
        x="6"
        y="50"
        fill="#FFFFFF"
        fontFamily="'Montserrat', 'Arial Black', 'Impact', sans-serif"
        fontWeight="900"
        fontStyle="italic"
        fontSize="48"
        letterSpacing="-0.03em"
      >
        Shyfted
      </text>

      {/* "Next" beneath right side */}
      <text
        x="126"
        y="78"
        fill="#FFFFFF"
        fontFamily="'Montserrat', 'Arial Black', 'Impact', sans-serif"
        fontWeight="900"
        fontStyle="italic"
        fontSize="28"
        letterSpacing="-0.02em"
      >
        Next
      </text>
    </svg>
  );

  if (showBackground) {
    return (
      <div
        className={`relative inline-flex items-center justify-center p-6 rounded-2xl overflow-hidden bg-gradient-to-b from-[#0e021a] to-[#3b0764] border border-purple-500/20 shadow-[0_12px_40px_rgba(0,0,0,0.6)] ${className}`}
      >
        <div className="absolute inset-0 bg-radial from-purple-500/20 via-transparent to-transparent pointer-events-none" />
        <div className="relative z-10 flex flex-col items-center">
          {svgContent}
          {withTagline && (
            <span className="mt-2 text-[10px] tracking-widest text-purple-300 font-bold uppercase">
              Video Editing &middot; Website Redesign
            </span>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className={`inline-flex flex-col items-start ${className}`}>
      {svgContent}
      {withTagline && (
        <span className="mt-0.5 text-[9px] tracking-widest text-purple-300 font-semibold uppercase pl-1">
          Video Editing &middot; Web Redesign
        </span>
      )}
    </div>
  );
};
