/**
 * Course data from courses.json
 * Flattens program/major structure and provides lookup by code.
 */

import coursesJson from './courses.json';

type CourseFromJson = {
  code: string;
  name: string;
  credits: number;
  description?: string;
  type?: string;
};

type MajorFromJson = {
  majorName: string;
  totalCredits: number;
  courses: CourseFromJson[];
};

type ProgramFromJson = {
  programName: string;
  majors: MajorFromJson[];
};

/** Normalize course code for lookup (strip spaces, uppercase) */
export function normalizeCourseCode(code: string): string {
  return code.replace(/\s+/g, '').toUpperCase();
}

function flattenCourses(): Array<CourseFromJson & { programName: string; majorName: string }> {
  const programs = coursesJson as ProgramFromJson[];
  const out: Array<CourseFromJson & { programName: string; majorName: string }> = [];
  for (const program of programs) {
    for (const major of program.majors) {
      for (const course of major.courses) {
        out.push({
          ...course,
          programName: program.programName,
          majorName: major.majorName,
        });
      }
    }
  }
  return out;
}

let flattened: Array<CourseFromJson & { programName: string; majorName: string }> | null = null;

function getFlattened(): Array<CourseFromJson & { programName: string; majorName: string }> {
  if (!flattened) flattened = flattenCourses();
  return flattened;
}

/** Map: normalized code -> description (first occurrence wins for duplicates) */
let descriptionsMap: Map<string, string> | null = null;

export function getCourseDescriptionsMap(): Map<string, string> {
  if (descriptionsMap) return descriptionsMap;
  const map = new Map<string, string>();
  for (const course of getFlattened()) {
    const key = normalizeCourseCode(course.code);
    if (!map.has(key) && course.description) map.set(key, course.description);
  }
  descriptionsMap = map;
  return map;
}

export type CourseListItem = {
  code: string;
  normalizedCode: string;
  name: string;
  credits: number;
  description?: string;
  programName: string;
  majorName: string;
};

/** All unique courses by normalized code (first occurrence kept) */
let allCoursesList: CourseListItem[] | null = null;

export function getAllCourses(): CourseListItem[] {
  if (allCoursesList) return allCoursesList;
  const seen = new Set<string>();
  const list: CourseListItem[] = [];
  for (const c of getFlattened()) {
    const normalized = normalizeCourseCode(c.code);
    if (seen.has(normalized)) continue;
    seen.add(normalized);
    list.push({
      code: c.code,
      normalizedCode: normalized,
      name: c.name,
      credits: c.credits,
      description: c.description,
      programName: c.programName,
      majorName: c.majorName,
    });
  }
  allCoursesList = list;
  return list;
}

/** Get a single course by code (with or without spaces) */
export function getCourseByCode(code: string): CourseListItem | null {
  const normalized = normalizeCourseCode(code);
  return getAllCourses().find((c) => c.normalizedCode === normalized) ?? null;
}

/** Get previous/next course by index in the full list (for navigation) */
export function getAdjacentCourses(
  normalizedCode: string,
): { prev: CourseListItem | null; next: CourseListItem | null } {
  const list = getAllCourses();
  const idx = list.findIndex((c) => c.normalizedCode === normalizedCode);
  if (idx < 0) return { prev: null, next: null };
  return {
    prev: idx > 0 ? list[idx - 1]! : null,
    next: idx < list.length - 1 ? list[idx + 1]! : null,
  };
}
