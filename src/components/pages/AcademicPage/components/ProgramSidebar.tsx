'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import type { DegreeProgram } from '@/config/academics-content';
import { academicProgramGroups } from '@/config/navigation';
import { ROUTES } from '@/config/routes';
import { cn } from '@/lib/utils';
import { SidebarGroup } from './SidebarGroup';
import { SidebarLink } from './SidebarLink';

const RESOURCE_LINKS = [
  { href: ROUTES.ACADEMICS.CALENDAR, label: 'Academic Calendar' },
  { href: ROUTES.ACADEMICS.COURSELIST, label: 'Course List' },
  { href: ROUTES.ACADEMICS.CATALOG, label: 'Academic Catalog' },
] as const;

type ProgramSidebarProps = {
  currentProgram: DegreeProgram;
};

export function ProgramSidebar({ currentProgram }: ProgramSidebarProps) {
  const pathname = usePathname();

  const resourcesBlock = (
    <div>
      <h3 className='text-xs font-semibold uppercase tracking-widest text-slate-500 mb-3'>
        Resources
      </h3>
      <ul className='space-y-0.5'>
        {RESOURCE_LINKS.map(({ href, label }) => {
          const isActive = pathname === href;
          return (
            <li key={href}>
              <SidebarLink href={href} label={label} isActive={isActive} />
            </li>
          );
        })}
      </ul>
    </div>
  );

  return (
    <aside
      className='w-full lg:w-64 xl:w-72 shrink-0 '
      aria-label='Degree programs'
    >
      <nav className='sticky top-28 space-y-6 bg-slate-50 px-4 lg:py-4'>
        {/* Mobile View */}
        <div className='lg:hidden'>
          <div className='border-b'>
            <Link
              href={ROUTES.ACADEMICS.ROOT}
              className={cn(
                'block py-3 text-sm font-medium transition-colors',
                'hover:bg-muted hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
                'text-slate-500',
              )}
            >
              Academic Department
            </Link>
          </div>
          <Accordion type='single' collapsible className='w-full'>
            {academicProgramGroups.map((group) => (
              <AccordionItem key={group.category} value={group.category}>
                <AccordionTrigger className='text-xs font-semibold uppercase tracking-widest text-slate-500 py-3'>
                  {group.category}
                </AccordionTrigger>
                <AccordionContent>
                  <ul className='space-y-0.5 pt-2'>
                    {group.items.map((item) => {
                      const isCurrent = item.href === currentProgram.href;
                      return (
                        <li key={item.href}>
                          <SidebarLink
                            href={item.href}
                            label={item.label}
                            isActive={isCurrent}
                          />
                        </li>
                      );
                    })}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          {resourcesBlock}
        </div>

        {/* Desktop View */}
        <div className='hidden lg:block space-y-6'>
          <div className='border-b border-slate-200 pb-3'>
            <Link
              href={ROUTES.ACADEMICS.ROOT}
              className={cn(
                'block py-3 text-sm font-medium transition-colors',
                'hover:bg-muted hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
                'text-slate-500',
              )}
            >
              About this Department
            </Link>
          </div>
          <SidebarGroup currentProgram={currentProgram} />
          {resourcesBlock}
        </div>
      </nav>
    </aside>
  );
}
