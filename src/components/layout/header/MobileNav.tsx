'use client';

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { actionButtons, topBarNavigation } from '@/config/navigation';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { MobileActionButton, MobileMenuButton } from './buttons';
import { DESKTOP_ONLY } from './constants';
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
          className={`absolute left-4 z-50 text-white hover:bg-transparent hover:text-white h-auto p-2 min-[${DESKTOP_ONLY}px]:hidden`}
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
          'w-full h-screen border-0 p-0 bg-white shadow-lg',
          'data-[state=open]:animate-in data-[state=closed]:animate-out',
          'data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top',
          `[&>button]:hidden z-40 min-[${DESKTOP_ONLY}px]:hidden`,
        )}
        style={{ top: `${topBarHeight}px` }}
      >
        <SheetTitle className='sr-only'>Mobile Navigation Menu</SheetTitle>
        <div className='px-4 py-4 space-y-1'>
          {/* Main Navigation Items with Submenus */}
          <MobileMainNav />

          {/* Top Navigation Items (from Brand Bar) */}
          <Separator className='my-3' />
          <div className='space-y-1'>
            {topBarNavigation.map((link) => (
              <MobileMenuButton key={link.href} variant='top' asChild>
                <Link href={link.href}>{link.label.toUpperCase()}</Link>
              </MobileMenuButton>
            ))}
            <MobileActionButton variant='secondary' asChild>
              <Link href={actionButtons.myWju.href}>
                {actionButtons.myWju.label.toUpperCase()}
              </Link>
            </MobileActionButton>
            <MobileMenuButton variant='top' asChild>
              <Link href={actionButtons.language.href}>
                {actionButtons.language.label.toUpperCase()}
              </Link>
            </MobileMenuButton>
            <MobileMenuButton variant='top' asChild>
              <Link href={actionButtons.support.href}>
                {actionButtons.support.label.toUpperCase()}
              </Link>
            </MobileMenuButton>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
