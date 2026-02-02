import { ResourcePageHeader } from '@/components/pages/AcademicPage/components/ResourcePageHeader';
import { ScholarshipListByCategory } from '@/components/pages/AdmissionsPage/components/ScholarshipListByCategory';
import {
  getGeneralSections,
  getScholarshipCategories,
  scholarshipConfig,
} from '@/config/scholarship-content';

export default function ScholarshipsPage() {
  const categories = getScholarshipCategories();
  const generalSections = getGeneralSections();

  return (
    <article className='space-y-6' aria-labelledby='scholarships-heading'>
      <ResourcePageHeader
        id='scholarships-heading'
        title={scholarshipConfig.pageTitle}
        description='Scholarship policy, categories by type, eligibility, and application procedures.'
      />
      <ScholarshipListByCategory
        generalPrinciples={scholarshipConfig.generalPrinciples}
        categories={categories}
        generalSections={generalSections}
      />
    </article>
  );
}
