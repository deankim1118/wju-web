/**
 * Scholarship 페이지용 데이터 어댑터
 *
 * Payload CMS Global(Scholarship) 응답을 UI에서 사용하는 형태로 정규화합니다.
 * fallback은 정적 config를 사용하며, 모든 변환 로직은 이 파일에만 두어 테스트·유지보수를 용이하게 합니다.
 */

import type {
  GeneralSection,
  ScholarshipCategory,
} from '@/config/scholarship-content';
import {
  getGeneralSections,
  getScholarshipCategories,
  scholarshipConfig,
} from '@/config/scholarship-content';
import type { Scholarship } from '@/payload-types';

// Payload 배열 아이템 타입 (map 콜백에서 implicit any 방지)
type PayloadCategory = NonNullable<Scholarship['categories']>[number];
type PayloadScholarshipItem = NonNullable<
  PayloadCategory['scholarships']
>[number];
type PayloadGeneralSection = NonNullable<
  Scholarship['generalSections']
>[number];

export type NormalizedScholarshipPageData = {
  pageTitle: string;
  pageDescription: string;
  generalPrinciples: string;
  categories: ScholarshipCategory[];
  generalSections: GeneralSection[];
};

const DEFAULT_PAGE_DESCRIPTION =
  'Scholarship policy, categories by type, eligibility, and application procedures.';

/**
 * Payload Scholarship Global 데이터를 UI용 props 형태로 정규화합니다.
 * null이거나 필드가 비어 있으면 정적 config로 fallback합니다.
 */
export function normalizeScholarshipData(
  payloadData: Scholarship | null,
): NormalizedScholarshipPageData {
  const pageTitle = payloadData?.pageTitle ?? scholarshipConfig.pageTitle;
  const pageDescription =
    payloadData?.pageDescription ?? DEFAULT_PAGE_DESCRIPTION;
  const generalPrinciples =
    payloadData?.generalPrinciples ?? scholarshipConfig.generalPrinciples;

  const rawCategories = payloadData?.categories;
  const categories =
    rawCategories && rawCategories.length > 0
      ? rawCategories.map((cat: PayloadCategory) => ({
          id: cat.id ?? '',
          title: cat.title,
          scholarships: (cat.scholarships ?? []).map(
            (s: PayloadScholarshipItem) => ({
              id: s.id ?? '',
              title: s.title,
              purpose: s.purpose ?? undefined,
              eligibility: s.eligibility ?? undefined,
              policy: s.policy ?? undefined,
              benefit: s.benefit,
              requirement: s.requirement ?? undefined,
              condition: s.condition ?? undefined,
            }),
          ),
        }))
      : getScholarshipCategories();

  const rawGeneralSections = payloadData?.generalSections;
  const generalSections =
    rawGeneralSections && rawGeneralSections.length > 0
      ? rawGeneralSections.map((sec: PayloadGeneralSection) => ({
          id: sec.id ?? '',
          title: sec.title,
          content: sec.content,
        }))
      : getGeneralSections();

  return {
    pageTitle,
    pageDescription,
    generalPrinciples,
    categories,
    generalSections,
  };
}
