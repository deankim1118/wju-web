/**
 * Program Extended Data Types
 * Shared types for all program extended data files
 */

export type CreditInfo = {
  creditHours: string;
  costPerCredit: string;
  yearsOfStudy?: string;
  /** Optional small note displayed next to the Credits label (e.g. "music-related credit hours") */
  creditNote?: string;
};

export type StudyOption = {
  type: 'Online' | 'On Campus';
  options: string | string[]; // Can be single string or array
};

export type HoursOfInstruction = {
  semesterHour: string;
};

// Input type for extended data files (allows optional common fields)
export type KeyInformationInput = {
  creditInfo: CreditInfo;
  studyOptions?: StudyOption[]; // Optional - merged from common data if not provided
  hoursOfInstruction?: HoursOfInstruction; // Optional - merged from common data if not provided
};

// Output type after merging (always has required fields)
export type KeyInformation = {
  creditInfo: CreditInfo;
  studyOptions: StudyOption[]; // Always present after merge
  hoursOfInstruction: HoursOfInstruction; // Always present after merge
};

export type OutcomeItem = {
  id: string;
  title: string;
  description: string;
};

export type CurriculumCourse = {
  code: string;
  name: string;
  credits: number;
  /** Populated from courses.json by code (normalized) when available */
  description?: string;
};

export type CurriculumCategory = {
  id: string;
  name: string;
  courses: CurriculumCourse[];
};

export type GraduationRequirement = {
  id: string;
  label: string;
  details?: string[];
};

// Input type for extended data files
export type ProgramExtendedDataInput = {
  keyInformation: KeyInformationInput;
  outcomes: OutcomeItem[];
  curriculum: CurriculumCategory[];
  admissions?: {
    intro: string[];
    sections: {
      id: string;
      title: string;
      items: string[];
      
    }[];
  };
  graduation?: {
    requirements: GraduationRequirement[];
  };
};

// Output type after merging (always has required fields)
export type ProgramExtendedData = {
  keyInformation: KeyInformation;
  outcomes: OutcomeItem[];
  curriculum: CurriculumCategory[];
  admissions: {
    intro: string[];
    sections: {
      id: string;
      title: string;
      items: string[];
    }[];
  };
  graduation: {
    requirements: GraduationRequirement[];
  };
};
