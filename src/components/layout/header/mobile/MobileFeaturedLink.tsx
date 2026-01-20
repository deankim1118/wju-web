import { SheetClose } from '@/components/ui/sheet';
import type { MenuFeature } from '@/config/navigation';
import Link from 'next/link';

type MobileFeaturedLinkProps = {
  feature: MenuFeature;
};

export function MobileFeaturedLink({ feature }: MobileFeaturedLinkProps) {
  return (
    <div className='mx-3 rounded-md bg-muted/30 p-3'>
      <SheetClose asChild>
        <Link href={feature.href} className='block'>
          <div className='mb-1 text-sm font-medium text-black transition-colors hover:text-secondary'>
            {feature.title}
          </div>
          <div className='text-xs text-secondary'>View all programs</div>
        </Link>
      </SheetClose>
    </div>
  );
}

