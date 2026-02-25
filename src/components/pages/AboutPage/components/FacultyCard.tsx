import Image from 'next/image';

import { ScrollReveal } from '@/components/scroll-animation/scroll-reveal';
import { resolveImageAlt, resolveImageUrl } from '@/lib/media-utils';
import { cn } from '@/lib/utils';
import type { FacultyStaff } from '@/payload-types';

export type PayloadFaculty = NonNullable<FacultyStaff['faculty']>[number];

/**
 * Tailwind 클래스 문자열은 동적 연결 불가 — 완전한 문자열로 선언해야 합니다.
 */
const ACCENT_BG_CLASSES = [
  'bg-primary',
  'bg-secondary',
  'bg-amber-700',
  'bg-slate-700',
] as const;

function getAccentBg(index: number): string {
  return ACCENT_BG_CLASSES[index % ACCENT_BG_CLASSES.length];
}

type FacultyCardProps = {
  member: PayloadFaculty;
  index: number;
};

export function FacultyCard({ member, index }: FacultyCardProps) {
  const isReversed = index % 2 !== 0;
  const accentBg = getAccentBg(index);

  const imageUrl = resolveImageUrl(member.image);
  const imageAlt = resolveImageAlt(member.image, member.name);

  const colorBlock = (
    <div
      className={cn(
        'flex flex-col justify-center p-8 md:p-10 lg:p-12',
        accentBg,
      )}
    >
      {/* <p className='text-white/50 text-xs uppercase tracking-[0.25em] mb-4 font-sans'>
        {String(index + 1).padStart(2, '0')}
      </p> */}
      <h3 className='font-serif text-white text-2xl md:text-3xl lg:text-4xl font-semibold uppercase tracking-wide leading-tight'>
        {member.name}
      </h3>
      <div className='w-10 h-px bg-white/40 my-4' />
      <p className='text-white/75 text-sm md:text-base font-sans italic leading-snug'>
        {member.title}
      </p>
    </div>
  );

  const infoBlock = (
    <div className='flex flex-col justify-center gap-6 p-8 md:p-10 lg:p-12 bg-white'>
      {member.bio && (
        <p className='text-slate-500 text-sm md:text-base leading-relaxed italic border-l-2 border-secondary pl-4'>
          &ldquo;{member.bio}&rdquo;
        </p>
      )}
      {member.degrees && member.degrees.length > 0 && (
        <div className='flex flex-col gap-4'>
          {member.degrees.map((d) => (
            <div key={d.id ?? d.degree} className='flex flex-col gap-0.5'>
              <p className='text-primary font-sans font-semibold text-sm leading-snug'>
                {d.degree}
              </p>
              <p className='text-slate-400 text-xs font-sans uppercase tracking-wide'>
                {d.school}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  const photoBlock = (
    <div className='relative min-h-[280px] lg:min-h-0 overflow-hidden group'>
      <Image
        src={imageUrl}
        alt={imageAlt}
        fill
        className='object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105'
        sizes='(max-width: 1024px) 100vw, 33vw'
      />
    </div>
  );

  return (
    <ScrollReveal
      variant={isReversed ? 'fade-left' : 'fade-right'}
      duration={0.7}
    >
      <div className='grid grid-cols-1 lg:grid-cols-3 border-b border-gray-100 last:border-b-0'>
        {isReversed ? (
          <>
            {infoBlock}
            {photoBlock}
            {colorBlock}
          </>
        ) : (
          <>
            {colorBlock}
            {photoBlock}
            {infoBlock}
          </>
        )}
      </div>
    </ScrollReveal>
  );
}
