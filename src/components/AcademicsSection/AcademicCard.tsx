import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

type AcademicCardProps = {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  linkText?: string;
  linkHref: string;
};

export function AcademicCard({
  title,
  description,
  imageUrl,
  imageAlt,
  linkText = 'Learn More',
  linkHref,
}: AcademicCardProps) {
  return (
    <Link href={linkHref} className='block group'>
      <Card className='flex flex-col w-full h-full overflow-hidden border-none rounded-none pt-0 transition-all duration-300 hover:shadow-xl hover:scale-[1.02]'>
        {/* Image */}
        <div className='relative w-full aspect-4/3 bg-muted overflow-hidden'>
          <Image
            src={imageUrl}
            alt={imageAlt}
            fill
            className='object-cover transition-transform duration-500 group-hover:scale-105'
            sizes='(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw'
          />
        </div>

        {/* Content */}
        <CardContent className='flex flex-col justify-between flex-1 p-6'>
          <div className='flex flex-col gap-4'>
            <h4 className='text-secondary group-hover:text-primary transition-colors'>
              {title}
            </h4>
            <p>{description}</p>
          </div>

          {/* Link Indicator */}
          <div className='inline-flex items-center gap-2 text-secondary text-base lg:text-lg uppercase tracking-wider mt-4 group-hover:gap-3 transition-all'>
            {linkText}
            <ArrowRight className='size-4 group-hover:translate-x-1 transition-transform' />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
