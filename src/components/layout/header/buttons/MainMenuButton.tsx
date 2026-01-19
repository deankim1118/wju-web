import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';
import { HEADER_MENU_STYLES } from '../constants';

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
        HEADER_MENU_STYLES.desktopMainButton,
        className,
      )}
      {...props}
    >
      {children}
    </Button>
  );
}
