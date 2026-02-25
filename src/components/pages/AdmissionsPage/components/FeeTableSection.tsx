import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { formatFeeAmount, type FeeSection } from '@/config/tuition-content';
import { PageSection } from './PageSection';

type FeeTableSectionProps = {
  section: FeeSection;
  sectionNumber: number;
};

export function FeeTableSection({
  section,
  sectionNumber,
}: FeeTableSectionProps) {
  return (
    <PageSection
      id={section.id}
      title={`${sectionNumber}. ${section.title}`}
      description={section.subtitle}
    >
      <Table>
        <TableHeader>
          <TableRow className='hover:bg-transparent'>
            <TableHead className='w-[40%] pl-0 text-xs font-semibold uppercase tracking-wider'>
              Fee Type
            </TableHead>
            <TableHead className='w-[20%] text-xs font-semibold uppercase tracking-wider'>
              Amount
            </TableHead>
            <TableHead className='text-xs font-semibold uppercase tracking-wider'>
              Description
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {section.fees.map((fee) => (
            <TableRow key={fee.name} className='hover:bg-muted/30'>
              <TableCell className='pl-0  text-slate-800'>{fee.name}</TableCell>
              <TableCell className='tabular-nums text-slate-800'>
                {formatFeeAmount(fee)}
              </TableCell>
              <TableCell className='text-muted-foreground'>
                {fee.description}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </PageSection>
  );
}
