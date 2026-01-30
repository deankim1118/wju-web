/**
 * Master of Christian Education (MCE) Extended Data
 */

import type { OutcomeItem, ProgramExtendedDataInput } from './program-extended-types';

export const MCE_EXTENDED: ProgramExtendedDataInput = {
  keyInformation: {
    creditInfo: {
      creditHours: '66',
      costPerCredit: '$300.00 per credit hour',
      yearsOfStudy: '2.5',
    },
  },
  outcomes: [
    {
      id: 'educational-design',
      title: 'Curriculum & Pedagogy',
      description:
        'Design biblically grounded curricula and master advanced teaching methodologies, including the teaching methods of Jesus.',
    },
    {
      id: 'biblical-literacy',
      title: 'Biblical Literacy',
      description:
        'Synthesize Old and New Testament history, wisdom literature, and prophetic writings for effective educational instruction.',
    },
    {
      id: 'theological-formation',
      title: 'Theological Formation',
      description:
        'Articulate core doctrines including Soteriology, Ecclesiology, and Eschatology to ensure theological accuracy in teaching.',
    },
    {
      id: 'contextual-teaching',
      title: 'Contextual Teaching',
      description:
        'Adapt educational strategies to engage diverse learners in urban settings and pluralistic cultures.',
    },
    {
      id: 'ethics-leadership',
      title: 'Ethics & Leadership',
      description:
        'Apply Christian ethics and legal principles to moral decision-making and conflict resolution within ministry contexts.',
    },
    {
      id: 'evangelism-discipleship',
      title: 'Evangelism & Discipleship',
      description:
        'Integrate evangelism strategies and spiritual formation practices into the educational ministry of the church.',
    },
  ] as OutcomeItem[],
  curriculum: [
    {
      id: 'biblical-studies',
      name: 'I. Biblical Studies',
      courses: [
        { code: 'MDT 406', name: 'Prophets I', credits: 3, description: 'Surveys history, literature, and theology of the prophetic corpus, situating prophets in historical context via 1-2 Kings, Ezra, Nehemiah.' },
        { code: 'MDT 407', name: 'Prophets II', credits: 3, description: 'In-depth study of Obadiah, Joel, Jonah, Amos, and Hosea in historical context.' },
        { code: 'MDT 408', name: 'The Synoptic Gospel', credits: 3, description: 'Detailed examination of Matthew, Mark, and Luke with attention to the distinctive portrait of Jesus each presents.' },
        { code: 'MDT 410', name: 'The Letters of Paul', credits: 3, description: 'Introduction to Paul\'s letters, considering their historical context in the Roman Empire and diaspora Judaism and their ethical and philosophical impact.' },
        { code: 'MDT 411', name: 'The Epistles', credits: 3, description: 'Study of James, 1 & 2 Peter, and Jude, focusing on theology of God, Christology, hamartiology, pistology, and eschatology.' },
        { code: 'MDE 701', name: 'History of Israel', credits: 3, description: 'Study of Israel’s history in light of Joshua through Esther, emphasizing God’s interventions and faith heroes’ influence on culture.' },
        { code: 'MDE 702', name: 'Wisdom Literature', credits: 3, description: 'Detailed examination of Job, Proverbs, Ecclesiastes, and Song of Songs.' },
      ],
    },
    {
      id: 'christian-education',
      name: 'II. Christian Education Foundations',
      courses: [
        { code: 'MDE 703', name: 'Teaching Method of Jesus', credits: 3, description: 'Examination of Jesus as a teacher, including authority, mission, content, discipline, methodology, and emphasis on the cross and Holy Spirit as teacher.' },
        { code: 'MDE 704', name: 'Christian Curriculum Development', credits: 3, description: 'Introduction to church educational ministry, covering biblical/theological/philosophical foundations, neuroscience, diverse learner needs, teaching spirituality, and Christian education ministry design.' },
        { code: 'MDE 706', name: 'Advanced Teaching and Learning Styles', credits: 3, description: 'Concepts and practices for successful urban teaching; integrates urban strategies with content methods through seminars and practical hours.' },
      ],
    },
    {
      id: 'theology-ethics',
      name: 'III. Theology & Ethics',
      courses: [
        { code: 'MDT 420', name: 'Ecclesiology', credits: 3, description: 'Study of the nature, purpose, and function of the Church.' },
        { code: 'MDT 421', name: 'Soteriology', credits: 3, description: 'Study of God’s grace in salvation, covering election, Savior’s ministry, Atonement, efficacious grace, justification, regeneration, and Holy Spirit’s role.' },
        { code: 'MDT 422', name: 'Eschatology', credits: 3, description: 'Study of eschatology including systems, chiliasm history, major themes, event order, and the rapture question.' },
        { code: 'MDE 705', name: 'Hamartiology', credits: 3, description: 'Advanced discussions on Anthropology, Hamartiology, and Soteriology, defining scriptural views, refuting other views, and emphasizing theological relevance to Christian life.' },
        { code: 'MDT 419', name: 'Christian Thought History', credits: 3, description: 'Survey of early Christian thought, focusing on theological and doctrinal development prior to the Reformation.' },
        { code: 'MDE 708', name: 'Christian Ethics and Law', credits: 3, description: 'Introduction to Christian ethics and law, philosophical/theological foundations, biblical authority, church-culture relationship, moral decision-making, ministerial ethics, ethical issues, and applying the gospel.' },
      ],
    },
    {
      id: 'practical-ministry',
      name: 'IV. Practical Ministry',
      courses: [
        { code: 'MDE 707', name: 'Evangelism and Communication', credits: 3, description: 'Focus on biblical imperative of evangelism, witnessing in pluralistic cultures, follow-up, discipleship, and scripture memorization.' },
        { code: 'MDC 610', name: 'Mediation and Conflict Resolution', credits: 3, description: 'Study of conflict and its resolution through negotiation, focusing on concepts and skills for identifying and resolving conflicts.' },
      ],
    },
    {
      id: 'special-lectures',
      name: 'V. Special Lectures',
      courses: [
        { code: 'Special Lecture I', name: 'Special Lecture I', credits: 3, description: 'A special lecture course designed to supplement the curriculum and provide advanced insights in theology and ministry.' },
        { code: 'Special Lecture II', name: 'Special Lecture II', credits: 3, description: 'A special lecture course designed to supplement the curriculum and provide advanced insights in theology and ministry.' },
        { code: 'Special Lecture III', name: 'Special Lecture III', credits: 3, description: 'A special lecture course designed to supplement the curriculum and provide advanced insights in theology and ministry.' },
        { code: 'Special Lecture IV', name: 'Special Lecture IV', credits: 3, description: 'A special lecture course designed to supplement the curriculum and provide advanced insights in theology and ministry.' },
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
