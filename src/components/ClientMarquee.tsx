import React from 'react';
import { CLIENT_LOGOS_URLS } from '../data/portfolioData';

interface ClientMarqueeProps {
  className?: string;
}

export const ClientMarquee: React.FC<ClientMarqueeProps> = ({ className = '' }) => {
  // Duplicate list to create a seamless infinite loop
  const marqueeItems = [...CLIENT_LOGOS_URLS, ...CLIENT_LOGOS_URLS];

  return (
    <div className={`w-full max-w-4xl mx-auto overflow-hidden relative ${className}`}>
      {/* Left and Right Edge Fade Masks */}
      <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-r from-[#07010e] via-[#07010e]/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-l from-[#07010e] via-[#07010e]/80 to-transparent z-10 pointer-events-none" />

      {/* Marquee Track */}
      <div className="py-2">
        <div className="animate-marquee flex items-center gap-8 sm:gap-12">
          {marqueeItems.map((logo, index) => (
            <div
              key={`${index}`}
              className="shrink-0 select-none w-32 sm:w-40 flex items-center justify-center"
            >
              <img
                src={logo}
                alt=""
                className="h-8 sm:h-12 w-auto brightness-0 invert"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
