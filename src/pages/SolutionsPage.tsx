import React, { useState, useMemo, useRef, useEffect } from 'react';
import { SOLUTIONS, SOLUTION_CATEGORIES } from '../data/portfolioData';
import { SolutionCategory } from '../types';
import { SolutionCard } from '../components/SolutionCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface SolutionsPageProps {
  handleOpenInquiry: (service?: string, projectTitle?: string) => void;
}

export function SolutionsPage({ handleOpenInquiry }: SolutionsPageProps) {
  const [activeCategory, setActiveCategory] = useState<SolutionCategory | 'All'>('All');
  const items = ['All', ...SOLUTION_CATEGORIES] as (SolutionCategory | 'All')[];
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  useEffect(() => {
    updateButtons();
  }, []);

  const updateButtons = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 0);
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
  };

  const scrollByAmount = (dir: number) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * 240, behavior: 'smooth' });
  };

  const filtered = useMemo(() => {
    if (activeCategory === 'All') return SOLUTIONS;
    return SOLUTIONS.filter((s) => s.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
      <div className="text-center mb-10">
        <h1 className="text-3xl sm:text-4xl font-black text-white mb-3">Our Solutions</h1>
        <p className="text-purple-300/70 max-w-2xl mx-auto">
          Our personal website solution. Explore features and request customization.
        </p>
      </div>

      <div className="relative mb-10">
        <button
          onClick={() => scrollByAmount(-1)}
          disabled={!canPrev}
          aria-label="Previous categories"
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-purple-500/15 bg-[#0f041e]/90 text-purple-200/80 hover:text-white hover:border-purple-400 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <div
          ref={scrollRef}
          onScroll={updateButtons}
          className="overflow-x-auto mx-12 scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <div className="flex gap-2 w-max">
            {items.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold border transition-colors whitespace-nowrap ${
                  activeCategory === cat
                    ? 'bg-purple-600 text-white border-purple-600'
                    : 'bg-[#0f041e]/90 text-purple-200/80 border-purple-500/15 hover:border-purple-400'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
        <button
          onClick={() => scrollByAmount(1)}
          disabled={!canNext}
          aria-label="Next categories"
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-purple-500/15 bg-[#0f041e]/90 text-purple-200/80 hover:text-white hover:border-purple-400 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map((s) => (
          <SolutionCard key={s.id} solution={s} />
        ))}
      </div>
    </div>
  );
}
