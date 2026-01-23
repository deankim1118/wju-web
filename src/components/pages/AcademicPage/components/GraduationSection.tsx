import type { GraduationRequirement } from '@/config/academics/program-extended-types';
import { CheckCircle } from 'lucide-react';

type GraduationSectionProps = {
  requirements: GraduationRequirement[];
};

export function GraduationSection({ requirements }: GraduationSectionProps) {
  return (
    <section aria-labelledby="graduation-heading" className="space-y-8">
      <div className="space-y-2">
        <h2
          id="graduation-heading"
          className="uppercase tracking-wide text-slate-900"
        >
          Graduation Requirements
        </h2>
        <p className="text-sm text-slate-600 leading-relaxed">
          To qualify for the Master of Divinity degree, candidates must fulfill the following requirements:
        </p>
      </div>

      <ul className="space-y-3" role="list">
        {requirements.map((req) => (
          <li key={req.id} className="">
            
            <div className="flex items-start gap-3">
            <CheckCircle
              className="size-4 shrink-0 text-secondary mt-1"
              aria-hidden
            />
            <div className="flex flex-col items-start">
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
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
