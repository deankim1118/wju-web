import { withDraftPublish } from '@/lib/payload/create-global-config';
import { revalidateScholarship } from '@/lib/payload/revalidate';

export const ScholarshipPayload = withDraftPublish(
  {
    slug: 'scholarship',
    label: 'Scholarship Page Settings',
    admin: {
      description: 'Scholarship 페이지에 표시될 내용을 관리합니다.',
    },
    fields: [
      // ─── 페이지 헤더 ───────────────────────────────────────────
      {
        name: 'pageTitle',
        type: 'text',
        required: true,
        label: 'Page Title',
        defaultValue: 'Washington Jabez University Scholarship',
        admin: {
          description: '페이지 최상단에 표시되는 제목입니다.',
        },
      },
      {
        name: 'pageDescription',
        type: 'textarea',
        label: 'Page Description',
        defaultValue:
          'Scholarship policy, categories by type, eligibility, and application procedures.',
        admin: {
          description: '페이지 제목 아래에 표시되는 짧은 설명 문구입니다.',
        },
      },

      // ─── 일반 원칙 ────────────────────────────────────────────
      {
        name: 'generalPrinciples',
        type: 'textarea',
        label: 'General Principles',
        required: true,
        admin: {
          description:
            '장학금 정책의 일반 원칙 본문입니다. 개행(\\n)을 사용하여 단락을 구분합니다.',
        },
      },

      // ─── 장학금 카테고리 ──────────────────────────────────────
      {
        name: 'categories',
        type: 'array',
        label: 'Scholarship Categories (장학금 분류)',
        admin: {
          description:
            '장학금 유형별 카테고리를 관리합니다. 순서를 드래그하여 변경할 수 있습니다.',
        },
        fields: [
          {
            name: 'title',
            type: 'text',
            label: 'Category Title',
            required: true,
            admin: {
              description: '예: Family & Relationship Scholarships',
            },
          },
          {
            name: 'scholarships',
            type: 'array',
            label: 'Scholarships (장학 항목)',
            admin: {
              description: '이 카테고리에 속하는 장학금 항목들입니다.',
            },
            fields: [
              {
                name: 'title',
                type: 'text',
                label: 'Scholarship Name',
                required: true,
                admin: {
                  description: '예: Student Couple Scholarship',
                },
              },
              {
                name: 'purpose',
                type: 'textarea',
                label: 'Purpose (목적)',
                admin: {
                  description: '장학금 지원 목적 (선택 사항)',
                },
              },
              {
                name: 'eligibility',
                type: 'textarea',
                label: 'Eligibility (수혜 자격)',
                admin: {
                  description: '수혜 대상 조건 (선택 사항)',
                },
              },
              {
                name: 'policy',
                type: 'textarea',
                label: 'Policy (정책)',
                admin: {
                  description: '지급 방식 또는 규정 (선택 사항)',
                },
              },
              {
                name: 'benefit',
                type: 'textarea',
                label: 'Benefit (혜택)',
                required: true,
                admin: {
                  description: '실제 지급되는 혜택 내용 (필수)',
                },
              },
              {
                name: 'requirement',
                type: 'textarea',
                label: 'Requirement (요건)',
                admin: {
                  description: '추가 요건 (선택 사항, 예: GPA 기준)',
                },
              },
              {
                name: 'condition',
                type: 'textarea',
                label: 'Condition (조건)',
                admin: {
                  description: '갱신 조건 등 기타 조건 (선택 사항)',
                },
              },
            ],
          },
        ],
      },

      // ─── 일반 섹션 ────────────────────────────────────────────
      {
        name: 'generalSections',
        type: 'array',
        label: 'General Sections (일반 정책 섹션)',
        admin: {
          description:
            '자격 요건, 행정 절차, 면책 조항 등 일반 정책 섹션을 관리합니다.',
        },
        fields: [
          {
            name: 'title',
            type: 'text',
            label: 'Section Title',
            required: true,
            admin: {
              description: '예: General Qualifications & Compliance',
            },
          },
          {
            name: 'content',
            type: 'textarea',
            label: 'Section Content',
            required: true,
            admin: {
              description: '섹션 본문입니다. 개행(\\n)으로 단락을 구분합니다.',
            },
          },
        ],
      },
    ],
  },
  { revalidate: revalidateScholarship },
);
