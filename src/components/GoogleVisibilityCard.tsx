import React from 'react';
import { PortfolioProject } from '../types';
import { Search, TrendingUp, MapPin, ArrowUpRight, ArrowUp, Globe, Sparkles } from 'lucide-react';

interface GoogleVisibilityCardProps {
  project: PortfolioProject;
  onSelectProject: (project: PortfolioProject) => void;
  onOpenInquiry: (defaultService: string, projectTitle: string) => void;
}

export const GoogleVisibilityCard: React.FC<GoogleVisibilityCardProps> = ({
  project,
  onSelectProject,
}) => {
  return (
    <div
      id={`seo-card-${project.id}`}
      className="group relative rounded-2xl bg-[#0f041e]/90 border border-purple-500/15 overflow-hidden hover:border-purple-500/40 transition-all duration-300 flex flex-col shadow-lg shadow-purple-950/20"
    >
      {/* Top SERP Simulation / Keyword Rank Highlight Banner */}
      <div className="p-5 bg-gradient-to-b from-[#140628] to-[#0d0319] border-b border-purple-500/15">
        {/* Fake Google Search Bar & Rank #1 Badge */}
        <div className="flex items-center justify-between gap-3 mb-3">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-purple-950/60 border border-purple-500/20 text-[11px] text-purple-200/80 flex-1 min-w-0">
            <Search className="w-3.5 h-3.5 text-purple-400 flex-shrink-0" />
            <span className="truncate font-mono text-[10.5px]">
              google.com/search?q={encodeURIComponent(project.keywordRankings?.[0]?.keyword || project.category)}
            </span>
          </div>

          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-500/15 border border-emerald-400/30 text-emerald-300 text-[10px] font-bold uppercase tracking-wider flex-shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>Rank #1 Organic</span>
          </div>
        </div>

        {/* Simulated Google Search Result */}
        {project.serpSnippetPreview && (
          <div className="p-3.5 rounded-xl bg-black/40 border border-purple-500/20 space-y-1.5 backdrop-blur-sm">
            <div className="flex items-center gap-1.5 text-[11px] text-purple-300/80">
              <Globe className="w-3 h-3 text-purple-400" />
              <span className="font-mono text-[10px] truncate">{project.serpSnippetPreview.displayUrl}</span>
            </div>
            <h4 className="text-xs sm:text-sm font-bold text-white group-hover:text-purple-300 transition-colors line-clamp-1">
              {project.serpSnippetPreview.headline}
            </h4>
            <p className="text-[11px] text-purple-200/70 line-clamp-2 leading-relaxed">
              {project.serpSnippetPreview.description}
            </p>
            {project.serpSnippetPreview.sitelinks && (
              <div className="flex flex-wrap gap-1.5 pt-1">
                {project.serpSnippetPreview.sitelinks.map((slink, i) => (
                  <span
                    key={i}
                    className="text-[9.5px] font-medium text-purple-300/90 bg-purple-950/60 px-2 py-0.5 rounded border border-purple-500/20"
                  >
                    {slink}
                  </span>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Keyword Rank Climb Micro-Table */}
        {project.keywordRankings && project.keywordRankings.length > 0 && (
          <div className="mt-3.5 space-y-1.5">
            <div className="text-[10px] uppercase font-bold tracking-wider text-purple-300/60 flex items-center justify-between">
              <span>High-Intent Keywords</span>
              <span>SERP Rank Shift</span>
            </div>

            <div className="space-y-1">
              {project.keywordRankings.slice(0, 2).map((kw, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between p-2 rounded-lg bg-purple-950/30 border border-purple-500/10 text-xs"
                >
                  <div className="flex items-center gap-2 min-w-0">
                    <span className="font-medium text-purple-100 truncate text-[11px]">{kw.keyword}</span>
                    <span className="text-[9px] text-purple-400/60 font-mono hidden sm:inline">({kw.searchVolume}/mo)</span>
                  </div>
                  <div className="flex items-center gap-2 font-mono text-[11px] flex-shrink-0">
                    <span className="text-purple-400/50 line-through">#{kw.beforeRank}</span>
                    <ArrowUp className="w-3 h-3 text-emerald-400 inline" />
                    <span className="font-bold text-emerald-300 bg-emerald-950/50 border border-emerald-500/30 px-1.5 py-0.2 rounded">
                      #{kw.afterRank}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Info & Action */}
      <div className="p-5 flex-1 flex flex-col justify-between gap-4">
        <div>
          <div className="flex items-center justify-between text-xs text-purple-300/70 font-medium mb-1.5">
            <span>{project.client}</span>
            {project.metrics?.[0] && (
              <span className="text-purple-300 font-bold">{project.metrics[0].value} {project.metrics[0].label}</span>
            )}
          </div>
          <h3 className="text-base font-bold text-white tracking-tight group-hover:text-purple-200 transition-colors">
            {project.title}
          </h3>
          <p className="text-xs text-purple-200/60 mt-1 line-clamp-2 leading-relaxed">
            {project.tagline}
          </p>
        </div>

        <button
          id={`view-seo-case-${project.id}`}
          onClick={() => onSelectProject(project)}
          className="w-full py-2.5 px-3.5 rounded-xl bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/20 text-purple-100 hover:text-white text-xs font-semibold text-center transition-all flex items-center justify-center gap-1.5"
        >
          <span>View Ranking Case Study</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-purple-300" />
        </button>
      </div>
    </div>
  );
};
