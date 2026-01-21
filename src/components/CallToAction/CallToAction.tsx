'use client';

import { ScrollReveal } from '@/components/scroll-animation/scroll-reveal';
import { Button } from '@/components/ui/button';
import { CircleAlert } from 'lucide-react';
import Link from 'next/link';

type CallToActionProps = {
  title?: string;
  description?: string;
  buttonText?: string;
  href?: string;
};

export function CallToAction({
  title = 'BE A WJU',
  description = "WJU is where great stories begin. It's time to start yours. Find out how.",
  buttonText = 'REQUEST INFORMATION',
  href = '#',
}: CallToActionProps) {
  return (
    <section className='bg-primary text-primary-foreground py-8'>
      <div className='container mx-auto px-6 lg:px-20 xl:px-0 max-w-[1024px]'>
        <div className='flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8'>
          <ScrollReveal
            variant='fade-up'
            delay={0.3}
            duration={0.8}
            animateImmediately={true}
          >
            <h2 className='text-primary-foreground font-serif font-bold'>{title}</h2>
          </ScrollReveal>

          <ScrollReveal
            variant='fade-up'
            delay={0.4}
            duration={0.8}
            animateImmediately={true}
            className='lg:flex-1'
          >
            <p className='text-primary-foreground/90 lg:max-w-md'>
              {description}
            </p>
          </ScrollReveal>

          <ScrollReveal
            variant='fade-up'
            delay={0.5}
            duration={0.8}
            animateImmediately={true}
          >
            <Button
              variant='outline'
              size='lg'
              className='text-base md:text-xl font-semibold md:font-normal uppercase border-2 rounded-none border-primary-foreground bg-transparent hover:bg-primary-foreground hover:text-primary w-full lg:w-auto max-w-[470px]'
              asChild
            >
              
              <Link
                href={href}
                className='flex items-center justify-center gap-2'
              >
                <CircleAlert className='text-red-500 size-5 md:size-6' />
                {buttonText}
                {/* <ArrowRight className='text-secondary size-5 md:size-6' /> */}
              </Link>
            </Button>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
