import Link from 'next/link';

import { Dot } from 'lucide-react';

import { SectionHeader } from '@/components/layout/SectionHeader';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import type { DegreeLevel, DegreeProgram } from '@/config/academics-content';
import { ScrollReveal } from '../../../scroll-animation/scroll-reveal';
import { getLevelBadgeClasses } from './program-level-styles';

type ProgramGroup = {
  level: DegreeLevel;
  title: string;
  description: string;
  programs: readonly DegreeProgram[];
};

type DegreeProgramsSectionProps = {
  id?: string;
  title: string;
  subtitle?: string;
  groups: readonly ProgramGroup[];
  className?: string;
};

export function DegreeProgramsSection({
  id,
  title,
  subtitle,
  groups,
  className = '',
}: DegreeProgramsSectionProps) {
  return (
    <section
      id={id}
      className={`relative bg-background section-padding-lg scroll-mt-24 ${className}`}
      aria-label='Degree programs'
    >
      <div className='absolute top-0 h-1.5 w-2/5 bg-secondary' />

      <div className='container mx-auto px-6 max-w-[1440px]'>
        <div className='flex flex-col gap-4 items-center'>
          <ScrollReveal
            variant='fade-up'
            delay={0.1}
            duration={0.7}
            animateImmediately
          >
            <SectionHeader title={title} padding='pt-0 pb-6 md:pb-10' />
            {subtitle && (
              <p className='text-muted-foreground text-center max-w-3xl'>
                {subtitle}
              </p>
            )}
          </ScrollReveal>
        </div>

        <div className='mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8'>
          {groups.map((group) => (
            <div key={group.level} className='flex flex-col gap-4'>
              <div className='flex flex-col gap-2'>
                <div
                  className={`w-fit rounded-none px-3 py-1 text-xs uppercase tracking-widest ${getLevelBadgeClasses(
                    group.level,
                  )}`}
                >
                  {group.level}
                </div>
                <h3 className='font-serif text-primary text-2xl'>
                  {group.title}
                </h3>
                {/* <p className='text-muted-foreground'>{group.description}</p> */}
              </div>

              <div className='grid grid-cols-1 gap-4'>
                {group.programs.map((program) => (
                  <Card
                    key={program.slug}
                    className='rounded-none h-full md:gap-1'
                  >
                    <CardHeader className='gap-2 md:min-h-[88px] lg:min-h-[128px]'>
                      <div className='flex items-baseline justify-between gap-4'>
                        <CardTitle className='font-serif leading-snug line-clamp-2'>
                          {program.title}
                        </CardTitle>
                        <span className='text-xs uppercase tracking-widest text-muted-foreground'>
                          {program.credential}
                        </span>
                      </div>
                      <CardDescription className='leading-6 line-clamp-3 md:min-h-[58px] lg:min-h-[78px] text-slate-800'>
                        {program.summary}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className='pt-0'>
                      <ul className='text-sm text-slate-800 space-y-2'>
                        {program.highlights.slice(0, 3).map((h) => (
                          <li key={h} className='flex gap-2'>
                            <Dot
                              aria-hidden='true'
                              className='mt-0.5 size-5 text-muted-foreground/60 shrink-0'
                            />
                            <span className='line-clamp-1 leading-6'>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>

                    <CardFooter className='lg:pt-5 mt-auto'>
                      <Button
                        variant='outline'
                        className='rounded-none w-full'
                        asChild
                      >
                        <Link href={program.href}>View program</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
