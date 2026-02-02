import type { ScholarshipItem } from '@/config/scholarship-content';

const LABELS: Record<
  keyof Pick<
    ScholarshipItem,
    | 'purpose'
    | 'eligibility'
    | 'policy'
    | 'benefit'
    | 'requirement'
    | 'condition'
  >,
  string
> = {
  purpose: 'Purpose',
  eligibility: 'Eligibility',
  policy: 'Policy',
  benefit: 'Benefit',
  requirement: 'Requirement',
  condition: 'Condition',
};

const ORDER: (keyof ScholarshipItem)[] = [
  'purpose',
  'eligibility',
  'policy',
  'benefit',
  'requirement',
  'condition',
];

type ScholarshipItemContentProps = {
  item: ScholarshipItem;
};

export function ScholarshipItemContent({ item }: ScholarshipItemContentProps) {
  const entries = ORDER.filter(
    (key): key is keyof typeof LABELS =>
      key in LABELS && item[key] != null && item[key] !== '',
  );

  if (entries.length === 0) {
    return <p className='text-base text-slate-800'>{item.benefit}</p>;
  }

  return (
    <ul className='divide-y divide-border/80 pt-0 space-y-0'>
      {entries.map((key) => (
        <li
          key={key}
          className='py-2.5 text-base md:text-base first:pt-0 text-slate-800'
        >
          <span className='font-medium'>{LABELS[key]}:</span>{' '}
          <span className='leading-relaxed'>{item[key]}</span>
        </li>
      ))}
    </ul>
  );
}
