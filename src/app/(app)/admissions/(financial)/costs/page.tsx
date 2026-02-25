import { ResourcePageHeader } from '@/components/pages/AcademicPage/components/ResourcePageHeader';
import { TuitionFeesContent } from '@/components/pages/AdmissionsPage/components/TuitionFeesContent';

export default function CostsPage() {
  return (
    <article className='space-y-6' aria-labelledby='costs-heading'>
      <ResourcePageHeader
        id='costs-heading'
        title='Tuition & Fees'
        description='Estimated costs, fee schedules, payment methods, and refund policies for Washington Jabez University.'
      />
      <TuitionFeesContent />
    </article>
  );
}
