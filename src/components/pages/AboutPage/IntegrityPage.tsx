import { PageHero } from '@/components/PageHero';
import { LinkCardsCarouselSection } from '@/components/sections/LinkCardsCarouselSection';
import { TitleBodySection } from '@/components/sections/TitleBodySection';
import { TwoRowTextSection } from '@/components/TwoTextSection';
import {
  aboutIntegritynContent
} from '@/config/about-content';
import { ABOUT_LINK_CARDS, ABOUT_LINK_CARDS_TITLE } from '@/config/about-foundation';
import { INTEGRITY_CONTENT } from '@/config/integrity-content';


export async function IntegrityPage() {
  return (
    <>
      <PageHero
        title='Institutional Integrity'
        subtitle='Welcome'
        imageUrl='/wju-hero-img.png'
        imageAlt='Washington Jabez University campus'
      />
      <TwoRowTextSection
        title={aboutIntegritynContent.title}
        content={aboutIntegritynContent.content}
        spacing={aboutIntegritynContent.spacing}
        backgroundColor='bg-foreground'
        textColor='text-primary'
        contentTextVariant='body'
        titleColor='text-secondary text-2xl md:text-2xl lg:text-3xl '
      />
      {/* <TwoColumnTextSection
        title={aboutIntegritynContent.title}
        content={aboutIntegritynContent.content}
        spacing={aboutIntegritynContent.spacing}
        backgroundColor='bg-foreground'
        textColor='text-primary'
        titleColor='text-secondary'
      />
       */}
      <TitleBodySection
        title={INTEGRITY_CONTENT.title}
        subtitle={INTEGRITY_CONTENT.subtitle}
        body={
          <div className='flex flex-col gap-10'>
            {INTEGRITY_CONTENT.items.map((item) => (
              <div key={item.heading} className='flex flex-col gap-4'>
                <h3 className='font-serif font-semibold leading-7'>
                  {item.heading}
                </h3>
                <p className='whitespace-pre-line text-white/80'>
                  {item.body}
                </p>
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
