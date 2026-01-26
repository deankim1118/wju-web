/**
 * Program Extended Data Registry
 * Maps program slugs to their extended data files
 * 
 * To add extended data for a new program:
 * 1. Create a new file: `{slug}-extended.ts`
 * 2. Export the data as `export const {SLUG_UPPER}_EXTENDED = { ... } satisfies ProgramExtendedData`
 * 3. Import and add it to PROGRAM_EXTENDED_DATA below
 */

import type { DegreeProgram } from '../academics-content';
import { BCC_EXTENDED } from './bcc-extended';
import { BCRS_EXTENDED } from './bcrs-extended';
import { DMIN_EXTENDED } from './dmin-extended';
import { MCC_EXTENDED } from './mcc-extended';
import { MCE_EXTENDED } from './mce-extended';
import { MCHAP_EXTENDED } from './mchap-extended';
import { MCRS_EXTENDED } from './mcrs-extended';
import { MDIV_EXTENDED } from './mdiv-extended';
import type {
  ProgramExtendedData,
  ProgramExtendedDataInput,
} from './program-extended-types';
import { THB_EXTENDED } from './thb-extended';
import { THM_EXTENDED } from './thm-extended';

/**
 * Common key information shared across all programs
 * Individual programs can override these values if needed
 */
const COMMON_KEY_INFORMATION = {
  studyOptions: [
    {
      type: 'Online' as const,
      options: '',
    },
    {
      type: 'On Campus' as const,
      options: '',
    },
  ],
  hoursOfInstruction: {
    semesterHour: 'One Semester Hour represents one hour of class work per week for 15 weeks.',
  },
};

/**
 * Undergraduate (Bachelor's) admissions data
 * Used as default for Undergraduate level programs
 */
const UNDERGRADUATE_ADMISSIONS = {
  intro: [
    'To be admitted into this program at Washington Jabez University, Applicants must meet the following academic and spiritual standards to be considered for admission.',
  ],
  sections: [
    {
      id: 'academic-qualifications',
      title: 'Academic Qualifications',
      items: [
        'High school diploma or equivalent (e.g., GED).',
        'Minimum cumulative GPA of 2.0–2.7 on a 4.0 scale, depending on department standards.',
        'English language proficiency, if English is not the applicant\'s first language.',
      ],
    },
    {
      id: 'spiritual-character-qualifications',
      title: 'Spiritual & Character Qualifications',
      items: [
        'Personal testimony of Christian faith and spiritual maturity.',
        'Active participation in a local church or Christian community.',
      ],
    },
    {
      id: 'application-materials',
      title: 'Application Materials',
      items: [
        'Application for Admission & non-refundable application fee.',
        'Official High School diploma and Transcript.',
        'Personal Statement / Faith Statement.',
        'Letters of Recommendation (1–2) from a church pastor or educator.',
        'One (1) copy of passport and driver\'s license (for U.S. residents).',
        'One (1) copy of passport and resident registration certificate (for Residents Outside the United States).',
        'Interview (Optional).',
      ],
    },
  ],
};

/**
 * Graduate (Master's) admissions data
 * Used as default for Graduate level programs
 */
const MASTER_ADMISSIONS = {
  intro: [
    'To be admitted into this program at Washington Jabez University, Applicants must meet the following spiritual and academic standards to be considered for admission.',
  ],
  sections: [
    {
      id: 'spiritual-qualifications',
      title: 'Spiritual Qualifications',
      items: [
        'Personal experience of regeneration and water baptism.',
        'Confirmed sense of calling to Christian ministry.',
        'Active involvement in a local church or Christian community.',
      ],
    },
    {
      id: 'academic-qualifications',
      title: 'Academic Qualifications',
      items: [
        'Bachelor\'s degree from an accredited institution.',
        'Minimum cumulative GPA of 2.75 on a 4.0 scale.',
        'No specific undergraduate major required, though prior biblical/theological coursework is beneficial.',
        'Washington Jabez University places a strong emphasis on biblical language study (Hebrew and Greek) and research methodology as essential components of its advanced degree programs.',
      ],
    },
    {
      id: 'application-materials',
      title: 'Application Materials',
      items: [
        'Application form & fee.',
        'Official Transcripts & Diploma.',
        'Personal Essay detailing spiritual journey and ministry vision.',
        'Reference Letters (at least two).',
        'Two recent 2"x2.5" photographs.',
        'One (1) copy of passport and driver\'s license (for U.S. residents).',
        'One (1) copy of passport and resident registration certificate (for Residents Outside the United States).',
        'Personal Interview.',
      ],
    },
  ],
};

/**
 * Doctoral admissions data
 * Used as default for Doctoral level programs
 */
const DOCTORAL_ADMISSIONS = {
  intro: [
    'To be admitted into this program at Washington Jabez University, Applicants must meet the following academic and ministerial standards to be considered for admission.',
  ],
  sections: [
    {
      id: 'academic-qualifications',
      title: 'Academic Qualifications',
      items: [
        'Master of Divinity (M.Div.) or equivalent theological master\'s degree from an accredited institution.',
        'Minimum graduate GPA of 3.0 on a 4.0 scale.',
        'Official transcripts from all post-secondary institutions attended.',
        'International applicants are required to demonstrate English language proficiency and may be asked to submit official test scores such as TOEFL or IELTS as part of the admissions process.',
      ],
    },
    {
      id: 'ministerial-experience',
      title: 'Ministerial Experience',
      items: [
        'At least three (3) years of full-time ministry experience after completing the M.Div. degree.',
        'Active engagement in a ministry context suitable for the doctoral project.',
      ],
    },
    {
      id: 'application-materials',
      title: 'Application Materials',
      items: [
        'Application form & non-refundable fee.',
        'Personal Statement outlining ministry goals and doctoral focus.',
        'Resume / Curriculum Vitae.',
        'Three Letters of Recommendation (academic & ministry).',
        'One (1) copy of passport and driver\'s license (for U.S. residents).',
        'One (1) copy of passport and resident registration certificate (for Residents Outside the United States).',
        'Personal Interview with the admissions committee.',
        'English language proficiency (if applicable).',
        'Doctoral Project Proposal or Capstone Plan.',
      ],
    },
  ],
};

/**
 * Undergraduate (Bachelor's) graduation requirements
 * Used as default for Undergraduate level programs
 */
const UNDERGRADUATE_GRADUATION = {
  requirements: [
    {
      id: 'credit-hours',
      label: 'Credit Hours: Completion of a minimum of 120 semester units.',
    },
    {
      id: 'gpa',
      label: 'GPA: Maintenance of a minimum Cumulative GPA of 2.0 (C).',
    },
    {
      id: 'general-education',
      label: 'General Education: At least 25% of coursework must be in general education.',
    },
    {
      id: 'residency',
      label: 'Residency: A minimum of 25% of the credits must be completed at Washington Jabez University.',
    },
    {
      id: 'bible-exam',
      label: 'Bible Comprehensive Exam: Must pass a written examination covering the Old and New Testaments (Passing Score: 100/150).',
    },
    {
      id: 'exit-interview',
      label: 'Exit Interview: Candidates must complete an exit interview with the faculty to evaluate their educational experience and ministry readiness.',
    },
    {
      id: 'faculty-board-approval',
      label: 'Faculty & Board Approval: Candidates must receive final approval from the Faculty and the Board of Trustees, affirming satisfactory academic performance, Christian character, and commitment to ministry.',
    },
    {
      id: 'clearance',
      label: 'Clearance: All financial obligations must be cleared, and the graduation fee paid.',
    },
  ],
};

/**
 * Graduate (Master's) graduation requirements
 * Used as default for Graduate level programs
 */
const MASTER_GRADUATION = {
  requirements: [
    {
      id: 'prerequisite',
      label: 'Prerequisite: Possession of a Bachelor\'s degree.',
    },
    {
      id: 'gpa',
      label: 'GPA Requirement: Maintenance of a minimum Cumulative GPA of 3.0 (B).',
    },
    {
      id: 'residency',
      label: 'Residency: At least one-thirds (1/3) of the credits must be completed at Washington Jabez University.',
    },
    {
      id: 'bible-exam',
      label: 'Bible Comprehensive Exam: Must pass with a score of 100/150.',
    },
    {
      id: 'graduation-requirement',
      label: 'Graduation Requirement (Choose One):',
      details: [
        'Option A: Graduation Comprehensive Exam (Passing Score: 70%).',
        'Option B: Thesis / Dissertation (Substitute for the comprehensive exam).',
      ],
    },
    {
      id: 'exit-interview',
      label: 'Exit Interview: Candidates must complete an exit interview with the faculty.',
    },
    {
      id: 'faculty-board-approval',
      label: 'Faculty & Board Approval: Candidates must be approved by the faculty and Board of Trustees, demonstrating spiritual maturity.',
    },
    {
      id: 'clearance',
      label: 'Clearance: All financial obligations must be cleared, and the graduation fee paid.',
    },
  ],
};

/**
 * Doctoral graduation requirements
 * Used as default for Doctoral level programs
 */
const DOCTORAL_GRADUATION = {
  requirements: [
    {
      id: 'credit-hours',
      label: 'Credit Hours: Completion of 40 Credits total. (Includes 32 credits of coursework and 8 credits of dissertation).',
    },
    {
      id: 'course-structure',
      label: 'Course Structure: Designed to be completed in approximately 3 years (4 semesters of coursework + dissertation).',
    },
    {
      id: 'minimum-grade',
      label: 'Minimum Grade: All courses must be completed with a grade of C- or better.',
    },
    {
      id: 'dissertation-project',
      label: 'Dissertation Project: Completion of a doctoral dissertation worth 8 Credits.',
      details: [
        'Focus: A practical ministry project or research dissertation demonstrating advanced leadership skills.',
        'Requirement: One major dissertation defense upon completion of coursework.',
      ],
    },
    {
      id: 'exit-interview',
      label: 'Exit Interview: Candidates must complete an exit interview regarding their doctoral journey.',
    },
    {
      id: 'faculty-board-approval',
      label: 'Faculty & Board Approval: Final approval by the faculty and Board of Trustees based on academic and spiritual standing.',
    },
    {
      id: 'clearance',
      label: 'Clearance: All financial obligations must be cleared, and the graduation fee paid.',
    },
  ],
};

/**
 * Get default admissions based on degree level
 * Returns level-specific admissions or Master's as fallback
 */
function getDefaultAdmissionsForLevel(level?: string) {
  switch (level) {
    case 'Undergraduate':
      return UNDERGRADUATE_ADMISSIONS;
    case 'Graduate':
      return MASTER_ADMISSIONS;
    case 'Doctoral':
      return DOCTORAL_ADMISSIONS;
    default:
      // Fallback to Master's admissions if level is not specified
      return MASTER_ADMISSIONS;
  }
}

/**
 * Get default graduation requirements based on degree level
 * Returns level-specific graduation or Master's as fallback
 */
function getDefaultGraduationForLevel(level?: string) {
  switch (level) {
    case 'Undergraduate':
      return UNDERGRADUATE_GRADUATION;
    case 'Graduate':
      return MASTER_GRADUATION;
    case 'Doctoral':
      return DOCTORAL_GRADUATION;
    default:
      // Fallback to Master's graduation if level is not specified
      return MASTER_GRADUATION;
  }
}

// Map of program slugs to their extended data (input type - allows optional fields)
const PROGRAM_EXTENDED_DATA: Record<string, ProgramExtendedDataInput> = {
  thb: THB_EXTENDED,
  bcc: BCC_EXTENDED,
  bcrs: BCRS_EXTENDED,
  mdiv: MDIV_EXTENDED,
  thm: THM_EXTENDED,
  mcc: MCC_EXTENDED,
  mce: MCE_EXTENDED,
  mcrs: MCRS_EXTENDED,
  mchap: MCHAP_EXTENDED,
  dmin: DMIN_EXTENDED,
};

/**
 * Create default extended data from basic program data
 * Used when a program doesn't have custom extended data
 */
function createDefaultExtendedData(program: DegreeProgram): ProgramExtendedData {
  return {
    keyInformation: {
      creditInfo: {
        creditHours: 'Contact for details',
        costPerCredit: 'Contact for pricing information',
      },
      studyOptions: [
        {
          type: program.format.includes('Online') ? 'Online' : 'On Campus',
          options: program.format.split(' / ').map((f) => f.trim()),
        },
      ],
      hoursOfInstruction: {
        semesterHour: 'One Semester Hour represents one hour of class work per week for 15 weeks.',
      },
    },
    outcomes: program.outcomes.map((outcome, index) => ({
      id: `outcome-${index + 1}`,
      title: outcome.split(':')[0] || `Learning Outcome ${index + 1}`,
      description: outcome,
      icon: 'Target' as const,
    })),
    curriculum: [
      {
        id: 'curriculum',
        name: 'Sample Curriculum',
        courses: program.curriculum.map((course, index) => ({
          code: `COURSE-${String(index + 1).padStart(3, '0')}`,
          name: course,
          credits: 3,
        })),
      },
    ],
    admissions: {
      intro: [],
      sections: [],
    },
    graduation: getDefaultGraduationForLevel(program.level),
  };
}

/**
 * Merge common key information with program-specific data
 * Common data is applied first, then program-specific data overrides it
 * Returns ProgramExtendedData with all required fields guaranteed
 */
function mergeProgramData(
  programData: ProgramExtendedDataInput,
  program?: DegreeProgram,
): ProgramExtendedData {
  const hasCustomStudyOptions =
    programData.keyInformation.studyOptions &&
    programData.keyInformation.studyOptions.length > 0;

  // Use program title in intro if available, otherwise use generic text
  const defaultAdmissions = getDefaultAdmissionsForLevel(program?.level);
  const admissionsIntro = program
    ? [
        `To be admitted into the ${program.title} program at Washington Jabez University, Applicants must meet the following spiritual and academic standards to be considered for admission.`,
      ]
    : defaultAdmissions.intro;

  const hasCustomAdmissions =
    programData.admissions &&
    (programData.admissions.intro.length > 0 ||
      programData.admissions.sections.length > 0);

  const defaultGraduation = getDefaultGraduationForLevel(program?.level);
  const hasCustomGraduation =
    programData.graduation &&
    programData.graduation.requirements.length > 0;

  return {
    ...programData,
    keyInformation: {
      ...COMMON_KEY_INFORMATION,
      ...programData.keyInformation,
      studyOptions: hasCustomStudyOptions
        ? programData.keyInformation.studyOptions!
        : COMMON_KEY_INFORMATION.studyOptions,
      hoursOfInstruction: {
        ...COMMON_KEY_INFORMATION.hoursOfInstruction,
        ...programData.keyInformation.hoursOfInstruction,
      },
    },
    admissions: hasCustomAdmissions && programData.admissions
      ? programData.admissions!
      : {
          intro: admissionsIntro,
          sections: defaultAdmissions.sections,
        },
    graduation: hasCustomGraduation && programData.graduation
      ? programData.graduation!
      : defaultGraduation,
  };
}

/**
 * Get extended data for a program by slug
 * All programs now have extended data files, so this always returns the data
 * Common data is automatically merged with program-specific data
 */
export function getProgramExtendedData(
  slug: string,
  program?: DegreeProgram,
): ProgramExtendedData {
  // Return extended data if available
  if (PROGRAM_EXTENDED_DATA[slug]) {
    return mergeProgramData(PROGRAM_EXTENDED_DATA[slug], program);
  }
  
  // Fallback: create default extended data from program data (should not happen)
  if (program) {
    return createDefaultExtendedData(program);
  }
  
  // This should not happen in normal flow
  throw new Error(`No extended data found for program: ${slug}`);
}
