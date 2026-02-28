import Link from 'next/link';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ROUTES } from '@/config/routes';
import type { NormalizedAdmissionsData } from '@/lib/adapters/admissions-adapter';
import { AdmissionsProcessTabs } from './AdmissionsProcessTabs';

type AdmissionsLandingContentProps = {
  data: NormalizedAdmissionsData;
};

export function AdmissionsLandingContent({
  data,
}: AdmissionsLandingContentProps) {
  const { requiredDocuments, admissionPolicies } = data;

  return (
    <div className='space-y-8'>
      {/* Section 1: 4-Step Admissions Process (Client Component) */}
      <AdmissionsProcessTabs requiredDocuments={requiredDocuments} />

      {/* Section 2: Explore Academic Programs CTA */}
      <section aria-labelledby='programs-cta-heading'>
        <Card className='rounded-none bg-slate-50'>
          <CardContent className='pt-6'>
            <h2
              id='programs-cta-heading'
              className='mb-2 font-semibold leading-none text-slate-900'
            >
              Discover the Right Program for Your Calling
            </h2>
            <p className='mb-4 text-sm leading-relaxed text-slate-600'>
              Explore our undergraduate, graduate, and doctoral programs to find
              the perfect fit for your ministry goals.
            </p>
            <Button asChild variant='outline' size='sm'>
              <Link href={ROUTES.ACADEMICS.ROOT}>
                View All Academic Programs
              </Link>
            </Button>
          </CardContent>
        </Card>
      </section>

      {/* Section 3: General Admissions Policies */}
      <section aria-labelledby='policies-heading'>
        <Card className='rounded-none'>
          <CardContent className='pt-6'>
            <h2
              id='policies-heading'
              className='mb-4 font-semibold leading-none text-slate-900'
            >
              General Policies
            </h2>
            <Accordion type='single' collapsible className='w-full'>
              {admissionPolicies.map((policy) => (
                <AccordionItem key={policy.value} value={policy.value}>
                  <AccordionTrigger className='text-sm font-medium text-slate-800'>
                    {policy.trigger}
                  </AccordionTrigger>
                  <AccordionContent className='text-slate-600'>
                    {policy.content}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      </section>

      {/* Section 4: TRACS Compliance Statement */}
      <section aria-label='Statement of Compliance'>
        <p className='text-xs text-slate-500 leading-tight'>
          Washington Jabez University is in compliance with Titles VI and VII of
          the Civil Rights Acts of 1964 and Title IX of the Educational
          Amendments of 1972. The institution does not discriminate on the basis
          of race, color, national origin, or sex in any of its policies,
          practices, or procedures.
        </p>
      </section>
    </div>
  );
}
