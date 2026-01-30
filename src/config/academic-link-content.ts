import { ROUTES, type Routes } from './routes';

type AcademicHref = Routes['ACADEMICS'][keyof Routes['ACADEMICS']];

export type AcademicLinkCard = {
  title: string;
  href: AcademicHref;
  imageUrl: string;
  imageAlt: string;
  ctaLabel: string;
};

/**
 * ACADEMICS 페이지 하단 Link 섹션 카드 구성
 * - 라우트/텍스트/이미지는 여기서만 수정하도록 중앙화
 * - 현재 페이지 링크는 컴포넌트에서 자동 제외
 */

export const ACADEMICS_LINK_CARDS_TITLE = 'Academic Departments';

export const ACADEMICS_LINK_CARDS: readonly AcademicLinkCard[] = [
  {
    title: 'ACADEMIC Programs',
    href: ROUTES.ACADEMICS.ROOT,
    imageUrl: '/wju-hero-img.png',
    imageAlt: 'Washington Jabez University campus',
    ctaLabel: 'discover',
  },
  {
    title: 'Academic Calendar',
    href: ROUTES.ACADEMICS.CALENDAR,
    imageUrl: '/bible.jpg',
    imageAlt: 'Open Bible',
    ctaLabel: 'discover',
  },
  {
    title: 'Academic Catalog',
    href: ROUTES.ACADEMICS.CATALOG,
    imageUrl: '/wju-hero-img.png',
    imageAlt: 'Washington Jabez University faculty',
    ctaLabel: 'discover',
  },
  {
    title: 'Course List',
    href: ROUTES.ACADEMICS.COURSELIST,
    imageUrl: '/wju-hero-img.png',
    imageAlt: 'Institutional integrity at WJU',
    ctaLabel: 'discover',
  },
] as const;

