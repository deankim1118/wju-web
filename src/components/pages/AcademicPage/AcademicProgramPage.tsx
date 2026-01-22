import Link from 'next/link';

import { PageHero } from '@/components/PageHero';
import { TitleBodySection } from '@/components/sections/TitleBodySection';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { DegreeProgram } from '@/config/academics-content';
import { ROUTES } from '@/config/routes';

type AcademicProgramPageProps = {
  program: DegreeProgram;
};

export function AcademicProgramPage({ program }: AcademicProgramPageProps) {
  return (
    <>
      <PageHero
        title={program.title}
        subtitle={`Academic Program`}
        imageUrl='/wju-hero-img.png'
        imageAlt={`${program.title} hero`}
      />

      <TitleBodySection
        title={program.title}
        subtitle={`${program.format} • ${program.typicalLength}`}
        body={
          <div className='mx-auto max-w-4xl flex flex-col gap-10'>
            <p className='whitespace-pre-line text-white/85 text-center'>
              {program.summary}
            </p>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
              <Card className='rounded-none bg-background/5 text-white border-white/10'>
                <CardHeader className='pb-0'>
                  <CardTitle className='font-serif uppercase tracking-wide'>
                    Who it’s for
                  </CardTitle>
                </CardHeader>
                <CardContent className='text-white/80'>
                  <ul className='list-disc pl-5 space-y-2 leading-7'>
                    {program.whoItsFor.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className='rounded-none bg-background/5 text-white border-white/10'>
                <CardHeader className='pb-0'>
                  <CardTitle className='font-serif uppercase tracking-wide'>
                    Highlights
                  </CardTitle>
                </CardHeader>
                <CardContent className='text-white/80'>
                  <ul className='list-disc pl-5 space-y-2 leading-7'>
                    {program.highlights.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className='rounded-none bg-background/5 text-white border-white/10'>
                <CardHeader className='pb-0'>
                  <CardTitle className='font-serif uppercase tracking-wide'>
                    Learning outcomes
                  </CardTitle>
                </CardHeader>
                <CardContent className='text-white/80'>
                  <ul className='list-disc pl-5 space-y-2 leading-7'>
                    {program.outcomes.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className='mx-auto max-w-3xl'>
              <h2 className='text-center text-white'>Sample curriculum</h2>
              <div className='mt-6 rounded-none border border-white/10 bg-background/5 p-6 text-white/80'>
                <ul className='list-disc pl-5 space-y-2 leading-7'>
                  {program.curriculum.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className='flex flex-col sm:flex-row gap-3 justify-center'>
              <Button variant='outline' className='rounded-none' asChild>
                <Link href={ROUTES.REQUEST_INFO}>Request information</Link>
              </Button>
              <Button className='rounded-none' asChild>
                <Link href={ROUTES.ACADEMICS.ROOT}>Back to Academics</Link>
              </Button>
            </div>
          </div>
        }
        backgroundColor='bg-primary'
        textColor='text-white'
      />
    </>
  );
}

