'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { SheetClose } from '@/components/ui/sheet';
import { mainNavigation, menuFeatures } from '@/config/navigation';
import Link from 'next/link';
import { MobileActionButton, MobileMenuButton } from './buttons';
import { HEADER_MENU_STYLES } from './constants';
import { MobileAcademicsSubmenu } from './mobile/MobileAcademicsSubmenu';
import { MobileFeaturedLink } from './mobile/MobileFeaturedLink';
import { MobileStandardSubmenu } from './mobile/MobileStandardSubmenu';

type MobileMainNavProps = Record<string, never>;

export function MobileMainNav({}: MobileMainNavProps) {
  return (
    <div className='space-y-1'>
      {mainNavigation.map((item) => {
        const feature = menuFeatures[item.label];

        if (!item.submenu) {
          return item.variant === 'action' ? (
            <MobileActionButton key={item.href} asChild>
              <SheetClose asChild>
                <Link href={item.href}>{item.label.toUpperCase()}</Link>
              </SheetClose>
            </MobileActionButton>
          ) : (
            <MobileMenuButton key={item.href} variant='main' asChild>
              <SheetClose asChild>
                <Link href={item.href}>{item.label.toUpperCase()}</Link>
              </SheetClose>
            </MobileMenuButton>
          );
        }

        return (
          <Accordion key={item.href} type='single' collapsible>
            <AccordionItem value={item.href} className='border-0'>
              <AccordionTrigger
                className={HEADER_MENU_STYLES.mobileAccordionTrigger}
              >
                {item.label.toUpperCase()}
              </AccordionTrigger>

              <AccordionContent className='pb-0 pt-1'>
                {feature && <MobileFeaturedLink feature={feature} />}

                {item.label === 'Academics' ? (
                  <MobileAcademicsSubmenu item={item} />
                ) : (
                  <MobileStandardSubmenu submenu={item.submenu} />
                )}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        );
      })}
    </div>
  );
}
