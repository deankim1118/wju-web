'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { actionButtons, mainNavigation } from '@/config/navigation';
import Link from 'next/link';
import { MobileActionButton, MobileMenuButton } from './buttons';

type MobileMainNavProps = Record<string, never>;

export function MobileMainNav({}: MobileMainNavProps) {
  return (
    <div className='space-y-1'>
      {mainNavigation.map((item) =>
        item.submenu ? (
          // Menu item with submenu - Use Accordion
          <Accordion key={item.href} type='single' collapsible>
            <AccordionItem value={item.href} className='border-0'>
              <AccordionTrigger className='btn-sm w-full justify-start font-medium text-black hover:text-secondary hover:bg-transparent hover:no-underline rounded-none h-auto py-2 px-3'>
                {item.label.toUpperCase()}
              </AccordionTrigger>
              <AccordionContent className='pb-0 pt-1'>
                <ul className='space-y-1 pl-4'>
                  {item.submenu.map((subItem) => (
                    <li key={subItem.href}>
                      <Link
                        href={subItem.href}
                        className='block py-2 text-sm text-black hover:text-secondary transition-colors'
                      >
                        {subItem.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ) : (
          // Simple menu item without submenu
          <MobileMenuButton key={item.href} variant='main' asChild>
            <Link href={item.href}>{item.label.toUpperCase()}</Link>
          </MobileMenuButton>
        ),
      )}
      <MobileActionButton asChild>
        <Link href={actionButtons.apply.href}>
          {actionButtons.apply.label.toUpperCase()}
        </Link>
      </MobileActionButton>
    </div>
  );
}
