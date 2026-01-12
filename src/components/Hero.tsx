'use client';

import { HeroBackground } from '@/components/hero-components/HeroBackground';
import { HeroContent } from '@/components/hero-components/HeroContent';
import { HeroOverlay } from '@/components/hero-components/HeroOverlay';
import { HeroPagination } from '@/components/hero-components/HeroPagination';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '@/components/ui/carousel';
import { getHeroImageAlt } from '@/lib/utils/hero';
import type { HeroProps, HeroSlide } from '@/types/hero';
import Autoplay from 'embla-carousel-autoplay';
import { useEffect, useMemo, useRef, useState } from 'react';

/**
 * 기본 슬라이드 (Payload CMS에서 슬라이드 데이터가 없을 때 사용)
 */
const DEFAULT_SLIDE: HeroSlide = {
  id: 'default',
  title: null,
  subtitle: null,
  image: null, // HeroBackground에서 wju-hero-img.png로 fallback
  mobileImage: null,
  layoutSettings: { isPoster: false },
  buttons: [],
};

/**
 * Hero 섹션 컴포넌트
 * Payload CMS에서 가져온 Hero 데이터를 표시하는 메인 히어로 섹션입니다.
 *
 * 성능 최적화:
 * - Next.js Image 컴포넌트가 자동으로 브라우저 캐싱을 활용
 * - 같은 URL의 이미지는 브라우저가 캐시에서 자동으로 가져옴
 * - 첫 번째 슬라이드만 priority로 설정하여 초기 로딩 최적화
 */
export function Hero({ data }: HeroProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  // Autoplay 플러그인 설정
  const autoplayPlugin = useRef(
    Autoplay({
      delay: 50000,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    }),
  );

  // 슬라이드 데이터 가져오기 (타입 단언)
  const originalSlides = (data?.slides as HeroSlide[]) || [];

  // 슬라이드가 없으면 기본 슬라이드 사용 (기본 이미지 표시)
  const slides = originalSlides.length > 0 ? originalSlides : [DEFAULT_SLIDE];

  // Autoplay 플러그인을 슬라이드가 2개 이상일 때만 적용 (메모이제이션)
  const plugins = useMemo(
    () => (slides.length > 1 ? [autoplayPlugin.current] : []),
    [slides.length],
  );

  // Carousel API를 통한 현재 슬라이드 추적
  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <Carousel
      setApi={setApi}
      opts={{
        align: 'start',
        loop: true,
      }}
      plugins={plugins}
      className='relative w-full h-[78vh] md:h-[75vh]'
    >
      <CarouselContent className='h-full ml-0'>
        {slides.map((slide, index) => {
          // title이나 버튼이 있는지 확인
          const hasContent =
            Boolean(slide.title) ||
            Boolean(slide.buttons && slide.buttons.length > 0);

          // 이미지 alt 텍스트 추출
          const imageAlt = getHeroImageAlt(
            slide.image,
            slide.title || 'Hero image',
          );

          return (
            <CarouselItem
              key={slide.id || index}
              className='relative flex items-center justify-center overflow-hidden h-full pl-0'
            >
              {/* Background Image */}
              <HeroBackground
                image={slide.image ?? null}
                mobileImage={slide.mobileImage ?? null}
                isPoster={slide.layoutSettings?.isPoster ?? false}
                imageAlt={imageAlt}
                hasContent={hasContent}
                priority={index === 0}
              />

              {/* Overlay */}
              <HeroOverlay hasContent={hasContent} />

              {/* Content */}
              <HeroContent slide={slide} />
            </CarouselItem>
          );
        })}
      </CarouselContent>

      {/* Pagination Dots */}
      <HeroPagination api={api} count={count} current={current} />
    </Carousel>
  );
}
