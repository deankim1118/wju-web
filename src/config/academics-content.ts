import { ROUTES } from './routes';

export type DegreeLevel = 'Undergraduate' | 'Graduate' | 'Doctoral';

export type DegreeProgram = {
  /** short program code shown in UI (e.g. MDiv) */
  code: string;
  /** URL segment under /academics (e.g. mdiv) */
  slug: string;
  /** marketing title (e.g. Master of Divinity) */
  title: string;
  /** credential label shown on detail pages (e.g. "MDiv") */
  credential: string;
  level: DegreeLevel;
  href: string;

  /** 1–2 sentence summary used in cards and program page intro */
  summary: string;
  /** quick bullets used in program page */
  highlights: readonly string[];

  /** high-level program details (easy to edit later) */
  format: string;
  typicalLength: string;

  /** program page sections */
  outcomes: readonly string[];
  curriculum: readonly string[];
  whoItsFor: readonly string[];
};

export const DEGREE_PROGRAMS: readonly DegreeProgram[] = [
  {
    code: 'ThB',
    slug: 'thb',
    title: 'Bachelor of Theology',
    credential: 'ThB',
    level: 'Undergraduate',
    href: ROUTES.ACADEMICS.THB,
    summary:
      'Build a strong biblical and theological foundation for ministry, discipleship, and lifelong learning.',
    highlights: [
      'Biblical literacy & theological foundations',
      'Spiritual formation & ministry practice',
      'Apologetics & worldview',
    ],
    format: 'Online / Hybrid (as available)',
    typicalLength: '3–4 years (typical)',
    outcomes: [
      'Interpret Scripture with sound hermeneutics and a Christ-centered framework.',
      'Communicate core doctrines clearly in teaching and discipleship contexts.',
      'Serve effectively in local church and community ministry settings.',
    ],
    curriculum: [
      'Old & New Testament survey',
      'Systematic Theology',
      'Church History',
      'Hermeneutics & Biblical Interpretation',
      'Spiritual Formation & Ministry Practicum',
    ],
    whoItsFor: [
      'Students preparing for pastoral ministry or church leadership',
      'Those seeking structured theological training as a foundation for graduate study',
    ],
  },
  {
    code: 'BCC',
    slug: 'bcc',
    title: 'Bachelor of Christian Counseling',
    credential: 'BCC',
    level: 'Undergraduate',
    href: ROUTES.ACADEMICS.BCC,
    summary:
      'Develop counseling foundations rooted in Scripture, spiritual care, and ethical ministry practice.',
    highlights: [
      'Biblically grounded counseling foundations',
      'Pastoral care & helping skills',
      'Ethics and boundaries in ministry',
    ],
    format: 'Online / Hybrid (as available)',
    typicalLength: '3–4 years (typical)',
    outcomes: [
      'Apply core counseling skills with compassion and clarity.',
      'Integrate biblical principles into pastoral care and guidance.',
      'Practice with appropriate ethics, boundaries, and referral awareness.',
    ],
    curriculum: [
      'Introduction to Christian Counseling',
      'Pastoral Care',
      'Counseling Ethics & Boundaries',
      'Human Development',
      'Marriage & Family Foundations',
    ],
    whoItsFor: [
      'Students called to care-focused ministry roles',
      'Church leaders supporting congregational care and discipleship',
    ],
  },
  {
    code: 'BCRS',
    slug: 'bcrs',
    title: 'Bachelor of Comparative Religious Studies',
    credential: 'BCRS',
    level: 'Undergraduate',
    href: ROUTES.ACADEMICS.BCRS,
    summary:
      'Study major world religions with academic rigor while developing a thoughtful Christian apologetic.',
    highlights: [
      'World religions overview',
      'Apologetics & mission-minded engagement',
      'Cultural and historical awareness',
    ],
    format: 'Online / Hybrid (as available)',
    typicalLength: '3–4 years (typical)',
    outcomes: [
      'Describe major religious traditions with fairness and clarity.',
      'Engage questions of faith and culture with humility and confidence.',
      'Develop missional dialogue skills for real-world contexts.',
    ],
    curriculum: [
      'Introduction to World Religions',
      'Philosophy of Religion',
      'Christian Apologetics',
      'Religion & Culture',
      'Historical Perspectives on Religion',
    ],
    whoItsFor: [
      'Students interested in missions, apologetics, or intercultural ministry',
      'Those preparing for graduate study in theology and religion',
    ],
  },
  {
    code: 'MDiv',
    slug: 'mdiv',
    title: 'Master of Divinity',
    credential: 'MDiv',
    level: 'Graduate',
    href: ROUTES.ACADEMICS.MDIV,
    summary:
      'Professional preparation for pastoral ministry with integrated biblical studies, theology, and practice.',
    highlights: [
      'Pastoral leadership and preaching foundations',
      'Biblical languages / interpretation emphasis (as offered)',
      'Ministry-focused formation',
    ],
    format: 'Online / Hybrid (as available)',
    typicalLength: '2–4 years (typical)',
    outcomes: [
      'Preach and teach Scripture faithfully and effectively.',
      'Lead ministries with wisdom, integrity, and pastoral care.',
      'Integrate theology into real pastoral decisions and contexts.',
    ],
    curriculum: [
      'Homiletics & Preaching',
      'Pastoral Theology',
      'Biblical Interpretation',
      'Systematic Theology (advanced)',
      'Ministry Leadership & Practicum',
    ],
    whoItsFor: [
      'Those preparing for pastoral ministry and church leadership',
      'Ministry practitioners seeking comprehensive graduate formation',
    ],
  },
  {
    code: 'ThM',
    slug: 'thm',
    title: 'Master of Theology',
    credential: 'ThM',
    level: 'Graduate',
    href: ROUTES.ACADEMICS.THM,
    summary:
      'Advanced theological study for students pursuing research, teaching, or specialized ministry depth.',
    highlights: [
      'Advanced theological inquiry',
      'Research and academic writing focus',
      'Specialization pathways',
    ],
    format: 'Online / Hybrid (as available)',
    typicalLength: '1–2 years (typical)',
    outcomes: [
      'Produce rigorous theological writing and research.',
      'Engage primary and secondary sources with academic integrity.',
      'Develop deeper competency in a theological specialization.',
    ],
    curriculum: [
      'Advanced Systematic Theology',
      'Theological Research Methods',
      'Seminar in Historical Theology',
      'Apologetics / Philosophy Seminar',
      'Capstone Project (as required)',
    ],
    whoItsFor: [
      'Students pursuing doctoral studies or academic teaching',
      'Pastors and leaders seeking advanced theological depth',
    ],
  },
  {
    code: 'MCC',
    slug: 'mcc',
    title: 'Master of Christian Counseling',
    credential: 'MCC',
    level: 'Graduate',
    href: ROUTES.ACADEMICS.MCC,
    summary:
      'Graduate-level counseling training grounded in Scripture and informed by pastoral and clinical wisdom.',
    highlights: [
      'Counseling theory and practice',
      'Spiritual care & integration',
      'Ethics, supervision, and ministry readiness',
    ],
    format: 'Online / Hybrid (as available)',
    typicalLength: '1.5–3 years (typical)',
    outcomes: [
      'Apply counseling frameworks appropriately in ministry and care settings.',
      'Integrate spiritual formation into care for individuals and families.',
      'Maintain ethical best practices, boundaries, and referral competency.',
    ],
    curriculum: [
      'Counseling Theories',
      'Crisis & Trauma Care (foundations)',
      'Marriage & Family Counseling',
      'Counseling Ethics & Supervision',
      'Pastoral Care Integration',
    ],
    whoItsFor: [
      'Those serving in counseling-focused ministry roles',
      'Church leaders strengthening congregational care systems',
    ],
  },
  {
    code: 'MCE',
    slug: 'mce',
    title: 'Master of Christian Education',
    credential: 'MCE',
    level: 'Graduate',
    href: ROUTES.ACADEMICS.MCE,
    summary:
      'Equip teachers and ministry leaders to form disciples through biblically faithful education and leadership.',
    highlights: [
      'Teaching and curriculum design foundations',
      'Leadership for discipleship and formation',
      'Church-based education strategy',
    ],
    format: 'Online / Hybrid (as available)',
    typicalLength: '1.5–3 years (typical)',
    outcomes: [
      'Design learning experiences that cultivate discipleship and spiritual growth.',
      'Lead education ministries with clarity, care, and structure.',
      'Develop curriculum aligned with biblical theology and church mission.',
    ],
    curriculum: [
      'Foundations of Christian Education',
      'Teaching & Learning in Ministry',
      'Curriculum Design',
      'Leadership for Education Ministries',
      'Assessment & Discipleship Strategy',
    ],
    whoItsFor: [
      'Christian educators, ministry coordinators, and discipleship leaders',
      'Those building church education systems and teacher development',
    ],
  },
  {
    code: 'MCRS',
    slug: 'mcrs',
    title: 'Master of Comparative Religious Studies',
    credential: 'MCRS',
    level: 'Graduate',
    href: ROUTES.ACADEMICS.MCRS,
    summary:
      'Graduate study of religions and apologetics for thoughtful engagement in multicultural contexts.',
    highlights: [
      'Advanced study of major religions',
      'Apologetics and cultural engagement',
      'Research-driven seminars',
    ],
    format: 'Online / Hybrid (as available)',
    typicalLength: '1.5–3 years (typical)',
    outcomes: [
      'Analyze religious traditions with depth and accuracy.',
      'Engage cultural questions through a coherent Christian worldview.',
      'Develop research-based approaches to interfaith dialogue and mission.',
    ],
    curriculum: [
      'Advanced World Religions Seminar',
      'Religion & Society',
      'Christian Apologetics (advanced)',
      'Research Methods in Religious Studies',
      'Capstone Seminar (as required)',
    ],
    whoItsFor: [
      'Mission practitioners and intercultural ministry leaders',
      'Students pursuing further academic study in religion',
    ],
  },
  {
    code: 'MChap',
    slug: 'mchap',
    title: 'Master of Chaplaincy',
    credential: 'MChap',
    level: 'Graduate',
    href: ROUTES.ACADEMICS.MCHAP,
    summary:
      'Prepare for chaplaincy and institutional ministry through pastoral care, formation, and applied leadership.',
    highlights: [
      'Pastoral care in institutional settings',
      'Spiritual assessment & care planning',
      'Ethics, crisis response, and leadership',
    ],
    format: 'Online / Hybrid (as available)',
    typicalLength: '1.5–3 years (typical)',
    outcomes: [
      'Provide compassionate spiritual care across diverse contexts.',
      'Respond wisely to crisis, grief, and trauma situations.',
      'Demonstrate ethical, professional, and ministry-ready practices.',
    ],
    curriculum: [
      'Foundations of Chaplaincy',
      'Pastoral Care & Counseling',
      'Crisis, Grief, and Trauma Care',
      'Professional Ethics in Chaplaincy',
      'Applied Ministry Leadership',
    ],
    whoItsFor: [
      'Those called to hospital, military, prison, or institutional chaplaincy',
      'Pastors expanding into specialized pastoral care roles',
    ],
  },
  {
    code: 'DMin',
    slug: 'dmin',
    title: 'Doctor of Ministry',
    credential: 'DMin',
    level: 'Doctoral',
    href: ROUTES.ACADEMICS.DMIN,
    summary:
      'Advanced professional ministry leadership for experienced practitioners pursuing deeper impact and excellence.',
    highlights: [
      'Leadership and ministry innovation',
      'Research-informed practice',
      'Capstone project focus',
    ],
    format: 'Online / Hybrid (as available)',
    typicalLength: '3–4 years (typical)',
    outcomes: [
      'Lead complex ministry initiatives with wisdom and strategic clarity.',
      'Integrate research into real ministry practice and outcomes.',
      'Complete a capstone project addressing a ministry challenge.',
    ],
    curriculum: [
      'Advanced Ministry Leadership',
      'Research Methods for Ministry',
      'Ethics & Integrity in Leadership',
      'Seminar in Spiritual Formation',
      'DMin Project / Capstone',
    ],
    whoItsFor: [
      'Experienced pastors and ministry leaders',
      'Leaders seeking doctoral-level formation and ministry impact',
    ],
  },
] as const;

export const ACADEMICS_PAGE_CONTENT = {
  hero: {
    title: 'Academic programs',
    subtitle: 'Welcome',
    imageUrl: '/wju-hero-img.png',
    imageAlt: 'Washington Jabez University campus',
  },
  intro: {
    title: 'A Theological Education for the Church and the World',
    body: `WJU’s academic programs are designed to cultivate Scripture-shaped leaders who serve with clarity, compassion, and conviction.\n\nExplore degree pathways, compare program goals, and find the best next step for your calling.`,
  },
  distinctives: {
    title: 'What Shapes Your Learning',
    items: [
      {
        title: 'Biblical Fidelity',
        description:
          'Courses are designed to form students in Scripture, doctrine, and faithful ministry practice.',
      },
      {
        title: 'Pastoral Formation',
        description:
          'Learning is oriented toward real ministry contexts—preaching, care, leadership, and discipleship.',
      },
      {
        title: 'Global Perspective',
        description:
          'Engage diverse contexts with cultural awareness and gospel-centered mission.',
      },
      {
        title: 'Flexible Pathways',
        description:
          'Choose a degree level that fits your season of life while keeping academic quality high.',
      },
    ],
  },
  programs: {
    title: 'Degree Programs',
    subtitle:
      'Browse programs by level. Each program page includes an overview, highlights, and outcomes.',
    sectionId: 'degree-programs',
  },
  cta: {
    title: 'Ready to Begin?',
    description:
      'Request information, explore admissions, and take your next step toward theological education and ministry preparation.',
    buttonText: 'REQUEST INFORMATION',
    href: ROUTES.REQUEST_INFO,
  },
} as const;

export function getDegreeProgramBySlug(slug: string) {
  return DEGREE_PROGRAMS.find((p) => p.slug === slug) ?? null;
}

export function getDegreeProgramsByLevel(level: DegreeLevel) {
  return DEGREE_PROGRAMS.filter((p) => p.level === level);
}

