import Image from 'next/image';

type TextWithImageSectionProps = {
  title: string;
  subtitle?: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  imagePosition?: 'left' | 'right';
  backgroundColor?: string;
  titleColor?: string;
  textColor?: string;
  accentColor?: string;
  showAccentLine?: boolean;
  className?: string;
};

export function TextWithImageSection({
  title,
  subtitle,
  description,
  imageUrl,
  imageAlt,
  imagePosition = 'right',
  backgroundColor = 'bg-foreground',
  titleColor = 'text-primary',
  textColor = '',
  accentColor = 'bg-secondary',
  showAccentLine = true,
  className = '',
}: TextWithImageSectionProps) {
  const textContent = (
    <div className='flex-1 flex flex-col justify-start items-start gap-6 md:gap-10'>
      {/* Title with Optional Decorative Line */}
      <div className='flex flex-col justify-start items-start gap-3 w-full'>
        <h1 className={titleColor}>{title}</h1>
        {subtitle && <p className='text-muted-foreground'>{subtitle}</p>}
        {showAccentLine && <div className={`w-24 h-1.5 ${accentColor}`} />}
      </div>

      {/* Description */}
      <p className={`whitespace-pre-line ${textColor}`}>{description}</p>
    </div>
  );

  const imageContent = (
    <div className='w-full lg:w-auto lg:flex-1 lg:max-w-[600px]'>
      <div className='relative w-full aspect-4/3 bg-muted overflow-hidden'>
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
  );

  return (
    <section className={`${backgroundColor} section-padding-lg ${className}`}>
      <div className='container mx-auto px-6 max-w-[1440px]'>
        <div className='flex flex-col lg:flex-row justify-between items-center lg:items-center gap-10 lg:gap-20'>
          {imagePosition === 'left' ? (
            <>
              {imageContent}
              {textContent}
            </>
          ) : (
            <>
              {textContent}
              {imageContent}
            </>
          )}
        </div>
      </div>
    </section>
  );
}
