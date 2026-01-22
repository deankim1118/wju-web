'use client';

import Link from 'next/link';

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

type ProgramSidebarProps = {
  currentProgram: DegreeProgram;
};

export function ProgramSidebar({ currentProgram }: ProgramSidebarProps) {
  return (
    <aside
      className="w-full lg:w-64 xl:w-72 shrink-0"
      aria-label="Degree programs"
    >
      <nav className="sticky top-28 space-y-6">
        <div className="lg:hidden">
          <div className="border-b">
            <Link
              href={ROUTES.ACADEMICS.ROOT}
              className={cn(
                'block py-3 text-sm font-medium transition-colors',
                'hover:bg-muted hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
                'text-muted-foreground'
              )}
            >
              About this Department
            </Link>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {academicProgramGroups.map((group) => (
              <AccordionItem key={group.category} value={group.category}>
                <AccordionTrigger className="text-xs font-semibold uppercase tracking-widest text-muted-foreground py-3">
                  {group.category}
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-0.5 pt-2">
                    {group.items.map((item) => {
                      const isCurrent = item.href === currentProgram.href;
                      return (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            className={cn(
                              'block rounded-md px-3 py-2.5 text-sm font-medium transition-colors',
                              'hover:bg-muted hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
                              isCurrent
                                ? 'bg-primary/10 text-primary border-l-2 border-primary -ml-[2px] pl-[14px]'
                                : 'text-muted-foreground'
                            )}
                          >
                            {item.label}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <div className="hidden lg:block space-y-6">
          <div className="border-b pb-3">
            <Link
              href={ROUTES.ACADEMICS.ROOT}
              className={cn(
                'block py-2.5 text-sm font-medium transition-colors',
                'hover:bg-muted hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
                'text-muted-foreground'
              )}
            >
              About this Department
            </Link>
          </div>
          {academicProgramGroups.map((group) => (
            <div key={group.category}>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">
                {group.category}
              </h3>
              <ul className="space-y-0.5">
                {group.items.map((item) => {
                  const isCurrent = item.href === currentProgram.href;
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className={cn(
                          'block rounded-md px-3 py-2.5 text-sm font-medium transition-colors',
                          'hover:bg-muted hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
                          isCurrent
                            ? 'bg-primary/10 text-primary border-l-2 border-primary -ml-[2px] pl-[14px]'
                            : 'text-muted-foreground'
                        )}
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </nav>
    </aside>
  );
}

