'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import type { DegreeProgram } from '@/config/academics-content';
import type { CurriculumCourseItem } from '@/config/academics/program-extended';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

type ByProgram = Array<{
  program: DegreeProgram;
  courses: CurriculumCourseItem[];
}>;

type CourseListByProgramProps = {
  byProgram: ByProgram;
};

export function CourseListByProgram({ byProgram }: CourseListByProgramProps) {
  const firstSlug = byProgram[0]?.program.slug ?? '';
  const [openValue, setOpenValue] = useState<string>(firstSlug);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const hash = window.location.hash.slice(1).toLowerCase();
    if (!hash) return;
    const isProgramSlug = byProgram.some(
      ({ program }) => program.slug === hash,
    );
    if (isProgramSlug) setOpenValue(hash);
    const el = document.getElementById(hash);
    if (el) {
      setTimeout(
        () => el.scrollIntoView({ behavior: 'smooth', block: 'start' }),
        100,
      );
    }
    const onHashChange = () => {
      const h = window.location.hash.slice(1).toLowerCase();
      if (byProgram.some(({ program }) => program.slug === h)) setOpenValue(h);
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, [byProgram]);

  return (
    <Accordion type='single' collapsible className='w-full'>
      {byProgram.map(({ program, courses }, index) => {
        const isLast = index === byProgram.length - 1;
        return (
          <AccordionItem
            key={program.slug}
            id={program.slug}
            value={program.slug}
            className={cn(
              'border-t border-b px-4 bg-card',
              isLast && 'border-b!',
            )}
          >
            <AccordionTrigger className='text-left font-medium hover:no-underline [&[data-state=open]>svg]:rotate-180 text-slate-900 text-sm md:text-base'>
              {program.title} ({program.code})
            </AccordionTrigger>
            <AccordionContent className='pb-4'>
              <ul
                className={
                  courses.length === 0
                    ? 'pt-2'
                    : 'divide-y divide-border/80 pt-2'
                }
              >
                {courses.length === 0 ? (
                  <li className='text-sm text-muted-foreground'>
                    No courses for this program.
                  </li>
                ) : (
                  courses.map((course) => (
                    <li
                      key={course.normalizedCode}
                      className='py-2.5 text-sm text-muted-foreground first:pt-0'
                    >
                      <span className='flex flex-wrap items-baseline gap-x-2 gap-y-1 text-slate-700 font-medium'>
                        <span className='text-xs '>{course.code}</span>
                        <span className=''>{course.name}</span>
                        <span>({course.credits} cr.)</span>
                      </span>
                      {course.description && (
                        <p className='mt-1.5 pl-0 text-sm text-slate-500 leading-relaxed'>
                          {course.description}
                        </p>
                      )}
                    </li>
                  ))
                )}
              </ul>
            </AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
}
