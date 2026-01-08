import { Button } from '@/components/ui/button';
import { typoVariant } from '@/lib/typography';
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
  if (variant === 'secondary') {
    // MY WJU 버튼 (모바일)
    return (
      <Button
        variant='outline'
        size='sm'
        className={cn(
          typoVariant('button14', 'text-primary'),
          'w-full mt-2 border-primary bg-transparent hover:bg-primary hover:text-primary-foreground rounded-none',
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
        typoVariant('button14', 'text-secondary'),
        'w-full border-secondary bg-transparent hover:bg-secondary hover:text-secondary-foreground rounded-none',
        className,
      )}
      {...props}
    >
      {children}
    </Button>
  );
}

