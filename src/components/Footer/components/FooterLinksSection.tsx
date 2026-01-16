'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { footerNavigation, type NavLink } from '@/config/navigation';
import Link from 'next/link';
import type { ReactNode } from 'react';

type FooterLinksSectionProps = {
  contactElement: ReactNode;
};

export function FooterLinksSection({
  contactElement,
}: FooterLinksSectionProps) {
  return (
    <>
      {/* Mobile: Accordion Style */}
      <div className='w-full md:hidden'>
        <Accordion type='single' collapsible className='w-full'>
          <AccordionItem value='contact' className='border-white/20'>
            <AccordionTrigger className='px-6 py-5 text-lg font-normal hover:no-underline hover:bg-white/5'>
              Contact
            </AccordionTrigger>
            <AccordionContent className='px-6 pb-6'>
              {contactElement}
            </AccordionContent>
          </AccordionItem>

          {footerNavigation.map((section) => (
            <AccordionItem
              key={section.title}
              value={section.title.toLowerCase().replace(/\s+/g, '-')}
              className='border-white/20'
            >
              <AccordionTrigger className='px-6 py-5 text-lg font-normal hover:no-underline hover:bg-white/5'>
                {section.title}
              </AccordionTrigger>
              <AccordionContent className='px-6 pb-6'>
                <FooterLinksList links={section.links} />
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      {/* Desktop: Grid Layout */}
      <div className='hidden md:flex w-full max-w-7xl justify-between md:gap-7 px-4'>
        {contactElement}

        {footerNavigation.map((section) => (
          <nav
            key={section.title}
            className='flex flex-col justify-start items-start gap-4'
          >
            <h6>{section.title}</h6>
            <FooterLinksList links={section.links} />
          </nav>
        ))}
      </div>
    </>
  );
}

type FooterLinksListProps = {
  links: NavLink[];
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
