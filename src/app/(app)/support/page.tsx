import { AcademicInquiryForm } from '@/components/academics/inquiry/academic-inquiry-form';
import { AcademicInquiryInfoPanel } from '@/components/academics/inquiry/academic-inquiry-info-panel';
import { ScrollReveal } from '@/components/scroll-animation/scroll-reveal';
import { Card } from '@/components/ui/card';

export default function SupportPage() {
  const mapAddress = '4421 Dale BLVD, Woodbridge, VA 22193';
  const mapEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(mapAddress)}&output=embed`;

  return (
    <section className='relative bg-primary section-padding-lg'>
      {/* Background Effects */}
      <div className='hidden lg:block absolute -right-16 -top-2 size-120 rounded-full bg-secondary/25 blur-3xl' />
      <div className='hidden lg:block absolute -left-24 -bottom-32 size-150 rounded-full bg-white/10 blur-3xl' />
      <div className='hidden lg:block absolute right-1/4 top-1/2 size-100 rounded-full bg-secondary/15 blur-3xl' />

      <div className='mx-auto max-w-7xl px-6 relative z-10'>
        {/* Header Section */}
        <ScrollReveal variant='fade-up' delay={0} duration={0.7}>
          <div className='flex flex-col items-center gap-6 mb-12 md:mb-16 text-center'>
            <h1 className='font-serif text-3xl md:text-4xl lg:text-5xl text-white uppercase'>
              Get in Touch
            </h1>
            <div className='flex flex-col gap-4 max-w-3xl'>
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
          </div>
        </ScrollReveal>

        {/* Inquiry Form Section */}
        <ScrollReveal variant='fade-up' delay={0.1} duration={0.7}>
          <Card className='rounded-none border-white/10 bg-white/95 shadow-[0px_30px_80px_rgba(0,0,0,0.25)] overflow-hidden mb-12 md:mb-16'>
            <div className='grid grid-cols-1 lg:grid-cols-2'>
              <AcademicInquiryForm />
              <AcademicInquiryInfoPanel showContactInfo={true} />
            </div>
          </Card>
        </ScrollReveal>

        {/* Google Maps Section */}
        <ScrollReveal variant='fade-up' delay={0.2} duration={0.7}>
          <div className='flex flex-col items-start gap-6 mb-8'>
            <h2 className='font-serif text-white uppercase'>
              Our Location
            </h2>
          </div>
          <Card className='rounded-none border-white/10 bg-white/95 shadow-[0px_30px_80px_rgba(0,0,0,0.25)] overflow-hidden'>
            <div className='relative w-full' style={{ paddingBottom: '56.25%' }}>
              <iframe
                src={mapEmbedUrl}
                width='100%'
                height='100%'
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  border: 0,
                }}
                allowFullScreen
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'
                title='Washington Jabez University Location'
                className='w-full h-full'
              />
            </div>
          </Card>
        </ScrollReveal>
      </div>
    </section>
  );
}
