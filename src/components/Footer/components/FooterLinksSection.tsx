'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Link from 'next/link';
import { FooterContact } from './FooterContact';

type FooterLink = {
  label: string;
  href: string;
};

type FooterLinksSectionProps = Record<string, never>;

const aboutUsLinks: FooterLink[] = [
  {
    label: 'Statement of Faith',
    href: '/about/statement-of-faith',
  },
  { label: 'Mission & Vision', href: '/about/mission-vision' },
  { label: 'Our History', href: '/about/history' },
  { label: 'Faculty & Staff', href: '/about/faculty-staff' },
];

const academicsLinks: FooterLink[] = [
  { label: 'Degree Programs', href: '/academics/programs' },
  { label: 'Admissions', href: '/admissions' },
  { label: 'Scholarships & Aid', href: '/admissions/scholarships' },
  { label: 'Academic Calendar', href: '/academics/calendar' },
  { label: 'Course Catalog', href: '/academics/catalog' },
];

const getInvolvedLinks: FooterLink[] = [
  { label: 'Apply Now', href: '/apply' },
  { label: 'Visit Us', href: '/visit' },
  { label: 'Request Information', href: '/request-info' },
];

export function FooterLinksSection({}: FooterLinksSectionProps) {
  return (
    <>
      {/* Mobile: Accordion Style */}
      <div className='w-full md:hidden'>
        <Accordion type='single' collapsible className='w-full '>
          <AccordionItem value='contact' className='border-white/20'>
            <AccordionTrigger className='px-6 py-5 text-lg font-normal hover:no-underline hover:bg-white/5 '>
              Contact
            </AccordionTrigger>
            <AccordionContent className='px-6 pb-6'>
              <FooterContact />
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value='about' className='border-white/20'>
            <AccordionTrigger className='px-6 py-5 text-lg font-normal hover:no-underline hover:bg-white/5'>
              About Us
            </AccordionTrigger>
            <AccordionContent className='px-6 pb-6'>
              <FooterLinksList links={aboutUsLinks} />
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value='academics' className='border-white/20'>
            <AccordionTrigger className='px-6 py-5 text-lg font-normal hover:no-underline hover:bg-white/5'>
              Academics
            </AccordionTrigger>
            <AccordionContent className='px-6 pb-6'>
              <FooterLinksList links={academicsLinks} />
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value='get-involved' className='border-white/20'>
            <AccordionTrigger className='px-6 py-5 text-lg font-normal hover:no-underline hover:bg-white/5'>
              Get Involved
            </AccordionTrigger>
            <AccordionContent className='px-6 pb-6'>
              <FooterLinksList links={getInvolvedLinks} />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      {/* Desktop: Grid Layout */}
      <div className='hidden md:flex w-full max-w-7xl justify-between md:gap-7 px-4'>
        <FooterContact />

        <nav className='flex flex-col justify-start items-start gap-4'>
          <h6>About Us</h6>
          <FooterLinksList links={aboutUsLinks} />
        </nav>

        <nav className='flex flex-col justify-start items-start gap-4'>
          <h6>Academics</h6>
          <FooterLinksList links={academicsLinks} />
        </nav>

        <nav className='flex flex-col justify-start items-start gap-4'>
          <h6>Get Involved</h6>
          <FooterLinksList links={getInvolvedLinks} />
        </nav>
      </div>
    </>
  );
}

type FooterLinksListProps = {
  links: FooterLink[];
};

function FooterLinksList({ links }: FooterLinksListProps) {
  return (
    <ul className='flex flex-col gap-1'>
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
  );
}
