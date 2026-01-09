# Payload CMS Data Layer

Payload CMS에서 데이터를 가져오는 로직을 관리하는 레이어입니다.

## 구조

```
src/lib/payload/
├── client.ts          # Payload 인스턴스 싱글톤 관리
├── queries/          # 데이터 페칭 함수들
│   ├── hero.ts       # Hero 글로벌 데이터
│   └── index.ts      # Export 모음
└── README.md         # 이 파일
```

## 사용 방법

### 기본 사용

```tsx
import { getHeroData } from '@/lib/payload/queries';

export default async function Page() {
  const heroData = await getHeroData({ depth: 1 });

  if (!heroData) {
    return <div>데이터가 없습니다.</div>;
  }

  return <Hero data={heroData} />;
}
```

### 옵션 사용

```tsx
// depth를 조정하여 관계형 데이터 깊이 제어
const heroData = await getHeroData({ depth: 2 });
```

## 패턴

1. **싱글톤 패턴**: `getPayloadClient()`는 Payload 인스턴스를 재사용하여 성능 최적화
2. **도메인별 분리**: 각 데이터 타입별로 별도 파일로 관리
3. **에러 처리**: 각 함수에서 에러를 처리하고 null 반환
4. **타입 안전성**: TypeScript로 타입 정의

## 새로운 데이터 페칭 함수 추가하기

1. `src/lib/payload/queries/` 폴더에 새 파일 생성
2. `getPayloadClient()`를 사용하여 데이터 가져오기
3. `queries/index.ts`에 export 추가

예시:

```typescript
// src/lib/payload/queries/pages.ts
import { getPayloadClient } from '../client';

export async function getPageData(slug: string) {
  const payload = await getPayloadClient();
  return await payload.find({
    collection: 'pages',
    where: { slug: { equals: slug } },
  });
}
```
