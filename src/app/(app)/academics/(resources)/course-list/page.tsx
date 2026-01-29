import { ResourcePageHeader } from '@/components/pages/AcademicPage/components/ResourcePageHeader';

export default function CourseListPage() {
  return (
    <article className='space-y-6'>
      <ResourcePageHeader
        title='Course List'
        description='Browse courses by program and term.'
        id='course-list-heading'
      />
      <div className='rounded-md border border-border bg-card p-6 text-muted-foreground'>
        <p className='text-sm'>Content coming soon.</p>
      </div>
    </article>
  );
}
