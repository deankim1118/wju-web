import { cn } from '@/lib/utils';
import { getHeroImageUrl } from '@/lib/utils/hero';
import type { HeroImage } from '@/types/hero';
import Image from 'next/image';

type HeroBackgroundProps = {
  image: HeroImage;
  imageAlt: string;
  hasContent: boolean;
  priority?: boolean;
};

/**
 * Hero 배경 이미지 컴포넌트
 * 이미지가 있으면 표시하고, 없으면 폴백 패턴을 표시합니다.
 */
export function HeroBackground({
  image,
  imageAlt,
  hasContent,
  priority = false,
}: HeroBackgroundProps) {
  const imageUrl = getHeroImageUrl(image);

  return (
    <div className='absolute inset-0 w-full h-full animate-in fade-in duration-700'>
      {imageUrl ? (
        <Image
          src={imageUrl}
          alt={imageAlt}
          fill
          className={cn(
            'transition-all duration-700 ease-in-out',
            hasContent ? 'object-cover scale-105' : 'object-cover',
          )}
          style={{
            filter: hasContent ? 'brightness(0.85)' : 'brightness(1)',
          }}
          priority={priority}
          sizes='100vw'
        />
      ) : (
        <div className='h-full w-full bg-linear-to-br from-gray-400 via-gray-500 to-gray-400'>
          {/* Fallback background pattern when no image */}
          <div className='absolute left-0 top-0 h-full w-1/3 bg-gray-500/50 [clip-path:polygon(0_0,100%_0,0_100%)]' />
          <div className='absolute right-0 top-0 h-full w-1/3 bg-gray-500/50 [clip-path:polygon(100%_0,100%_100%,0_0)]' />
          <div className='absolute bottom-0 left-1/4 h-1/2 w-1/2 bg-gray-600/30 [clip-path:polygon(50%_0,100%_50%,50%_100%,0_50%)]' />
        </div>
      )}
    </div>
  );
}
