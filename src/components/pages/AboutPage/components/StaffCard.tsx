import Image from 'next/image';

import { resolveImageAlt, resolveImageUrl } from '@/lib/media-utils';
import type { FacultyStaff } from '@/payload-types';

export type PayloadStaff = NonNullable<FacultyStaff['staff']>[number];

type StaffCardProps = {
  member: PayloadStaff;
};

export function StaffCard({ member }: StaffCardProps) {
  const imageUrl = resolveImageUrl(member.image);
  const imageAlt = resolveImageAlt(member.image, member.name);

  return (
    <div className='flex flex-col overflow-hidden shadow-md group'>
      <div className='relative aspect-square overflow-hidden'>
        <Image
          src={imageUrl}
          alt={imageAlt}
          fill
          className='object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105'
          sizes='(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw'
        />
      </div>
      <div className='bg-primary px-5 py-4'>
        <h4 className='text-white font-sans font-semibold text-sm uppercase tracking-widest leading-snug'>
          {member.name}
        </h4>
        <div className='w-6 h-px bg-secondary mt-2 mb-1.5' />
        <p className='text-white/65 text-xs font-sans italic'>{member.title}</p>
      </div>
    </div>
  );
}
