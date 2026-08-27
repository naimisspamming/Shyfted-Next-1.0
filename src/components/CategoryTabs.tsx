import React from 'react';
import { ServiceType } from '../types';
import { Film, Layout } from 'lucide-react';
import { motion } from 'motion/react';

export type CategoryVariant = 'deliverables' | 'services';

interface CategoryTabsProps {
  activeCategory: ServiceType;
  onChange: (category: ServiceType) => void;
  variant?: CategoryVariant;
  customLabels?: Partial<Record<ServiceType, string>>;
  counts?: Record<ServiceType, number>;
  idPrefix?: string;
  className?: string;
}

const CATEGORY_DEFINITIONS: {
  id: ServiceType;
  icon: React.FC<{ className?: string }>;
  labels: Record<CategoryVariant, { full: string; short: string }>;
}[] = [
  {
    id: 'video-editing',
    icon: Film,
    labels: {
      deliverables: { full: 'Edited Video', short: 'Edited Video' },
      services: { full: 'Video Editing', short: 'Video Editing' },
    },
  },
  {
    id: 'website-redesign',
    icon: Layout,
    labels: {
      deliverables: { full: 'Redesigned Website', short: 'Redesigned Website' },
      services: { full: 'Website Redesigning', short: 'Website Redesigning' },
    },
  },
];

export const CategoryTabs: React.FC<CategoryTabsProps> = ({
  activeCategory,
  onChange,
  variant = 'deliverables',
  customLabels,
  counts,
  idPrefix = 'cat-tab',
  className = '',
}) => {
  return (
    <div
      className={`inline-flex items-center p-1 rounded-2xl bg-purple-950/60 border border-purple-500/25 backdrop-blur-xl shadow-lg shadow-purple-950/30 ${className}`}
    >
      <div className="flex items-center gap-1 w-full sm:w-auto">
        {CATEGORY_DEFINITIONS.map((cat) => {
          const Icon = cat.icon;
          const isActive = activeCategory === cat.id;
          const count = counts ? counts[cat.id] : null;

          const label = customLabels?.[cat.id] || cat.labels[variant].full;
          const shortLabel = customLabels?.[cat.id] || cat.labels[variant].short;

          return (
            <button
              key={cat.id}
              id={`${idPrefix}-${cat.id}`}
              onClick={() => onChange(cat.id)}
              className={`relative px-3 sm:px-4 py-2 rounded-xl text-xs font-semibold transition-colors duration-200 flex items-center justify-center gap-1.5 sm:gap-2 whitespace-nowrap select-none flex-1 sm:flex-initial ${
                isActive ? 'text-purple-950 font-bold' : 'text-purple-300 hover:text-white'
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId={`active-pill-${idPrefix}`}
                  className="absolute inset-0 rounded-xl bg-white shadow-md"
                  transition={{ type: 'spring', bounce: 0.15, duration: 0.35 }}
                />
              )}

              <span className="relative z-10 flex items-center gap-1.5 sm:gap-2">
                <Icon className={`w-3.5 h-3.5 flex-shrink-0 ${isActive ? 'text-purple-950' : 'text-purple-400'}`} />
                <span className="hidden sm:inline">{label}</span>
                <span className="inline sm:hidden">{shortLabel}</span>
                {count !== null && (
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono font-bold leading-tight ${
                      isActive
                        ? 'bg-purple-950/10 text-purple-900'
                        : 'bg-purple-500/20 text-purple-300'
                    }`}
                  >
                    {count}
                  </span>
                )}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

