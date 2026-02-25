import { FEE_SECTIONS, SEMESTER_ESTIMATE_NOTE } from '@/config/tuition-content';
import { FeeTableSection } from './FeeTableSection';
import { FinancialPoliciesSection } from './FinancialPoliciesSection';
import { PaymentMethodsList } from './PaymentMethodsList';
import { SemesterCostChart } from './SemesterCostChart';
import { PageSection } from './PageSection';
import { TuitionRatesSection } from './TuitionRatesSection';

const FEE_SECTION_START_NUMBER = 2;

export function TuitionFeesContent() {
  return (
    <div className='space-y-6'>
      <PageSection
        id='semester-estimate'
        title='Estimated Cost Per Semester (Full-Time)'
        description={SEMESTER_ESTIMATE_NOTE}
      >
        <SemesterCostChart />
      </PageSection>

      <TuitionRatesSection />

      {FEE_SECTIONS.map((section, idx) => (
        <FeeTableSection
          key={section.id}
          section={section}
          sectionNumber={FEE_SECTION_START_NUMBER + idx}
        />
      ))}

      <PaymentMethodsList />
      <FinancialPoliciesSection />
    </div>
  );
}
