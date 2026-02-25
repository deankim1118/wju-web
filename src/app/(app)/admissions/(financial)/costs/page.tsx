import { ResourcePageHeader } from '@/components/pages/AcademicPage/components/ResourcePageHeader';
import { TuitionFeesContent } from '@/components/pages/AdmissionsPage/components/TuitionFeesContent';
import { normalizeTuitionData } from '@/lib/adapters/tuition-adapter';
import { getTuitionData } from '@/lib/payload/queries';

export default async function CostsPage() {
  const payloadData = await getTuitionData();
  const data = normalizeTuitionData(payloadData);

  return (
    <article className='space-y-6' aria-labelledby='costs-heading'>
      <ResourcePageHeader
        id='costs-heading'
        title='Tuition & Fees'
        description='Estimated costs, fee schedules, payment methods, and refund policies for Washington Jabez University.'
      />
      <TuitionFeesContent data={data} />
    </article>
  );
}
