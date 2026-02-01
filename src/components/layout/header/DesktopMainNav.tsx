import {
  NavigationMenu,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import { mainNavigation } from '@/config/navigation';
import { cn } from '@/lib/utils';
import {
  CONTAINER_PADDING,
  LOGO_RESPONSIVE_WIDTH,
  MENU_GAP,
} from './constants';
import { NavMenuList } from './NavMenuList';

type DesktopMainNavProps = {
  bottomBarHeight: number;
};

export function DesktopMainNav({ bottomBarHeight }: DesktopMainNavProps) {
  const leftNavItems = mainNavigation.slice(0, 3);
  const rightNavItems = mainNavigation.slice(3);

  return (
    <nav
      className='hidden desktop:block bg-white shadow-sm tracking-wide'
      aria-label='Main'
    >
      <div className={cn('relative max-w-[1440px] mx-auto', CONTAINER_PADDING)}>
        <div
          className='grid grid-cols-[1fr_auto_1fr] items-center transition-all duration-300 md:gap-x-2 xl:gap-x-10'
          style={{ height: `${bottomBarHeight}px` }}
        >
          <NavigationMenu className='justify-end max-w-none'>
            <NavigationMenuList className={cn('gap-0', MENU_GAP)}>
              <NavMenuList items={leftNavItems} textColor='text-primary' />
            </NavigationMenuList>
          </NavigationMenu>

          <div className='shrink-0' style={{ width: LOGO_RESPONSIVE_WIDTH }} />

          <NavigationMenu className='justify-start max-w-none'>
            <NavigationMenuList className={cn('gap-0', MENU_GAP)}>
              <NavMenuList items={rightNavItems} textColor='text-black' />
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </nav>
  );
}
