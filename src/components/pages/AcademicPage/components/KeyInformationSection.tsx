import type { KeyInformation } from '@/config/academics/program-extended-types';
import { Banknote, Calendar, MapPin, type LucideIcon } from 'lucide-react';

type KeyInformationSectionProps = {
  data: KeyInformation;
};

type MetricItem = {
  type: 'number' | 'icon';
  label: string;
  value: string;
  icon?: LucideIcon;
  note?: string;
};

function formatStudyOptions(
  studyOptions: KeyInformation['studyOptions'],
): string {
  return studyOptions.map((option) => option.type).join(' & ');
}

export function KeyInformationSection({ data }: KeyInformationSectionProps) {
  const yearsOfStudy = data.creditInfo.yearsOfStudy || 'Contact for details';
  const studyMode = formatStudyOptions(data.studyOptions);
  const semesters = 'Fall (Aug–Dec) & Spring (Jan–May)';

  // Data-driven metrics configuration
  const numberMetrics: MetricItem[] = [
    {
      type: 'number',
      label: 'Credits',
      value: data.creditInfo.creditHours,
      note: data.creditInfo.creditNote,
    },
    {
      type: 'number',
      label: 'Years of Study',
      value: yearsOfStudy,
    },
  ];

  const iconMetrics: MetricItem[] = [
    {
      type: 'icon',
      label: 'Cost',
      value: data.creditInfo.costPerCredit,
      icon: Banknote,
    },
    {
      type: 'icon',
      label: 'Semesters',
      value: semesters,
      icon: Calendar,
    },
    {
      type: 'icon',
      label: 'Study Mode',
      value: studyMode,
      icon: MapPin,
    },
  ];

  return (
    <div className=''>
      <div className='mx-auto max-w-7xl'>
        <div className='grid gap-12 md:grid-cols-5'>
          {/* Left Section - Title */}
          <div className='flex items-start col-span-2'>
            <h2 className='uppercase tracking-wide text-slate-900'>
              Program Snapshot
            </h2>
          </div>

          {/* Right Section */}
          <div className='space-y-10 col-span-3'>
            {/* Top Row - Large Number Cards */}
            <div className='grid grid-cols-1 gap-6 sm:grid-cols-2'>
              {numberMetrics.map((metric) => (
                <div key={metric.label}>
                  <div className='mb-2'>
                    <div className='text-5xl font-semibold text-slate-900 md:text-6xl'>
                      {metric.value}
                    </div>
                    <div className='mt-2 h-px w-full bg-slate-900'></div>
                  </div>
                  <p className='mt-3 flex items-baseline gap-0 text-xs uppercase tracking-wider text-slate-800 flex-col'>
                    {metric.label}
                    {metric.note && (
                      <span className='normal-case tracking-normal text-rose-500 text-xs font-normal'>
                        {metric.note}
                      </span>
                    )}
                  </p>
                </div>
              ))}
            </div>

            {/* Bottom Row - Text Information Cards with Icons */}
            <div className='grid grid-cols-1 gap-6 sm:grid-cols-3'>
              {iconMetrics.map((metric) => {
                const Icon = metric.icon;
                return (
                  <div
                    key={metric.label}
                    className='border-t border-slate-200 pt-4'
                  >
                    <div className='flex items-start gap-3'>
                      {Icon && (
                        <Icon className='mt-0.5 size-5 shrink-0 text-slate-600' />
                      )}
                      <div className='flex-1'>
                        <p className='text-sm uppercase tracking-wider text-slate-800 mb-1.5'>
                          {metric.label}
                        </p>
                        <p className='text-sm font-medium text-slate-900 leading-relaxed'>
                          {metric.value}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Hours of Instruction - Subtle description */}
            <div className='border-t border-slate-100 pt-6'>
              <div className='space-y-2 text- text-slate-600 leading-relaxed italic'>
                <span>{data.hoursOfInstruction.semesterHour}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
