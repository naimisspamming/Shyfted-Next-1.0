import React, { useState, useRef } from 'react';
import { PortfolioProject } from '../types';
import { Play, Pause } from 'lucide-react';
import { YoutubeFacade } from './YoutubeFacade';

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
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play().catch(() => {});
        setIsPlaying(true);
      }
    }
  };

  return (
    <div
      id={`video-card-${project.id}`}
      className="group relative rounded-2xl bg-[#0f041e]/90 border border-purple-500/15 overflow-hidden hover:border-purple-500/40 transition-all duration-300 flex flex-col shadow-lg shadow-purple-950/20"
    >
      {/* Video Viewport */}
      <div
        className={`relative bg-black overflow-hidden ${project.aspectRatio === '9:16' ? 'aspect-[9/16]' : 'aspect-video'} flex items-center justify-center`}
      >
        {project.videoUrl && project.videoUrl.includes('youtube.com') ? (
          (() => {
            const getYoutubeId = (url: string) => {
              const shortMatch = url.match(/\/shorts\/([a-zA-Z0-9_-]{11})/);
              if (shortMatch) return shortMatch[1];
              const regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
              const match = url.match(regExp);
              return (match && match[2].length === 11) ? match[2] : null;
            };
            const videoId = getYoutubeId(project.videoUrl);
            return videoId ? (
              <YoutubeFacade
                videoId={videoId}
                title={project.title}
                className="w-full h-full"
              />
            ) : null;
          })()
        ) : project.videoUrl && project.videoUrl.includes('vimeo.com') ? (
          (() => {
            const getVimeoId = (url: string) => {
              const match = url.match(/vimeo\.com\/(?:video\/)?(\d+)/);
              return match ? match[1] : null;
            };
            const videoId = getVimeoId(project.videoUrl);
            return videoId ? (
              <iframe
                src={`https://player.vimeo.com/video/${videoId}`}
                title={project.title}
                className="w-full h-full"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                allowFullScreen
              />
            ) : null;
          })()
        ) : project.videoUrl ? (
          <video
            ref={videoRef}
            src={project.videoUrl}
            poster={project.coverImage}
            playsInline
            loop
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
      </div>

      {/* Info */}
      <div className="p-5">
        <div>
          <div className="flex items-center justify-between text-xs text-purple-300/70 font-medium mb-1.5">
            {project.stats?.[0] && (
              <span className="text-purple-300 font-bold">{project.stats[0].value} {project.stats[0].label}</span>
            )}
          </div>
          <h3 className="text-base font-bold text-white tracking-tight group-hover:text-purple-200 transition-colors">
            {project.title}
          </h3>
          <p className="text-xs text-purple-200/60 mt-0.5">
            For {project.client}
          </p>
        </div>
      </div>
    </div>
  );
};
