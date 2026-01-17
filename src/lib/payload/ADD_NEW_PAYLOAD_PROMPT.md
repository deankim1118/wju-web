# 새로운 Payload Global 추가 가이드

새로운 Payload Global을 추가하고 캐싱 및 revalidation을 설정하는 프롬프트 템플릿입니다.

---

## 📋 프롬프트 템플릿

```
# Role
당신은 Next.js 15 (App Router)와 Payload CMS v3 전문가입니다.

# Context
현재 프로젝트는 Payload CMS의 Local API를 사용하여 데이터를 가져오고 있으며,
unstable_cache를 활용한 On-demand Revalidation 캐싱 전략을 사용 중입니다.

# Task
다음 정보를 바탕으로 새로운 Payload Global을 생성하고 캐싱을 적용해주세요:

## Global 정보
- Slug: {GLOBAL_SLUG} (예: "about", "contact", "settings")
- Label: {GLOBAL_LABEL} (예: "About Page", "Contact Info", "Site Settings")
- Description: {GLOBAL_DESCRIPTION} (예: "About 페이지에 표시될 내용을 관리합니다")

## 필드 구조
{필드 구조 설명 - 예시}
- title: text (필수)
- description: textarea (선택)
- image: upload (relationTo: 'media', 선택)

## 기본 depth
- 기본 depth: {DEFAULT_DEPTH} (예: 0 또는 1)

# Requirements (엄격 준수)

1. **Global Config 생성**
   - 파일: `src/payload-components/globals/{Name}Payload.ts`
   - `GlobalConfig` 타입 사용
   - slug, label, admin.description 설정

2. **Query 함수 생성**
   - 파일: `src/lib/payload/queries/{slug}.ts`
   - `getCachedData` 유틸리티 사용 (cache-utils.ts 참고)
   - `fetch{Name}Data` 내부 함수 생성 (DB 조회 로직)
   - `get{Name}Data` export 함수 생성
   - 로깅: `🔴 [Name] DB 조회 중...`, `🟢 [Name] DB 조회 완료`
   - 기본 depth: {DEFAULT_DEPTH}

3. **Revalidate 함수 추가**
   - 파일: `src/lib/payload/revalidate.ts`
   - `revalidate{Name}()` 함수 추가
   - `revalidateAllGlobals()` 함수에 추가

4. **Payload Config 등록**
   - 파일: `src/payload.config.ts`
   - import 및 globals 배열에 추가

5. **Query Export 추가**
   - 파일: `src/lib/payload/queries/index.ts`
   - `get{Name}Data` export 추가

6. **Payload Config Hook 추가**
   - Global Config에 `afterChange` 훅 추가
   - `revalidate{Name}()` 호출

7. **타입 생성**
   - 작업 후 `npx payload generate:types` 실행 안내

# Code Style
- TypeScript 사용
- 함수명: camelCase
- 파일명: kebab-case
- 로깅: 이모지 사용 (🔴, 🟢, 🔄)
- 주석: 한국어

# 참고 파일
- 기존 예시: `src/lib/payload/queries/hero.ts`
- 기존 예시: `src/payload-components/globals/HeroPayload.ts`
- 캐시 유틸리티: `src/lib/payload/queries/cache-utils.ts`
```

---

## 🎯 실제 사용 예시

### 예시 1: About Global 추가

```
# Role
당신은 Next.js 15 (App Router)와 Payload CMS v3 전문가입니다.

# Context
현재 프로젝트는 Payload CMS의 Local API를 사용하여 데이터를 가져오고 있으며,
unstable_cache를 활용한 On-demand Revalidation 캐싱 전략을 사용 중입니다.

# Task
다음 정보를 바탕으로 새로운 Payload Global을 생성하고 캐싱을 적용해주세요:

## Global 정보
- Slug: "about"
- Label: "About Page Settings"
- Description: "About 페이지에 표시될 내용을 관리합니다"

## 필드 구조
- title: text (필수) - 페이지 제목
- description: textarea (선택) - 페이지 설명
- mission: group
  - title: text (필수) - 미션 제목
  - content: textarea (필수) - 미션 내용
- image: upload (relationTo: 'media', 선택) - 대표 이미지

## 기본 depth
- 기본 depth: 1 (이미지 관계 포함)

# Requirements (엄격 준수)

1. **Global Config 생성**
   - 파일: `src/payload-components/globals/AboutPayload.ts`
   - `GlobalConfig` 타입 사용
   - slug: 'about', label: 'About Page Settings'

2. **Query 함수 생성**
   - 파일: `src/lib/payload/queries/about.ts`
   - `getCachedData` 유틸리티 사용
   - `fetchAboutData` 내부 함수 생성
   - `getAboutData` export 함수 생성
   - 기본 depth: 1

3. **Revalidate 함수 추가**
   - `src/lib/payload/revalidate.ts`에 `revalidateAbout()` 추가
   - `revalidateAllGlobals()`에 추가

4. **Payload Config 등록**
   - `src/payload.config.ts`에 import 및 등록

5. **Query Export 추가**
   - `src/lib/payload/queries/index.ts`에 export 추가

6. **Payload Config Hook 추가**
   - `AboutPayload`에 `afterChange` 훅 추가

7. **타입 생성**
   - `npx payload generate:types` 실행 안내

# Code Style
- TypeScript 사용
- 함수명: camelCase
- 파일명: kebab-case
- 로깅: 이모지 사용 (🔴, 🟢, 🔄)
- 주석: 한국어

# 참고 파일
- 기존 예시: `src/lib/payload/queries/hero.ts`
- 기존 예시: `src/payload-components/globals/HeroPayload.ts`
- 캐시 유틸리티: `src/lib/payload/queries/cache-utils.ts`
```

---

## 📝 체크리스트

새로운 Global 추가 후 확인사항:

- [ ] `src/payload-components/globals/{Name}Payload.ts` 생성
- [ ] `src/lib/payload/queries/{slug}.ts` 생성
- [ ] `src/lib/payload/revalidate.ts`에 함수 추가
- [ ] `src/payload.config.ts`에 등록
- [ ] `src/lib/payload/queries/index.ts`에 export 추가
- [ ] `afterChange` 훅 추가
- [ ] `npx payload generate:types` 실행
- [ ] 타입 에러 확인
- [ ] 테스트: `/api/cache/test` 또는 서버 로그 확인

---

## 🔄 Collection 추가 시

Collection의 경우 약간 다릅니다:

```
# Collection 정보
- Slug: {COLLECTION_SLUG}
- Label: {COLLECTION_LABEL}
- Fields: {필드 구조}

# 차이점
1. Query 함수에서 `findGlobal` 대신 `find` 또는 `findByID` 사용
2. Revalidate는 `afterChange` 훅에서 개별 문서 ID 기반으로 처리
3. Collection은 여러 문서가 있으므로 캐싱 전략이 다를 수 있음
```

---

## 💡 팁

1. **Naming Convention**
   - Global slug: kebab-case (예: `about-page`)
   - 함수명: camelCase (예: `getAboutPageData`)
   - 파일명: kebab-case (예: `about-page.ts`)

2. **Cache Tag 규칙**
   - Global: `{slug}-global` (예: `about-global`)
   - Collection: `{slug}-collection` (예: `posts-collection`)

3. **기본 depth 선택**
   - 관계 데이터가 없으면: `depth: 0`
   - 이미지나 관계 데이터가 있으면: `depth: 1` 또는 `depth: 2`

4. **테스트**
   - 첫 호출: `🔴 DB 조회 중...` 확인
   - 재호출: `🟢 캐시 사용` 확인
   - Payload Admin에서 수정 후: `🔄 캐시 무효화` 확인
