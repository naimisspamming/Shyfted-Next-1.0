import React from 'react';
import { BlurReveal } from '../components/BlurReveal';
import { BookOpen, Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';

export function ShyftedNextPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
      <BlurReveal blurAmount={20} yOffset={24} duration={0.8}>
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs sm:text-sm font-semibold">
            <Sparkles className="w-4 h-4 text-purple-400" />
            Shyfted Next 2.0
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Explore Shyfted Next 2.0
          </h1>
          <p className="text-purple-300/80 text-base sm:text-lg max-w-xl mx-auto">
            Specialized platforms tailored for authors and creators.
          </p>
        </div>
      </BlurReveal>

      <div className="max-w-xl mx-auto">
        {/* Card 1: Shyfted Next for Authors */}
        <BlurReveal blurAmount={20} yOffset={24} duration={0.8}>
          <div className="relative group p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-[#120624]/90 to-[#0b0314]/95 border border-purple-500/20 shadow-2xl shadow-purple-950/50 hover:border-purple-500/40 transition-all duration-300 flex flex-col justify-between h-full">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-300 mb-6 group-hover:scale-110 transition-transform">
                <BookOpen className="w-7 h-7" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">Shyfted Next for Authors</h3>
              <p className="text-purple-200/80 text-sm sm:text-base leading-relaxed mb-6">
                Empowering authors with verified authority, high-converting reader acquisition funnels, and professional author websites.
              </p>

              <ul className="space-y-3 mb-8 text-sm text-purple-300">
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                  <span>Google Knowledge Panel</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                  <span>Reader Gaining Funnels</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                  <span>Author Websites</span>
                </li>
              </ul>
            </div>

            <button
              onClick={() => window.open('https://authors.shyftednext.com', '_blank')}
              className="w-full py-4 px-6 rounded-2xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-sm sm:text-base shadow-lg shadow-purple-900/50 transition-all duration-300 flex items-center justify-center gap-2 group-hover:gap-3"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </BlurReveal>
      </div>
    </div>
  );
}
