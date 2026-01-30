/**
 * Hero Global 데이터 페칭 함수
 *
 * Payload CMS의 Hero 글로벌 데이터를 가져옵니다.
 * unstable_cache + On-demand Revalidation 사용. Cache Tag: 'hero-global'
 */

import type { Hero } from '@/payload-types';
import { createGlobalQuery } from './create-query';

const getHeroData = createGlobalQuery<Hero>({
  slug: 'hero',
  tag: 'hero-global',
  depth: 1,
  logLabel: 'Hero',
});

export { getHeroData };
