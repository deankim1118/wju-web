import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from '@/components/ui/card';
import { cn } from '@/lib/utils';

type PageSectionProps = {
  id?: string;
  title: string;
  description?: string;
  className?: string;
  children: React.ReactNode;
};

/**
 * Reusable section card for all Admissions page sub-sections.
 * Replaces TuitionPageSection and ScholarshipPageSection.
 */
export function PageSection({
  id,
  title,
  description,
  className,
  children,
}: PageSectionProps) {
  const headingId = id ? `${id}-heading` : undefined;

  return (
    <section id={id} aria-labelledby={headingId}>
      <Card className={cn('gap-2 rounded-none', className)}>
        <CardHeader className='pb-2'>
          <h3
            id={headingId}
            className='font-semibold leading-none text-slate-900'
          >
            {title}
          </h3>
          {description && <CardDescription>{description}</CardDescription>}
        </CardHeader>
        <CardContent>{children}</CardContent>
      </Card>
    </section>
  );
}
