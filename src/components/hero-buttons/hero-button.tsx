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
        className={`bg-[#8b1538] text-lg font-medium text-white hover:bg-[#6d1029] ${className}`}
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

