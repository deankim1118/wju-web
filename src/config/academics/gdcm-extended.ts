/**
 * Graduate Diploma in Church Music (GDCM) Extended Data
 */

import type { OutcomeItem, ProgramExtendedDataInput } from './program-extended-types';

export const GDCM_EXTENDED: ProgramExtendedDataInput = {
  keyInformation: {
    creditInfo: {
      creditHours: '23',
      costPerCredit: '$255.00 per credit hour',
      yearsOfStudy: '1',
    },
  },
  outcomes: [
    {
      id: 'focused-proficiency',
      title: 'Focused Proficiency',
      description:
        'Enhance technical and artistic proficiency in a chosen musical discipline at the graduate level within a streamlined timeframe.',
    },
    {
      id: 'ministry-application',
      title: 'Ministry Application',
      description:
        'Apply core principles of music ministry and spiritual formation directly to immediate local church contexts.',
    },
    {
      id: 'worship-design',
      title: 'Worship Design',
      description:
        'Effectively execute worship planning and congregational communication based on sound theological principles.',
    },
    {
      id: 'practical-arrangement',
      title: 'Practical Arrangement',
      description:
        'Develop practical skills in arranging and adapting music to suit the specific resources of a local congregation.',
    },
  ] as OutcomeItem[],
  curriculum: [
    {
      id: 'foundational-worship',
      name: 'I. Foundational Worship Ministry',
      courses: [
        { code: 'MCM 600', name: 'Music and Spiritual Formation', credits: 3, description: 'Explores the integration of personal spiritual disciplines with the public demands of music ministry.' },
        { code: 'MCM 601', name: 'Music Ministry and Communication', credits: 3, description: 'Focuses on effective pastoral communication and leadership skills necessary for directing church music programs.' },
        { code: 'MCM 602', name: 'Worship and Worship Music', credits: 3, description: 'A practical study of planning and leading worship services aligned with the theological vision of the church.' },
      ],
    },
    {
      id: 'intensive-applied',
      name: 'II. Intensive Applied Practice',
      courses: [
        { code: 'MCM 610/640', name: 'Applied Studio (Selected Major)', credits: 3, description: 'Focused graduate-level private instruction designed to rapidly elevate the student\u2019s performance or compositional abilities.' },
        { code: 'MCM 559', name: 'Collaborative Work / Accompaniment', credits: 3, description: 'Enhances the practical skills needed for accompanying congregational singing and choral groups effectively.' },
      ],
    },
    {
      id: 'practical-leadership',
      name: 'III. Practical Arrangement & Leadership',
      courses: [
        { code: 'MCM 676', name: 'Worship Music Arrangement', credits: 3, description: 'Teaches accessible methods for arranging traditional and contemporary music for varied church ensembles.' },
        { code: 'MCM 633', name: 'Band / Choir Directing', credits: 3, description: 'Develops essential conducting and rehearsal techniques for leading volunteer musicians in a church setting.' },
      ],
    },
    {
      id: 'diploma-capstone',
      name: 'IV. Diploma Capstone',
      courses: [
        { code: 'MCM 750', name: 'Graduation Project / Recital', credits: 2, description: 'A concluding project or abbreviated recital demonstrating the specialized skills acquired during the diploma program.' },
      ],
    },
  ],
  admissions: { intro: [], sections: [] },
  graduation: { requirements: [] },
};
