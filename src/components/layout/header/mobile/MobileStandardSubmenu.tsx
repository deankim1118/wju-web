import { SheetClose } from '@/components/ui/sheet';
import type { NavLink } from '@/config/navigation';
import Link from 'next/link';
import { HEADER_MENU_STYLES } from '../constants';

type MobileStandardSubmenuProps = {
  submenu: NavLink[];
};

export function MobileStandardSubmenu({ submenu }: MobileStandardSubmenuProps) {
  return (
    <ul className='pl-4'>
      {submenu.map((subItem) => (
        <li key={subItem.href}>
          <SheetClose asChild>
            <Link href={subItem.href} className={HEADER_MENU_STYLES.mobileSubmenuLink}>
              {subItem.label}
            </Link>
          </SheetClose>
        </li>
      ))}
    </ul>
  );
}

