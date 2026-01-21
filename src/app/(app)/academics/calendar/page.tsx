import { PageHero } from '@/components/PageHero';
import { TitleBodySection } from '@/components/sections/TitleBodySection';

export default function AcademicCalendar() {
  return (
    <>
      <PageHero
        title='Academic Calendar'
        subtitle='Coming soon'
        imageUrl='/wju-hero-img.png'
        imageAlt='Academic calendar hero'
      />
      <TitleBodySection
        title='Academic Calendar'
        body={
          <div className='mx-auto max-w-3xl text-center text-white/85'>
            We’re preparing this page now. Please check back soon.
          </div>
        }
        backgroundColor='bg-primary'
        textColor='text-white'
      />
    </>
  );
}

