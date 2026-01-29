/**
 * 캐시 유틸리티 함수
 *
 * Global 데이터 페칭을 위한 공통 캐싱 로직을 제공합니다.
 * 중복 코드를 제거하고 일관된 캐싱 패턴을 적용합니다.
 */

import { unstable_cache } from 'next/cache';

/** findGlobal 시 글로벌 문서 부재/타이밍 이슈로 나는 Payload 에러 (save 직후 등) */
const UNDEFINED_ID_RE = /Cannot read properties of undefined \(reading 'id'\)/;

export function isUndefinedIdError(error: unknown): boolean {
  const msg = error instanceof Error ? error.message : String(error);
  return UNDEFINED_ID_RE.test(msg);
}

/** ms 경과 후 resolve */
export async function delay(ms: number): Promise<void> {
  return new Promise((r) => setTimeout(r, ms));
}

type FetchFunction<T> = (options: {
  depth?: number;
  draft?: boolean;
}) => Promise<T>;

type CacheOptions = {
  tag: string;
  slug: string;
};

/**
 * 캐시된 getter 함수를 생성하는 팩토리
 *
 * @param fetchFn - 실제 DB 조회 함수
 * @param depth - depth 옵션
 * @param draft - draft 옵션
 * @param options - 캐시 옵션 (tag, slug)
 * @returns 캐시된 getter 함수
 */
export function createCachedGetter<T>(
  fetchFn: FetchFunction<T>,
  depth: number,
  draft: boolean,
  options: CacheOptions,
) {
  const { tag, slug } = options;
  const cacheKey = ['global', slug, `depth-${depth}`, `draft-${draft}`];

  return unstable_cache(
    async () => {
      return fetchFn({ depth, draft });
    },
    cacheKey,
    {
      tags: [tag],
      revalidate: false,
    },
  );
}

/**
 * 캐시된 getter 함수들을 저장하는 Map
 * 각 depth/draft 조합별로 독립적인 캐시를 관리합니다.
 */
const cachedGettersMap = new Map<string, () => Promise<unknown>>();

/**
 * 캐시된 데이터를 가져오는 공통 함수
 *
 * @param fetchFn - 실제 DB 조회 함수
 * @param depth - depth 옵션
 * @param draft - draft 옵션
 * @param options - 캐시 옵션 (tag, slug)
 * @param logPrefix - 로그 접두사 (예: '[Hero]', '[Footer]')
 * @returns 캐시된 데이터
 */
export async function getCachedData<T>(
  fetchFn: FetchFunction<T>,
  depth: number,
  draft: boolean,
  options: CacheOptions,
  logPrefix: string,
): Promise<T> {
  const startTime = Date.now();

  // Draft 모드는 캐시 사용 안 함 (항상 최신 데이터 필요)
  if (draft) {
    return fetchFn({ depth, draft });
  }

  // 캐시 키로 getter 찾기 또는 생성
  const getterKey = `${options.slug}:${depth}:${draft}`;
  let getter = cachedGettersMap.get(getterKey) as
    | (() => Promise<T>)
    | undefined;

  if (!getter) {
    getter = createCachedGetter(fetchFn, depth, draft, options);
    cachedGettersMap.set(getterKey, getter);
  }

  const result = await getter();
  const duration = Date.now() - startTime;

  // 캐시 HIT인 경우
  if (duration < 5) {
    console.log(`${logPrefix} 캐시 사용 (${duration}ms) - DB 조회 없음`);
  }

  return result;
}
