/**
 * Catalog Global 데이터 페칭
 *
 * 입학 요강 PDF 및 타이틀/연도 정보를 가져옵니다.
 * unstable_cache + On-demand Revalidation 사용.
 * 1년에 1~2회 변경되므로 캐시 효율 극대화.
 */

import { getPayloadClient } from '../payloadClient';
import { delay, getCachedData, isUndefinedIdError } from './cache-utils';

type CatalogQueryOptions = {
  depth?: number;
  draft?: boolean;
};

const MAX_ATTEMPTS = 3;
const RETRY_DELAY_MS = 200;

/**
 * 내부 페칭 함수 (캐시 MISS 시 DB 조회)
 * save 직후 findGlobal 'undefined id' 타이밍 이슈 시 짧은 대기 후 재시도.
 */
async function fetchCatalogData(options: CatalogQueryOptions = {}) {
  const { depth = 1, draft = false } = options;
  const startTime = Date.now();

  for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt++) {
    try {
      console.log('🔴 [Catalog] DB 조회 중...');
      const payload = await getPayloadClient();

      const data = await payload.findGlobal({
        slug: 'catalog',
        depth,
        draft,
      });

      const duration = Date.now() - startTime;

      if (!data) {
        console.warn('[Catalog] Global data not found.');
        return null;
      }

      console.log(`🟢 [Catalog] DB 조회 완료 (${duration}ms)`);
      return data;
    } catch (error) {
      const canRetry = isUndefinedIdError(error) && attempt < MAX_ATTEMPTS;
      if (canRetry) {
        await delay(RETRY_DELAY_MS);
        continue;
      }
      const err = error ?? new Error('Unknown error');
      console.error('[Catalog Fetch Error]', err);
      if (err instanceof Error && err.message) {
        console.error('Message:', err.message);
      }
      return null;
    }
  }
  return null;
}

/**
 * 캐싱된 Catalog 데이터 페칭
 *
 * @param options - depth(기본 1, PDF URL 포함), draft
 * @returns Catalog Global 데이터
 */
export async function getCatalogData(options: CatalogQueryOptions = {}) {
  const { depth = 1, draft = false } = options;

  return getCachedData(
    fetchCatalogData,
    depth,
    draft,
    {
      tag: 'global-catalog',
      slug: 'catalog',
    },
    '🟢 [Catalog]',
  );
}
