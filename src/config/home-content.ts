/**
 * Home Page Content Configuration
 * All hardcoded content for the homepage is centralized here for easy maintenance.
 */

import {
  Award,
  ClipboardList,
  HeartHandshake,
  type LucideIcon,
} from 'lucide-react';
import { ROUTES } from './routes';

// ============================================================================
// TYPE DEFINITIONS
// ============================================================================

export type CallToActionContent = {
  title: string;
  description: string;
  buttonText: string;
  href: string;
};

export type TextWithImageContent = {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
};

export type TwoColumnTextContent = {
  title: string;
  content: string;
  link: {
    text: string;
    href: string;
    showArrow: boolean;
  };
  spacing: 'tight' | 'normal' | 'loose';
};

export type AcademicProgram = {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  linkHref: string;
};

export type AcademicsSectionContent = {
  title: string;
  programs: AcademicProgram[];
};

export type ResourceItem = {
  icon: LucideIcon;
  title: string;
  description: string;
  linkHref: string;
};

export type InformationResourcesContent = {
  title: string;
  resources: ResourceItem[];
};

export type FooterCTAButton = {
  href: string;
  label: string;
};

export type FooterContent = {
  logoUrl: string;
  logoAlt: string;
  ctaButtons: FooterCTAButton[];
  quote: string;
  copyright: string;
};

// ============================================================================
// CONTENT DATA
// ============================================================================

/**
 * Call to Action Section
 */
export const callToActionContent: CallToActionContent = {
  title: 'BE A WJU',
  description:
    "WJU is where great stories begin. It's time to start yours. Find out how.",
  buttonText: 'REQUEST INFORMATION',
  href: ROUTES.PLACEHOLDER,
};

/**
 * Why WJU Section (Text with Image)
 */
export const whyWjuContent: TextWithImageContent = {
  title: 'Why Washington Jabez University?',
  description: `Washington Jabez University is a religious institution exempt from state regulation and oversight in the Commonwealth of Virginia.

Washington Jabez University is a nondenominational Christian and educational organization, existing for the purpose of preparing students for the Lord's service.

Washington Jabez does not discriminate on the basis of race, sex, age, national or ethnic origin, or handicap in administration of its educational policies, admissions policies, and other school-administered programs.`,
  imageUrl: '/wju-hero-img.png',
  imageAlt: 'Washington Jabez University Campus',
};

/**
 * Faculty Mentorship Section (Two Column Text)
 */
export const facultyMentorshipContent: TwoColumnTextContent = {
  title: 'Guides for Your Calling',
  content:
    'Our faculty are not just scholars; they are pastors, counselors, and missionaries who are deeply committed to investing in your life. They will walk alongside you, guiding your academic growth and nurturing your spiritual formation for a lifetime of faithful ministry.',
  link: {
    text: 'Meet Your Mentors',
    href: ROUTES.PLACEHOLDER,
    showArrow: true,
  },
  spacing: 'tight',
};

/**
 * Academics Section
 */
export const academicsContent: AcademicsSectionContent = {
  title: 'Academics',
  programs: [
    {
      title: 'Undergraduate Education',
      description:
        'Rich learning experiences that provide a broad liberal arts foundation and deep subject-area expertise',
      imageUrl: '/wju-hero-img.png',
      imageAlt: 'Undergraduate Education',
      linkHref: ROUTES.PLACEHOLDER,
    },
    {
      title: 'Graduate Education',
      description:
        'Unsurpassed opportunities to participate in the advancement of entire fields of knowledge',
      imageUrl: '/wju-hero-img.png',
      imageAlt: 'Graduate Education',
      linkHref: ROUTES.PLACEHOLDER,
    },
    {
      title: 'Doctoral Education',
      description:
        'Rich learning experiences that provide a broad liberal arts foundation and deep subject-area expertise',
      imageUrl: '/wju-hero-img.png',
      imageAlt: 'Doctoral Education',
      linkHref: ROUTES.PLACEHOLDER,
    },
  ],
};

/**
 * Information & Resources Section
 */
export const informationResourcesContent: InformationResourcesContent = {
  title: 'Information & Resources',
  resources: [
    {
      icon: Award,
      title: 'Scholarships',
      description:
        'Recognizing your gifts with a wide range of merit-based and ministry-focused awards.',
      linkHref: ROUTES.PLACEHOLDER,
    },
    {
      icon: ClipboardList,
      title: 'Admissions Procedure',
      description:
        'Find all the information, requirements, and deadlines to begin your theological journey.',
      linkHref: ROUTES.PLACEHOLDER,
    },
    {
      icon: HeartHandshake,
      title: 'Tuition & Financial Aid',
      description:
        'Discover affordable tuition plans and scholarship opportunities to support your theological journey.',
      linkHref: ROUTES.PLACEHOLDER,
    },
  ],
};

/**
 * Footer Content
 */
export const footerContent: FooterContent = {
  logoUrl: '/wju-logo-mobile.png',
  logoAlt: 'Washington Jabez University Logo',
  ctaButtons: [
    {
      href: ROUTES.APPLY,
      label: 'Apply WJU',
    },
    {
      href: ROUTES.REQUEST_INFO,
      label: 'Request Information',
    },
  ],
  quote:
    '"Go therefore and make disciples of all nations, teaching them to observe all that I have commanded you." (Matthew 28:19-20)',
  copyright:
    'Copyright © 2026 • Washington Jabez University. All rights reserved.',
};
