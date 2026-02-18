import { postgresAdapter } from '@payloadcms/db-postgres';
import { lexicalEditor } from '@payloadcms/richtext-lexical';
import { s3Storage } from '@payloadcms/storage-s3';
import path from 'path';
import { buildConfig } from 'payload';
import sharp from 'sharp';
import { fileURLToPath } from 'url';
import { MediaPayload } from './payload-components/collections/MediaPayload';
import { UsersPayload } from './payload-components/collections/UsersPayload';
import { AcademicCalendarPayload } from './payload-components/globals/AcademicCalendarPayload';
import { CatalogPayload } from './payload-components/globals/CatalogPayload';
import { ChairmanMessagePayload } from './payload-components/globals/ChairmanMessagePayload';
import { FooterPayload } from './payload-components/globals/FooterPayload';
import { HeroPayload } from './payload-components/globals/HeroPayload';
import { ScholarshipPayload } from './payload-components/globals/ScholarshipPayload';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    user: 'users',
  },
  collections: [UsersPayload, MediaPayload],
  globals: [
    HeroPayload,
    FooterPayload,
    ChairmanMessagePayload,
    AcademicCalendarPayload,
    CatalogPayload,
    ScholarshipPayload,
  ],

  // ✅ 공식 문서 기반의 최신 S3 스토리지 설정
  plugins: [
    s3Storage({
      collections: {
        media: {
          // Vercel 등 배포 환경에서 4.5MB 이상 업로드 시 필수 (보안상 클라이언트 업로드 권장)
          disableLocalStorage: true, // S3만 쓸 거면 로컬 저장을 막아 보안을 강화합니다.
          prefix: 'media', // S3 버킷 내 'media' 폴더에 정리해서 저장
        },
      },
      bucket: process.env.S3_BUCKET || '',
      config: {
        // ✅ Supabase/S3 호환을 위한 핵심 보안 설정
        credentials: {
          accessKeyId: process.env.S3_ACCESS_KEY_ID || '',
          secretAccessKey: process.env.S3_SECRET_ACCESS_KEY || '',
        },
        region: process.env.S3_REGION, // 예: ap-northeast-2
        endpoint: process.env.S3_ENDPOINT, // Supabase 주소

        // 🚨 2026년 Supabase 연결 시 필수: 가상 호스팅 방식이 아닌 경로 방식 사용
        // 이걸 안 하면 https://bucketname.endpoint... 로 접속하려다 에러가 납니다.
        forcePathStyle: true,
      },
    }),
  ],

  editor: lexicalEditor({}),
  secret: process.env.PAYLOAD_SECRET || 'YOUR_SECRET_HERE',
  db: postgresAdapter({
    pool: {
      // Direct는 이 네트워크에서 ENOENT → 풀러만 사용. 비밀번호는 Restore 후 한 번 더 리셋 후 Session mode URI 전체 복사.
      connectionString:
        process.env.DATABASE_URL || process.env.DIRECT_URL || '',
    },
  }),
  sharp,
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
});
