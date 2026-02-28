import { ResourcePageHeader } from '@/components/pages/AcademicPage/components/ResourcePageHeader';
import { AdmissionsLandingContent } from '@/components/pages/AdmissionsPage/components/AdmissionsLandingContent';
import { normalizeAdmissionsData } from '@/lib/adapters/admissions-adapter';
import { getAdmissionsData } from '@/lib/payload/queries';

export default async function AdmissionsPage() {
  const payloadData = await getAdmissionsData();
  const data = normalizeAdmissionsData(payloadData);

  return (
    <article className='space-y-6' aria-labelledby='admissions-heading'>
      <ResourcePageHeader
        id='admissions-heading'
        title='Admissions'
        description='Welcome to Washington Jabez University admissions. Learn how to apply, submit documents, and begin your journey in ministry.'
      />
      <AdmissionsLandingContent data={data} />
    </article>
  );
}
