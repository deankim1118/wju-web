import { Button } from '@/components/ui/button';
import { typoVariant } from '@/lib/typography';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

type CallToActionProps = {
  title?: string;
  description?: string;
  buttonText?: string;
  href?: string;
};

export function CallToAction({
  title = 'BE A WJU',
  description = "WJU is where great stories begin. It's time to start yours. Find out how.",
  buttonText = 'REQUEST INFORMATION',
  href = '#',
}: CallToActionProps) {
  return (
    <section className='bg-primary text-primary-foreground py-8'>
      <div className='container mx-auto px-6'>
        <div className='flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8'>
          <div className={cn(typoVariant('h1Bold', 'text-white'))}>{title}</div>

          <div
            className={cn(
              typoVariant('subtitle', 'text-white/90'),
              'lg:flex-1 lg:max-w-md',
            )}
          >
            {description}
          </div>

          <Button
            variant='outline'
            size='lg'
            className={cn(
              typoVariant('heroButton', 'text-white'),
              'border-2 rounded-none border-white bg-transparent',
              'hover:bg-white hover:text-primary',
              'w-full lg:w-auto max-w-[470px]',
            )}
            asChild
          >
            <Link
              href={href}
              className='flex items-center justify-center gap-2'
            >
              {buttonText}
              <ArrowRight className='text-red-500 size-5 md:size-6' />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
