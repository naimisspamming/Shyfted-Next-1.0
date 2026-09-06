import React from 'react';

interface LogoProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'hero';
  showBackground?: boolean;
  className?: string;
  withTagline?: boolean;
}

const LOGO_URL = 'https://i.ibb.co.com/BHjC3Gbn/3697.webp';

// Prefetch logo image immediately on module load
if (typeof window !== 'undefined') {
  const preloader = new Image();
  preloader.src = LOGO_URL;
}

export const ShyftedLogo: React.FC<LogoProps> = ({
  size = 'md',
  showBackground = false,
  className = '',
  withTagline = false,
}) => {
  const sizeMap = {
    xs: { height: 'h-5 sm:h-6', imgHeight: 22 },
    sm: { height: 'h-6 sm:h-7', imgHeight: 28 },
    md: { height: 'h-7 sm:h-8', imgHeight: 32 },
    lg: { height: 'h-9 sm:h-10', imgHeight: 40 },
    xl: { height: 'h-12 sm:h-14', imgHeight: 52 },
    hero: { height: 'h-14 sm:h-16', imgHeight: 62 },
  };

  const currentSize = sizeMap[size];

  const logoImage = (
    <img
      src={LOGO_URL}
      alt="Shyfted Next Logo"
      width={currentSize.imgHeight * 3.75} // Approximate aspect ratio
      height={currentSize.imgHeight}
      className={`${currentSize.height} w-auto object-contain select-none filter drop-shadow-[0_2px_16px_rgba(168,85,247,0.35)] transition-transform duration-200`}
      referrerPolicy="no-referrer"
      loading="eager"
      fetchPriority="high"
    />
  );

  if (showBackground) {
    return (
      <div
        className={`relative inline-flex items-center justify-center p-5 rounded-2xl overflow-hidden bg-gradient-to-b from-[#0e021a] to-[#3b0764] border border-purple-500/20 shadow-[0_12px_40px_rgba(0,0,0,0.6)] ${className}`}
      >
        <div className="absolute inset-0 bg-radial from-purple-500/20 via-transparent to-transparent pointer-events-none" />
        <div className="relative z-10 flex flex-col items-center">
          {logoImage}
          {withTagline && (
            <span className="mt-2 text-[10px] tracking-widest text-purple-300 font-bold uppercase">
              Videos &middot; Websites
            </span>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className={`inline-flex flex-col items-start ${className}`}>
      {logoImage}
      {withTagline && (
        <span className="mt-0.5 text-[9px] tracking-widest text-purple-300 font-semibold uppercase pl-1">
          Videos &middot; Websites
        </span>
      )}
    </div>
  );
};

