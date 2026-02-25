import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import {
  PAYMENT_METHODS,
  PAYMENT_REGISTRATION_NOTE,
  type PaymentMethod,
} from '@/config/tuition-content';
import { ROUTES } from '@/config/routes';
import { ArrowRight } from 'lucide-react';
import {
  BanknoteIcon,
  CreditCard,
  FileText,
  type LucideIcon,
} from 'lucide-react';
import Link from 'next/link';
import { PageSection } from './PageSection';

const PAYMENT_METHOD_ICONS: Record<string, LucideIcon> = {
  online: CreditCard,
  'bank-transfer': BanknoteIcon,
  check: FileText,
};

function PaymentMethodItem({ method }: { method: PaymentMethod }) {
  const Icon = PAYMENT_METHOD_ICONS[method.id] ?? CreditCard;

  return (
    <div className='flex gap-4'>
      <div className='mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-md border bg-muted/40'>
        <Icon className='size-4 text-slate-600' aria-hidden />
      </div>
      <div className='flex-1 space-y-1'>
        <div className='flex items-center gap-2'>
          <p className='text-sm font-semibold text-slate-900'>{method.title}</p>
          {method.hasConvenienceFee && (
            <Badge variant='destructive' className='text-xs bg-destructive'>
              +2.9% fee
            </Badge>
          )}
        </div>
        <p className='text-sm leading-relaxed text-slate-700'>
          {method.description}
        </p>
        <p className='text-xs italic text-muted-foreground'>{method.note}</p>
      </div>
    </div>
  );
}

export function PaymentMethodsList() {
  return (
    <PageSection
      id='how-to-pay'
      title='How to Pay Tuition'
      description={PAYMENT_REGISTRATION_NOTE}
    >
      <div className='space-y-1 pt-1'>
        {PAYMENT_METHODS.map((method, idx) => (
          <div key={method.id}>
            <PaymentMethodItem method={method} />
            {idx < PAYMENT_METHODS.length - 1 && <Separator className='my-4' />}
          </div>
        ))}
      </div>

      <Separator className='mt-6' />
      <div className='mt-4 flex items-center justify-between'>
        <p className='text-sm text-muted-foreground'>
          Ready to pay your tuition?
        </p>
        <Button
          asChild
          variant='default'
          size='sm'
          className='rounded-none bg-secondary hover:bg-secondary/80'
        >
          <Link href={ROUTES.ADMISSIONS.PAYMENT}>
            Go to Payment Portal
            <ArrowRight className='ml-1.5 size-4' />
          </Link>
        </Button>
      </div>
    </PageSection>
  );
}
