/**
 * Central Navigation Configuration
 * All navigation links and labels are defined here for consistency across the site
 */

import { ROUTES } from './routes';

export type NavLink = {
  label: string;
  href: string;
  description?: string; // For navigation menu descriptions
};

export type NavSection = {
  title: string;
  links: NavLink[];
};

export type NavItemWithSubmenu = {
  label: string;
  href: string;
  submenu?: NavLink[];
};

export type MenuFeature = {
  title: string;
  description: string;
  href: string;
};

// Top Bar Navigation (Quick access links)
export const topBarNavigation: NavLink[] = [
  { label: 'Quick Links', href: ROUTES.QUICK_LINKS },
  { label: 'Visit Us', href: ROUTES.VISIT },
  { label: 'Request Info', href: ROUTES.REQUEST_INFO },
];

// Featured Menu Descriptions (for navigation submenu cards)
// These act as "overview" links to the main section page
export const menuFeatures: Record<string, MenuFeature> = {
  About: {
    title: 'A Word from Chairman',
    description:
      'Discover our mission, faith, and commitment to training faithful servants for gospel ministry worldwide.',
    href: ROUTES.ABOUT.ROOT,
  },
  Academics: {
    title: 'Academic Programs',
    description:
      'Explore our comprehensive theological education that integrates Scripture, tradition, and ministry.',
    href: ROUTES.ACADEMICS.ROOT,
  },
  Admissions: {
    title: 'Join Our Community',
    description:
      'Start your journey toward faithful ministry through spiritual formation and academic excellence.',
    href: ROUTES.ADMISSIONS.ROOT,
  },
};

// Main Navigation (Primary menu items with optional submenus)
export const mainNavigation: NavItemWithSubmenu[] = [
  {
    label: 'About',
    href: ROUTES.ABOUT.ROOT,
    submenu: [
      {
        label: 'Mission & Faith',
        href: ROUTES.ABOUT.MISSION_FAITH,
        description: 'The core beliefs and theology guiding our mission.',
      },
      {
        label: 'Faculty & Staff',
        href: ROUTES.ABOUT.FACULTY_STAFF,
        description: 'Dedicated scholars mentoring future gospel ministers.',
      },
      {
        label: 'Institutional Integrity',
        href: ROUTES.ABOUT.INTEGRITY,
        description: 'Our commitment to transparency & accountability.',
      },
    ],
  },
  {
    label: 'Academics',
    href: ROUTES.ACADEMICS.ROOT,
    submenu: [
      {
        label: 'Degree Programs',
        href: ROUTES.ACADEMICS.PROGRAMS,
        description:
          'Explore our comprehensive programs in theology and ministry.',
      },
      {
        label: 'Academic Calendar',
        href: ROUTES.ACADEMICS.CALENDAR,
        description:
          'View important dates, semesters, and academic milestones.',
      },
      {
        label: 'Course Catalog',
        href: ROUTES.ACADEMICS.CATALOG,
        description: 'Browse our full curriculum and course offerings.',
      },
    ],
  },
  {
    label: 'Admissions',
    href: ROUTES.ADMISSIONS.ROOT,
    submenu: [
      {
        label: 'Apply Now',
        href: ROUTES.ADMISSIONS.APPLY,
        description: 'Start your journey toward faithful ministry and service.',
      },
      {
        label: 'Scholarships & Aid',
        href: ROUTES.ADMISSIONS.SCHOLARSHIPS,
        description:
          'Explore financial support options for your theological education.',
      },
      {
        label: 'Visit Campus',
        href: ROUTES.ADMISSIONS.VISIT,
        description:
          'Experience our community and discover life at WJU Seminary.',
      },
    ],
  },
  {
    label: 'Church Music',
    href: ROUTES.CHURCH_MUSIC,
  },
];

// Footer Navigation Sections
export const footerNavigation: NavSection[] = [
  {
    title: 'About Us',
    links: [
      { label: 'Mission of Faith', href: ROUTES.ABOUT.MISSION_FAITH },
      { label: 'INTEGRITY', href: ROUTES.ABOUT.INTEGRITY },
      { label: 'Faculty & Staff', href: ROUTES.ABOUT.FACULTY_STAFF },
    ],
  },
  {
    title: 'Academics',
    links: [
      { label: 'Degree Programs', href: ROUTES.ACADEMICS.PROGRAMS },
      { label: 'Admissions', href: ROUTES.ADMISSIONS.ROOT },
      { label: 'Scholarships & Aid', href: ROUTES.ADMISSIONS.SCHOLARSHIPS },
      { label: 'Academic Calendar', href: ROUTES.ACADEMICS.CALENDAR },
      { label: 'Course Catalog', href: ROUTES.ACADEMICS.CATALOG },
    ],
  },
  {
    title: 'Get Involved',
    links: [
      { label: 'Apply Now', href: ROUTES.APPLY },
      { label: 'Visit Us', href: ROUTES.VISIT },
      { label: 'Request Information', href: ROUTES.REQUEST_INFO },
    ],
  },
];

// Action Buttons (CTA buttons that appear across the site)
export const actionButtons = {
  apply: { label: 'Apply', href: ROUTES.APPLY },
  myWju: { label: 'My WJU', href: ROUTES.MY_WJU },
  language: { label: 'Language', href: ROUTES.LANGUAGE },
  support: { label: 'Support', href: ROUTES.SUPPORT },
} as const;

// Social Media Links (External social media profiles)
export type SocialMediaLink = {
  platform: string;
  href: string;
  iconName: string;
  ariaLabel: string;
};

export const socialMediaLinks: SocialMediaLink[] = [
  {
    platform: 'instagram',
    href: ROUTES.EXTERNAL.INSTAGRAM,
    iconName: 'instagram',
    ariaLabel: 'Visit our Instagram',
  },
  {
    platform: 'youtube',
    href: ROUTES.EXTERNAL.YOUTUBE,
    iconName: 'youtube',
    ariaLabel: 'Visit our YouTube channel',
  },
];
