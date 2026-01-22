import { ChevronRight } from 'lucide-react';
import type { SemesterStep } from '@/config/academics/program-extended-types';

type StructureSectionProps = {
  steps: SemesterStep[];
};

export function StructureSection({ steps }: StructureSectionProps) {
  return (
    <section aria-labelledby="structure-heading" className="space-y-6">
      <h2
        id="structure-heading"
        className="font-serif text-2xl font-semibold text-primary md:text-3xl"
      >
        Program Structure
      </h2>

      <div className="flex flex-col md:flex-row md:items-stretch gap-4 md:gap-0">
        {steps.map((step, index) => (
          <div
            key={step.id}
            className="flex flex-1 flex-col md:flex-row md:items-center"
          >
            <div className="flex flex-1 flex-col rounded-lg border border-border/60 bg-card p-6 shadow-sm">
              <div className="flex items-center gap-2">
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-semibold">
                  {index + 1}
                </span>
                <h3 className="font-semibold text-slate-900">{step.title}</h3>
              </div>
              <p className="mt-2 text-sm text-muted-foreground pl-10">
                {step.description}
              </p>
            </div>
            {index < steps.length - 1 && (
              <div className="hidden md:flex shrink-0 items-center px-2">
                <ChevronRight className="size-5 text-muted-foreground" />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
