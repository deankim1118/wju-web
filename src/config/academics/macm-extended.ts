/**
 * Master of Church Music (MACM) Extended Data
 */

import type { OutcomeItem, ProgramExtendedDataInput } from './program-extended-types';

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
      id: 'core-spiritual-ministry',
      name: 'I. Core Spiritual & Ministry Formation',
      courses: [
        { code: 'MCM 600', name: 'Music and Spiritual Formation', credits: 3, description: 'An advanced exploration of the theological and spiritual disciplines required for sustaining a lifelong vocational music ministry.' },
        { code: 'MCM 601', name: 'Church Ministry and Communication', credits: 3, description: 'Focuses on advanced leadership dynamics, conflict resolution, and effective communication strategies within the pastoral team.' },
        { code: 'MCM 602', name: 'Worship and Worship Music', credits: 3, description: 'A critical study of worship paradigms and the strategic planning of music for the liturgical year and special church seasons.' },
        { code: 'MCM 609', name: 'Academic Writing', credits: 3, description: 'Equips graduate students with the rigorous research and writing skills necessary for theological and musical scholarship.' },
      ],
    },
    {
      id: 'advanced-theory-analysis',
      name: 'II. Advanced Theory & Analysis',
      courses: [
        { code: 'MCM 626', name: 'Analytical Technique for Worship Leaders', credits: 3, description: 'Advanced structural and harmonic analysis of worship music to inform better performance, arrangement, and rehearsal strategies.' },
        { code: 'MCM 552', name: 'Advanced Counterpoint', credits: 3, description: 'Rigorous study of advanced contrapuntal techniques, analyzing masterworks and applying them to original compositions.' },
        { code: 'MCM 631', name: 'Advanced Jazz Harmony', credits: 3, description: 'In-depth exploration of extended chords, substitutions, and modern harmonic progressions used in contemporary music.' },
        { code: 'MCM 685', name: 'Rhythmic Analysis', credits: 3, description: 'A specialized course focusing on the transcription and analysis of complex rhythmic structures in contemporary and global music.' },
      ],
    },
    {
      id: 'advanced-applied-studio',
      name: 'III. Advanced Applied Studio & Pedagogy',
      courses: [
        { code: 'MCM 610/640', name: 'Applied Studio (Organ/Piano/Voice/Inst)', credits: 3, description: 'Intensive graduate-level private instruction aiming for professional concert-level performance and profound musical interpretation.' },
        { code: 'MCM 641', name: 'Piano / Voice Pedagogy', credits: 3, description: 'Comprehensive study of teaching methodologies, anatomical considerations, and repertoire selection for instructing musicians.' },
        { code: 'MCM 661', name: 'Opera Acting & Stage Performance', credits: 3, description: 'Advanced training for vocalists in dramatic expression, stage presence, and the communication of narrative through song.' },
        { code: 'MCM 688', name: 'Music Business & Industry', credits: 3, description: 'Covers practical aspects of the modern music profession, including copyright law, publishing, contracts, and media production.' },
      ],
    },
    {
      id: 'arrangement-production',
      name: 'IV. Arrangement & Music Production',
      courses: [
        { code: 'MCM 624', name: 'Advanced Orchestration', credits: 3, description: 'Detailed study of the capabilities of orchestral instruments and the techniques of scoring for large traditional ensembles.' },
        { code: 'MCM 676', name: 'Worship Music Arrangement', credits: 3, description: 'Practical techniques for adapting and scoring hymns and contemporary songs for diverse local church bands and choirs.' },
        { code: 'MCM 683', name: 'Music Production and Recording', credits: 3, description: 'Hands-on training in modern studio techniques, focusing on digital audio workstations (DAW), mixing, and live sound engineering.' },
      ],
    },
    {
      id: 'master-capstone',
      name: "V. Master's Capstone",
      courses: [
        { code: 'MCM 710-780', name: 'Master Graduation Recital', credits: 3, description: 'The pinnacle of the MACM program, requiring the student to present a full-length professional recital or a major compositional portfolio.' },
      ],
    },
  ],
  admissions: { intro: [], sections: [] },
  graduation: { requirements: [] },
};
