import React, { useState, useRef, useEffect, useCallback } from 'react';
import { PortfolioProject } from '../types';
import { MoveHorizontal, ArrowUpRight } from 'lucide-react';

interface BeforeAfterSliderProps {
  project: PortfolioProject;
  onSelectProject: (project: PortfolioProject) => void;
  onOpenInquiry: (defaultService: string, projectTitle: string) => void;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  project,
  onSelectProject,
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const beforeImage = project.beforeImage || project.coverImage;
  const afterImage = project.afterImage || project.coverImage;

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    
    requestAnimationFrame(() => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const position = (x / rect.width) * 100;
      setSliderPosition(Math.max(0, Math.min(100, position)));
    });
  }, []);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  }, [isDragging, handleMove]);

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, handleMouseMove]);

  return (
    <div
      id={`web-card-${project.id}`}
      className="group relative rounded-2xl bg-[#0f041e]/90 border border-purple-500/15 overflow-hidden hover:border-purple-500/40 transition-all duration-300 flex flex-col shadow-lg shadow-purple-950/20"
    >
      {/* Interactive Split Comparison Slider */}
      <div className="relative select-none bg-black aspect-[16/10] sm:aspect-video overflow-hidden">
        <div
          ref={containerRef}
          onMouseDown={() => setIsDragging(true)}
          onTouchMove={handleTouchMove}
          className="relative w-full h-full overflow-hidden cursor-ew-resize"
        >
          {/* AFTER (Redesign) */}
          <div className="absolute inset-0 w-full h-full">
            <img
              src={afterImage}
              alt="Redesign"
              width="1600"
              height="900"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-md bg-purple-950/80 backdrop-blur-md border border-purple-400/30 text-[9px] font-bold text-white uppercase tracking-wider">
              After
            </div>
          </div>

          {/* BEFORE (Old site) */}
          <div
            className="absolute inset-0 overflow-hidden border-r-2 border-purple-400/80"
            style={{ width: `${sliderPosition}%` }}
          >
            <img
              src={beforeImage}
              alt="Before redesign"
              width="1600"
              height="900"
              className="absolute inset-0 w-full h-full object-cover grayscale-[30%]"
              style={{
                width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%',
                maxWidth: 'none',
              }}
            />
            <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-md border border-white/10 text-[9px] font-bold text-slate-300 uppercase tracking-wider">
              Before
            </div>
          </div>

          {/* Minimal Drag Handle */}
          <div
            className="absolute top-0 bottom-0 w-6 -ml-3 flex items-center justify-center pointer-events-none"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="w-6 h-6 rounded-full bg-white text-purple-950 flex items-center justify-center shadow-lg border border-purple-300">
              <MoveHorizontal className="w-3.5 h-3.5 text-purple-950" />
            </div>
          </div>
        </div>
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
          id={`view-web-case-${project.id}`}
          onClick={() => onSelectProject(project)}
          className="w-full py-2.5 px-3.5 rounded-xl bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/20 text-purple-100 hover:text-white text-xs font-semibold text-center transition-all flex items-center justify-center gap-1.5"
        >
          <span>View Redesign Case Study</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-purple-300" />
        </button>
      </div>
    </div>
  );
};
