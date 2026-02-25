import { withDraftPublish } from '@/lib/payload/create-global-config';
import { revalidateFooter } from '@/lib/payload/revalidate';

export const FooterPayload = withDraftPublish(
  {
    slug: 'footer',
    label: 'Footer Settings',
    admin: {
      description: 'Footer 영역에 표시될 연락처 정보를 관리합니다.',
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
  },
  { revalidate: revalidateFooter },
);
