'use client';


import { Check, ChevronDown } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export type DropdownOption = {
  label: string;
  value: string;
};

type DropdownFieldProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  options: readonly DropdownOption[];
  menuLabel?: string;
  /** Optional styling overrides for the trigger button */
  triggerClassName?: string;
};

export function DropdownField({
  value,
  onChange,
  placeholder,
  options,
  menuLabel = 'Select',
  triggerClassName,
}: DropdownFieldProps) {
  const selected = options.find((o) => o.value === value) ?? null;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          type='button'
          variant='outline'
          className={[
            // Match shadcn Input defaults (rounded-md, h-9 via button size default)
            'w-full justify-between bg-transparent font-normal',
            triggerClassName ?? '',
          ].join(' ')}
        >
          <span className={selected ? 'text-primary' : 'text-muted-foreground'}>
            {selected ? selected.label : placeholder}
          </span>
          <ChevronDown className='size-4 text-muted-foreground' />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className='w-(--radix-dropdown-menu-trigger-width)'>
        <DropdownMenuLabel>{menuLabel}</DropdownMenuLabel>
        <DropdownMenuSeparator />

        {options.map((opt) => {
          const isSelected = opt.value === value;
          return (
            <DropdownMenuItem
              key={opt.value}
              onSelect={() => onChange(opt.value)}
              className='flex items-center justify-between'
            >
              <span>{opt.label}</span>
              {isSelected && <Check className='size-4 text-primary' />}
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

