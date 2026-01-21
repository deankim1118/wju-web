'use server';

import { DEGREE_PROGRAMS } from '@/config/academics-content';
import { getResend } from '@/lib/resend';
import {
  type AcademicInquiryInput,
  academicInquirySchema,
} from '@/lib/validation/academic-inquiry';

function getEnv(name: string) {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing environment variable: ${name}`);
  }
  return value;
}

function formatProgramTitle(slug: string) {
  if (slug === 'undecided') return 'Undecided';
  const program = DEGREE_PROGRAMS.find((p) => p.slug === slug);
  return program ? `${program.title} (${program.credential})` : slug;
}

function toEmailHtml(input: AcademicInquiryInput) {
  const rows: Array<[string, string]> = [
    ['First name', input.firstName],
    ['Last name', input.lastName],
    ['Email', input.emailAddress],
    ['Phone', input.phoneNumber || '-'],
    ['Permission to text', input.permissionToText ? 'Yes' : 'No'],
    ['Degree program', formatProgramTitle(input.degreeProgramSlug)],
    ['Start term', input.startTerm],
    ['Question', input.question || '-'],
  ];

  return `
    <div style="font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial;">
      <h2 style="margin:0 0 12px 0;">Academic Program Inquiry</h2>
      <p style="margin:0 0 16px 0; color:#334155;">
        A new inquiry was submitted from the Academics page.
      </p>
      <table style="border-collapse: collapse; width: 100%; max-width: 760px;">
        <tbody>
          ${rows
            .map(
              ([k, v]) => `
            <tr>
              <td style="padding:10px 12px; border:1px solid #e2e8f0; width: 220px; background:#f8fafc; font-weight:600;">
                ${k}
              </td>
              <td style="padding:10px 12px; border:1px solid #e2e8f0; white-space: pre-wrap;">
                ${String(v).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;')}
              </td>
            </tr>
          `,
            )
            .join('')}
        </tbody>
      </table>
    </div>
  `;
}

function toEmailText(input: AcademicInquiryInput) {
  return [
    'Academic Program Inquiry',
    '',
    `First name: ${input.firstName}`,
    `Last name: ${input.lastName}`,
    `Email: ${input.emailAddress}`,
    `Phone: ${input.phoneNumber || '-'}`,
    `Permission to text: ${input.permissionToText ? 'Yes' : 'No'}`,
    `Degree program: ${formatProgramTitle(input.degreeProgramSlug)}`,
    `Start term: ${input.startTerm}`,
    '',
    'Question:',
    input.question || '-',
    '',
  ].join('\n');
}

export async function sendAcademicInquiry(raw: AcademicInquiryInput) {
  const parsed = academicInquirySchema.safeParse(raw);
  if (!parsed.success) {
    return { ok: false as const, error: 'Please check the form fields.' };
  }

  const input = parsed.data;

  const resend = getResend();

  // Verified sender recommended (Resend requires domain verification for custom From).
  const from =
    process.env.EMAIL_FROM ||
    'WJU System <onboarding@resend.dev>';

  // Admin recipient (defaults to legacy env var if present).
  const to = process.env.ADMIN_EMAIL_TO || "4421newlife@gmail.com";
  if (!to) {
    throw new Error('Missing environment variable: ADMIN_EMAIL');
  }

  const subject = `[Academic Inquiry] New message from ${input.firstName} ${input.lastName}`;

  await resend.emails.send({
    from,
    to,
    subject,
    replyTo: input.emailAddress, // Crucial: admin "Reply" goes to student
    text: toEmailText(input),
    html: toEmailHtml(input),
  });

  return { ok: true as const };
}

