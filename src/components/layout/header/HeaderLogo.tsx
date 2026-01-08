import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import {
  HEADER_HEIGHT_MIN,
  LOGO_DESKTOP_HEIGHT,
  LOGO_DESKTOP_WIDTH,
  LOGO_MOBILE_HEIGHT,
  LOGO_MOBILE_WIDTH,
} from './constants';

type HeaderLogoProps = {
  isScrolled: boolean;
  headerHeight: number;
};

export function HeaderLogo({ isScrolled, headerHeight }: HeaderLogoProps) {
  const shouldScale = isScrolled && headerHeight > HEADER_HEIGHT_MIN;
  const logoScaleClass = shouldScale ? 'scale-90' : 'scale-100';

  return (
    <>
      {/* Desktop Logo */}
      <Link
        href='/'
        className={cn(
          'absolute left-1/2 -top-1 z-50 -translate-x-1/2 transition-all duration-300 w-[clamp(330px,29vw,370px)]',
          logoScaleClass,
        )}
        aria-label='Logo'
      >
        <Image
          src='/wju-logo.png'
          alt='Washington Jabez University Logo'
          width={LOGO_DESKTOP_WIDTH}
          height={LOGO_DESKTOP_HEIGHT}
          className='hidden min-[900px]:block w-full h-auto object-contain transition-all duration-300'
        />
      </Link>

      {/* Mobile Logo */}
      <Link
        href='/'
        className={cn(
          'absolute left-1/2 top-0 z-100 -translate-x-1/2 transition-all duration-300 min-[900px]:hidden',
          logoScaleClass,
        )}
        aria-label='Logo'
      >
        <Image
          src='/wju-logo-mobile.png'
          alt='Washington Jabez University Logo'
          width={LOGO_MOBILE_WIDTH}
          height={LOGO_MOBILE_HEIGHT}
          className='object-contain transition-all duration-300'
        />
      </Link>
    </>
  );
}
