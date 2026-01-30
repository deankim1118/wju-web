/**
 * Academic Calendar Global 데이터 페칭
 *
 * 학사 일정(학기별 일정·행사)을 가져옵니다.
 * unstable_cache + On-demand Revalidation 사용. Cache Tag: 'academic-calendar-global'
 */

import type { AcademicCalendar } from '@/payload-types';
import { createGlobalQuery } from './create-query';

const getAcademicCalendarData = createGlobalQuery<AcademicCalendar>({
  slug: 'academic-calendar',
  tag: 'academic-calendar-global',
  depth: 1,
  logLabel: 'AcademicCalendar',
});

export { getAcademicCalendarData };
