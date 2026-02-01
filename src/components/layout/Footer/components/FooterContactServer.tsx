import { getFooterData } from '@/lib/payload/queries';
import { FooterContact } from './FooterContact';

/**
 * FooterContactServer - Server Component
 *
 * Payload CMS에서 Footer 데이터를 직접 fetch하여
 * FooterContact 컴포넌트에 전달합니다.
 */
export async function FooterContactServer() {
  const footerData = await getFooterData();

  return <FooterContact {...footerData?.contact} />;
}
