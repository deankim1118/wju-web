import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { cn } from '@/lib/utils';

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

function formatDateRange(
  startDate: string,
  endDate?: string | null,
): string {
  const start = new Date(startDate);
  const format = (d: Date) =>
    d.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });

  if (!endDate || endDate === startDate) {
    return format(start);
  }
  const end = new Date(endDate);
  return `${format(start)} – ${format(end)}`;
}

export function AcademicCalendarSection({
  terms,
}: AcademicCalendarSectionProps) {
  if (!terms?.length) {
    return (
      <section aria-labelledby="academic-calendar-heading" className="space-y-8">
        <h2 id="academic-calendar-heading">Academic Calendar</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Dates and schedules for the current academic year.
        </p>
        <p className="text-sm text-muted-foreground">
          No calendar data has been added yet. Add semesters and events in the
          admin.
        </p>
      </section>
    );
  }

  return (
    <section aria-labelledby="academic-calendar-heading" className="space-y-8">
      <h2 id="academic-calendar-heading">Academic Calendar</h2>
      <p className="mt-1 text-sm text-muted-foreground">
        Dates and schedules for the current academic year.
      </p>

      <Accordion type="single" collapsible className="w-full">
        {terms.map((term, index) => {
          const value = term.id ?? `term-${index}`;
          const isLast = index === terms.length - 1;
          const events = term.events ?? [];

          return (
            <AccordionItem
              key={value}
              value={value}
              className={cn(
                'border-t border-b px-4 bg-card',
                isLast && 'border-b!',
              )}
            >
              <AccordionTrigger className="text-left font-medium hover:no-underline [&[data-state=open]>svg]:rotate-180 text-slate-600 text-sm md:text-base">
                {term.name}
              </AccordionTrigger>
              <AccordionContent className="pb-4">
                <ul
                  className={
                    events.length === 0
                      ? 'pt-2'
                      : 'divide-y divide-border/80 pt-2'
                  }
                >
                  {events.length === 0 ? (
                    <li className="text-sm text-muted-foreground">
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
                          className="flex flex-wrap items-baseline justify-between gap-2 py-2.5 text-sm text-muted-foreground first:pt-0"
                        >
                          <span>{event.title}</span>
                          <span className="text-muted-foreground/90 tabular-nums">
                            {dateAndTime}
                          </span>
                        </li>
                      );
                    })
                  )}
                </ul>
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </section>
  );
}
