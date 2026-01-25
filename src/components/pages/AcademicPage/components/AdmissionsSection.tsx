import { SectionHeading } from './SectionHeading';
import { RequirementItem } from './RequirementItem';

type AdmissionsSectionProps = {
  intro: string[];
  sections: {
    id: string;
    title: string;
    items: string[];
    note?: string;
  }[];
};

export function AdmissionsSection({ intro, sections }: AdmissionsSectionProps) {
  if (sections.length === 0) {
    return null;
  }

  return (
    <section aria-labelledby="admissions-heading" className="space-y-8">
      <div className="space-y-2">
        <SectionHeading
          id="admissions-heading"
          title="Admission Requirements"
        />
        {intro.length > 0 && (
          <div className="space-y-2">
            {intro.map((paragraph, i) => (
              <p key={i} className="text-sm text-slate-600 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        )}
      </div>

      {/* Sections */}
      <div className="space-y-5">
        {sections.map((section, sectionIndex) => (
          <div
            key={section.id}
            className={
              sectionIndex < sections.length - 1
                ? 'border-b border-slate-200 pb-5'
                : ''
            }
          >
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-4">
              {section.title}
            </h3>
            <ul className="space-y-3" role="list">
              {section.items.map((item, idx) => (
                <RequirementItem key={idx} note={section.note}>
                  {item}
                </RequirementItem>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
