import Link from 'next/link';

import { PageHero } from '@/components/PageHero';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent
} from '@/components/ui/card';
import type { DegreeProgram } from '@/config/academics-content';
import { getProgramExtendedData } from '@/config/academics/program-extended';
import { ROUTES } from '@/config/routes';
import { callToActionContent } from '../../../config/home-content';
import { CallToAction } from '../../CallToAction';
import { AdmissionsSection } from './components/AdmissionsSection';
import { CurriculumSection } from './components/CurriculumSection';
import { GraduationSection } from './components/GraduationSection';
import { KeyInformationSection } from './components/KeyInformationSection';
import { OutcomesSection } from './components/OutcomesSection';
import { ProgramSidebar } from './components/ProgramSidebar';

type AcademicProgramPageProps = {
  program: DegreeProgram;
};

export function AcademicProgramPage({ program }: AcademicProgramPageProps) {
  // Always get extended data - uses custom data if available, otherwise creates default
  const extendedData = getProgramExtendedData(program.slug, program);

  return (
    <>
      <PageHero
        title={program.title}
        subtitle={`Academic Program`}
        imageUrl='/wju-hero-img.png'
        imageAlt={`${program.title} hero`}
      />
      <CallToAction
        title={callToActionContent.title}
        description={callToActionContent.description}
        buttonText={callToActionContent.buttonText}
        subButtonText='Apply'
        href={callToActionContent.href}
      />

      {/* Key Information - Full width card above sidebar */}
      <div className="bg-background">
        <div className="mx-auto max-w-7xl px-6 py-8 lg:px-10 xl:px-14">
          <Card className="w-full rounded-none bg-card border-bottom border-border/60  shadow-sm relative">
            <div className='absolute left-0 top-0 h-1.5 w-full  bg-secondary' />
            <CardContent className="p-6 md:p-8">
              <KeyInformationSection data={extendedData.keyInformation} />
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="bg-background">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-24 lg:px-10 xl:px-14">
          <div className="flex flex-col gap-16 lg:flex-row lg:gap-20">
            <ProgramSidebar currentProgram={program} />

            <main className="min-w-0 flex-1 space-y-20 lg:max-w-208">
              {/* All programs use the same component structure */}
              <OutcomesSection outcomes={extendedData.outcomes} />
              <CurriculumSection curriculum={extendedData.curriculum} />
              <AdmissionsSection 
                intro={extendedData.admissions.intro}
                sections={extendedData.admissions.sections}
              />
              <GraduationSection requirements={extendedData.graduation.requirements} />

              {/* CTAs */}
              <section className="flex flex-col gap-4 sm:flex-row sm:gap-6 pt-4 border-t border-border/60">
                <Button variant="outline" className="rounded-md text-primary" asChild>
                  <Link href={ROUTES.REQUEST_INFO}>Request information</Link>
                </Button>
                <Button variant="default" className="rounded-md" asChild>
                  <Link href={ROUTES.ACADEMICS.ROOT}>Back to Academics</Link>
                </Button>
              </section>
            </main>
          </div>
        </div>
      </div>
    </>
  );
}
