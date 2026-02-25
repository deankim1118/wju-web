import { withDraftPublish } from '@/lib/payload/create-global-config';
import { revalidateTuition } from '@/lib/payload/revalidate';

export const TuitionPayload = withDraftPublish(
  {
    slug: 'tuition',
    label: 'Tuition & Fees Page',
    admin: {
      description: 'Tuition & Fees 페이지에 표시되는 학비, 수수료 정보를 관리합니다.',
    },
    fields: [
      // ─── 학기별 예상 비용 ──────────────────────────────────────
      {
        name: 'semesterEstimates',
        type: 'array',
        label: 'Semester Cost Estimates (학기별 예상 비용)',
        admin: {
          description:
            '차트에 표시되는 프로그램별 예상 학기 비용입니다. 순서를 드래그하여 변경할 수 있습니다.',
        },
        fields: [
          {
            name: 'program',
            type: 'text',
            label: 'Program Name',
            required: true,
            defaultValue: 'B.A. Program',
            admin: { description: '예: B.A. Program, Master\'s Program, Doctoral Program' },
          },
          {
            name: 'fullTimeLoad',
            type: 'text',
            label: 'Full-Time Load',
            required: true,
            defaultValue: '12 Units',
            admin: { description: '예: 12 Units, 8 Units' },
          },
          {
            name: 'tuitionTotal',
            type: 'number',
            label: 'Tuition Total (USD)',
            required: true,
            defaultValue: 3000,
            admin: { description: '학기 전체 등록금 (단위: 달러). 예: 3000' },
          },
          {
            name: 'tuitionPerUnit',
            type: 'number',
            label: 'Tuition Per Unit (USD)',
            required: true,
            defaultValue: 250,
            admin: { description: '단위당 등록금 (달러). 예: 250 → $250/unit' },
          },
          {
            name: 'estimatedBooks',
            type: 'number',
            label: 'Estimated Books Cost (USD)',
            required: true,
            defaultValue: 200,
            admin: { description: '예상 교재비 (달러). 차트에서 별도 표시됩니다.' },
          },
          {
            name: 'totalEstimated',
            type: 'number',
            label: 'Total Estimated Cost (USD)',
            required: true,
            defaultValue: 3200,
            admin: {
              description:
                '등록금 + 교재비 합계. 차트 툴팁에 표시됩니다.',
            },
          },
        ],
      },

      // ─── 프로그램별 단위 등록금 ───────────────────────────────
      {
        name: 'programTuitionRates',
        type: 'array',
        label: 'Program Tuition Rates (프로그램별 단위 등록금)',
        admin: {
          description:
            '"Tuition by Program" 섹션에 표시되는 프로그램별 단위당 등록금 카드입니다.',
        },
        fields: [
          {
            name: 'level',
            type: 'select',
            label: 'Program Level',
            required: true,
            options: [
              { label: 'B.A.', value: 'ba' },
              { label: "Master's", value: 'masters' },
              { label: 'Doctoral', value: 'doctoral' },
            ],
            admin: { description: '프로그램 레벨. 카드 정렬 및 식별에 사용됩니다.' },
          },
          {
            name: 'program',
            type: 'text',
            label: 'Program Display Name',
            required: true,
            defaultValue: 'B.A. Programs',
            admin: { description: '카드에 표시될 프로그램 이름. 예: B.A. Programs' },
          },
          {
            name: 'pricePerUnit',
            type: 'number',
            label: 'Price Per Unit (USD)',
            required: true,
            defaultValue: 250,
            admin: { description: '단위(학점)당 등록금 (달러). 예: 250 → $250.00 per unit' },
          },
        ],
      },

      // ─── 수수료 섹션 ──────────────────────────────────────────
      {
        name: 'feeSections',
        type: 'array',
        label: 'Fee Sections (수수료 섹션)',
        admin: {
          description:
            '수수료 테이블 섹션들을 관리합니다. 각 섹션은 독립된 카드로 표시됩니다.',
        },
        fields: [
          {
            name: 'title',
            type: 'text',
            label: 'Section Title',
            required: true,
            admin: { description: '예: Admissions & Academic Fees' },
          },
          {
            name: 'subtitle',
            type: 'textarea',
            label: 'Section Subtitle (선택)',
            admin: {
              description:
                '섹션 제목 아래에 표시되는 안내 문구. 예: These fees are non-refundable after the official cancellation period.',
            },
          },
          {
            name: 'fees',
            type: 'array',
            label: 'Fees (수수료 항목)',
            admin: {
              description: '이 섹션에 속하는 수수료 항목들입니다.',
            },
            fields: [
              {
                name: 'name',
                type: 'text',
                label: 'Fee Name',
                required: true,
                admin: { description: '예: Application Fee, Graduation Fee (B.A.)' },
              },
              {
                name: 'amount',
                type: 'number',
                label: 'Amount',
                required: true,
                admin: {
                  description:
                    '금액 (달러) 또는 비율 (%). isPercentage가 체크된 경우 비율로 처리됩니다.',
                },
              },
              {
                name: 'isPercentage',
                type: 'checkbox',
                label: 'Is Percentage? (비율 여부)',
                defaultValue: false,
                admin: {
                  description:
                    '체크하면 amount를 % 로 표시합니다. 예: 2.9 → 2.9%',
                },
              },
              {
                name: 'description',
                type: 'text',
                label: 'Description',
                required: true,
                admin: {
                  description: '수수료 설명. 예: One-time fee for all applicants',
                },
              },
            ],
          },
        ],
      },
    ],
  },
  { revalidate: revalidateTuition },
);
