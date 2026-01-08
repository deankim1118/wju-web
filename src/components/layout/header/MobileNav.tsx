'use client';

import {
  MobileActionButton,
  MobileMenuButton,
} from '@/components/header-buttons';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

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
          size='icon'
          className={cn(
            'absolute left-4 z-50 text-white hover:bg-transparent hover:text-white h-auto p-2 min-[900px]:hidden',
          )}
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
          'w-full border-0 p-0 bg-white shadow-lg',
          'data-[state=open]:animate-in data-[state=closed]:animate-out',
          'data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top',
          '[&>button]:hidden z-40 min-[900px]:hidden',
        )}
        style={{ top: `${topBarHeight}px` }}
      >
        <div className='px-4 py-4 space-y-1'>
          {/* Main Navigation Items */}
          <MobileMenuButton variant='main'>ABOUT</MobileMenuButton>
          <MobileMenuButton variant='main'>ACADEMICS</MobileMenuButton>
          <MobileMenuButton variant='main'>ADMISSIONS</MobileMenuButton>
          <MobileMenuButton variant='main'>CHURCH MUSIC</MobileMenuButton>
          <MobileActionButton>APPLY</MobileActionButton>

          {/* Top Navigation Items (from Brand Bar) */}
          <Separator className='my-3' />
          <div className='space-y-1'>
            <MobileMenuButton variant='top'>QUICK LINKS</MobileMenuButton>
            <MobileMenuButton variant='top'>VISIT US</MobileMenuButton>
            <MobileMenuButton variant='top'>REQUEST INFO</MobileMenuButton>
            <MobileActionButton variant='secondary'>MY WJU</MobileActionButton>
            <MobileMenuButton variant='top'>LANGUAGE</MobileMenuButton>
            <MobileMenuButton variant='top'>SUPPORT</MobileMenuButton>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
