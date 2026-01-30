import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import type { CurriculumCategory } from '@/config/academics/program-extended-types';
import { ROUTES } from '@/config/routes';
import { cn } from '@/lib/utils';
import { ArrowRight, List } from 'lucide-react';
import Link from 'next/link';

type CurriculumSectionProps = {
  curriculum: CurriculumCategory[];
};

export function CurriculumSection({ curriculum }: CurriculumSectionProps) {
  return (
    <section aria-labelledby='curriculum-heading' className='space-y-8'>
      <div className='flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between'>
        <h2 id='curriculum-heading'>Curriculum</h2>
        <Button
          variant='outline'
          size='sm'
          className='rounded-md gap-2 shrink-0'
          asChild
        >
          <Link href={ROUTES.ACADEMICS.COURSELIST} className='text-secondary'>
            <List className='size-4' aria-hidden />
            View full course list
            <ArrowRight className='size-4' aria-hidden />
          </Link>
        </Button>
      </div>

      <Accordion type='single' collapsible className='w-full'>
        {curriculum.map((category, index) => {
          const totalCredits = category.courses.reduce(
            (sum, c) => sum + c.credits,
            0,
          );
          const isLast = index === curriculum.length - 1;
          return (
            <AccordionItem
              key={category.id}
              value={category.id}
              className={cn(
                'border-t border-b px-4 bg-card',
                isLast && 'border-b!', // 마지막 항목에도 border-bottom 강제 유지
              )}
            >
              <AccordionTrigger className='text-left font-medium hover:no-underline [&[data-state=open]>svg]:rotate-180 text-slate-600 text-sm md:text-base'>
                <span>
                  {category.name}{' '}
                  <span className='font-normal'>({totalCredits} credits)</span>
                </span>
              </AccordionTrigger>
              <AccordionContent className='pb-4'>
                <ul className='space-y-3 pt-2'>
                  {category.courses.map((course) => (
                    <li
                      key={course.code}
                      className='flex flex-wrap items-baseline gap-2 text-sm text-muted-foreground'
                    >
                      <span className='font-mono text-xs'>{course.code}</span>
                      <span className='font-medium text-slate-700'>
                        {course.name}
                      </span>
                      <span className='text-muted-foreground/90'>
                        ({course.credits} cr.)
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
