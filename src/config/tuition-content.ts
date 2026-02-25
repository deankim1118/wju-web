/**
 * Static tuition and fees content for WJU.
 * All monetary values are in USD. Update here to reflect current rates.
 */

// ─── Types ───────────────────────────────────────────────────────────────────

export type SemesterEstimate = {
  program: string;
  fullTimeLoad: string;
  tuitionTotal: number;
  tuitionPerUnit: number;
  estimatedBooks: number;
  totalEstimated: number;
};

export type ProgramTuitionRate = {
  level: 'ba' | 'masters' | 'doctoral';
  program: string;
  pricePerUnit: number;
};

export type FeeEntry = {
  name: string;
  amount: number;
  isPercentage?: boolean;
  description: string;
};

export type FeeSection = {
  id: string;
  title: string;
  subtitle?: string;
  fees: FeeEntry[];
};

export type PaymentMethod = {
  id: string;
  title: string;
  description: string;
  note: string;
  hasConvenienceFee: boolean;
};

export type PolicyItem = {
  title: string;
  content: string;
};

export type PolicySection = {
  id: string;
  title: string;
  items: PolicyItem[];
};

// ─── Formatters ───────────────────────────────────────────────────────────────

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  }).format(amount);
}

export function formatFeeAmount(
  fee: Pick<FeeEntry, 'amount' | 'isPercentage'>,
): string {
  if (fee.isPercentage) return `${fee.amount}%`;
  return formatCurrency(fee.amount);
}

// ─── Estimated Cost Per Semester ─────────────────────────────────────────────

export const SEMESTER_COST_ESTIMATES: SemesterEstimate[] = [
  {
    program: 'B.A. Program',
    fullTimeLoad: '12 Units',
    tuitionTotal: 3000,
    tuitionPerUnit: 250,
    estimatedBooks: 200,
    totalEstimated: 3200,
  },
  {
    program: "Master's Program",
    fullTimeLoad: '12 Units',
    tuitionTotal: 3600,
    tuitionPerUnit: 300,
    estimatedBooks: 200,
    totalEstimated: 3800,
  },
  {
    program: 'Doctoral Program',
    fullTimeLoad: '8 Units',
    tuitionTotal: 4200,
    tuitionPerUnit: 525,
    estimatedBooks: 300,
    totalEstimated: 4500,
  },
];

export const SEMESTER_ESTIMATE_NOTE =
  'The cost of books and materials is an estimate and will vary depending on your specific courses.';

export const APPLICATION_FEE_NOTE =
  'First-time enrolled students should also account for the one-time $100 Application Fee in their first semester.';

// ─── Program Tuition Rates ────────────────────────────────────────────────────

export const PROGRAM_TUITION_RATES: ProgramTuitionRate[] = [
  { level: 'ba', program: 'B.A. Programs', pricePerUnit: 250 },
  { level: 'masters', program: "Master's Programs", pricePerUnit: 300 },
  { level: 'doctoral', program: 'Doctoral Programs', pricePerUnit: 525 },
];

export const TUITION_NON_REFUNDABLE_NOTE =
  'Tuition becomes non-refundable after the 9th week of the semester.';

// ─── Fee Sections ─────────────────────────────────────────────────────────────

export const FEE_SECTIONS: FeeSection[] = [
  {
    id: 'admissions-academic',
    title: 'Admissions & Academic Fees',
    subtitle:
      'These fees are non-refundable after the official cancellation period.',
    fees: [
      {
        name: 'Application Fee',
        amount: 100,
        description: 'One-time fee for all applicants',
      },
      {
        name: 'Course Drop/Add',
        amount: 21,
        description: 'Per course changed',
      },
      {
        name: 'Graduation Fee (B.A.)',
        amount: 1500,
        description: 'Includes cap, gown, and diploma',
      },
      {
        name: "Graduation Fee (Master's)",
        amount: 2000,
        description: 'Includes cap, gown, and diploma',
      },
      {
        name: 'Graduation Fee (Doctoral)',
        amount: 2500,
        description: 'Includes cap, gown, and diploma',
      },
    ],
  },
  {
    id: 'document-transcript',
    title: 'Document & Transcript Service Fees',
    fees: [
      {
        name: 'Official Transcript',
        amount: 21,
        description: 'Standard processing (3 business days)',
      },
      {
        name: 'Letter of Verification',
        amount: 21,
        description: 'Standard processing (3 business days)',
      },
    ],
  },
  {
    id: 'financial-service',
    title: 'Financial Service Fees',
    fees: [
      {
        name: 'Late Payment Fee',
        amount: 26,
        description: 'Applied to past-due balances',
      },
      {
        name: 'Returned Check',
        amount: 41,
        description: 'Or denied credit card transaction',
      },
      {
        name: 'Payment Plan Fee',
        amount: 26,
        description: 'Setup fee for tuition installment plans',
      },
      {
        name: 'Credit Card Convenience Fee',
        amount: 2.9,
        isPercentage: true,
        description: 'Applied to all credit/debit card transactions via Stripe',
      },
    ],
  },
];

// ─── Payment Methods ──────────────────────────────────────────────────────────

export const PAYMENT_METHODS: PaymentMethod[] = [
  {
    id: 'online',
    title: 'Online Payment (Student Portal)',
    description:
      'Log in to your Student Dashboard to make a secure payment using a credit or debit card. Payments are securely processed via Stripe.',
    note: 'A 2.9% convenience fee will be added to all credit/debit card transactions.',
    hasConvenienceFee: true,
  },
  {
    id: 'bank-transfer',
    title: 'Bank Transfer (ACH) / Zelle',
    description:
      "Direct transfers to the school's official bank account are accepted.",
    note: 'No processing fee.',
    hasConvenienceFee: false,
  },
  {
    id: 'check',
    title: 'Personal Check',
    description:
      "Write a personal check and mail it to the school's Finance Department.",
    note: 'Please ensure your Student ID number is written on the memo line of the check. No processing fee.',
    hasConvenienceFee: false,
  },
];

export const PAYMENT_REGISTRATION_NOTE =
  'Students must pay their tuition and fees in full to be officially registered for the semester.';

// ─── Financial & Refund Policies ─────────────────────────────────────────────

export const POLICY_SECTIONS: PolicySection[] = [
  {
    id: 'payment-procedures',
    title: 'Payment Procedures & Outstanding Balances',
    items: [
      {
        title: 'Payment at Registration',
        content:
          'Students are expected to make full payment of tuition and fees at the time of registration. Any alternative payment arrangements must be pre-approved by the Finance Department.',
      },
      {
        title: 'Outstanding Balances',
        content:
          'All institutional charges must be paid in full before graduation. A student who becomes delinquent in their financial obligations will not be allowed to continue enrollment. Furthermore, all transcripts and diplomas shall be withheld until the outstanding amount is paid in full.',
      },
    ],
  },
  {
    id: 'refund-policy',
    title: 'Refund Policy',
    items: [
      {
        title: 'Cancellation',
        content:
          'If you cancel your enrollment agreement within the designated cancellation period, the institution will refund any money paid, less the non-refundable application fee.',
      },
      {
        title: 'Pro Rata Refund',
        content:
          'The institution provides a pro rata refund of tuition funds paid for students who withdraw and have completed 60 percent or less of the period of attendance.',
      },
      {
        title: 'No Refund',
        content:
          'Once more than 60 percent of the enrollment period has elapsed (including absences), there will be no refund issued to the student.',
      },
      {
        title: 'Processing Time',
        content:
          'If a refund is due, it will be processed and issued within 45 days of the official withdrawal date.',
      },
    ],
  },
];
