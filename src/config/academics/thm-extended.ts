/**
 * Master of Theology (ThM) Extended Data
 */

import type { OutcomeItem, ProgramExtendedDataInput } from './program-extended-types';

export const THM_EXTENDED: ProgramExtendedDataInput = {
  keyInformation: {
    creditInfo: {
      creditHours: '96',
      costPerCredit: '$300.00 per credit hour',
      yearsOfStudy: '3',
    },
  },
  outcomes: [
    {
      id: 'biblical-exegesis',
      title: 'Biblical Exegesis',
      description:
        'Interpret Old and New Testament texts accurately using original languages and advanced critical methods.',
    },
    {
      id: 'systematic-theology',
      title: 'Systematic Theology',
      description:
        'Construct a comprehensive doctrinal framework covering God, Soteriology, and Ecclesiology.',
    },
    {
      id: 'historical-analysis',
      title: 'Historical Theology',
      description:
        'Evaluate the development of Christian thought from the early church to contemporary theological movements.',
    },
    {
      id: 'eschatological-studies',
      title: 'Eschatological Studies',
      description:
        'Analyze major eschatological themes, prophetic events, and diverse views on the consummation of God’s plan.',
    },
    {
      id: 'research-methodology',
      title: 'Research Methodology',
      description:
        'Employ rigorous qualitative and quantitative methods to investigate religious phenomena and theological controversies.',
    },
    {
      id: 'scholarly-ministry',
      title: 'Scholarly Ministry',
      description:
        'Apply deep theological insights to practical leadership, preaching, and teaching in the church context.',
    },
  ]  as OutcomeItem[],
  curriculum: [
    {
      id: 'biblical-languages',
      name: 'I. Biblical Languages',
      courses: [
        { code: 'MDT 401', name: 'Biblical Hebrew I', credits: 3, description: 'Introduces students to the basic lexicon and grammatical structures of biblical Hebrew, with an emphasis on the development of a set of useful translation strategies. Students apply skills to translating various biblical texts.' },
        { code: 'MDT 402', name: 'Biblical Hebrew II', credits: 3, description: 'Development of students’ familiarity with spoken and written Hebrew through grammar review, discussions, and vocabulary building. Includes readings on literary and cultural topics related to modern Israel. Prerequisite: MDT401.' },
        { code: 'MDT 403', name: 'Biblical Greek I', credits: 3, description: 'Study of grammar, vocabulary, and syntax of Biblical Greek. Prepares students to read the Greek New Testament.' },
        { code: 'MDT 404', name: 'Biblical Greek II', credits: 3, description: 'Continuation of Biblical Greek I. Further study of grammar, vocabulary, and syntax. Prerequisite: MDT403.' },
      ],
    },
    {
      id: 'biblical-studies',
      name: 'II. Biblical Studies',
      courses: [
        { code: 'MDT 405', name: 'The Pentateuch', credits: 3, description: 'Study of the compositional and structural anomalies in the Mosaic Pentateuch (Genesis through Deuteronomy) and critical approaches to them.' },
        { code: 'MDT 406', name: 'Prophets I', credits: 3, description: 'Surveys history, literature, and theology of the prophetic corpus, situating prophets in historical context via 1-2 Kings, Ezra, Nehemiah.' },
        { code: 'MDT 407', name: 'Prophets II', credits: 3, description: 'In-depth study of Obadiah, Joel, Jonah, Amos, and Hosea in historical context.' },
        { code: 'MDT 408', name: 'The Synoptic Gospel', credits: 3, description: 'Detailed examination of Matthew, Mark, and Luke with attention to the distinctive portrait of Jesus each presents.' },
        { code: 'MDT 409', name: 'The Gospel of John', credits: 3, description: 'Current research and interpretation of the Gospel of John, requiring approximately 10 hours of study per week.' },
        { code: 'MDT 410', name: 'The Letters of Paul', credits: 3, description: 'Introduction to Paul\'s letters, considering their historical context in the Roman Empire and diaspora Judaism and their ethical and philosophical impact.' },
        { code: 'MDT 411', name: 'The Epistles', credits: 3, description: 'Study of James, 1 & 2 Peter, and Jude, focusing on theology of God, Christology, hamartiology, pistology, and eschatology.' },
        { code: 'MDT 412', name: 'Revelation', credits: 3, description: 'Study of the Book of Revelation with focus on literary genre, theological themes, and interpretation schools.' },
        { code: 'MDE 701', name: 'History of Israel', credits: 3, description: 'Study of Israel’s history in light of Joshua through Esther, emphasizing God’s interventions and faith heroes’ influence on culture.' },
        { code: 'MDE 702', name: 'Wisdom Literature', credits: 3, description: 'Detailed examination of Job, Proverbs, Ecclesiastes, and Song of Songs.' },
        { code: 'MDE 808', name: 'Advanced Biblical Themes and Link Analysis', credits: 3, description: 'Survey and evaluation of various methods of interpreting the Scriptures. Required of all ministerial students.' },
      ],
    },
    {
      id: 'systematic-theology',
      name: 'III. Systematic Theology',
      courses: [
        { code: 'MDT 413', name: 'Systematic I', credits: 3, description: 'Advanced discussions on theological method, Scripture, God, creation, providence, angels, humanity, and sin, emphasizing scriptural arguments and relevance for Christian life.' },
        { code: 'MDT 414', name: 'Systematic II', credits: 3, description: 'Continuation of Systematic I, covering creation and evil, human nature, sin and grace, salvation, church, sacraments, eschatology, and world religions. Prerequisite: MDT413.' },
        { code: 'MDT 415', name: 'Eschatology I', credits: 3, description: 'Study of eschatology, including major themes and the order of predicted events in God’s plan of redemption.' },
        { code: 'MDT 416', name: 'Eschatology II', credits: 3, description: 'Continuation of Eschatology I, examining systems, chiliasm history, themes, problems, and the rapture question. Prerequisite: MDT415.' },
        { code: 'MDT 420', name: 'Ecclesiology', credits: 3, description: 'Study of the nature, purpose, and function of the Church.' },
        { code: 'MTD 421', name: 'Soteriology', credits: 3, description: 'Study of the grace of God in salvation, including election, atonement, justification, regeneration, and the ministry of the Holy Spirit.' },
      ],
    },
    {
      id: 'theological-history',
      name: 'IV. Theological History & Thought',
      courses: [
        { code: 'MDT 417', name: 'Contemporary Theology', credits: 3, description: 'Critical reflection on significant individuals, movements, events, and foundational tenets shaping contemporary theologies.' },
        { code: 'MDT 418', name: 'Contemporary Theological Thought', credits: 3, description: 'Examines major trends in contemporary theological thought in light of their philosophical contexts.' },
        { code: 'MDT 419', name: 'Christian Thought History', credits: 3, description: 'Survey of early Christian thought, focusing on theological and doctrinal development prior to the Reformation.' },
        { code: 'MDR 809', name: 'Approaches to the Study of Religion', credits: 3, description: 'Thematic and comparative study of religion as human experience, covering ritual, sacred language, ethics, salvation, and problem of evil from various perspectives.' },
      ],
    },
    {
      id: 'practical-ministry',
      name: 'V. Practical Ministry',
      courses: [
        { code: 'MDD 501', name: 'Pastoral Care', credits: 3, description: 'Builds skills for pastoral care across the lifespan of individuals and families. Considers care for culture and social institutions.' },
        { code: 'MDD 509', name: 'Leadership and Administration', credits: 3, description: 'Blends theoretical knowledge and practical skills to improve leadership and administration abilities.' },
        { code: 'MDE 703', name: 'Teaching Method of Jesus', credits: 3, description: 'Examination of Jesus as a teacher, including authority, mission, content, discipline, methodology, and emphasis on the cross and Holy Spirit as teacher.' },
        { code: 'MDE 707', name: 'Evangelism and Communication', credits: 3, description: 'Focus on biblical imperative of evangelism, witnessing in pluralistic cultures, follow-up, discipleship, and scripture memorization.' },
      ],
    },
    {
      id: 'field-education',
      name: 'VI. Field Education',
      courses: [
        { code: 'MDD 502', name: 'Church Internship I', credits: 3, description: 'Supervised ministry in a local church to develop understanding of personal ministry gifts with appropriate support and evaluation.' },
        { code: 'MDD 503', name: 'Church Internship II', credits: 3, description: 'Continuation of Church Internship I with further development and evaluation of personal ministry gifts.' },
        { code: 'Special Lecture I', name: 'Special Lecture I', credits: 3, description: 'A special lecture course designed to supplement the curriculum and provide advanced insights in theology and ministry.' },
        { code: 'Special Lecture II', name: 'Special Lecture II', credits: 3, description: 'A special lecture course designed to supplement the curriculum and provide advanced insights in theology and ministry.' },
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
