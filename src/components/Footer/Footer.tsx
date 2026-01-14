import Image from 'next/image';
import Link from 'next/link';
import { FooterCTA } from './components/FooterCTA';
import { FooterLinksSection } from './components/FooterLinksSection';
import { FooterQuote } from './components/FooterQuote';

type FooterProps = Record<string, never>;

export function Footer({}: FooterProps) {
  return (
    <footer className='bg-primary text-white'>
      {/* Main Footer Content */}
      <div className='flex flex-col gap-9 pt-12 pb-6 md:pb-12'>
        {/* Logo Section */}
        <div className='container mx-auto px-6'>
          <div className='flex justify-center items-center'>
            <Link href='/' className='block'>
              <Image
                src='/wju-logo-mobile.png'
                alt='Washington Jabez University Logo'
                width={220}
                height={220}
                className='w-56 h-56'
                priority
              />
            </Link>
          </div>
        </div>

        {/* CTA Buttons - Full Width on Large Screens */}
        <div className='px-6 lg:px-0'>
          <div className='flex flex-col lg:flex-row justify-center items-stretch max-w-[1440px] mx-auto'>
            <FooterCTA href='/apply' label='Apply WJU' />
            <FooterCTA href='/request-info' label='Request Information' />
          </div>
        </div>

        {/* Quote Section */}
        <div className='container mx-auto px-6 flex justify-center items-center'>
          <FooterQuote />
        </div>

        {/* Footer Links Section */}
        <div className='w-full mx-auto px-6 flex justify-center items-center'>
          <FooterLinksSection />
        </div>
      </div>

      {/* Copyright Bar */}
      <div className='md:border-t md:border-white/50'>
        <div className='container mx-auto px-6 md:px-36 py-4 flex justify-center items-center'>
          <p className='text-base leading-6 text-center'>
            Copyright © 2026 • Washington Jabez University. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
