'use client';

import { useHeaderControl } from '@/hooks/use-header-control';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import { HeaderLogo } from './HeaderLogo';
import { MainNav } from './MainNav';
import { MobileNav } from './MobileNav';
import { TopBar } from './TopBar';

export function Header() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const { isScrolled, headerHeight, topBarHeight, bottomBarHeight } =
    useHeaderControl();

  return (
    <header
      className='sticky top-0 z-50 w-full transition-all duration-300'
      id='header'
      data-scrolldown={isScrolled}
    >
      {/* Skip to main content for accessibility */}
      <a
        href='#maincontent'
        className={cn(
          'sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0',
          'focus:z-100 focus:bg-primary focus:text-primary-foreground',
          'focus:px-4 focus:py-2',
        )}
      >
        Skip to main content
      </a>

      {/* Logo Container */}
      <HeaderLogo isScrolled={isScrolled} headerHeight={headerHeight} />

      {/* Mobile Navigation */}
      <MobileNav
        isOpen={isMobileNavOpen}
        onOpenChange={setIsMobileNavOpen}
        topBarHeight={topBarHeight}
      />

      {/* Header Navigation */}
      <div className='relative'>
        <TopBar topBarHeight={topBarHeight} />
        <MainNav bottomBarHeight={bottomBarHeight} />
      </div>

      {/* Skip link anchor */}
      <div id='maincontent' className='sr-only'>
        Main content
      </div>
    </header>
  );
}
