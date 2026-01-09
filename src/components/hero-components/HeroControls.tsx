type HeroControlsProps = {
  totalSlides: number;
  activeSlide: number;
  onSlideChange: (index: number) => void;
};

/**
 * Hero 컨트롤 컴포넌트
 * 하단 인디케이터(점) 버튼들을 렌더링합니다.
 */
export function HeroControls({
  totalSlides,
  activeSlide,
  onSlideChange,
}: HeroControlsProps) {
  if (totalSlides <= 1) {
    return null;
  }

  return (
    <div className='absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-2'>
      {Array.from({ length: totalSlides }).map((_, index) => (
        <button
          key={index}
          onClick={() => onSlideChange(index)}
          className={`h-3 w-3 rounded-full transition-colors ${
            activeSlide === index ? 'bg-white' : 'bg-white/50'
          }`}
          aria-label={`Slide ${index + 1}`}
        />
      ))}
    </div>
  );
}
