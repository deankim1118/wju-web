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
      <div className='grid min-h-[400px] grid-cols-[.75fr_1fr] gap-3 p-6'>
        {/* Left: Root link and Resources */}
        <div className='flex flex-col gap-3'>
          <NavigationMenuLink asChild>
            <Link
              href={item.href}
              className='flex flex-1 min-h-[200px] w-full select-none flex-col justify-end rounded-md bg-linear-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md hover:text-secondary'
            >
              <div className='mb-2 mt-4 text-lg font-medium'>Academic Programs</div>
              <p className='text-sm leading-tight text-muted-foreground'>
                Explore our academic programs.
              </p>
            </Link>
          </NavigationMenuLink>

          {/* Resources section below root link */}
          {item.submenu && item.submenu.length > 0 && (
            <div className='mt-3 border-t border-slate-100 pt-4'>
              <div className={cn(HEADER_MENU_STYLES.sectionLabel, 'mb-2')}>
                Resources
              </div>
              <ul className='space-y-0.5'>
                {item.submenu.map((subItem) => (
                  <li key={subItem.href}>
                    <NavigationMenuLink asChild>
                      <Link
                        href={subItem.href}
                        className='block rounded-md px-2 py-1.5 text-sm font-medium text-slate-900 transition-colors hover:bg-slate-100 hover:text-secondary'
                      >
                        {subItem.label}
                      </Link>
                    </NavigationMenuLink>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Right: Category navigation at top, then program items */}
        <div className='flex flex-col'>
          {/* Category navigation buttons at top right */}
          <div className='mb-4 flex flex-wrap gap-2'>
            {academicProgramGroups.map((group) => {
              const isActive = group.category === activeCategory;
              return (
                <button
                  key={group.category}
                  type='button'
                  onClick={() => setActiveCategory(group.category)}
                  onMouseEnter={() => setActiveCategory(group.category)}
                  className={cn(
                    'group flex items-center justify-between gap-2 rounded-md px-3 py-2 text-sm font-medium transition-all outline-none focus-visible:ring-2 focus-visible:ring-primary',
                    isActive
                      ? 'bg-secondary/10 text-secondary shadow-sm ring-1 ring-secondary/20'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900',
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

          {/* Program items grid */}
          <div className='flex-1'>
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
    </div>
  );
}

