import { Separator } from '@/components/ui/separator';
import { POLICY_SECTIONS, type PolicyItem, type PolicySection } from '@/config/tuition-content';
import { PageSection } from './PageSection';

function PolicyItem({ item }: { item: PolicyItem }) {
  return (
    <div className='space-y-1'>
      <p className='text-sm font-semibold text-slate-900'>{item.title}</p>
      <p className='text-sm leading-relaxed text-slate-700'>{item.content}</p>
    </div>
  );
}

function PolicyCard({ section }: { section: PolicySection }) {
  return (
    <PageSection id={section.id} title={section.title}>
      <div className='space-y-1'>
        {section.items.map((item, idx) => (
          <div key={item.title}>
            <PolicyItem item={item} />
            {idx < section.items.length - 1 && <Separator className='my-4' />}
          </div>
        ))}
      </div>
    </PageSection>
  );
}

export function FinancialPoliciesSection() {
  return (
    <>
      {POLICY_SECTIONS.map((section) => (
        <PolicyCard key={section.id} section={section} />
      ))}
    </>
  );
}
