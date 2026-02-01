import Link from 'next/link';

type FooterCTAProps = {
  href: string;
  label: string;
};

export function FooterCTA({ href, label }: FooterCTAProps) {
  return (
    <Link
      href={href}
      className='flex-1 min-w-[280px] md:min-w-[360px] h-28 px-1.5 py-5 border border-white/50 flex justify-center items-center gap-2 transition-colors hover:bg-white/10'
    >
      <span className='font-serif text-xl md:text-3xl font-bold uppercase leading-7 tracking-wider text-center'>
        {label}
      </span>
    </Link>
  );
}
