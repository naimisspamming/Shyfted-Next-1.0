import React, { useState, useEffect, useRef } from 'react';
import { Play } from 'lucide-react';

interface YoutubeFacadeProps {
  videoId: string;
  title: string;
  className?: string;
  autoPlay?: boolean;
}

export const YoutubeFacade: React.FC<YoutubeFacadeProps> = ({ videoId, title, className, autoPlay }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && autoPlay) {
          setIsLoaded(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [autoPlay]);

  if (isLoaded) {
    return (
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&rel=0&iv_load_policy=3&disablekb=1&modestbranding=1&playsinline=1&enablejsapi=1&fs=0&autohide=1`}
        title={title}
        className={className}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    );
  }

  return (
    <div 
      ref={containerRef}
      className={`${className} cursor-pointer flex items-center justify-center bg-black`}
      onClick={() => setIsLoaded(true)}
    >
      <img
        src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
        alt={title}
        width="1280"
        height="720"
        className="w-full h-full object-cover opacity-60"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <Play className="w-16 h-16 text-white opacity-80" />
      </div>
    </div>
  );
};
