import type { OutcomeItem } from '@/config/academics/program-extended-types';
import { SectionHeading } from './SectionHeading';

type OutcomesSectionProps = {
  outcomes: OutcomeItem[];
};

/**
 * Determine optimal grid columns based on number of outcomes
 * Ensures each outcome has sufficient space for readability
 */
function getGridCols(outcomeCount: number): string {
  if (outcomeCount === 0) return 'grid-cols-1';
  if (outcomeCount <= 3) return 'grid-cols-1';
  if (outcomeCount <= 6) return 'grid-cols-1 lg:grid-cols-2';
  // 7+ outcomes: use 2 columns on large screens, 3 on xl if needed
  return 'grid-cols-1 lg:grid-cols-2 xl:grid-cols-3';
}

export function OutcomesSection({ outcomes }: OutcomesSectionProps) {
  if (outcomes.length === 0) {
    return null;
  }

  const gridCols = getGridCols(outcomes.length);

  return (
    <section aria-labelledby="outcomes-heading" className="space-y-8">
      <SectionHeading
        id="outcomes-heading"
        title="Learning Outcomes"
        subtitle="Students will be able to:"
      />

      {/* Outcomes Grid - Dynamic columns based on count */}
      <div className={`grid ${gridCols} gap-4 md:gap-6 lg:gap-10`}>
        {outcomes.map((outcome, index) => (
          <div
            key={outcome.id}
            className="flex flex-col border-b border-slate-200 pb-2 last:border-b-0 last:pb-0 lg:border-b-0 lg:pb-0 lg:border-r lg:pr-12 "
          >
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-900 mb-3">
              {outcome.title}
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              {outcome.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
