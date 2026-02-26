export type RequiredDocument = {
  category: string;
  items: string[];
};

export type AdmissionPolicy = {
  value: string;
  trigger: string;
  content: string;
};

export type AdmissionStep = {
  value: string;
  label: string;
  shortLabel: string;
};

export const REQUIRED_DOCUMENTS: RequiredDocument[] = [
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
    items: [
      'Completed application form',
      'Non-refundable application fee $100',
    ],
  },
  {
    category: 'Photographs',
    items: ['Two (2) recent 2″×2.5″ color photos'],
  },
];

export const ADMISSION_POLICIES: AdmissionPolicy[] = [
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
      'Students may challenge a course by examination with a minimum passing score of 70%. Limits apply: undergraduate students may challenge no more than 25% of their curriculum, and master\u2019s-level students are limited to 9 units.',
  },
  {
    value: 'readmission',
    trigger: 'Re-Admission',
    content:
      'Students whose enrollment was canceled must formally re-apply for re-admission through the Admissions Committee. Prior academic records will be reviewed as part of the re-admission process.',
  },
];

export const STEPS = [
  { value: 'apply', label: 'Apply', shortLabel: 'Apply' },
  { value: 'documents', label: 'Submit Documents', shortLabel: 'Documents' },
  { value: 'interview', label: 'Interview', shortLabel: 'Interview' },
  { value: 'attend', label: 'Admit & Attend', shortLabel: 'Attend' },
] as const satisfies AdmissionStep[];

export type StepValue = (typeof STEPS)[number]['value'];
