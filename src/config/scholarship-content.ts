/**
 * Structured scholarship content for WJU.
 * Categories and scholarship types are used by ScholarshipListByCategory.
 */

export type ScholarshipItem = {
  id: string;
  title: string;
  purpose?: string;
  eligibility?: string;
  policy?: string;
  benefit: string;
  requirement?: string;
  condition?: string;
};

export type ScholarshipCategory = {
  id: string;
  title: string;
  scholarships: ScholarshipItem[];
};

export type GeneralSection = {
  id: string;
  title: string;
  content: string;
};

const GENERAL_PRINCIPLES = `To support students dedicated to the Kingdom of God and to ensure fair and efficient financial administration, Washington Jabez University (WJU) establishes the following scholarship policy.

• Tuition Credit System: All scholarships are awarded in the form of a tuition credit. The awarded amount is deducted directly from the student's tuition invoice. Scholarships are not redeemable for cash.

• Tuition Cap: The total amount of scholarship awards cannot exceed the total cost of tuition.

• Budget Availability: All scholarship awards are subject to the availability of funds. The Scholarship Committee sets an annual budget limit for each scholarship category based on the previous year's financial analysis. Awards may be adjusted if the budget is exceeded.

• One Scholarship Rule: Students are generally awarded one scholarship per semester. However, the Church Partnership Matching Scholarship and Kingdom Expansion (Referral) Scholarship may be awarded in addition to other scholarships upon the Scholarship Committee's approval.`;

const SCHOLARSHIP_CATEGORIES: ScholarshipCategory[] = [
  {
    id: 'family-relationship',
    title: 'Family & Relationship Scholarships',
    scholarships: [
      {
        id: 'student-couple',
        title: 'Student Couple Scholarship',
        eligibility:
          'Awarded when a married couple are both registered as full-time students.',
        benefit:
          'One spouse will receive a 100% tuition waiver (Full Scholarship).',
      },
      {
        id: 'family',
        title: 'Family Scholarship',
        purpose: 'To encourage immediate family members to serve God together.',
        eligibility:
          'Awarded when immediate family members (parents, children, or siblings) are enrolled simultaneously.',
        benefit:
          'The family member with fewer registered credits receives a 50% tuition waiver.',
      },
      {
        id: 'kingdom-expansion',
        title: 'Kingdom Expansion (Referral) Scholarship',
        purpose: 'To encourage students to invite new workers to the school.',
        policy: 'A current student who recommends a new student for admission.',
        benefit:
          "A $200 credit is awarded to the recommender's account after the new student completes registration and full payment.",
      },
    ],
  },
  {
    id: 'ministry-partnership',
    title: 'Ministry Partnership Scholarships',
    scholarships: [
      {
        id: 'church-partnership',
        title: 'Church Partnership Matching Scholarship',
        purpose:
          "To engage local churches in supporting future leaders and to alleviate the school's financial burden.",
        policy:
          "WJU will match scholarship funds provided by a student's home church or Christian organization.",
        benefit:
          'The school matches dollar-for-dollar up to $500 per semester. (e.g., If the church supports $500, the school adds $500, totaling $1,000 benefit).',
      },
      {
        id: 'designated-memorial',
        title: 'Designated & Memorial Scholarship',
        purpose:
          "To honor donors' intentions and support specific student groups.",
        policy:
          'Scholarships funded by alumni, individuals, or foundations for specific purposes (e.g., Mission Field Support, Next-Gen Ministry).',
        benefit:
          "Awarded according to the donor's designated criteria and Committee screening.",
      },
    ],
  },
  {
    id: 'merit-mission',
    title: 'Merit & Mission Scholarships',
    scholarships: [
      {
        id: 'scholastic-achievement',
        title: 'Scholastic Achievement Scholarship',
        eligibility:
          'One student is chosen at the end of each regular semester based on academic excellence.',
        requirement:
          'Must obtain a G.P.A. of 3.5 or above for the previous semester.',
        benefit: 'Full or partial tuition waiver for the subsequent semester.',
      },
      {
        id: 'overseas-mission',
        title: 'Overseas Mission Scholarship',
        eligibility:
          'International students who came to the U.S. with a clear missionary purpose (pastors, missionaries).',
        benefit:
          'Full or partial tuition waiver as decided by the Scholarship Committee.',
      },
    ],
  },
  {
    id: 'need-based',
    title: 'Need-Based Scholarships',
    scholarships: [
      {
        id: 'student-employment',
        title: 'Student Employment Scholarship (Work-Study)',
        purpose: 'To assist students with financial need through service.',
        policy:
          'Students are assigned on-campus work based on ability and need.',
        condition:
          'Work assignments and pay rates are decided by the school administration. Must be renewed every semester.',
        benefit: 'Awarded according to work assignment and pay rates.',
      },
      {
        id: 'tuition-assistance',
        title: 'Tuition Assistance Scholarship',
        eligibility:
          'Students with financial difficulty who do not qualify for other specific scholarships.',
        benefit:
          'A proportionate amount of tuition assistance decided by the Committee.',
      },
    ],
  },
];

const GENERAL_SECTIONS: GeneralSection[] = [
  {
    id: 'general-qualifications',
    title: 'General Qualifications & Compliance',
    content: `To ensure that scholarships align with WJU’s educational and religious objectives, all applicants must meet the following qualifications:

Enrollment Status: Applicants must be enrolled as full-time students (as defined by the academic catalog). Exceptions for part-time students may be granted only by the Scholarship Committee in special circumstances.

Alignment with Institutional Values: WJU grants scholarships based on the applicant’s alignment with the institution’s sincerely held beliefs published in the Articles of Faith and adherence to the Student Code of Conduct. The school reserves the right to revoke scholarships from students who violate these standards.

Non-Discrimination Statement: Washington Jabez University does not discriminate based on race, color, or national origin in the administration of its educational policies, admissions, and scholarships. However, the University maintains its constitutional and statutory right to act in furtherance of its religious objectives.`,
  },
  {
    id: 'eligibility-application',
    title: 'Academic Eligibility & Application',
    content: `GPA Requirement: All applicants must maintain a G.P.A. of 3.0 or above in the previous semester.

Exception: Exceptions regarding the GPA requirement may be allowed for up to two semesters for international students demonstrating difficulties with the Korean language.

Application Process: Any student seeking financial assistance must submit a Scholarship Application Form during the designated registration period.`,
  },
  {
    id: 'administrative-procedures',
    title: 'Administrative Procedures & Record Keeping',
    content: `Application: Students must submit the Scholarship Application Form during the registration period.

Selection & Budgeting: The Scholarship Committee reviews applications within the designated annual budget cap.

Remittance (Pay-Balance Method): Scholarship is credited to the tuition bill. Student pays the remaining balance. If a student withdraws, the scholarship is revoked, and the full tuition becomes due.

Record Management (Digitalization): All scholarship-related documents (applications, recommendation letters, evaluation results, payment records) shall be digitized and archived. The Committee shall produce an Annual Scholarship Report to analyze effectiveness and adjust future budgets.`,
  },
  {
    id: 'external-resources',
    title: 'External Scholarship Resources',
    content: `Information Service: To assist students beyond internal funds, WJU actively provides information on regional and external scholarships (e.g., local foundations, denomination grants) via the school website and office notices. Students are encouraged to apply for these external opportunities.`,
  },
  {
    id: 'disclaimer',
    title: 'Disclaimer',
    content: `Right to Modify: Scholarship policies, limits, and eligibility criteria are subject to change based on the school's financial condition and policy updates. Changes will be announced prior to the semester, and the updated policy on the website supersedes previous versions.`,
  },
  {
    id: 'additional-policies',
    title: 'Additional Policies',
    content: `A. Student Loans: Student loan resources are currently not available for WJU students.

B. Privacy Statement (FERPA): Student financial information is confidential and protected. In accordance with the Family Educational Rights and Privacy Act (FERPA), WJU does not release scholarship records to third parties without the student's written consent, except as required by law or accreditation standards.`,
  },
];

export const scholarshipConfig = {
  pageTitle: 'Washington Jabez University Scholarship',
  generalPrinciples: GENERAL_PRINCIPLES,
  categories: SCHOLARSHIP_CATEGORIES,
  generalSections: GENERAL_SECTIONS,
} as const;

export function getScholarshipCategories(): ScholarshipCategory[] {
  return scholarshipConfig.categories;
}

export function getGeneralSections(): GeneralSection[] {
  return scholarshipConfig.generalSections;
}
