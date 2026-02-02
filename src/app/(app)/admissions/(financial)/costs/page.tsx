import { ResourcePageHeader } from '@/components/pages/AcademicPage/components/ResourcePageHeader';

export default function CostsPage() {
  return (
    <article className="space-y-6" aria-labelledby="costs-heading">
      <ResourcePageHeader
        id="costs-heading"
        title="Costs"
        description="Tuition and cost information. For scholarships and financial aid, see the Scholarships section."
      />
    </article>
  );
}
