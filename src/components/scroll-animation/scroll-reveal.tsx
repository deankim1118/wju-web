'use client';

import { cn } from '@/lib/utils';
import { motion, type HTMLMotionProps, type Variants } from 'framer-motion';
import type { ReactNode } from 'react';

type AnimationVariant =
  | 'fade-up'
  | 'fade-down'
  | 'fade-left'
  | 'fade-right'
  | 'zoom-in'
  | 'zoom-out'
  | 'fade-only'
  | 'expand'; // 펼쳐지는 느낌 (scale up from center)

interface ScrollRevealProps extends HTMLMotionProps<'div'> {
  children: ReactNode;
  variant?: AnimationVariant;
  delay?: number;
  duration?: number;
  stagger?: boolean; // stagger 모드 사용 시 true
  staggerChildren?: number; // 자식 간의 딜레이 시간 (기본 0.1)
  animateImmediately?: boolean; // true일 때 스크롤 없이 바로 애니메이션 실행 (기본 false)
  className?: string;
}

/**
 * ScrollReveal Component
 * 
 * A reusable component for scroll-triggered reveal animations using framer-motion.
 * Clean and simple implementation without display: contents to avoid layout issues.
 * 
 * @param variant - Animation type: 'fade-up' (default), 'fade-down', 'fade-left', 'fade-right', 'zoom-in', 'zoom-out', 'expand', or 'fade-only'
 * @param delay - Start delay in seconds (default: 0)
 * @param duration - Animation duration in seconds (default: 0.5, smooth value)
 * @param stagger - Whether to apply stagger effect to children (default: false)
 * @param staggerChildren - Delay between children when stagger is enabled (default: 0.1)
 * @param animateImmediately - If true, animate immediately on mount without waiting for scroll (default: false)
 * @param className - Additional CSS classes
 */
export function ScrollReveal({
  children,
  variant = 'fade-up',
  delay = 0,
  duration = 0.6,
  stagger = false,
  staggerChildren = 0.1,
  animateImmediately = false,
  className,
  ...props
}: ScrollRevealProps) {
  // Animation variants based on variant prop
  const getAnimationVariants = (): Variants => {
    const baseTransition = {
      duration,
      delay,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    };

    switch (variant) {
      case 'fade-up':
        return {
          hidden: { opacity: 0, y: 30 },
          visible: {
            opacity: 1,
            y: 0,
            transition: baseTransition,
          },
        };
      case 'fade-down':
        return {
          hidden: { opacity: 0, y: -30 },
          visible: {
            opacity: 1,
            y: 0,
            transition: baseTransition,
          },
        };
      case 'fade-left':
        return {
          hidden: { opacity: 0, x: -50 },
          visible: {
            opacity: 1,
            x: 0,
            transition: baseTransition,
          },
        };
      case 'fade-right':
        return {
          hidden: { opacity: 0, x: 50 },
          visible: {
            opacity: 1,
            x: 0,
            transition: baseTransition,
          },
        };
      case 'zoom-in':
        return {
          hidden: { opacity: 0, scale: 0.95 },
          visible: {
            opacity: 1,
            scale: 1,
            transition: baseTransition,
          },
        };
      case 'zoom-out':
        return {
          hidden: { opacity: 0, scale: 1.1 },
          visible: {
            opacity: 1,
            scale: 1,
            transition: baseTransition,
          },
        };
      case 'expand':
        return {
          hidden: { opacity: 0, scale: 0.8, transformOrigin: 'center' },
          visible: {
            opacity: 1,
            scale: 1,
            transition: baseTransition,
          },
        };
      case 'fade-only':
        return {
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: baseTransition,
          },
        };
      default:
        return {
          hidden: { opacity: 0, y: 30 },
          visible: {
            opacity: 1,
            y: 0,
            transition: baseTransition,
          },
        };
    }
  };

  const animationVariants = getAnimationVariants();

  // Stagger container variants (for children)
  const staggerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerChildren,
        delayChildren: delay,
      },
    },
  };

  // Stagger mode: container for children
  if (stagger) {
    return (
      <motion.div
        initial='hidden'
        animate={animateImmediately ? 'visible' : undefined}
        whileInView={animateImmediately ? undefined : 'visible'}
        viewport={animateImmediately ? undefined : { once: true, margin: '-10% 0px' }}
        variants={staggerVariants}
        className={cn(className)}
        {...props}
      >
        {children}
      </motion.div>
    );
  }

  // Normal mode: single element animation
  return (
    <motion.div
      initial='hidden'
      animate={animateImmediately ? 'visible' : undefined}
      whileInView={animateImmediately ? undefined : 'visible'}
      viewport={animateImmediately ? undefined : { once: true, margin: '-10% 0px' }}
      variants={animationVariants}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}

/**
 * ScrollRevealChild Component
 * 
 * Use this component for individual child elements when using stagger.
 * This allows each child to animate with a delay relative to its siblings.
 */
export function ScrollRevealChild({
  children,
  variant = 'fade-up',
  duration = 0.6,
  className,
  ...props
}: {
  children: ReactNode;
  variant?: AnimationVariant;
  duration?: number;
  className?: string;
} & HTMLMotionProps<'div'>) {
  const getChildVariants = (): Variants => {
    const baseTransition = {
      duration,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    };

    switch (variant) {
      case 'fade-up':
        return {
          hidden: { opacity: 0, y: 30 },
          visible: {
            opacity: 1,
            y: 0,
            transition: baseTransition,
          },
        };
      case 'fade-down':
        return {
          hidden: { opacity: 0, y: -30 },
          visible: {
            opacity: 1,
            y: 0,
            transition: baseTransition,
          },
        };
      case 'fade-left':
        return {
          hidden: { opacity: 0, x: -50 },
          visible: {
            opacity: 1,
            x: 0,
            transition: baseTransition,
          },
        };
      case 'fade-right':
        return {
          hidden: { opacity: 0, x: 50 },
          visible: {
            opacity: 1,
            x: 0,
            transition: baseTransition,
          },
        };
      case 'zoom-in':
        return {
          hidden: { opacity: 0, scale: 0.95 },
          visible: {
            opacity: 1,
            scale: 1,
            transition: baseTransition,
          },
        };
      case 'zoom-out':
        return {
          hidden: { opacity: 0, scale: 1.1 },
          visible: {
            opacity: 1,
            scale: 1,
            transition: baseTransition,
          },
        };
      case 'expand':
        return {
          hidden: { opacity: 0, scale: 0.8, transformOrigin: 'center' },
          visible: {
            opacity: 1,
            scale: 1,
            transition: baseTransition,
          },
        };
      case 'fade-only':
        return {
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: baseTransition,
          },
        };
      default:
        return {
          hidden: { opacity: 0, y: 30 },
          visible: {
            opacity: 1,
            y: 0,
            transition: baseTransition,
          },
        };
    }
  };

  const childVariants = getChildVariants();

  return (
    <motion.div
      variants={childVariants}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}
