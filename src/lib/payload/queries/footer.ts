/**
 * Footer Global 데이터 페칭 함수
 *
 * Payload CMS의 Footer 글로벌 데이터를 가져옵니다.
 * unstable_cache + On-demand Revalidation 사용. Cache Tag: 'footer-global'
 */

import type { Footer } from '@/payload-types';
import { createGlobalQuery } from './create-query';

const getFooterData = createGlobalQuery<Footer>({
  slug: 'footer',
  tag: 'footer-global',
  depth: 0,
  logLabel: 'Footer',
});

export { getFooterData };
