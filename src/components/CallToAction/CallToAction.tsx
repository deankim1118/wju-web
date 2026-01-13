import { Button } from '@/components/ui/button';
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
      <div className='container mx-auto px-6 max-w-[1024px]'>
        <div className='flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8'>
          <h2 className='text-primary-foreground font-bold'>{title}</h2>

          <p className='text-primary-foreground/90 lg:flex-1 lg:max-w-md'>
            {description}
          </p>

          <Button
            variant='outline'
            size='lg'
            className='text-base md:text-xl font-semibold md:font-normal uppercase border-2 rounded-none border-primary-foreground bg-transparent hover:bg-primary-foreground hover:text-primary w-full lg:w-auto max-w-[470px]'
            asChild
          >
            <Link
              href={href}
              className='flex items-center justify-center gap-2'
            >
              {buttonText}
              <ArrowRight className='text-secondary size-5 md:size-6' />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
