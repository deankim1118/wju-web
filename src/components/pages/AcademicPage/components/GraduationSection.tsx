import type { GraduationRequirement } from '@/config/academics/program-extended-types';
import type { DegreeProgram } from '@/config/academics-content';
import { SectionHeading } from './SectionHeading';
import { RequirementItem } from './RequirementItem';

type GraduationSectionProps = {
  requirements: GraduationRequirement[];
  program?: DegreeProgram;
};

export function GraduationSection({ requirements, program }: GraduationSectionProps) {
  const introText = program
    ? `To qualify for the ${program.title} degree, candidates must fulfill the following requirements:`
    : 'To qualify for graduation, candidates must fulfill the following requirements:';

  return (
    <section aria-labelledby="graduation-heading" className="space-y-8">
      <SectionHeading
        id="graduation-heading"
        title="Graduation Requirements"
        subtitle={introText}
      />

      <ul className="space-y-3" role="list">
        {requirements.map((req) => (
          <RequirementItem key={req.id}>
            <div className="flex flex-col">
              <span className="text-base leading-relaxed text-slate-900">
                {req.label}
              </span>
              {req.details && (
                <ul className="mt-2 ml-4 space-y-1.5">
                  {req.details.map((detail, idx) => (
                    <li
                      key={idx}
                      className="text-sm leading-relaxed text-muted-foreground relative pl-4 before:absolute before:left-0 before:top-[0.4em] before:block before:size-1 before:rounded-full before:bg-primary/40 before:content-['']"
                    >
                      {detail}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </RequirementItem>
        ))}
      </ul>
    </section>
  );
}
