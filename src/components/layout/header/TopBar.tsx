import { HeaderActionButton, TopMenuButton } from '@/components/header-buttons';
import { cn } from '@/lib/utils';
import { CONTAINER_PADDING, MENU_GAP, TOP_MENU_GAP } from './constants';

type TopBarProps = {
  topBarHeight: number;
};

export function TopBar({ topBarHeight }: TopBarProps) {
  return (
    <div
      className='bg-primary text-primary-foreground transition-all duration-300'
      style={{ height: `${topBarHeight}px` }}
    >
      <div className='h-full max-w-[1920px] mx-auto'>
        {/* Desktop Menu */}
        <div
          className={cn(
            'hidden min-[900px]:flex items-center justify-between h-full lg:tracking-wide',
            CONTAINER_PADDING,
          )}
        >
          {/* Left side links */}
          <div className={cn('flex', TOP_MENU_GAP)}>
            <TopMenuButton>QUICK LINKS</TopMenuButton>
            <TopMenuButton>VISIT US</TopMenuButton>
            <TopMenuButton>REQUEST INFO</TopMenuButton>
          </div>
          {/* Right side elements */}
          <div className={cn('flex', MENU_GAP)}>
            <HeaderActionButton variant='secondary'>MY WJU</HeaderActionButton>
            <TopMenuButton>LANGUAGE</TopMenuButton>
            <TopMenuButton>SUPPORT</TopMenuButton>
          </div>
        </div>
        {/* Mobile - Empty space to maintain background */}
        <div className='min-[900px]:hidden h-full' />
      </div>
    </div>
  );
}
