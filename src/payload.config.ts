import { postgresAdapter } from '@payloadcms/db-postgres';
import { lexicalEditor } from '@payloadcms/richtext-lexical';
import path from 'path';
import { buildConfig } from 'payload';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

import { MediaPayload } from './collections-payload/MediaPayload';
import { HeroPayload } from './globals-payload/HeroPayload';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    user: 'users', // 관리자 계정 컬렉션
  },
  collections: [
    {
      slug: 'users',
      auth: true,
      fields: [],
    },
    MediaPayload,
  ],
  // 💡 여기에 아까 상의한 Hero 전역 설정을 나중에 넣을 거예요!
  globals: [HeroPayload],
  editor: lexicalEditor({}),
  secret: process.env.PAYLOAD_SECRET || 'YOUR_SECRET_HERE',
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL || '',
    },
  }),
  sharp,
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
});
