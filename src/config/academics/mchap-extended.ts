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
        { code: 'MDT 405', name: 'The Pentateuch', credits: 3, description: 'Study of the compositional and structural anomalies in the Mosaic Pentateuch (Genesis through Deuteronomy) and critical approaches to them.' },
        { code: 'MDT 408', name: 'The Synoptic Gospel', credits: 3, description: 'Detailed examination of Matthew, Mark, and Luke with attention to the distinctive portrait of Jesus each presents.' },
        { code: 'MDT 409', name: 'The Gospel of John', credits: 3, description: 'Current research and interpretation of the Gospel of John, requiring approximately 10 hours of study per week.' },
        { code: 'MDE 701', name: 'History of Israel', credits: 3, description: 'Study of Israel’s history in light of Joshua through Esther, emphasizing God’s interventions and faith heroes’ influence on culture.' },
        { code: 'MDE 702', name: 'Wisdom Literature', credits: 3, description: 'Detailed examination of Job, Proverbs, Ecclesiastes, and Song of Songs.' },
      ],
    },
    {
      id: 'chaplaincy-foundations',
      name: 'II. Chaplaincy Foundations',
      courses: [
        { code: 'MDCH 901', name: 'Introduction to Chaplaincy', credits: 3, description: 'Introduction to chaplain ministry contexts, tasks, and challenges in military, workplace, healthcare, correctional, and community settings.' },
        { code: 'MDCH 902', name: 'Chaplaincy: Healthcare', credits: 3, description: 'Biblical approach to theodicy, suffering, and redemption; Christocentric spiritual care in pluralistic healthcare settings.' },
        { code: 'MDCH 903', name: 'Foundations of Correctional Chaplaincy', credits: 3, description: 'Overview of correctional chaplaincy; skills, roles, constitutional mandates, ministry of presence, volunteer management, and individualized ministry plans.' },
        { code: 'MDCH 904', name: 'Death and Dying', credits: 3, description: 'Study of dying, bereavement, death, mourning, immortality from psychological, ethical, philosophical, and religious perspectives.' },
      ],
    },
    {
      id: 'counseling-care',
      name: 'III. Counseling & Care',
      courses: [
        { code: 'MDC 601', name: 'Counseling Terminologies and Methodologies', credits: 3, description: 'Covers individual and group assessment approaches in a multicultural society, including standardized/non-standardized testing, performance assessment, psychological testing, and behavioral observations.' },
        { code: 'MDC 602', name: 'Theoretical and Practical Application in Counseling', credits: 3, description: 'Introduces major theoretical systems of counseling and psychotherapy with practical application.' },
        { code: 'MDC 604', name: 'Pastoral and Behavioral Psychology', credits: 3, description: 'Considers issues in pastoral counseling theory, practice, and administration. Includes PREPARE-ENRICH and MBTI assessment training, and Strategic Pastoral Counseling model.' },
        { code: 'MDC 606', name: 'Adolescent Counseling', credits: 3, description: 'Counseling theories and techniques for children and adolescents, including interventions for emotional and behavioral disorders.' },
        { code: 'MDC 610', name: 'Mediation and Conflict Resolution', credits: 3, description: 'Study of conflict and its resolution through negotiation, focusing on concepts and skills for identifying and resolving conflicts.' },
        { code: 'MDC 611', name: 'Innovative Approaches to Counseling', credits: 3, description: 'Orientation to counseling field: assumptions, theories, strategies, ethical/legal considerations, multicultural competencies, employment opportunities, and counselor roles.' },
      ],
    },
    {
      id: 'theology-ethics',
      name: 'IV. Theology & Ethics',
      courses: [
        { code: 'MTD 421', name: 'Soteriology', credits: 3, description: 'Study of the grace of God in salvation, including election, atonement, justification, regeneration, and the ministry of the Holy Spirit.' },
        { code: 'MDT 422', name: 'Eschatology', credits: 3, description: 'Study of eschatology including systems, chiliasm history, major themes, event order, and the rapture question.' },
        { code: 'MDE 708', name: 'Christian Ethics and Law', credits: 3, description: 'Introduction to Christian ethics and law, philosophical/theological foundations, biblical authority, church-culture relationship, moral decision-making, ministerial ethics, ethical issues, and applying the gospel.' },
        { code: 'MDR 803', name: 'Philosophy of Religion', credits: 3, description: 'Introduces systematic and critical reflection on monotheistic belief; explores faith-reason relations, miracles, science, religion, evolution, and religious experience.' },
      ],
    },
    {
      id: 'practical-ministry',
      name: 'V. Practical Ministry',
      courses: [
        { code: 'MDE 703', name: 'Teaching Method of Jesus', credits: 3, description: 'Examination of Jesus as a teacher, including authority, mission, content, discipline, methodology, and emphasis on the cross and Holy Spirit as teacher.' },
        { code: 'MDE 707', name: 'Evangelism and Communication', credits: 3, description: 'Focus on biblical imperative of evangelism, witnessing in pluralistic cultures, follow-up, discipleship, and scripture memorization.' },
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
