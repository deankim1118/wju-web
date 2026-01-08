import { Button } from '@/components/ui/button';
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
  if (variant === 'primary') {
    return (
      <Button
        size='lg'
        className={`bg-secondary text-lg font-medium text-secondary-foreground hover:bg-secondary/90 ${className}`}
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
      className={`border-2 border-white bg-transparent text-lg font-medium text-white hover:bg-white hover:text-gray-800 ${className}`}
      {...props}
    >
      {children}
    </Button>
  );
}

