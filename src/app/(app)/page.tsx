import { AcademicsSection } from '@/components/AcademicsSection';
import { CallToAction } from '@/components/CallToAction';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/Hero';
import { InformationResourcesSection } from '@/components/InformationResourcesSection';
import { Header } from '@/components/layout/header/Header';
import { TextWithImageSection } from '@/components/TextWithImageSection';
import { TwoColumnTextSection } from '@/components/TwoColumnTextSection';
import {
  academicsContent,
  callToActionContent,
  facultyMentorshipContent,
  informationResourcesContent,
  whyWjuContent,
} from '@/config/home-content';
import { getHeroData } from '@/lib/payload/queries';

export default async function Home() {
  // Payload CMS에서 Hero 데이터를 가져옵니다.
  // depth: 1을 주면 이미지(Media) 상세 정보까지 한 번에 가져옵니다.
  const heroData = await getHeroData({ depth: 1 });

  if (!heroData)
    return (
      <div>데이터가 없습니다. 관리자 페이지에서 먼저 내용을 입력해 주세요.</div>
    );
  return (
    <div className='min-h-screen flex flex-col'>
      <Header />
      <main className='flex-1' id='maincontent'>
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
        <InformationResourcesSection
          title={informationResourcesContent.title}
          resources={informationResourcesContent.resources}
        />
      </main>
      <Footer />
    </div>
  );
}
