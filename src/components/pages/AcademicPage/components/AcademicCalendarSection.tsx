import { Accordion } from '@/components/ui/accordion';
import { BorderedAccordionItem } from '@/components/ui/custom/BorderedAccordionItem';
import { formatDateRange } from '@/lib/date-utils';
import { ResourcePageHeader } from './ResourcePageHeader';

/** Payload Academic Calendar Global에서 오는 학기·일정 구조 */
export type AcademicCalendarTerm = {
  id?: string | null;
  name: string;
  events?: Array<{
    id?: string | null;
    title: string;
    startDate: string;
    endDate?: string | null;
    time?: string | null;
  }> | null;
};

type AcademicCalendarSectionProps = {
  terms: AcademicCalendarTerm[];
};

export function AcademicCalendarSection({
  terms,
}: AcademicCalendarSectionProps) {
  if (!terms?.length) {
    return (
      <section
        aria-labelledby='academic-calendar-heading'
        className='space-y-8'
      >
        <ResourcePageHeader
          title='Academic Calendar'
          description='Dates and schedules for the current academic year.'
          id='academic-calendar-heading'
        />
        <p className='text-sm text-muted-foreground'>
          No calendar data has been added yet. Add semesters and events in the
          admin.
        </p>
      </section>
    );
  }

  return (
    <section aria-labelledby='academic-calendar-heading' className='space-y-8'>
      <ResourcePageHeader
        title='Academic Calendar'
        description='Dates and schedules for the current academic year.'
        id='academic-calendar-heading'
      />
      <Accordion type='single' collapsible className='w-full'>
        {terms.map((term, index) => {
          const value = term.id ?? `term-${index}`;
          const isLast = index === terms.length - 1;
          const events = term.events ?? [];

          return (
            <BorderedAccordionItem
              key={value}
              value={value}
              isLast={isLast}
              triggerClassName='text-slate-900'
              trigger={term.name}
            >
              <ul
                className={
                  events.length === 0
                    ? 'pt-2'
                    : 'divide-y divide-border/80 pt-2'
                }
              >
                {events.length === 0 ? (
                  <li className='text-sm text-muted-foreground'>
                    No events for this term.
                  </li>
                ) : (
                  events.map((event) => {
                    const dateText = formatDateRange(
                      event.startDate,
                      event.endDate,
                    );
                    const dateAndTime = event.time
                      ? `${dateText} · ${event.time}`
                      : dateText;
                    return (
                      <li
                        key={event.id ?? event.title + event.startDate}
                        className='flex flex-wrap items-baseline justify-between gap-2 py-2.5 text-sm text-slate-500 first:pt-0'
                      >
                        <span>{event.title}</span>
                        <span className='tabular-nums'>{dateAndTime}</span>
                      </li>
                    );
                  })
                )}
              </ul>
            </BorderedAccordionItem>
          );
        })}
      </Accordion>
    </section>
  );
}
