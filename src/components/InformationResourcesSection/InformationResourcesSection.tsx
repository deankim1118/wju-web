import { SectionHeader } from '@/components/layout/SectionHeader';
import {
  Award,
  ClipboardList,
  GraduationCap,
  HeartHandshake,
} from 'lucide-react';
import { ResourceCard } from './ResourceCard';

type Resource = {
  icon: typeof GraduationCap;
  title: string;
  description: string;
  linkHref: string;
};

type InformationResourcesSectionProps = {
  title?: string;
  resources?: Resource[];
  className?: string;
};

const DEFAULT_RESOURCES: Resource[] = [
  {
    icon: Award,
    title: 'Scholarships',
    description:
      'Recognizing your gifts with a wide range of merit-based and ministry-focused awards.',
    linkHref: '#',
  },
  {
    icon: ClipboardList,
    title: 'Admissions Procedure',
    description:
      'Find all the information, requirements, and deadlines to begin your theological journey.',
    linkHref: '#',
  },
  {
    icon: HeartHandshake,
    title: 'Tuition & Financial Aid',
    description:
      'Discover affordable tuition plans and scholarship opportunities to support your theological journey.',
    linkHref: '#',
  },
];

export function InformationResourcesSection({
  title = 'Information & Resources',
  resources = DEFAULT_RESOURCES,
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
