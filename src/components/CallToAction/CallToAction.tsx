'use client';

import { ScrollReveal } from '@/components/scroll-animation/scroll-reveal';
import { Button } from '@/components/ui/button';
import { ArrowRight, CircleAlert } from 'lucide-react';
import Link from 'next/link';
import { ROUTES } from '../../config/routes';

type CallToActionProps = {
  title?: string;
  description?: string;
  buttonText?: string;
  subButtonText?: string;
  href?: string;
  applyHref?: string;
};

export function CallToAction({
  title = 'BE A WJU',
  description = "WJU is where great stories begin. It's time to start yours. Find out how.",
  buttonText = 'REQUEST INFORMATION',
  subButtonText = '',
  href = ROUTES.REQUEST_INFO,
  applyHref = ROUTES.APPLY,
}: CallToActionProps) {
  return (
    <section className='bg-primary text-primary-foreground py-8 w-full'>
      <div className='container mx-auto px-6 lg:px-20 xl:px-0 max-w-[1024px] '>
        <div className='flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8'>
          <div className='flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8 lg:flex-1 lg:min-w-0'>
            <ScrollReveal
              variant='fade-up'
              delay={0.3}
              duration={0.8}
              animateImmediately={true}
            >
              <h2 className='text-primary-foreground font-serif font-bold'>
                {title}
              </h2>
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
          </div>

          <ScrollReveal
            variant='fade-up'
            delay={0.5}
            duration={0.8}
            animateImmediately={true}
            className='shrink-0 lg:min-w-0 max-w-[470px] w-full lg:w-fit'
          >
            <div className='flex w-full lg:w-auto gap-2 lg:gap-0 flex-wrap lg:flex-nowrap'>
              <Button
                variant='outline'
                size='icon-sm'
                className='text-sm md:text-base font-semibold md:font-normal uppercase border rounded-none hover:bg-primary-foreground hover:text-primary w-full lg:w-auto px-2 py-[18px] whitespace-nowrap'
                asChild
              >
                <Link
                  href={href}
                  className='flex items-center justify-center gap-2'
                >
                  <CircleAlert className='text-rose-500 size-4 md:size-5 shrink-0' />
                  <span className='truncate'>{buttonText}</span>
                  {!subButtonText && (
                    <ArrowRight className='text-rose-500 hover:text-primary size-4 md:size-5 shrink-0' />
                  )}
                </Link>
              </Button>
              {subButtonText && (
                <Button
                  variant='default'
                  size='icon-sm'
                  className='text-sm md:text-base font-semibold md:font-normal uppercase border rounded-none bg-rose-500 hover:bg-primary-foreground hover:text-primary w-full lg:w-auto px-2 py-[18px] whitespace-nowrap'
                  asChild
                >
                  <Link
                    href={applyHref}
                    className='flex items-center justify-center gap-2'
                  >
                    <span>{subButtonText}</span>
                    <ArrowRight className='hover:text-primary size-4 md:size-5 shrink-0' />
                  </Link>
                </Button>
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
