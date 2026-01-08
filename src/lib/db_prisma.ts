import { PrismaClient } from '@/generated/prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import pg from 'pg';

// 1. pg 라이브러리로 커넥션 풀을 먼저 만듭니다.
const connectionString = process.env.DATABASE_URL;
const pool = new pg.Pool({ connectionString });

// 2. Prisma용 어댑터로 감쌉니다.
const adapter = new PrismaPg(pool);

// 3. 싱글톤 패턴 유지
const prismaClientSingleton = () => {
  // Prisma 7에서는 어댑터를 생성자에 넣어주는 것이 정석입니다.
  return new PrismaClient({ adapter });
};

type PrismaClientSingleton = ReturnType<typeof prismaClientSingleton>;

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClientSingleton | undefined;
};

const prisma = globalForPrisma.prisma ?? prismaClientSingleton();

export default prisma;

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;
