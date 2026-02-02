import { cn } from '@/lib/utils';

type ScholarshipPageSectionProps = {
  id?: string;
  title: string;
  children: React.ReactNode;
  className?: string;
};

/**
 * Page section for scholarship content (General Principles, Eligibility, etc.).
 * Used for non-accordion, prose-style blocks.
 */
export function ScholarshipPageSection({
  id,
  title,
  children,
  className,
}: ScholarshipPageSectionProps) {
  return (
    <section
      id={id}
      className={cn(
        'rounded-lg border border-border/80 bg-card px-5 py-5 shadow-sm md:px-6 md:py-6',
        className,
      )}
      aria-labelledby={id ? `${id}-heading` : undefined}
    >
      <h3 id={id ? `${id}-heading` : undefined} className=' text-slate-900'>
        {title}
      </h3>
      <div className='mt-3 text-base leading-relaxed text-slate-800 md:mt-4'>
        {children}
      </div>
    </section>
  );
}
