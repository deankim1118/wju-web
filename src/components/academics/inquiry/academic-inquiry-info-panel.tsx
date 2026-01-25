import Link from 'next/link';

import { ArrowRight, Clock, Mail, MapPin, Phone } from 'lucide-react';

import { socialMediaLinks } from '@/config/navigation';
import { ROUTES } from '@/config/routes';

import { SocialMediaIcons } from '@/components/Footer/components/SocialMediaIcons';
import { Button } from '@/components/ui/button';

type AcademicInquiryInfoPanelProps = {
  showContactInfo?: boolean;
};

export function AcademicInquiryInfoPanel({
  showContactInfo = false,
}: AcademicInquiryInfoPanelProps) {
  return (
    <div className='relative bg-primary text-white p-4 md:py-8 md:px-10 overflow-hidden'>
      <div className='absolute inset-0 opacity-25 bg-gradient-radial' />
      <div className='absolute -right-24 -top-24 size-80 rounded-full bg-secondary/25 blur-2xl' />
      <div className='absolute -left-24 -bottom-24 size-80 rounded-full bg-white/10 blur-2xl' />

      <div className='relative flex flex-col h-full justify-between gap-8'>
        {/* Top Section: Program Introduction */}
        <div className='flex flex-col gap-6'>
          <p className='text-xs uppercase tracking-widest text-white/70'>
            Washington Jabez University
          </p>
          <h3 className='font-serif text-2xl md:text-3xl'>
            A clear next step for your calling
          </h3>
          <p className='text-white/80 leading-7 max-w-md'>
            Our programs integrate biblical fidelity, spiritual formation, and ministry
            practice—so you can serve with confidence and humility.
          </p>

          <div className='mt-2 grid gap-3 text-white/85'>
            <div className='flex items-center gap-3'>
              <span className='mt-1 block size-1.5 rounded-full bg-secondary' />
              <span>Compare degree pathways and outcomes</span>
            </div>
            <div className='flex items-center gap-3'>
              <span className='mt-1 block size-1.5 rounded-full bg-secondary' />
              <span>Receive admissions guidance and next steps</span>
            </div>
            <div className='flex items-center gap-3'>
              <span className='mt-1 block size-1.5 rounded-full bg-secondary' />
              <span>Get a personalized program recommendation</span>
            </div>
          </div>
        </div>

        {/* Middle Section: Contact Information - Only shown on request-info page */}
        {showContactInfo && (
          <div className='flex flex-col gap-6 pt-6 border-t border-white/20'>
            <p className='text-xs uppercase tracking-widest text-white/70'>
              Contact Information
            </p>
            
            <div className='grid gap-4'>
              {/* Address */}
              <div className='flex items-start gap-3'>
                <MapPin className='mt-0.5 size-5 shrink-0 text-secondary' />
                <div className='flex-1 min-w-0'>
                  <address className='not-italic text-sm text-white/90 leading-relaxed'>
                    4421 Dale BLVD.
                    <br />
                    Woodbridge, VA 22193
                  </address>
                </div>
              </div>

              {/* Phone Numbers */}
              <div className='flex items-start gap-3'>
                <Phone className='mt-0.5 size-5 shrink-0 text-secondary' />
                <div className='flex-1 flex flex-col gap-1.5'>
                  <span
                    className='text-sm text-white/90'
                  >
                    703-489-4168 (Eng)
                  </span>
                  <span
                    className='text-sm text-white/90'
                  >
                    703-232-5452 (Kor)
                  </span>
                </div>
              </div>

              {/* Email */}
              <div className='flex items-start gap-3'>
                <Mail className='mt-0.5 size-5 shrink-0 text-secondary' />
                <div className='flex-1 min-w-0'>
                  <a
                    href='mailto:admin@wjuniv.org'
                    className='text-sm text-white/90 hover:text-secondary transition-colors break-all'
                  >
                    admin@wjuniv.org
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className='flex justify-between items-center'>
              <div className='flex items-start gap-3'>
                <Clock className='mt-0.5 size-5 shrink-0 text-secondary' />
                <div className='flex-1'>
                  <p className='text-sm text-white/90 leading-relaxed'>
                    Monday – Friday
                    <br />
                    10:00 AM – 4:00 PM
                  </p>
                </div>
              </div>
              {/* Social Media Icons */}
            <div className='pt-2'>
              <SocialMediaIcons socialMedia={socialMediaLinks} />
            </div>
              </div>
            </div>

            
          </div>
        )}

        {/* Bottom Section: CTA */}
        <div className='flex flex-col gap-3 pt-4'>
          <Button
            variant='outline'
            className='rounded-none border-white/30 text-white bg-transparent hover:bg-white/10 hover:text-rose-500'
            asChild
          >
            <Link href={ROUTES.APPLY}>
              Apply now <ArrowRight className='size-4' />
            </Link>
          </Button>
          <p className='text-xs text-white/60'>
            Submission sends an email to our admissions team.
          </p>
        </div>
      </div>
    </div>
  );
}

