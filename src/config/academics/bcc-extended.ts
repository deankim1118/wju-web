/**
 * Bachelor of Christian Counseling (BCC) Extended Data
 */

import type { OutcomeItem, ProgramExtendedDataInput } from './program-extended-types';

export const BCC_EXTENDED: ProgramExtendedDataInput = {
  keyInformation: {
    creditInfo: {
      creditHours: '123',
      costPerCredit: '$255.00 per credit hour',
      yearsOfStudy: '4',
    },
  },
  outcomes: [
    {
      id: 'biblical-counseling',
      title: 'Biblical Counseling',
      description:
        'Integrate psychological principles with biblical truth to provide holistic care for individuals and families.',
    },
    {
      id: 'theological-foundation',
      title: 'Theological Foundation',
      description:
        'Construct a solid scriptural framework using Old and New Testament survey, hermeneutics, and systematic theology.',
    },
    {
      id: 'clinical-competency',
      title: 'Clinical Competency',
      description:
        'Apply professional counseling theories and assessment tools  to diverse mental health scenarios.',
    },
    {
      id: 'marriage-family',
      title: 'Marriage & Family',
      description:
        'Implement therapeutic interventions for couples in crisis and guide proper child development and home ministry.',
    },
    {
      id: 'conflict-resolution',
      title: 'Conflict Resolution',
      description:
        'Navigate interpersonal disputes and multicultural challenges using negotiation strategies and mediation skills.',
    },
    {
      id: 'practical-ministry',
      title: 'Practical Ministry',
      description:
        'Demonstrate pastoral care skills through supervised internships in hospitals, churches, and denominational agencies.',
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
      id: 'old-testament-studies',
      name: 'II. Old Testament Studies',
      courses: [
        { code: 'BOT 101', name: 'Introduction to the Bible', credits: 3 },
        { code: 'BOT 102', name: 'Biblical archeology', credits: 3 },
        { code: 'BOT 111', name: 'Bible Geography', credits: 3 },
        { code: 'BOT 112', name: 'Introduction to the Old Testament', credits: 3 },
        { code: 'BOT 123', name: 'The Pentateuch', credits: 3 },
        { code: 'BOT 124', name: 'History of Israel', credits: 3 },
        { code: 'BOT 125', name: 'Poetry', credits: 3 },
        { code: 'BOT 126', name: 'Prophet', credits: 3 },
      ],
    },
    {
      id: 'new-testament-studies',
      name: 'III. New Testament Studies',
      courses: [
        { code: 'BOT 128', name: 'Introduction to the New Testament', credits: 3 },
        { code: 'BOT 129', name: 'Four Gospels', credits: 3 },
        { code: 'BOT 130', name: 'Acts', credits: 3 },
        { code: 'BOT 131', name: `Paul's Epistle`, credits: 3 },
        { code: 'BOT 132', name: 'Applying Scripture in the Contemporary World', credits: 3 },
      ],
    },
    {
      id: 'biblical-interpretation',
      name: 'IV. Biblical Interpretation',
      courses: [
        { code: 'BOT 110', name: 'Bible Hermeneutics', credits: 3 },
      ],
    },
    {
      id: 'counseling-foundations',
      name: 'V. Counseling Foundations',
      courses: [
        { code: 'BOT 107', name: 'Introduction to Psychology', credits: 3 },
        { code: 'BOC 311', name: 'Introduction to Christian Counseling', credits: 3 },
        { code: 'BOC 104', name: 'Pastoral and Behavioral Psychology', credits: 3 },
        { code: 'BOC 323', name: 'Pastoral Counseling', credits: 3 },
      ],
    },
    {
      id: 'specialized-counseling',
      name: 'VI. Specialized Counseling',
      courses: [
        { code: 'BOC 101', name: 'Multicultural Counseling', credits: 3 },
        { code: 'BOC 102', name: 'Group Counseling', credits: 3 },
        { code: 'BOC 103', name: 'Negotiation, Mediation, and Conflict Resolution', credits: 3 },
        { code: 'BOC 105', name: 'Marriage Counseling', credits: 3 },
        { code: 'BOC 106', name: 'Discipline and Mentoring Women', credits: 3 },
      ],
    },
    {
      id: 'christian-education',
      name: 'VII. Christian Education',
      courses: [
        { code: 'BOC 110', name: 'Introduction to Christian Education', credits: 3 },
        { code: 'BOC 137', name: 'Bible teaching method', credits: 3 },
        { code: 'BOC 309', name: 'Belief development by age', credits: 3 },
      ],
    },
    {
      id: 'pastoral-practice',
      name: 'VIII. Pastoral Practice',
      courses: [
        { code: 'BOR 135', name: 'Pastoral Practice I', credits: 3 },
        { code: 'BOR 136', name: 'Pastoral Practice II', credits: 3 },
        { code: 'BOC 312', name: 'Home Ministry', credits: 3 },
      ],
    },
    {
      id: 'systematic-theology',
      name: 'IX. Systematic Theology',
      courses: [
        { code: 'BOT 127', name: 'Advanced Study: Systematic Theology', credits: 3 },
        { code: 'BOT 133', name: 'Systematic theology', credits: 3 },
        { code: 'BOT 134', name: 'Systematic theology II', credits: 3 },
        { code: 'BOT 136', name: 'Modern theology', credits: 3 },
      ],
    },
    {
      id: 'church-history-philosophy',
      name: 'X. Church History & Philosophy',
      courses: [
        { code: 'BOT 137', name: 'World Church History', credits: 3 },
        { code: 'BOT 108', name: 'Introduction to Philosophy', credits: 3 },
      ],
    },
    {
      id: 'apologetics-comparative',
      name: 'XI. Apologetics & Comparative Religion',
      courses: [
        { code: 'BOT 135', name: 'Christian apologetics', credits: 3 },
        { code: 'BOT 109', name: 'Comparative Religious Studies', credits: 3 },
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
