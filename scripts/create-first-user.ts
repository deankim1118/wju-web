/**
 * Payload Admin 첫 사용자 생성 스크립트
 *
 * 사용법: npx tsx scripts/create-first-user.ts
 * 또는: npm run create-user
 *
 * .env에 DATABASE_URL 등이 설정되어 있어야 합니다.
 */

import 'dotenv/config';
import path from 'path';
import { getPayload } from 'payload';
import { fileURLToPath, pathToFileURL } from 'url';
// Windows에서 ESM import는 file:// URL이 필요함
const configPath = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  '../src/payload.config.ts',
);
const configModule = await import(pathToFileURL(configPath).href);
const config = configModule.default;

const EMAIL = process.env.ADMIN_EMAIL?.trim();
const PASSWORD = process.env.ADMIN_INITIAL_PASSWORD?.trim();

async function main() {
  if (!EMAIL || !PASSWORD) {
    console.error(
      '이메일/비밀번호를 설정한 뒤 실행하세요.\n' +
        '  .env 또는 .env.local에 다음을 추가:\n' +
        '  ADMIN_EMAIL=사용할이메일@example.com\n' +
        '  ADMIN_INITIAL_PASSWORD=사용할비밀번호',
    );
    process.exit(1);
  }

  console.log('Payload 초기화 중...');
  const payload = await getPayload({ config });

  const existing = await payload.find({
    collection: 'users',
    where: { email: { equals: EMAIL } },
    limit: 1,
  });

  if (existing.docs.length > 0) {
    console.log(`이미 해당 이메일 사용자가 있습니다: ${EMAIL}`);
    console.log(
      '비밀번호를 바꾸려면 Supabase Table Editor에서 users 테이블의 비밀번호를 수동 변경하거나, 기존 사용자를 삭제한 뒤 이 스크립트를 다시 실행하세요.',
    );
    process.exit(0);
  }

  await payload.create({
    collection: 'users',
    data: {
      email: EMAIL,
      password: PASSWORD,
    },
  });

  console.log('사용자 생성 완료.');
  console.log('  이메일:', EMAIL);
  console.log('  비밀번호:', PASSWORD);
  console.log('로그인 후 반드시 비밀번호를 변경하세요.');
  process.exit(0);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
