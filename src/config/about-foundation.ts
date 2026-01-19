import { ROUTES, type Routes } from './routes';

type AboutHref = Routes['ABOUT'][keyof Routes['ABOUT']];

export type AboutLinkCard = {
  title: string;
  href: AboutHref;
  imageUrl: string;
  imageAlt: string;
  ctaLabel: string;
};

/**
 * About 페이지 하단 "Our Foundation" 섹션 카드 구성
 * - 라우트/텍스트/이미지는 여기서만 수정하도록 중앙화
 * - 현재 페이지 링크는 컴포넌트에서 자동 제외
 */

export const ABOUT_LINK_CARDS_TITLE = 'Our Indentity';

export const ABOUT_LINK_CARDS: readonly AboutLinkCard[] = [
  {
    title: 'About WJU',
    href: ROUTES.ABOUT.ROOT,
    imageUrl: '/wju-hero-img.png',
    imageAlt: 'Washington Jabez University campus',
    ctaLabel: 'discover',
  },
  {
    title: 'Mission & Faith',
    href: ROUTES.ABOUT.MISSION_FAITH,
    imageUrl: '/bible.jpg',
    imageAlt: 'Open Bible',
    ctaLabel: 'discover',
  },
  {
    title: 'Faculty & Staff',
    href: ROUTES.ABOUT.FACULTY_STAFF,
    imageUrl: '/wju-hero-img.png',
    imageAlt: 'Washington Jabez University faculty',
    ctaLabel: 'discover',
  },
  {
    title: 'Institutional Integrity',
    href: ROUTES.ABOUT.INTEGRITY,
    imageUrl: '/wju-hero-img.png',
    imageAlt: 'Institutional integrity at WJU',
    ctaLabel: 'discover',
  },
] as const;

