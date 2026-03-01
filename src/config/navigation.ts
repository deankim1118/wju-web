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
  /** Use CTA/action button styling (e.g. Apply button in header) */
  variant?: 'action';
};

export type MenuFeature = {
  title: string;
  description: string;
  href: string;
};

export type AcademicProgramGroup = {
  category: 'Undergraduate' | 'Graduate' | 'Doctoral' | 'Church Music';
  items: NavLink[];
};

// Top Bar Navigation (Quick access links)
export const topBarNavigationLeft: NavLink[] = [
  // { label: 'Quick Links', href: ROUTES.QUICK_LINKS },
  { label: 'Visit Us', href: ROUTES.VISIT },
  { label: 'Request Info', href: ROUTES.REQUEST_INFO },
];

// Top Bar Right (My WJU, Language, Support - Apply is in mainNavigation)
export const topBarNavigationRight = {
  myWju: { label: 'My WJU', href: ROUTES.MY_WJU },
  language: { label: 'Language', href: ROUTES.LANGUAGE },
  support: { label: 'Support', href: ROUTES.SUPPORT },
} as const;

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
        label: 'Academic Calendar',
        href: ROUTES.ACADEMICS.CALENDAR,
        description:
          'View important dates, semesters, and academic milestones.',
      },
      {
        label: 'Course List',
        href: ROUTES.ACADEMICS.COURSELIST,
        description:
          'Explore our comprehensive programs in theology and ministry.',
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
        label: 'Scholarships',
        href: ROUTES.ADMISSIONS.SCHOLARSHIPS,
        description:
          'Explore financial support options for your theological education.',
      },
      {
        label: 'Tuition & Fees',
        href: ROUTES.ADMISSIONS.COSTS,
        description:
          'Discover affordable tuition plans to support your theological journey.',
      },
    ],
  },
  {
    label: 'WJU Academy',
    href: ROUTES.WJU_ACADEMY,
  },
  {
    label: 'Church Music',
    href: ROUTES.CHURCH_MUSIC,
  },
  {
    label: 'Apply',
    href: ROUTES.APPLY,
    variant: 'action',
  },
];

/**
 * Academics Mega Menu (Degree-level program groups)
 * Single source of truth for the Academics mega menu UI.
 */
export const academicProgramGroups: AcademicProgramGroup[] = [
  {
    category: 'Church Music',
    items: [
      {
        label: 'Bachelor of Church Music (BACM)',
        href: ROUTES.ACADEMICS.BACM,
        description:
          'Undergraduate training in sacred music and worship leadership.',
      },
      {
        label: 'Master of Church Music (MACM)',
        href: ROUTES.ACADEMICS.MACM,
        description: 'Advanced study in church music ministry and performance.',
      },
      {
        label: 'Graduate Diploma in Church Music (GDCM)',
        href: ROUTES.ACADEMICS.GDCM,
        description:
          'Focused graduate-level credential in sacred music practice.',
      },
    ],
  },
  {
    category: 'Undergraduate',
    items: [
      {
        label: 'Bachelor of Theology (ThB)',
        href: ROUTES.ACADEMICS.THB,
        description: 'Biblical and theological foundation for ministry.',
      },
      {
        label: 'Bachelor of Christian & Counseling (BCC)',
        href: ROUTES.ACADEMICS.BCC,
        description: 'Christian formation with counseling fundamentals.',
      },
      {
        label: 'Bachelor of Comparative Religious Studies (BCRS)',
        href: ROUTES.ACADEMICS.BCRS,
        description: 'Study world religions through a biblical lens.',
      },
    ],
  },
  {
    category: 'Graduate',
    items: [
      {
        label: 'Master of Divinity (MDiv)',
        href: ROUTES.ACADEMICS.MDIV,
        description: 'Professional preparation for pastoral ministry.',
      },
      {
        label: 'Master of Theology (ThM)',
        href: ROUTES.ACADEMICS.THM,
        description: 'Advanced theological study and research.',
      },
      {
        label: 'Master of Christian Counseling (MCC)',
        href: ROUTES.ACADEMICS.MCC,
        description: 'Counseling training grounded in Scripture.',
      },
      {
        label: 'Master of Christian Education (MCE)',
        href: ROUTES.ACADEMICS.MCE,
        description: 'Equip teachers and leaders for Christian education.',
      },
      {
        label: 'Master of Comparative Religious Studies (MCRS)',
        href: ROUTES.ACADEMICS.MCRS,
        description: 'Graduate-level study of religions and apologetics.',
      },
      {
        label: 'Master of Chaplaincy (MChap)',
        href: ROUTES.ACADEMICS.MCHAP,
        description: 'Ministry preparation for institutional chaplaincy.',
      },
    ],
  },
  {
    category: 'Doctoral',
    items: [
      {
        label: 'Doctor of Ministry (DMin)',
        href: ROUTES.ACADEMICS.DMIN,
        description: 'Advanced professional ministry leadership.',
      },
    ],
  },
];

/**
 * Footer Navigation (derived from mainNavigation)
 * Single source of truth: footer links use the same routes as DesktopMainNav.
 * Only mainNavigation needs to be updated; footer stays in sync automatically.
 */
function buildFooterNavigation(): NavSection[] {
  const about = mainNavigation.find((n) => n.href === ROUTES.ABOUT.ROOT);
  const academics = mainNavigation.find(
    (n) => n.href === ROUTES.ACADEMICS.ROOT,
  );
  const admissions = mainNavigation.find(
    (n) => n.href === ROUTES.ADMISSIONS.ROOT,
  );

  const toNavLinks = (items: NavLink[] | undefined) =>
    items?.map(({ label, href }) => ({ label, href })) ?? [];

  return [
    {
      title: 'About Us',
      links: [
        { label: 'Who We Are', href: ROUTES.ABOUT.ROOT },
        ...toNavLinks(about?.submenu),
      ],
    },
    {
      title: 'Academics',
      links: [
        { label: 'Academic Programs', href: ROUTES.ACADEMICS.ROOT },
        { label: 'Church Music', href: ROUTES.CHURCH_MUSIC },
        ...toNavLinks(academics?.submenu),
      ],
    },
    {
      title: 'Admissions',
      links: [
        { label: 'Admissions', href: ROUTES.ADMISSIONS.ROOT },
        ...toNavLinks(admissions?.submenu),
      ],
    },
    {
      title: 'Get Involved',
      links: [
        { label: 'WJU Academy', href: ROUTES.WJU_ACADEMY },
        { label: 'Request Information', href: ROUTES.REQUEST_INFO },
        { label: 'Support', href: ROUTES.SUPPORT },
      ],
    },
  ];
}

export const footerNavigation: NavSection[] = buildFooterNavigation();

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
