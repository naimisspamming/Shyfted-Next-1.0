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
  duration = 0.85,
  blurAmount,
  yOffset = 28,
  scaleOffset = 0.97,
  amount = 0.15,
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
        y: yOffset,
        scale: scaleOffset,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      viewport={{
        once,
        amount,
        margin: '0px 0px -40px 0px',
      }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      style={{
        willChange: 'transform, opacity',
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

