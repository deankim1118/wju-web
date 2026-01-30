/**
 * Bachelor of Theology (ThB) Extended Data
 */

import type { OutcomeItem, ProgramExtendedDataInput } from './program-extended-types';

export const THB_EXTENDED: ProgramExtendedDataInput = {
  keyInformation: {
    creditInfo: {
      creditHours: '123',
      costPerCredit: '$255.00 per credit hour',
      yearsOfStudy: '4',
    },
  },
  outcomes: [
    {
      id: 'biblical-fluency',
      title: 'Biblical Fluency',
      description:
        'Interpret Old and New Testament texts accurately using introductory Hebrew/Greek  and historical geography.',
    },
    {
      id: 'theological-defense',
      title: 'Theological Defense',
      description:
        'Construct a systematic theological framework to defend the Christian faith against modern cultural and philosophical challenges.',
    },
    {
      id: 'pastoral-ministry',
      title: 'Pastoral Ministry',
      description:
        'Deliver expository sermons and lead worship services while gaining practical experience through supervised internships.',
    },
    {
      id: 'christian-counseling',
      title: 'Christian Counseling',
      description:
        'Apply biblical principles and basic psychological theories to counsel individuals and resolve interpersonal conflicts.',
    },
    {
      id: 'global-engagement',
      title: 'Global Engagement',
      description:
        'Understand major world religions and implement multicultural mission strategies for effective evangelism.',
    },
    {
      id: 'christian-education',
      title: 'Christian Education',
      description:
        'Develop age-appropriate bible teaching methods and curriculums for children, youth, and home ministries.',
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
      id: 'biblical-studies',
      name: 'II. Biblical Studies',
      courses: [
        { code: 'BOT 101', name: 'Introduction to the Bible', credits: 3, description: 'This course lays a foundation for biblical studies as a discipline. It first provides an introduction to the Bible itself and then to hermeneutics; to the basic tools for biblical research, including Bible translations, commentaries, lexicons, Bible dictionaries, and Bible software.' },
        { code: 'BOT 102', name: 'Biblical archeology', credits: 3, description: 'This course is an introduction to the Archaeology of the Near East, especially ancient Mesopotamia, the Levant, and Egypt, with reference to Old Testament history.' },
        { code: 'BOT 110', name: 'Bible Hermeneutics', credits: 3, description: 'This course introduces the process of investigating the meaning and significance of biblical texts. The general, historical, literary, and contextual principles of interpreting texts will be investigated through readings, online lectures, online discussions, assignments, and research projects. A variety of special issues in hermeneutics will be considered.' },
        { code: 'BOT 111', name: 'Bible Geography', credits: 3, description: 'Christian theology supplies a biblical perspective on reality. Theological reflection is essential for the person who hopes to help others cope with reality; he or she must be able to provide biblically, reasoned, and sensitive responses to the hard questions of faith.' },
        { code: 'BOT 112', name: 'Introduction to the Old Testament', credits: 3, description: 'A course completing the study of systematic theology with special attention given to the doctrines of the person and work of Christ, the Holy Spirit, salvation, the church, and last things. Such issues as nature and extent of salvation, the origin, nature, and future of the church, and the eternal state are explored.' },
        { code: 'BOT 123', name: 'The Pentateuch', credits: 3, description: 'Modern biblical criticism derives in large part from early attempts to resolve the numerous compositional and structural anomalies and discrepancies found in the Mosaic Pentateuch or \'Five Books of Moses\'; i.e., Genesis, Exodus, Leviticus, Numbers, and Deuteronomy.' },
        { code: 'BOT 124', name: 'History of Israel', credits: 3, description: 'A study of the history of Israel in light of the Old Testament books of Joshua through Esther. Emphasis will be on God\'s activities and interventions into the affairs of mankind, as well as on how heroes of faith impacted their culture.' },
        { code: 'BOT 125', name: 'Poetry', credits: 3, description: 'A study of the nature and techniques of Old Testament poetry, including metrics, line and strophic structure, historical-grammatical exegesis and text criticism. Special introduction to the various poetical books of the OT and samples of exegesis, emphasizing the Psalms.' },
        { code: 'BOT 126', name: 'Prophet', credits: 3, description: 'An exposition of the pre-exilic, exilic, and postexilic writing prophets (Isaiah through Malachi), excluding Jonah, but including Lamentations with emphasis on the biblical theology of these books, their genre, and application.' },
        { code: 'BOT 128', name: 'Introduction to New Testament', credits: 3, description: 'In this course we will study the diverse writings of the NT as products of their original historical, social, and religious contexts. We will ask how these ancient writings served to interpret and respond to the life situations of the earliest Christians.' },
        { code: 'BOT 129', name: 'Four Gospels', credits: 3, description: 'This course provides an overview of the scope and content of the four Gospels found in the New Testament, each written for specific communities and purposes. Through close examination, we seek to discern their purposes, reconstruct their communities, and reflect on the meanings of their presentations of Jesus.' },
        { code: 'BOT 130', name: 'Acts', credits: 3, description: 'This course chronicles the characters and events in the book of Acts to study the early development of the Christian church from its Jewish base to the inclusion of all peoples.' },
        { code: 'BOT 131', name: `Paul's Epistle`, credits: 3, description: 'An exposition of Acts and 10 of the Pauline Epistles (all except Romans, Ephesians, and Philippians) with emphasis on the biblical theology of these books, their genre, and application.' },
        { code: 'BOT 132', name: 'Applying Scripture in the Contemporary World', credits: 3, description: 'This course addresses contemporary issues impacting the church through the analysis of biblical texts. Emphasis is placed on the development of action plans to address identified concerns.' },
      ],
    },
    {
      id: 'theology-history',
      name: 'III. Theology & History',
      courses: [
        { code: 'BOT 127', name: 'Advanced Study: Systematic Theology', credits: 3, description: 'A variety of topics offered including selected texts or topics from both testaments. Independent student research and writing in addition to a seminar style class.' },
        { code: 'BOT 133', name: 'Systematic theology I', credits: 3, description: 'Christian theology supplies a biblical perspective on reality. Theological reflection is essential for the person who hopes to help others cope with reality; he or she must provide biblical, reasoned, and sensitive responses to the hard questions of faith.' },
        { code: 'BOT 134', name: 'Systematic theology II', credits: 3, description: 'A course completing the study of systematic theology with special attention given to the doctrines of the person and work of Christ, the Holy Spirit, salvation, the church, and last things.' },
        { code: 'BOT 135', name: 'Christian Apologetics', credits: 3, description: 'A theological and philosophical defense of the Christian faith. Evaluates modern systems of thought and demonstrates the validity and defense of Christian doctrines as truth.' },
        { code: 'BOT 136', name: 'Modern theology', credits: 3, description: 'From the end of the Reformation period, representative figures and movements are studied in order to better understand current orientations to theology and to the theological task.' },
        { code: 'BOT 137', name: 'World Church History', credits: 3, description: 'Church History: From Christ to the Pre-Reformation offers a unique contextual view of how the Christian church spread and developed.' },
        { code: 'BOT 108', name: 'Introduction to Philosophy', credits: 3, description: 'This course will introduce you to some of the main areas of research in contemporary philosophy. Each module of a different philosopher will talk you through some of the most important questions and issues in their area of expertise.' },
        { code: 'BOT 109', name: 'Comparative Religious Studies', credits: 3, description: 'Comparative religion studies provide learners with knowledge of the world’s major religious faiths. As a major, comparative religion provides a framework for a liberal arts education, exploring subjects like science, psychology, literature, and culture in relation to various world religions.' },
      ],
    },
    {
      id: 'practical-ministry',
      name: 'IV. Practical Ministry',
      courses: [
        { code: 'BOR 135', name: 'Pastoral Practice I', credits: 3, description: 'Pastoral Practice course designed to create practical skills in ministry under professional supervision, including hospital visitation, a pastoral internship, and exposure to denominational agencies.' },
        { code: 'BOR 136', name: 'Pastoral Practice II', credits: 3, description: 'Pastoral Practice course designed to create practical skills in ministry under professional supervision, including hospital visitation, a pastoral internship, and exposure to denominational agencies.' },
        { code: 'BOR 138', name: 'Preaching', credits: 3, description: 'This course is designed to enable the student to construct an expository sermon based upon the skills of exegesis.' },
        { code: 'BOR 139', name: 'Worship', credits: 3, description: 'This course is designed to help students deepen their theological understanding of Christian worship and broaden their liturgical experience.' },
        { code: 'BOT 138', name: 'Introduction to Missiology', credits: 3, description: 'This course serves as a general introduction to Christian missions. It seeks to root missiology in biblical and systematic theology and to analyze missiology through biblical and theological lenses.' },
        { code: 'BOT 139', name: 'Multicultural Mission', credits: 3, description: 'The purpose of this course is to provide an overview of Multicultural mission considerations in the conduction of therapy with families and individuals of different cultural backgrounds.' },
      ],
    },
    {
      id: 'counseling-education',
      name: 'V. Counseling & Education',
      courses: [
        { code: 'BOC 304', name: 'Pastoral and Behavioral Psychology', credits: 3, description: 'A course designed to consider the special issues associated with the theory, practice, and administration of counseling in pastoral contexts. Students will receive training for certification in the PREPARE-ENRICH and MBTI assessments, as well as the Strategic Pastoral Counseling model.' },
        { code: 'BOC 137', name: 'Bible teaching method', credits: 3, description: 'This is a course on the basic principles of biblical teaching. It is designed to give a basic overview of methods and principles of teaching biblical truth. In doing this, the course will attempt to give the student helpful feedback so that he or she can assess with more confidence God\'s calling in his life.' },
        { code: 'BOC 309', name: 'Belief development by age', credits: 3, description: 'This course is the undergraduate introductory course in child development. The course covers the following subject areas: Major theories of child development, Research methods in the field of child development, Prenatal development and birth, Infancy and early childhood development, Physical growth, Cognitive development, Intelligence, Language development.' },
        { code: 'BOC 311', name: 'Introduction to Christian Counseling', credits: 3, description: 'This class is a general introduction to biblical pastoral counseling, including an overview of current trends in counseling theory and practice and the role of counseling in public, private and church settings.' },
        { code: 'BOC 323', name: 'Pastoral Counseling', credits: 3, description: 'This course provides a foundational orientation to pastoral counseling as a practice of ministry and as a theological bridge discipline connecting ministry and marriage and family therapy.' },
        { code: 'BOC 312', name: 'Home Ministry', credits: 3, description: 'The purpose of this course is to prepare home ministry majors and minors globally, biblically, theologically, and professionally to work with children in churches, parachurch organizations, and global ministry settings.' },
        { code: 'BOT 107', name: 'Introduction to Psychology', credits: 3, description: 'This course will introduce you to the fundamental principles of psychology and to the major subjects of psychological inquiry.' },
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
