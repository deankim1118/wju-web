'use client';

import { Accordion } from '@/components/ui/accordion';
import { BorderedAccordionItem } from '@/components/ui/custom/BorderedAccordionItem';
import type { DegreeProgram } from '@/config/academics-content';
import type { CurriculumCourseItem } from '@/config/academics/program-extended';
import { useHashScroll } from '@/hooks/use-hash-scroll';
import { useMemo } from 'react';

type ByProgram = Array<{
  program: DegreeProgram;
  courses: CurriculumCourseItem[];
}>;

type CourseListByProgramProps = {
  byProgram: ByProgram;
};

export function CourseListByProgram({ byProgram }: CourseListByProgramProps) {
  const slugs = useMemo(
    () => byProgram.map((p) => p.program.slug),
    [byProgram],
  );
  const { openValue, setOpenValue } = useHashScroll(slugs, '');

  return (
    <Accordion
      type='single'
      collapsible
      className='w-full'
      value={openValue}
      onValueChange={setOpenValue}
    >
      {byProgram.map(({ program, courses }, index) => {
        const isLast = index === byProgram.length - 1;
        return (
          <BorderedAccordionItem
            key={program.slug}
            value={program.slug}
            id={program.slug}
            isLast={isLast}
            triggerClassName='text-slate-900'
            trigger={
              <>
                {program.title} ({program.code})
              </>
            }
          >
            <ul
              className={
                courses.length === 0 ? 'pt-2' : 'divide-y divide-border/80 pt-2'
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
                      <span className=''>{course.code}</span>
                      <span>{course.name}</span>
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
          </BorderedAccordionItem>
        );
      })}
    </Accordion>
  );
}
