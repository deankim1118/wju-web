import { PageHero } from '@/components/PageHero';
import {
  aboutChairmanPageContent,
  aWordChairmanContent,
  chairmanBiographyContent,
} from '../../../config/about-content';
import { TextWithImageSection } from '../../TextWithImageSection';
import { TwoColumnTextSection } from '../../TwoColumnTextSection';

export function AboutPage() {
  return (
    <>
      <PageHero
        title='Washington Jabez University'
        subtitle='Welcome'
        imageUrl='/wju-hero-img.png'
        imageAlt='Winchester Jung University campus'
      />
      {/* 추가 섹션들은 여기에 추가됩니다 */}

      <TextWithImageSection
        title={aWordChairmanContent.title}
        subtitle={aWordChairmanContent.subtitle}
        description={aWordChairmanContent.description}
        imagePosition='left'
        imageUrl={aWordChairmanContent.imageUrl}
        imageAlt={aWordChairmanContent.imageAlt}
      />
      <TwoColumnTextSection
        title={aboutChairmanPageContent.title}
        content={aboutChairmanPageContent.content}
        spacing={aboutChairmanPageContent.spacing}
        backgroundColor='bg-amber-600'
        textColor='text-white'
        titleColor='text-white'
      />
      <TextWithImageSection
        title={chairmanBiographyContent.title}
        subtitle={chairmanBiographyContent.subtitle}
        description={chairmanBiographyContent.description}
        imageUrl={chairmanBiographyContent.imageUrl}
        imageAlt={chairmanBiographyContent.imageAlt}
        imagePosition='right'
      />
    </>
  );
}
