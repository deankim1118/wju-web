import { cn } from '@/lib/utils';
import { getHeroImageUrl } from '@/lib/utils/hero';
import type { HeroImage } from '@/types/hero';
import Image from 'next/image';

type HeroBackgroundProps = {
  image: HeroImage;
  mobileImage?: HeroImage; // 모바일 전용 이미지 (선택)
  isPoster?: boolean; // 포스터 모드 (관리자가 선택)
  imageAlt: string;
  hasContent: boolean;
  priority?: boolean;
};

/**
 * Hero 배경 이미지 컴포넌트 (관리자 선택 전략)
 *
 * 반응형 전략:
 * 1. 데스크탑(md 이상):
 *    - isPoster === true: 블러 배경 + contain (포스터/광고 텍스트 안 잘림) 📄
 *    - isPoster === false: cover (화면 꽉 채움, 배경 사진용) 🖼️
 * 2. 모바일(md 미만):
 *    - mobileImage 있음: mobileImage 사용 (contain) ✨
 *    - mobileImage 없음: cover 🛡️
 */
export function HeroBackground({
  image,
  mobileImage,
  isPoster = false,
  imageAlt,
  hasContent,
  priority = false,
}: HeroBackgroundProps) {
  const desktopImageUrl = getHeroImageUrl(image) || '/wju-hero-img.png';
  const mobileImageUrl = mobileImage ? getHeroImageUrl(mobileImage) : null;

  return (
    <div className='absolute inset-0 w-full h-full animate-in fade-in duration-700 bg-gray-900'>
      {/* ========================================== */}
      {/* 1. 데스크탑 뷰 (md 이상) */}
      {/* ========================================== */}
      <div className='hidden md:block relative w-full h-full'>
        {isPoster ? (
          // [포스터 모드] 블러 배경 + 전체 이미지 보임 (텍스트 안 잘림)
          <>
            {/* 배경: 확대 + 블러 처리 (여백 채우기) */}
            <Image
              src={desktopImageUrl}
              alt='background'
              fill
              className='object-cover blur-2xl scale-110 opacity-50'
              sizes='(min-width: 768px) 100vw, 0px'
            />
            {/* 전경: 원본 비율 유지 */}
            <Image
              src={desktopImageUrl}
              alt={imageAlt}
              fill
              className={cn(
                'object-contain object-center',
                'transition-all duration-700 ease-in-out',
                'drop-shadow-2xl',
              )}
              style={{
                filter: hasContent ? 'brightness(0.9)' : 'brightness(1)',
              }}
              priority={priority}
              sizes='(min-width: 768px) 100vw, 0px'
            />
          </>
        ) : (
          // [일반 모드] 화면 꽉 채움 (배경 사진용)
          <Image
            src={desktopImageUrl}
            alt={imageAlt}
            fill
            className={cn(
              'object-cover object-center',
              'transition-all duration-700 ease-in-out',
              hasContent ? 'scale-105' : '',
            )}
            style={{
              filter: hasContent ? 'brightness(0.85)' : 'brightness(1)',
            }}
            priority={priority}
            sizes='(min-width: 768px) 100vw, 0px'
          />
        )}
      </div>

      {/* ========================================== */}
      {/* 2. 모바일 뷰 (md 미만) */}
      {/* ========================================== */}
      <div className='block md:hidden relative w-full h-full overflow-hidden'>
        {mobileImageUrl ? (
          // [Case A] 모바일 전용 이미지가 있는 경우 → 꽉 채우기 ✨
          <Image
            src={mobileImageUrl}
            alt={imageAlt}
            fill
            className='object-contain object-center'
            style={{
              filter: hasContent ? 'brightness(0.85)' : 'brightness(1)',
            }}
            priority={priority}
            sizes='(max-width: 767px) 100vw, 0px'
          />
        ) : (
          // [Case B] 모바일 이미지 없음 → PC 이미지를 안전하게 표시 🛡️
          <>
            {/* 전경: 원본 비율 유지 (글자 안 잘림) */}
            <Image
              src={desktopImageUrl}
              alt={imageAlt}
              fill
              className='object-cover drop-shadow-2xl'
              style={{
                filter: hasContent ? 'brightness(0.85)' : 'brightness(1)',
              }}
              priority={priority}
              sizes='(max-width: 767px) 100vw, 0px'
            />
          </>
        )}
      </div>

      {/* 공통 오버레이 (텍스트 가독성) */}
      {hasContent && (
        <div className='absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent' />
      )}
    </div>
  );
}
