'use client';

import { ScrollReveal } from '@/components/scroll-animation/scroll-reveal';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

type TextWithImageSectionProps = {
  title: string;
  subtitle?: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  imagePosition?: 'left' | 'right';
  backgroundColor?: string;
  titleColor?: string;
  textColor?: string;
  accentColor?: string;
  showAccentLine?: boolean;
  hideImageMobile?: boolean;
  className?: string;
  author?: string;
  authorTitle?: string;
  authorColor?: string;
  button?: boolean;
  buttonText?: string;
  buttonHref?: string;
};

export function TextWithImageSection({
  title,
  subtitle,
  description,
  author,
  authorTitle,
  imageUrl,
  imageAlt,
  imagePosition = 'right',
  backgroundColor = 'bg-foreground',
  titleColor = 'text-primary',
  textColor = '',
  accentColor = 'bg-secondary',
  authorColor = 'text-slate-800',
  showAccentLine = true,
  hideImageMobile = false,
  className = '',
  button = false,
  buttonText = 'Learn More',
  buttonHref = '#',
}: TextWithImageSectionProps) {
  const textContent = (
    <div className='flex-1 flex flex-col justify-start items-start gap-6 md:gap-10'>
      {/* Title with Optional Decorative Line */}
      <ScrollReveal variant='fade-up' duration={1.4}>
        <div className='flex flex-col justify-start items-start gap-3 w-full'>
          <h1 className={`${titleColor} font-light`}>{title}</h1>
          {showAccentLine && <div className={`w-24 h-1.5 ${accentColor}`} />}
          {subtitle && <p className=' italic font-serif'>{subtitle}</p>}
        </div>
      </ScrollReveal>
      {/* Description */}
      <ScrollReveal variant='fade-up' delay={0.2} duration={0.7}>
        <p className={`whitespace-pre-line ${textColor}`}>{description}</p>
      </ScrollReveal>
      {/* Author */}
      {author && (
        <ScrollReveal variant='fade-up' delay={0.3} duration={0.7}>
          <div className='flex flex-col font-serif italic w-full justify-start items-end '>
            <p className={`${authorColor}`}>{author}</p>
            <p className={`${authorColor}`}>{authorTitle}</p>
          </div>
        </ScrollReveal>
      )}
      {button && (
        <ScrollReveal variant='fade-up' delay={0.4} duration={0.7}>
          <Link
            href={buttonHref}
            className='inline-flex items-center gap-2 text-secondary text-base lg:text-lg uppercase tracking-wider mt-4 group-hover:gap-3 transition-all'
          >
            {buttonText}
            <ArrowRight className='size-4 group-hover:translate-x-1 transition-transform' />
          </Link>
        </ScrollReveal>
      )}
    </div>
  );

  const imageContent = (
    <div
      className={`w-full lg:w-auto lg:flex-1 lg:max-w-[600px] ${
        hideImageMobile ? 'hidden lg:block' : ''
      }`}
    >
      <ScrollReveal
        variant={imagePosition === 'left' ? 'fade-left' : 'fade-right'}
        delay={0}
        duration={1.4}
        className='flex-1 w-full'
      >
        <div className='relative w-full aspect-4/3 bg-muted overflow-hidden'>
          <Image
            src={imageUrl}
            alt={imageAlt}
            fill
            className='object-cover'
            sizes='(max-width: 1024px) 100vw, 600px'
            priority={false}
          />
        </div>
      </ScrollReveal>
    </div>
  );

  return (
    <section className={`${backgroundColor} section-padding-lg ${className}`}>
      <div className='container mx-auto px-6 max-w-[1440px]'>
        <div className='flex flex-col lg:flex-row justify-between items-center lg:items-start gap-10 lg:gap-16'>
          {imagePosition === 'left' ? (
            <>
              {imageContent}
              {textContent}
            </>
          ) : (
            <>
              {textContent}
              {imageContent}
            </>
          )}
        </div>
      </div>
    </section>
  );
}
