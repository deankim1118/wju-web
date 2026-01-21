import { SectionHeader } from '@/components/layout/SectionHeader';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

type Distinctive = {
  title: string;
  description: string;
};

type AcademicDistinctivesSectionProps = {
  title: string;
  items: readonly Distinctive[];
  className?: string;
};

export function AcademicDistinctivesSection({
  title,
  items,
  className = '',
}: AcademicDistinctivesSectionProps) {
  return (
    <section className={`relative bg-foreground section-padding-sm ${className}`}>
      <div className='absolute left-0 top-0 h-1.5 w-full max-w-2/3 md:max-w-2/5 bg-secondary' />
      <div className='container mx-auto px-6 max-w-[1440px]'>
        <SectionHeader title={title} />

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
          {items.map((item) => (
            <Card
              key={item.title}
              className='rounded-none border-white/10 bg-background/5 text-white shadow-[0px_10px_30px_rgba(0,0,0,0.18)]'
            >
              <CardHeader className='pb-0'>
                <CardTitle className='font-serif uppercase tracking-wide'>
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent className='text-white/80 leading-7'>
                {item.description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

