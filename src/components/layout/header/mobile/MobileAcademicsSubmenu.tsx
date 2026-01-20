import { SheetClose } from '@/components/ui/sheet';
import type { NavItemWithSubmenu } from '@/config/navigation';
import { academicProgramGroups } from '@/config/navigation';
import { splitProgramLabel } from '@/lib/utils';
import Link from 'next/link';
import { HEADER_MENU_STYLES } from '../constants';

type MobileAcademicsSubmenuProps = {
  item: NavItemWithSubmenu;
};

export function MobileAcademicsSubmenu({ item }: MobileAcademicsSubmenuProps) {
  return (
    <div className='px-3 pt-2 pb-1 space-y-5'>
      <div className='space-y-2'>
        <div className={HEADER_MENU_STYLES.sectionLabel}>Resources</div>
        <ul className='space-y-1'>
          {item.submenu?.map((subItem) => (
            <li key={subItem.href}>
              <SheetClose asChild>
                <Link href={subItem.href} className={HEADER_MENU_STYLES.mobileSubmenuLink}>
                  {subItem.label}
                </Link>
              </SheetClose>
            </li>
          ))}
        </ul>
      </div>

      {academicProgramGroups.map((group) => (
        <div key={group.category} className='space-y-2'>
          <div className={HEADER_MENU_STYLES.sectionLabel}>{group.category}</div>
          <ul className='space-y-1'>
            {group.items.map((program) => {
              const { name, abbr } = splitProgramLabel(program.label);
              return (
                <li key={program.href}>
                  <SheetClose asChild>
                    <Link href={program.href} className={HEADER_MENU_STYLES.mobileSubmenuLink}>
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
                    </Link>
                  </SheetClose>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </div>
  );
}

