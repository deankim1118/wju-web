'use client';

import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { cn } from '@/lib/utils';

const TRIGGER_CLASS =
  'text-left font-medium hover:no-underline [&[data-state=open]>svg]:rotate-180 text-slate-800 text-base';

type BorderedAccordionItemProps = {
  value: string;
  trigger: React.ReactNode;
  triggerClassName?: string;
  isLast: boolean;
  id?: string;
  children: React.ReactNode;
};

export function BorderedAccordionItem({
  value,
  trigger,
  triggerClassName,
  isLast,
  id,
  children,
}: BorderedAccordionItemProps) {
  return (
    <AccordionItem
      id={id}
      value={value}
      className={cn('border-t border-b px-4 bg-card', isLast && 'border-b!')}
    >
      <AccordionTrigger className={cn(TRIGGER_CLASS, triggerClassName)}>
        {trigger}
      </AccordionTrigger>
      <AccordionContent className='pb-4'>{children}</AccordionContent>
    </AccordionItem>
  );
}
