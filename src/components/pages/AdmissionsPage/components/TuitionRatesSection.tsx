import { Badge } from '@/components/ui/badge';
import {
  TUITION_NON_REFUNDABLE_NOTE,
  formatCurrency,
  type ProgramTuitionRate,
} from '@/config/tuition-content';
import { PageSection } from './PageSection';

function TuitionRateCard({ rate }: { rate: ProgramTuitionRate }) {
  return (
    <div className='rounded-none border bg-muted/40 px-4 py-4'>
      <Badge
        variant='outline'
        className='mb-3 text-xs text-secondary rounded-none'
      >
        {rate.program}
      </Badge>
      <p className='text-2xl font-bold tabular-nums text-slate-900'>
        {formatCurrency(rate.pricePerUnit)}
      </p>
      <p className='mt-1 text-xs text-muted-foreground'>
        per unit (credit hour)
      </p>
    </div>
  );
}

type TuitionRatesSectionProps = {
  rates: ProgramTuitionRate[];
};

export function TuitionRatesSection({ rates }: TuitionRatesSectionProps) {
  return (
    <PageSection
      id='tuition-by-program'
      title='1. Tuition by Program'
      description='Tuition is calculated per unit (credit hour).'
    >
      <div className='grid grid-cols-1 gap-3 pt-1 sm:grid-cols-3'>
        {rates.map((rate) => (
          <TuitionRateCard key={rate.level} rate={rate} />
        ))}
      </div>
      <p className='mt-4 text-sm italic text-muted-foreground'>
        {TUITION_NON_REFUNDABLE_NOTE}
      </p>
    </PageSection>
  );
}
