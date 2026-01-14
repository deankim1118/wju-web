import { actionButtons, topBarNavigation } from '@/config/navigation';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { HeaderActionButton, TopMenuButton } from './buttons';
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
            'hidden min-[980px]:flex items-center justify-between h-full lg:tracking-wide',
            CONTAINER_PADDING,
          )}
        >
          {/* Left side links */}
          <div className={cn('flex', TOP_MENU_GAP)}>
            {topBarNavigation.map((link) => (
              <TopMenuButton key={link.href} asChild>
                <Link href={link.href}>{link.label.toUpperCase()}</Link>
              </TopMenuButton>
            ))}
          </div>
          {/* Right side elements */}
          <div className={cn('flex', MENU_GAP)}>
            <HeaderActionButton variant='secondary' asChild>
              <Link href={actionButtons.myWju.href}>
                {actionButtons.myWju.label.toUpperCase()}
              </Link>
            </HeaderActionButton>
            <TopMenuButton asChild>
              <Link href={actionButtons.language.href}>
                {actionButtons.language.label.toUpperCase()}
              </Link>
            </TopMenuButton>
            <TopMenuButton asChild>
              <Link href={actionButtons.support.href}>
                {actionButtons.support.label.toUpperCase()}
              </Link>
            </TopMenuButton>
          </div>
        </div>
        {/* Mobile - Empty space to maintain background */}
        <div className='min-[980px]:hidden h-full' />
      </div>
    </div>
  );
}
