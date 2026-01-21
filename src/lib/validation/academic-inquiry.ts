import { z } from 'zod';

const phoneRegex = /^[+()0-9.\-\s]{7,30}$/;

export const academicInquirySchema = z.object({
  firstName: z.string().trim().min(1, 'First name is required.').max(60),
  lastName: z.string().trim().min(1, 'Last name is required.').max(60),
  emailAddress: z.string().trim().email('Please enter a valid email.').max(120),
  degreeProgramSlug: z
    .string()
    .trim()
    .min(1, 'Please select a degree program.'),
  startTerm: z.string().trim().min(1, 'Please select a start term.'),
  phoneNumber: z
    .string()
    .trim()
    .optional()
    .default('')
    .refine((value) => value === '' || phoneRegex.test(value), {
      message: 'Please enter a valid phone number.',
    }),
  permissionToText: z.boolean().default(false),
  question: z.string().trim().max(2000).optional().default(''),
});

export type AcademicInquiryInput = z.infer<typeof academicInquirySchema>;

