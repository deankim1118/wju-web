import {
  HeaderActionButton,
  MainMenuButton,
} from '@/components/header-buttons';
import { cn } from '@/lib/utils';
import { CONTAINER_PADDING, MENU_GAP, MENU_GAP_CENTER } from './constants';

type MainNavProps = {
  bottomBarHeight: number;
};

export function MainNav({ bottomBarHeight }: MainNavProps) {
  return (
    <nav
      className='hidden min-[900px]:block bg-white shadow-sm tracking-wider'
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
            <li>
              <MainMenuButton>ABOUT</MainMenuButton>
            </li>
            <li>
              <MainMenuButton>ACADEMICS</MainMenuButton>
            </li>
            <li>
              <MainMenuButton>ADMISSIONS</MainMenuButton>
            </li>
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
            <li>
              <MainMenuButton>CHURCH MUSIC</MainMenuButton>
            </li>
            <li>
              <HeaderActionButton>APPLY</HeaderActionButton>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
