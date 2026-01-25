/**
 * Doctor of Ministry (DMin) Extended Data
 */

import type { OutcomeItem, ProgramExtendedDataInput } from './program-extended-types';

export const DMIN_EXTENDED: ProgramExtendedDataInput = {
  keyInformation: {
    creditInfo: {
      creditHours: '40',
      costPerCredit: '$525.00 per credit hour',
      yearsOfStudy: '3',
    },
  },
  outcomes: [
    {
      id: 'advanced-hermeneutics',
      title: 'Advanced Hermeneutics',
      description:
        'Apply advanced biblical theology and hermeneutics to contemporary pastoral contexts.',
    },
    {
      id: 'contextual-ecclesiology',
      title: 'Contextual Ecclesiology',
      description:
        'Reevaluate church identity and mission through the lens of New Testament and Reformation history.',
    },
    {
      id: 'strategic-evangelism',
      title: 'Strategic Evangelism',
      description:
        'Reinvent evangelism strategies to effectively reach postmodern and pluralistic societies.',
    },
    {
      id: 'cultural-engagement',
      title: 'Cultural Engagement',
      description:
        'Navigate complex ethical and multicultural challenges in urban ministry settings.',
    },
    {
      id: 'spiritual-resilience',
      title: 'Spiritual Resilience',
      description:
        'Cultivate holistic personal health and spiritual maturity for sustainable long-term leadership.',
    },
    {
      id: 'professional-research',
      title: 'Professional Research',
      description:
        'Contribute to ministry scholarship through rigorous qualitative and quantitative dissertation research.',
    },
  ] as OutcomeItem[],
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
  admissions: {
    intro: [],
    sections: [],
  },
  graduation: {
    requirements: [],
  },
};
