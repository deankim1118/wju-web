import { Button } from '@/components/ui/button';
import { typoVariant } from '@/lib/typography';
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
  const responsiveSize = 'sm:text-xs lg:text-[13px] xl:text-sm';

  return (
    <Button
      variant='ghost'
      size='sm'
      className={cn(
        typoVariant('button14', 'text-black'),
        responsiveSize,
        'font-medium hover:text-secondary hover:bg-transparent rounded-none h-auto p-0',
        className,
      )}
      {...props}
    >
      {children}
    </Button>
  );
}

