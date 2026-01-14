import { SectionHeader } from '@/components/layout/SectionHeader';
import { type LucideIcon } from 'lucide-react';
import { ResourceCard } from './ResourceCard';

type Resource = {
  icon: LucideIcon;
  title: string;
  description: string;
  linkHref: string;
};

type InformationResourcesSectionProps = {
  title: string;
  resources: Resource[];
  className?: string;
};

export function InformationResourcesSection({
  title,
  resources,
  className = '',
}: InformationResourcesSectionProps) {
  return (
    <section className={`bg-background section-padding-sm ${className}`}>
      <div className='container mx-auto px-6 max-w-7xl'>
        {/* Section Header */}
        <SectionHeader
          title={title}
          showAccentLine={false}
          padding='pt-0 pb-6 md:pb-10'
        />

        {/* Resource Cards Grid */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12'>
          {resources.map((resource) => (
            <ResourceCard
              key={resource.title}
              icon={resource.icon}
              title={resource.title}
              description={resource.description}
              linkHref={resource.linkHref}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
