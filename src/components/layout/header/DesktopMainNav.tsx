import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { actionButtons, mainNavigation } from '@/config/navigation';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import * as React from 'react';
import { HeaderActionButton, MainMenuButton } from './buttons';
import {
  CONTAINER_PADDING,
  DESKTOP_ONLY,
  LOGO_RESPONSIVE_WIDTH,
  MENU_GAP,
} from './constants';

type DesktopMainNavProps = {
  bottomBarHeight: number;
};

// Featured menu descriptions for each section
const menuFeatures = {
  About: {
    title: 'Washington Jabez University',
    description:
      'Rooted in Reformed theology and committed to training faithful servants for gospel ministry in the United States and worldwide.',
  },
  Academics: {
    title: 'Academic Excellence',
    description:
      'Rigorous theological education that integrates Scripture, tradition, and practical ministry experience.',
  },
  Admissions: {
    title: 'Begin Your Journey',
    description:
      'Join a community dedicated to spiritual formation, academic excellence, and faithful ministry preparation.',
  },
};

// ListItem component for submenu items with descriptions
const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'> & { title: string; description?: string }
>(({ className, title, description, href, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          href={href ?? '#'}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className,
          )}
          {...props}
        >
          <div className='text-sm font-medium leading-none'>{title}</div>
          {description && (
            <p className='line-clamp-2 text-sm leading-snug text-muted-foreground'>
              {description}
            </p>
          )}
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = 'ListItem';

export function DesktopMainNav({ bottomBarHeight }: DesktopMainNavProps) {
  // Split navigation items for left and right sides
  const leftNavItems = mainNavigation.slice(0, 3); // First 3 items
  const rightNavItems = mainNavigation.slice(3); // Remaining items

  return (
    <nav
      className={`hidden min-[${DESKTOP_ONLY}px]:block bg-white shadow-sm tracking-wide`}
      aria-label='Main'
    >
      <div className={cn('relative max-w-[1920px] mx-auto', CONTAINER_PADDING)}>
        {/* Desktop Navigation - Grid Layout with responsive height */}
        <div
          className='grid grid-cols-[1fr_auto_1fr] items-center transition-all duration-300 md:gap-x-2 xl:gap-x-10'
          style={{ height: `${bottomBarHeight}px` }}
        >
          {/* Left Navigation */}
          <NavigationMenu className='justify-end max-w-none'>
            <NavigationMenuList className={cn('gap-0', MENU_GAP)}>
              {leftNavItems.map((item) =>
                item.submenu ? (
                  // Menu item with submenu
                  <NavigationMenuItem key={item.href}>
                    <NavigationMenuTrigger className='btn-sm bg-transparent text-primary sm:text-xs lg:text-[13px] xl:text-sm font-medium hover:text-secondary hover:bg-transparent data-[state=open]:text-secondary data-[state=open]:bg-transparent rounded-none h-auto p-0 border-0'>
                      {item.label.toUpperCase()}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className='grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]'>
                        {/* Featured section - fixed at 4 rows to accommodate all menus */}
                        <li className='row-span-4'>
                          <NavigationMenuLink asChild>
                            <Link
                              className='flex h-full w-full select-none flex-col justify-end rounded-md bg-linear-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md'
                              href={item.href}
                            >
                              <div className='mb-2 mt-4 text-lg font-medium'>
                                {
                                  menuFeatures[
                                    item.label as keyof typeof menuFeatures
                                  ]?.title
                                }
                              </div>
                              <p className='text-sm leading-tight text-muted-foreground'>
                                {
                                  menuFeatures[
                                    item.label as keyof typeof menuFeatures
                                  ]?.description
                                }
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        {/* List items */}
                        {item.submenu.map((subItem) => (
                          <ListItem
                            key={subItem.href}
                            href={subItem.href}
                            title={subItem.label}
                            description={subItem.description}
                          />
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ) : (
                  // Simple menu item without submenu
                  <NavigationMenuItem key={item.href}>
                    <MainMenuButton asChild>
                      <Link href={item.href}>{item.label.toUpperCase()}</Link>
                    </MainMenuButton>
                  </NavigationMenuItem>
                ),
              )}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Center Logo Spacer - matches logo width exactly */}
          <div className='shrink-0' style={{ width: LOGO_RESPONSIVE_WIDTH }} />

          {/* Right Navigation */}
          <NavigationMenu className='justify-start max-w-none'>
            <NavigationMenuList className={cn('gap-0', MENU_GAP)}>
              {rightNavItems.map((item) =>
                item.submenu ? (
                  // Menu item with submenu
                  <NavigationMenuItem key={item.href}>
                    <NavigationMenuTrigger className='btn-sm bg-transparent text-black sm:text-xs lg:text-[13px] xl:text-sm font-medium hover:text-secondary hover:bg-transparent data-[state=open]:text-secondary data-[state=open]:bg-transparent rounded-none h-auto p-0 border-0'>
                      {item.label.toUpperCase()}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className='grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]'>
                        {/* Featured section - fixed at 4 rows to accommodate all menus */}
                        <li className='row-span-4'>
                          <NavigationMenuLink asChild>
                            <Link
                              className='flex h-full w-full select-none flex-col justify-end rounded-md bg-linear-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md'
                              href={item.href}
                            >
                              <div className='mb-2 mt-4 text-lg font-medium'>
                                {
                                  menuFeatures[
                                    item.label as keyof typeof menuFeatures
                                  ]?.title
                                }
                              </div>
                              <p className='text-sm leading-tight text-muted-foreground'>
                                {
                                  menuFeatures[
                                    item.label as keyof typeof menuFeatures
                                  ]?.description
                                }
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        {/* List items */}
                        {item.submenu.map((subItem) => (
                          <ListItem
                            key={subItem.href}
                            href={subItem.href}
                            title={subItem.label}
                            description={subItem.description}
                          />
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ) : (
                  // Simple menu item without submenu
                  <NavigationMenuItem key={item.href}>
                    <MainMenuButton asChild>
                      <Link href={item.href}>{item.label.toUpperCase()}</Link>
                    </MainMenuButton>
                  </NavigationMenuItem>
                ),
              )}
              <NavigationMenuItem>
                <HeaderActionButton asChild>
                  <Link href={actionButtons.apply.href}>
                    {actionButtons.apply.label.toUpperCase()}
                  </Link>
                </HeaderActionButton>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </nav>
  );
}
