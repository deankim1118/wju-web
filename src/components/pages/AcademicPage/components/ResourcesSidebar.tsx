'use client';

import { ROUTES } from '@/config/routes';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const RESOURCE_LINKS = [
  { href: ROUTES.ACADEMICS.CALENDAR, label: 'Academic Calendar' },
  { href: ROUTES.ACADEMICS.COURSELIST, label: 'Course List' },
  { href: ROUTES.ACADEMICS.CATALOG, label: 'Academic Catalog' },
] as const;

export function ResourcesSidebar() {
  const pathname = usePathname();

  return (
    <aside
      className="w-full lg:w-64 xl:w-72 shrink-0"
      aria-label="Academic resources"
    >
      <nav className="sticky top-28 space-y-6 bg-slate-50 px-4 lg:py-4">
        <div className="border-b border-slate-200 pb-3">
          <Link
            href={ROUTES.ACADEMICS.ROOT}
            className={cn(
              'block py-3 text-sm font-medium transition-colors',
              'hover:bg-muted hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
              'text-slate-500'
            )}
          >
            Academic Department
          </Link>
        </div>
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-3">
            Resources
          </h3>
          <ul className="space-y-0.5">
            {RESOURCE_LINKS.map(({ href, label }) => {
              const isActive = pathname === href;
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={cn(
                      'block rounded-md px-3 py-2.5 text-sm font-medium transition-colors',
                      'hover:bg-muted hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
                      isActive
                        ? 'bg-slate-200 text-primary border-l-2 border-secondary -ml-[2px] pl-[14px] lg:bg-muted'
                        : 'text-slate-500'
                    )}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </aside>
  );
}
