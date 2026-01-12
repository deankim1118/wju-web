import Image from 'next/image';

type SchoolIntroductionProps = {
  title?: string;
  subtitle?: string;
  description?: string;
  imageUrl?: string;
  imageAlt?: string;
};

export function SchoolIntroduction({
  title = 'Why Washington Jabez University?',
  subtitle,
  description = `Washington Jabez University is a religious institution exempt from state regulation and oversight in the Commonwealth of Virginia.

Washington Jabez University is a nondenominational Christian and educational organization, existing for the purpose of preparing students for the Lord's service.

Washington Jabez does not discriminate on the basis of race, sex, age, national or ethnic origin, or handicap in administration of its educational policies, admissions policies, and other school-administered programs.`,
  imageUrl = '/wju-hero-img.png',
  imageAlt = 'Washington Jabez University Campus',
}: SchoolIntroductionProps) {
  return (
    <section className='bg-foreground py-12 lg:py-20'>
      <div className='container mx-auto px-6 max-w-[1440px]'>
        <div className='flex flex-col lg:flex-row justify-between items-center lg:items-center gap-8 lg:gap-16'>
          {/* Left Content - Text */}
          <div className='flex-1 flex flex-col justify-start items-start gap-6'>
            {/* Title with Decorative Line */}
            <div className='flex flex-col justify-start items-start gap-3 w-full'>
              <h1 className='text-primary'>{title}</h1>
              {subtitle && <p className='text-muted-foreground'>{subtitle}</p>}
              <div className='w-24 h-1.5 bg-rose-900' />
            </div>

            {/* Description */}
            <p className='text-gray-800 whitespace-pre-line'>{description}</p>
          </div>

          {/* Right Content - Image */}
          <div className='w-full lg:w-auto lg:flex-1 lg:max-w-[600px]'>
            <div className='relative w-full aspect-4/3 bg-neutral-300 overflow-hidden'>
              <Image
                src={imageUrl}
                alt={imageAlt}
                fill
                className='object-cover'
                sizes='(max-width: 1024px) 100vw, 600px'
                priority={false}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
