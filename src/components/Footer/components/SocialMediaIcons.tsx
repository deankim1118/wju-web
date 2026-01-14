import Link from 'next/link';

// Custom SVG icon components (to avoid deprecated lucide icons)
function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      {...props}
    >
      <rect width='20' height='20' x='2' y='2' rx='5' ry='5' />
      <path d='M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z' />
      <line x1='17.5' x2='17.51' y1='6.5' y2='6.5' />
    </svg>
  );
}

function YoutubeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      {...props}
    >
      <path d='M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17' />
      <polygon points='10 15 15 12 10 9 10 15' />
    </svg>
  );
}

// Map icon names to components
const iconMap: Record<
  string,
  React.ComponentType<React.SVGProps<SVGSVGElement>>
> = {
  instagram: InstagramIcon,
  youtube: YoutubeIcon,
};

type SocialMediaLink = {
  platform: string;
  href: string;
  iconName: string;
  ariaLabel: string;
};

type SocialMediaIconsProps = {
  socialMedia: SocialMediaLink[];
};

export function SocialMediaIcons({ socialMedia }: SocialMediaIconsProps) {
  return (
    <div className='flex items-center gap-4'>
      {socialMedia.map((social) => {
        const Icon = iconMap[social.iconName];
        return (
          <Link
            key={social.platform}
            href={social.href}
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center justify-center w-9 h-9 lg:w-10 lg:h-10 rounded-full border border-white/90 text-white/90 hover:text-white hover:border-white transition-all duration-200 hover:scale-105'
            aria-label={social.ariaLabel}
          >
            <Icon className='w-5 h-5' strokeWidth={2} />
          </Link>
        );
      })}
    </div>
  );
}
