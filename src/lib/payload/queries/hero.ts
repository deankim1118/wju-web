/**
 * Hero Global 데이터 페칭 함수
 *
 * Payload CMS의 Hero 글로벌 데이터를 가져옵니다.
 * depth 옵션을 활용하여 관계된 이미지 데이터를 한 번에 가져옵니다.
 */

import { getPayloadClient } from '../payloadClient';

type HeroQueryOptions = {
  depth?: number;
  draft?: boolean;
};

export async function getHeroData(options: HeroQueryOptions = {}) {
  // depth: 1이면 slides 배열 안의 image 객체까지 자동으로 population 됩니다.
  // 혹시 중첩이 깊다면 2로 설정하세요.
  const { depth = 1, draft = true } = options;

  try {
    // 공식적인 방법으로 Payload 인스턴스 가져오기
    const payload = await getPayloadClient();

    // [핵심] findGlobal 한 번 호출로 끝냅니다.
    // Payload가 알아서 slides 안의 image id를 조회해서 객체로 바꿔줍니다.
    // draft: true로 설정하여 draft 데이터도 가져올 수 있도록 함
    const heroData = await payload.findGlobal({
      slug: 'hero',
      depth,
      draft,
    });

    if (!heroData) {
      console.warn('Hero global data not found.');
      return null;
    }

    return heroData;
  } catch (error) {
    console.error('[Hero Fetch Error]', error);
    if (error instanceof Error) {
      console.error('Message:', error.message);
    }
    return null;
  }
}
