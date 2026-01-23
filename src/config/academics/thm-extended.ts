/**
 * Master of Theology (ThM) Extended Data
 */

import type { OutcomeItem, ProgramExtendedDataInput } from './program-extended-types';

export const THM_EXTENDED: ProgramExtendedDataInput = {
  keyInformation: {
    creditInfo: {
      creditHours: '96',
      costPerCredit: '$300.00 per credit hour',
    },
  },
  outcomes: [
    {
      id: 'biblical-exegesis',
      title: 'Biblical Exegesis',
      description:
        'Interpret Old and New Testament texts accurately using original languages and advanced critical methods.',
    },
    {
      id: 'systematic-theology',
      title: 'Systematic Theology',
      description:
        'Construct a comprehensive doctrinal framework covering God, Soteriology, and Ecclesiology.',
    },
    {
      id: 'historical-analysis',
      title: 'Historical Theology',
      description:
        'Evaluate the development of Christian thought from the early church to contemporary theological movements.',
    },
    {
      id: 'eschatological-studies',
      title: 'Eschatological Studies',
      description:
        'Analyze major eschatological themes, prophetic events, and diverse views on the consummation of God’s plan.',
    },
    {
      id: 'research-methodology',
      title: 'Research Methodology',
      description:
        'Employ rigorous qualitative and quantitative methods to investigate religious phenomena and theological controversies.',
    },
    {
      id: 'scholarly-ministry',
      title: 'Scholarly Ministry',
      description:
        'Apply deep theological insights to practical leadership, preaching, and teaching in the church context.',
    },
  ]  as OutcomeItem[],
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
        { code: 'MDT 405', name: 'The Pentateuch', credits: 3 },
        { code: 'MDT 406', name: 'Prophets I', credits: 3 },
        { code: 'MDT 407', name: 'Prophets II', credits: 3 },
        { code: 'MDT 408', name: 'The Synoptic Gospel', credits: 3 },
        { code: 'MDT 409', name: 'The Gospel of John', credits: 3 },
        { code: 'MDT 410', name: 'The Letters of Paul', credits: 3 },
        { code: 'MDT 411', name: 'The Epistles', credits: 3 },
        { code: 'MDT 412', name: 'Revelation', credits: 3 },
        { code: 'MDE 701', name: 'History of Israel', credits: 3 },
        { code: 'MDE 702', name: 'Wisdom Literature', credits: 3 },
        { code: 'MDE 808', name: 'Advanced Biblical Themes and Link Analysis', credits: 3 },
      ],
    },
    {
      id: 'systematic-theology',
      name: 'III. Systematic Theology',
      courses: [
        { code: 'MDT 413', name: 'Systematic I', credits: 3 },
        { code: 'MDT 414', name: 'Systematic II', credits: 3 },
        { code: 'MDT 415', name: 'Eschatology I', credits: 3 },
        { code: 'MDT 416', name: 'Eschatology II', credits: 3 },
        { code: 'MDT 420', name: 'Ecclesiology', credits: 3 },
        { code: 'MTD 421', name: 'Soteriology', credits: 3 },
      ],
    },
    {
      id: 'theological-history',
      name: 'IV. Theological History & Thought',
      courses: [
        { code: 'MDT 417', name: 'Contemporary Theology', credits: 3 },
        { code: 'MDT 418', name: 'Contemporary Theological Thought', credits: 3 },
        { code: 'MDT 419', name: 'Christian Thought History', credits: 3 },
        { code: 'MDR 809', name: 'Approaches to the Study of Religion', credits: 3 },
      ],
    },
    {
      id: 'practical-ministry',
      name: 'V. Practical Ministry',
      courses: [
        { code: 'MDD 501', name: 'Pastoral Care', credits: 3 },
        { code: 'MDD 509', name: 'Leadership and Administration', credits: 3 },
        { code: 'MDE 703', name: 'Teaching Method of Jesus', credits: 3 },
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
  ],
  admissions: {
    intro: [],
    sections: [],
  },
  graduation: {
    requirements: [],
  },
};
