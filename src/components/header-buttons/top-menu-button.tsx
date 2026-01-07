import { Button } from '@/components/ui/button';
import type { ReactNode } from 'react';

type TopMenuButtonProps = {
  children: ReactNode;
  className?: string;
} & React.ComponentProps<typeof Button>;

export function TopMenuButton({
  children,
  className = '',
  ...props
}: TopMenuButtonProps) {
  const topmenuTextSize = 'sm:text-xs lg:text-[12px] xl:text-sm';

  return (
    <Button
      variant='ghost'
      size='sm'
      className={`${topmenuTextSize} text-white hover:text-white hover:bg-transparent hover:underline rounded-none h-auto p-0 ${className}`}
      {...props}
    >
      {children}
    </Button>
  );
}
