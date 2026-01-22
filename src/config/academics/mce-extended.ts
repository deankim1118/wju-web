/**
 * Master of Christian Education (MCE) Extended Data
 */

import type { ProgramExtendedData } from './program-extended-types';

export const MCE_EXTENDED: ProgramExtendedData = {
  keyInformation: {
    creditInfo: {
      creditHours: '66',
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
      id: 'biblical-studies',
      name: 'I. Biblical Studies',
      courses: [
        { code: 'MDT 406', name: 'Prophets I', credits: 3 },
        { code: 'MDT 407', name: 'Prophets II', credits: 3 },
        { code: 'MDT 408', name: 'The Synoptic Gospel', credits: 3 },
        { code: 'MDT 410', name: 'The Letters of Paul', credits: 3 },
        { code: 'MDT 411', name: 'The Epistles', credits: 3 },
        { code: 'MDE 701', name: 'History of Israel', credits: 3 },
        { code: 'MDE 702', name: 'Wisdom Literature', credits: 3 },
      ],
    },
    {
      id: 'christian-education',
      name: 'II. Christian Education Foundations',
      courses: [
        { code: 'MDE 703', name: 'Teaching Method of Jesus', credits: 3 },
        { code: 'MDE 704', name: 'Christian Curriculum Development', credits: 3 },
        { code: 'MDE 706', name: 'Advanced Teaching and Learning Styles', credits: 3 },
      ],
    },
    {
      id: 'theology-ethics',
      name: 'III. Theology & Ethics',
      courses: [
        { code: 'MDT 420', name: 'Ecclesiology', credits: 3 },
        { code: 'MDT 421', name: 'Soteriology', credits: 3 },
        { code: 'MDT 422', name: 'Eschatology', credits: 3 },
        { code: 'MDE 705', name: 'Hamartiology', credits: 3 },
        { code: 'MDT 419', name: 'Christian Thought History', credits: 3 },
        { code: 'MDE 708', name: 'Christian Ethics and Law', credits: 3 },
      ],
    },
    {
      id: 'practical-ministry',
      name: 'IV. Practical Ministry',
      courses: [
        { code: 'MDE 707', name: 'Evangelism and Communication', credits: 3 },
        { code: 'MDC 610', name: 'Mediation and Conflict Resolution', credits: 3 },
      ],
    },
    {
      id: 'special-lectures',
      name: 'V. Special Lectures',
      courses: [
        { code: 'Special Lecture I', name: 'Special Lecture I', credits: 3 },
        { code: 'Special Lecture II', name: 'Special Lecture II', credits: 3 },
        { code: 'Special Lecture III', name: 'Special Lecture III', credits: 3 },
        { code: 'Special Lecture IV', name: 'Special Lecture IV', credits: 3 },
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
