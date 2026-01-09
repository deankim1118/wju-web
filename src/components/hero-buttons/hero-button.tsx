import { Button } from '@/components/ui/button';
import { typoVariant } from '@/lib/typography';
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
  if (variant === 'primary') {
    return (
      <Button
        size='lg'
        className={cn(
          typoVariant('heroButton', 'text-secondary-foreground'),
          'bg-secondary hover:bg-secondary/90 rounded-none',
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
        typoVariant('heroButton', 'text-white'),
        'border-2 rounded-none border-white bg-transparent hover:bg-white hover:text-gray-800',
        className,
      )}
      {...props}
    >
      {children}
    </Button>
  );
}
