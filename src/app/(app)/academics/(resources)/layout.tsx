import {
  SectionResourcesLayout,
  type SectionSidebarConfig,
} from '@/components/layout/SectionResourcesLayout';
import { callToActionContent } from '@/config/home-content';
import { ROUTES } from '@/config/routes';
import {
  ACADEMICS_LINK_CARDS,
  ACADEMICS_LINK_CARDS_TITLE,
} from '@/config/academic-link-content';

const ACADEMICS_SIDEBAR_CONFIG: SectionSidebarConfig = {
  ariaLabel: 'Academic resources',
  groupTitle: 'Resources',
  parentLink: { href: ROUTES.ACADEMICS.ROOT, label: 'Academic Department' },
  links: [
    { href: ROUTES.ACADEMICS.CALENDAR, label: 'Academic Calendar' },
    { href: ROUTES.ACADEMICS.COURSELIST, label: 'Course List' },
    { href: ROUTES.ACADEMICS.CATALOG, label: 'Academic Catalog' },
  ],
};

export default function ResourcesLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const { href, buttonText } = callToActionContent;

  return (
    <SectionResourcesLayout
      sectionLabel="Academics"
      title="Academic Resources"
      sidebarConfig={ACADEMICS_SIDEBAR_CONFIG}
      primaryCtaHref={href}
      primaryCtaLabel={buttonText}
      applyHref={href}
      linkCardsSection={{
        title: ACADEMICS_LINK_CARDS_TITLE,
        items: ACADEMICS_LINK_CARDS,
      }}
    >
      {children}
    </SectionResourcesLayout>
  );
}
