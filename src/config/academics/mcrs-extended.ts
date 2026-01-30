/**
 * Master of Comparative Religious Studies (MCRS) Extended Data
 */

import type { OutcomeItem, ProgramExtendedDataInput } from './program-extended-types';

export const MCRS_EXTENDED: ProgramExtendedDataInput = {
  keyInformation: {
    creditInfo: {
      creditHours: '66',
      costPerCredit: '$300.00 per credit hour',
      yearsOfStudy: '2.5',
    },
  },
  outcomes: [
    {
      id: 'comparative-analysis',
      title: 'Comparative Analysis',
      description:
        'Analyze structural similarities and theological differences between Christianity, Islam, and other major world religions.',
    },
    {
      id: 'eastern-religions',
      title: 'Eastern Religions',
      description:
        'Master the core beliefs, historical developments, and cultural impacts of Hinduism, Buddhism, and South Asian traditions.',
    },
    {
      id: 'philosophy-of-religion',
      title: 'Philosophy of Religion',
      description:
        'Apply philosophical methods to critique religious experience, faith-reason dynamics, and the nature of belief.',
    },
    {
      id: 'cultural-anthropology',
      title: 'Cultural Anthropology',
      description:
        'Examine the intersection of religion, gender, and culture within Middle Eastern, American, and global contexts.',
    },
    {
      id: 'indigenous-movements',
      title: 'Indigenous & New Movements',
      description:
        'Explore the spiritual heritage of indigenous peoples, shamanistic traditions, and contemporary religious cults.',
    },
    {
      id: 'biblical-linguistics',
      title: 'Biblical Linguistics',
      description:
        'Utilize Biblical Hebrew and Greek  to interpret sacred texts and foundational Christian narratives.',
    },
  ] as OutcomeItem[],
  curriculum: [
    {
      id: 'biblical-language-studies',
      name: 'I. Biblical & Language Studies',
      courses: [
        { code: 'MDT 402', name: 'Biblical Hebrew', credits: 3, description: 'Development of students’ familiarity with spoken and written Hebrew through grammar review, discussions, and vocabulary building. Includes readings on literary and cultural topics related to modern Israel. Prerequisite: MDT401.' },
        { code: 'MTD 403', name: 'Biblical Greek I', credits: 3, description: 'Study of grammar, vocabulary, and syntax of Biblical Greek; preparation to read the Greek New Testament.' },
        { code: 'MDT 412', name: 'Revelation', credits: 3, description: 'Study of the Book of Revelation with focus on literary genre, theological themes, and interpretation schools.' },
        { code: 'MDE 701', name: 'History of Israel', credits: 3, description: 'Study of Israel’s history in light of Joshua through Esther, emphasizing God’s interventions and faith heroes’ influence on culture.' },
        { code: 'MDR 808', name: 'Advanced Biblical Themes and Link Analysis', credits: 3, description: 'Survey and evaluation of various methods of interpreting Scriptures; required for all ministerial students.' },
      ],
    },
    {
      id: 'world-religions',
      name: 'II. World Religions',
      courses: [
        { code: 'MDR 804', name: 'Intro to Islam', credits: 3, description: 'Overview of Islamic beliefs, practices, history, law, and theological orientations; critical analysis of Islam’s impact on society and culture.' },
        { code: 'MDR 805', name: 'Intro to Hinduism', credits: 3, description: 'Focus on main developments and expressions of Hinduism, from pre-Aryan context to Vedas and early Hindu tradition.' },
        { code: 'MDR 806', name: 'Intro to Buddhism', credits: 3, description: 'Historical study of Buddha’s life and teachings, Four Noble Truths, Eightfold Path, Five Precepts, Karma, and concepts of rebirth vs reincarnation.' },
        { code: 'MDR 806', name: 'Intro to South Asia', credits: 3, description: 'Historical study of Buddha’s life and teachings, Four Noble Truths, Eightfold Path, Five Precepts, Karma, and concepts of rebirth vs reincarnation.' },
        { code: 'MDR 807', name: 'Intro to the Middle East', credits: 3, description: 'Anthropological study of Middle Eastern peoples and cultures, societal differences, history, and the impact of colonialism and imperialism.' },
        { code: 'MDR 812', name: 'Religions of Indigenous Peoples', credits: 3, description: 'Study of Native American, African, Australian Aboriginal, and other indigenous religious heritage and worldview.' },
        { code: 'MDR 813', name: 'The Way of the Shaman', credits: 3, description: 'Explores shamanism as a healing and spiritual practice across cultures, analyzed through psychology and anthropology.' },
      ],
    },
    {
      id: 'comparative-religion',
      name: 'III. Comparative Religion & Analysis',
      courses: [
        { code: 'MDR 809', name: 'Approaches to the Study of Religion', credits: 3, description: 'Thematic and comparative study of religion as human experience, covering ritual, sacred language, ethics, salvation, and problem of evil from various perspectives.' },
        { code: 'MDR 810', name: 'Advanced Analysis: Christianity and Islam', credits: 3, description: 'Examination of foundational Islamic texts and narratives, their interpretation, historical Muslim-Christian relations, gender issues, and contemporary Muslim movements.' },
        { code: 'MDR 811', name: 'Comparative Study of New Religious Movements', credits: 3, description: 'Origin, development, and contemporary state of Christianity, including early Judaism, Roman Empire context, and global practice today.' },
        { code: 'MDR 814', name: 'Religious Cults II', credits: 3, description: 'Examination of religious cults and new religious movements; causes, leadership, purpose, interactions with society, historical and contemporary examples.' },
        { code: 'COMP535', name: 'Advanced Study of Gender and Religion American Culture', credits: 3, description: 'Explores religion and gender in American culture, their mutual influence, religion-sexuality dynamics, and the construction of gender norms.' },
      ],
    },
    {
      id: 'philosophy-theology',
      name: 'IV. Philosophy & Theology',
      courses: [
        { code: 'MDCR 801', name: 'Philosophy for Theology', credits: 3, description: 'Introduces philosophy for various learners; foundational for employment or higher-level theological study.' },
        { code: 'MDR 803', name: 'Philosophy of Religion', credits: 3, description: 'Introduces systematic and critical reflection on monotheistic belief; explores faith-reason relations, miracles, science, religion, evolution, and religious experience.' },
        { code: 'MDR 802', name: 'American Culture and Religion', credits: 3, description: 'Survey of the diverse manifestations of religion in American culture.' },
        { code: 'MDT 422', name: 'Eschatology I', credits: 3, description: 'Study of eschatology including systems, chiliasm history, major themes, event order, and the rapture question.' },
        { code: 'Special Lecture', name: 'Special Lecture', credits: 3, description: 'A special lecture course designed to supplement the curriculum and provide advanced insights in theology and ministry.' },
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
