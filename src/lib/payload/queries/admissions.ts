/**
 * Admissions Page Global 데이터 페칭 함수
 *
 * Payload CMS의 Admissions 글로벌 데이터를 가져옵니다.
 * unstable_cache + On-demand Revalidation 사용. Cache Tag: 'admissions-global'
 *
 * ⚠️  타입을 완전히 적용하려면 실행하세요:
 *     npx payload generate:types
 *     그 후 아래 주석 처리된 import로 교체하세요.
 */

import type { GlobalQueryFn } from './create-query';
import { createGlobalQuery } from './create-query';
import type { Config } from '@/payload-types';

// npx payload generate:types 실행 후 아래로 교체:
// import type { Admissions } from '@/payload-types';
// const getAdmissionsData = createGlobalQuery<Admissions>({ slug: 'admissions', ... });

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AdmissionsAny = any;

const getAdmissionsData: GlobalQueryFn<AdmissionsAny> =
  createGlobalQuery<AdmissionsAny>({
    slug: 'admissions' as keyof Config['globals'],
    tag: 'admissions-global',
    depth: 0,
    logLabel: 'Admissions',
  });

export { getAdmissionsData };
