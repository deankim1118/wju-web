import { Button } from '@/components/ui/button';
import { typoVariant } from '@/lib/typography';
import { cn } from '@/lib/utils';
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
  const responsiveSize = 'sm:text-xs lg:text-[12px] xl:text-sm';

  if (variant === 'secondary') {
    // MY WJU 버튼 (상단 메뉴)
    return (
      <Button
        variant='outline'
        size='sm'
        className={cn(
          typoVariant('button14', 'text-white'),
          responsiveSize,
          'border-white bg-transparent hover:bg-white hover:text-primary',
          'px-2 sm:px-2 md:px-3 whitespace-nowrap rounded-none',
          className,
        )}
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
      className={cn(
        typoVariant('button14', 'text-secondary'),
        responsiveSize,
        'border-secondary bg-transparent hover:bg-secondary hover:text-secondary-foreground',
        'px-2 sm:px-2 md:px-3 whitespace-nowrap rounded-none',
        className,
      )}
      {...props}
    >
      {children}
    </Button>
  );
}
