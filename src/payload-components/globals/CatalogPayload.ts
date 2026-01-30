import { revalidateCatalog } from '@/lib/payload/revalidate';
import type { GlobalConfig } from 'payload';

/**
 * Catalog (Admission PDF) Global
 * 입학 요강 PDF 파일과 타이틀, 해당 연도를 관리합니다.
 */
export const CatalogPayload: GlobalConfig = {
  slug: 'catalog',
  label: 'Catalog (Admission PDF)',
  admin: {
    description: '입학 요강 PDF 파일과 타이틀, 해당 연도를 관리합니다.',
  },
  hooks: {
    afterChange: [
      async () => {
        revalidateCatalog();
      },
    ],
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Catalog Title',
      admin: {
        description: '예: 학사과정 입학 요강',
      },
    },
    {
      name: 'subtitle',
      type: 'text',
      required: true,
      label: 'Year / Version',
      admin: {
        description: '몇 년도 자료인지 표시 (예: 2026 - 2027)',
      },
    },
    {
      name: 'file',
      type: 'upload',
      relationTo: 'media',
      required: true,
      label: 'PDF File',
      admin: {
        description: '오직 PDF 파일만 업로드 가능합니다.',
      },
      filterOptions: {
        mimeType: { contains: 'application/pdf' },
      },
    },
  ],
};
