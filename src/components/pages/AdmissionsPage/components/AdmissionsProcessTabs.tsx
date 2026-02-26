'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Check,
  CheckCircle,
  ChevronRight,
  ClipboardList,
  FileText,
  GraduationCap,
  MessageCircle,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';
import { ROUTES } from '@/config/routes';
import {
  REQUIRED_DOCUMENTS,
  STEPS,
  type StepValue,
} from '@/config/admissions-content';

export function AdmissionsProcessTabs() {
  const [tab, setTab] = useState<StepValue>('apply');

  const currentIndex = STEPS.findIndex((s) => s.value === tab);
  const nextStep = STEPS[currentIndex + 1] ?? null;

  return (
    <section aria-labelledby='journey-heading'>
      <Card className='rounded-none'>
        <CardContent className='pt-6'>
          <h2
            id='journey-heading'
            className='mb-5 font-semibold leading-none text-slate-900'
          >
            Your Journey Begins Here
          </h2>

          <Tabs value={tab} onValueChange={(v) => setTab(v as StepValue)}>
            <TabsList className='mb-6 h-auto w-full gap-0 rounded-none bg-transparent p-0'>
              {STEPS.map((step, idx) => {
                const isActive = tab === step.value;
                const isPast = idx < currentIndex;
                return (
                  <TabsTrigger
                    key={step.value}
                    value={step.value}
                    className={cn(
                      'relative flex flex-1 flex-col items-center gap-1.5 rounded-none border-b-2 pb-3 pt-1',
                      'text-xs font-medium transition-colors',
                      'data-[state=active]:shadow-none',
                      isActive
                        ? 'border-slate-800 text-slate-900 data-[state=active]:bg-transparent'
                        : isPast
                          ? 'border-slate-300 text-slate-400 hover:text-slate-600'
                          : 'border-transparent text-slate-400 hover:text-slate-600',
                    )}
                  >
                    <span
                      className={cn(
                        'inline-flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold transition-colors',
                        isActive
                          ? 'bg-slate-800 text-white'
                          : isPast
                            ? 'bg-slate-200 text-slate-500'
                            : 'bg-slate-100 text-slate-400',
                      )}
                    >
                      {isPast ? <Check className='h-3.5 w-3.5' /> : idx + 1}
                    </span>
                    <span className='hidden sm:block'>{step.shortLabel}</span>
                  </TabsTrigger>
                );
              })}
            </TabsList>

            {/* Step 1: Apply */}
            <TabsContent value='apply' className='space-y-5'>
              <div className='flex items-start gap-3'>
                <ClipboardList className='mt-0.5 h-5 w-5 shrink-0 text-slate-400' />
                <div className='space-y-1'>
                  <p className='text-sm font-semibold text-slate-900'>
                    Start Your Application
                  </p>
                  <p className='text-sm leading-relaxed text-slate-600'>
                    Complete the online application form and submit the
                    non-refundable application fee to begin your journey at WJU.
                  </p>
                </div>
              </div>
              <div className='flex items-center gap-1 pt-1'>
                <Button
                  asChild
                  size='sm'
                  className='bg-secondary hover:bg-secondary/90'
                >
                  <Link href={ROUTES.ADMISSIONS.APPLY}>Apply Now</Link>
                </Button>
                {nextStep && (
                  <Button
                    variant='ghost'
                    size='sm'
                    onClick={() => setTab(nextStep.value)}
                    className='gap-1 text-xs text-slate-400 hover:bg-transparent hover:text-slate-700'
                  >
                    Next: {nextStep.label}
                    <ChevronRight className='h-3.5 w-3.5' />
                  </Button>
                )}
              </div>
            </TabsContent>

            {/* Step 2: Submit Documents */}
            <TabsContent value='documents' className='space-y-5'>
              <div className='flex items-start gap-3'>
                <FileText className='mt-0.5 h-5 w-5 shrink-0 text-slate-400' />
                <div className='space-y-1'>
                  <p className='text-sm font-semibold text-slate-900'>
                    Gather Your Documents
                  </p>
                  <p className='text-sm leading-relaxed text-slate-600'>
                    Submit the following materials to the Admissions Office. All
                    documents must be official and current.
                  </p>
                </div>
              </div>

              <ul className='space-y-2 rounded-md border border-slate-100 bg-slate-50 px-4 py-3'>
                {REQUIRED_DOCUMENTS.map((doc) => (
                  <li
                    key={doc.category}
                    className='flex items-start gap-2.5 text-sm'
                  >
                    <CheckCircle className='mt-0.5 h-4 w-4 shrink-0 text-slate-400' />
                    <span>
                      <span className='font-medium text-slate-800'>
                        {doc.category}:
                      </span>{' '}
                      <span className='text-slate-600'>
                        {doc.items.join(', ')}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>

              {nextStep && (
                <Button
                  variant='ghost'
                  size='sm'
                  onClick={() => setTab(nextStep.value)}
                  className='gap-1 text-xs text-slate-400 hover:bg-transparent hover:text-slate-700'
                >
                  Next: {nextStep.label}
                  <ChevronRight className='h-3.5 w-3.5' />
                </Button>
              )}
            </TabsContent>

            {/* Step 3: Interview */}
            <TabsContent value='interview' className='space-y-5'>
              <div className='flex items-start gap-3'>
                <MessageCircle className='mt-0.5 h-5 w-5 shrink-0 text-slate-400' />
                <div className='space-y-1'>
                  <p className='text-sm font-semibold text-slate-900'>
                    Meet with Our Faculty
                  </p>
                  <p className='text-sm leading-relaxed text-slate-600'>
                    Engage in a meaningful conversation with our faculty to
                    share your calling, vision, and readiness for ministry. This
                    is your opportunity to ask questions and connect with the
                    WJU community.
                  </p>
                </div>
              </div>
              {nextStep && (
                <Button
                  variant='ghost'
                  size='sm'
                  onClick={() => setTab(nextStep.value)}
                  className='gap-1 text-xs text-slate-400 hover:bg-transparent hover:text-slate-700'
                >
                  Next: {nextStep.label}
                  <ChevronRight className='h-3.5 w-3.5' />
                </Button>
              )}
            </TabsContent>

            {/* Step 4: Admit & Attend */}
            <TabsContent value='attend' className='space-y-5'>
              <div className='flex items-start gap-3'>
                <GraduationCap className='mt-0.5 h-5 w-5 shrink-0 text-slate-400' />
                <div className='space-y-1'>
                  <p className='text-sm font-semibold text-slate-900'>
                    You&apos;re In — Let&apos;s Get Started
                  </p>
                  <p className='text-sm leading-relaxed text-slate-600'>
                    Upon receiving your acceptance letter, complete your
                    registration and prepare for your first semester. Welcome to
                    the WJU family.
                  </p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </section>
  );
}
