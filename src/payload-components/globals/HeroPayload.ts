import { withDraftPublish } from '@/lib/payload/create-global-config';
import { revalidateHero } from '@/lib/payload/revalidate';

export const HeroPayload = withDraftPublish(
  {
    slug: 'hero',
    label: 'Hero Section Landing Page',
    fields: [
      {
        name: 'slides',
        type: 'array',
        label: '슬라이드 목록',
        minRows: 1,
        fields: [
          {
            name: 'image',
            type: 'upload',
            relationTo: 'media',
            required: true,
            label: '💻 데스크탑 배경 이미지 (가로형)',
            admin: {
              description: 'PC/태블릿에서 표시될 이미지 (16:9 권장)',
            },
          },
          {
            name: 'mobileImage',
            type: 'upload',
            relationTo: 'media',
            label: '📱 모바일 전용 이미지 (선택)',
            admin: {
              description:
                '모바일에 최적화된 이미지가 있다면 등록하세요. 비워두면 데스크탑 이미지가 자동으로 안전하게 표시됩니다.',
            },
          },
          {
            name: 'layoutSettings',
            type: 'group',
            label: '⚙️ 레이아웃 설정',
            admin: {
              description: '이미지 표시 방식을 선택하세요.',
            },
            fields: [
              {
                name: 'isPoster',
                type: 'checkbox',
                label: '📄 포스터/광고 모드 (텍스트가 있는 이미지)',
                defaultValue: false,
                admin: {
                  description:
                    '✅ 체크: 이미지 전체를 보여주고 여백은 블러 처리 (텍스트/로고가 있는 포스터 권장)\n❌ 미체크: 화면을 꽉 채우고 이미지 일부가 잘릴 수 있음 (배경 사진 권장)',
                },
              },
            ],
          },
          {
            name: 'title',
            type: 'text',
            label: '메인 제목 (선택)',
          },
          {
            name: 'subtitle',
            type: 'text',
            label: '소제목 / 서브 타이틀 (선택)',
          },
          {
            name: 'description',
            type: 'textarea',
            label: '설명 문구 (선택)',
          },
          {
            name: 'buttons',
            type: 'array',
            maxRows: 2,
            label: '액션 버튼',
            fields: [
              {
                name: 'label',
                type: 'text',
                label: '버튼 글자 (예: 강의 신청)',
                required: true,
              },
              {
                name: 'link',
                type: 'text',
                label: '이동 링크 (URL)',
                required: true,
              },
            ],
          },
        ],
      },
    ],
  },
  { revalidate: revalidateHero },
);
