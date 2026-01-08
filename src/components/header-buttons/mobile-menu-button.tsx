import { Button } from '@/components/ui/button';
import { typoVariant } from '@/lib/typography';
import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

type MobileMenuButtonProps = {
  children: ReactNode;
  variant?: 'main' | 'top';
  className?: string;
} & Omit<React.ComponentProps<typeof Button>, 'variant'>;

export function MobileMenuButton({
  children,
  variant = 'main',
  className = '',
  ...props
}: MobileMenuButtonProps) {
  const variantClasses =
    variant === 'main' ? 'text-black' : 'text-primary';

  return (
    <Button
      variant='ghost'
      size='sm'
      className={cn(
        typoVariant('button14'),
        'w-full justify-start font-medium hover:text-secondary hover:bg-transparent rounded-none h-auto py-2',
        variantClasses,
        className,
      )}
      {...props}
    >
      {children}
    </Button>
  );
}

