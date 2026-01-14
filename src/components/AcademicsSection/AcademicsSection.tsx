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
        <SectionHeader title={title} />

        {/* Cards Grid */}
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
          {programs.map((program) => (
            <AcademicCard
              key={program.title}
              title={program.title}
              description={program.description}
              imageUrl={program.imageUrl}
              imageAlt={program.imageAlt}
              linkHref={program.linkHref}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
