import { Card } from '@/components/ui/card';

import { AcademicInquiryForm } from './academic-inquiry-form';
import { AcademicInquiryInfoPanel } from './academic-inquiry-info-panel';

export function AcademicInquirySection() {
  return (
    <section className='bg-primary section-padding-sm'>
      <div className='mx-auto max-w-[1440px] px-6'>
        <Card className='rounded-none border-white/10 bg-white/95 shadow-[0px_30px_80px_rgba(0,0,0,0.25)] overflow-hidden'>
          <div className='grid grid-cols-1 lg:grid-cols-2'>
            <AcademicInquiryForm />
            <AcademicInquiryInfoPanel />
          </div>
        </Card>
      </div>
    </section>
  );
}

