/**
 * Footer Global 데이터 페칭 함수
 *
 * Payload CMS의 Footer 글로벌 데이터를 가져옵니다.
 * 연락처 정보를 포함합니다.
 *
 * 🚀 Performance: unstable_cache를 사용한 On-demand Revalidation 전략
 * - 캐시는 영구 보관되며, Payload Admin에서 데이터 수정 시에만 갱신됩니다.
 * - Cache Tag: 'footer-global'을 사용하여 선택적 무효화가 가능합니다.
 */

import { getPayloadClient } from '../payloadClient';
import { delay, getCachedData, isUndefinedIdError } from './cache-utils';

type FooterQueryOptions = {
  depth?: number;
  draft?: boolean;
};

const MAX_ATTEMPTS = 3;
const RETRY_DELAY_MS = 200;

/**
 * 내부 페칭 함수 (캐싱되지 않은 원본)
 * 이 함수가 호출되면 = 캐시 MISS (DB 조회 발생).
 * save 직후 findGlobal 'undefined id' 타이밍 이슈 시 짧은 대기 후 재시도.
 */
async function fetchFooterData(options: FooterQueryOptions = {}) {
  const { depth = 0, draft = false } = options;
  const startTime = Date.now();

  for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt++) {
    try {
      console.log('🔴 [Footer] DB 조회 중...');
      const payload = await getPayloadClient();

      const footerData = await payload.findGlobal({
        slug: 'footer',
        depth,
        draft,
      });

      const duration = Date.now() - startTime;

      if (!footerData) {
        console.warn('[Footer] Global data not found.');
        return null;
      }

      console.log(`🟢 [Footer] DB 조회 완료 (${duration}ms)`);
      return footerData;
    } catch (error) {
      const canRetry = isUndefinedIdError(error) && attempt < MAX_ATTEMPTS;
      if (canRetry) {
        await delay(RETRY_DELAY_MS);
        continue;
      }
      const err = error ?? new Error('Unknown error');
      console.error('[Footer Fetch Error]', err);
      if (err instanceof Error && err.message) {
        console.error('Message:', err.message);
      }
      return null;
    }
  }
  return null;
}

/**
 * 캐싱된 Footer 데이터 페칭 함수
 *
 * @param options - depth, draft 옵션
 * @returns Footer 글로벌 데이터
 *
 * 🔍 테스트:
 * - 첫 호출: fetchFooterData 실행 (캐시 MISS) → DB 조회
 * - 이후 호출: 캐시에서 즉시 반환 (캐시 HIT) → DB 조회 없음
 *
 * ✅ 개선: depth나 draft가 바뀌어도 각각 별도의 캐시로 관리됨
 */
export async function getFooterData(options: FooterQueryOptions = {}) {
  const { depth = 0, draft = false } = options;

  return getCachedData(
    fetchFooterData,
    depth,
    draft,
    {
      tag: 'footer-global',
      slug: 'footer',
    },
    '🟢 [Footer]',
  );
}
