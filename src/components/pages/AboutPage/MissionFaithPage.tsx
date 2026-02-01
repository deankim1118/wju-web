import { LinkCardsCarouselSection } from '@/components/sections/LinkCardsCarouselSection';
import { TitleBodySection } from '@/components/sections/TitleBodySection';
import { TextWithImageSection } from '@/components/TextWithImageSection';
import { TwoColumnTextSection } from '@/components/TwoTextSection';
import {
  aboutOurMissionContent,
  aboutOurVisionContent,
} from '@/config/about-content';
import {
  ABOUT_LINK_CARDS,
  ABOUT_LINK_CARDS_TITLE,
} from '@/config/about-link-content';
import { STATEMENT_OF_FAITH_CONTENT } from '@/config/statement-of-faith';
import { PageHero } from '../../layout/PageHero';

export async function MissionFaithPage() {
  return (
    <>
      <PageHero
        title='Mission & Faith'
        subtitle='Welcome'
        imageUrl='/wju-hero-img.png'
        imageAlt='Washington Jabez University campus'
      />
      <TwoColumnTextSection
        title={aboutOurVisionContent.title}
        content={aboutOurVisionContent.content}
        spacing={aboutOurVisionContent.spacing}
        backgroundColor='bg-primary'
        textColor='text-white'
        titleColor='text-white'
      />

      <TextWithImageSection
        title={aboutOurMissionContent.title}
        description={aboutOurMissionContent.description}
        imagePosition='left'
        imageUrl={aboutOurMissionContent.imageUrl}
        imageAlt={aboutOurMissionContent.imageAlt}
      />

      <TitleBodySection
        title={STATEMENT_OF_FAITH_CONTENT.title}
        body={
          <div className='flex flex-col gap-10'>
            {STATEMENT_OF_FAITH_CONTENT.items.map((item) => (
              <div key={item.heading} className='flex flex-col gap-4'>
                <h3 className='font-serif font-semibold leading-7'>
                  {item.heading}
                </h3>
                <p className='whitespace-pre-line text-white/80'>{item.body}</p>
              </div>
            ))}
          </div>
        }
      />

      <LinkCardsCarouselSection
        title={ABOUT_LINK_CARDS_TITLE}
        items={ABOUT_LINK_CARDS}
        shouldExcludeCurrentPath
      />
    </>
  );
}
