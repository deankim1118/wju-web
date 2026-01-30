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
        { code: 'DOM701', name: 'Hermeneutics', credits: 4, description: 'An exploration of the development and current status of modern biblical theology, and the contemporary recovery of a theological hermeneutics in relation to the biblical theology movement.' },
        { code: 'DOM702', name: 'New Testament Backgrounds for Preachers', credits: 4, description: 'This is a course on historical, sociological, and cultural backgrounds of the New Testament with a focus on how to utilize them for sermon preparation. This course orients students to explore rich textures of a NT text and translate their significance to the contemporary audience.' },
        { code: 'DOM703', name: 'New Testament Ecclesiology for Ministers', credits: 4, description: 'This course is designed to critically examine the New Testament understanding of the Church and her missions. In the course, students will discuss the formation of Christian identities, communities, missions, and ministry practices in and through the Church. The course will also explore the New Testament principles of being and doing a church and their applications in the earliest Christian centuries and the last few centuries.' },
        { code: 'DOM704', name: 'Biblical Theology of the Old Testament for Pastors', credits: 4, description: 'This course will adopt a thematic approach, with an emphasis on Yahweh’s role relationships and expectations. The impact of the Old Testament on the New Testament will be considered throughout. The course will cover the major themes of creation and the Sinai covenant and associated subthemes, namely wisdom as a creation subtheme and Israel’s religion and the Davidic covenant as covenant subthemes, and internationalism as a subtheme of both creation and covenant.' },
        { code: 'DOM705', name: 'Pentecost Theology for Pastoral Ministry', credits: 4, description: 'This course offers a critical examination of Protestant Reformation theology for contemporary pastoral ministry. Based on the fact that many Protestant reformers, such as Martin Luther, Ulrich Zwingli, and John Calvin were indeed pastors/priest in the 16th century, this course will reevaluate the reformers\' thoughts from a pastoral perspective, rather than from a purely systematic point of view.' },
      ],
    },
    {
      id: 'ministry-leadership',
      name: 'II. Ministry Leadership & Formation',
      courses: [
        { code: 'DOM706', name: 'Personal Health of a Leader', credits: 4, description: 'This seminar will examine these hazards as they pertain to the holistic health (physical, mental, relational and spiritual) of the leader, attempt to assist the leader in identifying the areas of potential personal vulnerability with an emphasis on prevention, and provide research-based resources for fostering flourishing in ministry.' },
        { code: 'DOM707', name: 'Spiritual Formation and Discipleship', credits: 4, description: 'The focus of this course is on how to aid/encourage/guide the process of transformation in the lives of adults seeking to follow Jesus within the complexities of a postmodern world. The pattern for growth we will consider is based on classical descriptions of the spiritual journey.' },
        { code: 'DOM711', name: 'Spirituality and Ministry', credits: 4, description: 'This seminar is designed to give understanding and experience of the spiritual life and its disciplines, as defined by the New Testament and the history of the disciples of Jesus. To do so, it is offered in a retreat setting. The course will include a study of classics in the field of Christian spirituality, along with some historical and systematic treatments.' },
      ],
    },
    {
      id: 'contextual-ministry',
      name: 'III. Contextual Ministry',
      courses: [
        { code: 'DOM708', name: 'Ethics and Ministry in a Multicultural Context', credits: 4, description: 'This course studies the ethical and ministerial challenges and opportunities that face Korean/Korean American churches in a pluralistic cultural context. Experiencing a radical transition from a culturally homogeneous society to a postmodern global society, Korean churches in particular sometimes find it challenging to develop a capacious and competent theology and ethics. The goal is to help students to develop their own ministry model that is culturally relevant, as well as biblically and ethically faithful in their local contexts.' },
        { code: 'DOM709', name: 'Reinventing Evangelism', credits: 4, description: 'This course explores the theory, strategy, and methodology of evangelism. It argues that to do effective, wholistic, biblical evangelism that takes seriously the culture and needs of those one seeks to reach, it is necessary to build a proper theoretical foundation (that sees the Bible with fresh eyes), adopt an appropriate strategy (that makes sense to the given situation), and understand the wide range of methodologies that exist for doing evangelism.' },
        { code: 'DOM710', name: 'Theology of Urban Ministry', credits: 4, description: 'In this course, we will seek to gain experience in engaging in a social cultural analysis to understand the nature and context of urban ministry. We will study how the practice of an urban pastoral theology is a fulfillment of the pastoral office and the ongoing work of the urban church.' },
        { code: 'DOM712', name: 'Globalization, the Poor, and Christian Mission', credits: 4, description: 'In this course, students will be introduced to the theology of mission from an evangelical Protestant perspective. Through a survey of key contributors who left a lasting impact on 21st century missiology, students will explore Trinitarian perspectives on the mission Dei, the reign of God, and contextual theology.' },
      ],
    },
    {
      id: 'research-dissertation',
      name: 'IV. Research & Dissertation',
      courses: [
        { code: 'DOM713', name: 'Dissertation', credits: 8, description: 'A self-supervised research dissertation in which the student develops a research design to test a hypothesis related to a significant church ministry issue in the field of Christian Ministry. The student creates a research design, reviews significant literature, collects and analyzes data using appropriate statistical metrics, and draws a conclusion and makes recommendations for future study. This research dissertation reflects the student\'s professional competence in ministry and ability to integrate and utilize the counseling field of study.' },
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
