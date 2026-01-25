/**
 * Master of Divinity (MDiv) Extended Data
 * Additional detailed information for the MDiv program page
 */

import type {
  CurriculumCategory,
  OutcomeItem,
  ProgramExtendedDataInput,
} from './program-extended-types';

export const MDIV_EXTENDED: ProgramExtendedDataInput = {
  keyInformation: {
    creditInfo: {
      creditHours: '99',
      costPerCredit: '$300.00 per credit hour',
      yearsOfStudy: '3',
    },
  },
  outcomes: [
    {
      id: 'biblical-interpretation',
      title: 'Biblical Interpretation',
      description:
        'Master the exegesis of Old and New Testaments using original Hebrew and Greek.',
    },
    {
      id: 'theological-foundation',
      title: 'Theological Foundation',
      description:
        'Construct a robust Christian theology integrating biblical truth with historical context.',
    },
    {
      id: 'ministry-leadership',
      title: 'Ministry Leadership',
      description:
        'Lead churches effectively with skills in administration, worship planning, and church planting.',
    },
    {
      id: 'preaching-teaching',
      title: 'Preaching & Teaching',
      description:
        'Deliver biblically faithful sermons and teachings with confidence and clarity.',
    },
    {
      id: 'global-mission',
      title: 'Global Mission',
      description:
        'Engage in cross-cultural evangelism and mission work for unreached people groups.',
    },
    {
      id: 'pastoral-care',
      title: 'Pastoral Care',
      description:
        'Provide biblical counseling and conflict resolution for individuals and families.',
    },
  ] as OutcomeItem[],
  curriculum: [
    {
      id: 'biblical-languages',
      name: 'I. Biblical Languages',
      courses: [
        { code: 'MDT 401', name: 'Biblical Hebrew I', credits: 3 },
        { code: 'MDT 402', name: 'Biblical Hebrew II', credits: 3 },
        { code: 'MDT 403', name: 'Biblical Greek I', credits: 3 },
        { code: 'MDT 404', name: 'Biblical Greek II', credits: 3 },
      ],
    },
    {
      id: 'biblical-studies',
      name: 'II. Biblical Studies',
      courses: [
        { code: 'MDD 405', name: 'The Pentateuch', credits: 3 },
        { code: 'MDT 406', name: 'Prophets I', credits: 3 },
        { code: 'MDT 407', name: 'Prophets II', credits: 3 },
        { code: 'MDE 701', name: 'History of Israel', credits: 3 },
        { code: 'MDE 702', name: 'Wisdom Literature', credits: 3 },
        { code: 'MDT 408', name: 'The Synoptic Gospel', credits: 3 },
        { code: 'MDT 409', name: 'The Gospel of John', credits: 3 },
        { code: 'MDT 410', name: 'The Letters of Paul', credits: 3 },
        { code: 'MDT 411', name: 'The Epistles', credits: 3 },
        { code: 'MDT 412', name: 'Revelation', credits: 3 },
      ],
    },
    {
      id: 'theology-history',
      name: 'III. Theology & History',
      courses: [
        { code: 'MDT 413', name: 'Systematic I', credits: 3 },
        { code: 'MDT 414', name: 'Systematic II', credits: 3 },
        { code: 'MDT 417', name: 'Contemporary Theology', credits: 3 },
      ],
    },
    {
      id: 'practical-theology',
      name: 'IV. Practical Theology & Ministry',
      courses: [
        { code: 'MDD 506', name: 'Preaching Theory and Method', credits: 3 },
        { code: 'MDD 507', name: 'Preaching Practicum', credits: 3 },
        { code: 'MDD 501', name: 'Pastoral Care', credits: 3 },
        { code: 'MDD 509', name: 'Leadership and Administration', credits: 3 },
        { code: 'MDD 510', name: 'Worship Planning and Operation', credits: 3 },
        { code: 'MDD 513', name: 'Discipleship', credits: 3 },
        { code: 'MDE 703', name: 'Teaching Method of Jesus', credits: 3 },
        { code: 'MDC 610', name: 'Mediation and Conflict Resolution', credits: 3 },
      ],
    },
    {
      id: 'mission-evangelism',
      name: 'V. Mission & Evangelism',
      courses: [
        { code: 'MDD 508', name: 'Church Planting and Growth', credits: 3 },
        { code: 'MDD 511', name: 'Unreached People Mission', credits: 3 },
        { code: 'MDD 512', name: 'Mission and Cross Cultural', credits: 3 },
        { code: 'MDE 707', name: 'Evangelism and Communication', credits: 3 },
      ],
    },
    {
      id: 'field-education',
      name: 'VI. Field Education',
      courses: [
        { code: 'MDD 502', name: 'Church Internship I', credits: 3 },
        { code: 'MDD 503', name: 'Church Internship II', credits: 3 },
        { code: 'Special Lecture I', name: 'Special Lecture I', credits: 3 },
        { code: 'Special Lecture II', name: 'Special Lecture II', credits: 3 },
      ],
    },
  ] as CurriculumCategory[],
  graduation: {
    requirements: [
      {
        id: 'coursework',
        label: 'Coursework: Completion of 99 credit hours with a minimum grade of C- in all required courses.',
      },
      {
        id: 'gpa',
        label: 'Academic Standing: Maintenance of a cumulative Grade Point Average (GPA) of 2.0 or higher.',
      },
      {
        id: 'residency',
        label: "Residency: Satisfaction of the university's residency requirement.",
      },
      {
        id: 'bible-exam',
        label: 'Bible Comprehensive Exam: Passing score of at least 100 out of 150 questions (75 OT / 75 NT).',
      },
      {
        id: 'graduation-exam',
        label: 'Graduation Comprehensive Exam: Passing score of 70% (7 out of 10 questions) covering Biblical, Systematic, Historical, and Practical Theology.',
        details: [
          'Note: The Graduation Comprehensive Exam may be substituted by a Thesis or Dissertation (requires approval of subject, outline, and drafts by 2-3 readers).',
        ],
      },
      {
        id: 'administrative',
        label: 'Administrative: Completion of the Application for Graduation and settlement of all financial accounts.',
      },
    ],
  },
} as const satisfies ProgramExtendedDataInput;
