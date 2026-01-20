/**
 * Centralized Route Configuration
 * All application URL paths are defined here for consistency and maintainability.
 *
 * Usage:
 * - Import ROUTES from this file
 * - Use ROUTES.ABOUT.ROOT instead of '/about'
 * - Never hardcode URLs directly in components
 */

export const ROUTES = {
  // Root
  HOME: '/',

  // Top Bar Quick Links
  QUICK_LINKS: '/quick-links',
  VISIT: '/visit',
  REQUEST_INFO: '/request-info',

  // About Section
  ABOUT: {
    ROOT: '/about',
    MISSION_FAITH: '/about/mission-faith',
    FACULTY_STAFF: '/about/faculty-staff',
    INTEGRITY: '/about/integrity',
  },

  // Academics Section
  ACADEMICS: {
    ROOT: '/academics',
    PROGRAMS: '/academics/programs',
    CALENDAR: '/academics/calendar',
    CATALOG: '/academics/catalog',
    // Degree Programs (Mega menu)
    MDIV: '/academics/mdiv',
    THM: '/academics/thm',
    MCC: '/academics/mcc',
    MCE: '/academics/mce',
    MCRS: '/academics/mcrs',
    MCHAP: '/academics/mchap',
    DMIN: '/academics/dmin',
    BCRS: '/academics/bcrs',
    THB: '/academics/thb',
    BCC: '/academics/bcc',
  },

  // Admissions Section
  ADMISSIONS: {
    ROOT: '/admissions',
    APPLY: '/admissions/apply',
    SCHOLARSHIPS: '/admissions/scholarships',
    VISIT: '/admissions/visit',
  },

  // Other Main Pages
  CHURCH_MUSIC: '/church-music',
  WJU_ACADEMY: '/wju-academy',
  APPLY: '/apply',

  // User Account
  MY_WJU: '/my-wju',

  // Settings/Preferences
  LANGUAGE: '/language',
  SUPPORT: '/support',

  // Placeholder/Temporary Links
  PLACEHOLDER: '#',

  // External Links
  EXTERNAL: {
    INSTAGRAM: 'https://www.instagram.com/wju',
    YOUTUBE: 'https://www.youtube.com/@wju',
  },

  // Anchor Links (Internal page navigation)
  ANCHORS: {
    MAIN_CONTENT: '#maincontent',
  },
} as const;

/**
 * Type-safe route access
 * TypeScript will autocomplete and validate all route paths
 */
export type Routes = typeof ROUTES;
