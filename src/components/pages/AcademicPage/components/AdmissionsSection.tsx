import { CheckCircle } from "lucide-react";

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
      {/* Header */}
      <div className="space-y-2">
        <h2
          id="admissions-heading"
          className="uppercase tracking-wide text-slate-900"
        >
          Admission Requirements
        </h2>
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
                <li
                  key={idx}
                  className="flex items-start gap-3 text-slate-900"
                >
                  <CheckCircle
              className="size-4 shrink-0 text-secondary mt-1"
              aria-hidden />
                  {/* <span className="text-slate-900 font-medium shrink-0">•</span> */}
                  <span className="text-base leading-relaxed">{item}</span>
                  {section.note && (
                    <span className="text-xs text-muted-foreground">
                      {section.note}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
