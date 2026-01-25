/**
 * Master of Chaplaincy (MChap) Extended Data
 */

import type { OutcomeItem, ProgramExtendedDataInput } from './program-extended-types';

export const MCHAP_EXTENDED: ProgramExtendedDataInput = {
  keyInformation: {
    creditInfo: {
      creditHours: '66',
      costPerCredit: '$300.00 per credit hour',
      yearsOfStudy: '2.5',
    },
  },
  outcomes: [
    {
      id: 'institutional-chaplaincy',
      title: 'Institutional Chaplaincy',
      description:
        'Minister effectively in diverse specialized settings including healthcare, correctional facilities, and military contexts.',
    },
    {
      id: 'crisis-grief-care',
      title: 'Crisis & Grief Care',
      description:
        'Provide compassionate spiritual support and ethical guidance during critical moments of suffering, death, and bereavement.',
    },
    {
      id: 'pastoral-counseling',
      title: 'Pastoral Counseling',
      description:
        'Apply counseling theories and psychological assessments to support mental and spiritual health across all age groups.',
    },
    {
      id: 'conflict-mediation',
      title: 'Conflict Mediation',
      description:
        'Resolve interpersonal disputes and navigate complex ethical challenges using negotiation strategies and mediation skills.',
    },
    {
      id: 'pluralistic-ministry',
      title: 'Pluralistic Engagement',
      description:
        'Communicate the Gospel wisely and provide Christocentric care within secular, multi-faith, and multicultural environments.',
    },
    {
      id: 'biblical-integration',
      title: 'Biblical Integration',
      description:
        'Integrate wisdom literature, soteriology, and the teaching methods of Jesus into practical ministry service.',
    },
  ] as OutcomeItem[],
  curriculum: [
    {
      id: 'biblical-studies',
      name: 'I. Biblical Studies',
      courses: [
        { code: 'MDT 405', name: 'The Pentateuch', credits: 3 },
        { code: 'MDT 408', name: 'The Synoptic Gospel', credits: 3 },
        { code: 'MDT 409', name: 'The Gospel of John', credits: 3 },
        { code: 'MDE 701', name: 'History of Israel', credits: 3 },
        { code: 'MDE 702', name: 'Wisdom Literature', credits: 3 },
      ],
    },
    {
      id: 'chaplaincy-foundations',
      name: 'II. Chaplaincy Foundations',
      courses: [
        { code: 'MDCH 901', name: 'Introduction to Chaplaincy', credits: 3 },
        { code: 'MDCH 902', name: 'Chaplaincy: Healthcare', credits: 3 },
        { code: 'MDCH 903', name: 'Foundations of Correctional Chaplaincy', credits: 3 },
        { code: 'MDCH 904', name: 'Death and Dying', credits: 3 },
      ],
    },
    {
      id: 'counseling-care',
      name: 'III. Counseling & Care',
      courses: [
        { code: 'MDC 601', name: 'Counseling Terminologies and Methodologies', credits: 3 },
        { code: 'MDC 602', name: 'Theoretical and Practical Application in Counseling', credits: 3 },
        { code: 'MDC 604', name: 'Pastoral and Behavioral Psychology', credits: 3 },
        { code: 'MDC 606', name: 'Adolescent Counseling', credits: 3 },
        { code: 'MDC 610', name: 'Mediation and Conflict Resolution', credits: 3 },
        { code: 'MDC 611', name: 'Innovative Approaches to Counseling', credits: 3 },
      ],
    },
    {
      id: 'theology-ethics',
      name: 'IV. Theology & Ethics',
      courses: [
        { code: 'MTD 421', name: 'Soteriology', credits: 3 },
        { code: 'MDT 422', name: 'Eschatology', credits: 3 },
        { code: 'MDE 708', name: 'Christian Ethics and Law', credits: 3 },
        { code: 'MDR 803', name: 'Philosophy of Religion', credits: 3 },
      ],
    },
    {
      id: 'practical-ministry',
      name: 'V. Practical Ministry',
      courses: [
        { code: 'MDE 703', name: 'Teaching Method of Jesus', credits: 3 },
        { code: 'MDE 707', name: 'Evangelism and Communication', credits: 3 },
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
