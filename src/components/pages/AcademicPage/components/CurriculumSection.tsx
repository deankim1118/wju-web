import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import type { CurriculumCategory } from '@/config/academics/program-extended-types';

type CurriculumSectionProps = {
  curriculum: CurriculumCategory[];
};

export function CurriculumSection({ curriculum }: CurriculumSectionProps) {
  return (
    <section aria-labelledby="curriculum-heading" className="space-y-6">
      <h2
        id="curriculum-heading"
        className="font-serif text-2xl font-semibold text-primary md:text-3xl"
      >
        Curriculum
      </h2>

      <Accordion type="single" collapsible className="w-full">
        {curriculum.map((category) => {
          const totalCredits = category.courses.reduce((sum, c) => sum + c.credits, 0);
          return (
            <AccordionItem
              key={category.id}
              value={category.id}
              className="border rounded-lg px-4 mb-2 bg-card"
            >
              <AccordionTrigger className="text-left font-medium hover:no-underline [&[data-state=open]>svg]:rotate-180 text-muted-foreground">
                <span>
                  {category.name}{' '}
                  <span className="font-normal">
                    ({totalCredits} credits)
                  </span>
                </span>
              </AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-2.5 pt-2">
                  {category.courses.map((course) => (
                    <li
                      key={course.code}
                      className="flex flex-wrap items-baseline justify-between gap-2 text-sm text-muted-foreground"
                    >
                      <span>
                        <span className="font-mono  mr-2">
                          {course.code}
                        </span>
                        {course.name}
                      </span>
                      {/* <span className=" shrink-0">
                        {course.credits} credits
                      </span> */}
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
