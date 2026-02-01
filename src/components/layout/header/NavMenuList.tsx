import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import type { NavItemWithSubmenu } from '@/config/navigation';
import { menuFeatures } from '@/config/navigation';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import * as React from 'react';
import { HeaderActionButton, MainMenuButton } from './buttons';
import { HEADER_MENU_STYLES } from './constants';
import { AcademicsMegaMenu } from './mega-menus/AcademicsMenu';
import { StandardSubmenu } from './submenus/StandardSubmenu';

type NavMenuListProps = {
  items: NavItemWithSubmenu[];
  textColor: 'text-primary' | 'text-black';
  children?: React.ReactNode;
};

function getSubmenuStrategy(item: NavItemWithSubmenu) {
  if (item.label === 'Academics') return 'academics';
  return 'standard';
}

export function NavMenuList({ items, textColor, children }: NavMenuListProps) {
  return (
    <>
      {items.map((item) =>
        item.submenu ? (
          <NavigationMenuItem key={item.href}>
            <NavigationMenuTrigger
              className={cn(
                HEADER_MENU_STYLES.desktopTrigger,
                textColor,
                'cursor-pointer data-[state=open]:hover:bg-transparent',
              )}
            >
              {item.label.toUpperCase()}
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              {getSubmenuStrategy(item) === 'academics' ? (
                <div className='p-3'>
                  <AcademicsMegaMenu item={item} />
                </div>
              ) : (
                <StandardSubmenu item={item} feature={menuFeatures[item.label]} />
              )}
            </NavigationMenuContent>
          </NavigationMenuItem>
        ) : (
          <NavigationMenuItem key={item.href}>
            {item.variant === 'action' ? (
              <HeaderActionButton asChild>
                <Link href={item.href}>{item.label.toUpperCase()}</Link>
              </HeaderActionButton>
            ) : (
              <MainMenuButton asChild>
                <Link href={item.href}>{item.label.toUpperCase()}</Link>
              </MainMenuButton>
            )}
          </NavigationMenuItem>
        ),
      )}
      {children}
    </>
  );
}

