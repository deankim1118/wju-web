import { AcademicInquirySection } from '@/components/academics/inquiry/academic-inquiry-section';
import { TitleBodySection } from '@/components/sections/TitleBodySection';

export default function RequestInfoPage() {
  return (
    <>
      {/* <PageHero
        title='Request Information'
        subtitle='Contact Us'
        imageUrl='/wju-hero-img.png'
        imageAlt='Washington Jabez University campus'
      /> */}

      <TitleBodySection
        title='Get in Touch'
        body={
          <div className='flex flex-col gap-6 text-center max-w-3xl mx-auto '>
            <p className='text-lg text-white/90 leading-relaxed'>
              We're here to help you take the next step in your theological education journey.
              Whether you're exploring degree programs, have questions about admissions, or want
              to learn more about Washington Jabez University, we'd love to hear from you.
            </p>
            <p className='text-base text-white/80 leading-relaxed'>
              Fill out the form below, and our admissions team will reach out with personalized
              information, program details, and guidance tailored to your calling and goals.
            </p>
          </div>
        }
        backgroundColor='bg-primary'
        textColor='text-white'
        padding='pt-12 md:pt-16 lg:pt-24'
      />

      <AcademicInquirySection showContactInfo={true} />
    </>
  );
}
