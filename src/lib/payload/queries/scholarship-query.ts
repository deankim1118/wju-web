/**
 * Scholarship Global 데이터 페칭 함수
 *
 * Payload CMS의 Scholarship 글로벌 데이터를 가져옵니다.
 * unstable_cache + On-demand Revalidation 사용. Cache Tag: 'scholarship-global'
 */

import type { Scholarship } from '@/payload-types';
import { createGlobalQuery } from './create-query';

const getScholarshipData = createGlobalQuery<Scholarship>({
  slug: 'scholarship',
  tag: 'scholarship-global',
  depth: 1,
  logLabel: 'Scholarship',
});

export { getScholarshipData };
