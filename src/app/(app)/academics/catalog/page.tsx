import { PageHero } from '@/components/PageHero';
import { TitleBodySection } from '@/components/sections/TitleBodySection';

export default function CourseCatalog() {
  return (
    <>
      <PageHero
        title='Course Catalog'
        subtitle='Coming soon'
        imageUrl='/wju-hero-img.png'
        imageAlt='Course catalog hero'
      />
      <TitleBodySection
        title='Course Catalog'
        body={
          <div className='mx-auto max-w-3xl text-center text-white/85'>
            We’re preparing the catalog details now. Please check back soon.
          </div>
        }
        backgroundColor='bg-primary'
        textColor='text-white'
      />
    </>
  );
}

