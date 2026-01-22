/**
 * Master of Comparative Religious Studies (MCRS) Extended Data
 */

import type { ProgramExtendedData } from './program-extended-types';

export const MCRS_EXTENDED: ProgramExtendedData = {
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
      id: 'biblical-language-studies',
      name: 'I. Biblical & Language Studies',
      courses: [
        { code: 'MDT 402', name: 'Biblical Hebrew', credits: 3 },
        { code: 'MTD 403', name: 'Biblical Greek I', credits: 3 },
        { code: 'MDT 412', name: 'Revelation', credits: 3 },
        { code: 'MDE 701', name: 'History of Israel', credits: 3 },
        { code: 'MDR 808', name: 'Advanced Biblical Themes and Link Analysis', credits: 3 },
      ],
    },
    {
      id: 'world-religions',
      name: 'II. World Religions',
      courses: [
        { code: 'MDR 804', name: 'Intro to Islam', credits: 3 },
        { code: 'MDR 805', name: 'Intro to Hinduism', credits: 3 },
        { code: 'MDR 806', name: 'Intro to Buddhism', credits: 3 },
        { code: 'MDR 806', name: 'Intro to South Asia', credits: 3 },
        { code: 'MDR 807', name: 'Intro to the Middle East', credits: 3 },
        { code: 'MDR 812', name: 'Religions of Indigenous Peoples', credits: 3 },
        { code: 'MDR 813', name: 'The Way of the Shaman', credits: 3 },
      ],
    },
    {
      id: 'comparative-religion',
      name: 'III. Comparative Religion & Analysis',
      courses: [
        { code: 'MDR 809', name: 'Approaches to the Study of Religion', credits: 3 },
        { code: 'MDR 810', name: 'Advanced Analysis: Christianity and Islam', credits: 3 },
        { code: 'MDR 811', name: 'Comparative Study of New Religious Movements', credits: 3 },
        { code: 'MDR 814', name: 'Religious Cults II', credits: 3 },
        { code: 'COMP535', name: 'Advanced Study of Gender and Religion American Culture', credits: 3 },
      ],
    },
    {
      id: 'philosophy-theology',
      name: 'IV. Philosophy & Theology',
      courses: [
        { code: 'MDCR 801', name: 'Philosophy for Theology', credits: 3 },
        { code: 'MDR 803', name: 'Philosophy of Religion', credits: 3 },
        { code: 'MDR 802', name: 'American Culture and Religion', credits: 3 },
        { code: 'MDT 422', name: 'Eschatology I', credits: 3 },
        { code: 'Special Lecture', name: 'Special Lecture', credits: 3 },
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
