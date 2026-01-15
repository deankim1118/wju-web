/**
 * Central Navigation Configuration
 * All navigation links and labels are defined here for consistency across the site
 */

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
};

// Top Bar Navigation (Quick access links)
export const topBarNavigation: NavLink[] = [
  { label: 'Quick Links', href: '/quick-links' },
  { label: 'Visit Us', href: '/visit' },
  { label: 'Request Info', href: '/request-info' },
];

// Featured Menu Descriptions (for navigation submenu cards)
// These act as "overview" links to the main section page
export const menuFeatures: Record<string, MenuFeature> = {
  About: {
    title: 'A Word from Chairman',
    description:
      'Discover our mission, faith, and commitment to training faithful servants for gospel ministry worldwide.',
  },
  Academics: {
    title: 'Academic Programs',
    description:
      'Explore our comprehensive theological education that integrates Scripture, tradition, and ministry.',
  },
  Admissions: {
    title: 'Join Our Community',
    description:
      'Start your journey toward faithful ministry through spiritual formation and academic excellence.',
  },
};

// Main Navigation (Primary menu items with optional submenus)
export const mainNavigation: NavItemWithSubmenu[] = [
  {
    label: 'About',
    href: '/about',
    submenu: [
      {
        label: 'Statement of Faith',
        href: '/about/statement-of-faith',
        description:
          'Our core beliefs and theological foundations that guide our seminary.',
      },
      {
        label: 'Mission & Vision',
        href: '/about/mission-vision',
        description:
          'Discover our calling to equip faithful servants for gospel ministry.',
      },
      {
        label: 'Our History',
        href: '/about/history',
        description: 'Learn about our heritage and journey since our founding.',
      },
      {
        label: 'Faculty & Staff',
        href: '/about/faculty-staff',
        description:
          'Meet the dedicated scholars and leaders shaping future ministers.',
      },
    ],
  },
  {
    label: 'Academics',
    href: '/academics',
    submenu: [
      {
        label: 'Degree Programs',
        href: '/academics/programs',
        description:
          'Explore our comprehensive programs in theology and ministry.',
      },
      {
        label: 'Academic Calendar',
        href: '/academics/calendar',
        description:
          'View important dates, semesters, and academic milestones.',
      },
      {
        label: 'Course Catalog',
        href: '/academics/catalog',
        description: 'Browse our full curriculum and course offerings.',
      },
    ],
  },
  {
    label: 'Admissions',
    href: '/admissions',
    submenu: [
      {
        label: 'Apply Now',
        href: '/admissions/apply',
        description: 'Start your journey toward faithful ministry and service.',
      },
      {
        label: 'Scholarships & Aid',
        href: '/admissions/scholarships',
        description:
          'Explore financial support options for your theological education.',
      },
      {
        label: 'Visit Campus',
        href: '/admissions/visit',
        description:
          'Experience our community and discover life at WJU Seminary.',
      },
    ],
  },
  {
    label: 'Church Music',
    href: '/church-music',
  },
];

// Footer Navigation Sections
export const footerNavigation: NavSection[] = [
  {
    title: 'About Us',
    links: [
      { label: 'Statement of Faith', href: '/about/statement-of-faith' },
      { label: 'Mission & Vision', href: '/about/mission-vision' },
      { label: 'Our History', href: '/about/history' },
      { label: 'Faculty & Staff', href: '/about/faculty-staff' },
    ],
  },
  {
    title: 'Academics',
    links: [
      { label: 'Degree Programs', href: '/academics/programs' },
      { label: 'Admissions', href: '/admissions' },
      { label: 'Scholarships & Aid', href: '/admissions/scholarships' },
      { label: 'Academic Calendar', href: '/academics/calendar' },
      { label: 'Course Catalog', href: '/academics/catalog' },
    ],
  },
  {
    title: 'Get Involved',
    links: [
      { label: 'Apply Now', href: '/apply' },
      { label: 'Visit Us', href: '/visit' },
      { label: 'Request Information', href: '/request-info' },
    ],
  },
];

// Action Buttons (CTA buttons that appear across the site)
export const actionButtons = {
  apply: { label: 'Apply', href: '/apply' },
  myWju: { label: 'My WJU', href: '/my-wju' },
  language: { label: 'Language', href: '/language' },
  support: { label: 'Support', href: '/support' },
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
    href: 'https://www.instagram.com/wju',
    iconName: 'instagram',
    ariaLabel: 'Visit our Instagram',
  },
  {
    platform: 'youtube',
    href: 'https://www.youtube.com/@wju',
    iconName: 'youtube',
    ariaLabel: 'Visit our YouTube channel',
  },
];
