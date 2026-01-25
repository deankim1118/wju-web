/**
 * Bachelor of Theology (ThB) Extended Data
 */

import type { OutcomeItem, ProgramExtendedDataInput } from './program-extended-types';

export const THB_EXTENDED: ProgramExtendedDataInput = {
  keyInformation: {
    creditInfo: {
      creditHours: '123',
      costPerCredit: '$255.00 per credit hour',
      yearsOfStudy: '4',
    },
  },
  outcomes: [
    {
      id: 'biblical-fluency',
      title: 'Biblical Fluency',
      description:
        'Interpret Old and New Testament texts accurately using introductory Hebrew/Greek  and historical geography.',
    },
    {
      id: 'theological-defense',
      title: 'Theological Defense',
      description:
        'Construct a systematic theological framework to defend the Christian faith against modern cultural and philosophical challenges.',
    },
    {
      id: 'pastoral-ministry',
      title: 'Pastoral Ministry',
      description:
        'Deliver expository sermons and lead worship services while gaining practical experience through supervised internships.',
    },
    {
      id: 'christian-counseling',
      title: 'Christian Counseling',
      description:
        'Apply biblical principles and basic psychological theories to counsel individuals and resolve interpersonal conflicts.',
    },
    {
      id: 'global-engagement',
      title: 'Global Engagement',
      description:
        'Understand major world religions and implement multicultural mission strategies for effective evangelism.',
    },
    {
      id: 'christian-education',
      title: 'Christian Education',
      description:
        'Develop age-appropriate bible teaching methods and curriculums for children, youth, and home ministries.',
    },
  ] as OutcomeItem[],
  curriculum: [
    {
      id: 'biblical-languages',
      name: 'I. Biblical Languages',
      courses: [
        { code: 'BOT 103', name: 'Hebrew I', credits: 3 },
        { code: 'BOT 104', name: 'Hebrew II', credits: 3 },
        { code: 'BOT 105', name: 'Greek I', credits: 3 },
        { code: 'BOT 106', name: 'Greek II', credits: 3 },
      ],
    },
    {
      id: 'biblical-studies',
      name: 'II. Biblical Studies',
      courses: [
        { code: 'BOT 101', name: 'Introduction to the Bible', credits: 3 },
        { code: 'BOT 102', name: 'Biblical archeology', credits: 3 },
        { code: 'BOT 110', name: 'Bible Hermeneutics', credits: 3 },
        { code: 'BOT 111', name: 'Bible Geography', credits: 3 },
        { code: 'BOT 112', name: 'Introduction to the Old Testament', credits: 3 },
        { code: 'BOT 123', name: 'The Pentateuch', credits: 3 },
        { code: 'BOT 124', name: 'History of Israel', credits: 3 },
        { code: 'BOT 125', name: 'Poetry', credits: 3 },
        { code: 'BOT 126', name: 'Prophet', credits: 3 },
        { code: 'BOT 128', name: 'Introduction to New Testament', credits: 3 },
        { code: 'BOT 129', name: 'Four Gospels', credits: 3 },
        { code: 'BOT 130', name: 'Acts', credits: 3 },
        { code: 'BOT 131', name: 'Paul\'s Epistle', credits: 3 },
        { code: 'BOT 132', name: 'Applying Scripture in the Contemporary World', credits: 3 },
      ],
    },
    {
      id: 'theology-history',
      name: 'III. Theology & History',
      courses: [
        { code: 'BOT 127', name: 'Advanced Study: Systematic Theology', credits: 3 },
        { code: 'BOT 133', name: 'Systematic theology I', credits: 3 },
        { code: 'BOT 134', name: 'Systematic theology II', credits: 3 },
        { code: 'BOT 135', name: 'Christian Apologetics', credits: 3 },
        { code: 'BOT 136', name: 'Modern theology', credits: 3 },
        { code: 'BOT 137', name: 'World Church History', credits: 3 },
        { code: 'BOT 108', name: 'Introduction to Philosophy', credits: 3 },
        { code: 'BOT 109', name: 'Comparative Religious Studies', credits: 3 },
      ],
    },
    {
      id: 'practical-ministry',
      name: 'IV. Practical Ministry',
      courses: [
        { code: 'BOR 135', name: 'Pastoral Practice I', credits: 3 },
        { code: 'BOR 136', name: 'Pastoral Practice II', credits: 3 },
        { code: 'BOR 138', name: 'Preaching', credits: 3 },
        { code: 'BOR 139', name: 'Worship', credits: 3 },
        { code: 'BOT 138', name: 'Introduction to Missiology', credits: 3 },
        { code: 'BOT 139', name: 'Multicultural Mission', credits: 3 },
      ],
    },
    {
      id: 'counseling-education',
      name: 'V. Counseling & Education',
      courses: [
        { code: 'BOC 304', name: 'Pastoral and Behavioral Psychology', credits: 3 },
        { code: 'BOC 137', name: 'Bible teaching method', credits: 3 },
        { code: 'BOC 309', name: 'Belief development by age', credits: 3 },
        { code: 'BOC 311', name: 'Introduction to Christian Counseling', credits: 3 },
        { code: 'BOC 323', name: 'Pastoral Counseling', credits: 3 },
        { code: 'BOC 312', name: 'Home Ministry', credits: 3 },
        { code: 'BOT 107', name: 'Introduction to Psychology', credits: 3 },
        { code: 'Special Lecture', name: 'Special Lecture', credits: 3 },
      ],
    },
  ],
  admissions: {
    intro: [],
    sections: [],
  },
  graduation: {
    requirements: [],
  },
};
