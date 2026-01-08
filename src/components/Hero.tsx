'use client';

import { HeroButton } from '@/components/hero-buttons';
import { useState } from 'react';

export function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  return (
    <section className='relative flex flex-1 items-center justify-center overflow-hidden bg-gray-400 h-[70vh]'>
      {/* Geometric Background Pattern */}
      <div className='absolute inset-0'>
        <div className='absolute inset-0 bg-linear-to-br from-gray-400 via-gray-500 to-gray-400'>
          {/* Diagonal Geometric Shapes */}
          <div className='absolute left-0 top-0 h-full w-1/3 bg-gray-500 [clip-path:polygon(0_0,100%_0,0_100%)]' />
          <div className='absolute right-0 top-0 h-full w-1/3 bg-gray-500 [clip-path:polygon(100%_0,100%_100%,0_0)]' />
          <div className='absolute bottom-0 left-1/4 h-1/2 w-1/2 bg-gray-600 opacity-30 [clip-path:polygon(50%_0,100%_50%,50%_100%,0_50%)]' />
        </div>
      </div>

      {/* Content */}
      <div className='relative z-10 text-center'>
        <h1 className='mb-12 px-4 font-serif text-5xl font-bold leading-tight text-white md:text-6xl lg:text-7xl'>
          <span className='block text-balance'>Your Calling Begins Here</span>
          <span className='block text-balance'>This Spring</span>
        </h1>
        <div className='flex flex-wrap items-center justify-center gap-4'>
          <HeroButton variant='outline'>ACADEMIC CALENDAR</HeroButton>
          <HeroButton variant='primary'>APPLY TODAY</HeroButton>
        </div>
      </div>

      {/* Carousel Indicators */}
      <div className='absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-2'>
        <button
          onClick={() => setActiveSlide(0)}
          className={`h-3 w-3 rounded-full transition-colors ${
            activeSlide === 0 ? 'bg-white' : 'bg-white/50'
          }`}
          aria-label='Slide 1'
        />
        <button
          onClick={() => setActiveSlide(1)}
          className={`h-3 w-3 rounded-full transition-colors ${
            activeSlide === 1 ? 'bg-white' : 'bg-white/50'
          }`}
          aria-label='Slide 2'
        />
      </div>
    </section>
  );
}
