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
 * Graduate (Master's) admissions data
 * Used as default for Graduate level programs
 */
const GRADUATE_ADMISSIONS = {
  intro: [
    'To be admitted into this program at Washington Jabez University, Applicants must meet the following spiritual and academic standards to be considered for admission.',
  ],
  sections: [
    {
      id: 'spiritual-qualifications',
      title: 'Spiritual Qualifications',
      items: [
        'A personal regeneration experience and baptism with water.',
        'A confirmed sense of calling from God for Christian ministry.',
        'Active and fruitful participation in a local church.',
      ],
    },
    {
      id: 'academic-qualifications',
      title: 'Academic Qualifications',
      items: [
        "A Bachelor's degree from an approved institution.",
        'Minimum 2.00 Cumulative GPA.',
        'Note: M.Div. applicants are not required to have majored in Bible at the undergraduate level.'
      ],
    },
    {
      id: 'academic-checklist',
      title: 'Application Checklist',
      items: [
        'Application for Admission',
        'Application Fee',
        'Two recent 2" X 2 1/2" photographs',
        'Personal Essay (Detailing your sense of calling and ministry vision)',
        'Official Transcripts & Diploma (Verification of final degree)',
        'Reference Letter (Recommendation from a pastor or ministry leader)',
        'Important Note: All applicants are required to complete a personal interview with the faculty committee after document review.',
      ],
    },
  ],
};

/**
 * Get default admissions based on degree level
 * TODO: Add Undergraduate and Doctoral admissions when ready
 */
function getDefaultAdmissionsForLevel(level?: string) {
  // For now, all levels use graduate admissions
  // This can be expanded later with level-specific admissions
  return GRADUATE_ADMISSIONS;
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
    graduation: {
      requirements: [
        {
          id: 'coursework',
          label: 'Completion of all required coursework with a minimum grade of C-',
        },
        {
          id: 'gpa',
          label: 'Maintenance of a cumulative Grade Point Average (GPA) of 2.0 or higher',
        },
        {
          id: 'residency',
          label: "Satisfaction of the university's residency requirement",
        },
      ],
    },
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
