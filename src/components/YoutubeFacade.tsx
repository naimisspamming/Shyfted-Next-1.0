import React, { useState } from 'react';
import { Play } from 'lucide-react';

interface YoutubeFacadeProps {
  videoId: string;
  title: string;
  className?: string;
  autoPlay?: boolean;
}

export const YoutubeFacade: React.FC<YoutubeFacadeProps> = ({ videoId, title, className }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  if (isLoaded) {
    return (
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&mute=0&controls=1&showinfo=1&rel=0&enablejsapi=1`}
        title={title}
        className={className}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    );
  }

  return (
    <div 
      className={`${className} cursor-pointer flex items-center justify-center bg-black relative group`}
      onClick={() => setIsLoaded(true)}
    >
      <img
        src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
        alt={title}
        width="480"
        height="360"
        loading="lazy"
        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-14 h-14 rounded-full bg-purple-600/90 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
          <Play className="w-7 h-7 fill-white translate-x-0.5" />
        </div>
      </div>
    </div>
  );
};
