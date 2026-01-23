/**
 * Master of Christian Counseling (MCC) Extended Data
 */

import type { ProgramExtendedDataInput } from './program-extended-types';

export const MCC_EXTENDED: ProgramExtendedDataInput = {
  keyInformation: {
    creditInfo: {
      creditHours: '66',
      costPerCredit: '$300.00 per credit hour',
    },
  },
  outcomes: [],
  curriculum: [
    {
      id: 'biblical-studies',
      name: 'I. Biblical Studies',
      courses: [
        { code: 'MDT 405', name: 'The Pentateuch', credits: 3 },
        { code: 'MDT 406', name: 'Prophets I', credits: 3 },
        { code: 'MDT 407', name: 'Prophets II', credits: 3 },
        { code: 'MDT 408', name: 'The Synoptic Gospel', credits: 3 },
        { code: 'MDT 409', name: 'The Gospel of John', credits: 3 },
        { code: 'MDT 410', name: 'The Letters of Paul', credits: 3 },
        { code: 'MDT 411', name: 'The Epistles', credits: 3 },
        { code: 'MDE 701', name: 'History of Israel', credits: 3 },
        { code: 'MDE 702', name: 'Wisdom Literature', credits: 3 },
      ],
    },
    {
      id: 'counseling-foundations',
      name: 'II. Counseling Foundations',
      courses: [
        { code: 'MDC 601', name: 'Counseling Terminologies and Methodologies', credits: 3 },
        { code: 'MDC 602', name: 'Theoretical and Practical Application in Counseling', credits: 3 },
        { code: 'MDC 603', name: 'Biblical Counseling', credits: 3 },
        { code: 'MDC 604', name: 'Pastoral and Behavioral Psychology', credits: 3 },
        { code: 'MDC 611', name: 'Innovative Approaches to Counseling', credits: 3 },
      ],
    },
    {
      id: 'specialized-counseling',
      name: 'III. Specialized Counseling',
      courses: [
        { code: 'MDC 605', name: 'Age Group Counseling', credits: 3 },
        { code: 'MDC 606', name: 'Adolescent Counseling', credits: 3 },
        { code: 'MDC 607', name: 'Family Therapy', credits: 3 },
        { code: 'MDC 608', name: 'Marriage Counseling', credits: 3 },
        { code: 'MDC 609', name: 'Group Counseling', credits: 3 },
        { code: 'MDC 610', name: 'Mediation and Conflict Resolution', credits: 3 },
      ],
    },
    {
      id: 'theology-ethics',
      name: 'IV. Theology & Ethics',
      courses: [
        { code: 'MDT 415', name: 'Eschatology', credits: 3 },
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
