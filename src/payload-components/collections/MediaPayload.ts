import type { CollectionConfig } from 'payload';

export const MediaPayload: CollectionConfig = {
  slug: 'media',
  upload: {
    staticDir: 'media', // 파일이 서버에 저장될 경로
    // ✅ 1. 원본 파일 자체를 1440px로 강제 리사이징 (이게 핵심!)
    resizeOptions: {
      width: 1440,
      height: undefined, // 비율 유지
      withoutEnlargement: true, // 1440px보다 작은 사진은 억지로 안 키움
    },
    imageSizes: [
      {
        name: 'thumbnail',
        width: 150,
        height: undefined,
        position: 'centre',
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
