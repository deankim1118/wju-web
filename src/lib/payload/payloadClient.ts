/**
 * Payload CMS Client Singleton
 *
 * Payload 인스턴스를 싱글톤 패턴으로 관리하여
 * 여러 곳에서 재사용할 때 성능을 최적화합니다.
 */

import config from '@payload-config';
import { getPayload, type Payload } from 'payload';

type PayloadClient = Payload;

// 전역 변수에 Payload 인스턴스를 캐시합니다 (개발 환경에서 Hot Reload 대응)
const globalForPayload = globalThis as unknown as {
  payload: PayloadClient | undefined;
};

/**
 * Payload 인스턴스를 가져옵니다.
 * 이미 생성된 인스턴스가 있으면 재사용하고, 없으면 새로 생성합니다.
 */
export async function getPayloadClient(): Promise<PayloadClient> {
  if (globalForPayload.payload) {
    return globalForPayload.payload;
  }

  const payload = await getPayload({ config });

  // 개발 환경에서만 전역 변수에 저장 (Hot Reload 대응)
  if (process.env.NODE_ENV !== 'production') {
    globalForPayload.payload = payload;
  }

  return payload;
}
