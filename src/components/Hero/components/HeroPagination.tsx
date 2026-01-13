import type { CarouselApi } from '@/components/ui/carousel';

type HeroPaginationProps = {
  api: CarouselApi | undefined;
  count: number;
  current: number;
};

/**
 * Hero 페이지네이션 컴포넌트
 * Carousel 하단의 페이지네이션 dots를 렌더링합니다.
 *
 * @param api - Carousel API 인스턴스
 * @param count - 전체 슬라이드 개수
 * @param current - 현재 활성 슬라이드 인덱스
 */
export function HeroPagination({ api, count, current }: HeroPaginationProps) {
  if (count <= 1) {
    return null;
  }

  return (
    <div className='absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-2'>
      {Array.from({ length: count }).map((_, index) => (
        <button
          key={index}
          onClick={() => api?.scrollTo(index)}
          className={`h-3 w-3 rounded-full transition-all duration-300 ${
            current === index ? 'bg-white w-8' : 'bg-white/50 hover:bg-white/75'
          }`}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  );
}
