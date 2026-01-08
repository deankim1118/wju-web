import type { CollectionConfig } from 'payload';

export const MediaPayload: CollectionConfig = {
  slug: 'media',
  upload: {
    staticDir: 'media', // 파일이 서버에 저장될 경로
    imageSizes: [
      {
        name: 'thumbnail',
        width: 400,
        height: 300,
        position: 'centre',
      },
      {
        name: 'hero',
        width: 1440,
        height: undefined, // 높이는 비율에 맞게 자동 조절
      },
    ],
    // 🔥 중요: 모든 이미지를 자동으로 WebP로 변환하여 용량 절감
    formatOptions: {
      format: 'webp',
      options: { quality: 80 },
    },
    adminThumbnail: 'thumbnail', // 관리자 페이지에서 보여줄 미리보기 사이즈
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
  ],
};
