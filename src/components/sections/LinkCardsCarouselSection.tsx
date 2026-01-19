'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { ScrollReveal } from '@/components/scroll-animation/scroll-reveal';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { cn } from '@/lib/utils';

export type LinkCarouselCardItem = {
  title: string;
  href: string;
  imageUrl: string;
  imageAlt: string;
  ctaLabel: string;
};

type BackgroundSplit = {
  /** e.g. 'h-2/5 bg-muted' */
  topClassName: string;
  /** e.g. 'h-3/5 bg-primary' */
  bottomClassName: string;
};

type LinkCardsCarouselSectionProps = {
  title: string;
  items: readonly LinkCarouselCardItem[];
  className?: string;

  /**
   * When enabled, the current URL path will be excluded from `items`.
   * Useful when `items` contain a link to the current page.
   */
  shouldExcludeCurrentPath?: boolean;

  backgroundSplit?: BackgroundSplit;

  /** Advanced styling overrides (keep defaults for consistency). */
  carouselClassName?: string;
  carouselContentClassName?: string;
  carouselItemClassName?: string;
};

function normalizePath(path: string) {
  if (path === '/') return '/';
  return path.replace(/\/+$/, '');
}

export function LinkCardsCarouselSection({
  title,
  items,
  className,
  shouldExcludeCurrentPath = false,
  backgroundSplit = {
    topClassName: 'h-2/5 bg-muted',
    bottomClassName: 'h-3/5 bg-primary',
  },
  carouselClassName = 'relative',
  carouselContentClassName = '-ml-4 xl:items-center xl:justify-center xl:gap-2',
  carouselItemClassName = 'pl-4 basis-[85%] sm:basis-1/2 lg:basis-1/3 rounded-none aspect-3/4 max-w-[330px] md:max-w-[380px] max-h-[440px] md:max-h-[500px]',
}: LinkCardsCarouselSectionProps) {
  const pathname = usePathname();
  const currentPath = normalizePath(pathname ?? '');

  const cards = shouldExcludeCurrentPath
    ? items.filter((card) => normalizePath(card.href) !== currentPath)
    : items;

  if (cards.length === 0) return null;

  return (
    <section className={cn('relative overflow-hidden', className)}>
      {/* Background split */}
      <div aria-hidden className='absolute inset-0'>
        <div className={backgroundSplit.topClassName} />
        <div className={backgroundSplit.bottomClassName} />
      </div>

      <div className='relative z-10 mx-auto max-w-[1440px] px-6 section-padding-lg'>
        {/* Accent Line (Left) */}
        <div className='absolute left-0 top-0 h-1.5 w-full max-w-[472px] bg-secondary' />

        {/* Title */}
        <div className='flex flex-col items-center gap-6'>
          <ScrollReveal variant='fade-up' delay={0} duration={0.7}>
            <h2>{title}</h2>
          </ScrollReveal>
          <div className='w-24 h-0.5 bg-primary' />
        </div>

        {/* Carousel */}
        <div className='mt-12'>
          <Carousel
            opts={{ align: 'start', loop: cards.length > 2 }}
            className={carouselClassName}
          >
            <CarouselContent className={carouselContentClassName}>
              {cards.map((card) => (
                <CarouselItem key={card.href} className={carouselItemClassName}>
                  <Link
                    href={card.href}
                    className={cn(
                      'group block relative overflow-hidden',
                      'shadow-[0px_10px_30px_rgba(0,0,0,0.18)]',
                      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 w-full h-full',
                    )}
                    aria-label={`Discover ${card.title}`}
                  >
                    <div className='relative w-full h-full aspect-3/4'>
                      <Image
                        src={card.imageUrl}
                        alt={card.imageAlt}
                        fill
                        className={cn(
                          'object-cover',
                          'transition-transform duration-700 ease-out',
                          'group-hover:scale-[1.06]',
                        )}
                        sizes='(max-width: 640px) 85vw, (max-width: 1024px) 50vw, 33vw'
                        priority={false}
                      />

                      {/* Overlay */}
                      <div
                        className={cn(
                          'absolute inset-0',
                          'bg-black/55',
                          'transition-colors duration-300',
                          'group-hover:bg-black/45',
                        )}
                      />

                      {/* Content */}
                      <div className='absolute inset-0 flex items-center justify-center px-8 text-center text-white'>
                        <div className='flex flex-col items-center gap-4'>
                          <ScrollReveal
                            variant='fade-up'
                            delay={0}
                            duration={0.8}
                          >
                            {/* Fixed title box keeps CTA aligned across cards */}
                            <div className='h-20 md:h-24 flex items-center'>
                              <h3 className='font-serif text-2xl md:text-4xl uppercase tracking-widest leading-tight line-clamp-2'>
                                {card.title}
                              </h3>
                            </div>
                          </ScrollReveal>

                          <ScrollReveal
                            variant='fade-up'
                            delay={0.3}
                            duration={0.8}
                          >
                            <div className='flex flex-col items-center gap-3'>
                              <div className='h-px w-12 bg-white/60' />
                              <div className='font-serif text-lg md:text-xl uppercase tracking-widest text-white/95 leading-tight'>
                                {card.ctaLabel}
                              </div>
                            </div>
                          </ScrollReveal>
                        </div>
                      </div>
                    </div>
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious
              variant='ghost'
              className={cn(
                'left-3 md:left-4',
                'bg-white/10 text-white border border-white/20 backdrop-blur',
                'hover:bg-white/15',
                'disabled:hidden',
              )}
            />
            <CarouselNext
              variant='ghost'
              className={cn(
                'right-3 md:right-4',
                'bg-white/10 text-white border border-white/20 backdrop-blur',
                'hover:bg-white/15',
                'disabled:hidden',
              )}
            />
          </Carousel>
        </div>
      </div>
    </section>
  );
}

