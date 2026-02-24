import { revalidateFacultyStaff } from '@/lib/payload/revalidate';
import { GlobalConfig } from 'payload';

export const FacultyStaffPayload: GlobalConfig = {
  slug: 'faculty-staff',
  label: 'Faculty & Staff',
  admin: {
    description:
      '학교의 교수진 및 행정 직원 정보를 관리합니다. TRACS 요건(학위 및 수여 기관)을 포함합니다.',
  },
  hooks: {
    afterChange: [
      async () => {
        // 🚀 Faculty & Staff 데이터가 변경될 때 Next.js 캐시를 즉시 무효화
        revalidateFacultyStaff();
      },
    ],
  },
  fields: [
    {
      name: 'faculty',
      type: 'array',
      label: 'Faculty Members (교수진)',
      admin: {
        description:
          '교수진 목록입니다. (TRACS 요건 충족을 위해 Title에 전임/겸임 여부를 명시할 수 있습니다.)',
      },
      fields: [
        {
          name: 'name',
          type: 'text',
          label: 'Name',
          required: true,
        },
        {
          name: 'title',
          type: 'text',
          label: 'Title / Position',
          required: true,
          admin: {
            description: '예: Adjunct Professor of Theology',
          },
        },
        {
          name: 'bio',
          type: 'textarea',
          label: 'Quote / Short Bio',
          admin: {
            description: '짧은 소개 또는 인용구 (선택)',
          },
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
          label: 'Profile Image',
          admin: {
            description: '교수 프로필 사진을 업로드하세요',
          },
        },
        {
          name: 'degrees',
          type: 'array',
          label: 'Degrees (학위 정보 - TRACS 필수)',
          admin: {
            description: 'TRACS 인증 요건에 따라 학위와 수여 기관을 정확히 입력하세요.',
          },
          fields: [
            {
              name: 'degree',
              type: 'text',
              label: 'Degree',
              required: true,
              admin: {
                description: '예: Ph.D. in Intercultural Studies',
              },
            },
            {
              name: 'school',
              type: 'text',
              label: 'Conferring Institution',
              required: true,
              admin: {
                description: '예: Biola University',
              },
            },
          ],
        },
      ],
    },
    {
      name: 'staff',
      type: 'array',
      label: 'Staff Members (행정 직원)',
      admin: {
        description: '행정 및 지원 부서 직원 목록입니다.',
      },
      fields: [
        {
          name: 'name',
          type: 'text',
          label: 'Name',
          required: true,
        },
        {
          name: 'title',
          type: 'text',
          label: 'Title / Position',
          required: true,
          admin: {
            description: '예: Director of Admissions',
          },
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
          label: 'Profile Image',
          admin: {
            description: '직원 프로필 사진을 업로드하세요',
          },
        },
      ],
    },
  ],
};
