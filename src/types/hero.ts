import type { Hero, Media } from '@/payload-types';

/**
 * Hero 슬라이드의 이미지 데이터 타입
 * Media 객체, 숫자 ID, 문자열 URL을 받을 수 있습니다.
 */
export type HeroImage = Media | number | string | null | undefined;

/**
 * Hero 버튼 타입
 */
export type HeroButtonData = {
  label: string;
  link: string;
  id?: string | null;
};

/**
 * Hero 슬라이드 타입
 */
export type HeroSlide = {
  image: number | Media | null;
  mobileImage?: number | Media | null; // 모바일 전용 이미지 (선택)
  layoutSettings?: {
    isPoster?: boolean; // 포스터 모드 (true: 전체 보임, false: 화면 꽉 채움)
  } | null;
  title?: string | null;
  subtitle?: string | null;
  description?: string | null;
  buttons?: HeroButtonData[] | null;
  id?: string | null;
};

/**
 * Hero 데이터 타입 (Payload에서 가져온 데이터)
 */
export type HeroData = Hero;

/**
 * Hero 컴포넌트 Props 타입
 */
export type HeroProps = {
  data: HeroData | null;
};
