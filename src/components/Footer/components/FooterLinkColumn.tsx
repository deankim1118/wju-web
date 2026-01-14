import Link from 'next/link';

export type FooterLink = {
  label: string;
  href: string;
};

export type FooterLinkColumnProps = {
  title: string;
  links: FooterLink[];
  isMobile?: boolean;
};

export function FooterLinkColumn({
  title,
  links,
  isMobile = false,
}: FooterLinkColumnProps) {
  return (
    <nav className='flex flex-col justify-start items-start gap-4'>
      {!isMobile && <h4 className='text-lg font-normal'>{title}</h4>}
      <ul className='flex flex-col gap-3'>
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className='text-sm leading-6 hover:text-gray-300 transition-colors'
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
