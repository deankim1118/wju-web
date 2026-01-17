import type { HeroSlide } from '@/types/hero';
import { ScrollReveal } from '../../scroll-animation/scroll-reveal';
import { HeroButton } from '../buttons/HeroButton';

type HeroContentProps = {
  slide: HeroSlide;
};

/**
 * Hero 콘텐츠 컴포넌트
 * 제목과 버튼을 렌더링합니다.
 */
export function HeroContent({ slide }: HeroContentProps) {
  const hasTitle = Boolean(slide?.title);
  const hasSubtitle = Boolean(slide?.subtitle);
  const hasButtons = Boolean(slide?.buttons && slide.buttons.length > 0);

  if (!hasTitle && !hasButtons) {
    return null;
  }

  return (
    <div className='relative z-10 text-center animate-in fade-in duration-700 md:py-5 max-h-full overflow-y-auto'>
      {(hasTitle || hasSubtitle) && (
        <ScrollReveal animateImmediately={true} variant='fade-up' delay={0} duration={0.8} className='flex-1 w-full'>
        <h1 className='hero-title text-white mb-10 md:mb-10 px-4  max-w-5xl'>
          {hasTitle && (
            <span className='block text-balance'>{slide.title}</span>
          )}
          {hasSubtitle && (
            <span className='block text-balance'>{slide.subtitle}</span>
          )}
        </h1>
        </ScrollReveal>
      )}
      {hasButtons && (
        <ScrollReveal animateImmediately={true} variant='fade-up' delay={0.3} duration={0.8} className='flex-1 w-full'>
        <div className='flex flex-col md:flex-row flex-wrap items-center justify-center gap-4 w-full px-8'>
          {slide.buttons!.map((button, index) => (
            <HeroButton
              key={button.id || index}
              variant={index === 0 ? 'outline' : 'primary'}
              className='w-full max-w-[470px]'
            >
              {button.label}
            </HeroButton>
            
          ))}
        </div>
        </ScrollReveal>
      )}
    </div>
  );
}
