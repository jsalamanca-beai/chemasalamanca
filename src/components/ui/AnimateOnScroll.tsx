'use client';

import { useRef, type ReactNode } from 'react';
import { motion, useInView } from 'framer-motion';

interface AnimateOnScrollProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  duration?: number;
}

function getInitialTranslate(direction: AnimateOnScrollProps['direction']): {
  x: number;
  y: number;
} {
  switch (direction) {
    case 'up':
      return { x: 0, y: 30 };
    case 'down':
      return { x: 0, y: -30 };
    case 'left':
      return { x: 30, y: 0 };
    case 'right':
      return { x: -30, y: 0 };
    default:
      return { x: 0, y: 30 };
  }
}

export default function AnimateOnScroll({
  children,
  className,
  delay = 0,
  direction = 'up',
  duration = 0.6,
}: AnimateOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const { x, y } = getInitialTranslate(direction);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, x, y }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x, y }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1] as const,
      }}
    >
      {children}
    </motion.div>
  );
}
