import { Button } from '@/components/ui/button';
import { LucideIcon } from 'lucide-react';
import Link from 'next/link';

type ResourceCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  linkHref: string;
  linkText?: string;
};

export function ResourceCard({
  icon: Icon,
  title,
  description,
  linkHref,
  linkText = 'Learn More',
}: ResourceCardProps) {
  return (
    <Link href={linkHref} className='block h-full'>
      <article className='flex flex-col h-full relative px-4 py-6'>
        <div className='flex flex-col items-center gap-6 mb-6'>
          {/* Icon */}
          <div>
            <Icon className='w-20 h-20 text-primary' strokeWidth={1.5} />
          </div>

          {/* Title & Description */}
          <div className='flex flex-col gap-3 items-center'>
            <h4 className='text-xl font-bold text-slate-900 text-center capitalize'>
              {title}
            </h4>
            <p className='text-center text-slate-600 break-keep'>
              {description}
            </p>
          </div>
        </div>

        <div className='mt-auto flex justify-center w-full'>
          <Button
            variant='outline'
            size='sm'
            className='border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground uppercase rounded-none tracking-wider w-full md:w-auto'
          >
            {linkText}
          </Button>
        </div>
      </article>
    </Link>
  );
}
