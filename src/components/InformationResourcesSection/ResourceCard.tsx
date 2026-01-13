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
    <Link href={linkHref} className='block'>
      <article className='flex flex-col justify-center items-center gap-6 h-full'>
        {/* Icon */}
        <div className=''>
          <Icon className='w-20 h-20 text-primary' />
        </div>

        {/* Content */}
        <div className='flex flex-col justify-start items-center gap-4'>
          <h4 className='text-slate-900 text-center'>{title}</h4>
          <p className='text-center'>{description}</p>

          {/* Button */}
          <Button
            variant='outline'
            size='sm'
            className='border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground uppercase rounded-none tracking-wider'
          >
            {linkText}
          </Button>
        </div>
      </article>
    </Link>
  );
}
