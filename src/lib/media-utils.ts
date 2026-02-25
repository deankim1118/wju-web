/**
 * Payload CMS 미디어(이미지) 유틸리티
 *
 * depth: 1 조회 시 image 필드는 `number | Media` 유니언 타입으로 반환됩니다.
 * - resolved(Media 객체)인 경우 → url / alt 직접 사용
 * - unresolved(number)인 경우 → fallback 사용
 */

import type { Media } from '@/payload-types';

export type PayloadImage = number | Media;

/**
 * Payload 이미지 필드에서 URL을 추출합니다.
 * 이미지가 없거나 미해석(number) 상태이면 기본 이미지를 반환합니다.
 */
export function resolveImageUrl(
  image: PayloadImage | null | undefined,
): string {
  if (image && typeof image === 'object' && image.url) {
    return image.url;
  }
  return '/wju-hero-img.png';
}

/**
 * Payload 이미지 필드에서 alt 텍스트를 추출합니다.
 * 이미지가 없거나 미해석(number) 상태이면 fallback 문자열을 반환합니다.
 */
export function resolveImageAlt(
  image: PayloadImage | null | undefined,
  fallback: string,
): string {
  if (image && typeof image === 'object') {
    return image.alt || fallback;
  }
  return fallback;
}
