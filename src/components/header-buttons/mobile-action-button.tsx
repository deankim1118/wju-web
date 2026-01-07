import { Button } from '@/components/ui/button';
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
        className={`w-full mt-2 border-[#1e2d3d] bg-transparent text-[#1e2d3d] hover:bg-[#1e2d3d] hover:text-white rounded-none ${className}`}
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
      className={`w-full border-[#8b1538] bg-transparent text-[#8b1538] hover:bg-[#8b1538] hover:text-white rounded-none ${className}`}
      {...props}
    >
      {children}
    </Button>
  );
}

