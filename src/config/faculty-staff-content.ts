/**
 * Faculty & Staff Page Content
 *
 * All faculty and staff data is centralized here.
 * To update a person's photo, name, title, or degrees — edit only this file.
 */

export type FacultyDegree = {
  degree: string;
  school: string;
};

export type FacultyMember = {
  id: string;
  name: string;
  title: string;
  degrees: FacultyDegree[];
  imageUrl: string;
  imageAlt: string;
  bio?: string;
};

export type StaffMember = {
  id: string;
  name: string;
  title: string;
  imageUrl: string;
  imageAlt: string;
};

export const FACULTY_SECTION_TITLE = 'Our Faculty';
export const STAFF_SECTION_TITLE = 'Our Staff';

export const FACULTY_MEMBERS: readonly FacultyMember[] = [
  {
    id: 'faculty-1',
    name: 'Kwangsung Park',
    title: 'Chancellor & Professor of Theology',
    degrees: [
      { degree: 'Ph.D. in Missiology', school: 'Fuller Theological Seminary' },
      { degree: 'Th.M. in New Testament', school: 'Princeton Theological Seminary' },
      { degree: 'M.Div.', school: 'Reformed Theological Seminary' },
    ],
    imageUrl: '/wju-hero-img.png',
    imageAlt: 'Dr. Kwangsung Park, Chancellor',
    bio: 'Dr. Park founded Washington Jabez University with a vision to raise up men and women of God characterized by biblical truth, holiness, prayer, and evangelism.',
  },
  {
    id: 'faculty-2',
    name: 'John Smith',
    title: 'Academic Dean & Professor of Biblical Studies',
    degrees: [
      {
        degree: 'Ph.D. in Biblical Theology',
        school: 'Westminster Theological Seminary',
      },
      {
        degree: 'M.Div.',
        school: 'Gordon-Conwell Theological Seminary',
      },
    ],
    imageUrl: '/wju-hero-img.png',
    imageAlt: 'Dr. John Smith, Academic Dean',
    bio: 'Dr. Smith brings over 20 years of experience in theological education and pastoral ministry to the WJU community.',
  },
  {
    id: 'faculty-3',
    name: 'Sarah Johnson',
    title: 'Professor of Christian Counseling',
    degrees: [
      {
        degree: 'Ph.D. in Counseling Psychology',
        school: 'Regent University',
      },
      {
        degree: 'M.A. in Christian Counseling',
        school: 'Liberty University',
      },
    ],
    imageUrl: '/wju-hero-img.png',
    imageAlt: 'Dr. Sarah Johnson, Professor of Christian Counseling',
    bio: 'Dr. Johnson specializes in integrating faith and psychology in counseling practice, equipping students for effective ministry.',
  },
  {
    id: 'faculty-4',
    name: 'David Lee',
    title: 'Professor of Church History & Ministry',
    degrees: [
      {
        degree: 'Ph.D. in Church History',
        school: 'Trinity Evangelical Divinity School',
      },
      {
        degree: 'Th.M.',
        school: 'Dallas Theological Seminary',
      },
    ],
    imageUrl: '/wju-hero-img.png',
    imageAlt: 'Dr. David Lee, Professor of Church History',
    bio: 'Dr. Lee brings deep historical insight to ministerial training, helping students understand the rich heritage of the Christian faith.',
  },
];

export const STAFF_MEMBERS: readonly StaffMember[] = [
  {
    id: 'staff-1',
    name: 'Emily Chen',
    title: 'Academic Registrar',
    imageUrl: '/wju-hero-img.png',
    imageAlt: 'Emily Chen, Academic Registrar',
  },
  {
    id: 'staff-2',
    name: 'Michael Kim',
    title: 'Director of Admissions',
    imageUrl: '/wju-hero-img.png',
    imageAlt: 'Michael Kim, Director of Admissions',
  },
  {
    id: 'staff-3',
    name: 'Grace Park',
    title: 'Student Services Coordinator',
    imageUrl: '/wju-hero-img.png',
    imageAlt: 'Grace Park, Student Services Coordinator',
  },
  {
    id: 'staff-4',
    name: 'Daniel Yoon',
    title: 'Financial Aid Officer',
    imageUrl: '/wju-hero-img.png',
    imageAlt: 'Daniel Yoon, Financial Aid Officer',
  },
  {
    id: 'staff-5',
    name: 'Rachel Cho',
    title: 'Library & Resources Manager',
    imageUrl: '/wju-hero-img.png',
    imageAlt: 'Rachel Cho, Library & Resources Manager',
  },
  {
    id: 'staff-6',
    name: 'James Oh',
    title: 'IT & Campus Support',
    imageUrl: '/wju-hero-img.png',
    imageAlt: 'James Oh, IT & Campus Support',
  },
];
