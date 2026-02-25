import type { NormalizedTuitionData } from '@/lib/adapters/tuition-adapter';
import { FeeTableSection } from './FeeTableSection';
import { FinancialPoliciesSection } from './FinancialPoliciesSection';
import { PageSection } from './PageSection';
import { PaymentMethodsList } from './PaymentMethodsList';
import { SemesterCostChart } from './SemesterCostChart';
import { TuitionRatesSection } from './TuitionRatesSection';

type TuitionFeesContentProps = {
  data: NormalizedTuitionData;
};

const FEE_SECTION_START_NUMBER = 2;

export function TuitionFeesContent({ data }: TuitionFeesContentProps) {
  const { semesterEstimates, programTuitionRates, feeSections } = data;

  return (
    <div className='space-y-6'>
      <PageSection
        id='semester-estimate'
        title='Estimated Cost Per Semester (Full-Time)'
      >
        <SemesterCostChart estimates={semesterEstimates} />
      </PageSection>

      <TuitionRatesSection rates={programTuitionRates} />

      {feeSections.map((section, idx) => (
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
