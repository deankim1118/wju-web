import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function splitProgramLabel(label: string): { name: string; abbr?: string } {
  const match = label.match(/^(.*)\s+\(([^)]+)\)\s*$/);
  if (!match) return { name: label };
  return { name: match[1] ?? label, abbr: match[2] };
}
