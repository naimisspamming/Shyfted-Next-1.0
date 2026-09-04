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
      title: 'Footage Collecting',
      desc: 'Upload your raw video clips, brief, or reference links.',
      icon: UploadCloud,
    },
    {
      number: '2',
      title: 'Editing',
      desc: 'We cut dead air, structure hooks, add VFX, sound design & polish.',
      icon: Scissors,
    },
    {
      number: '3',
      title: 'Revision Phase',
      desc: 'Review the cut and request custom adjustments or polish.',
      icon: RefreshCw,
    },
    {
      number: '4',
      title: 'Done',
      desc: 'Receive algorithm-ready 4K exports and launch your content.',
      icon: Rocket,
    },
  ],
  'website-redesign': [
    {
      number: '1',
      title: 'Footage & Asset Collecting',
      desc: 'Share your brand assets, design references, and goals.',
      icon: MessageSquare,
    },
    {
      number: '2',
      title: 'Editing (Build)',
      desc: 'Craft the UI layout, responsive components, and clean code build.',
      icon: Code2,
    },
    {
      number: '3',
      title: 'Revision Phase',
      desc: 'Review live prototype, provide feedback, and refine elements.',
      icon: RefreshCw,
    },
    {
      number: '4',
      title: 'Done',
      desc: 'Final QA, speed optimization, and seamless site launch.',
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
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -14 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 transform-gpu"
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

