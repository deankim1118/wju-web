/**
 * Tuition & Fees 페이지용 데이터 어댑터
 *
 * Payload CMS Global(Tuition) 응답을 UI에서 사용하는 형태로 정규화합니다.
 * Payload 데이터가 null이거나 필드가 비어 있으면 정적 config로 fallback합니다.
 *
 * ⚠️  타입을 완전히 적용하려면 실행하세요:
 *     npx payload generate:types
 *     그 후 RawTuitionPayload를 아래로 교체:
 *     import type { Tuition } from '@/payload-types';
 *     type RawTuitionPayload = Tuition;
 */

import {
  FEE_SECTIONS,
  PROGRAM_TUITION_RATES,
  SEMESTER_COST_ESTIMATES,
  type FeeEntry,
  type FeeSection,
  type ProgramTuitionRate,
  type SemesterEstimate,
} from '@/config/tuition-content';

// ─── 임시 Payload 응답 타입 (generate:types 실행 후 Tuition으로 교체) ──────────

type RawSemesterEstimate = {
  program: string;
  fullTimeLoad: string;
  tuitionTotal: number;
  tuitionPerUnit: number;
  estimatedBooks: number;
  totalEstimated: number;
  id?: string | null;
};

type RawProgramRate = {
  level: string;
  program: string;
  pricePerUnit: number;
  id?: string | null;
};

type RawFeeEntry = {
  name: string;
  amount: number;
  isPercentage?: boolean | null;
  description: string;
  id?: string | null;
};

type RawFeeSection = {
  title: string;
  subtitle?: string | null;
  fees?: RawFeeEntry[] | null;
  id?: string | null;
};

type RawTuitionPayload = {
  semesterEstimates?: RawSemesterEstimate[] | null;
  programTuitionRates?: RawProgramRate[] | null;
  feeSections?: RawFeeSection[] | null;
} | null;

// ─── 정규화된 출력 타입 ───────────────────────────────────────────────────────

export type NormalizedTuitionData = {
  semesterEstimates: SemesterEstimate[];
  programTuitionRates: ProgramTuitionRate[];
  feeSections: FeeSection[];
};

// ─── 개별 항목 정규화 ─────────────────────────────────────────────────────────

function normalizeSemesterEstimate(raw: RawSemesterEstimate): SemesterEstimate {
  return {
    program: raw.program,
    fullTimeLoad: raw.fullTimeLoad,
    tuitionTotal: raw.tuitionTotal,
    tuitionPerUnit: raw.tuitionPerUnit,
    estimatedBooks: raw.estimatedBooks,
    totalEstimated: raw.totalEstimated,
  };
}

function normalizeProgramRate(raw: RawProgramRate): ProgramTuitionRate {
  return {
    level: raw.level as ProgramTuitionRate['level'],
    program: raw.program,
    pricePerUnit: raw.pricePerUnit,
  };
}

function normalizeFeeEntry(raw: RawFeeEntry): FeeEntry {
  return {
    name: raw.name,
    amount: raw.amount,
    isPercentage: raw.isPercentage ?? false,
    description: raw.description,
  };
}

function normalizeFeeSection(raw: RawFeeSection, index: number): FeeSection {
  return {
    id: raw.id ?? `fee-section-${index}`,
    title: raw.title,
    subtitle: raw.subtitle ?? undefined,
    fees: (raw.fees ?? []).map(normalizeFeeEntry),
  };
}

// ─── 메인 어댑터 함수 ─────────────────────────────────────────────────────────

/**
 * Payload Tuition Global 데이터를 UI용 props 형태로 정규화합니다.
 * null이거나 배열이 비어 있으면 정적 config로 fallback합니다.
 */
export function normalizeTuitionData(
  payloadData: RawTuitionPayload,
): NormalizedTuitionData {
  const rawEstimates = payloadData?.semesterEstimates;
  const semesterEstimates =
    rawEstimates && rawEstimates.length > 0
      ? rawEstimates.map(normalizeSemesterEstimate)
      : SEMESTER_COST_ESTIMATES;

  const rawRates = payloadData?.programTuitionRates;
  const programTuitionRates =
    rawRates && rawRates.length > 0
      ? rawRates.map(normalizeProgramRate)
      : PROGRAM_TUITION_RATES;

  const rawSections = payloadData?.feeSections;
  const feeSections =
    rawSections && rawSections.length > 0
      ? rawSections.map(normalizeFeeSection)
      : FEE_SECTIONS;

  return { semesterEstimates, programTuitionRates, feeSections };
}
