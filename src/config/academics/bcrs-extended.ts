/**
 * Bachelor of Comparative Religious Studies (BCRS) Extended Data
 */

import type { OutcomeItem, ProgramExtendedDataInput } from './program-extended-types';

export const BCRS_EXTENDED: ProgramExtendedDataInput = {
  keyInformation: {
    creditInfo: {
      creditHours: '123',
      costPerCredit: '$255.00 per credit hour',
    },
  },
  outcomes: [
    {
      id: 'world-religions',
      title: 'World Religions Survey',
      description:
        'Gain a comprehensive overview of major global faiths including Christianity, Islam, Hinduism, and Buddhism.',
    },
    {
      id: 'biblical-foundation',
      title: 'Biblical Foundation',
      description:
        'Build a solid foundation in Old and New Testament studies, including introductory Hebrew and Greek.',
    },
    {
      id: 'philosophy-ethics',
      title: 'Philosophy & Ethics',
      description:
        'Develop critical thinking skills to analyze philosophical arguments regarding faith, reason, and morality.',
    },
    {
      id: 'cultural-engagement',
      title: 'Cultural Engagement',
      description:
        'Explore the intersection of religion with culture, gender, and science in both American and global contexts.',
    },
    {
      id: 'comparative-analysis',
      title: 'Comparative Analysis',
      description:
        'Compare theological themes and religious practices across different traditions to understand their similarities and distinctions.',
    },
    {
      id: 'global-perspectives',
      title: 'Global Perspectives',
      description:
        'Understand the historical and political impact of religion in diverse regions like the Middle East and South Asia.',
    },
  ] as OutcomeItem[],
  curriculum: [
    {
      id: 'biblical-language-studies',
      name: 'I. Biblical & Language Studies',
      courses: [
        { code: 'BOT101', name: 'Introduction to the Bible', credits: 3 },
        { code: 'BOT102', name: 'Biblical Archeology', credits: 3 },
        { code: 'BOT103', name: 'Hebrew I', credits: 3 },
        { code: 'BOT105', name: 'Greek I', credits: 3 },
        { code: 'BOT110', name: 'Bible Hermeneutics', credits: 3 },
        { code: 'BOT114', name: 'History of Israel', credits: 3 },
        { code: 'BOT115', name: 'Gospel of John', credits: 3 },
        { code: 'BOT119', name: 'Biblical Prophecies', credits: 3 },
        { code: 'BOT120', name: 'Biblical Interpretation', credits: 3 },
        { code: 'BOR212', name: 'Biblical Overview', credits: 3 },
      ],
    },
    {
      id: 'world-religions',
      name: 'II. World Religions',
      courses: [
        { code: 'BOR213', name: 'Intro to Islam', credits: 3 },
        { code: 'BOR214', name: 'Islam in World Politics', credits: 3 },
        { code: 'BOR215', name: 'Islamic Law in Societies', credits: 3 },
        { code: 'BOR216', name: 'Biblical Characters in the Quran', credits: 3 },
        { code: 'BOR217', name: 'Intro to Hinduism', credits: 3 },
        { code: 'BOR218', name: 'Intro to Buddhism', credits: 3 },
        { code: 'BOR219', name: 'Intro to South Asia', credits: 3 },
        { code: 'BOR220', name: 'Intro to the Middle East', credits: 3 },
        { code: 'BOR207', name: 'Cults and World Religions', credits: 3 },
      ],
    },
    {
      id: 'comparative-religion',
      name: 'III. Comparative Religion & Analysis',
      courses: [
        { code: 'BOT109', name: 'Comparative Religious Studies', credits: 3 },
        { code: 'BOR202', name: 'Comparative Analysis: Teaching and Practical Living of Christ', credits: 3 },
        { code: 'BOR203', name: 'Christianity and Islam', credits: 3 },
        { code: 'BOR204', name: 'American Culture and Religion', credits: 3 },
        { code: 'BOR205', name: 'Religion and Science', credits: 3 },
        { code: 'BOR206', name: 'Gender and Religion', credits: 3 },
        { code: 'BOR221', name: 'Perspectives', credits: 3 },
        { code: 'BOR225', name: 'Christianity in the Modern', credits: 3 },
        { code: 'BOR226', name: 'The Crusades', credits: 3 },
      ],
    },
    {
      id: 'theology-philosophy',
      name: 'IV. Theology & Philosophy',
      courses: [
        { code: 'BOT111', name: 'Systematic Theology I', credits: 3 },
        { code: 'BOT112', name: 'Systematic Theology II', credits: 3 },
        { code: 'BOT113', name: 'World Church History', credits: 3 },
        { code: 'BOT118', name: 'Contemporary Theological Controversies', credits: 3 },
        { code: 'BOR101', name: 'Philosophy of Religion', credits: 3 },
        { code: 'BOR227', name: 'Christian Apologetics', credits: 3 },
        { code: 'BOT108', name: 'Introduction to Philosophy', credits: 3 },
      ],
    },
    {
      id: 'practical-studies',
      name: 'V. Practical Studies',
      courses: [
        { code: 'BOT107', name: 'Introduction to Psychology', credits: 3 },
        { code: 'BOT138', name: 'Introduction to Missiology', credits: 3 },
        { code: 'BOR208', name: 'Intro to International Affairs: Regional Cultures and Worldviews', credits: 3 },
        { code: 'BOR209', name: 'Intro to Communications', credits: 3 },
        { code: 'BOR210', name: 'English I', credits: 3 },
        { code: 'BOR211', name: 'English II', credits: 3 },
        { code: 'BOR228', name: 'Special Lecture', credits: 3 },
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
