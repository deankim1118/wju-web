import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Typography 유틸리티 함수
 * 피그마 디자인 시스템에 맞춘 타이포그래피 클래스를 제공합니다.
 */

// Playfair Display (제목용)
export const typography = {
  // Hero Title - 75px
  heroTitle:
    'font-serif lg:text-7xl md:text-6xl text-5xl font-bold text-center leading-snug',

  // H1 - 36px
  h1: 'font-serif text-4xl leading-[51px] font-medium tracking-[0.02em]',
  h1Bold: 'font-serif text-4xl leading-[51px] font-bold tracking-[0.02em]',

  // H2 - 28px (Playfair Display)
  h2Playfair:
    'font-serif text-3xl leading-[27px] font-bold tracking-[0.05em] uppercase',

  // Footer 제목 - 24px
  footerTitle: 'font-serif text-2xl leading-[27px] font-bold',

  // Inter (본문/버튼용)
  // Button - 20px
  button20: 'font-sans text-xl leading-[22px] font-normal uppercase',

  // Button SemiBold - 16px
  button16:
    'font-sans text-base leading-[19px] font-semibold tracking-[0.12em] uppercase',

  // Hero Button - 반응형 (모바일 16px, 데스크탑 20px)
  heroButton:
    'font-sans text-base md:text-xl leading-[19px] md:leading-[22px] font-semibold md:font-normal tracking-[0.12em] md:tracking-[0em] uppercase',

  // Button - 14px
  button14: 'font-sans text-sm leading-[17px] font-normal uppercase',

  // Subtitle - 20px
  subtitle: 'font-sans text-xl leading-6 font-normal',

  // Body Base - 19.2px (1.2rem)
  bodyBase: 'font-sans text-lg leading-7 font-normal',

  // Description - 16px
  description: 'font-sans text-base leading-6 font-normal',

  // Description - 14px
  description14: 'font-sans text-sm leading-6 font-normal',

  // H2 - 28px (Inter)
  h2Inter:
    'font-sans text-3xl leading-[27px] font-bold tracking-[0.05em] uppercase',

  // 일반 텍스트 - 18px
  text18: 'font-sans text-lg leading-[22px] font-normal',

  // Garamond (인용구/특별한 텍스트)
  // 인용구 - 48px
  quote: 'font-garamond text-5xl leading-[54px] font-normal',

  // Footer 제목 - 24px
  footerTitleGaramond: 'font-garamond text-2xl leading-[27px] font-bold',
} as const;

/**
 * Typography 클래스를 조합하는 헬퍼 함수
 */
export function typo(...classes: ClassValue[]) {
  return twMerge(clsx(classes));
}

/**
 * Typography variant를 사용하는 헬퍼 함수
 * 예: typoVariant('h1', 'text-primary')
 */
export function typoVariant(
  variant: keyof typeof typography,
  ...additionalClasses: ClassValue[]
) {
  return twMerge(clsx(typography[variant], ...additionalClasses));
}
