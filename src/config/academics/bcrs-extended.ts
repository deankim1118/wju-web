/**
 * Bachelor of Comparative Religious Studies (BCRS) Extended Data
 */

import type { OutcomeItem, ProgramExtendedDataInput } from './program-extended-types';

export const BCRS_EXTENDED: ProgramExtendedDataInput = {
  keyInformation: {
    creditInfo: {
      creditHours: '123',
      costPerCredit: '$255.00 per credit hour',
      yearsOfStudy: '4',
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
        { code: 'BOT101', name: 'Introduction to the Bible', credits: 3, description: 'This course lays a foundation for biblical studies as a discipline. It first provides an introduction to the Bible itself and then to hermeneutics; to the basic tools for biblical research, including Bible translations, commentaries, lexicons, Bible dictionaries, and Bible software.' },
        { code: 'BOT102', name: 'Biblical Archeology', credits: 3, description: 'This course is an introduction to the Archaeology of the Near East, especially ancient Mesopotamia, the Levant, and Egypt, with reference to Old Testament history.' },
        { code: 'BOT103', name: 'Hebrew I', credits: 3, description: 'The first part of a two-course series designed to introduce you to the Hebrew language of the Old Testament.' },
        { code: 'BOT105', name: 'Greek I', credits: 3, description: 'This course is to provide a thorough foundation in the Greek language with emphasis on communication. Small class size provides intensive practice in speaking, writing and listening comprehension.' },
        { code: 'BOT110', name: 'Bible Hermeneutics', credits: 3, description: 'This course introduces the process of investigating the meaning and significance of biblical texts. The general, historical, literary, and contextual principles of interpreting texts will be investigated through readings, online lectures, online discussions, assignments, and research projects. A variety of special issues in hermeneutics will be considered.' },
        { code: 'BOT114', name: 'History of Israel', credits: 3, description: 'This course will study the history of Israel from the pre-state origins of Zionism in the late nineteenth century to the present. It will explore political, military, social and cultural history. We will seek a better historical understanding of many of Israel’s ongoing challenges, such as the place of religion in civil life, the state’s relation to world Jewry, and the Arab-Israeli conflict.' },
        { code: 'BOT115', name: 'Gospel of John', credits: 3, description: 'This course’s main purpose is to enable each student to comprehend and apply the message of the Gospel of John for both personal discipleship and Christian ministry as it relates to the person of Jesus of Nazareth. We will seek to explore the multi-faceted vision of Jesus as Messiah offered in the images, motifs, and narratives of John, both in the biblical text as well as through the film The Gospel of John by Visual Bible International.' },
        { code: 'BOT119', name: 'Biblical Prophecies', credits: 3, description: 'This course explores the phenomenon of prophecy in the ancient world, with special attention to the literature by and about prophets in the Old Testament.' },
        { code: 'BOT120', name: 'Biblical Interpretation', credits: 3, description: 'This course is a study of the pivotal methods and interpretive principles involved in discerning the meaning of the biblical text.' },
        { code: 'BOR212', name: 'Biblical Overview', credits: 3, description: 'An overview course of the entire Bible, this course is designed to acquaint the student with a basic understanding of all 66 books. Specific topics will include authorship, date of writing, major themes and applications.' },
      ],
    },
    {
      id: 'world-religions',
      name: 'II. World Religions',
      courses: [
        { code: 'BOR213', name: 'Intro to Islam', credits: 3, description: 'At a time when Islam has a bad press among outsiders and is the subject of considerable contention among its adherents, this course seeks to provide an “empathetic” introduction to the tradition as a whole, balancing the insiders’ and outsiders’ views, the diversity and the unity of the tradition, the historical and the contemporary, and the political/social and the more strictly religious. At all points, though, an effort is made to indicate the current relevance of the material.' },
        { code: 'BOR214', name: 'Islam in World Politics', credits: 3, description: 'Explores the interrelationship of Islam and politics in the contemporary world. Deals with Islam as a political ideology which shapes the structure of political institutions and behavior. Looks at Islam in practice by examining the interaction between Islam and the political systems of Iran, Pakistan, Saudi Arabia, and others.' },
        { code: 'BOR215', name: 'Islamic Law in Societies', credits: 3, description: 'Examination of the relationship between Islamic law and society; the concept of justice in Islam.' },
        { code: 'BOR216', name: 'Biblical Characters in the Quran', credits: 3, description: 'This course focuses on narratives shared between the Bible and the Quran and how major Muslim, Christian, and Jewish scholars have approached the relationship between the texts across the ages.' },
        { code: 'BOR217', name: 'Intro to Hinduism', credits: 3, description: 'This course, the student will learn just some of the foundations of one of the oldest religions in the world. From the origins of Hinduism to the writings that shaped its historical development over centuries, non-Hindu students are introduced to a number of rather ‘foreign’ concepts.' },
        { code: 'BOR218', name: 'Intro to Buddhism', credits: 3, description: 'This course examines the known historical facts of the Buddha’s life. His teachings are introduced, including the Four Noble Truths, the Eightfold Path to Enlightenment, and the Five Noble Precepts.' },
        { code: 'BOR219', name: 'Intro to South Asia', credits: 3, description: 'South Asia has been one of the world’s most dynamic crossroads, a place where cultures met and exchanged ideas, goods, and populations. The region was the site of the most prolonged and intensive colonial encounter in the form of Britain’s Indian empire, and Indian individuals and ideas entered into long conversations with counterparts in Europe, the Middle East, and Southeast Asia, and elsewhere.' },
        { code: 'BOR220', name: 'Intro to the Middle East', credits: 3, description: 'The Middle East is built on a magnificent legacy of civilizations dating back to ancient times. Today, the Middle East continues to offer the world a rich cultural contribution. This course explores the peoples’ and cultures of the Middle East, covering a region stretching from the North African shores of the Atlantic to the Anatolian shores of the Mediterranean.' },
        { code: 'BOR207', name: 'Cults and World Religions', credits: 3, description: 'Cults and World Religions is an apologetics class to help acquaint Christians with several of the major religious groups that one will likely encounter from time to time. This course will embrace two major kinds of topics: (1) cults, and (2) major world religions.' },
      ],
    },
    {
      id: 'comparative-religion',
      name: 'III. Comparative Religion & Analysis',
      courses: [
        { code: 'BOT109', name: 'Comparative Religious Studies', credits: 3, description: 'Comparative religion studies provide learners with knowledge of the world’s major religious faiths. As a major, comparative religion provides a framework for a liberal arts education, exploring subjects like science, psychology, literature, and culture in relation to various world religions.' },
        { code: 'BOR202', name: 'Comparative Analysis: Teaching and Practical Living of Christ', credits: 3, description: 'This course examines various Christian apologetic methods including classical, evidential, presupposition, reformed, and cumulative case with the goal of providing a comparative analysis for determining each method’s merits and demerits.' },
        { code: 'BOR203', name: 'Christianity and Islam', credits: 3, description: 'This course will offer a comprehensive study of Islam: its main teachings and beliefs. We will study the social and political impact of Islam on our contemporary world. A variety of topics such as the role of women, the struggle in the way of God or jihad will be explored.' },
        { code: 'BOR204', name: 'American Culture and Religion', credits: 3, description: 'This course introduces students to foundational concepts and debates within the humanities and social sciences by studying one of a rotating set of themes (e.g. love, evil, apocalypse) located at the intersection of religion and culture in America. Emphasis on cultural diversity, historical transformation, interdisciplinary inquiry, problem-solving and the application of academic discussions to everyday life situations.' },
        { code: 'BOR205', name: 'Religion and Science', credits: 3, description: 'This course will examine fundamental philosophical, ethical and historical questions at the intersection of religion and science.' },
        { code: 'BOR206', name: 'Gender and Religion', credits: 3, description: 'This course examines the intersection between religion and gender, considering the ways in which religion informs understandings and assumptions about gender and, in turn, how gendered assumptions shape and inform religious practice.' },
        { code: 'BOR221', name: 'Perspectives', credits: 3, description: 'This course is designed to help the student develop a biblical, historical and cultural analysis of the impact of the world Christian movement. Specific attention is given to strategy and the imperative to bring the gospel to groups that have yet to initially receive it.' },
        { code: 'BOR225', name: 'Christianity in the Modern', credits: 3, description: 'An introduction to Christianity in the Modern, from its beginnings to the present. We will learn about Christian faith and practice through an overview of the religion’s scripture, history, worship, institutions, theology, and teachings, and give attention to many of Christianity’s most important and influential persons, groups, and movements.' },
        { code: 'BOR226', name: 'The Crusades', credits: 3, description: 'This course explores the causes, meanings, meaningfulness, and commemoration of these mass Christian expeditions against Muslims, pagans, Jews, heretics, and other infidels through primary sources, supported by secondary readings and supplemental sources.' },
      ],
    },
    {
      id: 'theology-philosophy',
      name: 'IV. Theology & Philosophy',
      courses: [
        { code: 'BOT111', name: 'Systematic Theology I', credits: 3, description: 'Christian theology supplies a biblical perspective on reality. Theological reflection is essential for the person who hopes to help others cope with reality; he or she must be able to provide biblically, reasoned, and sensitive responses to the hard questions of faith.' },
        { code: 'BOT112', name: 'Systematic Theology II', credits: 3, description: 'A course completing the study of systematic theology with special attention given to the doctrines of the person and work of Christ, the Holy Spirit, salvation, the church, and last things. Such issues as nature and extent of salvation, the origin, nature, and future of the church, and the eternal state are explored.' },
        { code: 'BOT113', name: 'World Church History', credits: 3, description: 'Church History: From Christ to the Pre-Reformation, taught by Everett Ferguson, offers a unique contextual view of how the Christian church spread and developed. The church did so not in a vacuum but in a setting of times, cultures, and events that both influenced and were influenced by the church. This course looks closely at the integral link between the history of the world and that of the church.' },
        { code: 'BOT118', name: 'Contemporary Theological Controversies', credits: 3, description: 'This course introduces a variety of approaches to the development of contextual theology including theologies of liberation, feminist theology, and other non-Western theological formulations Emphasis is placed on the evaluation of approaches and the identification of strengths and weaknesses. Perspectives on the similarities between contextual and western theologies will also be addressed.' },
        { code: 'BOR101', name: 'Philosophy of Religion', credits: 3, description: 'This course we will explore questions such as the following: if God has foreknowledge of actions, can I still be free and responsible? Can morality depend on God’s will, and if there is no God, does this have an impact on morality? Is there an afterlife, and if not, is death something I should fear? Is it possible to be reincarnated as another person or another animal? Does the vast suffering in the world give us good reason to believe God does not exist? What is faith, and can believing in God on the basis of faith be justified? We will concentrate on developing the skills needed in order to understand the arguments offered by the philosophers we study, to evaluate those arguments, and to formulate cogent philosophical arguments of our own.' },
        { code: 'BOR227', name: 'Christian Apologetics', credits: 3, description: 'This course is designed to be a basic introduction to the biblical, theological, historical, and philosophical foundations of Christian apologetics. Attention is given to the differences between Christian thought and select examples of non-Christian thought. It explores some of the assorted challenges to Christian belief and provides a survey of resources for thinking about those concerns.' },
        { code: 'BOT108', name: 'Introduction to Philosophy', credits: 3, description: 'This course will introduce you to some of the main areas of research in contemporary philosophy. Each module of a different philosopher will talk you through some of the most important questions and issues in their area of expertise.' },
      ],
    },
    {
      id: 'practical-studies',
      name: 'V. Practical Studies',
      courses: [
        { code: 'BOT107', name: 'Introduction to Psychology', credits: 3, description: 'This course will introduce you to the fundamental principles of psychology and to the major subjects of psychological inquiry.' },
        { code: 'BOT138', name: 'Introduction to Missiology', credits: 3, description: 'This course serves as a general introduction to Christian missions. It seeks to root missiology in biblical and systematic theology and to analyze missiology through biblical and theological lenses.' },
        { code: 'BOR208', name: 'Intro to International Affairs: Regional Cultures and Worldviews', credits: 3, description: 'This course serves as an introduction to the study of important issues in modern international relations and Regional Cultures and Worldviews.' },
        { code: 'BOR209', name: 'Intro to Communications', credits: 3, description: 'This course is designed to introduce you to the study of human communication. We will explore theories and models of communication and examine human communication in a variety of contexts including interpersonal relationships, groups, intercultural and gender contexts, public speaking, and public communication.' },
        { code: 'BOR210', name: 'English I', credits: 3, description: 'This course covers a variety of writing skills and understanding literary genres as a foundation for the reading and writing required in college coursework.' },
        { code: 'BOR211', name: 'English II', credits: 3, description: 'This course will focus on fostering interest and promoting confidence in the skills required to communicate, especially through the close, thoughtful reading and writing of various genres.' },
        { code: 'BOR228', name: 'Special Lecture', credits: 3, description: 'A special lecture course designed to enhance students\' understanding of various topics in religious studies.' },
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
