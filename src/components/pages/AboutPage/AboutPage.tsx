import { PageHero } from '@/components/PageHero';
import { LinkCardsCarouselSection } from '@/components/sections/LinkCardsCarouselSection';
import { ABOUT_LINK_CARDS, ABOUT_LINK_CARDS_TITLE } from '@/config/about-foundation';
import { getChairmanMessageData } from '@/lib/payload/queries';
import {
  aboutChairmanPageContent,
  prayerContent,
} from '../../../config/about-content';
import { TextWithImageSection } from '../../TextWithImageSection';
import { TwoRowTextSection } from '../../TwoTextSection';

export async function AboutPage() {
  // Payload에서 Chairman's Message 데이터 가져오기
  const chairmanMessageData = await getChairmanMessageData({ depth: 1 });

  // 이미지 URL 및 alt 추출 (depth=1이므로 Media 객체가 풀려서 옴)
  const image =
    chairmanMessageData?.image && typeof chairmanMessageData.image === 'object'
      ? chairmanMessageData.image
      : null;

  const imageUrl = image?.url || '/wju-hero-img.png';
  const imageAlt = image?.alt || "Washington Jabez University Chairman's Message";

  return (
    <>
      <PageHero
        title='Washington Jabez University'
        subtitle='Welcome'
        imageUrl='/wju-hero-img.png'
        imageAlt='Washington Jabez University campus'
      />
      {/* 추가 섹션들은 여기에 추가됩니다 */}

      {chairmanMessageData && (
        <TextWithImageSection
          title={chairmanMessageData.title || ''}
          subtitle={
            typeof chairmanMessageData.subtitle === 'string'
              ? chairmanMessageData.subtitle
              : undefined
          }
          description={
            typeof chairmanMessageData.description === 'string'
              ? chairmanMessageData.description
              : ''
          }
          imagePosition='left'
          imageUrl={imageUrl}
          imageAlt={imageAlt}
          author={
            typeof chairmanMessageData.author === 'string'
              ? chairmanMessageData.author
              : undefined
          }
          authorTitle={
            typeof chairmanMessageData.authorTitle === 'string'
              ? chairmanMessageData.authorTitle
              : undefined
          }
        />
      )}
      <TwoRowTextSection
        title={aboutChairmanPageContent.title}
        content={aboutChairmanPageContent.content}
        spacing={aboutChairmanPageContent.spacing}
        backgroundColor='bg-amber-600'
        textColor='text-white'
        titleColor='text-white'
      />
      <TextWithImageSection
        title={prayerContent.title}
        subtitle={prayerContent.subtitle}
        description={prayerContent.description}
        imageUrl={prayerContent.imageUrl}
        imageAlt={prayerContent.imageAlt}
        imagePosition='right'
      />
      <LinkCardsCarouselSection
        title={ABOUT_LINK_CARDS_TITLE}
        items={ABOUT_LINK_CARDS}
        shouldExcludeCurrentPath
      />
    </>
  );
}
