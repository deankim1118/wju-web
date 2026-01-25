import { Card } from '@/components/ui/card';

import { AcademicInquiryForm } from './academic-inquiry-form';
import { AcademicInquiryInfoPanel } from './academic-inquiry-info-panel';

type AcademicInquirySectionProps = {
  showContactInfo?: boolean;
};

export function AcademicInquirySection({
  showContactInfo = false,
}: AcademicInquirySectionProps = {}) {
  return (
    <section className='relative bg-primary section-padding-sm'>
      <div className='hidden lg:block absolute -right-16 -top-2 size-120 rounded-full bg-secondary/25 blur-3xl' />
      <div className='hidden lg:block absolute -left-24 -bottom-32 size-150 rounded-full bg-white/10 blur-3xl' />
      <div className='mx-auto max-w-7xl px-6 '>
        <Card className='rounded-none border-white/10 bg-white/95 shadow-[0px_30px_80px_rgba(0,0,0,0.25)] overflow-hidden'>
          <div className='grid grid-cols-1 lg:grid-cols-2'>
            <AcademicInquiryForm />
            <AcademicInquiryInfoPanel showContactInfo={showContactInfo} />
          </div>
        </Card>
      </div>
    </section>
  );
}

