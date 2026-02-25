/**
 * Payload Global Config 팩토리 헬퍼
 *
 * 모든 Global에 공통으로 필요한 패턴을 한 곳에서 관리합니다:
 *   - versions.drafts: true  → Draft / Publish 워크플로우
 *   - afterChange 훅         → Publish 시에만 캐시 무효화 (draft 자동저장 무시)
 *
 * 사용법:
 *   export const MyGlobal = withDraftPublish(
 *     { slug: 'my-global', label: '...', fields: [...] },
 *     { revalidate: revalidateMyGlobal },
 *   );
 *
 * 새 Global을 추가할 때 이 함수만 사용하면 versions/hooks 설정을 직접 작성할 필요가 없습니다.
 */

import type { GlobalConfig } from 'payload';

type WithDraftPublishOptions = {
  /** Publish 시 실행할 Next.js 캐시 무효화 함수 */
  revalidate: () => void;
};

export function withDraftPublish(
  config: GlobalConfig,
  options: WithDraftPublishOptions,
): GlobalConfig {
  const { revalidate } = options;

  return {
    ...config,
    versions: {
      drafts: true,
    },
    hooks: {
      ...config.hooks,
      afterChange: [
        async ({ doc }) => {
          // draft 자동저장 시 캐시 무효화 건너뜀 — Publish 시에만 실행
          // ⚠️ _status 타입은 `npx payload generate:types` 실행 후 자동으로 추가됩니다.
          if ((doc as { _status?: string })._status !== 'published') return doc;
          revalidate();
          return doc;
        },
        // 개별 Global에 별도 afterChange 훅이 있으면 그 뒤에 실행됩니다.
        ...(config.hooks?.afterChange ?? []),
      ],
    },
  };
}
