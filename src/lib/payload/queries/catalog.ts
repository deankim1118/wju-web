/**
 * Catalog Global 데이터 페칭
 *
 * 입학 요강 PDF 및 타이틀/연도 정보를 가져옵니다.
 * unstable_cache + On-demand Revalidation 사용. Cache Tag: 'global-catalog'
 */

import type { Catalog } from '@/payload-types';
import { createGlobalQuery } from './create-query';

const getCatalogData = createGlobalQuery<Catalog>({
  slug: 'catalog',
  tag: 'global-catalog',
  depth: 1,
  logLabel: 'Catalog',
});

export { getCatalogData };
