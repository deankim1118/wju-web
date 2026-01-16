import { revalidateFooter } from '@/lib/payload/revalidate';
import { GlobalConfig } from 'payload';

export const FooterPayload: GlobalConfig = {
  slug: 'footer',
  label: 'Footer Settings',
  admin: {
    description: 'Footer 영역에 표시될 연락처 정보를 관리합니다.',
  },
  hooks: {
    afterChange: [
      async () => {
        // 🚀 Footer 데이터가 변경될 때 Next.js 캐시를 즉시 무효화
        revalidateFooter();
      },
    ],
  },
  fields: [
    {
      name: 'contact',
      type: 'group',
      label: '📞 연락처 정보',
      admin: {
        description: 'Footer에 표시될 연락처 정보를 입력하세요.',
      },
      fields: [
        {
          name: 'universityName',
          type: 'text',
          label: '대학교 이름',
          defaultValue: 'Washington Jabez University',
          required: true,
          admin: {
            description: 'Footer에 표시될 대학교 이름',
          },
        },
        {
          name: 'phoneEn',
          type: 'text',
          label: '전화번호 (English)',
          required: true,
          admin: {
            description: '예: 123-456-7890',
            placeholder: '123-456-7890',
          },
        },
        {
          name: 'phoneKo',
          type: 'text',
          label: '전화번호 (Korean)',
          required: true,
          admin: {
            description: '예: 123-456-7890',
            placeholder: '123-456-7890',
          },
        },
        {
          name: 'email',
          type: 'email',
          label: '이메일',
          required: true,
          admin: {
            description: '대학 대표 이메일 주소',
            placeholder: 'admin@wjuin.org',
          },
        },
        {
          name: 'address',
          type: 'text',
          label: '주소',
          required: true,
          admin: {
            description: '대학교 주소',
            placeholder: '4421 Dale Blvd. Woodbridge, VA 22191',
          },
        },
      ],
    },
  ],
};
