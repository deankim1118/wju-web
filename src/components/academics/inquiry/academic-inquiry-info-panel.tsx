import Link from 'next/link';

import { ArrowRight } from 'lucide-react';

import { ROUTES } from '@/config/routes';

import { Button } from '@/components/ui/button';

export function AcademicInquiryInfoPanel() {
  return (
    <div className='relative bg-primary text-white p-4 md:py-8 md:px-10 overflow-hidden'>
      <div className='absolute inset-0 opacity-25 bg-gradient-radial' />
      <div className='absolute -right-24 -top-24 size-80 rounded-full bg-secondary/25 blur-2xl' />
      <div className='absolute -left-24 -bottom-24 size-80 rounded-full bg-white/10 blur-2xl' />

      <div className='relative flex flex-col h-full justify-between gap-12'>
        <div className='flex flex-col gap-6'>
          <p className='text-xs uppercase tracking-widest text-white/70'>
            Washington Jabez University
          </p>
          <h3 className='font-serif text-2xl md:text-3xl'>
            A clear next step for your calling
          </h3>
          <p className='text-white/80 leading-7 max-w-md'>
            Our programs integrate biblical fidelity, spiritual formation, and ministry
            practice—so you can serve with confidence and humility.
          </p>

          <div className='mt-2 grid gap-3 text-white/85'>
            <div className='flex items-center gap-3'>
              <span className='mt-1 block size-1.5 rounded-full bg-secondary' />
              <span>Compare degree pathways and outcomes</span>
            </div>
            <div className='flex items-center gap-3'>
              <span className='mt-1 block size-1.5 rounded-full bg-secondary' />
              <span>Receive admissions guidance and next steps</span>
            </div>
            <div className='flex items-center gap-3'>
              <span className='mt-1 block size-1.5 rounded-full bg-secondary' />
              <span>Get a personalized program recommendation</span>
            </div>
          </div>
        </div>

        <div className='flex flex-col gap-3'>
          <Button
            variant='outline'
            className='rounded-none border-white/30 text-white bg-transparent hover:bg-white/10 hover:text-rose-500'
            asChild
          >
            <Link href={ROUTES.APPLY}>
              Apply now <ArrowRight className='size-4' />
            </Link>
          </Button>
          <p className='text-xs text-white/60'>
            Submission sends an email to our admissions team.
          </p>
        </div>
      </div>
    </div>
  );
}

