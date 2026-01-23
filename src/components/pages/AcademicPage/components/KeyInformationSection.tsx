import type { KeyInformation } from '@/config/academics/program-extended-types';
import { Calendar, MapPin } from 'lucide-react';

type KeyInformationSectionProps = {
  data: KeyInformation;
};

function calculateYearsOfStudy(creditHours: string): string {
  const hours = parseInt(creditHours, 10);
  if (isNaN(hours)) return 'Contact for details';
  
  // Assuming full-time study (12-15 credits per semester, 2 semesters per year)
  const creditsPerYear = 34; // Conservative estimate
  const years = Math.ceil(hours / creditsPerYear);
  return years.toString();
}

function formatStudyOptions(studyOptions: KeyInformation['studyOptions']): string {
  return studyOptions
    .map((option) => option.type)
    .join(' & ');
}

export function KeyInformationSection({ data }: KeyInformationSectionProps) {
  const yearsOfStudy = calculateYearsOfStudy(data.creditInfo.creditHours);
  const studyMode = formatStudyOptions(data.studyOptions);
  const semesters = 'Fall (Aug–Dec) & Spring (Jan–May)';

  return (
    <div className="">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-5">
          {/* Left Section - Title */}
          <div className="flex items-start col-span-2">
            <h2 className="uppercase tracking-wide text-slate-900">
              Program Snapshot
            </h2>
          </div>

          {/* Right Section */}
          <div className="space-y-10 col-span-3">
            {/* Top Row - Large Number Cards (3 items) */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              {/* Credits */}
              <div>
                <div className="mb-2">
                  <div className="text-5xl font-semibold text-slate-900 md:text-6xl">
                    {data.creditInfo.creditHours}
                  </div>
                  <div className="mt-2 h-px w-full bg-slate-900"></div>
                </div>
                <p className="mt-3 text-xs uppercase tracking-wider text-slate-700">
                  Credits
                </p>
              </div>

              {/* Years of Study */}
              <div>
                <div className="mb-2">
                  <div className="text-5xl font-semibold text-slate-900 md:text-6xl">
                    {yearsOfStudy}
                  </div>
                  <div className="mt-2 h-px w-full bg-slate-900"></div>
                </div>
                <p className="mt-3 text-xs uppercase tracking-wider text-slate-700">
                  Years of Study
                </p>
              </div>

              {/* Semester Hours */}
              <div>
                <div className="mb-2">
                  <div className="text-5xl font-semibold text-slate-900 md:text-6xl">
                    2/3
                  </div>
                  <div className="mt-2 h-px w-full bg-slate-900"></div>
                </div>
                <p className="mt-3 text-xs uppercase tracking-wider text-slate-700">
                Max Transfer Credits
                </p>
              </div>
            </div>

            {/* Bottom Row - Text Information Cards (2 items) */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {/* Semesters */}
              <div className="border-t border-slate-200 pt-4">
                <div className="flex items-start gap-3">
                  <Calendar className="mt-0.5 size-5 shrink-0 text-slate-600" />
                  <div className="flex-1">
                    <p className="text-sm uppercase tracking-wider text-slate-700 mb-1.5">
                      Semesters
                    </p>
                    <p className="text-sm font-medium text-slate-900 leading-relaxed">
                      {semesters}
                    </p>
                  </div>
                </div>
              </div>

              {/* Study Mode */}
              <div className="border-t border-slate-200 pt-4">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 size-5 shrink-0 text-slate-600" />
                  <div className="flex-1">
                    <p className="text-sm uppercase tracking-wider text-slate-700 mb-1.5">
                      Study Mode
                    </p>
                    <p className="text-sm font-medium text-slate-900 leading-relaxed">
                      {studyMode}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Hours of Instruction - Subtle description */}
            <div className="border-t border-slate-100 pt-6">
              <div className="space-y-2 text- text-slate-600 leading-relaxed italic">
                <span>{data.hoursOfInstruction.semesterHour}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
