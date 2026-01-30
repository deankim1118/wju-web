/**
 * Embeds course descriptions from courses.json into each *-extended.ts
 * curriculum course entry. Run: node scripts/embed-course-descriptions.cjs
 */

const fs = require('fs');
const path = require('path');

const coursesPath = path.join(__dirname, '../src/config/data/courses.json');
const extendedDir = path.join(__dirname, '../src/config/academics');

function normalizeCode(code) {
  return String(code).replace(/\s+/g, '').toUpperCase();
}

const coursesData = JSON.parse(fs.readFileSync(coursesPath, 'utf8'));
const descMap = new Map();
for (const program of coursesData) {
  for (const major of program.majors) {
    for (const course of major.courses) {
      const key = normalizeCode(course.code);
      if (!descMap.has(key) && course.description && String(course.description).trim()) {
        descMap.set(key, course.description);
      }
    }
  }
}

// Generic "Special Lecture" description when no specific one
if (!descMap.has('SPECIALLECTURE')) {
  descMap.set(
    'SPECIALLECTURE',
    "A special lecture course designed to enhance students' understanding of various topics in religious studies."
  );
}
const specialLectureVariants = ['SPECIALLECTUREI', 'SPECIALLECTUREII', 'SPECIALLECTUREIII', 'SPECIALLECTUREIV'];
specialLectureVariants.forEach((v) => {
  if (!descMap.has(v)) descMap.set(v, descMap.get('SPECIALLECTURE') || descMap.get('SPECIALLECTURE'));
});

const extendedFiles = fs.readdirSync(extendedDir).filter((f) => f.endsWith('-extended.ts') && f !== 'program-extended.ts');

function escapeSingleQuotes(s) {
  return String(s).replace(/\\/g, '\\\\').replace(/'/g, "\\'");
}

for (const file of extendedFiles) {
  const filePath = path.join(extendedDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  // Match course object lines: { code: '...', name: '...', credits: N } or with optional description
  const courseLineRegex = /^(\s*)\{\s*code:\s*'([^']*(?:\\'[^']*)*)',\s*name:\s*'([^']*(?:\\'[^']*)*)',\s*credits:\s*(\d+)(?:,\s*description:\s*'[^']*(?:\\'[^']*)*')?\s*\},?\s*$/gm;
  content = content.replace(courseLineRegex, (match, indent, code, name, credits) => {
    const normalized = normalizeCode(code);
    const desc = descMap.get(normalized);
    if (!desc) return match;
    const escaped = escapeSingleQuotes(desc);
    return `${indent}{ code: '${code.replace(/\\'/g, "'")}', name: '${name.replace(/\\'/g, "'")}', credits: ${credits}, description: '${escaped}' },`;
  });
  fs.writeFileSync(filePath, content, 'utf8');
  console.log('Updated', file);
}

console.log('Done. Descriptions embedded from courses.json into', extendedFiles.length, 'files.');
