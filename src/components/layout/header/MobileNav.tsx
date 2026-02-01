'use client';

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import {
  topBarNavigationLeft,
  topBarNavigationRight,
} from '@/config/navigation';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { MobileMenuButton } from './buttons';
import { MobileMainNav } from './MobileMainNav';

type MobileNavProps = {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  topBarHeight: number;
};

export function MobileNav({
  isOpen,
  onOpenChange,
  topBarHeight,
}: MobileNavProps) {
  return (
    <Sheet open={isOpen} onOpenChange={onOpenChange}>
      <SheetTrigger asChild>
        <Button
          id='mobileTogBtn'
          variant='ghost'
          size='icon-lg'
          className='absolute left-4 z-50 text-white hover:bg-transparent hover:text-white h-auto p-2 desktop:hidden'
          style={{
            top: `${topBarHeight / 2}px`,
            transform: 'translateY(-50%)',
          }}
          aria-label={isOpen ? 'Hide main menu' : 'Show main menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? <X className='h-6 w-6' /> : <Menu className='h-6 w-6' />}
        </Button>
      </SheetTrigger>
      <SheetContent
        side='top'
        noOverlay
        className={cn(
          'w-full border-0 p-0 bg-white shadow-lg overflow-y-auto overscroll-contain',
          'data-[state=open]:animate-in data-[state=closed]:animate-out',
          'data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top',
          '[&>button]:hidden z-40 desktop:hidden',
        )}
        style={{
          top: `${topBarHeight}px`,
          height: `calc(100vh - ${topBarHeight}px)`,
        }}
      >
        <SheetTitle className='sr-only'>Mobile Navigation Menu</SheetTitle>
        <div className='px-4 py-4 space-y-1'>
          {/* Main Navigation Items with Submenus */}
          <MobileMainNav />

          {/* Top Navigation Items (from Brand Bar) */}
          <Separator className='my-3' />
          <div className='space-y-1'>
            {topBarNavigationLeft.map((link) => (
              <MobileMenuButton key={link.href} variant='top' asChild>
                <SheetClose asChild>
                  <Link href={link.href}>{link.label.toUpperCase()}</Link>
                </SheetClose>
              </MobileMenuButton>
            ))}
            {/* <MobileActionButton variant='secondary' asChild>
              <SheetClose asChild>
                <Link href={topBarNavigationRight.myWju.href}>
                  {topBarNavigationRight.myWju.label.toUpperCase()}
                </Link>
              </SheetClose>
            </MobileActionButton> */}
            <MobileMenuButton variant='top' asChild>
              <SheetClose asChild>
                <Link href={topBarNavigationRight.language.href}>
                  {topBarNavigationRight.language.label.toUpperCase()}
                </Link>
              </SheetClose>
            </MobileMenuButton>
            <MobileMenuButton variant='top' asChild>
              <SheetClose asChild>
                <Link href={topBarNavigationRight.support.href}>
                  {topBarNavigationRight.support.label.toUpperCase()}
                </Link>
              </SheetClose>
            </MobileMenuButton>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
