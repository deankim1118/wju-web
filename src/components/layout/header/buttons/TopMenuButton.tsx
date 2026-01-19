import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';
import { HEADER_MENU_STYLES } from '../constants';

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
        HEADER_MENU_STYLES.topMenuButton,
        className,
      )}
      {...props}
    >
      {children}
    </Button>
  );
}
