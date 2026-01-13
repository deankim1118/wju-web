import { AcademicsSection } from '@/components/AcademicsSection';
import { CallToAction } from '@/components/CallToAction';
import { Hero } from '@/components/Hero';
import { InformationResourcesSection } from '@/components/InformationResourcesSection';
import { Header } from '@/components/layout/header/Header';
import { TextWithImageSection } from '@/components/TextWithImageSection';
import { TwoColumnTextSection } from '@/components/TwoColumnTextSection';
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
        <CallToAction />
        <TextWithImageSection
          title='Why Washington Jabez University?'
          description={`Washington Jabez University is a religious institution exempt from state regulation and oversight in the Commonwealth of Virginia.

Washington Jabez University is a nondenominational Christian and educational organization, existing for the purpose of preparing students for the Lord's service.

Washington Jabez does not discriminate on the basis of race, sex, age, national or ethnic origin, or handicap in administration of its educational policies, admissions policies, and other school-administered programs.`}
          imageUrl='/wju-hero-img.png'
          imageAlt='Washington Jabez University Campus'
        />
        <TwoColumnTextSection
          title='Guides for Your Calling'
          content='Our faculty are not just scholars; they are pastors, counselors, and missionaries who are deeply committed to investing in your life. They will walk alongside you, guiding your academic growth and nurturing your spiritual formation for a lifetime of faithful ministry.'
          link={{
            text: 'Meet Your Mentors',
            href: '#',
            showArrow: true,
          }}
          spacing='tight'
        />
        <AcademicsSection />
        <InformationResourcesSection />
      </main>
    </div>
  );
}
