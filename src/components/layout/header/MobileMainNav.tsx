'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { SheetClose } from '@/components/ui/sheet';
import {
  academicProgramGroups,
  actionButtons,
  mainNavigation,
  menuFeatures,
} from '@/config/navigation';
import Link from 'next/link';
import { MobileActionButton, MobileMenuButton } from './buttons';
import { HEADER_MENU_STYLES } from './constants';

type MobileMainNavProps = Record<string, never>;

function splitProgramLabel(label: string): { name: string; abbr?: string } {
  const match = label.match(/^(.*)\s+\(([^)]+)\)\s*$/);
  if (!match) return { name: label };
  return { name: match[1] ?? label, abbr: match[2] };
}

export function MobileMainNav({}: MobileMainNavProps) {
  return (
    <div className='space-y-1'>
      {mainNavigation.map((item) => {
        // Get featured menu data for this section
        const feature = menuFeatures[item.label];

        return item.submenu ? (
          // Menu item with submenu - Use Accordion
          <Accordion key={item.href} type='single' collapsible>
            <AccordionItem value={item.href} className='border-0'>
              <AccordionTrigger className={HEADER_MENU_STYLES.mobileAccordionTrigger}>
                {item.label.toUpperCase()}
              </AccordionTrigger>
              <AccordionContent className='pb-0 pt-1'>
                {/* Featured Menu Item - Overview Link */}
                {feature && (
                  <div className=' mx-3 p-3 bg-muted/30 rounded-md'>
                    <SheetClose asChild>
                      <Link href={feature.href} className='block'>
                        <div className='font-medium text-sm mb-1 text-black hover:text-secondary transition-colors'>
                          {feature.title}
                        </div>
                        <div className='text-xs text-secondary'>View all programs</div>
                      </Link>
                    </SheetClose>
                  </div>
                )}

                {/* Submenu Items */}
                {item.label === 'Academics' ? (
                  <div className='px-3 pt-2 pb-1 space-y-5'>
                    {/* Resources (existing submenu items) */}
                    <div className='space-y-2'>
                      <div className='text-xs font-semibold tracking-wide text-muted-foreground uppercase'>
                      Resources
                      </div>
                      <ul className='space-y-1'>
                        {item.submenu?.map((subItem) => (
                          <li key={subItem.href}>
                            <SheetClose asChild>
                              <Link
                                href={subItem.href}
                                className={HEADER_MENU_STYLES.mobileSubmenuLink}
                              >
                                {subItem.label}
                              </Link>
                            </SheetClose>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Degree programs */}
                    {academicProgramGroups.map((group) => (
                      <div key={group.category} className='space-y-2'>
                        <div className='text-xs font-semibold tracking-wide text-muted-foreground uppercase'>
                          {group.category}
                        </div>
                        <ul className='space-y-1'>
                          {group.items.map((program) => (
                            <li key={program.href}>
                              <SheetClose asChild>
                                <Link
                                  href={program.href}
                                  className={HEADER_MENU_STYLES.mobileSubmenuLink}
                                >
                                  {(() => {
                                    const { name, abbr } = splitProgramLabel(
                                      program.label,
                                    );
                                    return (
                                      <div className='flex items-center justify-between gap-3'>
                                        <div className='min-w-0 truncate text-sm leading-none'>
                                          {name}
                                        </div>
                                        {abbr && (
                                          <div className='shrink-0 rounded-sm border border-muted bg-muted/30 px-1.5 py-0.5 text-[11px] font-semibold text-muted-foreground'>
                                            {abbr}
                                          </div>
                                        )}
                                      </div>
                                    );
                                  })()}
                                </Link>
                              </SheetClose>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                ) : (
                  <ul className='pl-4'>
                    {item.submenu.map((subItem) => (
                      <li key={subItem.href}>
                        <SheetClose asChild>
                          <Link
                            href={subItem.href}
                            className={HEADER_MENU_STYLES.mobileSubmenuLink}
                          >
                            {subItem.label}
                          </Link>
                        </SheetClose>
                      </li>
                    ))}
                  </ul>
                )}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ) : (
          // Simple menu item without submenu
          <MobileMenuButton key={item.href} variant='main' asChild>
            <SheetClose asChild>
              <Link href={item.href}>{item.label.toUpperCase()}</Link>
            </SheetClose>
          </MobileMenuButton>
        );
      })}
      <MobileActionButton asChild>
        <SheetClose asChild>
          <Link href={actionButtons.apply.href}>
            {actionButtons.apply.label.toUpperCase()}
          </Link>
        </SheetClose>
      </MobileActionButton>
    </div>
  );
}
