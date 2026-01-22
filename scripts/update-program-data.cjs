/**
 * Script to update program extended data files from courses.json
 */

const fs = require('fs');
const path = require('path');

const coursesPath = path.join(__dirname, '../src/config/data/courses.json');
const extendedDir = path.join(__dirname, '../src/config/academics');

// Map major names to slugs (with and without trailing spaces)
const programMap = {
  'DOCTOR OF MINISTRY (DMin)': 'dmin',
  'BACHELOR OF COMPARATIVE RELIGIOUS STUDIES (BCRS)': 'bcrs',
  'BACHELOR OF THEOLOGY (ThB)': 'thb',
  'BACHELOR OF CHRISTIAN & COUNSELING (BCC)': 'bcc',
  'MASTER OF THEOLOGY (ThM)': 'thm',
  'MASTER OF DIVINITY (MDiv)': 'mdiv',
  'MASTER OF CHRISTIAN COUNSELING (MCC)': 'mcc',
  'MASTER OF CHRISTIAN EDUCATION (MCE)': 'mce',
  'MASTER OF CHRISTIAN EDUCATION (MCE) ': 'mce',
  'MASTER OF COMPARATIVE RELIGIOUS STUDIES (MCRS)': 'mcrs',
  'MASTER OF COMPARATIVE RELIGIOUS STUDIES (MCRS) ': 'mcrs',
  'MASTER OF CHAPLAINCY (MChap)': 'mchap',
  'MASTER OF CHAPLAINCY (MChap) ': 'mchap',
};

// Read courses.json
const coursesData = JSON.parse(fs.readFileSync(coursesPath, 'utf8'));

// Extract program data
const programs = {};
coursesData.forEach((program) => {
  program.majors.forEach((major) => {
    // Try exact match first, then trimmed match
    let slug = programMap[major.majorName];
    if (!slug) {
      slug = programMap[major.majorName.trim()];
    }
    if (slug) {
      programs[slug] = {
        totalCredits: major.totalCredits,
        courses: major.courses,
      };
    }
  });
});

// Update each program file
Object.entries(programs).forEach(([slug, data]) => {
  const filePath = path.join(extendedDir, `${slug}-extended.ts`);
  
  if (!fs.existsSync(filePath)) {
    console.log(`File not found: ${filePath}`);
    return;
  }

  // Read current file
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Update creditHours
  content = content.replace(
    /creditHours:\s*['"](.*?)['"]/,
    `creditHours: '${data.totalCredits}'`
  );
  
  // Update curriculum - create a single category with all courses
  const curriculumRegex = /curriculum:\s*\[[\s\S]*?\],/;
  const coursesArray = data.courses.map((course) => {
    const code = course.code.replace(/\s+/g, ' ').trim().replace(/'/g, "\\'");
    const name = course.name.trim().replace(/'/g, "\\'");
    const credits = course.credits;
    return `        { code: '${code}', name: '${name}', credits: ${credits} }`;
  }).join(',\n');
  
  const newCurriculum = `curriculum: [
    {
      id: 'required-courses',
      name: 'Required Courses',
      courses: [
${coursesArray}
      ],
    },
  ],`;
  
  content = content.replace(curriculumRegex, newCurriculum);
  
  // Write updated file
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Updated ${slug}-extended.ts (${data.courses.length} courses, ${data.totalCredits} credits)`);
});

console.log('Done!');
