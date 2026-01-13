import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

type MobileActionButtonProps = {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
} & Omit<React.ComponentProps<typeof Button>, 'variant'>;

export function MobileActionButton({
  children,
  variant = 'primary',
  className = '',
  ...props
}: MobileActionButtonProps) {
  const baseClasses = 'btn-sm w-full rounded-none bg-transparent';

  if (variant === 'secondary') {
    // MY WJU 버튼 (모바일)
    return (
      <Button
        variant='outline'
        size='sm'
        className={cn(
          baseClasses,
          'text-primary mt-2 border-primary hover:bg-primary hover:text-primary-foreground',
          className,
        )}
        {...props}
      >
        {children}
      </Button>
    );
  }

  // APPLY 버튼 (모바일)
  return (
    <Button
      variant='outline'
      size='sm'
      className={cn(
        baseClasses,
        'text-secondary border-secondary hover:bg-secondary hover:text-secondary-foreground',
        className,
      )}
      {...props}
    >
      {children}
    </Button>
  );
}
