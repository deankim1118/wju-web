import { ResourcePageHeader } from '@/components/pages/AcademicPage/components/ResourcePageHeader';
import { ScholarshipListByCategory } from '@/components/pages/AdmissionsPage/components/ScholarshipListByCategory';
import { normalizeScholarshipData } from '@/lib/adapters/scholarship-adapter';
import { getScholarshipData } from '@/lib/payload/queries';

export default async function ScholarshipsPage() {
  const payloadData = await getScholarshipData();
  const data = normalizeScholarshipData(payloadData);

  return (
    <article className='space-y-6' aria-labelledby='scholarships-heading'>
      <ResourcePageHeader
        id='scholarships-heading'
        title={data.pageTitle}
        description={data.pageDescription}
      />
      <ScholarshipListByCategory
        generalPrinciples={data.generalPrinciples}
        categories={data.categories}
        generalSections={data.generalSections}
      />
    </article>
  );
}
