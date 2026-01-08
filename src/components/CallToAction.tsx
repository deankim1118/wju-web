import { Button } from '@/components/ui/button';
import { typoVariant } from '@/lib/typography';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export function CallToAction() {
  return (
    <footer className='bg-primary text-primary-foreground py-12'>
      <div className='container mx-auto px-4'>
        <div className='flex items-center justify-between flex-wrap gap-8'>
          {/* Left Side */}
          <div className={typoVariant('h1Bold', 'text-white')}>BE A WJU</div>

          {/* Middle Section */}
          <div
            className={cn(
              typoVariant('subtitle', 'text-white'),
              'flex-1 max-w-md',
            )}
          >
            WJU is where great stories begin. It&apos;s time to start yours.
            Find out how.
          </div>

          {/* Right Side */}
          <div>
            <Button
              variant='outline'
              size='lg'
              className={cn(
                typoVariant('button16', 'text-white'),
                'hover:bg-white/10 border-white',
              )}
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
