import { notFound } from 'next/navigation';

import { AcademicProgramPage } from '@/components/pages/AcademicPage';
import { getDegreeProgramBySlug } from '@/config/academics-content';

type PageProps = {
  params: { program: string };
};

export default function AcademicProgramRoute({ params }: PageProps) {
  const programData = getDegreeProgramBySlug(params.program);

  if (!programData) return notFound();

  return <AcademicProgramPage program={programData} />;
}

