import type { DegreeLevel } from '@/config/academics-content';

export const PROGRAM_LEVEL_STYLES: Record<
  DegreeLevel,
  string
> = {
  Undergraduate: 'bg-amber-600 text-white border border-white/15',
  Graduate: 'bg-primary text-white',
  Doctoral: 'bg-secondary text-white',
};

export function getLevelBadgeClasses(level: DegreeLevel): string {
  return PROGRAM_LEVEL_STYLES[level];
}
