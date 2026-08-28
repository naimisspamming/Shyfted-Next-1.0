import React, { useState, useRef } from 'react';
import { PortfolioProject } from '../types';
import { Play, Pause, Volume2, VolumeX, ArrowUpRight } from 'lucide-react';

interface VideoPlayerCardProps {
  project: PortfolioProject;
  onSelectProject: (project: PortfolioProject) => void;
  onOpenInquiry: (defaultService: string, projectTitle: string) => void;
}

export const VideoPlayerCard: React.FC<VideoPlayerCardProps> = ({
  project,
  onSelectProject,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <div
      id={`video-card-${project.id}`}
      className="group relative rounded-2xl bg-[#0f041e]/90 border border-purple-500/15 overflow-hidden hover:border-purple-500/40 transition-all duration-300 flex flex-col shadow-lg shadow-purple-950/20"
    >
      {/* Video Viewport */}
      <div
        className="relative bg-black cursor-pointer overflow-hidden aspect-[16/10] sm:aspect-video flex items-center justify-center"
        onClick={togglePlay}
      >
        {project.videoUrl ? (
          <video
            ref={videoRef}
            src={project.videoUrl}
            poster={project.coverImage}
            playsInline
            loop
            muted={isMuted}
            onEnded={() => setIsPlaying(false)}
            className="w-full h-full object-cover"
          />
        ) : (
          <img
            src={project.coverImage}
            alt={project.title}
            width="1600"
            height="900"
            className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
          />
        )}

        {/* Minimal Play/Pause Button */}
        <div
          className={`absolute inset-0 m-auto w-12 h-12 rounded-full bg-black/60 backdrop-blur-md border border-purple-400/30 text-white flex items-center justify-center transition-all duration-200 pointer-events-none ${
            isPlaying ? 'opacity-0 group-hover:opacity-90 scale-90' : 'opacity-90 scale-100'
          }`}
        >
          {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5 fill-white" />}
        </div>

        {/* Mute Control */}
        {project.videoUrl && (
          <button
            onClick={toggleMute}
            className="absolute bottom-3 right-3 p-1.5 rounded-lg bg-black/60 backdrop-blur-md border border-purple-400/20 text-purple-200 hover:text-white transition-colors"
            title={isMuted ? 'Unmute' : 'Mute'}
          >
            {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 text-purple-300" />}
          </button>
        )}
      </div>

      {/* Info & Action */}
      <div className="p-5 flex-1 flex flex-col justify-between gap-4">
        <div>
          <div className="flex items-center justify-between text-xs text-purple-300/70 font-medium mb-1.5">
            <span>{project.client}</span>
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

        <button
          id={`view-details-${project.id}`}
          onClick={() => onSelectProject(project)}
          className="w-full py-2.5 px-3.5 rounded-xl bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/20 text-purple-100 hover:text-white text-xs font-semibold text-center transition-all flex items-center justify-center gap-1.5"
        >
          <span>View Project Case Study</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-purple-300" />
        </button>
      </div>
    </div>
  );
};
