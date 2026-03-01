/**
 * Bachelor of Church Music (BACM) Extended Data
 */

import type {
  OutcomeItem,
  ProgramExtendedDataInput,
} from './program-extended-types';

export const BACM_EXTENDED: ProgramExtendedDataInput = {
  keyInformation: {
    creditInfo: {
      creditHours: '123',
      costPerCredit: '$255.00 per credit hour',
      yearsOfStudy: '4',
      creditNote: '! 46 music-related credit hours required',
    },
  },
  outcomes: [
    {
      id: 'musical-excellence',
      title: 'Musical Excellence',
      description:
        'Demonstrate foundational technical proficiency and artistic expression in a primary applied instrument or composition.',
    },
    {
      id: 'biblical-integration',
      title: 'Biblical Integration',
      description:
        'Integrate biblical theology and spiritual formation directly into the practice of music and worship leading.',
    },
    {
      id: 'worship-leadership',
      title: 'Worship Leadership',
      description:
        'Design, plan, and lead congregational worship services utilizing a variety of traditional and contemporary musical styles.',
    },
    {
      id: 'theoretical-foundation',
      title: 'Theoretical Foundation',
      description:
        'Apply comprehensive knowledge of music theory, harmony, and ear training to analyze and arrange church music.',
    },
    {
      id: 'ensemble-collaboration',
      title: 'Ensemble Collaboration',
      description:
        'Collaborate effectively within choirs, bands, and orchestras, developing strong accompaniment and directing skills.',
    },
    {
      id: 'pastoral-communication',
      title: 'Pastoral Communication',
      description:
        'Communicate the Gospel clearly through music ministry, providing pastoral care and spiritual direction to team members.',
    },
  ] as OutcomeItem[],
  curriculum: [
    {
      id: 'integrated-ministry',
      name: 'I. Integrated Theology & Ministry',
      courses: [
        {
          code: 'BCM 200',
          name: 'Music and Spiritual Formation',
          credits: 3,
          description:
            'An introductory course exploring the vital connection between a musician\u2019s personal spiritual disciplines and their public ministry.',
        },
        {
          code: 'BCM 201',
          name: 'Music Ministry and Communication',
          credits: 3,
          description:
            'Examines the role of the music minister as a communicator of the Gospel, focusing on interpersonal dynamics and leadership within the local church.',
        },
        {
          code: 'BCM 202',
          name: 'Worship and Hymnology',
          credits: 3,
          description:
            'A historical and theological survey of Christian hymnody and worship practices, preparing students to plan meaningful liturgical experiences.',
        },
        {
          code: 'BCM 203',
          name: 'Music and Emotion',
          credits: 3,
          description:
            'Explores the psychological and emotional impact of music in worship, equipping leaders to use music responsibly and effectively in ministry.',
        },
        {
          code: 'BCM 209',
          name: 'Basic Writing',
          credits: 3,
          description:
            'Develops foundational academic writing skills necessary for theological reflection and professional communication in ministry.',
        },
      ],
    },
    {
      id: 'music-theory-history',
      name: 'II. Music Theory & History',
      courses: [
        {
          code: 'BCM 152',
          name: 'Music Theory I & II',
          credits: 3,
          description:
            'A foundational study of diatonic harmony, voice leading, and structural analysis to build a strong theoretical framework for musicians.',
        },
        {
          code: 'BCM 155',
          name: 'Basic Counterpoint',
          credits: 3,
          description:
            'An introduction to the principles of contrapuntal writing, focusing on the interplay of independent melodic lines.',
        },
        {
          code: 'BCM 166',
          name: 'Ear Training I & II',
          credits: 3,
          description:
            'Develops aural skills through dictation and sight-singing, essential for practical musicianship and ensemble directing.',
        },
        {
          code: 'BCM 173',
          name: 'Music History I & II',
          credits: 3,
          description:
            'A comprehensive survey of the development of Western music from the medieval period through the modern era, with emphasis on sacred music.',
        },
      ],
    },
    {
      id: 'applied-major-studio',
      name: 'III. Applied Major Studio (Selected Track)',
      courses: [
        {
          code: 'BCM 210/240',
          name: 'Applied Organ / Piano',
          credits: 3,
          description:
            'Private instruction focusing on technique, repertoire, and expressive performance skills tailored to the student\u2019s major instrument.',
        },
        {
          code: 'BCM 220',
          name: 'Applied Composition',
          credits: 3,
          description:
            'Individualized guidance in writing original music for various church settings, exploring different forms, styles, and instrumentations.',
        },
        {
          code: 'BCM 230',
          name: 'Contemporary Piano & Jazz',
          credits: 3,
          description:
            'Focuses on modern keyboard techniques, jazz harmony, and improvisation skills required for contemporary worship bands.',
        },
        {
          code: 'BCM 244',
          name: 'Worship Accompaniment',
          credits: 3,
          description:
            'Practical training in accompanying congregations and choirs, focusing on sight-reading, transposition, and stylistic adaptation.',
        },
      ],
    },
    {
      id: 'practical-ensembles',
      name: 'IV. Practical Ministry & Ensembles',
      courses: [
        {
          code: 'BCM 171',
          name: 'Instrumental Ensemble',
          credits: 1,
          description:
            'Performance experience in an instrumental group, focusing on blending, intonation, and collaborative musicianship.',
        },
        {
          code: 'BCM 172',
          name: 'Choral Ensemble',
          credits: 1,
          description:
            'Vocal training and performance experience within a choral setting, exploring a wide range of sacred choral literature.',
        },
        {
          code: 'BCM 237',
          name: 'Band Directing',
          credits: 3,
          description:
            'Equips students with the practical skills needed to rehearse and lead a contemporary worship band effectively.',
        },
        {
          code: 'BCM 176',
          name: 'Local Church Worship Observation',
          credits: 2,
          description:
            'Field education course requiring students to observe and analyze worship services in various local church contexts.',
        },
      ],
    },
    {
      id: 'capstone-recital',
      name: 'V. Capstone & Recital',
      courses: [
        {
          code: 'BCM 310-380',
          name: 'Graduation Recital / Project',
          credits: 3,
          description:
            'The culminating undergraduate experience requiring a full public recital or a comprehensive ministry project demonstrating musical and theological readiness.',
        },
      ],
    },
  ],
  admissions: { intro: [], sections: [] },
  graduation: { requirements: [] },
};
