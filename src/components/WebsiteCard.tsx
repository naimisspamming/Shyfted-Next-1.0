import React from 'react';
import { PortfolioProject } from '../types';
import { ArrowUpRight } from 'lucide-react';

interface WebsiteCardProps {
  project: PortfolioProject;
  onSelectProject: (project: PortfolioProject) => void;
  onOpenInquiry: (defaultService: string, projectTitle: string) => void;
}

export const WebsiteCard: React.FC<WebsiteCardProps> = ({
  project,
  onSelectProject,
}) => {
  const [imageError, setImageError] = React.useState(false);

  return (
    <div
      id={`web-card-${project.id}`}
      className="group relative rounded-2xl bg-[#0f041e]/90 border border-purple-500/15 overflow-hidden hover:border-purple-500/40 transition-all duration-300 flex flex-col shadow-lg shadow-purple-950/20"
    >
      {/* Thumbnail Viewport */}
      <div className="relative bg-black overflow-hidden aspect-[16/10] sm:aspect-video flex items-center justify-center">
        {!imageError ? (
          <img
            src={project.coverImage || project.afterImage || project.beforeImage || ''}
            alt={project.title}
            width="1600"
            height="900"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-purple-950/50 text-purple-400 text-xs">
            Image not available
          </div>
        )}
      </div>

      {/* Info & Action */}
      <div className="p-5 flex-1 flex flex-col justify-between gap-4">
        <div>
          <div className="flex items-center justify-between text-xs text-purple-300/70 font-medium mb-1.5">
            {project.stats?.[0] && (
              <span className="text-purple-300 font-bold">{project.stats[0].value} {project.stats[0].label}</span>
            )}
          </div>
          <h3 className="text-base font-bold text-white tracking-tight group-hover:text-purple-200 transition-colors">
            {project.title}
          </h3>
          <p className="text-xs text-purple-200/60 mt-1 line-clamp-2 leading-relaxed">
            {project.tagline}
          </p>
        </div>

        <a
          href={project.websiteUrl || '#'}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-2.5 px-3.5 rounded-xl bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/20 text-purple-100 hover:text-white text-xs font-semibold text-center transition-all flex items-center justify-center gap-1.5"
        >
          <span>Visit Website</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-purple-300" />
        </a>
      </div>
    </div>
  );
};
