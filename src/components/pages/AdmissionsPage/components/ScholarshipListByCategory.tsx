'use client';

import { Accordion } from '@/components/ui/accordion';
import { BorderedAccordionItem } from '@/components/ui/custom/BorderedAccordionItem';
import type {
  GeneralSection,
  ScholarshipCategory,
} from '@/config/scholarship-content';
import { useHashScroll } from '@/hooks/use-hash-scroll';
import { ScholarshipItemContent } from './ScholarshipItemContent';
import { ScholarshipPageSection } from './ScholarshipPageSection';

type ScholarshipListByCategoryProps = {
  generalPrinciples: string;
  categories: ScholarshipCategory[];
  generalSections: GeneralSection[];
};

const CATEGORY_SLUGS = [
  'family-relationship',
  'ministry-partnership',
  'merit-mission',
  'need-based',
];

function ProseContent({ content }: { content: string }) {
  return <div className='whitespace-pre-line'>{content}</div>;
}

export function ScholarshipListByCategory({
  generalPrinciples,
  categories,
  generalSections,
}: ScholarshipListByCategoryProps) {
  const { openValue, setOpenValue } = useHashScroll(CATEGORY_SLUGS, '');

  return (
    <div className='space-y-8'>
      <ScholarshipPageSection
        id='general-principles'
        title='General Principles'
      >
        <ProseContent content={generalPrinciples} />
      </ScholarshipPageSection>

      <section aria-labelledby='scholarship-categories-heading'>
        <h3 id='scholarship-categories-heading' className='mb-3 text-slate-900'>
          Scholarship Categories
        </h3>
        <Accordion
          type='single'
          collapsible
          className='w-full'
          value={openValue}
          onValueChange={setOpenValue}
        >
          {categories.map((category, catIndex) => {
            const isLast = catIndex === categories.length - 1;
            return (
              <BorderedAccordionItem
                key={category.id}
                value={category.id}
                id={category.id}
                isLast={isLast}
                trigger={category.title}
                triggerClassName='text-slate-900'
              >
                <Accordion type='single' collapsible className='w-full'>
                  {category.scholarships.map((scholarship, idx) => {
                    const innerIsLast =
                      idx === category.scholarships.length - 1;
                    return (
                      <BorderedAccordionItem
                        key={scholarship.id}
                        value={scholarship.id}
                        isLast={innerIsLast}
                        trigger={scholarship.title}
                        triggerClassName='text-slate-800'
                      >
                        <ScholarshipItemContent item={scholarship} />
                      </BorderedAccordionItem>
                    );
                  })}
                </Accordion>
              </BorderedAccordionItem>
            );
          })}
        </Accordion>
      </section>

      {generalSections.map((section) => (
        <ScholarshipPageSection
          key={section.id}
          id={section.id}
          title={section.title}
        >
          <ProseContent content={section.content} />
        </ScholarshipPageSection>
      ))}
    </div>
  );
}
