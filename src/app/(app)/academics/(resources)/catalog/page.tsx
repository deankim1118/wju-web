import {
  CatalogSection,
  type CatalogData,
} from '@/components/pages/AcademicPage/components/CatalogSection';
import { getCatalogData } from '@/lib/payload/queries';

export default async function AcademicCatalogPage() {
  const catalog = (await getCatalogData({ depth: 1 })) as CatalogData;

  return (
    <article className='space-y-6'>
      <CatalogSection catalog={catalog} />
    </article>
  );
}
