import { NavigationMenuLink } from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import * as React from 'react';
import { HEADER_MENU_STYLES } from './constants';

type NavListItemVariant = 'default' | 'bold';

type NavListItemProps = React.ComponentPropsWithoutRef<'a'> & {
  title: string;
  href: string;
  description?: string;
  variant?: NavListItemVariant;
};

export const NavListItem = React.forwardRef<HTMLAnchorElement, NavListItemProps>(
  ({ className, title, description, href, variant = 'default', ...props }, ref) => {
    const titleClassName =
      variant === 'bold'
        ? HEADER_MENU_STYLES.itemTextStrong
        : HEADER_MENU_STYLES.desktopSubmenuTitle;

    return (
      <li>
        <NavigationMenuLink asChild>
          <Link
            ref={ref}
            href={href}
            className={cn(
              HEADER_MENU_STYLES.desktopSubmenuLinkBase,
              HEADER_MENU_STYLES.desktopSubmenuLinkPadding,
              'space-y-1 hover:text-secondary focus:text-accent-foreground',
              className,
            )}
            {...props}
          >
            <div className={titleClassName}>{title}</div>
            {description && (
              <p className={HEADER_MENU_STYLES.desktopSubmenuDescription}>
                {description}
              </p>
            )}
          </Link>
        </NavigationMenuLink>
      </li>
    );
  },
);
NavListItem.displayName = 'NavListItem';

