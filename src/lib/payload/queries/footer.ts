/**
 * Footer Global 데이터 페칭 함수
 *
 * Payload CMS의 Footer 글로벌 데이터를 가져옵니다.
 * 연락처 정보를 포함합니다.
 */

import { getPayloadClient } from '../payloadClient';

type FooterQueryOptions = {
  depth?: number;
  draft?: boolean;
};

export async function getFooterData(options: FooterQueryOptions = {}) {
  const { depth = 0, draft = true } = options;

  try {
    const payload = await getPayloadClient();

    const footerData = await payload.findGlobal({
      slug: 'footer',
      depth,
      draft,
    });

    if (!footerData) {
      console.warn('Footer global data not found.');
      return null;
    }

    return footerData;
  } catch (error) {
    console.error('[Footer Fetch Error]', error);
    if (error instanceof Error) {
      console.error('Message:', error.message);
    }
    return null;
  }
}
