import { Instagram, Youtube } from 'lucide-react';
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

      {/* Copyright Bar with Social Media */}
      <div className='border-t border-white/20'>
        <div className='container mx-auto px-6 md:px-16 py-6'>
          <div className='flex flex-col-reverse md:flex-row justify-between items-start gap-4'>
            {/* Copyright Text */}
            <p className='text-sm md:text-base leading-6 text-left text-white/90'>
              Copyright © 2026 • Washington Jabez University. All rights
              reserved.
            </p>

            {/* Social Media Icons */}
            <div className='flex items-center gap-4'>
              <Link
                href='https://www.instagram.com/wju'
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center justify-center w-9 h-9 lg:w-10 lg:h-10 rounded-full border border-white/90 text-white/90 hover:text-white hover:border-white transition-all duration-200 hover:scale-105'
                aria-label='Visit our Instagram'
              >
                <Instagram className='w-5 h-5' strokeWidth={2} />
              </Link>
              <Link
                href='https://www.youtube.com/@wju'
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center justify-center w-9 h-9 lg:w-10 lg:h-10 rounded-full border border-white/90 text-white/90 hover:text-white hover:border-white transition-all duration-200 hover:scale-105'
                aria-label='Visit our YouTube channel'
              >
                <Youtube className='w-5 h-5' strokeWidth={2} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
