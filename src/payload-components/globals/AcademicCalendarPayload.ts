import { withDraftPublish } from '@/lib/payload/create-global-config';
import { revalidateAcademicCalendar } from '@/lib/payload/revalidate';

export const AcademicCalendarPayload = withDraftPublish(
  {
    slug: 'academic-calendar',
    label: 'Academic Calendar',
    admin: {
      description: '학사 일정(Academic Calendar)과 주요 행사를 학기별로 관리합니다.',
    },
    fields: [
      {
        name: 'terms',
        type: 'array',
        label: 'Semesters (학기 목록)',
        admin: {
          description: '행정 직원이 학기 단위로 일정을 추가할 수 있습니다.',
        },
        fields: [
          {
            name: 'name',
            type: 'text',
            label: 'Semester Name',
            required: true,
            admin: {
              description: '예: 2026 Spring, Fall 2025',
            },
          },
          {
            name: 'events',
            type: 'array',
            label: 'Events (일정 목록)',
            fields: [
              {
                name: 'title',
                type: 'text',
                label: 'Event Title',
                required: true,
                admin: {
                  description: '예: Registration, Classes Begin',
                },
              },
              {
                name: 'startDate',
                type: 'date',
                label: 'Start Date',
                required: true,
                admin: {
                  description: '일정 시작일',
                  date: {
                    pickerAppearance: 'dayOnly',
                  },
                },
              },
              {
                name: 'endDate',
                type: 'date',
                label: 'End Date',
                admin: {
                  description: '당일 행사인 경우 비워두세요.',
                  date: {
                    pickerAppearance: 'dayOnly',
                  },
                },
              },
              {
                name: 'time',
                type: 'text',
                label: 'Time',
                admin: {
                  description:
                    '선택 사항. 예: 9:00 AM, 2:00–4:00 PM. 있으면 날짜 옆에 표시됩니다.',
                },
              },
            ],
          },
        ],
      },
    ],
  },
  { revalidate: revalidateAcademicCalendar },
);
