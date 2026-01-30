/**
 * Bachelor of Christian Counseling (BCC) Extended Data
 */

import type { OutcomeItem, ProgramExtendedDataInput } from './program-extended-types';

export const BCC_EXTENDED: ProgramExtendedDataInput = {
  keyInformation: {
    creditInfo: {
      creditHours: '123',
      costPerCredit: '$255.00 per credit hour',
      yearsOfStudy: '4',
    },
  },
  outcomes: [
    {
      id: 'biblical-counseling',
      title: 'Biblical Counseling',
      description:
        'Integrate psychological principles with biblical truth to provide holistic care for individuals and families.',
    },
    {
      id: 'theological-foundation',
      title: 'Theological Foundation',
      description:
        'Construct a solid scriptural framework using Old and New Testament survey, hermeneutics, and systematic theology.',
    },
    {
      id: 'clinical-competency',
      title: 'Clinical Competency',
      description:
        'Apply professional counseling theories and assessment tools  to diverse mental health scenarios.',
    },
    {
      id: 'marriage-family',
      title: 'Marriage & Family',
      description:
        'Implement therapeutic interventions for couples in crisis and guide proper child development and home ministry.',
    },
    {
      id: 'conflict-resolution',
      title: 'Conflict Resolution',
      description:
        'Navigate interpersonal disputes and multicultural challenges using negotiation strategies and mediation skills.',
    },
    {
      id: 'practical-ministry',
      title: 'Practical Ministry',
      description:
        'Demonstrate pastoral care skills through supervised internships in hospitals, churches, and denominational agencies.',
    },
  ] as OutcomeItem[],
  curriculum: [
    {
      id: 'biblical-languages',
      name: 'I. Biblical Languages',
      courses: [
        { code: 'BOT 103', name: 'Hebrew I', credits: 3, description: 'The first part of a two-course series designed to introduce you to the Hebrew language of the Old Testament.' },
        { code: 'BOT 104', name: 'Hebrew II', credits: 3, description: 'Fundamentals of grammar, pronunciation, culture and conversation. Reading, writing, listening comprehension, and simple conversational patterns.' },
        { code: 'BOT 105', name: 'Greek I', credits: 3, description: 'This course is to provide a thorough foundation in the Greek language with emphasis on communication. Small class size provides intensive practice in speaking, writing and listening comprehension.' },
        { code: 'BOT 106', name: 'Greek II', credits: 3, description: 'A continuation of Greek Grammar I, this course marks the completion of Greek Grammar and forms the basis for developing proficiency in translation.' },
      ],
    },
    {
      id: 'old-testament-studies',
      name: 'II. Old Testament Studies',
      courses: [
        { code: 'BOT 101', name: 'Introduction to the Bible', credits: 3, description: 'This course lays a foundation for biblical studies as a discipline. It first provides an introduction to the Bible itself and then to hermeneutics; to the basic tools for biblical research, including Bible translations, commentaries, lexicons, Bible dictionaries, and Bible software.' },
        { code: 'BOT 102', name: 'Biblical archeology', credits: 3, description: 'This course is an introduction to the Archaeology of the Near East, especially ancient Mesopotamia, the Levant, and Egypt, with reference to Old Testament history.' },
        { code: 'BOT 111', name: 'Bible Geography', credits: 3, description: 'Christian theology supplies a biblical perspective on reality. Theological reflection is essential for the person who hopes to help others cope with reality; he or she must be able to provide biblically, reasoned, and sensitive responses to the hard questions of faith.' },
        { code: 'BOT 112', name: 'Introduction to the Old Testament', credits: 3, description: 'A course completing the study of systematic theology with special attention given to the doctrines of the person and work of Christ, the Holy Spirit, salvation, the church, and last things. Such issues as nature and extent of salvation, the origin, nature, and future of the church, and the eternal state are explored.' },
        { code: 'BOT 123', name: 'The Pentateuch', credits: 3, description: 'Modern biblical criticism derives in large part from early attempts to resolve the numerous compositional and structural anomalies and discrepancies found in the Mosaic Pentateuch or \'Five Books of Moses\'; i.e., Genesis, Exodus, Leviticus, Numbers, and Deuteronomy.' },
        { code: 'BOT 124', name: 'History of Israel', credits: 3, description: 'A study of the history of Israel in light of the Old Testament books of Joshua through Esther. Emphasis will be on God\'s activities and interventions into the affairs of mankind, as well as on how heroes of faith impacted their culture.' },
        { code: 'BOT 125', name: 'Poetry', credits: 3, description: 'A study of the nature and techniques of Old Testament poetry, including metrics, line and strophic structure, historical-grammatical exegesis and text criticism. Special introduction to the various poetical books of the OT and samples of exegesis, emphasizing the Psalms.' },
        { code: 'BOT 126', name: 'Prophet', credits: 3, description: 'An exposition of the pre-exilic, exilic, and postexilic writing prophets (Isaiah through Malachi), excluding Jonah, but including Lamentations with emphasis on the biblical theology of these books, their genre, and application.' },
      ],
    },
    {
      id: 'new-testament-studies',
      name: 'III. New Testament Studies',
      courses: [
        { code: 'BOT 128', name: 'Introduction to the New Testament', credits: 3, description: 'In this course we will study the diverse writings of the NT as products of their original historical, social, and religious contexts. We will ask how these ancient writings served to interpret and respond to the life situations of the earliest Christians.' },
        { code: 'BOT 129', name: 'Four Gospels', credits: 3, description: 'This course provides an overview of the scope and content of the four Gospels found in the New Testament, each written for specific communities and purposes. Through close examination, we seek to discern their purposes, reconstruct their communities, and reflect on the meanings of their presentations of Jesus.' },
        { code: 'BOT 130', name: 'Acts', credits: 3, description: 'This course chronicles the characters and events in the book of Acts to study the early development of the Christian church from its Jewish base to the inclusion of all peoples.' },
        { code: 'BOT 131', name: `Paul's Epistle`, credits: 3, description: 'An exposition of Acts and 10 of the Pauline Epistles (all except Romans, Ephesians, and Philippians) with emphasis on the biblical theology of these books, their genre, and application.' },
        { code: 'BOT 132', name: 'Applying Scripture in the Contemporary World', credits: 3, description: 'This course addresses contemporary issues impacting the church through the analysis of biblical texts. Emphasis is placed on the development of action plans to address identified concerns.' },
      ],
    },
    {
      id: 'biblical-interpretation',
      name: 'IV. Biblical Interpretation',
      courses: [
        { code: 'BOT 110', name: 'Bible Hermeneutics', credits: 3, description: 'This course introduces the process of investigating the meaning and significance of biblical texts. The general, historical, literary, and contextual principles of interpreting texts will be investigated through readings, online lectures, online discussions, assignments, and research projects. A variety of special issues in hermeneutics will be considered.' },
      ],
    },
    {
      id: 'counseling-foundations',
      name: 'V. Counseling Foundations',
      courses: [
        { code: 'BOT 107', name: 'Introduction to Psychology', credits: 3, description: 'This course will introduce you to the fundamental principles of psychology and to the major subjects of psychological inquiry.' },
        { code: 'BOC 311', name: 'Introduction to Christian Counseling', credits: 3, description: 'This class is a general introduction to biblical pastoral counseling, including an overview of current trends in counseling theory and practice and the role of counseling in public, private and church settings.' },
        { code: 'BOC 104', name: 'Pastoral and Behavioral Psychology', credits: 3, description: 'A course designed to consider the special issues associated with the theory, practice, and administration of counseling in pastoral contexts. Students will receive training for certification in the PREPARE-ENRICH and MBTI assessments, as well as the Strategic Pastoral Counseling model.' },
        { code: 'BOC 323', name: 'Pastoral Counseling', credits: 3, description: 'This course provides a foundational orientation to pastoral counseling as a practice of ministry and as a theological bridge discipline connecting ministry and marriage and family therapy.' },
      ],
    },
    {
      id: 'specialized-counseling',
      name: 'VI. Specialized Counseling',
      courses: [
        { code: 'BOC 101', name: 'Multicultural Counseling', credits: 3, description: 'This course is to provide students an opportunity to gain multicultural competency as professional counselors.' },
        { code: 'BOC 102', name: 'Group Counseling', credits: 3, description: 'This course is designed to explore the group process by examining theories and research related to group counseling. This course is designed to acquaint students with the implementation of group counseling in the school settings. The courses will also explore group dynamics and group procedures.' },
        { code: 'BOC 103', name: 'Negotiation, Mediation, and Conflict Resolution', credits: 3, description: 'Conflict is a part of our lives. The study of conflict and its resolution through negotiation is the goal of this course. This course will focus on the concepts and skills necessary to help you identify and resolve conflicts through negotiation.' },
        { code: 'BOC 105', name: 'Marriage Counseling', credits: 3, description: 'This course will introduce participants to selected therapy models which seek to reveal both “normal” (functional) and “abnormal” (dysfunctional) coupling patterns and generate a variety of intervention options useful in the assessment and treatment of couples-in-crisis who are experiencing various degrees of danger and opportunity.' },
        { code: 'BOC 106', name: 'Discipline and Mentoring Women', credits: 3, description: 'In this course the student will study the practice of discipleship and mentoring as it relates to women. Biblical patterns of discipleship and mentoring will be explored with special emphasis on the task of mentoring women.' },
      ],
    },
    {
      id: 'christian-education',
      name: 'VII. Christian Education',
      courses: [
        { code: 'BOC 110', name: 'Introduction to Christian Education', credits: 3, description: 'The purpose of this course is to provide an overview of the Christian education function in the local church. The emphasis of this course is to give pastors, ministers of education and other Christian educators a general background of the history, philosophy, scope, and need for quality Christian education in the local churches of today.' },
        { code: 'BOC 137', name: 'Bible teaching method', credits: 3, description: 'This is a course on the basic principles of biblical teaching. It is designed to give a basic overview of methods and principles of teaching biblical truth. In doing this, the course will attempt to give the student helpful feedback so that he or she can assess with more confidence God\'s calling in his life.' },
        { code: 'BOC 309', name: 'Belief development by age', credits: 3, description: 'This course is the undergraduate introductory course in child development. The course covers the following subject areas: Major theories of child development, Research methods in the field of child development, Prenatal development and birth, Infancy and early childhood development, Physical growth, Cognitive development, Intelligence, Language development.' },
      ],
    },
    {
      id: 'pastoral-practice',
      name: 'VIII. Pastoral Practice',
      courses: [
        { code: 'BOR 135', name: 'Pastoral Practice I', credits: 3, description: 'Pastoral Practice course designed to create practical skills in ministry under professional supervision, including hospital visitation, a pastoral internship, and exposure to denominational agencies.' },
        { code: 'BOR 136', name: 'Pastoral Practice II', credits: 3, description: 'Pastoral Practice course designed to create practical skills in ministry under professional supervision, including hospital visitation, a pastoral internship, and exposure to denominational agencies.' },
        { code: 'BOC 312', name: 'Home Ministry', credits: 3, description: 'The purpose of this course is to prepare home ministry majors and minors globally, biblically, theologically, and professionally to work with children in churches, parachurch organizations, and global ministry settings.' },
      ],
    },
    {
      id: 'systematic-theology',
      name: 'IX. Systematic Theology',
      courses: [
        { code: 'BOT 127', name: 'Advanced Study: Systematic Theology', credits: 3, description: 'A variety of topics offered including selected texts or topics from both testaments. Independent student research and writing in addition to a seminar style class.' },
        { code: 'BOT 133', name: 'Systematic theology', credits: 3, description: 'Christian theology supplies a biblical perspective on reality. Theological reflection is essential for the person who hopes to help others cope with reality; he or she must provide biblical, reasoned, and sensitive responses to the hard questions of faith.' },
        { code: 'BOT 134', name: 'Systematic theology II', credits: 3, description: 'A course completing the study of systematic theology with special attention given to the doctrines of the person and work of Christ, the Holy Spirit, salvation, the church, and last things.' },
        { code: 'BOT 136', name: 'Modern theology', credits: 3, description: 'From the end of the Reformation period, representative figures and movements are studied in order to better understand current orientations to theology and to the theological task.' },
      ],
    },
    {
      id: 'church-history-philosophy',
      name: 'X. Church History & Philosophy',
      courses: [
        { code: 'BOT 137', name: 'World Church History', credits: 3, description: 'Church History: From Christ to the Pre-Reformation offers a unique contextual view of how the Christian church spread and developed.' },
        { code: 'BOT 108', name: 'Introduction to Philosophy', credits: 3, description: 'This course will introduce you to some of the main areas of research in contemporary philosophy. Each module of a different philosopher will talk you through some of the most important questions and issues in their area of expertise.' },
      ],
    },
    {
      id: 'apologetics-comparative',
      name: 'XI. Apologetics & Comparative Religion',
      courses: [
        { code: 'BOT 135', name: 'Christian apologetics', credits: 3, description: 'A theological and philosophical defense of the Christian faith. Evaluates modern systems of thought and demonstrates the validity and defense of Christian doctrines as truth.' },
        { code: 'BOT 109', name: 'Comparative Religious Studies', credits: 3, description: 'Comparative religion studies provide learners with knowledge of the world’s major religious faiths. As a major, comparative religion provides a framework for a liberal arts education, exploring subjects like science, psychology, literature, and culture in relation to various world religions.' },
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
