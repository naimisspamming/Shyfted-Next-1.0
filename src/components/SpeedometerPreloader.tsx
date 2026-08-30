import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';

interface SpeedometerPreloaderProps {
  onComplete: () => void;
}

export function SpeedometerPreloader({ onComplete }: SpeedometerPreloaderProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 6000;
    const interval = 50;
    const steps = duration / interval;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const newProgress = Math.min((currentStep / steps) * 100, 100);
      setProgress(newProgress);
      
      if (currentStep >= steps) {
        clearInterval(timer);
        setTimeout(onComplete, 300);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  // Speedometer logic: 0% is -135deg, 100% is 135deg (Total 270 degrees sweep)
  const rotation = -135 + (progress / 100) * 270;

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#07010e]"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative w-64 h-64 flex items-center justify-center">
        {/* Pulsing Glow */}
        <motion.div
          className="absolute inset-0 rounded-full bg-purple-500/10 blur-3xl"
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <svg className="w-full h-full" viewBox="0 0 200 200">
          {/* Gauge Track */}
          <path
            d="M 40 160 A 80 80 0 1 1 160 160"
            fill="transparent"
            stroke="currentColor"
            strokeWidth="8"
            className="text-purple-900/30"
            strokeLinecap="round"
          />
          {/* Progress Arc */}
          <motion.path
            d="M 40 160 A 80 80 0 1 1 160 160"
            fill="transparent"
            stroke="currentColor"
            strokeWidth="8"
            className="text-purple-400 drop-shadow-[0_0_8px_rgba(192,132,252,0.8)]"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: progress / 100 }}
            transition={{ ease: "linear" }}
          />
          
          {/* Tick Marks */}
          {[...Array(11)].map((_, i) => (
            <line
              key={i}
              x1="100" y1="20" x2="100" y2="35"
              className="text-purple-700"
              stroke="currentColor"
              strokeWidth="2"
              transform={`rotate(${ -135 + i * 27} 100 100)`}
            />
          ))}

          {/* Needle */}
          <motion.g transform={`rotate(${rotation} 100 100)`}>
            <line
              x1="100" y1="100" x2="100" y2="40"
              className="text-white"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <circle cx="100" cy="100" r="6" className="fill-white" />
          </motion.g>
        </svg>
      </div>
    </motion.div>
  );
}
