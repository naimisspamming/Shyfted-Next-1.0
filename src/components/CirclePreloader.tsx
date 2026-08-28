import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';

export function CirclePreloader({ duration = 6000 }: { duration?: number }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const startTime = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const currentProgress = Math.min(Math.round((elapsed / duration) * 100), 100);
      setProgress(currentProgress);
      
      if (currentProgress >= 100) {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [duration]);

  return (
    <div className="relative w-48 h-48 flex items-center justify-center">
      <svg className="w-full h-full" viewBox="0 0 100 100">
        {/* Background track */}
        <circle cx="50" cy="50" r="40" fill="none" stroke="#1f2937" strokeWidth="10" />
        
        {/* Progress bar */}
        <motion.circle
          cx="50" cy="50" r="40"
          fill="none"
          stroke="url(#gradient)"
          strokeWidth="10"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: progress / 100 }}
          transition={{ duration: 0.05, ease: "linear" }}
          style={{ rotate: -90, transformOrigin: 'center' }}
        />
        
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#db2777" /> {/* Pink */}
            <stop offset="100%" stopColor="#7e22ce" /> {/* Purple */}
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute text-3xl font-bold text-white font-mono">{progress}%</div>
    </div>
  );
}
