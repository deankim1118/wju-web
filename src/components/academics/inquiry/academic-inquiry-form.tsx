'use client';

import * as React from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useTransition } from 'react';
import { useForm } from 'react-hook-form';

import { sendAcademicInquiry } from '@/app/(app)/academics/actions';
import { DEGREE_PROGRAMS } from '@/config/academics-content';
import { ROUTES } from '@/config/routes';
import {
  academicInquirySchema,
  type AcademicInquiryInput,
} from '@/lib/validation/academic-inquiry';

import { Button } from '@/components/ui/button';
import { DropdownField, type DropdownOption } from '@/components/ui/custom/dropdown-field';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

function buildStartTermOptions(now = new Date()): DropdownOption[] {
  const year = now.getFullYear();
  const years = [year, year + 1];
  const terms: Array<'Spring' | 'Fall'> = ['Spring', 'Fall'];
  return years.flatMap((y) =>
    terms.map((t) => ({ label: `${t} ${y}`, value: `${t} ${y}` })),
  );
}

function buildProgramOptions(): DropdownOption[] {
  return [
    { label: 'Undecided', value: 'undecided' },
    ...DEGREE_PROGRAMS.map((p) => ({
      label: `${p.title} (${p.credential})`,
      value: p.slug,
    })),
  ];
}

export function AcademicInquiryForm() {
  const [isPending, startTransition] = useTransition();
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [submitError, setSubmitError] = React.useState<string | null>(null);

  const form = useForm<AcademicInquiryInput>({
    resolver: zodResolver(academicInquirySchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      emailAddress: '',
      degreeProgramSlug: '',
      startTerm: '',
      phoneNumber: '',
      permissionToText: false,
      question: '',
    },
    mode: 'onTouched',
  });

  const programOptions = React.useMemo(() => buildProgramOptions(), []);
  const startTermOptions = React.useMemo(() => buildStartTermOptions(), []);
  const permissionOptions = React.useMemo<readonly DropdownOption[]>(
    () => [
      { label: 'Yes', value: 'yes' },
      { label: 'No', value: 'no' },
    ],
    [],
  );

  function onSubmit(values: AcademicInquiryInput) {
    setSubmitError(null);
    startTransition(async () => {
      try {
        const res = await sendAcademicInquiry(values);
        if (!res.ok) {
          setSubmitError(res.error ?? 'Something went wrong. Please try again.');
          return;
        }
        setIsSubmitted(true);
        form.reset();
      } catch (e) {
        setSubmitError(
          e instanceof Error ? e.message : 'Something went wrong. Please try again.',
        );
      }
    });
  }

  return (
    <div className='p-8 md:p-12 bg-white'>
      <div className='flex flex-col gap-2'>
        <p className='text-xs uppercase tracking-widest text-muted-foreground'>
          Request information
        </p>
        <h2 className='font-serif text-3xl md:text-4xl'>Let’s Get Started</h2>
        <p className='text-muted-foreground max-w-md'>
          Tell us a bit about your goals. We’ll follow up with next steps and program
          details.
        </p>
      </div>

      <div className='mt-8'>
        {isSubmitted ? (
          <div className='rounded-none border border-border bg-muted/30 p-6'>
            <h3 className='font-serif text-xl'>Thank you.</h3>
            <p className='mt-2 text-muted-foreground'>
              Your inquiry has been submitted. We’ll reach out soon.
            </p>
            <div className='mt-6 flex flex-col sm:flex-row gap-3'>
              <Button className='rounded-none' asChild>
                <Link href={ROUTES.ACADEMICS.ROOT}>
                  Back to Academics <ArrowRight className='size-4' />
                </Link>
              </Button>
              <Button variant='outline' className='rounded-none' asChild>
                <Link href={ROUTES.APPLY}>Apply</Link>
              </Button>
            </div>
          </div>
        ) : (
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='grid gap-5'>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                <FormField
                  control={form.control}
                  name='firstName'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>First name</FormLabel>
                      <FormControl>
                        <Input placeholder='First name' {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='lastName'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Last name</FormLabel>
                      <FormControl>
                        <Input placeholder='Last name' {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name='emailAddress'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email address</FormLabel>
                    <FormControl>
                      <Input
                        type='email'
                        placeholder='eg. you@example.com'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name='degreeProgramSlug'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Which degree program are you considering?</FormLabel>
                    <FormControl>
                      <DropdownField
                        value={field.value}
                        onChange={field.onChange}
                        placeholder='Choose a program'
                        options={programOptions}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name='startTerm'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      How soon would you be interested in beginning your program?
                    </FormLabel>
                    <FormControl>
                      <DropdownField
                        value={field.value}
                        onChange={field.onChange}
                        placeholder='Choose a start term'
                        options={startTermOptions}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                <FormField
                  control={form.control}
                  name='phoneNumber'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone number</FormLabel>
                      <FormControl>
                        <Input
                          type='tel'
                          placeholder='(555) 123-4567'
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name='permissionToText'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Permission to text</FormLabel>
                      <FormControl>
                        <DropdownField
                          value={field.value ? 'yes' : 'no'}
                          onChange={(value) => field.onChange(value === 'yes')}
                          placeholder='Choose an option'
                          options={permissionOptions}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name='question'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Question</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder='Tell us more about your goals or any questions you have...'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {submitError && (
                <div className='rounded-none border border-destructive/30 bg-destructive/5 p-3 text-sm text-destructive'>
                  {submitError}
                </div>
              )}

              <Button
                type='submit'
                size='lg'
                className='rounded-none w-full md:w-fit px-10'
                disabled={isPending}
              >
                {isPending ? 'Sending…' : 'Send message'}
              </Button>
            </form>
          </Form>
        )}
      </div>
    </div>
  );
}

