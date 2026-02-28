import { withDraftPublish } from '@/lib/payload/create-global-config';
import { revalidateAdmissions } from '@/lib/payload/revalidate';

export const AdmissionsPayload = withDraftPublish(
  {
    slug: 'admissions',
    label: 'Admissions Page',
    admin: {
      description: 'Admissions 페이지의 필요 서류 목록과 입학 정책 항목을 관리합니다.',
    },
    fields: [
      // ─── 필요 서류 목록 ───────────────────────────────────────
      {
        name: 'requiredDocuments',
        type: 'array',
        label: 'Required Documents (필요 서류)',
        admin: {
          description:
            '"Submit Documents" 탭에 표시되는 입학 필요 서류 목록입니다. 순서를 드래그하여 변경할 수 있습니다.',
        },
        fields: [
          {
            name: 'category',
            type: 'text',
            label: 'Category Name (서류 분류)',
            required: true,
            admin: {
              description: '예: Identification (ID), Academic Records, Personal Statements',
            },
          },
          {
            name: 'items',
            type: 'array',
            label: 'Items (항목 목록)',
            admin: {
              description: '이 분류에 속하는 구체적인 서류 항목들입니다.',
            },
            fields: [
              {
                name: 'item',
                type: 'text',
                label: 'Item',
                required: true,
                admin: {
                  description: '예: Copy of Passport, Official Transcripts',
                },
              },
            ],
          },
        ],
      },

      // ─── 입학 정책 ────────────────────────────────────────────
      {
        name: 'admissionPolicies',
        type: 'array',
        label: 'Admission Policies (입학 정책)',
        admin: {
          description:
            '"General Policies" 섹션의 아코디언 항목들입니다. 순서를 드래그하여 변경할 수 있습니다.',
        },
        fields: [
          {
            name: 'value',
            type: 'text',
            label: 'Key (고유 식별자)',
            required: true,
            admin: {
              description: '소문자 영어 슬러그. 예: transfer, challenge, readmission',
            },
          },
          {
            name: 'trigger',
            type: 'text',
            label: 'Accordion Title (아코디언 제목)',
            required: true,
            admin: {
              description: '예: Transfer Students, The Challenge Examination',
            },
          },
          {
            name: 'content',
            type: 'textarea',
            label: 'Policy Content (정책 내용)',
            required: true,
            admin: {
              description: '아코디언을 열었을 때 표시되는 정책 설명입니다.',
            },
          },
        ],
      },
    ],
  },
  { revalidate: revalidateAdmissions },
);
