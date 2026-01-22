import { notFound } from 'next/navigation';

import { AcademicProgramPage } from '@/components/pages/AcademicPage';
import { getDegreeProgramBySlug } from '@/config/academics-content';
import type { Metadata } from 'next';

type PageProps = {
  params: Promise<{ program: string }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { program: slug } = await params;
  const program = getDegreeProgramBySlug(slug);
  if (!program)
    return { title: 'Program | Washington Jabez University' };
  return {
    title: `${program.title} (${program.credential}) | Washington Jabez University`,
    description: program.summary,
  };
}

export default async function AcademicProgramRoute({ params }: PageProps) {
  const { program: slug } = await params;
  const programData = getDegreeProgramBySlug(slug);

  if (!programData) return notFound();

  return <AcademicProgramPage program={programData} />;
}

