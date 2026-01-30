import { AcademicCalendarSection } from '@/components/pages/AcademicPage/components/AcademicCalendarSection';
import { getAcademicCalendarData } from '@/lib/payload/queries';
import type { AcademicCalendar } from '@/payload-types';

export default async function AcademicCalendarPage() {
  const data = (await getAcademicCalendarData({
    depth: 1,
  })) as AcademicCalendar | null;
  const terms = data?.terms ?? [];

  return (
    <article className="space-y-6">
      <AcademicCalendarSection terms={terms} />
    </article>
  );
}
