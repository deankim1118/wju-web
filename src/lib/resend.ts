import { Resend } from 'resend';

let cached: Resend | null = null;

export function getResend() {
  if (cached) return cached;

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error('Missing environment variable: RESEND_API_KEY');
  }

  cached = new Resend(apiKey);
  return cached;
}

