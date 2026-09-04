import React from 'react';
import { motion } from 'motion/react';
import { CLIENT_LOGOS_URLS } from '../data/portfolioData';

interface ClientMarqueeProps {
  className?: string;
}

export const ClientMarquee: React.FC<ClientMarqueeProps> = ({ className = '' }) => {
  const marqueeItems = [...CLIENT_LOGOS_URLS, ...CLIENT_LOGOS_URLS];

  return (
    <div className={`w-full overflow-hidden relative py-4 sm:py-16 ${className}`}>
      {/* Left and Right Edge Fade Masks */}
      <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-r from-[#07010e] via-[#07010e]/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-l from-[#07010e] via-[#07010e]/80 to-transparent z-10 pointer-events-none" />

      {/* Marquee Track */}
      <motion.div
        className="flex items-center gap-8 sm:gap-12 w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
        style={{ willChange: 'transform', transform: 'translateZ(0)' }}
      >
        {marqueeItems.map((logo, index) => (
          <div
            key={`${index}`}
            className="shrink-0 select-none w-32 sm:w-40 flex items-center justify-center"
          >
            <img
              src={logo}
              alt="Client Logo"
              width="160"
              height="48"
              loading="lazy"
              className="max-h-8 sm:max-h-12 w-auto object-contain brightness-0 invert"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};
