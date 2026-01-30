/**
 * Global 쿼리 팩토리
 *
 * createGlobalQuery<T>(config)를 호출하면 slug/tag/logLabel만 설정한
 * 캐싱된 getter 함수(getHeroData, getFooterData 등)를 반환합니다.
 * fetchGlobal + getCachedData를 내부에서 사용합니다.
 */

import { getCachedData } from './cache-utils';
import { fetchGlobal } from './fetch-global';

import type { Config } from '@/payload-types';

export type GlobalQueryConfig<T> = {
  slug: keyof Config['globals'];
  tag: string;
  depth?: number;
  logLabel: string;
};

export type GlobalQueryOptions = {
  depth?: number;
  draft?: boolean;
};

export type GlobalQueryFn<T> = (
  options?: GlobalQueryOptions,
) => Promise<T | null>;

/**
 * 캐싱된 글로벌 쿼리 함수를 생성합니다.
 *
 * @param config - slug, tag, depth(기본값), logLabel
 * @returns (options?) => Promise<T | null> 형태의 getter (예: getHeroData)
 */
export function createGlobalQuery<T>(
  config: GlobalQueryConfig<T>,
): GlobalQueryFn<T> {
  const { slug, tag, logLabel } = config;
  const defaultDepth = config.depth ?? 1;

  return async function getData(
    options: GlobalQueryOptions = {},
  ): Promise<T | null> {
    const depth = options.depth ?? defaultDepth;
    const draft = options.draft ?? false;

    const fetchFn = async (opts: {
      depth?: number;
      draft?: boolean;
    }): Promise<T | null> => {
      return fetchGlobal<T>({
        slug,
        depth: opts.depth ?? depth,
        draft: opts.draft ?? draft,
        logLabel,
      });
    };

    return getCachedData<T | null>(
      fetchFn,
      depth,
      draft,
      { tag, slug },
      `🟢 [${logLabel}]`,
    );
  };
}
