/**
 * Program Extended Data Types
 * Shared types for all program extended data files
 */

export type CreditInfo = {
  creditHours: string;
  costPerCredit: string;
};

export type StudyOption = {
  type: 'Online' | 'On Campus';
  options: string | string[]; // Can be single string or array
};

export type HoursOfInstruction = {
  semesterHour: string;
  fieldEducation: string;
};

export type KeyInformation = {
  creditInfo: CreditInfo;
  studyOptions: StudyOption[];
  hoursOfInstruction: HoursOfInstruction;
};

export type OutcomeItem = {
  id: string;
  title: string;
  description: string;
  icon: 'ScrollText' | 'Target' | 'Users' | 'Heart' | 'Globe' | 'BookOpen' | 'Award';
};

export type CurriculumCategory = {
  id: string;
  name: string;
  courses: {
    code: string;
    name: string;
    credits: number;
  }[];
};

export type SemesterStep = {
  id: string;
  title: string;
  description: string;
};

export type GraduationRequirement = {
  id: string;
  label: string;
  details?: string[];
};

export type ProgramExtendedData = {
  keyInformation: KeyInformation;
  outcomes: OutcomeItem[];
  curriculum: CurriculumCategory[];
  structure: SemesterStep[];
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
