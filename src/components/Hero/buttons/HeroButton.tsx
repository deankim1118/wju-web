import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

type HeroButtonProps = {
  children: ReactNode;
  variant?: 'outline' | 'primary';
  className?: string;
} & Omit<React.ComponentProps<typeof Button>, 'variant'>;

export function HeroButton({
  children,
  variant = 'outline',
  className = '',
  ...props
}: HeroButtonProps) {
  const baseClasses = 'btn-hero rounded-none';

  if (variant === 'primary') {
    return (
      <Button
        size='lg'
        className={cn(
          baseClasses,
          'text-secondary-foreground bg-secondary hover:bg-secondary/90',
          className,
        )}
        {...props}
      >
        {children}
      </Button>
    );
  }

  return (
    <Button
      variant='outline'
      size='lg'
      className={cn(
        baseClasses,
        'text-white border-2 border-white bg-transparent hover:bg-white hover:text-primary',
        className,
      )}
      {...props}
    >
      {children}
    </Button>
  );
}
