import Link from 'next/link';
import { cn } from '@/lib/utils';

type SidebarLinkProps = {
  href: string;
  label: string;
  isActive: boolean;
  className?: string;
};

export function SidebarLink({
  href,
  label,
  isActive,
  className,
}: SidebarLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        'block rounded-md px-3 py-2.5 text-sm font-medium transition-colors',
        'hover:bg-muted hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
        isActive
          ? 'bg-slate-200 text-primary border-l-2 border-secondary -ml-[2px] pl-[14px] lg:bg-muted'
          : 'text-slate-500',
        className,
      )}
    >
      {label}
    </Link>
  );
}
