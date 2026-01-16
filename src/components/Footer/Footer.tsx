import { footerContent } from '@/config/home-content';
import { socialMediaLinks } from '@/config/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { FooterCTA } from './components/FooterCTA';
import { FooterContactServer } from './components/FooterContactServer';
import { FooterLinksSection } from './components/FooterLinksSection';
import { FooterQuote } from './components/FooterQuote';
import { SocialMediaIcons } from './components/SocialMediaIcons';

type FooterProps = Record<string, never>;

export async function Footer({}: FooterProps) {
  // Server Component: 데이터 fetch는 FooterContactServer에서 수행
  return (
    <footer className='bg-primary text-white'>
      {/* Main Footer Content */}
      <div className='flex flex-col gap-9 pt-12 pb-6 md:pb-12'>
        {/* Logo Section */}
        <div className='container mx-auto px-6'>
          <div className='flex justify-center items-center'>
            <Link href='/' className='block'>
              <Image
                src={footerContent.logoUrl}
                alt={footerContent.logoAlt}
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
            {footerContent.ctaButtons.map((cta) => (
              <FooterCTA key={cta.label} href={cta.href} label={cta.label} />
            ))}
          </div>
        </div>

        {/* Quote Section */}
        <div className='container mx-auto px-6 flex justify-center items-center'>
          <FooterQuote quote={footerContent.quote} />
        </div>

        {/* Footer Links Section */}
        <div className='w-full mx-auto px-6 flex justify-center items-center'>
          <FooterLinksSection contactElement={<FooterContactServer />} />
        </div>
      </div>

      {/* Copyright Bar with Social Media */}
      <div className='border-t border-white/20'>
        <div className='container mx-auto px-6 md:px-16 py-6'>
          <div className='flex flex-col-reverse md:flex-row justify-between items-start gap-4'>
            {/* Copyright Text */}
            <p className='text-sm md:text-base leading-6 text-left text-white/90'>
              {footerContent.copyright}
            </p>

            {/* Social Media Icons */}
            <SocialMediaIcons socialMedia={socialMediaLinks} />
          </div>
        </div>
      </div>
    </footer>
  );
}
