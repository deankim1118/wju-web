/**
 * Chairman's Message Global 데이터 페칭 함수
 *
 * Payload CMS의 Chairman's Message 글로벌 데이터를 가져옵니다.
 * unstable_cache + On-demand Revalidation 사용. Cache Tag: 'chairman-message-global'
 */

import type { ChairmanMessage } from '@/payload-types';
import { createGlobalQuery } from './create-query';

const getChairmanMessageData = createGlobalQuery<ChairmanMessage>({
  slug: 'chairman-message',
  tag: 'chairman-message-global',
  depth: 1,
  logLabel: 'ChairmanMessage',
});

export { getChairmanMessageData };
