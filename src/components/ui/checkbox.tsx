import * as React from 'react';

import { cn } from '@/lib/utils';

type CheckboxProps = Omit<React.ComponentProps<'input'>, 'type'>;

function Checkbox({ className, ...props }: CheckboxProps) {
  return (
    <input
      type='checkbox'
      data-slot='checkbox'
      className={cn(
        'border-input bg-background text-primary',
        'size-4 shrink-0 rounded-[3px] border shadow-xs',
        'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] outline-none',
        'disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      {...props}
    />
  );
}

export { Checkbox };

