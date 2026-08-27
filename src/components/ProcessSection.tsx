import React, { useState } from 'react';
import { ServiceType } from '../types';
import { CategoryTabs } from './CategoryTabs';
import { motion, AnimatePresence } from 'motion/react';
import { BlurReveal } from './BlurReveal';
import {
  UploadCloud,
  Scissors,
  Sparkles,
  RefreshCw,
  Rocket,
  MessageSquare,
  Layout,
  PenTool,
  Code2,
  CheckCircle2,
} from 'lucide-react';

interface ProcessStep {
  number: string;
  title: string;
  desc: string;
  icon: React.FC<{ className?: string }>;
}

const CATEGORY_PROCESSES: Record<ServiceType, ProcessStep[]> = {
  'video-editing': [
    {
      number: '1',
      title: 'Send Footage',
      desc: 'Upload your raw video clips, brief, or reference links.',
      icon: UploadCloud,
    },
    {
      number: '2',
      title: 'Hook & Pacing',
      desc: 'We cut the dead air and structure a high-retention opening hook.',
      icon: Scissors,
    },
    {
      number: '3',
      title: 'VFX & Sound',
      desc: 'We add animated subtitles, motion zoom-ins, and sound effects.',
      icon: Sparkles,
    },
    {
      number: '4',
      title: 'Review & Feedback',
      desc: 'Review your initial cut and request any adjustments.',
      icon: RefreshCw,
    },
    {
      number: '5',
      title: 'Ready to Post',
      desc: 'Receive algorithm-ready 4K exports in under 48 hours.',
      icon: Rocket,
    },
  ],
  'website-redesign': [
    {
      number: '1',
      title: 'Share Goals',
      desc: 'Tell us about your brand, current site, and desired conversion goals.',
      icon: MessageSquare,
    },
    {
      number: '2',
      title: 'Layout & Flow',
      desc: 'We map out a clean user journey and conversion-focused copy.',
      icon: Layout,
    },
    {
      number: '3',
      title: 'UI Design',
      desc: 'We design bespoke desktop and mobile screens with modern aesthetics.',
      icon: PenTool,
    },
    {
      number: '4',
      title: 'Speed Build',
      desc: 'We build your responsive site optimized for sub-second load times.',
      icon: Code2,
    },
    {
      number: '5',
      title: 'Launch Live',
      desc: 'Your polished, high-converting website goes live seamlessly.',
      icon: CheckCircle2,
    },
  ],
};

interface ProcessSectionProps {
  initialCategory?: ServiceType;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ initialCategory = 'video-editing' }) => {
  const [activeCategory, setActiveCategory] = useState<ServiceType>(initialCategory);
  const steps = CATEGORY_PROCESSES[activeCategory];

  return (
    <section id="process" className="space-y-6 scroll-mt-24">
      <BlurReveal blurAmount={20} yOffset={20} duration={0.8}>
        <div className="text-center space-y-3">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">How We Work</h2>

          {/* Category Switcher */}
          <div className="flex justify-center pt-1">
            <CategoryTabs
              activeCategory={activeCategory}
              onChange={setActiveCategory}
              variant="services"
              idPrefix="process-cat"
            />
          </div>
        </div>
      </BlurReveal>

      {/* 5 Simple Steps */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, filter: 'blur(16px)', y: 14 }}
          animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
          exit={{ opacity: 0, filter: 'blur(16px)', y: -14 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 transform-gpu"
        >
          {steps.map((st) => {
            const Icon = st.icon;
            return (
              <div
                key={st.number}
                className="p-4 sm:p-4.5 rounded-2xl bg-[#0f041e]/90 border border-purple-500/15 flex flex-col justify-between space-y-3 hover:border-purple-500/35 transition-colors shadow-lg shadow-purple-950/20 group"
              >
                <div className="flex items-center justify-between">
                  <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-purple-500/20 border border-purple-400/30 text-purple-200 text-xs font-bold flex items-center justify-center">
                    {st.number}
                  </span>
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-300 group-hover:text-white group-hover:bg-purple-500/20 transition-colors">
                    <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                </div>

                <div className="space-y-1">
                  <h4 className="text-sm sm:text-base font-bold text-white tracking-tight">
                    {st.title}
                  </h4>
                  <p className="text-[11.5px] sm:text-xs text-purple-200/70 leading-relaxed">
                    {st.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

