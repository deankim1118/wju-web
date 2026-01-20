import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';
import { HEADER_MENU_STYLES } from '../constants';

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
  const baseClasses = HEADER_MENU_STYLES.mobileMenuButtonBase;
  const variantClasses = variant === 'main' ? 'text-black' : 'text-primary';

  return (
    <Button
      variant='ghost'
      size='sm'
      className={cn(baseClasses, variantClasses, className)}
      {...props}
    >
      {children}
    </Button>
  );
}
