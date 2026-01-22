import type { KeyInformation } from '@/config/academics/program-extended-types';
import { BookOpen, Clock, Info } from 'lucide-react';

type KeyInformationSectionProps = {
  data: KeyInformation;
};

export function KeyInformationSection({ data }: KeyInformationSectionProps) {
  return (
    <div className="space-y-8">

      <div className="grid gap-8 md:grid-cols-3 md:divide-x md:divide-border/60">
        {/* Credit Information */}
        <div className="space-y-4 md:pr-8">
          <div className="flex items-center gap-2.5">
            <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary/10">
              <Info className="size-5 text-rose-500" />
            </div>
            <h4 className="uppercase tracking-wide text-primary">
              Credit Information
            </h4>
          </div>
          <div className="space-y-2.5 text-sm text-muted-foreground">
            <p>
              <span className="font-medium text-slate-900">Credit hours:</span>{' '}
              {data.creditInfo.creditHours}
            </p>
            <p>{data.creditInfo.costPerCredit}</p>
          </div>
        </div>

        {/* Study Options */}
        <div className="space-y-4 md:px-8">
          <div className="flex items-center gap-2.5">
            <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary/10">
              <BookOpen className="size-5 text-rose-500" />
            </div>
            <h4 className="uppercase tracking-wide text-primary">
              Study Options
            </h4>
          </div>
          <div className="space-y-4 text-sm">
            {data.studyOptions.map((option) => {
              const optionsArray = Array.isArray(option.options)
                ? option.options
                : [option.options];
              return (
                <div key={option.type}>
                  <p className="font-medium text-slate-900 mb-2">{option.type}</p>
                  <ul className="space-y-1.5 text-muted-foreground">
                    {optionsArray.map((opt) => (
                      <li
                        key={opt}
                        className="relative pl-4 before:absolute before:left-0 before:top-[0.4em] before:block before:size-1 before:rounded-full before:bg-primary/50 before:content-['']"
                      >
                        {opt}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        {/* Hours of Instruction */}
        <div className="space-y-4 md:pl-8">
          <div className="flex items-center gap-2.5">
            <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary/10">
              <Clock className="size-5 text-rose-500" />
            </div>
            <h4 className="uppercase tracking-wide text-primary">
              Hours of Instruction
            </h4>
          </div>
          <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
            <p>{data.hoursOfInstruction.semesterHour}</p>
            <p>{data.hoursOfInstruction.fieldEducation}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
