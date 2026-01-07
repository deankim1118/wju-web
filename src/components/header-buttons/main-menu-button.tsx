import { Button } from '@/components/ui/button';
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
  const menuTextSize = 'sm:text-xs lg:text-[13px] xl:text-sm';

  return (
    <Button
      variant='ghost'
      size='sm'
      className={`${menuTextSize} font-medium text-black hover:text-[#8b1538] hover:bg-transparent rounded-none h-auto p-0 ${className}`}
      {...props}
    >
      {children}
    </Button>
  );
}

