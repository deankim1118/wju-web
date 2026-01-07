import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function CallToAction() {
  return (
    <footer className='bg-[#1e3a5f] text-white py-12'>
      <div className='container mx-auto px-4'>
        <div className='flex items-center justify-between flex-wrap gap-8'>
          {/* Left Side */}
          <div className='text-4xl font-serif'>BE A WJU</div>

          {/* Middle Section */}
          <div className='flex-1 max-w-md text-base'>
            WJU is where great stories begin. It&apos;s time to start yours.
            Find out how.
          </div>

          {/* Right Side */}
          <div>
            <Button
              variant='outline'
              size='lg'
              className=' text-white hover:bg-white/10'
              asChild
            >
              <Link href='#'>REQUEST INFORMATION →</Link>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
