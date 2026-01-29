type ResourcePageHeaderProps = {
  title: string;
  description: string;
  id?: string;
};

/**
 * Academic Resources 페이지들의 공통 헤더 컴포넌트
 * (Calendar, Catalog, Course List 등에서 재사용)
 */
export function ResourcePageHeader({
  title,
  description,
  id,
}: ResourcePageHeaderProps) {
  const headingId = id ?? `${title.toLowerCase().replace(/\s+/g, '-')}-heading`;

  return (
    <header>
      <h2 id={headingId} className='tracking-tight'>
        {title}
      </h2>
      <p className='mt-1 pl-2 text-sm text-muted-foreground'>{description}</p>
    </header>
  );
}
