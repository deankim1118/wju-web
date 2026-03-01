/**
 * Master of Church Music (MACM) Extended Data
 */

import type {
  OutcomeItem,
  ProgramExtendedDataInput,
} from './program-extended-types';

export const MACM_EXTENDED: ProgramExtendedDataInput = {
  keyInformation: {
    creditInfo: {
      creditHours: '38',
      costPerCredit: '$300.00 per credit hour',
      yearsOfStudy: '2',
    },
  },
  outcomes: [
    {
      id: 'advanced-artistry',
      title: 'Advanced Artistry',
      description:
        'Exhibit advanced technical mastery and highly expressive professional artistry in a specialized musical field.',
    },
    {
      id: 'liturgical-theology',
      title: 'Liturgical Theology',
      description:
        'Design complex, theologically sound worship services by deeply understanding the historical and liturgical year.',
    },
    {
      id: 'advanced-arrangement',
      title: 'Advanced Arrangement',
      description:
        'Analyze, arrange, and compose sophisticated music tailored for diverse church ensembles, orchestras, and bands.',
    },
    {
      id: 'music-pedagogy',
      title: 'Music Pedagogy',
      description:
        'Apply advanced pedagogical methods to teach, direct, and elevate the musical abilities of church volunteers and staff.',
    },
    {
      id: 'pastoral-leadership',
      title: 'Pastoral Leadership',
      description:
        'Demonstrate strong spiritual leadership and pastoral care within a professional, high-level music ministry context.',
    },
    {
      id: 'academic-research',
      title: 'Academic Research',
      description:
        'Conduct graduate-level research in musicology or theology, culminating in academic writing and program notes.',
    },
  ] as OutcomeItem[],
  curriculum: [
    {
      id: 'integrated-required',
      name: 'Integrated Required',
      courses: [
        {
          code: 'MCM 600',
          name: 'Music and Spiritual Formation',
          credits: 3,
          description: 'Study of music and spiritual formation.',
        },
        {
          code: 'MCM 601-A',
          name: 'Music Ministry and Communication',
          credits: 3,
          description: 'Study of music ministry and communication.',
        },
        {
          code: 'MCM 601-B',
          name: 'Church Ministry and Communication (M.Div)',
          credits: 3,
          description: 'Church ministry and communication.',
        },
        {
          code: 'Th.B 601',
          name: 'Church Ministry and Communication',
          credits: 3,
          description: 'Church ministry and communication.',
        },
        {
          code: 'MCM 602-A',
          name: 'Worship and Worship Music',
          credits: 3,
          description: 'Study of worship and worship music.',
        },
        {
          code: 'MCM 603',
          name: 'Music and Emotion',
          credits: 3,
          description: 'Study of music and emotion.',
        },
        {
          code: 'MCM 602-B',
          name: 'Practical Worship Planning and Hymn',
          credits: 3,
          description: 'Practical worship planning and hymnology.',
        },
      ],
    },
    {
      id: 'general-required',
      name: 'General Required',
      courses: [
        {
          code: 'MCM 609',
          name: 'Academic Writing',
          credits: 3,
          description: 'Academic writing course.',
        },
      ],
    },
    {
      id: 'organ-studio',
      name: 'Organ Studio (Code 1)',
      courses: [
        {
          code: 'MCM 610',
          name: 'Applied Organ',
          credits: 3,
          description: 'Applied major studio for organ.',
        },
        {
          code: 'MCM 611',
          name: 'Service Playing',
          credits: 3,
          description: 'Techniques for worship service playing.',
        },
        {
          code: 'MCM 612',
          name: 'Organ Structure and Registration',
          credits: 3,
          description: 'Study of organ structure and registration.',
        },
        {
          code: 'MCM 613',
          name: 'Organ Transcription',
          credits: 3,
          description: 'Techniques in organ transcription.',
        },
        {
          code: 'MCM 614',
          name: 'Organ Chorale',
          credits: 3,
          description: 'Study of organ chorale.',
        },
        {
          code: 'MCM 615',
          name: 'Organ Repertories before Bach',
          credits: 3,
          description: 'Organ literature prior to Bach.',
        },
        {
          code: 'MCM 616',
          name: 'Improvisation',
          credits: 3,
          description: 'Organ improvisation techniques.',
        },
        {
          code: 'MCM 617',
          name: 'Conducting on the Organ',
          credits: 3,
          description: 'Conducting techniques for organists.',
        },
        {
          code: 'MCM 618',
          name: 'French Romantic Music',
          credits: 3,
          description: 'Study of French romantic organ music.',
        },
        {
          code: 'MCM 619',
          name: 'Organ Repertories after Romantic',
          credits: 3,
          description: 'Organ literature after the Romantic period.',
        },
      ],
    },
    {
      id: 'composition-studio',
      name: 'Composition Studio (Code 2)',
      courses: [
        {
          code: 'MCM 620',
          name: 'Applied Composition',
          credits: 3,
          description: 'Applied major studio for composition.',
        },
        {
          code: 'MCM 621',
          name: 'Arranging for Worship I',
          credits: 3,
          description: 'Advanced church music arranging I.',
        },
        {
          code: 'MCM 622',
          name: 'Arranging for Worship II',
          credits: 3,
          description: 'Advanced church music arranging II.',
        },
        {
          code: 'MCM 623',
          name: 'Advanced Counterpoint',
          credits: 3,
          description: 'Advanced contrapuntal techniques.',
        },
        {
          code: 'MCM 624',
          name: 'Advanced Orchestration I',
          credits: 3,
          description: 'Advanced orchestration techniques I.',
        },
        {
          code: 'MCM 625',
          name: 'Advanced Orchestration II',
          credits: 3,
          description: 'Advanced orchestration techniques II.',
        },
        {
          code: 'MCM 626',
          name: 'Analytical Technique for Worship Leader I',
          credits: 3,
          description: 'Analytical techniques for worship I.',
        },
        {
          code: 'MCM 627',
          name: 'Analytical Technique for Worship Leader II',
          credits: 3,
          description: 'Analytical techniques for worship II.',
        },
        {
          code: 'MCM 628',
          name: 'Music Technology (DAW)',
          credits: 3,
          description: 'Study of music technology and DAW.',
        },
      ],
    },
    {
      id: 'contemporary-piano-studio',
      name: 'Contemporary Piano (Code 3)',
      courses: [
        {
          code: 'MCM 630',
          name: 'Applied Contemporary Piano',
          credits: 3,
          description: 'Applied major studio for contemporary piano.',
        },
        {
          code: 'MCM 631',
          name: 'Jazz Harmony I, II, III, IV',
          credits: 3,
          description: 'Comprehensive study of jazz harmony.',
        },
        {
          code: 'MCM 632',
          name: 'Ear Training',
          credits: 3,
          description: 'Advanced ear training.',
        },
        {
          code: 'MCM 633',
          name: 'Band Directing',
          credits: 3,
          description: 'Techniques in band directing.',
        },
        {
          code: 'MCM 634',
          name: 'Ensemble',
          credits: 3,
          description: 'Ensemble practice.',
        },
      ],
    },
    {
      id: 'classical-piano-studio',
      name: 'Classical Piano (Code 4)',
      courses: [
        {
          code: 'MCM 640',
          name: 'Applied Piano',
          credits: 3,
          description: 'Applied major studio for piano.',
        },
        {
          code: 'MCM 641',
          name: 'Piano Pedagogy',
          credits: 3,
          description: 'Advanced piano teaching methods.',
        },
        {
          code: 'MCM 642',
          name: 'Piano and Tuning',
          credits: 3,
          description: 'Understanding piano tuning.',
        },
        {
          code: 'MCM 643',
          name: 'Piano Literature',
          credits: 3,
          description: 'Study of piano literature.',
        },
        {
          code: 'MCM 644',
          name: 'Worship Accompaniment',
          credits: 3,
          description: 'Advanced worship accompaniment.',
        },
        {
          code: 'MCM 645',
          name: 'Piano Arrangement',
          credits: 3,
          description: 'Techniques in piano arrangement.',
        },
        {
          code: 'MCM 646',
          name: 'Score Reading',
          credits: 3,
          description: 'Advanced score reading.',
        },
        {
          code: 'MCM 647',
          name: 'Understanding Organ Music',
          credits: 3,
          description: 'Study of organ music for pianists.',
        },
      ],
    },
    {
      id: 'worship-music-studio',
      name: 'Worship Music (Code 5)',
      courses: [
        {
          code: 'MCM 650',
          name: 'Applied Worship',
          credits: 3,
          description: 'Applied major studio for worship music.',
        },
        {
          code: 'MCM 651',
          name: 'Keyboard Harmony',
          credits: 3,
          description: 'Study of keyboard harmony.',
        },
        {
          code: 'MCM 652',
          name: 'Ensemble I',
          credits: 3,
          description: 'First level ensemble.',
        },
        {
          code: 'MCM 653',
          name: 'Ensemble II',
          credits: 3,
          description: 'Second level ensemble.',
        },
        {
          code: 'MCM 654',
          name: 'Understanding Orchestra',
          credits: 3,
          description: 'Study of orchestra.',
        },
        {
          code: 'MCM 655',
          name: 'Organ Basics',
          credits: 3,
          description: 'Introduction to organ basics.',
        },
      ],
    },
    {
      id: 'vocal-studio',
      name: 'Vocal (Code 6)',
      courses: [
        {
          code: 'MCM 660',
          name: 'Applied Voice',
          credits: 3,
          description: 'Applied major studio for voice.',
        },
        {
          code: 'MCM 661',
          name: 'Opera Acting',
          credits: 3,
          description: 'Techniques in opera acting.',
        },
        {
          code: 'MCM 662',
          name: 'Opera Literature',
          credits: 3,
          description: 'Study of opera literature.',
        },
        {
          code: 'MCM 663',
          name: 'Stage Performance Skills',
          credits: 3,
          description: 'Development of stage performance skills.',
        },
        {
          code: 'MCM 664',
          name: 'Diction I',
          credits: 3,
          description: 'First level diction.',
        },
        {
          code: 'MCM 665',
          name: 'Diction II',
          credits: 3,
          description: 'Second level diction.',
        },
        {
          code: 'MCM 667',
          name: 'Repertoire for the Liturgical Year',
          credits: 3,
          description: 'Music for the liturgical year.',
        },
        {
          code: 'MCM 668',
          name: 'Voice Pedagogy',
          credits: 3,
          description: 'Study of voice teaching methods.',
        },
      ],
    },
    {
      id: 'instrumental-studio',
      name: 'Instrumental Music (Code 7)',
      courses: [
        {
          code: 'MCM 670',
          name: 'Applied Instruments',
          credits: 3,
          description: 'Applied major studio for instruments.',
        },
        {
          code: 'MCM 671',
          name: 'Orchestral Ensemble I, II, III, IV',
          credits: 3,
          description: 'Orchestral ensemble practice.',
        },
        {
          code: 'MCM 672',
          name: 'Brass Ensemble I, II, III, IV',
          credits: 3,
          description: 'Brass ensemble practice.',
        },
        {
          code: 'MCM 673',
          name: 'Ensemble Arrangement',
          credits: 3,
          description: 'Techniques in ensemble arrangement.',
        },
        {
          code: 'MCM 674',
          name: 'Orchestral Arrangement',
          credits: 3,
          description: 'Techniques in orchestral arrangement.',
        },
        {
          code: 'MCM 675',
          name: 'String Ensemble I, II, III, IV',
          credits: 3,
          description: 'String ensemble practice.',
        },
        {
          code: 'MCM 676',
          name: 'Worship Music Arrangement I, II',
          credits: 3,
          description: 'Techniques in worship music arrangement.',
        },
        {
          code: 'MCM 677',
          name: 'Orchestral Studies',
          credits: 3,
          description: 'Study of orchestration.',
        },
        {
          code: 'MCM 678',
          name: 'Advanced Orchestral Studies',
          credits: 3,
          description: 'Advanced study of orchestration.',
        },
      ],
    },
    {
      id: 'contemporary-music-studio',
      name: 'Contemporary Music (Code 8)',
      courses: [
        {
          code: 'MCM 680',
          name: 'Applied Instrument',
          credits: 3,
          description: 'Applied major studio for contemporary instruments.',
        },
        {
          code: 'MCM 681',
          name: 'Arrangement for Band Music I, II',
          credits: 3,
          description: 'Band music arrangement techniques.',
        },
        {
          code: 'MCM 682',
          name: 'Band Directing I, II',
          credits: 3,
          description: 'Techniques in band directing.',
        },
        {
          code: 'MCM 683',
          name: 'Music Production and Recording',
          credits: 3,
          description: 'Study of music production.',
        },
        {
          code: 'MCM 684',
          name: 'Digital Audio Workstation (DAW)',
          credits: 3,
          description: 'Study of digital audio workstations.',
        },
        {
          code: 'MCM 685',
          name: 'Rhythmic Analysis I, II',
          credits: 3,
          description: 'Techniques in rhythmic analysis.',
        },
        {
          code: 'MCM 686',
          name: 'Ear Training I, II',
          credits: 3,
          description: 'Advanced ear training.',
        },
        {
          code: 'MCM 687',
          name: 'History of Contemporary',
          credits: 3,
          description: 'History of contemporary music.',
        },
        {
          code: 'MCM 688',
          name: 'Music Business',
          credits: 3,
          description: 'Understanding the music industry and business.',
        },
        {
          code: 'MCM 689',
          name: 'Band Practicum',
          credits: 3,
          description: 'Field practicum for band.',
        },
      ],
    },
    {
      id: 'secondary-instruments-master',
      name: 'Secondary Instruments',
      courses: [
        {
          code: 'MCM 510',
          name: 'Secondary Organ',
          credits: 3,
          description: 'Secondary applied organ.',
        },
        {
          code: 'MCM 520',
          name: 'Secondary Composition',
          credits: 3,
          description: 'Secondary applied composition.',
        },
        {
          code: 'MCM 530',
          name: 'Secondary Contemporary Piano',
          credits: 3,
          description: 'Secondary applied contemporary piano.',
        },
        {
          code: 'MCM 540',
          name: 'Secondary Piano',
          credits: 3,
          description: 'Secondary applied piano.',
        },
        {
          code: 'MCM 550',
          name: 'Secondary Worship Music',
          credits: 3,
          description: 'Secondary applied worship music.',
        },
        {
          code: 'MCM 560',
          name: 'Secondary Voice',
          credits: 3,
          description: 'Secondary applied voice.',
        },
        {
          code: 'MCM 570',
          name: 'Secondary Orchestral Instruments',
          credits: 3,
          description: 'Secondary applied orchestral instruments.',
        },
        {
          code: 'MCM 580',
          name: 'Secondary Band Instruments',
          credits: 3,
          description: 'Secondary applied band instruments.',
        },
      ],
    },
    {
      id: 'master-electives',
      name: 'Master Electives',
      courses: [
        {
          code: 'MCM 551',
          name: 'Harmony',
          credits: 3,
          description: 'Advanced harmony.',
        },
        {
          code: 'MCM 552',
          name: 'Counterpoint',
          credits: 3,
          description: 'Advanced counterpoint.',
        },
        {
          code: 'MCM 553',
          name: 'Score Reading and Instrumentation',
          credits: 3,
          description: 'Score reading and instrumentation.',
        },
        {
          code: 'MCM 554',
          name: 'Analytical Technique for Worship Leader',
          credits: 3,
          description: 'Analytical techniques for worship.',
        },
        {
          code: 'MCM 555',
          name: 'Choral Arrangement',
          credits: 3,
          description: 'Advanced choral arrangement.',
        },
        {
          code: 'MCM 556',
          name: 'Liturgical Year',
          credits: 3,
          description: 'Study of the liturgical year.',
        },
        {
          code: 'MCM 557',
          name: 'Organ Arrangement',
          credits: 3,
          description: 'Organ arrangement techniques.',
        },
        {
          code: 'MCM 558',
          name: 'Hymn Arrangement',
          credits: 3,
          description: 'Hymn arrangement techniques.',
        },
        {
          code: 'MCM 559',
          name: 'Collaborative Work for Organist/Pianist',
          credits: 3,
          description: 'Collaborative work for keyboardists.',
        },
        {
          code: 'MCM 561',
          name: 'Piano/Organ Transcription for Accompanist',
          credits: 3,
          description: 'Transcription for accompanists.',
        },
        {
          code: 'MCM 562',
          name: 'Piano Reduction',
          credits: 3,
          description: 'Techniques in piano reduction.',
        },
        {
          code: 'MCM 563-A',
          name: 'Basic Jazz Harmony I, II',
          credits: 3,
          description: 'Basic jazz harmony.',
        },
        {
          code: 'MCM 563-B',
          name: 'Chord Accompaniment',
          credits: 3,
          description: 'Techniques in chord accompaniment.',
        },
        {
          code: 'MCM 564',
          name: 'Advanced Chord Accompaniment',
          credits: 3,
          description: 'Advanced chord accompaniment.',
        },
        {
          code: 'MCM 565',
          name: 'Understanding Band Music',
          credits: 3,
          description: 'Study of band music.',
        },
        {
          code: 'MCM 566',
          name: 'Band Directing',
          credits: 3,
          description: 'Band directing techniques.',
        },
        {
          code: 'MCM 567',
          name: 'Song Writing',
          credits: 3,
          description: 'Techniques in song writing.',
        },
        {
          code: 'MCM 568',
          name: 'Ear Training',
          credits: 3,
          description: 'Advanced ear training.',
        },
      ],
    },
    {
      id: 'graduation-recital-master',
      name: 'Graduation Recital',
      courses: [
        {
          code: 'MCM 710',
          name: 'Organ Graduation Recital',
          credits: 3,
          description: 'Graduation recital for organ major.',
        },
        {
          code: 'MCM 720',
          name: 'Composition Graduation Recital',
          credits: 3,
          description: 'Graduation recital for composition major.',
        },
        {
          code: 'MCM 730',
          name: 'Graduation Recital',
          credits: 3,
          description: 'Graduation recital for contemporary piano.',
        },
        {
          code: 'MCM 740',
          name: 'Piano Graduation Recital',
          credits: 3,
          description: 'Graduation recital for piano major.',
        },
        {
          code: 'MCM 750',
          name: 'Worship Graduation Project',
          credits: 3,
          description: 'Graduation project for worship music major.',
        },
        {
          code: 'MCM 760',
          name: 'Vocal Music Graduation Recital',
          credits: 3,
          description: 'Graduation recital for vocal major.',
        },
        {
          code: 'MCM 770',
          name: 'Orchestral Music Graduation Recital',
          credits: 3,
          description: 'Graduation recital for orchestral music major.',
        },
        {
          code: 'MCM 780',
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
