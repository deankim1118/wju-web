import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
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
  return (
    <Button
      variant='ghost'
      size='sm'
      className={cn(
        'btn-sm text-white sm:text-xs lg:text-[12px] xl:text-sm hover:text-white hover:bg-transparent hover:underline rounded-none h-auto p-0',
        className,
      )}
      {...props}
    >
      {children}
    </Button>
  );
}
