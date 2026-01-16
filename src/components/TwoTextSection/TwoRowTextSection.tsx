import Image from 'next/image';
import Link from 'next/link';

type LinkConfig = {
  text: string;
  href: string;
  showArrow?: boolean;
};

type TwoRowTextSectionProps = {
  title: string;
  content: string;
  link?: LinkConfig;
  imageUrl?: string;
  imageAlt?: string;
  titleColor?: string;
  textColor?: string;
  linkColor?: string;
  backgroundColor?: string;
  spacing?: 'tight' | 'normal' | 'loose';
  className?: string;
};

export function TwoRowTextSection({
  title,
  content,
  link,
  imageUrl,
  imageAlt,
  titleColor = 'text-secondary',
  textColor = '',
  linkColor = 'text-secondary',
  backgroundColor = 'bg-background',
  spacing = 'tight',
  className = '',
}: TwoRowTextSectionProps) {
  const spacingMap = {
    tight: 'py-8',
    normal: 'section-padding-sm',
    loose: 'section-padding-lg',
  };

  return (
    <section
      className={`${backgroundColor} ${spacingMap[spacing]} ${className}`}
    >
      <div className='container mx-auto px-6 max-w-7xl'>
        <div className='flex flex-col justify-between items-start gap-8 md:gap-12'>
          {/* Title Section */}
          <div className='flex-1 italic'>
            <h1 className={titleColor}>{title}</h1>
          </div>

          {/* Content Section */}
          <div className=' flex flex-col md:flex-row justify-between items-end md:items-start gap-6 w-full'>
            <div className='flex-1 flex flex-col justify-start items-start gap-4 lg:gap-6 w-full'>
              <p
                className={`whitespace-pre-line font-bold uppercase tracking-widest ${textColor}`}
              >
                {content}
              </p>

              {/* Optional Link */}
              {link && (
                <Link
                  href={link.href}
                  className={`group inline-flex items-center gap-2 ${linkColor} text-sm md:text-base font-semibold uppercase tracking-wider transition-all hover:gap-3 hover:opacity-80`}
                >
                  {link.text}
                  {link.showArrow !== false && (
                    <span className='transition-transform group-hover:translate-x-1'>
                      &gt;
                    </span>
                  )}
                </Link>
              )}
            </div>

            {/* 오른쪽 이미지 영역 (Optional) */}
            {imageUrl && (
              <div className='w-2/5 md:w-2/8 h-auto z-10'>
                <div className='relative w-full aspect-4/3 max-w-sm'>
                  <Image
                    src={imageUrl}
                    alt={imageAlt || 'Section image'}
                    fill
                    className='object-cover drop-shadow-2xl'
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
