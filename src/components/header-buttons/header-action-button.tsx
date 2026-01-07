import { Button } from '@/components/ui/button';
import type { ReactNode } from 'react';

type HeaderActionButtonProps = {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
} & Omit<React.ComponentProps<typeof Button>, 'variant'>;

export function HeaderActionButton({
  children,
  variant = 'primary',
  className = '',
  ...props
}: HeaderActionButtonProps) {
  const topmenuTextSize = 'sm:text-xs lg:text-[12px] xl:text-sm';
  const menuTextSize = 'sm:text-xs lg:text-[13px] xl:text-sm';

  if (variant === 'secondary') {
    // MY WJU 버튼 (상단 메뉴)
    return (
      <Button
        variant='outline'
        size='sm'
        className={`border-white bg-transparent text-white hover:bg-white hover:text-[#1e2d3d] ${topmenuTextSize} px-2 sm:px-2 md:px-3 whitespace-nowrap rounded-none ${className}`}
        {...props}
      >
        {children}
      </Button>
    );
  }

  // APPLY 버튼 (메인 메뉴)
  return (
    <Button
      variant='outline'
      size='sm'
      className={`border-[#8b1538] bg-transparent text-[#8b1538] hover:bg-[#8b1538] hover:text-white ${menuTextSize} px-2 sm:px-2 md:px-3 whitespace-nowrap rounded-none ${className}`}
      {...props}
    >
      {children}
    </Button>
  );
}
