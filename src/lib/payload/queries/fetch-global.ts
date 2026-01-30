/**
 * Global 데이터 페칭 공통 로직
 *
 * Payload findGlobal 호출, 재시도(undefined id 이슈), 에러 처리, 로깅을 한 곳에서 처리합니다.
 * 각 도메인 쿼리(hero, footer, catalog 등)는 이 함수를 통해 일관된 동작을 합니다.
 */

import type { Config } from '@/payload-types';
import { getPayloadClient } from '../payloadClient';
import { delay, isUndefinedIdError } from './cache-utils';

const MAX_ATTEMPTS = 3;
const RETRY_DELAY_MS = 200;

export type FetchGlobalOptions = {
  slug: keyof Config['globals'];
  depth?: number;
  draft?: boolean;
  logLabel: string;
};

/**
 * Payload findGlobal을 호출하여 글로벌 데이터를 가져옵니다.
 * save 직후 findGlobal 'undefined id' 타이밍 이슈 시 짧은 대기 후 재시도합니다.
 *
 * @param options - slug, depth, draft, logLabel
 * @returns 글로벌 데이터 또는 null
 */
export async function fetchGlobal<T>(
  options: FetchGlobalOptions,
): Promise<T | null> {
  const { slug, depth = 1, draft = false, logLabel } = options;

  for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt++) {
    try {
      console.log(`🔴 [${logLabel}] DB 조회 중...`);
      const payload = await getPayloadClient();

      const startTime = Date.now();
      const data = await payload.findGlobal({
        slug,
        depth,
        draft,
      });

      if (!data) {
        console.warn(`[${logLabel}] Global data not found.`);
        return null;
      }

      const duration = Date.now() - startTime;
      console.log(`🟢 [${logLabel}] DB 조회 완료 (${duration}ms)`);
      return data as T;
    } catch (error) {
      const canRetry = isUndefinedIdError(error) && attempt < MAX_ATTEMPTS;
      if (canRetry) {
        await delay(RETRY_DELAY_MS);
        continue;
      }
      const err = error ?? new Error('Unknown error');
      console.error(`[${logLabel} Fetch Error]`, err);
      if (err instanceof Error && err.message) {
        console.error('Message:', err.message);
      }
      return null;
    }
  }
  return null;
}
