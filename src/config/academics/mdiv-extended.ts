/**
 * Master of Divinity (MDiv) Extended Data
 * Additional detailed information for the MDiv program page
 */

import type {
  CurriculumCategory,
  OutcomeItem,
  ProgramExtendedDataInput,
} from './program-extended-types';

export const MDIV_EXTENDED: ProgramExtendedDataInput = {
  keyInformation: {
    creditInfo: {
      creditHours: '99',
      costPerCredit: '$300.00 per credit hour',
      yearsOfStudy: '3',
    },
  },
  outcomes: [
    {
      id: 'biblical-interpretation',
      title: 'Biblical Interpretation',
      description:
        'Master the exegesis of Old and New Testaments using original Hebrew and Greek.',
    },
    {
      id: 'theological-foundation',
      title: 'Theological Foundation',
      description:
        'Construct a robust Christian theology integrating biblical truth with historical context.',
    },
    {
      id: 'ministry-leadership',
      title: 'Ministry Leadership',
      description:
        'Lead churches effectively with skills in administration, worship planning, and church planting.',
    },
    {
      id: 'preaching-teaching',
      title: 'Preaching & Teaching',
      description:
        'Deliver biblically faithful sermons and teachings with confidence and clarity.',
    },
    {
      id: 'global-mission',
      title: 'Global Mission',
      description:
        'Engage in cross-cultural evangelism and mission work for unreached people groups.',
    },
    {
      id: 'pastoral-care',
      title: 'Pastoral Care',
      description:
        'Provide biblical counseling and conflict resolution for individuals and families.',
    },
  ] as OutcomeItem[],
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
        { code: 'MDD 405', name: 'The Pentateuch', credits: 3, description: 'Study of compositional and structural anomalies in the Mosaic Pentateuch (Genesis through Deuteronomy) and critical approaches.' },
        { code: 'MDT 406', name: 'Prophets I', credits: 3, description: 'Surveys history, literature, and theology of the prophetic corpus, situating prophets in historical context via 1-2 Kings, Ezra, Nehemiah.' },
        { code: 'MDT 407', name: 'Prophets II', credits: 3, description: 'In-depth study of Obadiah, Joel, Jonah, Amos, and Hosea in historical context.' },
        { code: 'MDE 701', name: 'History of Israel', credits: 3, description: 'Study of Israel’s history in light of Joshua through Esther, emphasizing God’s interventions and faith heroes’ influence on culture.' },
        { code: 'MDE 702', name: 'Wisdom Literature', credits: 3, description: 'Detailed examination of Job, Proverbs, Ecclesiastes, and Song of Songs.' },
        { code: 'MDT 408', name: 'The Synoptic Gospel', credits: 3, description: 'Detailed examination of Matthew, Mark, and Luke with attention to the distinctive portrait of Jesus each presents.' },
        { code: 'MDT 409', name: 'The Gospel of John', credits: 3, description: 'Current research and interpretation of the Gospel of John, requiring approximately 10 hours of study per week.' },
        { code: 'MDT 410', name: 'The Letters of Paul', credits: 3, description: 'Introduction to Paul\'s letters, considering their historical context in the Roman Empire and diaspora Judaism and their ethical and philosophical impact.' },
        { code: 'MDT 411', name: 'The Epistles', credits: 3, description: 'Study of James, 1 & 2 Peter, and Jude, focusing on theology of God, Christology, hamartiology, pistology, and eschatology.' },
        { code: 'MDT 412', name: 'Revelation', credits: 3, description: 'Study of the Book of Revelation with focus on literary genre, theological themes, and interpretation schools.' },
      ],
    },
    {
      id: 'theology-history',
      name: 'III. Theology & History',
      courses: [
        { code: 'MDT 413', name: 'Systematic I', credits: 3, description: 'Advanced discussions on theological method, Scripture, God, creation, providence, angels, humanity, and sin, emphasizing scriptural arguments and relevance for Christian life.' },
        { code: 'MDT 414', name: 'Systematic II', credits: 3, description: 'Continuation of Systematic I, covering creation and evil, human nature, sin and grace, salvation, church, sacraments, eschatology, and world religions. Prerequisite: MDT413.' },
        { code: 'MDT 417', name: 'Contemporary Theology', credits: 3, description: 'Critical reflection on significant individuals, movements, events, and foundational tenets shaping contemporary theologies.' },
      ],
    },
    {
      id: 'practical-theology',
      name: 'IV. Practical Theology & Ministry',
      courses: [
        { code: 'MDD 506', name: 'Preaching Theory and Method', credits: 3, description: 'Exposure to various homiletical theories and methods through study of authors and listening to model sermons.' },
        { code: 'MDD 507', name: 'Preaching Practicum', credits: 3, description: 'Application of homiletical theories and principles learned in Principles of Preaching.' },
        { code: 'MDD 501', name: 'Pastoral Care', credits: 3, description: 'Builds skills for pastoral care across the lifespan of individuals and families. Considers care for culture and social institutions.' },
        { code: 'MDD 509', name: 'Leadership and Administration', credits: 3, description: 'Blends theoretical knowledge and practical skills to improve leadership and administration abilities.' },
        { code: 'MDD 510', name: 'Worship Planning and Operation', credits: 3, description: 'Comprehensive administration of Christian worship, including programs, music, budgeting, scheduling, multi-generational arts education, leader training, and staff relationship building.' },
        { code: 'MDD 513', name: 'Discipleship', credits: 3, description: 'Development of a philosophy of ministry focused on building followers of Christ, particularly among college students.' },
        { code: 'MDE 703', name: 'Teaching Method of Jesus', credits: 3, description: 'Examination of Jesus as a teacher, including authority, mission, content, discipline, methodology, and emphasis on the cross and Holy Spirit as teacher.' },
        { code: 'MDC 610', name: 'Mediation and Conflict Resolution', credits: 3, description: 'Study of conflict and its resolution through negotiation, focusing on concepts and skills for identifying and resolving conflicts.' },
      ],
    },
    {
      id: 'mission-evangelism',
      name: 'V. Mission & Evangelism',
      courses: [
        { code: 'MDD 508', name: 'Church Planting and Growth', credits: 3, description: 'Introduction and systematic overview of church planting and congregational development and nurture.' },
        { code: 'MDD 511', name: 'Unreached People Mission', credits: 3, description: 'Systematic and practical study of missionary work, emphasizing world evangelization for unreached groups.' },
        { code: 'MDD 512', name: 'Mission and Cross Cultural', credits: 3, description: 'Overview of cross-cultural considerations for mission work with individuals and churches from different cultural backgrounds.' },
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
  ] as CurriculumCategory[],
  graduation: {
    requirements: [],
  },
} as const satisfies ProgramExtendedDataInput;
