/**
 * Admissions 페이지용 데이터 어댑터
 *
 * Payload CMS Global(Admissions) 응답을 UI에서 사용하는 형태로 정규화합니다.
 * Payload 데이터가 null이거나 필드가 비어 있으면 정적 config로 fallback합니다.
 *
 * ⚠️  타입을 완전히 적용하려면 실행하세요:
 *     npx payload generate:types
 *     그 후 RawAdmissionsPayload를 아래로 교체:
 *     import type { Admissions } from '@/payload-types';
 *     type RawAdmissionsPayload = Admissions;
 */

import {
  ADMISSION_POLICIES,
  REQUIRED_DOCUMENTS,
  type AdmissionPolicy,
  type RequiredDocument,
} from '@/config/admissions-content';

// ─── 임시 Payload 응답 타입 (generate:types 실행 후 Admissions으로 교체) ──────

type RawDocumentItem = {
  item: string;
  id?: string | null;
};

type RawRequiredDocument = {
  category: string;
  items?: RawDocumentItem[] | null;
  id?: string | null;
};

type RawAdmissionPolicy = {
  value: string;
  trigger: string;
  content: string;
  id?: string | null;
};

type RawAdmissionsPayload = {
  requiredDocuments?: RawRequiredDocument[] | null;
  admissionPolicies?: RawAdmissionPolicy[] | null;
} | null;

// ─── 정규화된 출력 타입 ───────────────────────────────────────────────────────

export type NormalizedAdmissionsData = {
  requiredDocuments: RequiredDocument[];
  admissionPolicies: AdmissionPolicy[];
};

// ─── 개별 항목 정규화 ─────────────────────────────────────────────────────────

function normalizeRequiredDocument(
  raw: RawRequiredDocument,
): RequiredDocument {
  return {
    category: raw.category,
    items: (raw.items ?? []).map((i) => i.item),
  };
}

function normalizeAdmissionPolicy(raw: RawAdmissionPolicy): AdmissionPolicy {
  return {
    value: raw.value,
    trigger: raw.trigger,
    content: raw.content,
  };
}

// ─── 메인 어댑터 함수 ─────────────────────────────────────────────────────────

/**
 * Payload Admissions Global 데이터를 UI용 props 형태로 정규화합니다.
 * null이거나 배열이 비어 있으면 정적 config로 fallback합니다.
 */
export function normalizeAdmissionsData(
  payloadData: RawAdmissionsPayload,
): NormalizedAdmissionsData {
  const rawDocs = payloadData?.requiredDocuments;
  const requiredDocuments =
    rawDocs && rawDocs.length > 0
      ? rawDocs.map(normalizeRequiredDocument)
      : REQUIRED_DOCUMENTS;

  const rawPolicies = payloadData?.admissionPolicies;
  const admissionPolicies =
    rawPolicies && rawPolicies.length > 0
      ? rawPolicies.map(normalizeAdmissionPolicy)
      : ADMISSION_POLICIES;

  return { requiredDocuments, admissionPolicies };
}
