import { actionButtons, mainNavigation } from '@/config/navigation';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { HeaderActionButton, MainMenuButton } from './buttons';
import {
  CONTAINER_PADDING,
  DESKTOP_ONLY,
  MENU_GAP,
  MENU_GAP_CENTER,
} from './constants';

type MainNavProps = {
  bottomBarHeight: number;
};

export function MainNav({ bottomBarHeight }: MainNavProps) {
  // Split navigation items for left and right sides
  const leftNavItems = mainNavigation.slice(0, 3); // First 3 items
  const rightNavItems = mainNavigation.slice(3); // Remaining items

  return (
    <nav
      className={`hidden min-[${DESKTOP_ONLY}px]:block bg-white shadow-sm tracking-wider`}
      aria-label='Main'
    >
      <div className={cn('relative max-w-[1920px] mx-auto', CONTAINER_PADDING)}>
        {/* Desktop Navigation - Grid Layout with responsive height */}
        <div
          className={cn(
            'grid grid-cols-[1fr_auto_1fr] items-center transition-all duration-300',
            MENU_GAP_CENTER,
          )}
          style={{ height: `${bottomBarHeight}px` }}
        >
          {/* Left Navigation */}
          <ul className={cn('flex items-center justify-end', MENU_GAP)}>
            {leftNavItems.map((link) => (
              <li key={link.href}>
                <MainMenuButton asChild>
                  <Link href={link.href}>{link.label.toUpperCase()}</Link>
                </MainMenuButton>
              </li>
            ))}
          </ul>

          {/* Center Logo Spacer - matches logo width, maintains consistent padding from logo */}
          <div
            className='shrink-0'
            style={{
              width: 'clamp(180px, 20vw, 320px)',
            }}
          />

          {/* Right Navigation */}
          <ul className={cn('flex items-center justify-start', MENU_GAP)}>
            {rightNavItems.map((link) => (
              <li key={link.href}>
                <MainMenuButton asChild>
                  <Link href={link.href}>{link.label.toUpperCase()}</Link>
                </MainMenuButton>
              </li>
            ))}
            <li>
              <HeaderActionButton asChild>
                <Link href={actionButtons.apply.href}>
                  {actionButtons.apply.label.toUpperCase()}
                </Link>
              </HeaderActionButton>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
