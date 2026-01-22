/**
 * Master of Theology (ThM) Extended Data
 */

import type { ProgramExtendedData } from './program-extended-types';

export const THM_EXTENDED: ProgramExtendedData = {
  keyInformation: {
    creditInfo: {
      creditHours: '96',
      costPerCredit: '',
    },
    studyOptions: [
      {
        type: 'Online',
        options: '',
      },
      {
        type: 'On Campus',
        options: '',
      },
    ],
    hoursOfInstruction: {
      semesterHour: 'One Semester Hour represents one hour of class work per week for 15 weeks.',
      fieldEducation: 'Field Education credits require 30 hours of work per unit.',
    },
  },
  outcomes: [],
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
  structure: [],
  admissions: {
    intro: [],
    sections: [],
  },
  graduation: {
    requirements: [],
  },
};
