'use client';

import * as React from 'react';

import { ScrollReveal } from '@/components/scroll-animation/scroll-reveal';
import { cn } from '@/lib/utils';

type TitleBodySectionProps = {
  title: string;
  subtitle?: string;
  body: React.ReactNode;
  backgroundColor?: string;
  textColor?: string;
  padding?: string;
  className?: string;
};

export function TitleBodySection({
  title,
  subtitle,
  body,
  backgroundColor='bg-primary',
  textColor='text-white',
  padding='section-padding-lg',
  className,
}: TitleBodySectionProps) {
  return (
    <section className={cn('relative overflow-hidden', backgroundColor, className)}>
        {/* Accent line */}
        <div className='absolute left-0 top-0 h-1.5 w-full  bg-secondary' />
      <div className={cn('relative mx-auto max-w-7xl px-6', padding)}>

        <div className='flex flex-col justify-center items-center gap-9'>
          <ScrollReveal variant='fade-up' delay={0} duration={0.7}>
            <h1 className={cn('font-serif uppercase font-medium leading-[51px] text-center', textColor)}>
              {title}
            </h1>       
          </ScrollReveal>
          {subtitle && <ScrollReveal variant='fade-up' delay={0.1} duration={0.7} className='w-full'>
            <div className={cn('w-full whitespace-pre-line', textColor)}>{subtitle}</div>
          </ScrollReveal>}

          <ScrollReveal variant='fade-up' delay={0.2} duration={0.7} className='w-full'>
            <div className={cn('w-full', textColor)}>{body}</div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

