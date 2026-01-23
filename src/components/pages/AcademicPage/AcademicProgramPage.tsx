
import { PageHero } from '@/components/PageHero';
import {
  Card,
  CardContent
} from '@/components/ui/card';
import type { DegreeProgram } from '@/config/academics-content';
import { getProgramExtendedData } from '@/config/academics/program-extended';
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
            <CardContent className="section-padding-sm px-10 md:px-18">
              <KeyInformationSection data={extendedData.keyInformation} />
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="bg-background">
        <div className="mx-auto max-w-7xl px-6 section-padding-sm lg:px-10 xl:px-14">
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
            </main>
          </div>
        </div>
      </div>
    </>
  );
}
