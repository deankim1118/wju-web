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
      id: 'integrated-courses',
      name: 'Integrated Required',
      courses: [
        {
          code: 'BCM 200',
          name: 'Music and Spiritual Formation',
          credits: 3,
          description: 'Study of music and spiritual formation.',
        },
        {
          code: 'BCM 201',
          name: 'Music Ministry and Communication',
          credits: 3,
          description: 'Study of music ministry and communication.',
        },
        {
          code: 'BCM 202',
          name: 'Worship and Hymn',
          credits: 3,
          description: 'Study of worship and hymn.',
        },
        {
          code: 'BCM 203',
          name: 'Music and Emotion',
          credits: 3,
          description: 'Study of music and emotion.',
        },
        {
          code: 'BCM 202-B',
          name: 'Practical Worship Planning and Hymn',
          credits: 3,
          description: 'Practical worship planning and hymnology.',
        },
      ],
    },
    {
      id: 'general-education',
      name: 'General Education Required',
      courses: [
        {
          code: 'BCM 209',
          name: 'Basic Writing',
          credits: 3,
          description: 'University level basic writing course.',
        },
      ],
    },
    {
      id: 'organ-studio',
      name: 'Organ Studio & Required',
      courses: [
        {
          code: 'BCM 210',
          name: 'Applied Organ',
          credits: 3,
          description: 'Applied major studio for organ.',
        },
        {
          code: 'BCM 211',
          name: 'Service Playing',
          credits: 3,
          description: 'Techniques for worship service playing.',
        },
        {
          code: 'BCM 212',
          name: 'Organ Building and Structure',
          credits: 3,
          description: 'Study of organ structure.',
        },
        {
          code: 'BCM 213',
          name: 'Organ Transcription',
          credits: 3,
          description: 'Techniques in organ transcription.',
        },
        {
          code: 'BCM 214',
          name: 'Organ Chorale',
          credits: 3,
          description: 'Study of organ chorale.',
        },
        {
          code: 'BCM 215',
          name: 'Organ Repertories before Bach',
          credits: 3,
          description: 'Organ literature prior to Bach.',
        },
        {
          code: 'BCM 216',
          name: 'Improvisation',
          credits: 3,
          description: 'Organ improvisation techniques.',
        },
        {
          code: 'BCM 217',
          name: 'French Romantic Music',
          credits: 3,
          description: 'Study of French romantic organ music.',
        },
      ],
    },
    {
      id: 'composition-studio',
      name: 'Composition Studio & Required',
      courses: [
        {
          code: 'BCM 220',
          name: 'Applied Composition',
          credits: 3,
          description: 'Applied major studio for composition.',
        },
        {
          code: 'BCM 221',
          name: 'Score Reading',
          credits: 3,
          description: 'Techniques in reading musical scores.',
        },
        {
          code: 'BCM 222',
          name: 'Instrumentation',
          credits: 3,
          description: 'Study of instrumentation.',
        },
        {
          code: 'BCM 223',
          name: 'Analytical Approaches to Worship Music I',
          credits: 3,
          description: 'First level analysis of worship music.',
        },
        {
          code: 'BCM 224',
          name: 'Analytical Approaches to Worship Music II',
          credits: 3,
          description: 'Second level analysis of worship music.',
        },
        {
          code: 'BCM 225',
          name: 'Choral Arrangement',
          credits: 3,
          description: 'Techniques in choral arrangement.',
        },
        {
          code: 'BCM 226',
          name: 'Orchestration',
          credits: 3,
          description: 'Study of orchestration.',
        },
      ],
    },
    {
      id: 'contemporary-piano-studio',
      name: 'Contemporary Piano Studio & Required',
      courses: [
        {
          code: 'BCM 230',
          name: 'Applied Contemporary Piano',
          credits: 3,
          description: 'Applied major studio for contemporary piano.',
        },
        {
          code: 'BCM 231',
          name: 'Jazz Musicianship I',
          credits: 3,
          description: 'First level jazz musicianship.',
        },
        {
          code: 'BCM 232',
          name: 'Jazz Musicianship II',
          credits: 3,
          description: 'Second level jazz musicianship.',
        },
        {
          code: 'BCM 233',
          name: 'Jazz Harmony I',
          credits: 3,
          description: 'First level jazz harmony.',
        },
        {
          code: 'BCM 234',
          name: 'Jazz Harmony II',
          credits: 3,
          description: 'Second level jazz harmony.',
        },
        {
          code: 'BCM 235',
          name: 'Ear Training I',
          credits: 3,
          description: 'First level ear training.',
        },
        {
          code: 'BCM 236',
          name: 'Ear Training II',
          credits: 3,
          description: 'Second level ear training.',
        },
        {
          code: 'BCM 237',
          name: 'Band Directing I',
          credits: 3,
          description: 'First level band directing.',
        },
        {
          code: 'BCM 238',
          name: 'Band Directing II',
          credits: 3,
          description: 'Second level band directing.',
        },
      ],
    },
    {
      id: 'classical-piano-studio',
      name: 'Classical Piano Studio & Required',
      courses: [
        {
          code: 'BCM 240',
          name: 'Applied Piano',
          credits: 3,
          description: 'Applied major studio for classical piano.',
        },
        {
          code: 'BCM 241',
          name: 'Piano Pedagogy',
          credits: 3,
          description: 'Study of piano teaching methods.',
        },
        {
          code: 'BCM 242',
          name: 'Piano and Tuning',
          credits: 3,
          description: 'Understanding piano tuning and mechanics.',
        },
        {
          code: 'BCM 243',
          name: 'Piano Literature',
          credits: 3,
          description: 'Study of piano literature.',
        },
        {
          code: 'BCM 244',
          name: 'Worship Accompaniment',
          credits: 3,
          description: 'Techniques for worship accompaniment.',
        },
        {
          code: 'BCM 245',
          name: 'Piano Arrangement',
          credits: 3,
          description: 'Techniques in piano arrangement.',
        },
        {
          code: 'BCM 246',
          name: 'Score Reading',
          credits: 3,
          description: 'Techniques in score reading for piano.',
        },
      ],
    },
    {
      id: 'major-electives',
      name: 'Major Electives',
      courses: [
        {
          code: 'BCM 152-1',
          name: 'Music Theory I',
          credits: 3,
          description: 'First level music theory.',
        },
        {
          code: 'BCM 152-2',
          name: 'Music Theory II',
          credits: 3,
          description: 'Second level music theory.',
        },
        {
          code: 'BCM 153',
          name: 'Music Theory III',
          credits: 3,
          description: 'Third level music theory.',
        },
        {
          code: 'BCM 154',
          name: 'Music Theory IV',
          credits: 3,
          description: 'Fourth level music theory.',
        },
        {
          code: 'BCM 155',
          name: 'Basic Counterpoint I',
          credits: 3,
          description: 'First level basic counterpoint.',
        },
        {
          code: 'BCM 156',
          name: 'Basic Counterpoint II',
          credits: 3,
          description: 'Second level basic counterpoint.',
        },
        {
          code: 'BCM 157',
          name: 'Analytical Approaches to Worship Music I',
          credits: 3,
          description: 'Basic analysis of worship music I.',
        },
        {
          code: 'BCM 158',
          name: 'Analytical Approaches to Worship Music II',
          credits: 3,
          description: 'Basic analysis of worship music II.',
        },
        {
          code: 'BCM 159',
          name: 'Basic Choral Arrangement',
          credits: 3,
          description: 'Fundamentals of choral arrangement.',
        },
        {
          code: 'BCM 161',
          name: 'Easy Song Writing',
          credits: 3,
          description: 'Introduction to song writing.',
        },
        {
          code: 'BCM 162',
          name: 'Piano Accompaniment I',
          credits: 3,
          description: 'First level piano accompaniment.',
        },
        {
          code: 'BCM 163',
          name: 'Piano Accompaniment II',
          credits: 3,
          description: 'Second level piano accompaniment.',
        },
        {
          code: 'BCM 164',
          name: 'Organ Accompaniment I',
          credits: 3,
          description: 'First level organ accompaniment.',
        },
        {
          code: 'BCM 165',
          name: 'Organ Accompaniment II',
          credits: 3,
          description: 'Second level organ accompaniment.',
        },
        {
          code: 'BCM 166',
          name: 'Ear Training I',
          credits: 3,
          description: 'First level ear training.',
        },
        {
          code: 'BCM 167',
          name: 'Ear Training II',
          credits: 3,
          description: 'Second level ear training.',
        },
        {
          code: 'BCM 168',
          name: 'Sight Reading I',
          credits: 3,
          description: 'First level sight reading.',
        },
        {
          code: 'BCM 169',
          name: 'Sight Reading II',
          credits: 3,
          description: 'Second level sight reading.',
        },
        {
          code: 'BCM 171',
          name: 'Instrumental Ensemble I, II',
          credits: 3,
          description: 'Instrumental ensemble practice.',
        },
        {
          code: 'BCM 172',
          name: 'Choral Ensemble I, II',
          credits: 3,
          description: 'Choral ensemble practice.',
        },
        {
          code: 'BCM 173',
          name: 'Music History I',
          credits: 3,
          description: 'First part of music history.',
        },
        {
          code: 'BCM 174',
          name: 'Music History II',
          credits: 3,
          description: 'Second part of music history.',
        },
        {
          code: 'BCM 175',
          name: 'Local Concert Observation I, II',
          credits: 3,
          description: 'Observation of local performances.',
        },
        {
          code: 'BCM 176',
          name: 'Local Church Worship Observation I, II',
          credits: 3,
          description: 'Observation of local church worship.',
        },
        {
          code: 'BCM 177',
          name: 'Recording and Computer Music',
          credits: 3,
          description: 'Introduction to recording and computer music.',
        },
      ],
    },
    {
      id: 'secondary-instruments',
      name: 'Secondary Instruments',
      courses: [
        {
          code: 'BCM 110',
          name: 'Secondary Organ',
          credits: 3,
          description: 'Secondary applied organ.',
        },
        {
          code: 'BCM 120',
          name: 'Secondary Composition',
          credits: 3,
          description: 'Secondary applied composition.',
        },
        {
          code: 'BCM 130',
          name: 'Secondary Contemporary Piano',
          credits: 3,
          description: 'Secondary applied contemporary piano.',
        },
        {
          code: 'BCM 140',
          name: 'Secondary Piano',
          credits: 3,
          description: 'Secondary applied classical piano.',
        },
        {
          code: 'BCM 150',
          name: 'Secondary Worship Music',
          credits: 3,
          description: 'Secondary applied worship music.',
        },
        {
          code: 'BCM 160',
          name: 'Secondary Voice',
          credits: 3,
          description: 'Secondary applied voice.',
        },
        {
          code: 'BCM 170',
          name: 'Secondary Orchestral Instruments',
          credits: 3,
          description: 'Secondary applied orchestral instruments.',
        },
        {
          code: 'BCM 180',
          name: 'Secondary Contemporary Instrument',
          credits: 3,
          description: 'Secondary applied band instruments.',
        },
      ],
    },
    {
      id: 'graduation-recital',
      name: 'Graduation Recital',
      courses: [
        {
          code: 'BCM 310',
          name: 'Organ Graduation Recital',
          credits: 3,
          description: 'Graduation recital for organ major.',
        },
        {
          code: 'BCM 320',
          name: 'Composition Graduation Recital',
          credits: 3,
          description: 'Graduation recital for composition major.',
        },
        {
          code: 'BCM 330',
          name: 'Contemporary Piano Graduation Recital',
          credits: 3,
          description: 'Graduation recital for contemporary piano major.',
        },
        {
          code: 'BCM 340',
          name: 'Classical Piano Graduation Recital',
          credits: 3,
          description: 'Graduation recital for classical piano major.',
        },
        {
          code: 'BCM 350',
          name: 'Worship Graduation Project',
          credits: 3,
          description: 'Graduation project for worship music major.',
        },
        {
          code: 'BCM 360',
          name: 'Vocal Music Graduation Recital',
          credits: 3,
          description: 'Graduation recital for vocal major.',
        },
        {
          code: 'BCM 370',
          name: 'Orchestral Music Graduation Recital',
          credits: 3,
          description: 'Graduation recital for orchestral music major.',
        },
        {
          code: 'BCM 380',
          name: 'Contemporary Music Graduation Recital',
          credits: 3,
          description: 'Graduation recital for contemporary music major.',
        },
      ],
    },
  ],
  admissions: { intro: [], sections: [] },
  graduation: { requirements: [] },
};
