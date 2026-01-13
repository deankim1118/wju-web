import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

type MainMenuButtonProps = {
  children: ReactNode;
  className?: string;
} & React.ComponentProps<typeof Button>;

export function MainMenuButton({
  children,
  className = '',
  ...props
}: MainMenuButtonProps) {
  return (
    <Button
      variant='ghost'
      size='sm'
      className={cn(
        'btn-sm text-black sm:text-xs lg:text-[13px] xl:text-sm font-medium hover:text-secondary hover:bg-transparent rounded-none h-auto p-0',
        className,
      )}
      {...props}
    >
      {children}
    </Button>
  );
}
