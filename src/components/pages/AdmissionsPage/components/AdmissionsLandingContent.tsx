'use client';

import Link from 'next/link';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ROUTES } from '@/config/routes';

const REQUIRED_DOCUMENTS = [
  {
    category: 'Identification (ID)',
    items: ['Copy of Passport', "Copy of Driver's License"],
  },
  {
    category: 'Academic Records',
    items: [
      'Official Transcripts from all institutions',
      'Diplomas from all institutions',
    ],
  },
  {
    category: 'Personal Statements',
    items: ['Spiritual journey essay', 'Faith statement', 'Ministry vision'],
  },
  {
    category: 'Recommendations',
    items: ['1–3 Letters of Recommendation (Pastor / Educator / Academic)'],
  },
  {
    category: 'Personal Interview',
    items: ['Required for all applicants (Optional for Undergraduate)'],
  },
  {
    category: 'Application Form & Fee',
    items: ['Completed application form', 'Non-refundable application fee'],
  },
  {
    category: 'Photographs',
    items: ['Two (2) recent 2″×2.5″ color photos'],
  },
];

const ADMISSION_POLICIES = [
  {
    value: 'transfer',
    trigger: 'Transfer Students',
    content:
      'WJU accepts transfer credits from approved institutions. Official transcripts are required for evaluation. Undergraduate students may transfer a maximum of two-thirds (2/3) of previously earned credits toward their degree.',
  },
  {
    value: 'challenge',
    trigger: 'The Challenge Examination',
    content:
      "Students may challenge a course by examination with a minimum passing score of 70%. Limits apply: undergraduate students may challenge no more than 25% of their curriculum, and master\u2019s-level students are limited to 9 units.",
  },
  {
    value: 'readmission',
    trigger: 'Re-Admission',
    content:
      'Students whose enrollment was canceled must formally re-apply for re-admission through the Admissions Committee. Prior academic records will be reviewed as part of the re-admission process.',
  },
];

export function AdmissionsLandingContent() {
  return (
    <div className='space-y-8'>
      {/* Section 1: 4-Step Admissions Process */}
      <section aria-labelledby='journey-heading'>
        <Card className='rounded-none'>
          <CardContent className='pt-6'>
            <h3
              id='journey-heading'
              className='mb-4 font-semibold leading-none text-slate-900'
            >
              Your Journey Begins Here
            </h3>
            <Tabs defaultValue='apply'>
              <TabsList className='mb-4 h-auto w-full flex-wrap gap-1 bg-slate-100'>
                <TabsTrigger value='apply' className='text-xs sm:text-sm'>
                  1. Apply
                </TabsTrigger>
                <TabsTrigger value='documents' className='text-xs sm:text-sm'>
                  2. Submit Documents
                </TabsTrigger>
                <TabsTrigger value='interview' className='text-xs sm:text-sm'>
                  3. Interview
                </TabsTrigger>
                <TabsTrigger value='attend' className='text-xs sm:text-sm'>
                  4. Admit &amp; Attend
                </TabsTrigger>
              </TabsList>

              {/* Step 1: Apply */}
              <TabsContent value='apply' className='space-y-4'>
                <p className='text-sm leading-relaxed text-slate-700'>
                  Start your journey by completing the online application and
                  submitting the application fee.
                </p>
                <Button asChild size='sm'>
                  <Link href={ROUTES.ADMISSIONS.APPLY}>Apply Now</Link>
                </Button>
              </TabsContent>

              {/* Step 2: Submit Documents */}
              <TabsContent value='documents' className='space-y-4'>
                <p className='text-sm leading-relaxed text-slate-700'>
                  Provide your official transcripts, a personal essay detailing
                  your spiritual journey, and reference letters.
                </p>
                <div>
                  <p className='mb-3 text-sm font-semibold text-slate-900'>
                    What You&apos;ll Need for Admittance:
                  </p>
                  <ul className='space-y-3'>
                    {REQUIRED_DOCUMENTS.map((doc) => (
                      <li key={doc.category} className='text-sm'>
                        <span className='font-medium text-slate-800'>
                          {doc.category}:
                        </span>{' '}
                        <span className='text-slate-600'>
                          {doc.items.join(', ')}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </TabsContent>

              {/* Step 3: Interview */}
              <TabsContent value='interview' className='space-y-4'>
                <p className='text-sm leading-relaxed text-slate-700'>
                  Engage in a meaningful conversation with our faculty to share
                  your calling, vision, and readiness for ministry.
                </p>
              </TabsContent>

              {/* Step 4: Admit & Attend */}
              <TabsContent value='attend' className='space-y-4'>
                <p className='text-sm leading-relaxed text-slate-700'>
                  Upon receiving your acceptance letter, complete your
                  registration and prepare for your first semester.
                </p>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </section>

      {/* Section 2: Explore Academic Programs CTA */}
      <section aria-labelledby='programs-cta-heading'>
        <Card className='rounded-none bg-slate-50'>
          <CardContent className='pt-6'>
            <h3
              id='programs-cta-heading'
              className='mb-2 font-semibold leading-none text-slate-900'
            >
              Discover the Right Program for Your Calling
            </h3>
            <p className='mb-4 text-sm leading-relaxed text-slate-600'>
              Explore our undergraduate, graduate, and doctoral programs to find
              the perfect fit for your ministry goals.
            </p>
            <Button asChild variant='outline' size='sm'>
              <Link href={ROUTES.ACADEMICS.ROOT}>View All Academic Programs</Link>
            </Button>
          </CardContent>
        </Card>
      </section>

      {/* Section 3: General Admissions Policies */}
      <section aria-labelledby='policies-heading'>
        <Card className='rounded-none'>
          <CardContent className='pt-6'>
            <h3
              id='policies-heading'
              className='mb-4 font-semibold leading-none text-slate-900'
            >
              General Policies
            </h3>
            <Accordion type='single' collapsible className='w-full'>
              {ADMISSION_POLICIES.map((policy) => (
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
        <p className='text-sm text-slate-500'>
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
