import { CourseListByProgram } from '@/components/pages/AcademicPage/components/CourseListByProgram';
import { ResourcePageHeader } from '@/components/pages/AcademicPage/components/ResourcePageHeader';
import { getCurriculumCoursesByProgram } from '@/config/academics/program-extended';

export default function CourseListPage() {
  const byProgram = getCurriculumCoursesByProgram();

  return (
    <article className='space-y-6' aria-labelledby='course-list-heading'>
      <ResourcePageHeader
        title='Course List'
        description='Browse courses by program. Descriptions are shown under each course.'
        id='course-list-heading'
      />
      <CourseListByProgram byProgram={byProgram} />
    </article>
  );
}
