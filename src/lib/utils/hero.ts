import type { HeroImage } from '@/types/hero';

/**
 * Hero 이미지에서 URL을 추출하는 유틸리티 함수
 *
 * @param image - Media 객체, 문자열 URL, 또는 null/undefined
 * @returns 이미지 URL 문자열 또는 null
 */
export function getHeroImageUrl(image: HeroImage): string | null {
  if (!image) {
    return null;
  }

  // 숫자인 경우 (관계형 데이터가 아직 풀리지 않은 경우)
  if (typeof image === 'number') {
    return null;
  }

  // 문자열인 경우 그대로 반환
  if (typeof image === 'string') {
    return image;
  }

  // Media 객체인 경우
  if (typeof image === 'object' && 'url' in image) {
    // sizes.hero.url 우선 확인
    if (
      'sizes' in image &&
      image.sizes &&
      typeof image.sizes === 'object' &&
      'hero' in image.sizes &&
      image.sizes.hero &&
      typeof image.sizes.hero === 'object' &&
      'url' in image.sizes.hero &&
      typeof image.sizes.hero.url === 'string'
    ) {
      return image.sizes.hero.url;
    }

    // 기본 url 확인
    if (typeof image.url === 'string') {
      return image.url;
    }
  }

  return null;
}

/**
 * Hero 이미지에서 alt 텍스트를 추출하는 유틸리티 함수
 *
 * @param image - Media 객체 또는 null/undefined
 * @param fallback - alt가 없을 때 사용할 대체 텍스트
 * @returns alt 텍스트 문자열
 */
export function getHeroImageAlt(
  image: HeroImage,
  fallback: string = 'Hero image',
): string {
  if (!image || typeof image !== 'object' || !('alt' in image)) {
    return fallback;
  }

  if (typeof image.alt === 'string' && image.alt.trim()) {
    return image.alt;
  }

  return fallback;
}
