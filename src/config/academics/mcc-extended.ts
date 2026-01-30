/**
 * Master of Christian Counseling (MCC) Extended Data
 */

import type { OutcomeItem, ProgramExtendedDataInput } from './program-extended-types';

export const MCC_EXTENDED: ProgramExtendedDataInput = {
  keyInformation: {
    creditInfo: {
      creditHours: '66',
      costPerCredit: '$300.00 per credit hour',
      yearsOfStudy: '2.5',
    },
  },
  outcomes: [
    {
      id: 'biblical-foundation',
      title: 'Biblical Foundation',
      description:
        'Apply accurate biblical interpretation and theological insights to the counseling process.',
    },
    {
      id: 'counseling-theory',
      title: 'Counseling Theory',
      description:
        'Master major psychotherapeutic theories and assessment techniques for diverse clinical scenarios.',
    },
    {
      id: 'faith-integration',
      title: 'Faith Integration',
      description:
        'Synthesize psychological principles with biblical truth to provide holistic Christian care.',
    },
    {
      id: 'marriage-family',
      title: 'Marriage & Family',
      description:
        'Implement systemic interventions to restore health in couples and family dynamics.',
    },
    {
      id: 'lifespan-group-care',
      title: 'Lifespan & Group Care',
      description:
        'Facilitate group therapy and provide age-appropriate counseling for children and adolescents.',
    },
    {
      id: 'conflict-resolution',
      title: 'Conflict Resolution',
      description:
        'Navigate interpersonal disputes effectively using negotiation strategies and mediation skills.',
    },
  ] as OutcomeItem[],
  curriculum: [
    {
      id: 'biblical-studies',
      name: 'I. Biblical Studies',
      courses: [
        { code: 'MDT 405', name: 'The Pentateuch', credits: 3, description: 'Study of the compositional and structural anomalies in the Mosaic Pentateuch (Genesis through Deuteronomy) and critical approaches to them.' },
        { code: 'MDT 406', name: 'Prophets I', credits: 3, description: 'Surveys history, literature, and theology of the prophetic corpus, situating prophets in historical context via 1-2 Kings, Ezra, Nehemiah.' },
        { code: 'MDT 407', name: 'Prophets II', credits: 3, description: 'In-depth study of Obadiah, Joel, Jonah, Amos, and Hosea in historical context.' },
        { code: 'MDT 408', name: 'The Synoptic Gospel', credits: 3, description: 'Detailed examination of Matthew, Mark, and Luke with attention to the distinctive portrait of Jesus each presents.' },
        { code: 'MDT 409', name: 'The Gospel of John', credits: 3, description: 'Current research and interpretation of the Gospel of John, requiring approximately 10 hours of study per week.' },
        { code: 'MDT 410', name: 'The Letters of Paul', credits: 3, description: 'Introduction to Paul\'s letters, considering their historical context in the Roman Empire and diaspora Judaism and their ethical and philosophical impact.' },
        { code: 'MDT 411', name: 'The Epistles', credits: 3, description: 'Study of James, 1 & 2 Peter, and Jude, focusing on theology of God, Christology, hamartiology, pistology, and eschatology.' },
        { code: 'MDE 701', name: 'History of Israel', credits: 3, description: 'Study of Israel’s history in light of Joshua through Esther, emphasizing God’s interventions and faith heroes’ influence on culture.' },
        { code: 'MDE 702', name: 'Wisdom Literature', credits: 3, description: 'Detailed examination of Job, Proverbs, Ecclesiastes, and Song of Songs.' },
      ],
    },
    {
      id: 'counseling-foundations',
      name: 'II. Counseling Foundations',
      courses: [
        { code: 'MDC 601', name: 'Counseling Terminologies and Methodologies', credits: 3, description: 'Covers individual and group assessment approaches in a multicultural society, including standardized/non-standardized testing, performance assessment, psychological testing, and behavioral observations.' },
        { code: 'MDC 602', name: 'Theoretical and Practical Application in Counseling', credits: 3, description: 'Introduces major theoretical systems of counseling and psychotherapy with practical application.' },
        { code: 'MDC 603', name: 'Biblical Counseling', credits: 3, description: 'Explores foundational statements of biblical counseling, forming methodology based on Scriptural understanding rather than worldly philosophies.' },
        { code: 'MDC 604', name: 'Pastoral and Behavioral Psychology', credits: 3, description: 'Considers issues in pastoral counseling theory, practice, and administration. Includes PREPARE-ENRICH and MBTI assessment training, and Strategic Pastoral Counseling model.' },
        { code: 'MDC 611', name: 'Innovative Approaches to Counseling', credits: 3, description: 'Orientation to counseling field: assumptions, theories, strategies, ethical/legal considerations, multicultural competencies, employment opportunities, and counselor roles.' },
      ],
    },
    {
      id: 'specialized-counseling',
      name: 'III. Specialized Counseling',
      courses: [
        { code: 'MDC 605', name: 'Age Group Counseling', credits: 3, description: 'Introduction to social/interpersonal influences, group dynamics, developmental stages, and theoretical approaches to group counseling.' },
        { code: 'MDC 606', name: 'Adolescent Counseling', credits: 3, description: 'Counseling theories and techniques for children and adolescents, including interventions for emotional and behavioral disorders.' },
        { code: 'MDC 607', name: 'Family Therapy', credits: 3, description: 'Examination of evaluation and intervention procedures of major family therapy models, emphasizing ethical considerations.' },
        { code: 'MDC 608', name: 'Marriage Counseling', credits: 3, description: 'Introduces therapy models for understanding functional and dysfunctional coupling patterns, and interventions for couples in crisis.' },
        { code: 'MDC 609', name: 'Group Counseling', credits: 3, description: 'Concepts and skills for understanding and leading counseling groups in schools and other settings.' },
        { code: 'MDC 610', name: 'Mediation and Conflict Resolution', credits: 3, description: 'Study of conflict and its resolution through negotiation, focusing on concepts and skills for identifying and resolving conflicts.' },
      ],
    },
    {
      id: 'theology-ethics',
      name: 'IV. Theology & Ethics',
      courses: [
        { code: 'MDT 415', name: 'Eschatology', credits: 3, description: 'Study of eschatology, including major themes and the order of predicted events in God’s plan of redemption.' },
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
