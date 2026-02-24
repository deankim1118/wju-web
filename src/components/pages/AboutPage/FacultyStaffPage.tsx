import Image from 'next/image';

import {
  ScrollReveal,
  ScrollRevealChild,
} from '@/components/scroll-animation/scroll-reveal';
import { LinkCardsCarouselSection } from '@/components/sections/LinkCardsCarouselSection';
import {
  ABOUT_LINK_CARDS,
  ABOUT_LINK_CARDS_TITLE,
} from '@/config/about-link-content';
import {
  FACULTY_MEMBERS,
  FACULTY_SECTION_TITLE,
  STAFF_MEMBERS,
  STAFF_SECTION_TITLE,
  type FacultyMember,
  type StaffMember,
} from '@/config/faculty-staff-content';
import { cn } from '@/lib/utils';
import { PageHero } from '../../layout/PageHero';

/**
 * Accent color cycle for faculty mosaic cards.
 * Tailwind class strings must be complete (not dynamically concatenated)
 * to ensure proper inclusion in the production build.
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

// ---------------------------------------------------------------------------
// Faculty mosaic card
// ---------------------------------------------------------------------------

type FacultyCardProps = {
  member: FacultyMember;
  index: number;
};

function FacultyCard({ member, index }: FacultyCardProps) {
  const isReversed = index % 2 !== 0;
  const accentBg = getAccentBg(index);

  const colorBlock = (
    <div
      className={cn(
        'flex flex-col justify-center p-8 md:p-10 lg:p-12',
        accentBg,
      )}
    >
      <p className='text-white/50 text-xs uppercase tracking-[0.25em] mb-4 font-sans'>
        {String(index + 1).padStart(2, '0')}
      </p>
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
      <div className='flex flex-col gap-4'>
        {member.degrees.map((d) => (
          <div key={d.degree} className='flex flex-col gap-0.5'>
            <p className='text-primary font-sans font-semibold text-sm leading-snug'>
              {d.degree}
            </p>
            <p className='text-slate-400 text-xs font-sans uppercase tracking-wide'>
              {d.school}
            </p>
          </div>
        ))}
      </div>
    </div>
  );

  const photoBlock = (
    <div className='relative min-h-[280px] lg:min-h-0 overflow-hidden'>
      <Image
        src={member.imageUrl}
        alt={member.imageAlt}
        fill
        className='object-cover grayscale'
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

// ---------------------------------------------------------------------------
// Staff card
// ---------------------------------------------------------------------------

function StaffCard({ member }: { member: StaffMember }) {
  return (
    <div className='flex flex-col overflow-hidden shadow-md group'>
      <div className='relative aspect-square overflow-hidden'>
        <Image
          src={member.imageUrl}
          alt={member.imageAlt}
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

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export function FacultyStaffPage() {
  return (
    <>
      <PageHero
        title='Faculty & Staff'
        subtitle='Welcome'
        imageUrl='/wju-hero-img.png'
        imageAlt='Washington Jabez University campus'
      />

      {/* ── Faculty Section ── */}
      <section className='relative bg-white overflow-hidden'>
        <div className='absolute top-0 h-1.5 w-full bg-secondary' />

        {/* Section header */}
        <div className='relative mx-auto max-w-[1440px] px-6 md:px-8 2xl:px-0 section-header-padding'>
          <div className='flex flex-col items-center gap-4 text-center'>
            <ScrollReveal variant='fade-up' duration={0.7}>
              <h2 className='text-primary'>{FACULTY_SECTION_TITLE}</h2>
            </ScrollReveal>
            <div className='w-24 h-0.5 bg-secondary' />
          </div>
        </div>

        {/* Mosaic grid with decorative vertical label */}
        <div className='relative'>
          {/* Decorative vertical title — visible only on xl+ screens */}
          <div
            className='hidden xl:flex absolute left-0 top-0 bottom-0 w-14 items-center justify-center z-10 pointer-events-none select-none'
            aria-hidden='true'
          >
            <span
              className='text-4xl font-serif font-bold text-gray-100 uppercase tracking-[0.35em]'
              style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
            >
              {FACULTY_SECTION_TITLE}
            </span>
          </div>

          <div className='xl:pl-14'>
            {FACULTY_MEMBERS.map((member, index) => (
              <FacultyCard key={member.id} member={member} index={index} />
            ))}
          </div>
        </div>

        <div className='section-padding-bottom' />
      </section>

      {/* ── Staff Section ── */}
      <section className='relative bg-foreground overflow-hidden'>
        <div className='absolute top-0 h-1.5 w-full bg-secondary' />

        <div className='relative mx-auto max-w-[1440px] px-6 md:px-8 2xl:px-0 section-padding-lg'>
          {/* Section header */}
          <div className='flex flex-col items-center gap-4 text-center mb-14 md:mb-20'>
            <ScrollReveal variant='fade-up' duration={0.7}>
              <h2 className='text-primary'>{STAFF_SECTION_TITLE}</h2>
            </ScrollReveal>
            <div className='w-24 h-0.5 bg-secondary' />
          </div>

          {/* Staff grid */}
          <ScrollReveal variant='fade-up' stagger staggerChildren={0.08}>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8'>
              {STAFF_MEMBERS.map((member) => (
                <ScrollRevealChild key={member.id}>
                  <StaffCard member={member} />
                </ScrollRevealChild>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <LinkCardsCarouselSection
        title={ABOUT_LINK_CARDS_TITLE}
        items={ABOUT_LINK_CARDS}
        shouldExcludeCurrentPath
      />
    </>
  );
}
