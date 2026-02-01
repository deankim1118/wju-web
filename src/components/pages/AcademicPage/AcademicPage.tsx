import { CallToAction } from '@/components/CallToAction';
import {
  ACADEMICS_PAGE_CONTENT,
  getDegreeProgramsByLevel,
} from '@/config/academics-content';

import { AcademicInquirySection } from '@/components/academics/inquiry/academic-inquiry-section';
import { callToActionContent } from '@/config/home-content';
import {
  ACADEMICS_LINK_CARDS,
  ACADEMICS_LINK_CARDS_TITLE,
} from '../../../config/academic-link-content';
import { PageHero } from '../../layout/PageHero';
import { LinkCardsCarouselSection } from '../../sections/LinkCardsCarouselSection';
import { DegreeProgramsSection } from './components/DegreeProgramsSection';

export function AcademicPage() {
  const undergraduate = getDegreeProgramsByLevel('Undergraduate');
  const graduate = getDegreeProgramsByLevel('Graduate');
  const doctoral = getDegreeProgramsByLevel('Doctoral');

  return (
    <>
      <PageHero
        title={ACADEMICS_PAGE_CONTENT.hero.title}
        subtitle={ACADEMICS_PAGE_CONTENT.hero.subtitle}
        imageUrl={ACADEMICS_PAGE_CONTENT.hero.imageUrl}
        imageAlt={ACADEMICS_PAGE_CONTENT.hero.imageAlt}
      />

      <CallToAction
        title={callToActionContent.title}
        description={callToActionContent.description}
        buttonText={callToActionContent.buttonText}
        subButtonText='Apply'
        href={callToActionContent.href}
      />

      <DegreeProgramsSection
        id={ACADEMICS_PAGE_CONTENT.programs.sectionId}
        title={ACADEMICS_PAGE_CONTENT.programs.title}
        groups={[
          {
            level: 'Undergraduate',
            title: 'Undergraduate Programs',
            description:
              'Start with foundational training in theology, counseling, and religious studies.',
            programs: undergraduate,
          },
          {
            level: 'Graduate',
            title: 'Graduate Programs',
            description:
              'Pursue advanced formation for ministry leadership, counseling, education, and research.',
            programs: graduate,
          },
          {
            level: 'Doctoral',
            title: 'Doctoral Program',
            description:
              'Doctoral-level professional formation for experienced ministry leaders.',
            programs: doctoral,
          },
        ]}
      />
      <AcademicInquirySection />
      <LinkCardsCarouselSection
        title={ACADEMICS_LINK_CARDS_TITLE}
        items={ACADEMICS_LINK_CARDS}
        shouldExcludeCurrentPath
      />
    </>
  );
}
