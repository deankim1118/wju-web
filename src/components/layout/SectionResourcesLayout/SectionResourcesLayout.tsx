import { LinkCardsCarouselSection } from '@/components/sections/LinkCardsCarouselSection';
import type { LinkCarouselCardItem } from '@/components/sections/LinkCardsCarouselSection';
import { ScrollReveal } from '@/components/scroll-animation/scroll-reveal';
import { Button } from '@/components/ui/button';
import { callToActionContent } from '@/config/home-content';
import { ArrowRight, CircleAlert } from 'lucide-react';
import Link from 'next/link';
import { SectionSidebar, type SectionSidebarConfig } from './SectionSidebar';

export type SectionResourcesLayoutProps = {
  children: React.ReactNode;
  /** Small label above the title (e.g. "Academics", "Admissions") */
  sectionLabel: string;
  /** Main page title in the header */
  title: string;
  /** Sidebar nav config */
  sidebarConfig: SectionSidebarConfig;
  /** href for the primary CTA (e.g. Request Info) */
  primaryCtaHref: string;
  /** Label for the primary CTA button */
  primaryCtaLabel: string;
  /** href for the Apply button */
  applyHref: string;
  /** Optional bottom link cards section (e.g. Academic Departments) */
  linkCardsSection?: {
    title: string;
    items: readonly LinkCarouselCardItem[];
  };
};

export function SectionResourcesLayout({
  children,
  sectionLabel,
  title,
  sidebarConfig,
  primaryCtaHref,
  primaryCtaLabel,
  applyHref,
  linkCardsSection,
}: SectionResourcesLayoutProps) {
  return (
    <>
      <header className='border-b border-border bg-background'>
        <div className='mx-auto max-w-7xl px-6 pt-14 pb-10 lg:px-10 xl:px-14 lg:pt-20 lg:pb-14'>
          <div className='flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between lg:gap-12'>
            <div>
              <p className='font-sans text-xs uppercase tracking-[0.2em] text-muted-foreground'>
                {sectionLabel}
              </p>
              <h1 className='hero-title-sm text-start font-light tracking-tight text-primary lg:tracking-tighter max-w-2xl'>
                {title}
              </h1>
              <div className='mt-6 h-0.5 w-12 bg-secondary' aria-hidden />
            </div>
            <div className='flex flex-wrap gap-0 shrink-0'>
              <Button
                variant='outline'
                size='icon-sm'
                className='text-sm md:text-base font-semibold md:font-normal uppercase rounded-none border-primary text-primary hover:bg-primary hover:text-primary-foreground w-full sm:w-auto px-4 py-3'
                asChild
              >
                <Link
                  href={primaryCtaHref}
                  className='flex items-center justify-center gap-2'
                >
                  <CircleAlert className='size-4 md:size-5 shrink-0 text-rose-500' />
                  <span className='truncate'>{primaryCtaLabel}</span>
                  <ArrowRight className='size-4 md:size-5 shrink-0 ' />
                </Link>
              </Button>
              <Button
                size='icon-sm'
                className='text-sm md:text-base font-semibold md:font-normal uppercase rounded-none bg-secondary hover:bg-primary text-secondary-foreground w-full sm:w-auto px-4 py-3'
                asChild
              >
                <Link
                  href={applyHref}
                  className='flex items-center justify-center gap-2'
                >
                  <span>Apply</span>
                  <ArrowRight className='size-4 md:size-5 shrink-0' />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className='bg-background'>
        <div className='mx-auto max-w-7xl px-6 section-padding-sm lg:px-10 xl:px-14'>
          <div className='flex flex-col gap-16 lg:flex-row lg:gap-20'>
            <SectionSidebar config={sidebarConfig} />
            <main className='min-w-0 flex-1 space-y-20 lg:max-w-208'>
              <ScrollReveal variant='zoom-in' delay={0} duration={0.5}>
                {children}
              </ScrollReveal>
            </main>
          </div>
        </div>
      </div>
      {linkCardsSection && (
        <LinkCardsCarouselSection
          title={linkCardsSection.title}
          items={linkCardsSection.items}
          shouldExcludeCurrentPath
        />
      )}
    </>
  );
}
