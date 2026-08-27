import React, { useState } from 'react';
import { AGENCY_SERVICES } from '../data/portfolioData';
import { ServiceType } from '../types';
import { Check, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { BlurReveal } from './BlurReveal';
import { CategoryTabs } from './CategoryTabs';

interface ServicesSectionProps {
  onOpenInquiry: (service: string, packageTitle?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenInquiry }) => {
  const [selectedServiceId, setSelectedServiceId] = useState<ServiceType>('video-editing');

  const activeService = AGENCY_SERVICES.find((s) => s.id === selectedServiceId) || AGENCY_SERVICES[0];

  return (
    <div className="space-y-8">
      {/* Centered Header & Category Switcher */}
      <BlurReveal blurAmount={20} yOffset={24} duration={0.8}>
        <div className="text-center space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Services & Transparent Rates</h2>

          <div className="flex justify-center">
            <CategoryTabs
              activeCategory={selectedServiceId}
              onChange={setSelectedServiceId}
              variant="services"
              idPrefix="service-tab"
            />
          </div>
        </div>
      </BlurReveal>

      {/* Pricing Tiers Grid with step-by-step blur reveals */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`grid-${selectedServiceId}`}
          initial={{ opacity: 0, filter: 'blur(22px)', y: 22 }}
          animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
          exit={{ opacity: 0, filter: 'blur(22px)', y: -22 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 transform-gpu"
        >
          {activeService.packages.map((pkg, idx) => (
            <BlurReveal
              key={idx}
              delay={idx * 0.05}
              duration={0.4}
              blurAmount={6}
              yOffset={10}
              className={`p-6 rounded-2xl border flex flex-col justify-between transition-all ${
                pkg.popular
                  ? 'bg-[#18082c] border-purple-500/40 shadow-xl shadow-purple-950/40 relative'
                  : 'bg-[#0f041e]/90 border-purple-500/15'
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <h4 className="text-base font-bold text-white">{pkg.name}</h4>
                  {pkg.popular && (
                    <span className="px-2.5 py-0.5 rounded-md text-[10px] font-extrabold bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow-sm">
                      Recommended
                    </span>
                  )}
                </div>
                <p className="text-xs text-purple-200/60 min-h-[32px]">{pkg.description}</p>

                <div className="flex items-baseline gap-1 my-4">
                  <span className="text-2xl font-black text-white">{pkg.price}</span>
                  {pkg.period && (
                    <span className="text-xs text-purple-300/70 font-medium">{pkg.period}</span>
                  )}
                </div>

                <div className="space-y-2 border-t border-purple-500/15 pt-4 mb-6">
                  {pkg.perks.map((perk, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-purple-100">
                      <Check className="w-3.5 h-3.5 text-purple-400 flex-shrink-0 mt-0.5" />
                      <span>{perk}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                id={`select-pkg-${pkg.name.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={() => onOpenInquiry(selectedServiceId, `${pkg.name} (${pkg.price})`)}
                className={`w-full py-2.5 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 active:scale-95 ${
                  pkg.popular
                    ? 'bg-white text-purple-950 hover:bg-purple-50 shadow-md'
                    : 'bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/20 text-purple-100'
                }`}
              >
                <span>Select {pkg.name}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </BlurReveal>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
