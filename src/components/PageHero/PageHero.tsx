import Image from 'next/image';

export type PageHeroProps = {
  title: string;
  subtitle?: string;
  imageUrl: string;
  imageAlt?: string;
};

/**
 * 페이지별 Hero 섹션 컴포넌트
 * About, Academics 등 서브 페이지에서 사용하는 간단한 Hero 배너입니다.
 */
export function PageHero({
  title,
  subtitle,
  imageUrl,
  imageAlt = 'Page hero image',
}: PageHeroProps) {
  return (
    <section
      className='relative w-full h-[40vh] md:h-[50vh] overflow-hidden'
      aria-label='Page Hero'
    >
      {/* Background Image Container */}
      <div className='absolute inset-0 z-0 overflow-hidden'>
        {/* Top Gradient Overlay */}
        <div className='absolute top-0 h-1/2 bg-linear-to-b from-black z-10 opacity-50 w-full' />

        {/* Bottom Gradient Overlay */}
        <div className='absolute bottom-0 h-1/2 bg-linear-to-t from-black z-10 opacity-75 w-full' />

        {/* Background Image with Zoom Effect */}
        <div className='relative w-full h-full slow-zoom'>
          <Image
            src={imageUrl}
            alt={imageAlt}
            fill
            className='object-cover'
            priority
            sizes='100vw'
          />
        </div>
      </div>

      {/* Content */}
      <div className='relative z-20 flex flex-col gap-1 items-start mx-auto justify-end-safe h-full px-6 md:px-8 2xl:px-0 max-w-[1440px] pb-10 md:pb-16'>
        {subtitle && (
          <p className='text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl'>
            {subtitle}
          </p>
        )}
        <h1 className='pl-2 md:pl-5 hero-title-sm text-white mb-4 capitalize text-start'>
          {title}
        </h1>
      </div>
    </section>
  );
}
