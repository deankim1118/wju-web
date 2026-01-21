'use server';

import nodemailer from 'nodemailer';

import { DEGREE_PROGRAMS } from '@/config/academics-content';
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

  const host = getEnv('SMTP_HOST');
  const port = Number(getEnv('SMTP_PORT'));
  const user = getEnv('SMTP_USER');
  const pass = getEnv('SMTP_PASS');

  const secure = (process.env.SMTP_SECURE ?? '').toLowerCase() === 'true';
  const from = process.env.WJU_ADMISSIONS_EMAIL_FROM || user;
  const to = getEnv('WJU_ADMISSIONS_EMAIL_TO');

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass },
  });

  const subject = `[WJU] Academic Inquiry — ${input.firstName} ${input.lastName}`;

  await transporter.sendMail({
    from,
    to,
    replyTo: input.emailAddress,
    subject,
    text: toEmailText(input),
    html: toEmailHtml(input),
  });

  return { ok: true as const };
}

