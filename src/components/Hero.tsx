'use client';

import { HeroBackground } from '@/components/hero-components/HeroBackground';
import { HeroContent } from '@/components/hero-components/HeroContent';
import { HeroControls } from '@/components/hero-components/HeroControls';
import { HeroOverlay } from '@/components/hero-components/HeroOverlay';
import { useHeroSlider } from '@/hooks/use-hero-slider';
import { getHeroImageAlt } from '@/lib/utils/hero';
import type { HeroProps } from '@/types/hero';

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
  // 슬라이드 데이터가 없으면 빈 배열로 처리
  const slides = data?.slides || [];

  // 슬라이드가 없으면 빈 화면 반환
  if (slides.length === 0) {
    return null;
  }

  // 슬라이더 훅 사용
  const { activeSlide, goToSlide, pauseAutoPlay, resumeAutoPlay } =
    useHeroSlider({
      totalSlides: slides.length,
      autoPlayInterval: 500000,
      enableAutoPlay: true,
    });

  // 현재 활성 슬라이드의 데이터 가져오기
  const currentSlide = slides[activeSlide];

  if (!currentSlide) {
    return null;
  }

  // title이나 버튼이 있는지 확인
  const hasContent =
    Boolean(currentSlide.title) ||
    Boolean(currentSlide.buttons && currentSlide.buttons.length > 0);

  // 이미지 alt 텍스트 추출
  const imageAlt = getHeroImageAlt(
    currentSlide.image,
    currentSlide.title || 'Hero image',
  );

  return (
    <section
      className='relative flex flex-1 items-center justify-center overflow-hidden h-[70vh]'
      onMouseEnter={pauseAutoPlay}
      onMouseLeave={resumeAutoPlay}
    >
      {/* Background Image */}
      <HeroBackground
        key={`hero-bg-${currentSlide?.id ?? activeSlide}`}
        image={currentSlide.image}
        imageAlt={imageAlt}
        hasContent={hasContent}
        priority={activeSlide === 0}
      />

      {/* Overlay */}
      <HeroOverlay hasContent={hasContent} />

      {/* Content */}
      <HeroContent
        key={`hero-content-${currentSlide?.id ?? activeSlide}`}
        slide={currentSlide}
      />

      {/* Controls */}
      <HeroControls
        totalSlides={slides.length}
        activeSlide={activeSlide}
        onSlideChange={goToSlide}
      />
    </section>
  );
}
