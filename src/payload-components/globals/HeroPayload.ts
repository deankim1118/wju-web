import { GlobalConfig } from 'payload';

export const HeroPayload: GlobalConfig = {
  slug: 'hero',
  label: 'Hero Section Landing Page',
  fields: [
    {
      name: 'slides',
      type: 'array', // 무제한 슬라이드 추가 가능
      label: '슬라이드 목록',
      minRows: 1,
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
          label: '배경 이미지',
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
          type: 'array', // 버튼 설정
          maxRows: 2, // 질문자님 요청: 최대 2개
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
};
