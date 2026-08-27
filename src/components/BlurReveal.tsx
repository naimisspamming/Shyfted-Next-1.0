import React from 'react';
import { motion, HTMLMotionProps } from 'motion/react';

interface BlurRevealProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  blurAmount?: number;
  yOffset?: number;
  scaleOffset?: number;
  amount?: number | 'some' | 'all';
  once?: boolean;
  id?: string;
}

export const BlurReveal: React.FC<BlurRevealProps> = ({
  children,
  className = '',
  delay = 0,
  duration = 0.45,
  blurAmount = 8,
  yOffset = 14,
  scaleOffset = 0.99,
  amount = 0.05,
  once = true,
  id,
  style,
  ...rest
}) => {
  return (
    <motion.div
      id={id}
      initial={{
        opacity: 0,
        filter: `blur(${blurAmount}px)`,
        y: yOffset,
        scale: scaleOffset,
      }}
      whileInView={{
        opacity: 1,
        filter: 'blur(0px)',
        y: 0,
        scale: 1,
      }}
      viewport={{
        once,
        amount,
        margin: '50px 0px -20px 0px',
      }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1], // Silky smooth cubic bezier (snappy and fluid)
      }}
      style={{
        willChange: 'transform, opacity, filter',
        transform: 'translateZ(0)',
        backfaceVisibility: 'hidden',
        WebkitFontSmoothing: 'subpixel-antialiased',
        ...style,
      }}
      className={`transform-gpu ${className}`}
      {...rest}
    >
      {children}
    </motion.div>
  );
};

