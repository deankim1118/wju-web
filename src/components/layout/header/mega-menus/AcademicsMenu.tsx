import { NavigationMenuLink } from '@/components/ui/navigation-menu';
import type { NavItemWithSubmenu } from '@/config/navigation';
import { academicProgramGroups } from '@/config/navigation';
import { cn, splitProgramLabel } from '@/lib/utils';
import Link from 'next/link';
import * as React from 'react';
import { HEADER_MENU_STYLES } from '../constants';

type AcademicsMegaMenuProps = {
  item: NavItemWithSubmenu;
};

export function AcademicsMegaMenu({ item }: AcademicsMegaMenuProps) {
  type AcademicCategory = (typeof academicProgramGroups)[number]['category'];

  const defaultCategory: AcademicCategory =
    academicProgramGroups.find((g) => g.category === 'Graduate')?.category ??
    academicProgramGroups[0]?.category ??
    'Undergraduate';

  const [activeCategory, setActiveCategory] =
    React.useState<AcademicCategory>(defaultCategory);

  const activeGroup =
    academicProgramGroups.find((g) => g.category === activeCategory) ??
    academicProgramGroups[0];

  return (
    <div className='w-[850px] overflow-hidden bg-white'>
      <NavigationMenuLink asChild>
        <Link
          href={item.href}
          className='group flex flex-row w-full items-center justify-between border-b border-slate-100 bg-white px-6 py-4 no-underline transition-colors hover:bg-slate-50 focus:bg-slate-50 focus:outline-none'
        >
          <div>
            <h4 className={cn(HEADER_MENU_STYLES.itemText, 'text-slate-900')}>
              Academic Programs
            </h4>
            <p className={cn(HEADER_MENU_STYLES.mutedSmall, 'mt-1')}>
              Explore our academic programs.
            </p>
          </div>

          <span className='flex flex-row items-center justify-between gap-1.5 text-xs font-medium text-secondary group-hover:text-secondary/80 group-hover:underline'>
            <span>View All Programs</span>
            <span aria-hidden='true'>&rarr;</span>
          </span>
        </Link>
      </NavigationMenuLink>

      <div className='flex min-h-[400px]'>
        <div className='flex w-[240px] shrink-0 flex-col justify-between border-r border-slate-100 bg-slate-50/50 p-3'>
          <div className='space-y-1'>
            {academicProgramGroups.map((group) => {
              const isActive = group.category === activeCategory;
              return (
                <button
                  key={group.category}
                  type='button'
                  onClick={() => setActiveCategory(group.category)}
                  onMouseEnter={() => setActiveCategory(group.category)}
                  className={cn(
                    'group flex w-full items-center justify-between rounded-md px-3 py-2.5 text-left text-sm font-medium transition-all outline-none focus-visible:ring-2 focus-visible:ring-primary',
                    isActive
                      ? 'bg-white text-secondary shadow-sm ring-1 ring-slate-200'
                      : 'text-slate-600 hover:bg-slate-200/50 hover:text-slate-900',
                  )}
                >
                  <span>{group.category}</span>
                  {isActive && (
                    <div className='h-1.5 w-1.5 rounded-full bg-secondary' />
                  )}
                </button>
              );
            })}
          </div>

          <div className='mt-auto pt-6'>
            <div className={cn(HEADER_MENU_STYLES.sectionLabel, 'mb-2 px-3')}>
              Resources
            </div>
            <ul className='space-y-0.5'>
              {item.submenu?.map((subItem) => (
                <li key={subItem.href}>
                  <NavigationMenuLink asChild>
                    <Link
                      href={subItem.href}
                      className='block rounded-md px-3 py-2 text-sm font-medium text-slate-900 transition-colors hover:bg-slate-100 hover:text-secondary'
                    >
                      {subItem.label}
                    </Link>
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className='flex-1 bg-white p-6'>
          <div className='mb-4 flex items-center gap-2'>
            <span className={HEADER_MENU_STYLES.sectionLabel}>
              {activeGroup?.category}
            </span>
            <div className='h-px flex-1 bg-slate-100' />
          </div>

          <ul className='grid grid-cols-2 gap-3'>
            {activeGroup?.items.map((program) => {
              const { name, abbr } = splitProgramLabel(program.label);
              return (
                <li key={program.href}>
                  <NavigationMenuLink asChild>
                    <Link
                      href={program.href}
                      className='group flex h-full items-start gap-3 rounded-lg border border-slate-100 bg-white p-3 transition-all hover:shadow-md hover:shadow-primary/5'
                    >
                      <span className='mt-0.5 inline-flex h-6 min-w-12 items-center justify-center rounded bg-slate-100 px-1.5 text-[11px] font-semibold text-muted-foreground transition-colors group-hover:bg-secondary/10 group-hover:text-secondary'>
                        {abbr || 'DEG'}
                      </span>

                      <div className='flex flex-col gap-0.5'>
                        <span className='text-sm font-medium text-slate-900 transition-colors group-hover:text-secondary'>
                          {name}
                        </span>
                      </div>
                    </Link>
                  </NavigationMenuLink>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

