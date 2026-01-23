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
      costPerCredit: '$300.00 per credit hour' ,
    },
  },
  outcomes: [
    {
      id: 'biblical-competency',
      title: 'Biblical Competency',
      description:
        'Interpret the Old and New Testaments faithfully by utilizing original languages (Hebrew and Greek) and proper exegetical methods.',
      icon: 'ScrollText',
    },
    {
      id: 'theological-integration',
      title: 'Theological Integration',
      description:
        'Articulate a coherent and robust Christian theology that integrates biblical truth with historical doctrines and contemporary contexts.',
      icon: 'Target',
    },
    {
      id: 'pastoral-proficiency',
      title: 'Pastoral Proficiency',
      description:
        'Demonstrate practical skills necessary for ministry leadership, including expository preaching, worship planning, pastoral care, and church administration.',
      icon: 'Users',
    },
    {
      id: 'missionary-engagement',
      title: 'Missionary Engagement',
      description:
        'Formulate strategies for evangelism and cross-cultural mission, demonstrating a passion for the Great Commission and the ability to serve in pluralistic settings.',
      icon: 'Globe',
    },
    {
      id: 'spiritual-maturity',
      title: 'Spiritual Maturity',
      description:
        'Exhibit the moral integrity, spiritual discipline, and servant leadership character required for professional Christian ministry.',
      icon: 'Heart',
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
  admissions: {
    intro: [
      'To be admitted into the Master of Divinity program at Washington Jabez University, applicants must demonstrate a clear calling to ministry and meet the following academic and spiritual criteria:',
    ],
    sections: [
      {
        id: 'spiritual',
        title: 'Spiritual Qualifications',
        items: [
          'A confirmed sense of calling from God for Christian ministry.',
          'Evidence of a regeneration experience and baptism with water.',
          'Active and fruitful participation in a local church.',
        ],
      },
      {
        id: 'academic',
        title: 'Academic Documentation',
        items: [
          'Submission of Official Transcripts and Diploma from a recognized undergraduate institution.',
          "A Reference Letter attesting to the applicant's character and potential for ministry.",
        ],
      },
      {
        id: 'interview',
        title: 'Interview Process',
        items: [
          'Completion of a personal interview with a team of faculty members.',
          'Final admission is contingent upon a positive evaluation by the Admissions Committee.',
        ],
      },
    ],
  },
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
