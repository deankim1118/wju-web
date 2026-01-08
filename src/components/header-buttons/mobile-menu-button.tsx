import { Button } from '@/components/ui/button';
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
  const baseClasses =
    'w-full justify-start text-sm font-medium hover:text-secondary hover:bg-transparent rounded-none h-auto py-2';

  const variantClasses =
    variant === 'main'
      ? 'text-black'
      : 'text-primary';

  return (
    <Button
      variant='ghost'
      size='sm'
      className={`${baseClasses} ${variantClasses} ${className}`}
      {...props}
    >
      {children}
    </Button>
  );
}

