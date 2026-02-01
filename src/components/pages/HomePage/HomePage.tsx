import { AcademicsSection } from '@/components/AcademicsSection';
import { CallToAction } from '@/components/CallToAction';
import { Hero } from '@/components/Hero';
import { InformationResourcesSection } from '@/components/InformationResourcesSection';
import { TextWithImageSection } from '@/components/TextWithImageSection';
import { TwoColumnTextSection } from '@/components/TwoTextSection';
import {
  academicsContent,
  callToActionContent,
  facultyMentorshipContent,
  whyWjuContent,
} from '@/config/home-content';
import { getHeroData } from '@/lib/payload/queries';

export async function HomePage() {
  // Payload CMS에서 Hero 데이터를 가져옵니다.
  // depth: 1을 주면 이미지(Media) 상세 정보까지 한 번에 가져옵니다.
  const heroData = await getHeroData({ depth: 1 });

  if (!heroData) {
    return (
      <div className='flex items-center justify-center min-h-screen'>
        <p className='text-lg text-muted-foreground'>
          데이터가 없습니다. 관리자 페이지에서 먼저 내용을 입력해 주세요.
        </p>
      </div>
    );
  }

  return (
    <>
      <Hero data={heroData} />
      <CallToAction
        title={callToActionContent.title}
        description={callToActionContent.description}
        buttonText={callToActionContent.buttonText}
        href={callToActionContent.href}
      />
      <TextWithImageSection
        title={whyWjuContent.title}
        description={whyWjuContent.description}
        imageUrl={whyWjuContent.imageUrl}
        imageAlt={whyWjuContent.imageAlt}
        button={true}
        buttonText={whyWjuContent.buttonText}
        buttonHref={whyWjuContent.buttonHref}
      />
      <TwoColumnTextSection
        title={facultyMentorshipContent.title}
        content={facultyMentorshipContent.content}
        link={facultyMentorshipContent.link}
        spacing={facultyMentorshipContent.spacing}
      />
      <AcademicsSection
        title={academicsContent.title}
        programs={academicsContent.programs}
      />
      <InformationResourcesSection />
    </>
  );
}
