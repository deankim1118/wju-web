'use client';

import { HeroButton } from '@/components/hero-buttons';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { typoVariant } from '@/lib/typography';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { useState } from 'react';

export function Hero({ data }: { data: any }) {
  const [activeSlide, setActiveSlide] = useState(0);

  // 현재 활성 슬라이드의 이미지 가져오기
  const currentSlide = data?.slides?.[activeSlide];
  const imageUrl =
    currentSlide?.image?.url ||
    currentSlide?.image?.sizes?.hero?.url ||
    currentSlide?.image;
  const imageAlt =
    currentSlide?.image?.alt || currentSlide?.title || 'Hero image';

  return (
    <section className='relative flex flex-1 items-center justify-center overflow-hidden h-[70vh]'>
      {/* Background Image with AspectRatio */}
      <div className='absolute inset-0 w-full h-full'>
        <AspectRatio ratio={16 / 9} className='h-full w-full overflow-hidden'>
          <div className='relative h-full w-full'>
            {imageUrl ? (
              <Image
                src={
                  typeof imageUrl === 'string' ? imageUrl : imageUrl.url || ''
                }
                alt={imageAlt}
                fill
                className='object-cover'
                priority
                sizes='100vw'
              />
            ) : (
              <div className='h-full w-full bg-linear-to-br from-gray-400 via-gray-500 to-gray-400'>
                {/* Fallback background pattern when no image */}
                <div className='absolute left-0 top-0 h-full w-1/3 bg-gray-500/50 [clip-path:polygon(0_0,100%_0,0_100%)]' />
                <div className='absolute right-0 top-0 h-full w-1/3 bg-gray-500/50 [clip-path:polygon(100%_0,100%_100%,0_0)]' />
                <div className='absolute bottom-0 left-1/4 h-1/2 w-1/2 bg-gray-600/30 [clip-path:polygon(50%_0,100%_50%,50%_100%,0_50%)]' />
              </div>
            )}
          </div>
        </AspectRatio>
        {/* Overlay for better text readability */}
        <div className='absolute inset-0 bg-black/40' />
      </div>

      {/* Content */}
      <div className='relative z-10 text-center'>
        <h1
          className={cn(
            typoVariant('heroTitle', 'text-white', 'mb-12', 'px-4'),
          )}
        >
          <span className='block text-balance'>{data.slides[0].title}</span>
          <span className='block text-balance'>This Spring</span>
        </h1>
        <div className='flex flex-wrap items-center justify-center gap-4'>
          <HeroButton variant='outline'>ACADEMIC CALENDAR</HeroButton>
          <HeroButton variant='primary'>
            {data.slides[0].buttons[0].label}
          </HeroButton>
        </div>
      </div>

      {/* Carousel Indicators */}
      <div className='absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-2'>
        <button
          onClick={() => setActiveSlide(0)}
          className={`h-3 w-3 rounded-full transition-colors ${
            activeSlide === 0 ? 'bg-white' : 'bg-white/50'
          }`}
          aria-label='Slide 1'
        />
        <button
          onClick={() => setActiveSlide(1)}
          className={`h-3 w-3 rounded-full transition-colors ${
            activeSlide === 1 ? 'bg-white' : 'bg-white/50'
          }`}
          aria-label='Slide 2'
        />
      </div>
    </section>
  );
}
