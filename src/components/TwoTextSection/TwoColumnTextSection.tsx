'use client';

import { ScrollReveal } from '@/components/scroll-animation/scroll-reveal';
import Link from 'next/link';

type LinkConfig = {
  text: string;
  href: string;
  showArrow?: boolean;
};

type TwoColumnTextSectionProps = {
  title: string;
  content: string;
  link?: LinkConfig;
  titleColor?: string;
  textColor?: string;
  linkColor?: string;
  backgroundColor?: string;
  spacing?: 'tight' | 'normal' | 'loose';
  className?: string;
};

export function TwoColumnTextSection({
  title,
  content,
  link,
  titleColor = 'text-secondary',
  textColor = '',
  linkColor = 'text-secondary',
  backgroundColor = 'bg-background',
  spacing = 'tight',
  className = '',
}: TwoColumnTextSectionProps) {
  const spacingMap = {
    tight: 'py-12',
    normal: 'section-padding-sm',
    loose: 'section-padding-lg',
  };

  return (
    <section
      className={`${backgroundColor} ${spacingMap[spacing]} ${className}`}
    >
      <div className='container mx-auto px-6 max-w-[1024px]'>
        <div className='flex flex-col lg:flex-row justify-between items-start gap-6 lg:gap-12'>
          {/* Title Section */}
          <ScrollReveal variant='fade-up' delay={0} duration={0.7}>
            <div className='flex-1'>
              <h1 className={titleColor}>{title}</h1>
            </div>
          </ScrollReveal>

          {/* Content Section */}
          <ScrollReveal variant='fade-up' delay={0.3} duration={0.7} className='flex-1 w-full'>
            <div className='flex-1 flex flex-col justify-start items-start gap-4 lg:gap-6'>
              <p className={`whitespace-pre-line ${textColor}`}>{content}</p>

              {/* Optional Link */}
              {link && (
                <Link
                  href={link.href}
                  className={`group inline-flex items-center gap-2 ${linkColor} text-sm md:text-base font-semibold uppercase tracking-wider transition-all hover:gap-3 hover:opacity-80`}
                >
                  {link.text}
                  {link.showArrow !== false && (
                    <span className='transition-transform group-hover:translate-x-1'>
                      &gt;
                    </span>
                  )}
                </Link>
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
