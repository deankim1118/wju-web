import { withDraftPublish } from '@/lib/payload/create-global-config';
import { revalidateChairmanMessage } from '@/lib/payload/revalidate';

export const ChairmanMessagePayload = withDraftPublish(
  {
    slug: 'chairman-message',
    label: "Chairman's Message",
    admin: {
      description: "/about - Chairman's Message 섹션에 표시될 내용을 관리합니다",
    },
    fields: [
      {
        name: 'title',
        type: 'text',
        label: '제목',
        required: true,
        defaultValue: 'A Word from Chairman of the Board',
        admin: {
          description: '섹션의 메인 제목입니다',
        },
      },
      {
        name: 'subtitle',
        type: 'text',
        label: '소제목 (선택)',
        defaultValue:
          'Washington Jabez University is dedicated to raising up men and women of holiness, prayer, and evangelism through missionary, pastoral, and lay leadership training',
        admin: {
          description: '제목 아래에 표시될 소제목입니다',
        },
      },
      {
        name: 'description',
        type: 'textarea',
        label: '설명 (선택)',
        defaultValue: `Jesus selected His disciples and equipped them in a special way to become workers of the Gospel. Following this example, Washington Jabez University (WJU) was established to raise up men and women of God characterized by biblical truth, holiness, prayer, and evangelism. Our competent faculty is totally dedicated to teaching and training theological students with deep commitment.

With this vision in mind, WJU focuses on three core objectives: missionary leadership, pastoral leadership, and lay leadership training. To achieve these goals, we offer excellent undergraduate and graduate programs designed to develop moral character and instill the intellectual and spiritual power necessary for ministry, just as the Lord provided for His disciples.`,
        admin: {
          description: '본문 내용을 입력하세요',
        },
      },
      {
        name: 'image',
        type: 'upload',
        relationTo: 'media',
        label: '이미지 (선택)',
        admin: {
          description: '섹션에 표시될 이미지를 업로드하세요',
        },
      },
      {
        name: 'author',
        type: 'text',
        label: '작성자 이름 (선택)',
        admin: {
          description: '작성자 이름을 입력하세요 (예: Kwangsung Park, Ph.D.)',
        },
      },
      {
        name: 'authorTitle',
        type: 'text',
        label: '작성자 직책 (선택)',
        admin: {
          description: '작성자의 직책을 입력하세요 (예: Chairman of the Board)',
        },
      },
    ],
  },
  { revalidate: revalidateChairmanMessage },
);
