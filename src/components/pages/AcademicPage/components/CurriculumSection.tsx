import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import type { CurriculumCategory } from '@/config/academics/program-extended-types';
import { cn } from '@/lib/utils';

type CurriculumSectionProps = {
  curriculum: CurriculumCategory[];
};

export function CurriculumSection({ curriculum }: CurriculumSectionProps) {
  return (
    <section aria-labelledby="curriculum-heading" className="space-y-6">
      <h2
        id="curriculum-heading"
      >
        Curriculum
      </h2>

      <Accordion type="single" collapsible className="w-full">
        {curriculum.map((category, index) => {
          const totalCredits = category.courses.reduce((sum, c) => sum + c.credits, 0);
          const isLast = index === curriculum.length - 1;
          return (
            <AccordionItem
              key={category.id}
              value={category.id}
              className={cn(
                'border rounded-lg px-4 bg-card',
                isLast && 'border-b!' // 마지막 항목에도 border-bottom 강제 유지
              )}
            >
              <AccordionTrigger className="text-left font-medium hover:no-underline [&[data-state=open]>svg]:rotate-180 text-muted-foreground">
                <span>
                  {category.name}{' '}
                  <span className="font-normal">
                    ({totalCredits} credits)
                  </span>
                </span>
              </AccordionTrigger>
              <AccordionContent className="pb-4">
                <ul className="space-y-2.5 pt-2">
                  {category.courses.map((course) => (
                    <li
                      key={course.code}
                      className="flex flex-wrap items-baseline justify-between gap-2 text-sm text-muted-foreground"
                    >
                      <span>
                        <span className="font-mono mr-2">
                          {course.code}
                        </span>
                        {course.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </section>
  );
}
