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
    'w-full justify-start text-sm font-medium hover:text-[#8b1538] hover:bg-transparent rounded-none h-auto py-2';

  const variantClasses =
    variant === 'main'
      ? 'text-black'
      : 'text-[#1e2d3d]';

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

