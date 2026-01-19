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
  carouselContentClassName = '-ml-4',
  carouselItemClassName = 'pl-4 basis-[85%] sm:basis-1/2 lg:basis-1/3 rounded-none',
}: LinkCardsCarouselSectionProps) {
  const pathname = usePathname();
  const currentPath = normalizePath(pathname ?? '');

  const cards = shouldExcludeCurrentPath
    ? items.filter((card) => normalizePath(card.href) !== currentPath)
    : items;

  if (cards.length === 0) return null;

  // ✅ 핵심 로직 추가
  // 아이템이 3개 이하라면 XL 화면(1280px~)에서는 한눈에 다 보입니다.
  // 따라서 그때만 버튼을 숨기고, 4개 이상이면 버튼을 보여줍니다.
  const isStaticOnXL = cards.length <= 3;

  return (
    <section className={cn('relative overflow-hidden', className)}>
      <div className='absolute top-0 h-1.5 w-full bg-secondary' />
      {/* Background split */}
      <div aria-hidden className='absolute inset-0'>
        <div className={backgroundSplit.topClassName} />
        <div className={backgroundSplit.bottomClassName} />
      </div>

      <div className='relative z-10 mx-auto max-w-[1440px] px-6 section-padding-lg'>
        {/* Accent Line (Left) */}
        

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
            <CarouselContent 
              className={cn(
                carouselContentClassName, // 기본 -ml-4
                // 3개 이하면: 중앙 정렬 + 간격 살짝 조정
                isStaticOnXL ? 'xl:justify-center xl:gap-2' : '' 
              )}
            >
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
                'left-3 lg:left-2 md:size-10',
                'bg-white/10 text-white border border-white/20 backdrop-blur',
                'hover:bg-white/15',
                'disabled:hidden',
                // 👇 아이템이 3개 이하면 XL에서 숨기고, 아니면 보이게 함
                isStaticOnXL ? 'xl:hidden' : ''
              )}
            />
            <CarouselNext
              variant='ghost'
              className={cn(
                'right-3 lg:right-2 md:size-10',
                'bg-white/10 text-white border border-white/20 backdrop-blur',
                'hover:bg-white/15',
                'disabled:hidden',
                // 👇 아이템이 3개 이하면 XL에서 숨기고, 아니면 보이게 함
                isStaticOnXL ? 'xl:hidden' : ''
              )}
            />
          </Carousel>
        </div>
      </div>
    </section>
  );
}

