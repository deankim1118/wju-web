'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export type SectionSidebarLink = {
  href: string;
  label: string;
};

export type SectionSidebarConfig = {
  ariaLabel: string;
  groupTitle: string;
  links: readonly SectionSidebarLink[];
  /** Optional "back to parent" link shown above the group (e.g. Academic Department) */
  parentLink?: SectionSidebarLink;
};

type SectionSidebarProps = {
  config: SectionSidebarConfig;
};

export function SectionSidebar({ config }: SectionSidebarProps) {
  const pathname = usePathname();
  const { ariaLabel, groupTitle, links, parentLink } = config;

  return (
    <aside
      className="w-full lg:w-64 xl:w-72 shrink-0"
      aria-label={ariaLabel}
    >
      <nav className="sticky top-28 space-y-6 bg-slate-50 px-4 lg:py-4">
        {parentLink && (
          <div className="border-b border-slate-200 pb-3">
            <Link
              href={parentLink.href}
              className={cn(
                'block py-3 text-sm font-medium transition-colors',
                'hover:bg-muted hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
                'text-slate-500'
              )}
            >
              {parentLink.label}
            </Link>
          </div>
        )}
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-3">
            {groupTitle}
          </h3>
          <ul className="space-y-0.5">
            {links.map(({ href, label }) => {
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
