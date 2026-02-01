import {
  SectionResourcesLayout,
  type SectionSidebarConfig,
} from '@/components/layout/SectionResourcesLayout';
import { callToActionContent } from '@/config/home-content';
import { ROUTES } from '@/config/routes';

const ADMISSIONS_SIDEBAR_CONFIG: SectionSidebarConfig = {
  ariaLabel: 'Admissions navigation',
  groupTitle: 'Admissions',
  links: [
    { href: ROUTES.ADMISSIONS.ROOT, label: 'Admissions' },
    { href: ROUTES.ADMISSIONS.FINANCIAL_AID, label: 'Tuition & Fees' },
    { href: ROUTES.ADMISSIONS.SCHOLARSHIPS, label: 'Scholarships' },
  ],
};

export default function AdmissionsResourcesLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const { href, buttonText } = callToActionContent;

  return (
    <SectionResourcesLayout
      sectionLabel='Admissions'
      title='Admissions'
      sidebarConfig={ADMISSIONS_SIDEBAR_CONFIG}
      primaryCtaHref={href}
      primaryCtaLabel={buttonText}
      applyHref={ROUTES.ADMISSIONS.APPLY}
    >
      {children}
    </SectionResourcesLayout>
  );
}
