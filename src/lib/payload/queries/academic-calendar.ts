/**
 * Academic Calendar Global 데이터 페칭
 *
 * 학사 일정(학기별 일정·행사)을 가져옵니다.
 * unstable_cache + On-demand Revalidation 사용.
 */

import { getPayloadClient } from '../payloadClient';
import { delay, getCachedData, isUndefinedIdError } from './cache-utils';

type AcademicCalendarQueryOptions = {
  depth?: number;
  draft?: boolean;
};

const MAX_ATTEMPTS = 3;
const RETRY_DELAY_MS = 200;

/**
 * 내부 페칭 함수 (캐시 MISS 시 DB 조회)
 * save 직후 findGlobal 'undefined id' 타이밍 이슈 시 짧은 대기 후 재시도.
 */
async function fetchAcademicCalendarData(
  options: AcademicCalendarQueryOptions = {},
) {
  const { depth = 1, draft = false } = options;
  const startTime = Date.now();

  for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt++) {
    try {
      console.log('🔴 [AcademicCalendar] DB 조회 중...');
      const payload = await getPayloadClient();

      const data = await payload.findGlobal({
        slug: 'academic-calendar',
        depth,
        draft,
      });

      const duration = Date.now() - startTime;

      if (!data) {
        console.warn('[AcademicCalendar] Global data not found.');
        return null;
      }

      console.log(`🟢 [AcademicCalendar] DB 조회 완료 (${duration}ms)`);
      return data;
    } catch (error) {
      const canRetry = isUndefinedIdError(error) && attempt < MAX_ATTEMPTS;
      if (canRetry) {
        await delay(RETRY_DELAY_MS);
        continue;
      }
      const err = error ?? new Error('Unknown error');
      console.error('[AcademicCalendar Fetch Error]', err);
      if (err instanceof Error && err.message) {
        console.error('Message:', err.message);
      }
      return null;
    }
  }
  return null;
}

/**
 * 캐싱된 Academic Calendar 데이터 페칭
 *
 * @param options - depth(기본 1), draft
 * @returns 학사 일정 Global 데이터
 */
export async function getAcademicCalendarData(
  options: AcademicCalendarQueryOptions = {},
) {
  const { depth = 1, draft = false } = options;

  return getCachedData(
    fetchAcademicCalendarData,
    depth,
    draft,
    {
      tag: 'academic-calendar-global',
      slug: 'academic-calendar',
    },
    '🟢 [AcademicCalendar]',
  );
}
