'use client';

import { SectionHeader } from '@/components/layout/SectionHeader';
import { ScrollReveal } from '@/components/scroll-animation/scroll-reveal';
import { informationResourcesContent } from '@/config/home-content';
import { ResourceCard } from './ResourceCard';

type InformationResourcesSectionProps = {
  title?: string;
  className?: string;
};

export function InformationResourcesSection({
  title = informationResourcesContent.title,
  className = '',
}: InformationResourcesSectionProps) {
  const resources = informationResourcesContent.resources;
  return (
    <section className={`bg-background section-padding-sm ${className}`}>
      <div className='container mx-auto px-6 max-w-7xl'>
        {/* Section Header */}
        <ScrollReveal variant='fade-up' delay={0} duration={1.5}>
          <SectionHeader
            title={title}
            showAccentLine={false}
            padding='pt-0 pb-6 md:pb-10'
          />
        </ScrollReveal>

        {/* Resource Cards Grid */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12'>
          {resources.map((resource, index) => (
            <ScrollReveal
              key={resource.title}
              variant='fade-up'
              delay={index * 0.2}
              duration={0.5}
            >
              <ResourceCard
                icon={resource.icon}
                title={resource.title}
                description={resource.description}
                linkHref={resource.linkHref}
              />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
