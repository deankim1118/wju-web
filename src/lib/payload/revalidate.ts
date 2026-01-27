/**
 * Payload CMS 캐시 무효화 유틸리티
 *
 * Payload Global이나 Collection의 데이터가 변경될 때
 * Next.js 캐시를 무효화하는 헬퍼 함수들입니다.
 *
 * 🎯 사용 시나리오:
 * - Payload Admin에서 데이터 수정 시 (afterChange 훅)
 * - API 엔드포인트에서 수동 재검증 시
 */

import { revalidateTag } from 'next/cache';

/**
 * Footer Global 캐시 무효화
 *
 * @description Footer 데이터가 변경될 때 호출하여 캐시를 즉시 갱신합니다.
 */
export function revalidateFooter() {
  try {
    revalidateTag('footer-global');
    console.log('🔄 [Footer] 캐시 무효화 완료 - 다음 요청 시 DB 조회');
  } catch (error) {
    console.error('[Cache Revalidation Error] Footer:', error);
  }
}

/**
 * Hero Global 캐시 무효화
 *
 * @description Hero 데이터가 변경될 때 호출하여 캐시를 즉시 갱신합니다.
 */
export function revalidateHero() {
  try {
    revalidateTag('hero-global');
    console.log('🔄 [Hero] 캐시 무효화 완료 - 다음 요청 시 DB 조회');
  } catch (error) {
    console.error('[Cache Revalidation Error] Hero:', error);
  }
}

/**
 * Chairman's Message Global 캐시 무효화
 *
 * @description Chairman's Message 데이터가 변경될 때 호출하여 캐시를 즉시 갱신합니다.
 */
export function revalidateChairmanMessage() {
  try {
    revalidateTag('chairman-message-global');
    console.log('🔄 [ChairmanMessage] 캐시 무효화 완료 - 다음 요청 시 DB 조회');
  } catch (error) {
    console.error('[Cache Revalidation Error] ChairmanMessage:', error);
  }
}

/**
 * Academic Calendar Global 캐시 무효화
 *
 * @description 학사 일정 데이터가 변경될 때 호출하여 캐시를 즉시 갱신합니다.
 */
export function revalidateAcademicCalendar() {
  try {
    revalidateTag('academic-calendar-global');
    console.log('🔄 [AcademicCalendar] 캐시 무효화 완료 - 다음 요청 시 DB 조회');
  } catch (error) {
    console.error('[Cache Revalidation Error] AcademicCalendar:', error);
  }
}

/**
 * 모든 Global 캐시 무효화
 *
 * @description 전체 Global 데이터 캐시를 한 번에 갱신해야 할 때 사용합니다.
 */
export function revalidateAllGlobals() {
  try {
    revalidateFooter();
    revalidateHero();
    revalidateChairmanMessage();
    revalidateAcademicCalendar();
    console.log('🔄 [All] 모든 캐시 무효화 완료');
  } catch (error) {
    console.error('[Cache Revalidation Error] All globals:', error);
  }
}

/**
 * 특정 태그의 캐시 무효화
 *
 * @param tag - 무효화할 캐시 태그
 * @description 커스텀 캐시 태그를 무효화할 때 사용합니다.
 */
export function revalidateCacheTag(tag: string) {
  try {
    revalidateTag(tag);
    console.log(`🔄 [Cache] Tag '${tag}' revalidated successfully.`);
  } catch (error) {
    console.error(`[Cache Revalidation Error] Tag '${tag}':`, error);
  }
}
