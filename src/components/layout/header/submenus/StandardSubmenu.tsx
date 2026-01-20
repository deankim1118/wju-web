import { NavigationMenuLink } from '@/components/ui/navigation-menu';
import type { MenuFeature, NavItemWithSubmenu } from '@/config/navigation';
import Link from 'next/link';
import { NavListItem } from '../NavListItem';

type StandardSubmenuProps = {
  item: NavItemWithSubmenu;
  feature: MenuFeature | undefined;
};

const SUBMENU_CONTAINER_STYLE =
  'grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr] text-slate-900';

function FeaturedMenuCard({ feature }: { feature: MenuFeature }) {
  return (
    <li className='row-span-4'>
      <NavigationMenuLink asChild>
        <Link
          className='flex h-full w-full select-none flex-col justify-end rounded-md bg-linear-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md hover:text-secondary'
          href={feature.href}
        >
          <div className='mb-2 mt-4 text-lg font-medium'>{feature.title}</div>
          <p className='text-sm leading-tight text-muted-foreground'>
            {feature.description}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}

export function StandardSubmenu({ item, feature }: StandardSubmenuProps) {
  return (
    <ul className={SUBMENU_CONTAINER_STYLE}>
      {feature && <FeaturedMenuCard feature={feature} />}
      {item.submenu?.map((subItem) => (
        <NavListItem
          key={subItem.href}
          href={subItem.href}
          title={subItem.label}
          description={subItem.description}
          variant='default'
        />
      ))}
    </ul>
  );
}

