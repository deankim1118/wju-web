'use client';

import { ScrollReveal } from '@/components/scroll-animation/scroll-reveal';
import { SectionHeader } from '../layout/SectionHeader';
import { AcademicCard } from './AcademicCard';

type AcademicProgram = {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  linkHref: string;
};

type AcademicsSectionProps = {
  title: string;
  programs: AcademicProgram[];
  className?: string;
};

export function AcademicsSection({
  title,
  programs,
  className = '',
}: AcademicsSectionProps) {
  return (
    <section className={`bg-foreground section-padding-bottom ${className}`}>
      <div className='container mx-auto px-6 max-w-[1440px]'>
        {/* Section Header */}
        <ScrollReveal variant='fade-up' delay={0} duration={1.5}>
          <SectionHeader title={title} />
        </ScrollReveal>

        {/* Cards Grid */}
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
          {programs.map((program, index) => (
            <ScrollReveal
              key={program.title}
              variant='zoom-in'
              delay={index * 0.3}
              duration={0.8}
              className='h-full'
            >
              <AcademicCard
                title={program.title}
                description={program.description}
                imageUrl={program.imageUrl}
                imageAlt={program.imageAlt}
                linkHref={program.linkHref}
              />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
