/**
 * Faculty & Staff Global 데이터 페칭 함수
 *
 * Payload CMS의 Faculty & Staff 글로벌 데이터를 가져옵니다.
 * unstable_cache + On-demand Revalidation 사용. Cache Tag: 'faculty-staff-global'
 */

import type { FacultyStaff } from '@/payload-types';
import { getCachedData } from './cache-utils';
import { fetchGlobal } from './fetch-global';

async function fetchFacultyStaffData(options: {
  depth?: number;
  draft?: boolean;
}): Promise<FacultyStaff | null> {
  return fetchGlobal<FacultyStaff>({
    slug: 'faculty-staff',
    depth: options.depth ?? 1,
    draft: options.draft ?? false,
    logLabel: 'FacultyStaff',
  });
}

export async function getFacultyStaffData(
  options: { depth?: number; draft?: boolean } = {},
): Promise<FacultyStaff | null> {
  const depth = options.depth ?? 1;
  const draft = options.draft ?? false;

  return getCachedData<FacultyStaff | null>(
    fetchFacultyStaffData,
    depth,
    draft,
    { tag: 'faculty-staff-global', slug: 'faculty-staff' },
    '🟢 [FacultyStaff]',
  );
}
