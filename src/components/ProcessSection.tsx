import React, { useState } from 'react';
import { ServiceType } from '../types';
import { CategoryTabs } from './CategoryTabs';
import { motion, AnimatePresence } from 'motion/react';
import { BlurReveal } from './BlurReveal';
import {
  UploadCloud,
  Scissors,
  Sparkles,
  CheckCircle2,
  Search,
  PenTool,
  Code2,
  Rocket,
  Compass,
  FileCode,
  MapPin,
  TrendingUp,
  Clock,
} from 'lucide-react';

interface ProcessStep {
  step: string;
  title: string;
  desc: string;
  timeframe: string;
  icon: React.FC<{ className?: string }>;
}

const CATEGORY_PROCESSES: Record<ServiceType, { headline: string; subtitle: string; steps: ProcessStep[] }> = {
  'video-editing': {
    headline: 'Video Post-Production Sprint',
    subtitle: 'From raw files to algorithm-ready 4K vertical & horizontal exports in under 48 hours',
    steps: [
      {
        step: '01',
        title: 'Footage & Hook Ingestion',
        desc: 'Upload raw assets via Google Drive or Frame.io. We analyze your footage and script high-retention 3-second visual hooks.',
        timeframe: 'Day 1 (Kickoff)',
        icon: UploadCloud,
      },
      {
        step: '02',
        title: 'Pacing & Rough Cut',
        desc: 'We trim filler, structure the story arc, and lock in seamless jump-cuts to keep viewer attention glued to the screen.',
        timeframe: '24 Hours',
        icon: Scissors,
      },
      {
        step: '03',
        title: 'VFX, Subtitles & SFX',
        desc: 'Layer in kinetic captions, smooth zoom-ins, bespoke sound effects, Hollywood-grade LUT color grading, and b-roll.',
        timeframe: '36 Hours',
        icon: Sparkles,
      },
      {
        step: '04',
        title: 'Final 4K Multi-Format Export',
        desc: 'Master exports in 9:16 (Reels/Shorts/TikTok) and 16:9 (YouTube), ready for instant scheduling and virality.',
        timeframe: '48 Hours (Ready)',
        icon: CheckCircle2,
      },
    ],
  },
  'website-redesign': {
    headline: 'Website Conversion & UI/UX Sprint',
    subtitle: 'Transforming dated layouts into lightning-fast, high-converting digital flagships',
    steps: [
      {
        step: '01',
        title: 'Conversion & Drop-off Audit',
        desc: 'We analyze heatmaps, bounce points, and competitor positioning to map out a frictionless user journey.',
        timeframe: 'Days 1–2',
        icon: Search,
      },
      {
        step: '02',
        title: 'Figma UI/UX Art Direction',
        desc: 'Craft bespoke design systems, refined typography hierarchy, and interactive prototypes tailored for desktop and mobile.',
        timeframe: 'Days 3–5',
        icon: PenTool,
      },
      {
        step: '03',
        title: 'Sub-Second Frontend Code',
        desc: 'Build with React/Next.js/Tailwind for 95+ Google Lighthouse speed scores, responsive fluidity, and smooth micro-interactions.',
        timeframe: 'Days 6–9',
        icon: Code2,
      },
      {
        step: '04',
        title: 'Zero-Downtime Launch & QA',
        desc: 'Complete cross-browser testing, analytics & CRM integration, SEO redirects, and seamless domain cutover.',
        timeframe: 'Days 10–14 (Live)',
        icon: Rocket,
      },
    ],
  },
  'google-visibility': {
    headline: 'Google #1 Rank & Organic Engine',
    subtitle: 'Monopolize high-intent buyer searches and Google Maps 3-Pack in your target niche',
    steps: [
      {
        step: '01',
        title: 'Competitor SERP & Keyword Intel',
        desc: 'Reverse-engineer top ranking competitors to uncover lucrative commercial buyer keywords and search intent gaps.',
        timeframe: 'Week 1',
        icon: Compass,
      },
      {
        step: '02',
        title: 'Technical Core & Schema Architecture',
        desc: 'Fix crawl leaks, implement JSON-LD structured data for Google AI Overviews, and optimize Core Web Vitals.',
        timeframe: 'Week 2',
        icon: FileCode,
      },
      {
        step: '03',
        title: 'Maps Geo-Optimization & Citations',
        desc: 'Optimize Google Business Profile, syndicate verified NAP citations across top directories, and capture customer reviews.',
        timeframe: 'Weeks 3–4',
        icon: MapPin,
      },
      {
        step: '04',
        title: 'Rank #1 Domination & Conversion Flow',
        desc: 'Lock in top 3 organic rankings, activate 24/7 rank monitoring dashboards, and convert incoming organic traffic.',
        timeframe: 'Ongoing Domination',
        icon: TrendingUp,
      },
    ],
  },
};

interface ProcessSectionProps {
  initialCategory?: ServiceType;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ initialCategory = 'video-editing' }) => {
  const [activeCategory, setActiveCategory] = useState<ServiceType>(initialCategory);
  const currentProcess = CATEGORY_PROCESSES[activeCategory];

  return (
    <section id="process" className="space-y-8 scroll-mt-24 max-w-4xl mx-auto">
      <BlurReveal blurAmount={8} yOffset={12} duration={0.4}>
        <div className="text-center space-y-3">
          <div className="space-y-1">
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">How We Work</h2>
            <p className="text-xs text-purple-300/70">Tailored sprint roadmaps engineered specifically for each creative discipline</p>
          </div>

          {/* Inline Category Switcher */}
          <div className="flex justify-center pt-2">
            <CategoryTabs
              activeCategory={activeCategory}
              onChange={setActiveCategory}
              idPrefix="process-cat"
            />
          </div>
        </div>
      </BlurReveal>

      {/* Dynamic Process Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, filter: 'blur(8px)', y: 10 }}
          animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
          exit={{ opacity: 0, filter: 'blur(8px)', y: -10 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-6 transform-gpu"
        >
          {/* Subheader Banner */}
          <div className="text-center">
            <h3 className="text-base sm:text-lg font-bold text-white tracking-tight flex items-center justify-center gap-2">
              <span>{currentProcess.headline}</span>
            </h3>
            <p className="text-xs text-purple-200/70 max-w-lg mx-auto mt-0.5">
              {currentProcess.subtitle}
            </p>
          </div>

          {/* 4 Steps Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3.5">
            {currentProcess.steps.map((st, i) => {
              const Icon = st.icon;
              return (
                <div
                  key={st.step}
                  className="p-5 rounded-2xl bg-[#0f041e]/90 border border-purple-500/15 flex flex-col justify-between space-y-3 hover:border-purple-500/40 transition-colors shadow-lg shadow-purple-950/20 group"
                >
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono text-purple-400 font-bold bg-purple-500/10 px-2 py-0.5 rounded-md border border-purple-500/20">
                        {st.step}
                      </span>
                      <div className="w-7 h-7 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-300 group-hover:text-white group-hover:bg-purple-500/20 transition-colors">
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                    </div>

                    <h4 className="text-sm font-bold text-white tracking-tight leading-snug">
                      {st.title}
                    </h4>

                    <p className="text-[11.5px] text-purple-200/65 leading-relaxed">
                      {st.desc}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-purple-500/10 flex items-center gap-1.5 text-[10.5px] text-purple-300/60 font-medium">
                    <Clock className="w-3 h-3 text-purple-400 flex-shrink-0" />
                    <span>{st.timeframe}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
};
