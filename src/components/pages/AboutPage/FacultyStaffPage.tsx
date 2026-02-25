import {
  ScrollReveal,
  ScrollRevealChild,
} from '@/components/scroll-animation/scroll-reveal';
import { LinkCardsCarouselSection } from '@/components/sections/LinkCardsCarouselSection';
import {
  ABOUT_LINK_CARDS,
  ABOUT_LINK_CARDS_TITLE,
} from '@/config/about-link-content';
import {
  FACULTY_SECTION_TITLE,
  STAFF_SECTION_TITLE,
} from '@/config/faculty-staff-content';
import { getFacultyStaffData } from '@/lib/payload/queries';
import { PageHero } from '../../layout/PageHero';
import {
  FacultyCard,
  type PayloadFaculty,
} from './components/FacultyCard';
import {
  StaffCard,
  type PayloadStaff,
} from './components/StaffCard';

export async function FacultyStaffPage() {
  const data = await getFacultyStaffData({ depth: 1 });

  const facultyList = data?.faculty ?? [];
  const staffList = data?.staff ?? [];

  return (
    <>
      <PageHero
        title='Faculty & Staff'
        subtitle='Welcome'
        imageUrl='/wju-hero-img.png'
        imageAlt='Washington Jabez University campus'
      />

      {/* ── Faculty Section ── */}
      <section className='relative bg-white overflow-hidden'>
        <div className='absolute top-0 h-1.5 w-full bg-secondary' />

        {/* 섹션 헤더 */}
        <div className='relative mx-auto max-w-[1440px] px-6 md:px-8 2xl:px-0 section-header-padding'>
          <div className='flex flex-col items-center gap-4 text-center'>
            <ScrollReveal variant='fade-up' duration={0.7}>
              <h2 className='text-primary'>{FACULTY_SECTION_TITLE}</h2>
            </ScrollReveal>
            <div className='w-24 h-0.5 bg-secondary' />
          </div>
        </div>

        {/* 모자이크 그리드 + 장식용 세로 레이블 */}
        <div className='relative'>
          <div
            className='hidden xl:flex absolute left-0 top-0 bottom-0 w-14 items-center justify-center z-10 pointer-events-none select-none'
            aria-hidden='true'
          >
            <span
              className='text-4xl font-serif font-bold text-gray-100 uppercase tracking-[0.35em]'
              style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
            >
              {FACULTY_SECTION_TITLE}
            </span>
          </div>

          <div className='xl:pl-14'>
            {facultyList.length > 0 ? (
              (facultyList as PayloadFaculty[]).map((member, index) => (
                <FacultyCard
                  key={member.id ?? member.name}
                  member={member}
                  index={index}
                />
              ))
            ) : (
              <p className='text-center text-muted-foreground py-16 px-6'>
                Faculty information coming soon.
              </p>
            )}
          </div>
        </div>

        <div className='section-padding-bottom' />
      </section>

      {/* ── Staff Section ── */}
      <section className='relative bg-foreground overflow-hidden'>
        <div className='absolute top-0 h-1.5 w-full bg-secondary' />

        <div className='relative mx-auto max-w-[1440px] px-6 md:px-8 2xl:px-0 section-padding-lg'>
          {/* 섹션 헤더 */}
          <div className='flex flex-col items-center gap-4 text-center mb-14 md:mb-20'>
            <ScrollReveal variant='fade-up' duration={0.7}>
              <h2 className='text-primary'>{STAFF_SECTION_TITLE}</h2>
            </ScrollReveal>
            <div className='w-24 h-0.5 bg-secondary' />
          </div>

          {/* 스태프 그리드 */}
          {staffList.length > 0 ? (
            <ScrollReveal variant='fade-up' stagger staggerChildren={0.08}>
              <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8'>
                {(staffList as PayloadStaff[]).map((member) => (
                  <ScrollRevealChild key={member.id ?? member.name}>
                    <StaffCard member={member} />
                  </ScrollRevealChild>
                ))}
              </div>
            </ScrollReveal>
          ) : (
            <p className='text-center text-muted-foreground py-16'>
              Staff information coming soon.
            </p>
          )}
        </div>
      </section>

      <LinkCardsCarouselSection
        title={ABOUT_LINK_CARDS_TITLE}
        items={ABOUT_LINK_CARDS}
        shouldExcludeCurrentPath
      />
    </>
  );
}
