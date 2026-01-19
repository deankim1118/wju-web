import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import Image from 'next/image';
import Link from 'next/link';
import { ScrollReveal } from '../scroll-animation/scroll-reveal';

type LinkConfig = {
  text: string;
  href: string;
  showArrow?: boolean;
};

const contentTextVariants = cva('whitespace-pre-line', {
  variants: {
    variant: {
      /** 기존 기본값: 굵게 + 대문자 + 자간 넓게 (eyebrow 스타일) */
      eyebrow: 'font-bold uppercase tracking-widest',
      /** 일반 본문 */
      body: 'font-normal normal-case tracking-normal',
      /** 강조 본문 */
      bodyStrong: 'font-semibold normal-case tracking-normal',
    },
  },
  defaultVariants: {
    variant: 'eyebrow',
  },
});

type TwoRowTextSectionProps = {
  title: string;
  content: string;
  link?: LinkConfig;
  imageUrl?: string;
  imageAlt?: string;
  titleColor?: string;
  textColor?: string;
  /**
   * Title 섹션 ScrollReveal delay (기본값: 0)
   */
  titleRevealDelay?: number;
  /**
   * Content 섹션 ScrollReveal delay (기본값: 0.3)
   */
  contentRevealDelay?: number;
  /**
   * `content` 텍스트 프리셋 스타일.
   * - 자동완성으로 선택지를 볼 수 있어요.
   */
  contentTextVariant?: VariantProps<typeof contentTextVariants>['variant'];
  /**
   * `content` 텍스트에 추가로 더할 클래스 (미세조정용).
   * - `contentTextVariant`로 큰 틀을 고르고, 여기로 세부 커스텀을 권장해요.
   */
  contentTextClassName?: string;
  linkColor?: string;
  backgroundColor?: string;
  spacing?: 'tight' | 'normal' | 'loose';
  className?: string;
};

export function TwoRowTextSection({
  title,
  content,
  link,
  imageUrl,
  imageAlt,
  titleColor = 'text-secondary',
  textColor = '',
  titleRevealDelay = 0.3,
  contentRevealDelay = 0.5,
  contentTextVariant = 'eyebrow',
  contentTextClassName = '',
  linkColor = 'text-secondary',
  backgroundColor = 'bg-background',
  spacing = 'tight',
  className = '',
}: TwoRowTextSectionProps) {
  const spacingMap = {
    tight: 'py-8',
    normal: 'section-padding-sm',
    loose: 'section-padding-lg',
  };

  return (
    <section
      className={`${backgroundColor} ${spacingMap[spacing]} ${className}`}
    >
      <div className='container mx-auto px-6 max-w-6xl'>
        <div className='flex flex-col justify-between items-start gap-8 md:gap-12'>
          {/* Title Section */}
          <ScrollReveal variant='fade-up' delay={titleRevealDelay} duration={0.7}>
          <div className='flex-1 italic'>
            <h1 className={titleColor}>{title}</h1>
          </div>
          </ScrollReveal>
          {/* Content Section */}
          <ScrollReveal variant='fade-up' delay={contentRevealDelay} duration={0.7}>
          <div className=' flex flex-col md:flex-row justify-between items-end md:items-start gap-6 w-full'>
            <div className='flex-1 flex flex-col justify-start items-start gap-4 lg:gap-6 w-full'>
              <p
                className={cn(
                  contentTextVariants({ variant: contentTextVariant }),
                  textColor,
                  contentTextClassName,
                )}
              >
                {content}
              </p>

              {/* Optional Link */}
              {link && (
                <Link
                  href={link.href}
                  className={`group inline-flex items-center gap-2 ${linkColor} text-sm md:text-base font-semibold uppercase tracking-wider transition-all hover:gap-3 hover:opacity-80`}
                >
                  {link.text}
                  {link.showArrow !== false && (
                    <span className='transition-transform group-hover:translate-x-1'>
                      &gt;
                    </span>
                  )}
                </Link>
              )}
            </div>
           
            {/* 오른쪽 이미지 영역 (Optional) */}
            {imageUrl && (
              <div className='w-2/5 md:w-2/8 h-auto z-10'>
                <div className='relative w-full aspect-4/3 max-w-sm'>
                  <Image
                    src={imageUrl}
                    alt={imageAlt || 'Section image'}
                    fill
                    className='object-cover drop-shadow-2xl'
                  />
                </div>
              </div>
            )}
          </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
