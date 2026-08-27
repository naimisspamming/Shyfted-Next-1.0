import React from 'react';
import { CLIENT_LOGOS } from '../data/portfolioData';
import { Cloud, Building2, Zap, Sun, Sparkles, Video } from 'lucide-react';

interface ClientMarqueeProps {
  className?: string;
}

const CLIENT_ICONS: Record<string, React.FC<{ className?: string }>> = {
  'Aura Cloud': Cloud,
  'Nexus Capital': Building2,
  'Kinetix Studio': Zap,
  'Solaris AI': Sun,
  'Maison Noire': Sparkles,
  'Alex Rivera Media': Video,
};

export const ClientMarquee: React.FC<ClientMarqueeProps> = ({ className = '' }) => {
  // Duplicate list to create a seamless infinite loop
  const marqueeItems = [...CLIENT_LOGOS, ...CLIENT_LOGOS, ...CLIENT_LOGOS, ...CLIENT_LOGOS];

  return (
    <div className={`w-full max-w-4xl mx-auto overflow-hidden relative ${className}`}>
      {/* Left and Right Edge Fade Masks */}
      <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-r from-[#07010e] via-[#07010e]/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-l from-[#07010e] via-[#07010e]/80 to-transparent z-10 pointer-events-none" />

      {/* Marquee Track */}
      <div className="py-2">
        <div className="animate-marquee flex items-center gap-4 sm:gap-6">
          {marqueeItems.map((client, index) => {
            const Icon = CLIENT_ICONS[client] || Sparkles;
            return (
              <div
                key={`${client}-${index}`}
                className="flex items-center gap-2 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-xl bg-purple-950/40 border border-purple-500/20 backdrop-blur-md text-purple-200/80 hover:text-white hover:border-purple-400/40 hover:bg-purple-900/40 transition-all cursor-default shrink-0 group select-none shadow-sm shadow-purple-950/50"
              >
                <Icon className="w-3.5 h-3.5 text-purple-400 group-hover:text-purple-300 transition-colors shrink-0" />
                <span className="text-[11px] sm:text-xs font-semibold tracking-wide uppercase whitespace-nowrap">
                  {client}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
