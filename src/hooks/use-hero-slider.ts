import { useEffect, useRef, useState } from 'react';

type UseHeroSliderOptions = {
  totalSlides: number;
  autoPlayInterval?: number; // 밀리초 단위 (기본값: 5000)
  enableAutoPlay?: boolean; // 기본값: true
};

type UseHeroSliderReturn = {
  activeSlide: number;
  goToSlide: (index: number) => void;
  nextSlide: () => void;
  prevSlide: () => void;
  pauseAutoPlay: () => void;
  resumeAutoPlay: () => void;
  isPaused: boolean;
};

/**
 * Hero 슬라이더를 관리하는 커스텀 훅
 *
 * @param options - 슬라이더 옵션
 * @returns 슬라이더 상태 및 제어 함수들
 */
export function useHeroSlider({
  totalSlides,
  autoPlayInterval = 5000,
  enableAutoPlay = true,
}: UseHeroSliderOptions): UseHeroSliderReturn {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // 자동 재생 로직
  useEffect(() => {
    if (!enableAutoPlay || totalSlides <= 1 || isPaused) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      return;
    }

    intervalRef.current = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % totalSlides);
    }, autoPlayInterval);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [totalSlides, autoPlayInterval, enableAutoPlay, isPaused]);

  // 슬라이드 이동 함수
  const goToSlide = (index: number) => {
    if (index >= 0 && index < totalSlides) {
      setActiveSlide(index);
    }
  };

  // 다음 슬라이드
  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % totalSlides);
  };

  // 이전 슬라이드
  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  // 자동 재생 일시정지
  const pauseAutoPlay = () => {
    setIsPaused(true);
  };

  // 자동 재생 재개
  const resumeAutoPlay = () => {
    setIsPaused(false);
  };

  return {
    activeSlide,
    goToSlide,
    nextSlide,
    prevSlide,
    pauseAutoPlay,
    resumeAutoPlay,
    isPaused,
  };
}
