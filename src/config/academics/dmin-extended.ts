/**
 * Doctor of Ministry (DMin) Extended Data
 */

import type { ProgramExtendedData } from './program-extended-types';

export const DMIN_EXTENDED: ProgramExtendedData = {
  keyInformation: {
    creditInfo: {
      creditHours: '68',
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
      id: 'biblical-theological-foundations',
      name: 'I. Biblical & Theological Foundations',
      courses: [
        { code: 'DOM701', name: 'Hermeneutics', credits: 4 },
        { code: 'DOM702', name: 'New Testament Backgrounds for Preachers', credits: 4 },
        { code: 'DOM703', name: 'New Testament Ecclesiology for Ministers', credits: 4 },
        { code: 'DOM704', name: 'Biblical Theology of the Old Testament for Pastors', credits: 4 },
        { code: 'DOM705', name: 'Pentecost Theology for Pastoral Ministry', credits: 4 },
      ],
    },
    {
      id: 'ministry-leadership',
      name: 'II. Ministry Leadership & Formation',
      courses: [
        { code: 'DOM706', name: 'Personal Health of a Leader', credits: 4 },
        { code: 'DOM707', name: 'Spiritual Formation and Discipleship', credits: 4 },
        { code: 'DOM711', name: 'Spirituality and Ministry', credits: 4 },
      ],
    },
    {
      id: 'contextual-ministry',
      name: 'III. Contextual Ministry',
      courses: [
        { code: 'DOM708', name: 'Ethics and Ministry in a Multicultural Context', credits: 4 },
        { code: 'DOM709', name: 'Reinventing Evangelism', credits: 4 },
        { code: 'DOM710', name: 'Theology of Urban Ministry', credits: 4 },
        { code: 'DOM712', name: 'Globalization, the Poor, and Christian Mission', credits: 4 },
      ],
    },
    {
      id: 'research-dissertation',
      name: 'IV. Research & Dissertation',
      courses: [
        { code: 'DOM713', name: 'Dissertation', credits: 8 },
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
